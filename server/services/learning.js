// Learner-side operations: enrolment, progress, time tracking, quizzes, assessments.
import { bad, forbidden, notFound, nowIso, dayOf, today, uid, safeJson, clamp, addDays } from '../lib/util.js';
import { learnerBody, loadTree } from './courseTree.js';
import { checkQuestion, gradeAssessment } from './grading.js';

/* ───────── course access ───────── */

/**
 * Resolve a course by slug for a learner request.
 * Learners only see published courses. Admins may open drafts in *preview* mode, where nothing is persisted.
 */
export async function getCourseFor(db, slug, user) {
  const course = await db.get('SELECT * FROM courses WHERE slug = ?', [slug]);
  if (!course) throw notFound('Course not found.');
  if (course.status === 'published') return { course, preview: false };
  if (user?.role === 'admin') return { course, preview: true };
  throw notFound('Course not found.');
}

export async function getEnrollment(db, userId, courseId) {
  return db.get('SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?', [userId, courseId]);
}

async function requireEnrollment(db, user, course, preview) {
  if (preview) return null;
  const e = await getEnrollment(db, user.id, course.id);
  if (!e) throw forbidden('Enrol in this course to start learning.');
  return e;
}

/* ───────── enrolment ───────── */

export async function enroll(db, user, course) {
  const existing = await getEnrollment(db, user.id, course.id);
  if (existing) return existing;
  const total = (await db.get('SELECT COUNT(*) AS n FROM items WHERE course_id = ?', [course.id])).n;
  const at = nowIso();
  await db.run(
    `INSERT INTO enrollments (id, user_id, course_id, status, enrolled_at, enrolled_day, items_total, last_activity_at)
     VALUES (?,?,?,?,?,?,?,?) ON CONFLICT (user_id, course_id) DO NOTHING`,
    [uid(), user.id, course.id, 'active', at, dayOf(at), total, at],
  );
  return getEnrollment(db, user.id, course.id);
}

/* ───────── outline with progress ───────── */

export async function outline(db, course, user, preview) {
  const tree = await loadTree(db, course.id);
  const progress = preview
    ? []
    : await db.all('SELECT item_id, completed_at, seconds FROM item_progress WHERE user_id = ? AND course_id = ?', [user.id, course.id]);
  const prog = new Map(progress.map((p) => [p.item_id, p]));
  const statusOf = (id) => {
    const p = prog.get(id);
    return p?.completed_at ? 'done' : p ? 'started' : 'new';
  };
  const bestAttempts = preview
    ? []
    : await db.all(
        `SELECT item_id, rating, score, passed FROM assessment_attempts WHERE user_id = ? AND course_id = ? ORDER BY score DESC`,
        [user.id, course.id],
      );
  const best = new Map();
  for (const a of bestAttempts) if (!best.has(a.item_id)) best.set(a.item_id, a);

  const flat = [];
  const mk = (it, kind, extra = {}) => {
    const row = { id: it.id, kind, title: it.title, estMinutes: it.estMinutes ?? 0, status: statusOf(it.id), ...extra };
    flat.push(row);
    return row;
  };
  const units = tree.units.map((u) => {
    const overview = mk({ id: `${u.id}:overview`, title: 'Unit overview & learning objectives', estMinutes: 3 }, 'overview');
    const lessons = u.lessons.map((l) => ({
      id: l.id,
      title: l.title,
      outcomes: l.outcomes,
      sessions: l.sessions.map((s) => ({
        id: s.id,
        title: s.title,
        items: s.items.map((it) => mk(it, it.kind)),
      })),
    }));
    const a = u.assessment ? mk(u.assessment, 'assessment', { best: best.get(u.assessment.id) ? { rating: best.get(u.assessment.id).rating, score: best.get(u.assessment.id).score, passed: !!best.get(u.assessment.id).passed } : null }) : null;
    return { id: u.id, title: u.title, summary: u.summary, objectives: u.objectives, overview, lessons, assessment: a };
  });
  const done = flat.filter((i) => i.status === 'done').length;
  const next = flat.find((i) => i.status !== 'done') || null;
  return {
    course: {
      id: course.id,
      slug: course.slug,
      title: course.title,
      subtitle: course.subtitle,
      status: course.status,
      coverTheme: course.cover_theme,
    },
    preview,
    units,
    totals: { items: flat.length, done, percent: flat.length ? Math.round((done / flat.length) * 100) : 0 },
    nextItemId: next?.id ?? null,
    order: flat.map((i) => i.id),
  };
}

/* ───────── item content ───────── */

export async function loadItem(db, course, itemId) {
  const row = await db.get('SELECT * FROM items WHERE id = ? AND course_id = ?', [itemId, course.id]);
  if (!row) throw notFound('This item does not exist.');
  return { ...row, body: safeJson(row.body, {}) };
}

export async function itemView(db, user, course, preview, itemId) {
  const row = await loadItem(db, course, itemId);
  const unitRow = await db.get('SELECT * FROM units WHERE id = ?', [row.unit_id]);
  const unit = {
    title: unitRow.title,
    summary: unitRow.summary,
    objectives: safeJson(unitRow.objectives, []),
    lessons: (await db.all('SELECT title, outcomes FROM lessons WHERE unit_id = ? ORDER BY position', [row.unit_id])).map((l) => ({
      title: l.title,
      outcomes: safeJson(l.outcomes, []),
    })),
  };
  const item = { id: row.id, kind: row.kind, title: row.title, estMinutes: row.est_minutes, body: row.body };
  if (row.session_id) {
    const s = await db.get('SELECT s.title AS session, l.title AS lesson FROM lesson_sessions s JOIN lessons l ON l.id = s.lesson_id WHERE s.id = ?', [row.session_id]);
    item.crumbs = { unit: unit.title, lesson: s.lesson, session: s.session };
  } else item.crumbs = { unit: unit.title };
  const view = { id: row.id, kind: row.kind, title: row.title, estMinutes: row.est_minutes, crumbs: item.crumbs, body: learnerBody(item, unit), state: {} };

  if (!preview) {
    await requireEnrollment(db, user, course, preview);
    await db.run(
      `INSERT INTO item_progress (user_id, item_id, course_id, first_seen_at) VALUES (?,?,?,?) ON CONFLICT (user_id, item_id) DO NOTHING`,
      [user.id, row.id, course.id, nowIso()],
    );
    const p = await db.get('SELECT completed_at FROM item_progress WHERE user_id = ? AND item_id = ?', [user.id, row.id]);
    view.completed = !!p.completed_at;

    if (row.kind === 'quiz') {
      // Latest attempt per question, so a returning learner sees their earlier answers and feedback.
      const attempts = await db.all(
        'SELECT question_id, option_id, correct, attempt_no FROM quiz_attempts WHERE user_id = ? AND item_id = ? ORDER BY attempt_no',
        [user.id, row.id],
      );
      const latest = {};
      for (const a of attempts) latest[a.question_id] = a;
      for (const q of row.body.questions || []) {
        const a = latest[q.id];
        if (a) view.state[q.id] = { optionId: a.option_id, ...checkQuestion(q, a.option_id), attemptNo: a.attempt_no };
      }
    }
    if (row.kind === 'assessment') {
      const attempts = await db.all(
        'SELECT id, score, rating, passed, result, created_at FROM assessment_attempts WHERE user_id = ? AND item_id = ? ORDER BY created_at DESC LIMIT 10',
        [user.id, row.id],
      );
      view.attempts = attempts.map((a) => ({ id: a.id, score: a.score, rating: a.rating, passed: !!a.passed, createdAt: a.created_at }));
      if (attempts[0]) view.lastResult = { ...safeJson(attempts[0].result, {}), createdAt: attempts[0].created_at };
    }
  }
  return view;
}

/* ───────── progress & time ───────── */

async function bumpDaily(t, userId, courseId, { seconds = 0, items = 0 }) {
  await t.run(
    `INSERT INTO activity_daily (user_id, course_id, day, seconds, items_done) VALUES (?,?,?,?,?)
     ON CONFLICT (user_id, course_id, day) DO UPDATE SET seconds = activity_daily.seconds + excluded.seconds, items_done = activity_daily.items_done + excluded.items_done`,
    [userId, courseId, today(), seconds, items],
  );
}

/** Marks an item done (idempotent) and rolls up the enrolment. */
export async function completeItem(t, userId, courseId, itemId) {
  const at = nowIso();
  const res = await t.run(
    `UPDATE item_progress SET completed_at = ? WHERE user_id = ? AND item_id = ? AND completed_at IS NULL`,
    [at, userId, itemId],
  );
  if (!res.changes) {
    const exists = await t.get('SELECT 1 AS x FROM item_progress WHERE user_id = ? AND item_id = ?', [userId, itemId]);
    if (!exists)
      await t.run('INSERT INTO item_progress (user_id, item_id, course_id, first_seen_at, completed_at) VALUES (?,?,?,?,?)', [userId, itemId, courseId, at, at]);
    else return false; // was already complete
  }
  const done = (await t.get('SELECT COUNT(*) AS n FROM item_progress WHERE user_id = ? AND course_id = ? AND completed_at IS NOT NULL', [userId, courseId])).n;
  const total = (await t.get('SELECT COUNT(*) AS n FROM items WHERE course_id = ?', [courseId])).n;
  const finished = done >= total;
  await t.run(
    `UPDATE enrollments SET items_done = ?, items_total = ?, last_activity_at = ?,
       status = CASE WHEN ? = 1 THEN 'completed' ELSE status END,
       completed_at = CASE WHEN ? = 1 AND completed_at IS NULL THEN ? ELSE completed_at END,
       completed_day = CASE WHEN ? = 1 AND completed_day IS NULL THEN ? ELSE completed_day END
     WHERE user_id = ? AND course_id = ?`,
    [done, total, at, finished ? 1 : 0, finished ? 1 : 0, at, finished ? 1 : 0, dayOf(at), userId, courseId],
  );
  await bumpDaily(t, userId, courseId, { items: 1 });
  return true;
}

export async function markComplete(db, user, course, preview, itemId) {
  const row = await loadItem(db, course, itemId);
  if (!['overview', 'video', 'reading'].includes(row.kind)) throw bad('Quizzes and assessments complete when you answer them.');
  if (preview) return { ok: true, preview: true };
  await requireEnrollment(db, user, course, preview);
  await db.tx((t) => completeItem(t, user.id, course.id, itemId));
  return progressSummary(db, user.id, course.id);
}

export async function progressSummary(db, userId, courseId) {
  const e = await getEnrollment(db, userId, courseId);
  return { itemsDone: e.items_done, itemsTotal: e.items_total, status: e.status, percent: e.items_total ? Math.round((e.items_done / e.items_total) * 100) : 0 };
}

/** Called by the client every ~15 s while the learner is active on a page. */
export async function heartbeat(db, user, course, preview, itemId, seconds) {
  if (preview) return { ok: true };
  await requireEnrollment(db, user, course, preview);
  const s = clamp(Math.round(Number(seconds) || 0), 1, 30);
  await loadItem(db, course, itemId);
  await db.tx(async (t) => {
    const at = nowIso();
    await t.run(
      `INSERT INTO item_progress (user_id, item_id, course_id, first_seen_at, seconds) VALUES (?,?,?,?,?)
       ON CONFLICT (user_id, item_id) DO UPDATE SET seconds = item_progress.seconds + excluded.seconds`,
      [user.id, itemId, course.id, at, s],
    );
    await t.run('UPDATE enrollments SET total_seconds = total_seconds + ?, last_activity_at = ? WHERE user_id = ? AND course_id = ?', [s, at, user.id, course.id]);
    await bumpDaily(t, user.id, course.id, { seconds: s });
  });
  return { ok: true };
}

/* ───────── quizzes ───────── */

export async function answerQuiz(db, user, course, preview, itemId, questionId, optionId) {
  const row = await loadItem(db, course, itemId);
  if (row.kind !== 'quiz') throw bad('This item is not a quiz.');
  const q = (row.body.questions || []).find((x) => x.id === questionId);
  if (!q) throw notFound('Question not found.');
  const verdict = checkQuestion(q, optionId);
  if (!verdict) throw bad('Please choose one of the options.');
  if (preview) return { ...verdict, attemptNo: 1, itemComplete: false, preview: true };
  await requireEnrollment(db, user, course, preview);
  return db.tx(async (t) => {
    const prior = (await t.get('SELECT COUNT(*) AS n FROM quiz_attempts WHERE user_id = ? AND item_id = ? AND question_id = ?', [user.id, itemId, questionId])).n;
    await t.run(
      'INSERT INTO quiz_attempts (id, user_id, course_id, item_id, question_id, option_id, correct, attempt_no, created_at) VALUES (?,?,?,?,?,?,?,?,?)',
      [uid(), user.id, course.id, itemId, questionId, optionId, verdict.correct ? 1 : 0, prior + 1, nowIso()],
    );
    await t.run(
      `INSERT INTO item_progress (user_id, item_id, course_id, first_seen_at) VALUES (?,?,?,?) ON CONFLICT (user_id, item_id) DO NOTHING`,
      [user.id, itemId, course.id, nowIso()],
    );
    const answered = (await t.get('SELECT COUNT(DISTINCT question_id) AS n FROM quiz_attempts WHERE user_id = ? AND item_id = ?', [user.id, itemId])).n;
    let itemComplete = false;
    if (answered >= row.body.questions.length) itemComplete = (await completeItem(t, user.id, course.id, itemId)) || true;
    await t.run('UPDATE enrollments SET last_activity_at = ? WHERE user_id = ? AND course_id = ?', [nowIso(), user.id, course.id]);
    return { ...verdict, attemptNo: prior + 1, itemComplete };
  });
}

/* ───────── unit assessment ───────── */

export async function submitAssessment(db, config, user, course, preview, itemId, answers) {
  const row = await loadItem(db, course, itemId);
  if (row.kind !== 'assessment') throw bad('This item is not an assessment.');
  const result = gradeAssessment(row.body, answers || {}, config);
  if (preview) return { ...result, preview: true };
  await requireEnrollment(db, user, course, preview);
  const at = nowIso();
  await db.tx(async (t) => {
    await t.run(
      'INSERT INTO assessment_attempts (id, user_id, course_id, item_id, answers, score, rating, passed, result, created_at) VALUES (?,?,?,?,?,?,?,?,?,?)',
      [uid(), user.id, course.id, itemId, JSON.stringify(answers || {}), result.score, result.rating, result.passed ? 1 : 0, JSON.stringify(result), at],
    );
    await t.run(
      `INSERT INTO item_progress (user_id, item_id, course_id, first_seen_at) VALUES (?,?,?,?) ON CONFLICT (user_id, item_id) DO NOTHING`,
      [user.id, itemId, course.id, at],
    );
    if (result.passed) await completeItem(t, user.id, course.id, itemId);
    await t.run('UPDATE enrollments SET last_activity_at = ? WHERE user_id = ? AND course_id = ?', [at, user.id, course.id]);
  });
  const progress = await progressSummary(db, user.id, course.id);
  return { ...result, progress, createdAt: at };
}

/* ───────── learner dashboard ───────── */

export async function myCourses(db, user, config) {
  const rows = await db.all(
    `SELECT e.*, c.slug, c.title, c.subtitle, c.cover_theme, c.category, c.est_minutes, c.status AS course_status
       FROM enrollments e JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = ? ORDER BY COALESCE(e.last_activity_at, e.enrolled_at) DESC`,
    [user.id],
  );
  const courses = [];
  for (const e of rows) {
    const next = await db.get(
      `SELECT i.id, i.title, i.kind, i.est_minutes FROM items i
        WHERE i.course_id = ? AND NOT EXISTS (SELECT 1 FROM item_progress p WHERE p.item_id = i.id AND p.user_id = ? AND p.completed_at IS NOT NULL)
        ORDER BY i.seq LIMIT 1`,
      [e.course_id, user.id],
    );
    courses.push({
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      coverTheme: e.cover_theme,
      category: e.category,
      status: e.status,
      published: e.course_status === 'published',
      percent: e.items_total ? Math.round((e.items_done / e.items_total) * 100) : 0,
      itemsDone: e.items_done,
      itemsTotal: e.items_total,
      totalMinutes: Math.round(e.total_seconds / 60),
      estMinutes: e.est_minutes,
      enrolledAt: e.enrolled_at,
      lastActivityAt: e.last_activity_at,
      completedAt: e.completed_at,
      next: next ? { id: next.id, title: next.title, kind: next.kind, estMinutes: next.est_minutes } : null,
    });
  }

  const since = addDays(today(), -27);
  const [stats, monthDays, ratings, todayRow] = await Promise.all([
    db.get('SELECT COALESCE(SUM(seconds),0) AS secs, COALESCE(SUM(items_done),0) AS items FROM activity_daily WHERE user_id = ? AND day >= ?', [user.id, since]),
    db.all('SELECT day, SUM(seconds) AS seconds, SUM(items_done) AS items FROM activity_daily WHERE user_id = ? AND day >= ? GROUP BY day', [user.id, addDays(today(), -62)]),
    db.all(
      `SELECT a.rating, a.score, a.created_at, i.title AS assessment, c.title AS course, c.slug
         FROM assessment_attempts a JOIN items i ON i.id = a.item_id JOIN courses c ON c.id = a.course_id
        WHERE a.user_id = ? AND a.passed = 1 ORDER BY a.created_at DESC LIMIT 5`,
      [user.id],
    ),
    db.get('SELECT COALESCE(SUM(items_done),0) AS items FROM activity_daily WHERE user_id = ? AND day = ?', [user.id, today()]),
  ]);
  const goal = 3;
  return {
    courses,
    stats: { minutes: Math.round(stats.secs / 60), items: stats.items, activeDays: monthDays.filter((d) => d.day >= since).length },
    activity: monthDays.map((d) => ({ day: d.day, minutes: Math.round(d.seconds / 60), items: d.items })),
    results: ratings.map((r) => ({ rating: r.rating, score: r.score, assessment: r.assessment, course: r.course, slug: r.slug, at: r.created_at })),
    dailyGoal: { target: goal, done: todayRow.items },
  };
}
