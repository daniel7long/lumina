import { createRouter } from '../http/app.js';
import { bad, notFound, forbidden, uid, nowIso, safeJson, HttpError, today, clamp } from '../lib/util.js';
import * as V from '../lib/validate.js';
import { verifyGoogleIdToken } from '../lib/google.js';
import * as auth from '../services/auth.js';
import * as learning from '../services/learning.js';
import * as analytics from '../services/analytics.js';
import * as ai from '../services/ai.js';
import {
  sanitizeTree, publishProblems, loadTree, saveTree, createCourse, COVER_THEMES, CATEGORIES,
} from '../services/courseTree.js';

const U = { auth: 'user' };
const ADMIN = { auth: 'admin' };
const AUTH_LIMIT = { bucket: 'auth', limit: { max: 60, windowMs: 15 * 60_000 } }; // generous: campuses share one IP; per-account throttling is in services/auth.js

export function buildRouter({ googleKeys } = {}) {
  const r = createRouter();

  r.get('/api/health', async ({ db }) => {
    await db.get('SELECT 1 AS ok');
    return { ok: true, time: nowIso() };
  });

  r.get('/api/config', ({ config }) => ({
    brand: config.brand,
    googleClientId: config.googleClientId || null,
    aiMode: config.openaiKey ? 'ai' : 'local',
    categories: CATEGORIES,
    coverThemes: COVER_THEMES,
    ratings: config.ratingBands,
    passRating: config.passRating,
  }));

  /* ───────── auth ───────── */
  r.post('/api/auth/signup', AUTH_LIMIT, async (ctx) => {
    const name = V.str(ctx.body.name, 'Name', { min: 1, max: 80 });
    return { user: await auth.signUp(ctx, { name, email: V.email(ctx.body.email), password: V.password(ctx.body.password) }) };
  });
  r.post('/api/auth/login', AUTH_LIMIT, async (ctx) => ({
    user: await auth.logIn(ctx, { email: V.email(ctx.body.email), password: V.str(ctx.body.password, 'Password', { max: 200, trim: false }) }),
  }));
  r.post('/api/auth/google', AUTH_LIMIT, async (ctx) => {
    const profile = await verifyGoogleIdToken(V.str(ctx.body.credential, 'Credential', { max: 4000 }), ctx.config.googleClientId, googleKeys);
    return { user: await auth.logInWithGoogle(ctx, profile) };
  });
  r.post('/api/auth/logout', async (ctx) => {
    await auth.logOut(ctx);
    return { ok: true };
  });
  r.get('/api/auth/me', async ({ user }) => ({ user: user ? auth.publicUser(user) : null }));
  r.patch('/api/auth/me', U, async ({ db, user, body }) => {
    const name = V.str(body.name, 'Name', { min: 1, max: 80 });
    await db.run('UPDATE users SET name = ? WHERE id = ?', [name, user.id]);
    return { user: { ...auth.publicUser(user), name } };
  });

  /* ───────── public catalogue ───────── */
  const cardOf = (c, e) => ({
    slug: c.slug, title: c.title, subtitle: c.subtitle, description: c.description, category: c.category, level: c.level,
    coverTheme: c.cover_theme, estMinutes: c.est_minutes, units: c.units ?? undefined, learners: c.learners ?? undefined,
    enrolled: !!e, progress: e ? (e.items_total ? Math.round((100 * e.items_done) / e.items_total) : 0) : undefined,
  });

  r.get('/api/catalog', { limit: { max: 120, windowMs: 60_000 } }, async ({ db, user, query }) => {
    const where = ["c.status = 'published'"];
    const params = [];
    if (query.category) { where.push('c.category = ?'); params.push(query.category); }
    if (query.q) { where.push('(LOWER(c.title) LIKE ? OR LOWER(c.description) LIKE ?)'); params.push(`%${query.q.toLowerCase()}%`, `%${query.q.toLowerCase()}%`); }
    // Paged so the catalogue stays fast with hundreds of courses.
    const pageSize = Math.min(48, Math.max(1, parseInt(query.limit, 10) || 24));
    const offset = Math.max(0, parseInt(query.offset, 10) || 0);
    const rows = await db.all(
      `SELECT c.*, (SELECT COUNT(*) FROM units u WHERE u.course_id = c.id) AS units,
              (SELECT COUNT(*) FROM enrollments e WHERE e.course_id = c.id) AS learners
         FROM courses c WHERE ${where.join(' AND ')} ORDER BY c.published_at DESC, c.id LIMIT ? OFFSET ?`,
      [...params, pageSize, offset],
    );
    const total = (await db.get(`SELECT COUNT(*) AS n FROM courses c WHERE ${where.join(' AND ')}`, params)).n;
    const mine = user ? new Map((await db.all('SELECT * FROM enrollments WHERE user_id = ?', [user.id])).map((e) => [e.course_id, e])) : new Map();
    const cats = await db.all("SELECT category, COUNT(*) AS n FROM courses WHERE status = 'published' GROUP BY category ORDER BY category");
    return {
      courses: rows.map((c) => cardOf(c, mine.get(c.id))),
      total, offset, hasMore: offset + rows.length < total,
      categories: cats.map((c) => ({ name: c.category, count: c.n })),
      allCount: cats.reduce((n, c) => n + c.n, 0),
    };
  });

  r.get('/api/catalog/:slug', async ({ db, user, params }) => {
    const { course, preview } = await learning.getCourseFor(db, params.slug, user);
    const tree = await loadTree(db, course.id);
    const e = user ? await learning.getEnrollment(db, user.id, course.id) : null;
    const nUnits = tree.units.length;
    return {
      preview,
      course: { ...cardOf({ ...course, units: nUnits }, e), description: course.description, status: course.status },
      enrollment: e ? { status: e.status, percent: e.items_total ? Math.round((100 * e.items_done) / e.items_total) : 0 } : null,
      units: tree.units.map((u) => ({
        id: u.id, title: u.title, summary: u.summary, objectives: u.objectives,
        lessons: u.lessons.map((l) => ({ id: l.id, title: l.title, outcomes: l.outcomes, sessions: l.sessions.length })),
        minutes: u.lessons.reduce((n, l) => n + l.sessions.reduce((m, s) => m + s.items.reduce((k, i) => k + i.estMinutes, 0), 0), 0),
      })),
    };
  });

  /* ───────── learner ───────── */
  r.post('/api/courses/:slug/enroll', U, async ({ db, user, params }) => {
    const { course, preview } = await learning.getCourseFor(db, params.slug, user);
    if (preview) throw bad('Publish the course before enrolling learners.');
    await learning.enroll(db, user, course);
    return { ok: true };
  });

  r.get('/api/my/courses', U, async ({ db, user, config }) => learning.myCourses(db, user, config));

  // Admins can add ?preview=1 to try a course exactly as learners see it, without saving any progress.
  const course = async (ctx) => {
    const r = await learning.getCourseFor(ctx.db, ctx.params.slug, ctx.user);
    if (ctx.query.preview === '1' && ctx.user.role === 'admin') r.preview = true;
    return r;
  };

  r.get('/api/learn/:slug', U, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    if (!preview && !(await learning.getEnrollment(ctx.db, ctx.user.id, c.id))) throw forbidden('Enrol in this course to start learning.');
    return learning.outline(ctx.db, c, ctx.user, preview);
  });

  r.get('/api/learn/:slug/items/:itemId', U, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    return learning.itemView(ctx.db, ctx.user, c, preview, ctx.params.itemId);
  });

  r.post('/api/learn/:slug/items/:itemId/complete', U, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    return learning.markComplete(ctx.db, ctx.user, c, preview, ctx.params.itemId);
  });

  r.post('/api/learn/:slug/items/:itemId/quiz', { ...U, limit: { max: 120, windowMs: 60_000 }, bucket: 'quiz' }, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    return learning.answerQuiz(ctx.db, ctx.user, c, preview, ctx.params.itemId, V.str(ctx.body.questionId, 'Question', { max: 60 }), V.str(ctx.body.optionId, 'Option', { max: 40 }));
  });

  r.post('/api/learn/:slug/items/:itemId/assessment', { ...U, bodyLimit: 128 * 1024, limit: { max: 20, windowMs: 60_000 }, bucket: 'assess' }, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    const answers = V.obj(ctx.body.answers, 'Answers');
    for (const [k, v] of Object.entries(answers)) if (typeof v !== 'string' || v.length > 6000) throw bad(`Answer "${k}" is invalid.`);
    const result = await learning.submitAssessment(ctx.db, ctx.config, ctx.user, c, preview, ctx.params.itemId, answers);
    return result;
  });

  r.post('/api/learn/:slug/heartbeat', { ...U, limit: { max: 20, windowMs: 60_000 }, bucket: 'beat' }, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    return learning.heartbeat(ctx.db, ctx.user, c, preview, V.str(ctx.body.itemId, 'Item', { max: 120 }), ctx.body.seconds);
  });

  /* notes */
  r.get('/api/learn/:slug/notes', U, async (ctx) => {
    const { course: c } = await course(ctx);
    const rows = await ctx.db.all(
      `SELECT n.id, n.item_id, n.body, n.created_at, n.updated_at FROM notes n WHERE n.user_id = ? AND n.course_id = ? ${ctx.query.itemId ? 'AND n.item_id = ?' : ''} ORDER BY n.updated_at DESC LIMIT 200`,
      ctx.query.itemId ? [ctx.user.id, c.id, ctx.query.itemId] : [ctx.user.id, c.id],
    );
    return { notes: rows.map((n) => ({ id: n.id, itemId: n.item_id, body: n.body, createdAt: n.created_at, updatedAt: n.updated_at })) };
  });
  r.post('/api/learn/:slug/notes', U, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    if (preview) throw bad('Notes are disabled in preview.');
    const itemId = V.str(ctx.body.itemId, 'Item', { max: 120 });
    await learning.loadItem(ctx.db, c, itemId);
    if (!(await learning.getEnrollment(ctx.db, ctx.user.id, c.id))) throw forbidden('Enrol first.');
    const n = (await ctx.db.get('SELECT COUNT(*) AS n FROM notes WHERE user_id = ? AND course_id = ?', [ctx.user.id, c.id])).n;
    if (n >= 2000) throw bad('You have reached the notes limit for this course.');
    const note = { id: uid(), body: V.str(ctx.body.body, 'Note', { min: 1, max: 5000 }) };
    const at = nowIso();
    await ctx.db.run('INSERT INTO notes (id, user_id, course_id, item_id, body, created_at, updated_at) VALUES (?,?,?,?,?,?,?)', [note.id, ctx.user.id, c.id, itemId, note.body, at, at]);
    return { note: { ...note, itemId, createdAt: at, updatedAt: at } };
  });
  r.put('/api/notes/:id', U, async ({ db, user, params, body }) => {
    const text = V.str(body.body, 'Note', { min: 1, max: 5000 });
    const res = await db.run('UPDATE notes SET body = ?, updated_at = ? WHERE id = ? AND user_id = ?', [text, nowIso(), params.id, user.id]);
    if (!res.changes) throw notFound('Note not found.');
    return { ok: true };
  });
  r.delete('/api/notes/:id', U, async ({ db, user, params }) => {
    const res = await db.run('DELETE FROM notes WHERE id = ? AND user_id = ?', [params.id, user.id]);
    if (!res.changes) throw notFound('Note not found.');
    return { ok: true };
  });
  r.get('/api/my/notes', U, async ({ db, user }) => {
    const rows = await db.all(
      `SELECT n.id, n.body, n.updated_at, n.item_id, i.title AS item, c.title AS course, c.slug
         FROM notes n JOIN items i ON i.id = n.item_id JOIN courses c ON c.id = n.course_id
        WHERE n.user_id = ? ORDER BY n.updated_at DESC LIMIT 300`,
      [user.id],
    );
    return { notes: rows.map((n) => ({ id: n.id, body: n.body, updatedAt: n.updated_at, itemId: n.item_id, item: n.item, course: n.course, slug: n.slug })) };
  });

  /* AI assistant */
  r.get('/api/learn/:slug/ai', U, async (ctx) => {
    const { course: c } = await course(ctx);
    const itemId = V.str(ctx.query.itemId, 'Item', { max: 120 });
    const rows = await ctx.db.all('SELECT role, content, created_at FROM ai_messages WHERE user_id = ? AND item_id = ? ORDER BY created_at DESC LIMIT 30', [ctx.user.id, itemId]);
    return { messages: rows.reverse().map((m) => ({ role: m.role, content: m.content, at: m.created_at })), mode: ctx.config.openaiKey ? 'ai' : 'local', courseId: c.id };
  });
  r.post('/api/learn/:slug/ai', { ...U, limit: { max: 12, windowMs: 60_000 }, bucket: 'ai' }, async (ctx) => {
    const { course: c, preview } = await course(ctx);
    const question = V.str(ctx.body.message, 'Message', { min: 1, max: 1000 });
    const itemId = V.str(ctx.body.itemId, 'Item', { max: 120 });
    const item = await learning.loadItem(ctx.db, c, itemId);
    if (!preview && !(await learning.getEnrollment(ctx.db, ctx.user.id, c.id))) throw forbidden('Enrol first.');
    const history = preview ? [] : (await ctx.db.all('SELECT role, content FROM ai_messages WHERE user_id = ? AND item_id = ? ORDER BY created_at DESC LIMIT 6', [ctx.user.id, itemId])).reverse();
    // Neighbouring session items give the assistant a little more context than the open page alone.
    let extraText = '';
    if (item.session_id) {
      const sibs = await ctx.db.all("SELECT kind, body FROM items WHERE session_id = ? AND id <> ? AND kind IN ('reading','video')", [item.session_id, item.id]);
      extraText = sibs.map((s) => ai.contextText({ kind: s.kind, body: safeJson(s.body, {}) })).join('\n');
    }
    const out = await ai.answer(ctx.config, { question, item, courseTitle: c.title, history, extraText });
    if (!preview) {
      const at = nowIso();
      await ctx.db.tx(async (t) => {
        await t.run('INSERT INTO ai_messages (id, user_id, course_id, item_id, role, content, created_at) VALUES (?,?,?,?,?,?,?)', [uid(), ctx.user.id, c.id, itemId, 'user', question, at]);
        await t.run('INSERT INTO ai_messages (id, user_id, course_id, item_id, role, content, created_at) VALUES (?,?,?,?,?,?,?)', [uid(), ctx.user.id, c.id, itemId, 'assistant', out.answer, new Date(Date.now() + 1).toISOString()]);
      });
    }
    return out;
  });

  /* ───────── admin ───────── */
  r.get('/api/admin/overview', ADMIN, async ({ db, config, query }) => analytics.overview(db, config, { granularity: query.granularity }));
  r.get('/api/admin/courses/:id/analytics', ADMIN, async ({ db, config, params, query }) => {
    const out = await analytics.courseAnalytics(db, config, params.id, { granularity: query.granularity });
    if (!out) throw notFound('Course not found.');
    return out;
  });

  r.get('/api/admin/users', ADMIN, async ({ db, query }) =>
    analytics.listUsers(db, {
      q: String(query.q || '').slice(0, 80),
      page: clamp(parseInt(query.page) || 1, 1, 100000),
      pageSize: clamp(parseInt(query.pageSize) || 20, 5, 100),
      sort: query.sort,
      role: ['learner', 'admin'].includes(query.role) ? query.role : '',
    }),
  );
  r.get('/api/admin/users/:id', ADMIN, async ({ db, params }) => {
    const d = await analytics.userDetail(db, params.id);
    if (!d) throw notFound('User not found.');
    return d;
  });
  r.patch('/api/admin/users/:id', ADMIN, async ({ db, user, params, body }) => {
    if (params.id === user.id) throw bad('You cannot change your own role or status.');
    const sets = [];
    const vals = [];
    if (body.status !== undefined) { sets.push('status = ?'); vals.push(V.oneOf(body.status, 'Status', ['active', 'suspended'])); }
    if (body.role !== undefined) { sets.push('role = ?'); vals.push(V.oneOf(body.role, 'Role', ['learner', 'admin'])); }
    if (!sets.length) throw bad('Nothing to update.');
    const res = await db.run(`UPDATE users SET ${sets.join(', ')} WHERE id = ?`, [...vals, params.id]);
    if (!res.changes) throw notFound('User not found.');
    if (body.status === 'suspended') await db.run('DELETE FROM sessions WHERE user_id = ?', [params.id]);
    analytics.clearAnalyticsCache();
    return { ok: true };
  });

  r.get('/api/admin/courses', ADMIN, async ({ db, config }) => ({
    courses: (await db.all(`SELECT c.id, c.slug, c.title, c.status, c.category, c.cover_theme, c.est_minutes, c.updated_at, c.published_at, c.revision,
        (SELECT COUNT(*) FROM units u WHERE u.course_id = c.id) AS units,
        (SELECT COUNT(*) FROM enrollments e WHERE e.course_id = c.id) AS enrolled
        FROM courses c ORDER BY c.updated_at DESC`)).map((c) => ({
      id: c.id, slug: c.slug, title: c.title, status: c.status, category: c.category, coverTheme: c.cover_theme, estMinutes: c.est_minutes,
      updatedAt: c.updated_at, publishedAt: c.published_at, revision: c.revision, units: c.units, enrolled: c.enrolled,
    })),
  }));

  r.post('/api/admin/courses', { ...ADMIN, bodyLimit: 8 * 1024 * 1024 }, async ({ db, user, body }) => {
    const title = V.str(body.title, 'Title', { min: 3, max: 120 });
    return createCourse(db, { title, userId: user.id, tree: body.tree && { ...body.tree, meta: { ...(body.tree.meta || {}), title } } });
  });

  r.get('/api/admin/courses/:id', ADMIN, async ({ db, params }) => {
    const t = await loadTree(db, params.id);
    if (!t) throw notFound('Course not found.');
    const { course, ...rest } = t;
    return {
      course: { id: course.id, slug: course.slug, status: course.status, revision: course.revision, updatedAt: course.updated_at, publishedAt: course.published_at },
      ...rest,
      problems: publishProblems(sanitizeTree(t)),
    };
  });

  r.put('/api/admin/courses/:id', { ...ADMIN, bodyLimit: 8 * 1024 * 1024 }, async ({ db, params, body }) => {
    const existing = await db.get('SELECT id, revision, status FROM courses WHERE id = ?', [params.id]);
    if (!existing) throw notFound('Course not found.');
    if (body.revision != null && Number(body.revision) !== existing.revision)
      throw new HttpError(409, 'Someone else changed this course since you opened it. Reload to see their changes.');
    const tree = sanitizeTree({ meta: body.meta, units: body.units });
    await db.tx((t) => saveTree(t, params.id, tree));
    analytics.clearAnalyticsCache();
    const row = await db.get('SELECT revision, updated_at FROM courses WHERE id = ?', [params.id]);
    return { ok: true, revision: row.revision, updatedAt: row.updated_at, problems: publishProblems(tree) };
  });

  r.post('/api/admin/courses/:id/publish', ADMIN, async ({ db, params }) => {
    const t = await loadTree(db, params.id);
    if (!t) throw notFound('Course not found.');
    const problems = publishProblems(sanitizeTree(t));
    if (problems.length) throw new HttpError(422, 'This course is not ready to release yet.', problems);
    await db.run("UPDATE courses SET status = 'published', published_at = COALESCE(published_at, ?), updated_at = ? WHERE id = ?", [nowIso(), nowIso(), params.id]);
    analytics.clearAnalyticsCache();
    return { ok: true };
  });
  r.post('/api/admin/courses/:id/unpublish', ADMIN, async ({ db, params }) => {
    const res = await db.run("UPDATE courses SET status = 'draft', updated_at = ? WHERE id = ? AND status = 'published'", [nowIso(), params.id]);
    if (!res.changes) throw bad('This course is not published.');
    analytics.clearAnalyticsCache();
    return { ok: true };
  });
  r.post('/api/admin/courses/:id/archive', ADMIN, async ({ db, params }) => {
    await db.run("UPDATE courses SET status = 'archived', updated_at = ? WHERE id = ?", [nowIso(), params.id]);
    analytics.clearAnalyticsCache();
    return { ok: true };
  });

  return r;
}
