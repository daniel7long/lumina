// Course structure: validate, save, load (admin view) and learner-safe views.
//
// Hierarchy:  Course → Unit → Lesson → Session → Item(video | reading | quiz)
//             Course → Unit → [overview item] … [assessment item]
// Items are stored flat with a course-wide "seq" so "next item" is trivial and cheap.

import { bad, safeJson, uid, nowIso } from '../lib/util.js';

export const ITEM_KINDS = ['video', 'reading', 'quiz'];
export const CATEGORIES = [
  'Language and Speech',
  'Arts & Humanities',
  'Business',
  'Computer Science & Programming',
  'Data Science and Causal Reasoning',
  'Life Sciences',
  'Mathematics and Logic',
  'Engineering and Technology',
  'Social Sciences',
];
export const COVER_THEMES = ['blue', 'teal', 'amber', 'violet', 'rose', 'slate'];

const LIMITS = { units: 30, lessons: 30, sessions: 30, items: 12, questions: 10, options: 6, tasks: 20 };
const ALLOWED_VIDEO_HOSTS = ['www.youtube.com', 'youtube.com', 'youtu.be', 'www.youtube-nocookie.com', 'player.vimeo.com', 'vimeo.com'];

/* ───────────────────────────── helpers ───────────────────────────── */

export function slugify(s) {
  return String(s).toLowerCase().normalize('NFKD').replace(/\./g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'course';
}

export function countQuestions(item) {
  return item.kind === 'quiz' ? (item.body?.questions || []).length : 0;
}

/** Turn a pasted YouTube/Vimeo link into an embeddable URL; return null for direct media. */
export function embedFor(url) {
  try {
    const u = new URL(url);
    if (['www.youtube.com', 'youtube.com'].includes(u.hostname) && u.searchParams.get('v'))
      return `https://www.youtube-nocookie.com/embed/${u.searchParams.get('v')}`;
    if (u.hostname === 'youtu.be') return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (u.hostname === 'www.youtube-nocookie.com' && u.pathname.startsWith('/embed/')) return url;
    if (u.hostname === 'vimeo.com' && /^\/\d+$/.test(u.pathname)) return `https://player.vimeo.com/video${u.pathname}`;
    if (u.hostname === 'player.vimeo.com') return url;
  } catch {
    /* fallthrough */
  }
  return null;
}

/* ───────────────────────────── validation ───────────────────────────── */

/**
 * Structural validation — must pass for a draft to be saved.
 * Returns the sanitised tree (unknown fields dropped, strings trimmed).
 */
export function sanitizeTree(input) {
  if (!input || typeof input !== 'object') throw bad('Course content is missing.');
  const seen = new Set();
  const id = (v, what) => {
    const s = typeof v === 'string' && /^[A-Za-z0-9:_.-]{1,120}$/.test(v) ? v : null;
    if (!s) throw bad(`${what} has an invalid id.`);
    if (seen.has(s)) throw bad(`Duplicate id "${s}".`);
    seen.add(s);
    return s;
  };
  const text = (v, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const list = (v, max, per = 500) => (Array.isArray(v) ? v.slice(0, max).map((x) => text(x, per)).filter(Boolean) : []);
  const minutes = (v) => Math.max(0, Math.min(600, Math.round(Number(v) || 0)));
  const arr = (v, max, what) => {
    if (v == null) return [];
    if (!Array.isArray(v)) throw bad(`${what} must be a list.`);
    if (v.length > max) throw bad(`Too many ${what} (max ${max}).`);
    return v;
  };

  const units = arr(input.units, LIMITS.units, 'units').map((u) => ({
    id: id(u.id, 'A unit'),
    title: text(u.title) || 'Untitled unit',
    summary: text(u.summary, 600),
    objectives: list(u.objectives, 12),
    lessons: arr(u.lessons, LIMITS.lessons, 'lessons').map((l) => ({
      id: id(l.id, 'A lesson'),
      title: text(l.title) || 'Untitled lesson',
      summary: text(l.summary, 600),
      outcomes: list(l.outcomes, 16),
      sessions: arr(l.sessions, LIMITS.sessions, 'sessions').map((s) => ({
        id: id(s.id, 'A session'),
        title: text(s.title) || 'Untitled session',
        summary: text(s.summary, 400),
        items: arr(s.items, LIMITS.items, 'items').map((it) => {
          if (!ITEM_KINDS.includes(it.kind)) throw bad(`Unknown item type "${it.kind}".`);
          return {
            id: id(it.id, 'An item'),
            kind: it.kind,
            title: text(it.title) || 'Untitled',
            estMinutes: minutes(it.estMinutes),
            body: sanitizeBody(it.kind, it.body, { text, list }),
          };
        }),
      })),
    })),
    assessment: u.assessment
      ? {
          id: id(u.assessment.id, 'An assessment'),
          title: text(u.assessment.title) || 'Unit assessment',
          estMinutes: minutes(u.assessment.estMinutes) || 20,
          body: sanitizeAssessment(u.assessment.body, { text, list, arr }),
        }
      : null,
  }));
  return {
    meta: {
      title: text(input.meta?.title) || 'Untitled course',
      subtitle: text(input.meta?.subtitle, 300),
      description: text(input.meta?.description, 4000),
      category: CATEGORIES.includes(input.meta?.category) ? input.meta.category : CATEGORIES[0],
      level: text(input.meta?.level, 60),
      coverTheme: COVER_THEMES.includes(input.meta?.coverTheme) ? input.meta.coverTheme : 'blue',
    },
    units,
  };
}

function sanitizeQuestions(raw, { text, arr }) {
  return arr(raw, LIMITS.questions, 'questions').map((q, i) => {
    const type = q.type === 'tf' ? 'tf' : 'mcq';
    const options = arr(q.options, LIMITS.options, 'options').map((o, j) => ({
      id: text(o.id, 40) || `o${j + 1}`,
      text: text(o.text, 400),
      explanation: text(o.explanation, 800),
    }));
    return {
      id: text(q.id, 60) || `q${i + 1}`,
      type,
      prompt: text(q.prompt, 1000),
      options,
      answer: text(q.answer, 40),
    };
  });
}

function sanitizeBody(kind, body = {}, { text, list }) {
  const arr = (v, max) => (Array.isArray(v) ? v.slice(0, max) : []);
  if (kind === 'video') {
    return {
      url: text(body.url, 500),
      durationSec: Math.max(0, Math.round(Number(body.durationSec) || 0)),
      transcript: typeof body.transcript === 'string' ? body.transcript.slice(0, 20000) : '',
      caption: text(body.caption, 300),
    };
  }
  if (kind === 'reading') return { markdown: typeof body.markdown === 'string' ? body.markdown.slice(0, 60000) : '' };
  return { questions: sanitizeQuestions(body.questions, { text, arr }) };
}

function sanitizeAssessment(body = {}, { text, list, arr }) {
  const tasks = arr(body.tasks, LIMITS.tasks, 'tasks').map((t, i) => {
    const base = {
      id: text(t.id, 60) || `t${i + 1}`,
      type: ['mcq', 'tf', 'written'].includes(t.type) ? t.type : 'mcq',
      prompt: text(t.prompt, 4000),
      points: Math.max(1, Math.min(100, Math.round(Number(t.points) || 10))),
    };
    if (base.type === 'written') {
      return {
        ...base,
        scenario: typeof t.scenario === 'string' ? t.scenario.slice(0, 4000) : '',
        starter: text(t.starter, 600),
        minWords: Math.max(0, Math.min(2000, Math.round(Number(t.minWords) || 0))),
        checklist: list(t.checklist, 12),
        modelAnswer: typeof t.modelAnswer === 'string' ? t.modelAnswer.slice(0, 4000) : '',
        rubric: {
          criteria: arr(t.rubric?.criteria, 10, 'criteria').map((c, ci) => ({
            id: text(c.id, 60) || `c${ci + 1}`,
            label: text(c.label, 120),
            description: text(c.description, 400),
            weight: Math.max(1, Math.min(100, Math.round(Number(c.weight) || 1))),
            checks: arr(c.checks, 12, 'checks').map((k, ki) => ({
              id: text(k.id, 60) || `k${ki + 1}`,
              label: text(k.label, 200),
              hint: text(k.hint, 300),
              type: ['minWords', 'maxWords', 'anyOf', 'allOf', 'question', 'sentences'].includes(k.type) ? k.type : 'minWords',
              value: Array.isArray(k.value) ? k.value.slice(0, 40).map((v) => text(v, 80)) : Number(k.value) || 0,
              min: Math.max(1, Math.round(Number(k.min) || 1)),
            })),
          })),
        },
      };
    }
    return {
      ...base,
      options: arr(t.options, LIMITS.options, 'options').map((o, j) => ({
        id: text(o.id, 40) || `o${j + 1}`,
        text: text(o.text, 400),
        explanation: text(o.explanation, 800),
      })),
      answer: text(t.answer, 40),
    };
  });
  return { instructions: typeof body.instructions === 'string' ? body.instructions.slice(0, 8000) : '', tasks };
}

/** Content rules that must be satisfied before a course can be released to learners. */
export function publishProblems(tree) {
  const problems = [];
  const at = (where, msg) => problems.push(`${where}: ${msg}`);
  const checkQ = (q, where) => {
    if (!q.prompt) at(where, 'question has no text.');
    const n = q.options.length;
    if (q.type === 'tf') {
      if (n !== 2) at(where, 'True/False questions need exactly 2 options.');
    } else if (n < 3 || n > 4) at(where, 'multiple-choice questions need 3 or 4 options.');
    if (!q.options.some((o) => o.id === q.answer)) at(where, 'no correct answer selected.');
    q.options.forEach((o, i) => {
      if (!o.text) at(where, `option ${i + 1} is empty.`);
      if (!o.explanation) at(where, `option ${i + 1} needs an explanation.`);
    });
    if (new Set(q.options.map((o) => o.id)).size !== n) at(where, 'option ids must be unique.');
  };
  if (!tree.meta.title || tree.meta.title === 'Untitled course') at('Course', 'needs a title.');
  if (!tree.meta.description) at('Course', 'needs a description.');
  if (!tree.units.length) at('Course', 'needs at least one unit.');
  tree.units.forEach((u, ui) => {
    const U = `Unit ${ui + 1}`;
    if (!u.objectives.length) at(U, 'needs at least one learning objective.');
    if (!u.lessons.length) at(U, 'needs at least one lesson.');
    if (!u.assessment || !u.assessment.body.tasks.length) at(U, 'needs a unit assessment with at least one task.');
    u.assessment?.body.tasks.forEach((t, ti) => {
      const W = `${U} assessment, task ${ti + 1}`;
      if (!t.prompt) at(W, 'needs a prompt.');
      if (t.type === 'written') {
        const crit = t.rubric.criteria;
        if (!crit.length) at(W, 'written tasks need a rubric with at least one criterion.');
        crit.forEach((c) => {
          if (!c.label) at(W, 'a rubric criterion has no label.');
          if (!c.checks.length) at(W, `criterion "${c.label}" needs at least one check.`);
        });
      } else checkQ(t, W);
    });
    u.lessons.forEach((l, li) => {
      const L = `${U}, Lesson ${li + 1}`;
      if (!l.sessions.length) at(L, 'needs at least one session.');
      l.sessions.forEach((s, si) => {
        const S = `${L}, Session ${si + 1}`;
        const content = s.items.filter((i) => i.kind !== 'quiz');
        const quizzes = s.items.filter((i) => i.kind === 'quiz');
        const qn = quizzes.reduce((n, i) => n + countQuestions(i), 0);
        if (!content.length) at(S, 'needs a video or reading.');
        if (qn < 1 || qn > 2) at(S, `needs 1–2 quiz questions (has ${qn}).`);
        s.items.forEach((it) => {
          if (it.kind === 'reading' && !it.body.markdown.trim()) at(S, `reading "${it.title}" is empty.`);
          if (it.kind === 'video') {
            const url = it.body.url;
            if (url) {
              let host = '';
              try {
                const parsed = new URL(url);
                host = parsed.hostname;
                if (parsed.protocol !== 'https:') at(S, `video "${it.title}" must use https.`);
              } catch {
                at(S, `video "${it.title}" has an invalid URL.`);
              }
              const direct = /\.(mp4|webm|m3u8)(\?.*)?$/i.test(url);
              if (host && !direct && !ALLOWED_VIDEO_HOSTS.includes(host))
                at(S, `video "${it.title}": use a YouTube/Vimeo link or a direct .mp4/.webm link.`);
            }
            if (!url && !it.body.transcript.trim()) at(S, `video "${it.title}" needs a link or a transcript.`);
          }
          if (it.kind === 'quiz') it.body.questions.forEach((q, qi) => checkQ(q, `${S}, quiz question ${qi + 1}`));
        });
      });
    });
  });
  return problems;
}

/* ───────────────────────────── persistence ───────────────────────────── */

/** Replace a course's structure with `tree` (already sanitised). Runs inside a transaction. */
export async function saveTree(t, courseId, tree) {
  const keep = { units: [], lessons: [], sessions: [], items: [] };
  const rows = { units: [], lessons: [], sessions: [], items: [] };
  let seq = 0;
  let minutes = 0;

  tree.units.forEach((u, ui) => {
    keep.units.push(u.id);
    rows.units.push([u.id, courseId, ui, u.title, u.summary, JSON.stringify(u.objectives)]);
    const overviewId = `${u.id}:overview`;
    keep.items.push(overviewId);
    rows.items.push([overviewId, courseId, u.id, null, null, 'overview', seq++, `${u.title} – overview`, 3, '{}']);
    minutes += 3;
    u.lessons.forEach((l, li) => {
      keep.lessons.push(l.id);
      rows.lessons.push([l.id, courseId, u.id, li, l.title, l.summary, JSON.stringify(l.outcomes)]);
      l.sessions.forEach((s, si) => {
        keep.sessions.push(s.id);
        rows.sessions.push([s.id, courseId, l.id, si, s.title, s.summary]);
        s.items.forEach((it) => {
          keep.items.push(it.id);
          rows.items.push([it.id, courseId, u.id, l.id, s.id, it.kind, seq++, it.title, it.estMinutes, JSON.stringify(it.body)]);
          minutes += it.estMinutes;
        });
      });
    });
    if (u.assessment) {
      keep.items.push(u.assessment.id);
      rows.items.push([u.assessment.id, courseId, u.id, null, null, 'assessment', seq++, u.assessment.title, u.assessment.estMinutes, JSON.stringify(u.assessment.body)]);
      minutes += u.assessment.estMinutes;
    }
  });

  // 0. Ids are global primary keys: refuse to touch rows that belong to another course.
  for (const [table, ids] of [['units', keep.units], ['lessons', keep.lessons], ['lesson_sessions', keep.sessions], ['items', keep.items]]) {
    for (let i = 0; i < ids.length; i += 200) {
      const chunk = ids.slice(i, i + 200);
      const clash = await t.get(
        `SELECT id FROM ${table} WHERE course_id <> ? AND id IN (${chunk.map(() => '?').join(',')})`,
        [courseId, ...chunk],
      );
      if (clash) throw bad(`The id "${clash.id}" is already used by another course. Generate new ids when copying content.`);
    }
  }

  // 1. Remove what disappeared (children cascade, taking learner progress for deleted items with them).
  for (const [table, ids] of [['items', keep.items], ['lesson_sessions', keep.sessions], ['lessons', keep.lessons], ['units', keep.units]]) {
    const existing = await t.all(`SELECT id FROM ${table} WHERE course_id = ?`, [courseId]);
    const keepSet = new Set(ids);
    for (const r of existing) if (!keepSet.has(r.id)) await t.run(`DELETE FROM ${table} WHERE id = ?`, [r.id]);
  }

  // 2. Upsert parents first so foreign keys hold.
  for (const r of rows.units)
    await t.run(
      `INSERT INTO units (id, course_id, position, title, summary, objectives) VALUES (?,?,?,?,?,?)
       ON CONFLICT (id) DO UPDATE SET position=excluded.position, title=excluded.title, summary=excluded.summary, objectives=excluded.objectives`,
      r,
    );
  for (const r of rows.lessons)
    await t.run(
      `INSERT INTO lessons (id, course_id, unit_id, position, title, summary, outcomes) VALUES (?,?,?,?,?,?,?)
       ON CONFLICT (id) DO UPDATE SET unit_id=excluded.unit_id, position=excluded.position, title=excluded.title, summary=excluded.summary, outcomes=excluded.outcomes`,
      r,
    );
  for (const r of rows.sessions)
    await t.run(
      `INSERT INTO lesson_sessions (id, course_id, lesson_id, position, title, summary) VALUES (?,?,?,?,?,?)
       ON CONFLICT (id) DO UPDATE SET lesson_id=excluded.lesson_id, position=excluded.position, title=excluded.title, summary=excluded.summary`,
      r,
    );
  for (const r of rows.items)
    await t.run(
      `INSERT INTO items (id, course_id, unit_id, lesson_id, session_id, kind, seq, title, est_minutes, body) VALUES (?,?,?,?,?,?,?,?,?,?)
       ON CONFLICT (id) DO UPDATE SET unit_id=excluded.unit_id, lesson_id=excluded.lesson_id, session_id=excluded.session_id,
         kind=excluded.kind, seq=excluded.seq, title=excluded.title, est_minutes=excluded.est_minutes, body=excluded.body`,
      r,
    );

  const m = tree.meta;
  await t.run(
    `UPDATE courses SET title=?, subtitle=?, description=?, category=?, level=?, cover_theme=?, est_minutes=?, updated_at=?, revision=revision+1 WHERE id=?`,
    [m.title, m.subtitle, m.description, m.category, m.level, m.coverTheme, minutes, nowIso(), courseId],
  );
  // Keep every enrolment's counters in step with the new structure.
  await t.run(
    `UPDATE enrollments SET items_total = ?,
       items_done = (SELECT COUNT(*) FROM item_progress ip WHERE ip.user_id = enrollments.user_id AND ip.course_id = enrollments.course_id AND ip.completed_at IS NOT NULL)
     WHERE course_id = ?`,
    [rows.items.length, courseId],
  );
}

export async function createCourse(db, { title, userId, tree }) {
  const id = uid();
  let slug = slugify(title);
  if (await db.get('SELECT 1 AS x FROM courses WHERE slug = ?', [slug])) slug = `${slug}-${id.slice(0, 6)}`;
  const t0 = nowIso();
  await db.tx(async (t) => {
    await t.run(
      `INSERT INTO courses (id, slug, title, status, created_by, created_at, updated_at) VALUES (?,?,?,?,?,?,?)`,
      [id, slug, title, 'draft', userId, t0, t0],
    );
    await saveTree(t, id, sanitizeTree(tree || { meta: { title }, units: [] }));
  });
  return { id, slug };
}

/** Full tree including answers — admin/editor use only. */
export async function loadTree(db, courseId) {
  const course = await db.get('SELECT * FROM courses WHERE id = ?', [courseId]);
  if (!course) return null;
  const [units, lessons, sessions, items] = await Promise.all([
    db.all('SELECT * FROM units WHERE course_id = ? ORDER BY position', [courseId]),
    db.all('SELECT * FROM lessons WHERE course_id = ? ORDER BY position', [courseId]),
    db.all('SELECT * FROM lesson_sessions WHERE course_id = ? ORDER BY position', [courseId]),
    db.all('SELECT * FROM items WHERE course_id = ? ORDER BY seq', [courseId]),
  ]);
  const by = (arr, key) => arr.reduce((m, x) => ((m[x[key]] ||= []).push(x), m), {});
  const lessonsByUnit = by(lessons, 'unit_id');
  const sessionsByLesson = by(sessions, 'lesson_id');
  const itemsBySession = by(items.filter((i) => i.session_id), 'session_id');
  const assessByUnit = Object.fromEntries(items.filter((i) => i.kind === 'assessment').map((i) => [i.unit_id, i]));
  return {
    course,
    meta: {
      title: course.title,
      subtitle: course.subtitle,
      description: course.description,
      category: course.category,
      level: course.level,
      coverTheme: course.cover_theme,
    },
    units: units.map((u) => ({
      id: u.id,
      title: u.title,
      summary: u.summary,
      objectives: safeJson(u.objectives, []),
      lessons: (lessonsByUnit[u.id] || []).map((l) => ({
        id: l.id,
        title: l.title,
        summary: l.summary,
        outcomes: safeJson(l.outcomes, []),
        sessions: (sessionsByLesson[l.id] || []).map((s) => ({
          id: s.id,
          title: s.title,
          summary: s.summary,
          items: (itemsBySession[s.id] || []).map((i) => ({
            id: i.id,
            kind: i.kind,
            title: i.title,
            estMinutes: i.est_minutes,
            body: safeJson(i.body, {}),
          })),
        })),
      })),
      assessment: assessByUnit[u.id]
        ? {
            id: assessByUnit[u.id].id,
            title: assessByUnit[u.id].title,
            estMinutes: assessByUnit[u.id].est_minutes,
            body: safeJson(assessByUnit[u.id].body, { instructions: '', tasks: [] }),
          }
        : null,
    })),
  };
}

/* ───────────────────────────── learner-safe views ───────────────────────────── */

const stripQuestion = (q) => ({ id: q.id, type: q.type, prompt: q.prompt, options: q.options.map((o) => ({ id: o.id, text: o.text })) });

/** What a learner may see of an item *before* answering: no answers, no explanations, no regexes. */
export function learnerBody(item, unit) {
  const b = item.body;
  switch (item.kind) {
    case 'video':
      return { url: b.url || '', embedUrl: b.url ? embedFor(b.url) : null, durationSec: b.durationSec || 0, transcript: b.transcript || '', caption: b.caption || '' };
    case 'reading':
      return { markdown: b.markdown || '' };
    case 'quiz':
      return { questions: (b.questions || []).map(stripQuestion) };
    case 'overview':
      return { title: unit.title, summary: unit.summary, objectives: unit.objectives, lessons: unit.lessons.map((l) => ({ title: l.title, outcomes: l.outcomes })) };
    case 'assessment':
      return {
        instructions: b.instructions || '',
        tasks: (b.tasks || []).map((t) =>
          t.type === 'written'
            ? {
                id: t.id,
                type: 'written',
                prompt: t.prompt,
                points: t.points,
                scenario: t.scenario,
                starter: t.starter,
                minWords: t.minWords,
                checklist: t.checklist,
                criteria: t.rubric.criteria.map((c) => ({ id: c.id, label: c.label, description: c.description, weight: c.weight })),
              }
            : { ...stripQuestion(t), points: t.points },
        ),
      };
    default:
      return {};
  }
}
