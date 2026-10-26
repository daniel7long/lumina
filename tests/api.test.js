import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { startTestServer, client, makeGoogleKeypair } from './helpers.js';
import { englishCourse } from '../server/content/english/index.js';

let S;
const google = makeGoogleKeypair();
before(async () => {
  S = await startTestServer({ googleKeys: async () => [google.jwk] });
});
after(() => S.close());

const slug = () => S.info.slug;

async function newLearner(name = 'Test Learner') {
  const c = client(S.base);
  const email = `${Math.random().toString(36).slice(2)}@example.com`;
  const r = await c.post('/api/auth/signup', { name, email, password: 'correct horse 42' });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  return { c, email };
}

test('health and config are public', async () => {
  const c = client(S.base);
  assert.equal((await c.get('/api/health')).data.ok, true);
  const cfg = await c.get('/api/config');
  assert.equal(cfg.data.passRating, 'B');
  assert.ok(cfg.data.googleClientId);
});

test('signup validates input, logs in, rejects duplicates and wrong passwords', async () => {
  const c = client(S.base);
  assert.equal((await c.post('/api/auth/signup', { name: 'A', email: 'nope', password: 'longenough1' })).status, 400);
  assert.equal((await c.post('/api/auth/signup', { name: 'A', email: 'a@example.com', password: 'short' })).status, 400);
  const ok = await c.post('/api/auth/signup', { name: 'Ada', email: 'ada@example.com', password: 'longenough1' });
  assert.equal(ok.status, 200);
  assert.equal((await c.get('/api/auth/me')).data.user.email, 'ada@example.com');
  assert.equal((await c.post('/api/auth/signup', { name: 'Ada', email: 'ADA@example.com', password: 'longenough1' })).status, 409);
  await c.post('/api/auth/logout');
  assert.equal((await c.get('/api/auth/me')).data.user, null);
  const c2 = client(S.base);
  assert.equal((await c2.post('/api/auth/login', { email: 'ada@example.com', password: 'wrong-password' })).status, 401);
  assert.equal((await c2.post('/api/auth/login', { email: 'ada@example.com', password: 'longenough1' })).status, 200);
});

test('mutating requests need the CSRF header', async () => {
  const res = await fetch(S.base + '/api/auth/logout', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' });
  assert.equal(res.status, 403);
});

test('Google sign-in: valid token creates an account, bad tokens are rejected', async () => {
  const claims = { iss: 'https://accounts.google.com', aud: S.config.googleClientId, sub: 'g-123', email: 'gina@gmail.com', email_verified: true, name: 'Gina G', exp: Math.floor(Date.now() / 1000) + 600 };
  const c = client(S.base);
  const r = await c.post('/api/auth/google', { credential: google.sign(claims) });
  assert.equal(r.status, 200);
  assert.equal(r.data.user.email, 'gina@gmail.com');
  // same Google user again → same account
  const c2 = client(S.base);
  await c2.post('/api/auth/google', { credential: google.sign(claims) });
  const n = await S.db.get("SELECT COUNT(*) AS n FROM users WHERE email = 'gina@gmail.com'");
  assert.equal(n.n, 1);
  for (const bad of [
    { ...claims, aud: 'someone-else' },
    { ...claims, exp: Math.floor(Date.now() / 1000) - 600 },
    { ...claims, email_verified: false },
    { ...claims, iss: 'https://evil.example' },
  ]) assert.equal((await client(S.base).post('/api/auth/google', { credential: google.sign(bad) })).status, 400);
  const [h, , sig] = google.sign(claims).split('.');
  const forged = Buffer.from(JSON.stringify({ ...claims, email: 'admin@lumina.local' })).toString('base64url');
  const tampered = `${h}.${forged}.${sig}`;
  assert.equal((await client(S.base).post('/api/auth/google', { credential: tampered })).status, 400);
});

test('catalogue lists the published course; learning requires enrolment', async () => {
  const { c } = await newLearner();
  const cat = await c.get('/api/catalog');
  assert.equal(cat.data.courses.length, 1);
  assert.equal((await c.get(`/api/learn/${slug()}`)).status, 403);
  assert.equal((await c.post(`/api/courses/${slug()}/enroll`)).status, 200);
  const o = await c.get(`/api/learn/${slug()}`);
  assert.equal(o.status, 200);
  assert.equal(o.data.units.length, 3);
  assert.equal(o.data.totals.done, 0);
});

test('every session has 1–2 quiz questions and every quiz item hides answers from learners', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const o = (await c.get(`/api/learn/${slug()}`)).data;
  let sessions = 0;
  for (const u of o.units) for (const l of u.lessons) for (const s of l.sessions) {
    sessions += 1;
    const quizzes = s.items.filter((i) => i.kind === 'quiz');
    assert.equal(quizzes.length, 1);
    const view = (await c.get(`/api/learn/${slug()}/items/${encodeURIComponent(quizzes[0].id)}`)).data;
    assert.ok(view.body.questions.length >= 1 && view.body.questions.length <= 2, s.id);
    assert.ok(!JSON.stringify(view).includes('explanation'), 'explanations must not leak');
    assert.ok(!('answer' in view.body.questions[0]));
    for (const q of view.body.questions) assert.ok(q.options.length >= (q.type === 'tf' ? 2 : 3) && q.options.length <= 4);
  }
  assert.ok(sessions >= 36, `expected 36+ sessions, got ${sessions}`);
});

test('quiz: immediate feedback with explanations, completion and retry', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const id = encodeURIComponent('eng:u1:l1:s1:quiz');
  const wrong = await c.post(`/api/learn/${slug()}/items/${id}/quiz`, { questionId: 'q1', optionId: 'a' });
  assert.equal(wrong.data.correct, false);
  assert.equal(wrong.data.correctOptionId, 'b');
  assert.ok(wrong.data.chosen.explanation.length > 10);
  assert.equal(Object.keys(wrong.data.explanations).length, 3);
  assert.equal(wrong.data.itemComplete, false);
  const right = await c.post(`/api/learn/${slug()}/items/${id}/quiz`, { questionId: 'q1', optionId: 'b' });
  assert.equal(right.data.correct, true);
  assert.equal(right.data.attemptNo, 2);
  const done = await c.post(`/api/learn/${slug()}/items/${id}/quiz`, { questionId: 'q2', optionId: 'true' });
  assert.equal(done.data.itemComplete, true);
  const view = (await c.get(`/api/learn/${slug()}/items/${id}`)).data;
  assert.equal(view.completed, true);
  assert.equal(view.state.q1.correct, true);
  assert.equal((await c.post(`/api/learn/${slug()}/items/${id}/quiz`, { questionId: 'q1', optionId: 'zzz' })).status, 400);
});

test('progress, heartbeat time tracking and notes', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const reading = encodeURIComponent('eng:u1:l1:s1:reading');
  await c.get(`/api/learn/${slug()}/items/${reading}`);
  assert.equal((await c.post(`/api/learn/${slug()}/heartbeat`, { itemId: 'eng:u1:l1:s1:reading', seconds: 15 })).status, 200);
  assert.equal((await c.post(`/api/learn/${slug()}/heartbeat`, { itemId: 'eng:u1:l1:s1:reading', seconds: 9999 })).status, 200); // clamped to 30
  const mine = (await c.get('/api/my/courses')).data;
  assert.equal(mine.courses[0].totalMinutes, 1); // 45 s → rounds to 1 min
  await c.post(`/api/learn/${slug()}/items/${reading}/complete`);
  assert.equal((await c.get(`/api/my/courses`)).data.courses[0].itemsDone, 1);
  const n = await c.post(`/api/learn/${slug()}/notes`, { itemId: 'eng:u1:l1:s1:reading', body: 'Lease = rental contract' });
  assert.equal(n.status, 200);
  assert.equal((await c.get(`/api/learn/${slug()}/notes?itemId=${reading}`)).data.notes.length, 1);
  assert.equal((await c.put(`/api/notes/${n.data.note.id}`, { body: 'edited' })).status, 200);
  const other = await newLearner();
  assert.equal((await other.c.del(`/api/notes/${n.data.note.id}`)).status, 404, 'cannot delete another user\'s note');
  assert.equal((await c.del(`/api/notes/${n.data.note.id}`)).status, 200);
});

test('AI assistant answers from the lesson (local mode) and refuses to solve assessments', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const r = await c.post(`/api/learn/${slug()}/ai`, { itemId: 'eng:u1:l1:s2:reading', message: 'What is a security deposit?' });
  assert.equal(r.status, 200);
  assert.equal(r.data.source, 'local');
  assert.match(r.data.answer, /deposit/i);
  const a = await c.post(`/api/learn/${slug()}/ai`, { itemId: 'eng:u1:assessment', message: 'Write my roommate ad for me' });
  assert.match(a.data.answer, /can't write answers/i);
  assert.equal((await c.get(`/api/learn/${slug()}/ai?itemId=eng:u1:l1:s2:reading`)).data.messages.length, 2);
});

test('assessments: model answers earn B or higher; weak answers do not pass; ratings follow the bands', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  for (const unit of englishCourse.units) {
    const tasks = unit.assessment.body.tasks;
    const best = {};
    for (const t of tasks) best[t.id] = t.type === 'written' ? t.modelAnswer : t.answer;
    const id = encodeURIComponent(unit.assessment.id);

    const weak = Object.fromEntries(tasks.map((t) => [t.id, t.type === 'written' ? 'I do not know.' : t.options.find((o) => o.id !== t.answer).id]));
    const w = await c.post(`/api/learn/${slug()}/items/${id}/assessment`, { answers: weak });
    assert.equal(w.status, 200);
    assert.equal(w.data.rating, 'C', unit.id);
    assert.equal(w.data.passed, false);

    const good = await c.post(`/api/learn/${slug()}/items/${id}/assessment`, { answers: best });
    assert.ok(['A+', 'A', 'B+', 'B'].includes(good.data.rating), `${unit.id} got ${good.data.rating} (${good.data.score})\n${JSON.stringify(good.data.tasks.filter((t) => t.criteria).map((t) => t.criteria.map((k) => k.checks.filter((x) => !x.passed).map((x) => x.id))))}`);
    assert.equal(good.data.passed, true);
    assert.ok(good.data.tasks.find((t) => t.type === 'written').modelAnswer);
  }
  const view = (await c.get(`/api/learn/${slug()}/items/${encodeURIComponent('eng:u1:assessment')}`)).data;
  assert.equal(view.attempts.length, 2);
  assert.equal(view.completed, true);
  assert.ok(!JSON.stringify(view.body).includes('modelAnswer'));
  assert.ok(!JSON.stringify(view.body).includes('"answer"'));
});

test('keyword stuffing and empty submissions cannot earn a pass', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const unit = englishCourse.units[1];
  const stuffed = 'Dear Professor subject: would it be possible I was wondering ill sick because by friday thank you best regards '.repeat(8);
  const answers = Object.fromEntries(unit.assessment.body.tasks.map((t) => [t.id, t.type === 'written' ? stuffed : t.options.find((o) => o.id !== t.answer).id]));
  const r = await c.post(`/api/learn/${slug()}/items/${encodeURIComponent(unit.assessment.id)}/assessment`, { answers });
  assert.equal(r.data.passed, false);
});

test('course completes only when every item is done, then shows in Completed', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const o = (await c.get(`/api/learn/${slug()}`)).data;
  const answerFor = (id) => englishCourse.units.flatMap((u) => [u.assessment]).find((a) => a.id === id);
  for (const id of o.order) {
    const enc = encodeURIComponent(id);
    const kind = id.endsWith(':overview') ? 'overview' : id.endsWith(':assessment') ? 'assessment' : null;
    const view = (await c.get(`/api/learn/${slug()}/items/${enc}`)).data;
    if (view.kind === 'assessment') {
      const a = answerFor(id);
      await c.post(`/api/learn/${slug()}/items/${enc}/assessment`, { answers: Object.fromEntries(a.body.tasks.map((t) => [t.id, t.type === 'written' ? t.modelAnswer : t.answer])) });
    } else if (view.kind === 'quiz') {
      const full = englishCourse.units.flatMap((u) => u.lessons.flatMap((l) => l.sessions.flatMap((s) => s.items))).find((i) => i.id === id);
      for (const q of full.body.questions) await c.post(`/api/learn/${slug()}/items/${enc}/quiz`, { questionId: q.id, optionId: q.answer });
    } else await c.post(`/api/learn/${slug()}/items/${enc}/complete`);
  }
  const mine = (await c.get('/api/my/courses')).data.courses[0];
  assert.equal(mine.status, 'completed');
  assert.equal(mine.percent, 100);
});

test('admin API is closed to learners and open to admins; analytics reflect activity', async () => {
  const { c } = await newLearner();
  assert.equal((await c.get('/api/admin/overview')).status, 403);
  assert.equal((await client(S.base).get('/api/admin/users')).status, 401);

  const admin = client(S.base);
  assert.equal((await admin.post('/api/auth/login', { email: 'admin@test.local', password: 'AdminPass!234' })).status, 200);
  const ov = await admin.get('/api/admin/overview?granularity=day');
  assert.equal(ov.status, 200);
  assert.ok(ov.data.kpis.learners >= 5);
  assert.equal(ov.data.series.newLearners.length, 30);
  assert.ok(ov.data.kpis.completed >= 1);
  assert.equal(ov.data.courses[0].title, englishCourse.meta.title);
  for (const g of ['week', 'month']) {
    const r = await admin.get(`/api/admin/overview?granularity=${g}`);
    assert.equal(r.data.series.newLearners.length, 12);
    assert.equal(r.data.series.newLearners.reduce((n, p) => n + p.value, 0) >= 5, true);
  }
  const ca = await admin.get(`/api/admin/courses/${S.info.courseId}/analytics`);
  assert.equal(ca.status, 200);
  assert.ok(ca.data.funnel.length > 40);
  assert.equal(ca.data.assessments.length, 3);
  assert.ok(ca.data.questions.length > 0);
  const users = await admin.get('/api/admin/users?q=ada');
  assert.equal(users.data.users[0].email, 'ada@example.com');
  const detail = await admin.get(`/api/admin/users/${users.data.users[0].id}`);
  assert.equal(detail.status, 200);
});

test('dropout logic: inactive unfinished enrolments are counted after DROPOUT_DAYS', async () => {
  const { c } = await newLearner();
  await c.post(`/api/courses/${slug()}/enroll`);
  const admin = client(S.base);
  await admin.post('/api/auth/login', { email: 'admin@test.local', password: 'AdminPass!234' });
  const { clearAnalyticsCache } = await import('../server/services/analytics.js');
  clearAnalyticsCache();
  const before = (await admin.get('/api/admin/overview')).data.kpis.dropped;
  const old = new Date(Date.now() - 20 * 86400000).toISOString();
  await S.db.run("UPDATE enrollments SET last_activity_at = ?, enrolled_at = ? WHERE status = 'active'", [old, old]);
  clearAnalyticsCache();
  const after = (await admin.get('/api/admin/overview')).data.kpis.dropped;
  assert.ok(after > before);
});

test('course builder: create → invalid draft cannot be published → fix → publish → learners see it', async () => {
  const admin = client(S.base);
  await admin.post('/api/auth/login', { email: 'admin@test.local', password: 'AdminPass!234' });
  const created = await admin.post('/api/admin/courses', { title: 'Test Course Alpha' });
  assert.equal(created.status, 200);
  const id = created.data.id;
  const learner = (await newLearner()).c;
  assert.equal((await learner.get(`/api/catalog/${created.data.slug}`)).status, 404, 'drafts are hidden');
  assert.equal((await admin.post(`/api/admin/courses/${id}/publish`)).status, 422);

  const draft = (await admin.get(`/api/admin/courses/${id}`)).data;
  const q = { id: 'q1', type: 'mcq', prompt: 'Pick b', options: [{ id: 'a', text: 'A', explanation: 'no' }, { id: 'b', text: 'B', explanation: 'yes' }, { id: 'c', text: 'C', explanation: 'no' }], answer: 'b' };
  const tree = {
    revision: draft.course.revision,
    meta: { ...draft.meta, description: 'A tiny test course.' },
    units: [{
      id: 'alpha-u1', title: 'U1', summary: '', objectives: ['Learn A'],
      lessons: [{ id: 'alpha-l1', title: 'L1', summary: '', outcomes: [], sessions: [{ id: 'alpha-s1', title: 'S1', summary: '', items: [
        { id: 'alpha-s1-r', kind: 'reading', title: 'Read', estMinutes: 3, body: { markdown: '# Hello' } },
        { id: 'alpha-s1-q', kind: 'quiz', title: 'Quiz', estMinutes: 1, body: { questions: [q] } },
      ] }] }],
      assessment: { id: 'alpha-a1', title: 'Assess', estMinutes: 10, body: { instructions: '', tasks: [{ ...q, id: 't1', points: 10 }] } },
    }],
  };
  const saved = await admin.put(`/api/admin/courses/${id}`, tree);
  assert.equal(saved.status, 200, JSON.stringify(saved.data));
  assert.deepEqual(saved.data.problems, []);
  assert.equal((await admin.put(`/api/admin/courses/${id}`, tree)).status, 409, 'stale revision rejected');

  // ids are global: another course may not reuse them
  const other = (await admin.post('/api/admin/courses', { title: 'Test Course Beta' })).data;
  const clash = await admin.put(`/api/admin/courses/${other.id}`, { meta: { title: 'Beta' }, units: tree.units });
  assert.equal(clash.status, 400);

  // preview: admin can open the draft, nothing is stored
  const prev = await admin.get(`/api/learn/${created.data.slug}`);
  assert.equal(prev.status, 200);
  assert.equal(prev.data.preview, true);
  const pq = await admin.post(`/api/learn/${created.data.slug}/items/alpha-s1-q/quiz`, { questionId: 'q1', optionId: 'b' });
  assert.equal(pq.data.correct, true);
  assert.equal((await S.db.get("SELECT COUNT(*) AS n FROM quiz_attempts WHERE item_id = 'alpha-s1-q'")).n, 0);

  assert.equal((await admin.post(`/api/admin/courses/${id}/publish`)).status, 200);
  assert.equal((await learner.get(`/api/catalog/${created.data.slug}`)).status, 200);
  assert.equal((await admin.post(`/api/admin/courses/${id}/unpublish`)).status, 200);
  assert.equal((await learner.get(`/api/catalog/${created.data.slug}`)).status, 404);
});

test('publish rules reject a session with 3 quiz questions and a 2-option MCQ', async () => {
  const { publishProblems, sanitizeTree } = await import('../server/services/courseTree.js');
  const mk = (n, opts) => sanitizeTree({ meta: { title: 'X', description: 'd' }, units: [{ id: 'u', title: 'U', objectives: ['o'], lessons: [{ id: 'l', title: 'L', sessions: [{ id: 's', title: 'S', items: [
    { id: 'r', kind: 'reading', title: 'R', body: { markdown: 'x' } },
    { id: 'q', kind: 'quiz', title: 'Q', body: { questions: Array.from({ length: n }, (_, i) => ({ id: `q${i}`, type: 'mcq', prompt: 'p', answer: 'a', options: opts })) } },
  ] }] }], assessment: { id: 'a', title: 'A', body: { tasks: [{ id: 't', type: 'tf', prompt: 'p', points: 5, answer: 'true', options: [{ id: 'true', text: 'True', explanation: 'e' }, { id: 'false', text: 'False', explanation: 'e' }] }] } } }] });
  const two = [{ id: 'a', text: 'A', explanation: 'e' }, { id: 'b', text: 'B', explanation: 'e' }];
  const three = [...two, { id: 'c', text: 'C', explanation: 'e' }];
  assert.ok(publishProblems(mk(3, three)).some((p) => /1–2 quiz questions/.test(p)));
  assert.ok(publishProblems(mk(1, two)).some((p) => /3 or 4 options/.test(p)));
  assert.deepEqual(publishProblems(mk(2, three)), []);
});

test('suspended users are signed out and cannot sign in', async () => {
  const { c, email } = await newLearner();
  const admin = client(S.base);
  await admin.post('/api/auth/login', { email: 'admin@test.local', password: 'AdminPass!234' });
  const me = (await c.get('/api/auth/me')).data.user;
  assert.equal((await admin.patch(`/api/admin/users/${me.id}`, { status: 'suspended' })).status, 200);
  assert.equal((await c.get('/api/auth/me')).data.user, null);
  assert.equal((await client(S.base).post('/api/auth/login', { email, password: 'correct horse 42' })).status, 403);
  assert.equal((await admin.patch(`/api/admin/users/${(await admin.get('/api/auth/me')).data.user.id}`, { role: 'learner' })).status, 400, 'cannot demote self');
});
