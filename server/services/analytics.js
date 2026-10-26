// Admin analytics. Everything is computed with indexed SQL aggregates over compact tables
// (users, enrollments, activity_daily, item_progress, quiz_attempts, assessment_attempts);
// nothing scans raw events. Results are cached for a short TTL so a busy dashboard costs one query set per minute.
//
// Definitions (also shown in the admin UI):
//   Learner        – user with role "learner".
//   Enrolment      – a learner starting a course.
//   Completed      – every item in the course done (assessments need a B or higher).
//   Dropped out    – not completed AND no activity for DROPOUT_DAYS (default 14) days.
//   In progress    – not completed and not dropped out.
//   Completion %   – completed ÷ enrolments.   Dropout % – dropped out ÷ enrolments.
//   Active learner – had learning time recorded on that day / in that period.

import { addDays, today, weekStart, dayRange, round, daysBetween, safeJson } from '../lib/util.js';

const cache = new Map();
async function cached(key, ttlMs, fn) {
  const hit = cache.get(key);
  if (hit && hit.until > Date.now()) return hit.value;
  const value = await fn();
  cache.set(key, { value, until: Date.now() + ttlMs });
  if (cache.size > 200) cache.delete(cache.keys().next().value);
  return value;
}
export const clearAnalyticsCache = () => cache.clear();

const GRANULARITIES = ['day', 'week', 'month'];

function buckets(granularity, count, end = today()) {
  const out = [];
  if (granularity === 'day') {
    for (let i = count - 1; i >= 0; i--) {
      const d = addDays(end, -i);
      out.push({ key: d, from: d, to: d, label: d });
    }
  } else if (granularity === 'week') {
    const ws = weekStart(end);
    for (let i = count - 1; i >= 0; i--) {
      const from = addDays(ws, -7 * i);
      out.push({ key: from, from, to: addDays(from, 6) > end ? end : addDays(from, 6), label: from });
    }
  } else {
    const [y, m] = end.split('-').map(Number);
    for (let i = count - 1; i >= 0; i--) {
      const d = new Date(Date.UTC(y, m - 1 - i, 1));
      const from = d.toISOString().slice(0, 10);
      const next = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).toISOString().slice(0, 10);
      out.push({ key: from.slice(0, 7), from, to: next > end ? end : next, label: from.slice(0, 7) });
    }
  }
  return out;
}

const bucketOf = (granularity, day) => (granularity === 'day' ? day : granularity === 'week' ? weekStart(day) : day.slice(0, 7));

/** Count rows per day for a table/column pair and roll the days up into buckets. */
async function countSeries(db, { sql, params }, granularity, bs) {
  const rows = await db.all(sql, [...params, bs[0].from, bs[bs.length - 1].to]);
  const map = new Map(bs.map((b) => [b.key, 0]));
  for (const r of rows) {
    const k = bucketOf(granularity, r.day);
    if (map.has(k)) map.set(k, map.get(k) + Number(r.n));
  }
  return bs.map((b) => ({ key: b.key, label: b.label, value: map.get(b.key) }));
}

/** Distinct active learners per bucket (must be computed per bucket – distincts do not add up). */
async function activeSeries(db, courseId, bs) {
  const out = [];
  for (const b of bs) {
    const row = courseId
      ? await db.get('SELECT COUNT(DISTINCT user_id) AS n FROM activity_daily WHERE course_id = ? AND day BETWEEN ? AND ? AND seconds > 0', [courseId, b.from, b.to])
      : await db.get('SELECT COUNT(DISTINCT user_id) AS n FROM activity_daily WHERE day BETWEEN ? AND ? AND seconds > 0', [b.from, b.to]);
    out.push({ key: b.key, label: b.label, value: row.n });
  }
  return out;
}

const cutoffIso = (config) => new Date(Date.now() - config.dropoutDays * 86400000).toISOString();

async function courseCounts(db, config, courseId) {
  const cut = cutoffIso(config);
  const w = courseId ? 'WHERE course_id = ?' : '';
  const p = courseId ? [courseId] : [];
  const row = await db.get(
    `SELECT COUNT(*) AS enrolled,
            COALESCE(SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END),0) AS completed,
            COALESCE(SUM(CASE WHEN status <> 'completed' AND COALESCE(last_activity_at, enrolled_at) < ? THEN 1 ELSE 0 END),0) AS dropped,
            COALESCE(SUM(total_seconds),0) AS seconds,
            COUNT(DISTINCT user_id) AS learners,
            COALESCE(AVG(CASE WHEN items_total > 0 THEN 100.0 * items_done / items_total END),0) AS avg_progress
       FROM enrollments ${w}`,
    [cut, ...p],
  );
  const inProgress = row.enrolled - row.completed - row.dropped;
  return {
    enrolled: row.enrolled,
    learners: row.learners,
    completed: row.completed,
    dropped: row.dropped,
    inProgress,
    completionRate: row.enrolled ? round((100 * row.completed) / row.enrolled) : 0,
    dropoutRate: row.enrolled ? round((100 * row.dropped) / row.enrolled) : 0,
    totalHours: round(row.seconds / 3600),
    avgMinutesPerEnrolment: row.enrolled ? round(row.seconds / 60 / row.enrolled) : 0,
    avgProgress: round(row.avg_progress),
  };
}

/* ───────── platform overview ───────── */

export function overview(db, config, { granularity = 'day' } = {}) {
  if (!GRANULARITIES.includes(granularity)) granularity = 'day';
  return cached(`overview:${granularity}`, 60_000, async () => {
    const count = { day: 30, week: 12, month: 12 }[granularity];
    const bs = buckets(granularity, count);
    const t = today();

    const [totals, counts, newLearners, enrollments, completions, active, minutes, courses, activeMonth] = await Promise.all([
      db.get(`SELECT COUNT(*) AS n,
                COALESCE(SUM(CASE WHEN created_day >= ? THEN 1 ELSE 0 END),0) AS d7,
                COALESCE(SUM(CASE WHEN created_day >= ? THEN 1 ELSE 0 END),0) AS d30
              FROM users WHERE role = 'learner'`, [addDays(t, -6), addDays(t, -29)]),
      courseCounts(db, config, null),
      countSeries(db, { sql: `SELECT created_day AS day, COUNT(*) AS n FROM users WHERE role = 'learner' AND created_day BETWEEN ? AND ? GROUP BY created_day`, params: [] }, granularity, bs),
      countSeries(db, { sql: `SELECT enrolled_day AS day, COUNT(*) AS n FROM enrollments WHERE enrolled_day BETWEEN ? AND ? GROUP BY enrolled_day`, params: [] }, granularity, bs),
      countSeries(db, { sql: `SELECT completed_day AS day, COUNT(*) AS n FROM enrollments WHERE completed_day BETWEEN ? AND ? GROUP BY completed_day`, params: [] }, granularity, bs),
      activeSeries(db, null, bs),
      countSeries(db, { sql: `SELECT day, SUM(seconds)/60 AS n FROM activity_daily WHERE day BETWEEN ? AND ? GROUP BY day`, params: [] }, granularity, bs),
      coursesTable(db, config),
      db.get(`SELECT COUNT(DISTINCT user_id) AS n FROM activity_daily WHERE day >= ? AND seconds > 0`, [addDays(t, -29)]),
    ]);

    const activeNow = await Promise.all([
      db.get('SELECT COUNT(DISTINCT user_id) AS n FROM activity_daily WHERE day = ?', [t]),
      db.get('SELECT COUNT(DISTINCT user_id) AS n FROM activity_daily WHERE day >= ?', [addDays(t, -6)]),
    ]);
    const ratingDist = await ratingDistribution(db, null);
    return {
      granularity,
      definitions: DEFINITIONS(config),
      kpis: {
        learners: totals.n,
        newLearners7d: totals.d7,
        newLearners30d: totals.d30,
        activeToday: activeNow[0].n,
        activeWeek: activeNow[1].n,
        activeMonth: activeMonth.n,
        ...counts,
      },
      series: { newLearners, enrollments, completions, activeLearners: active, minutes },
      courses,
      ratingDistribution: ratingDist,
    };
  });
}

const DEFINITIONS = (config) => ({
  completed: 'Finished every item in the course, including passing each unit assessment (B or higher).',
  dropped: `Enrolled, not finished, and no learning activity for ${config.dropoutDays} days.`,
  inProgress: 'Enrolled, not finished and active within the dropout window.',
  completionRate: 'Completed ÷ all enrolments.',
  dropoutRate: 'Dropped out ÷ all enrolments.',
  active: 'Learners with recorded learning time in the period.',
});

async function coursesTable(db, config) {
  const cs = await db.all('SELECT id, slug, title, status, cover_theme, category, est_minutes FROM courses ORDER BY created_at');
  const out = [];
  for (const c of cs) {
    const k = await courseCounts(db, config, c.id);
    out.push({ id: c.id, slug: c.slug, title: c.title, status: c.status, coverTheme: c.cover_theme, category: c.category, ...k });
  }
  return out;
}

const RATING_ORDER = ['A+', 'A', 'B+', 'B', 'C'];
async function ratingDistribution(db, courseId) {
  // Each learner's best attempt per assessment, then count by rating.
  const rows = await db.all(
    `SELECT a.user_id, a.item_id, a.rating, a.score FROM assessment_attempts a ${courseId ? 'WHERE a.course_id = ?' : ''}`,
    courseId ? [courseId] : [],
  );
  const best = new Map();
  for (const r of rows) {
    const k = `${r.user_id}|${r.item_id}`;
    if (!best.has(k) || best.get(k).score < r.score) best.set(k, r);
  }
  const counts = Object.fromEntries(RATING_ORDER.map((r) => [r, 0]));
  for (const r of best.values()) counts[r.rating] += 1;
  return RATING_ORDER.map((r) => ({ rating: r, count: counts[r] }));
}

/* ───────── one course ───────── */

export function courseAnalytics(db, config, courseId, { granularity = 'day' } = {}) {
  if (!GRANULARITIES.includes(granularity)) granularity = 'day';
  return cached(`course:${courseId}:${granularity}`, 60_000, async () => {
    const course = await db.get('SELECT id, slug, title, status, est_minutes FROM courses WHERE id = ?', [courseId]);
    if (!course) return null;
    const count = { day: 30, week: 12, month: 12 }[granularity];
    const bs = buckets(granularity, count);
    const kpis = await courseCounts(db, config, courseId);

    const [enrollments, completions, active, minutes] = await Promise.all([
      countSeries(db, { sql: `SELECT enrolled_day AS day, COUNT(*) AS n FROM enrollments WHERE course_id = ? AND enrolled_day BETWEEN ? AND ? GROUP BY enrolled_day`, params: [courseId] }, granularity, bs),
      countSeries(db, { sql: `SELECT completed_day AS day, COUNT(*) AS n FROM enrollments WHERE course_id = ? AND completed_day BETWEEN ? AND ? GROUP BY completed_day`, params: [courseId] }, granularity, bs),
      activeSeries(db, courseId, bs),
      countSeries(db, { sql: `SELECT day, SUM(seconds)/60 AS n FROM activity_daily WHERE course_id = ? AND day BETWEEN ? AND ? GROUP BY day`, params: [courseId] }, granularity, bs),
    ]);

    // Funnel: how many enrolled learners completed each step, in course order.
    const items = await db.all(
      `SELECT i.id, i.seq, i.kind, i.title, i.unit_id, u.title AS unit_title, u.position AS unit_pos, i.session_id
         FROM items i JOIN units u ON u.id = i.unit_id WHERE i.course_id = ? ORDER BY i.seq`,
      [courseId],
    );
    const doneRows = await db.all(
      `SELECT item_id, COUNT(*) AS done, COALESCE(SUM(seconds),0) AS secs, SUM(CASE WHEN completed_at IS NULL THEN 1 ELSE 0 END) AS started
         FROM item_progress WHERE course_id = ? GROUP BY item_id`,
      [courseId],
    );
    const dm = new Map(doneRows.map((r) => [r.item_id, r]));
    const enrolled = kpis.enrolled || 1;
    const funnel = items.map((i, idx) => {
      const r = dm.get(i.id);
      const completed = r ? r.done - r.started : 0;
      return { id: i.id, seq: idx + 1, kind: i.kind, title: i.title, unit: i.unit_title, completed, pct: round((100 * completed) / enrolled) };
    });
    const unitTime = {};
    items.forEach((i) => {
      const r = dm.get(i.id);
      const u = (unitTime[i.unit_id] ||= { unit: i.unit_title, pos: i.unit_pos, seconds: 0, learners: 0 });
      u.seconds += r ? r.secs : 0;
    });
    const timePerUnit = Object.values(unitTime)
      .sort((a, b) => a.pos - b.pos)
      .map((u) => ({ unit: u.unit, avgMinutes: kpis.enrolled ? round(u.seconds / 60 / kpis.enrolled) : 0 }));

    // Where do learners who dropped out stop? (last completed step)
    const cut = cutoffIso(config);
    const droppedLast = await db.all(
      `SELECT e.user_id,
              (SELECT MAX(i.seq) FROM item_progress p JOIN items i ON i.id = p.item_id
                WHERE p.user_id = e.user_id AND p.course_id = e.course_id AND p.completed_at IS NOT NULL) AS last_seq
         FROM enrollments e
        WHERE e.course_id = ? AND e.status <> 'completed' AND COALESCE(e.last_activity_at, e.enrolled_at) < ?`,
      [courseId, cut],
    );
    const unitBySeq = items.map((i) => i.unit_title);
    const dropByUnit = {};
    for (const r of droppedLast) {
      const label = r.last_seq == null ? 'Never started' : unitBySeq[r.last_seq] || 'Unknown';
      dropByUnit[label] = (dropByUnit[label] || 0) + 1;
    }
    const dropOff = [...(dropByUnit['Never started'] ? ['Never started'] : []), ...[...new Set(unitBySeq)]].map((label) => ({ label, count: dropByUnit[label] || 0 }));

    // Quiz accuracy: first-attempt correctness per question (the honest measure of what was understood).
    const qrows = await db.all(
      `SELECT item_id, question_id, COUNT(*) AS attempts,
              SUM(CASE WHEN attempt_no = 1 THEN 1 ELSE 0 END) AS first_n,
              SUM(CASE WHEN attempt_no = 1 AND correct = 1 THEN 1 ELSE 0 END) AS first_ok
         FROM quiz_attempts WHERE course_id = ? GROUP BY item_id, question_id`,
      [courseId],
    );
    const itemRows = await db.all(`SELECT id, title, body, session_id FROM items WHERE course_id = ? AND kind = 'quiz'`, [courseId]);
    const qmeta = new Map();
    for (const it of itemRows) for (const q of safeJson(it.body, {}).questions || []) qmeta.set(`${it.id}|${q.id}`, { prompt: q.prompt, item: it.title });
    const questions = qrows
      .map((r) => ({
        prompt: qmeta.get(`${r.item_id}|${r.question_id}`)?.prompt || r.question_id,
        quiz: qmeta.get(`${r.item_id}|${r.question_id}`)?.item || '',
        learners: r.first_n,
        attempts: r.attempts,
        firstTryRate: r.first_n ? round((100 * r.first_ok) / r.first_n) : 0,
      }))
      .sort((a, b) => a.firstTryRate - b.firstTryRate);

    // Assessments per unit.
    const assessItems = items.filter((i) => i.kind === 'assessment');
    const assessments = [];
    for (const a of assessItems) {
      const rows = await db.all('SELECT user_id, score, rating, passed, created_at FROM assessment_attempts WHERE item_id = ? ORDER BY created_at', [a.id]);
      const byUser = new Map();
      for (const r of rows) {
        const u = byUser.get(r.user_id) || { attempts: 0, best: null, passedAt: null };
        u.attempts += 1;
        if (!u.best || r.score > u.best.score) u.best = r;
        if (r.passed && !u.passedAt) u.passedAt = u.attempts;
        byUser.set(r.user_id, u);
      }
      const takers = byUser.size;
      const passers = [...byUser.values()].filter((u) => u.passedAt);
      const dist = Object.fromEntries(RATING_ORDER.map((r) => [r, 0]));
      for (const u of byUser.values()) dist[u.best.rating] += 1;
      assessments.push({
        id: a.id,
        unit: a.unit_title,
        takers,
        attempts: rows.length,
        passRate: takers ? round((100 * passers.length) / takers) : 0,
        avgAttemptsToPass: passers.length ? round(passers.reduce((n, u) => n + u.passedAt, 0) / passers.length) : 0,
        avgScore: takers ? round([...byUser.values()].reduce((n, u) => n + u.best.score, 0) / takers) : 0,
        ratings: RATING_ORDER.map((r) => ({ rating: r, count: dist[r] })),
      });
    }

    // Time-spent distribution (hours per enrolment).
    const secs = await db.all('SELECT total_seconds FROM enrollments WHERE course_id = ?', [courseId]);
    const edges = [0, 10, 30, 60, 120, 240, Infinity];
    const timeHist = edges.slice(0, -1).map((lo, i) => ({
      label: edges[i + 1] === Infinity ? `${lo}+ min` : `${lo}–${edges[i + 1]} min`,
      count: secs.filter((s) => s.total_seconds / 60 >= lo && s.total_seconds / 60 < edges[i + 1]).length,
    }));

    // Retention: share of enrolees who were active again N days after enrolling (only cohorts old enough).
    const retention = [];
    for (const n of [1, 7, 14, 30]) {
      const pairs = await db.all(
        `SELECT e.user_id, e.enrolled_day FROM enrollments e WHERE e.course_id = ? AND e.enrolled_day <= ?`,
        [courseId, addDays(today(), -n)],
      );
      if (!pairs.length) {
        retention.push({ day: n, cohort: 0, rate: null });
        continue;
      }
      const act = await db.all(`SELECT user_id, MAX(day) AS last_day FROM activity_daily WHERE course_id = ? AND seconds > 0 GROUP BY user_id`, [courseId]);
      const last = new Map(act.map((a) => [a.user_id, a.last_day]));
      const kept = pairs.filter((p) => last.has(p.user_id) && daysBetween(p.enrolled_day, last.get(p.user_id)) >= n).length;
      retention.push({ day: n, cohort: pairs.length, rate: round((100 * kept) / pairs.length) });
    }

    return {
      granularity,
      course,
      definitions: DEFINITIONS(config),
      kpis,
      series: { enrollments, completions, activeLearners: active, minutes },
      funnel,
      timePerUnit,
      dropOff,
      questions: questions.slice(0, 12),
      assessments,
      timeHist,
      retention,
      ratingDistribution: await ratingDistribution(db, courseId),
    };
  });
}

/* ───────── users ───────── */

export async function listUsers(db, { q = '', page = 1, pageSize = 20, sort = 'created', role = '' }) {
  const where = [];
  const params = [];
  if (q) {
    where.push('(LOWER(u.email) LIKE ? OR LOWER(u.name) LIKE ?)');
    params.push(`%${q.toLowerCase()}%`, `%${q.toLowerCase()}%`);
  }
  if (role) {
    where.push('u.role = ?');
    params.push(role);
  }
  const W = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const orderBy = { created: 'u.created_at DESC', login: 'u.last_login_at DESC', name: 'LOWER(u.name) ASC', time: 'secs DESC' }[sort] || 'u.created_at DESC';
  const total = (await db.get(`SELECT COUNT(*) AS n FROM users u ${W}`, params)).n;
  const rows = await db.all(
    `SELECT u.id, u.email, u.name, u.role, u.status, u.created_at, u.last_login_at, u.login_count,
            (SELECT COUNT(*) FROM enrollments e WHERE e.user_id = u.id) AS courses,
            (SELECT COALESCE(SUM(total_seconds),0) FROM enrollments e WHERE e.user_id = u.id) AS secs,
            (SELECT COUNT(*) FROM enrollments e WHERE e.user_id = u.id AND e.status = 'completed') AS completed
       FROM users u ${W} ORDER BY ${orderBy} LIMIT ? OFFSET ?`,
    [...params, pageSize, (page - 1) * pageSize],
  );
  return {
    total,
    page,
    pageSize,
    users: rows.map((r) => ({
      id: r.id, email: r.email, name: r.name, role: r.role, status: r.status,
      createdAt: r.created_at, lastLoginAt: r.last_login_at, loginCount: r.login_count,
      courses: r.courses, completed: r.completed, minutes: Math.round(r.secs / 60),
    })),
  };
}

export async function userDetail(db, id) {
  const u = await db.get('SELECT id, email, name, role, status, created_at, last_login_at, login_count, google_sub FROM users WHERE id = ?', [id]);
  if (!u) return null;
  const enr = await db.all(
    `SELECT e.*, c.title, c.slug FROM enrollments e JOIN courses c ON c.id = e.course_id WHERE e.user_id = ? ORDER BY e.enrolled_at DESC`,
    [id],
  );
  const perUnit = await db.all(
    `SELECT un.title AS unit, i.course_id, SUM(p.seconds) AS secs
       FROM item_progress p JOIN items i ON i.id = p.item_id JOIN units un ON un.id = i.unit_id
      WHERE p.user_id = ? GROUP BY un.id, un.title, i.course_id, un.position ORDER BY un.position`,
    [id],
  );
  const assess = await db.all(
    `SELECT a.rating, a.score, a.passed, a.created_at, i.title, c.title AS course
       FROM assessment_attempts a JOIN items i ON i.id = a.item_id JOIN courses c ON c.id = a.course_id
      WHERE a.user_id = ? ORDER BY a.created_at DESC LIMIT 20`,
    [id],
  );
  const activity = await db.all('SELECT day, SUM(seconds) AS seconds FROM activity_daily WHERE user_id = ? AND day >= ? GROUP BY day ORDER BY day', [id, addDays(today(), -29)]);
  const counts = await db.get('SELECT COUNT(*) AS notes FROM notes WHERE user_id = ?', [id]);
  return {
    user: { id: u.id, email: u.email, name: u.name, role: u.role, status: u.status, createdAt: u.created_at, lastLoginAt: u.last_login_at, loginCount: u.login_count, google: !!u.google_sub },
    enrollments: enr.map((e) => ({
      course: e.title, slug: e.slug, status: e.status, enrolledAt: e.enrolled_at, lastActivityAt: e.last_activity_at, completedAt: e.completed_at,
      minutes: Math.round(e.total_seconds / 60), percent: e.items_total ? Math.round((100 * e.items_done) / e.items_total) : 0,
      units: perUnit.filter((p) => p.course_id === e.course_id).map((p) => ({ unit: p.unit, minutes: Math.round(p.secs / 60) })),
    })),
    assessments: assess.map((a) => ({ course: a.course, title: a.title, rating: a.rating, score: a.score, passed: !!a.passed, at: a.created_at })),
    activity: activity.map((a) => ({ day: a.day, minutes: Math.round(a.seconds / 60) })),
    notes: counts.notes,
  };
}
