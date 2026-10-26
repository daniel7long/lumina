// Tiny authoring DSL so course content reads like an outline instead of JSON.
const LETTERS = ['a', 'b', 'c', 'd'];

/** Multiple choice. options: [[text, explanation], …]; correct: index of the right option. */
export function mcq(prompt, options, correct, extra = {}) {
  return {
    type: 'mcq',
    prompt,
    options: options.map(([text, explanation], i) => ({ id: LETTERS[i], text, explanation })),
    answer: LETTERS[correct],
    ...extra,
  };
}

/** True / False with an explanation for each option. */
export function tf(prompt, isTrue, whyTrue, whyFalse, extra = {}) {
  return {
    type: 'tf',
    prompt,
    options: [
      { id: 'true', text: 'True', explanation: whyTrue },
      { id: 'false', text: 'False', explanation: whyFalse },
    ],
    answer: isTrue ? 'true' : 'false',
    ...extra,
  };
}

export const reading = (title, estMinutes, markdown) => ({ kind: 'reading', title, estMinutes, body: { markdown: markdown.trim() } });
export const video = (title, estMinutes, transcript, caption = '') => ({
  kind: 'video', title, estMinutes, body: { url: '', durationSec: estMinutes * 60, transcript: transcript.trim(), caption },
});

/**
 * One session = content (video and/or reading) followed by a 1–2 question quiz.
 * Ids are derived from the session id so re-seeding is idempotent.
 */
export function session(id, title, summary, { video: v, reading: r, quiz }) {
  const items = [];
  if (v) items.push({ id: `${id}:video`, ...v });
  if (r) items.push({ id: `${id}:reading`, ...r });
  items.push({
    id: `${id}:quiz`, kind: 'quiz', title: 'Check your understanding', estMinutes: 2,
    body: { questions: quiz.map((q, i) => ({ id: `q${i + 1}`, ...q })) },
  });
  return { id, title, summary, items };
}

export const lesson = (id, title, summary, outcomes, sessions) => ({ id, title, summary, outcomes, sessions });

export function written(id, points, def) {
  return { id, type: 'written', points, ...def };
}
export function choice(id, points, q) {
  return { id, points, ...q };
}

/** Rubric check shorthands */
export const K = {
  words: (id, n, label, hint) => ({ id, type: 'minWords', value: n, label, hint }),
  any: (id, list, label, hint, min = 1) => ({ id, type: 'anyOf', value: list, min, label, hint }),
  all: (id, list, label, hint) => ({ id, type: 'allOf', value: list, label, hint }),
  question: (id, label, hint, n = 1) => ({ id, type: 'question', value: n, label, hint }),
  sentences: (id, n, label, hint) => ({ id, type: 'sentences', value: n, label, hint }),
};
export const crit = (id, label, description, weight, checks) => ({ id, label, description, weight, checks });
