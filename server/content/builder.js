// Compact authoring layer for the course library.
//
// A course is assembled from two things:
//   1. data/<course>.js  - the learning objectives per unit and module, as given in the course outline
//   2. <course>/unitN.js - the teaching content: sessions (reading + quiz) per module, and the unit assessment
//
// The builder turns these into the full Course → Unit → Lesson → Session → Item tree that the platform stores.
// Ids are derived from positions, so re-seeding is idempotent.
import { tf, session, written, choice } from './helpers.js';

const LETTERS = ['a', 'b', 'c', 'd'];

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/**
 * Multiple choice with one right answer and 2–3 wrong ones.
 * The right option's position is varied deterministically so answers are not always "first".
 * mc(prompt, right, whyRight, [[wrong, whyWrong], …])
 */
export function mc(prompt, right, whyRight, wrongs) {
  const pos = hash(prompt) % (wrongs.length + 1);
  const opts = [...wrongs];
  opts.splice(pos, 0, [right, /^Correct/.test(whyRight) ? whyRight : `Correct. ${whyRight}`]);
  return {
    type: 'mcq',
    prompt,
    options: opts.map(([text, explanation], i) => ({ id: LETTERS[i], text, explanation })),
    answer: LETTERS[pos],
  };
}
export { tf };

/** Written assessment task (scored by a rubric of checks, never by an AI). */
export const wr = (def) => ({ type: 'written', ...def });

const words = (s) => (s.match(/\S+/g) || []).length;
const readMinutes = (md) => Math.max(3, Math.ceil(words(md) / 170) + 1);

function lessonFrom(prefix, ui, unit, mod, spec, lessonWord) {
  if (!spec) throw new Error(`${prefix}: no content for module ${mod.n} (${mod.title})`);
  const id = `${prefix}:u${ui}:m${mod.n}`;
  const outcomes = [...mod.objectives, ...(mod.added || [])];
  const sessions = spec.sessions.map((s, si) => {
    const sid = `${id}:s${si + 1}`;
    return session(sid, s.t, s.s, { reading: { kind: 'reading', title: s.t, estMinutes: readMinutes(s.md), body: { markdown: s.md.trim() } }, quiz: s.q });
  });
  return {
    id,
    title: `${lessonWord} ${mod.n}: ${mod.title}`,
    summary: spec.summary || outcomes[0] || '',
    outcomes,
    sessions,
  };
}

function assessmentFrom(prefix, ui, unitTitle, spec) {
  if (!spec) throw new Error(`${prefix}: unit ${ui} has no assessment`);
  const tasks = spec.tasks;
  const fixed = tasks.reduce((n, t) => n + (t.points || 0), 0);
  const free = tasks.filter((t) => !t.points).length;
  const each = free ? Math.floor((100 - fixed) / free) : 0;
  let left = 100 - fixed - each * free;
  const out = tasks.map((t, i) => {
    const pts = t.points || each + (left > 0 && i === tasks.length - 1 ? left : 0);
    if (t.points == null) { /* last free task takes the rounding remainder */ }
    const id = `t${i + 1}`;
    if (t.type === 'written') { const { points, ...rest } = t; return written(id, pts, rest); }
    const { points, ...q } = t;
    return choice(id, pts, q);
  });
  const hasWritten = tasks.some((t) => t.type === 'written');
  return {
    id: `${prefix}:u${ui}:assessment`,
    title: spec.title || `Unit ${ui} assessment · ${unitTitle}`,
    estMinutes: spec.minutes || Math.max(10, tasks.length * 3),
    body: {
      instructions: spec.instructions || `
## Show what you can do

Answer the ${tasks.length} tasks below. ${hasWritten ? 'Most are multiple-choice or True/False questions that are checked immediately. Written tasks are scored with a **rubric**, a list of clear things your answer should contain.' : 'Each is a multiple-choice or True/False question that is checked immediately, with an explanation for every option.'}

Your work receives a rating: **A+, A, B+, B or C**. You need a **B or higher** to pass this unit. You can try again as many times as you like, and your best result counts.
`,
      tasks: out,
    },
  };
}

/**
 * @param {object} o
 * @param {string} o.prefix   short id prefix, e.g. 'py'
 * @param {object} o.meta     course meta (title, subtitle, description, category, level, coverTheme)
 * @param {Array}  o.data     objectives data (units → modules)
 * @param {object} o.units    { [unitIndex 1-based]: { summary, objectives?, modules: {[moduleNumber]: {summary?, sessions}}, assessment } }
 * @param {string} [o.lessonWord] 'Module' (default) or 'Chapter'
 */
export function buildCourse({ prefix, meta, data, units, lessonWord = 'Module' }) {
  const out = data.map((u, k) => {
    const ui = k + 1;
    const spec = units[ui];
    if (!spec) throw new Error(`${prefix}: no content for unit ${ui} (${u.title})`);
    const lessons = u.modules.map((m) => lessonFrom(prefix, ui, u, m, spec.modules[m.n], lessonWord));
    const auto = u.modules.map((m) => m.objectives[0] || (m.added || [])[0]).filter(Boolean).slice(0, 12);
    return {
      id: `${prefix}:u${ui}`,
      title: u.title,
      summary: spec.summary,
      objectives: spec.objectives || auto,
      lessons,
      assessment: assessmentFrom(prefix, ui, u.title, spec.assessment),
    };
  });
  return { meta, units: out };
}
