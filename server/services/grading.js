// Pure grading logic (no I/O) so it can be unit-tested and, later, moved to a worker.
//
// Auto-graded:   multiple choice and true/false  → exact match, with per-option explanations.
// Rubric-graded: written tasks → each rubric criterion is a list of transparent, deterministic
//                checks (word counts, required phrases, questions asked …). Learner text never
//                influences the score through an AI model, so it cannot be "prompt-injected".

import { round } from '../lib/util.js';

const words = (s) => (s.match(/[\p{L}\p{N}'’-]+/gu) || []);
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function phraseFound(text, phrase) {
  if (!phrase) return false;
  const p = escapeRe(phrase.trim()).replace(/\s+/g, '\\s+');
  const lead = /^[\p{L}\p{N}]/u.test(phrase) ? '(?<![\\p{L}\\p{N}])' : '';
  const tail = /[\p{L}\p{N}]$/u.test(phrase) ? '(?![\\p{L}\\p{N}])' : '';
  return new RegExp(`${lead}${p}${tail}`, 'iu').test(text);
}

export function runCheck(check, text) {
  const w = words(text);
  switch (check.type) {
    case 'minWords':
      return w.length >= Number(check.value);
    case 'maxWords':
      return w.length <= Number(check.value);
    case 'anyOf': {
      const hits = (check.value || []).filter((p) => phraseFound(text, p)).length;
      return hits >= (check.min || 1);
    }
    case 'allOf':
      return (check.value || []).every((p) => phraseFound(text, p));
    case 'question':
      return (text.match(/\?/g) || []).length >= (Number(check.value) || 1);
    case 'sentences':
      return text.split(/[.!?]+(?:\s|$)/).filter((s) => words(s).length >= 3).length >= Number(check.value);
    default:
      return false;
  }
}

export function ratingFor(percent, bands) {
  const sorted = [...bands].sort((a, b) => b.min - a.min);
  return (sorted.find((b) => percent >= b.min) || sorted[sorted.length - 1]).rating;
}

export function isPassing(rating, bands, passRating) {
  const order = [...bands].sort((a, b) => b.min - a.min).map((b) => b.rating);
  return order.indexOf(rating) <= order.indexOf(passRating);
}

function gradeChoice(task, answer) {
  const chosen = task.options.find((o) => o.id === answer);
  const correct = chosen?.id === task.answer;
  return {
    id: task.id,
    type: task.type,
    max: task.points,
    earned: correct ? task.points : 0,
    correct,
    selected: chosen?.id ?? null,
    correctOptionId: task.answer,
    explanations: Object.fromEntries(task.options.map((o) => [o.id, o.explanation])),
  };
}

function gradeWritten(task, answer) {
  const text = typeof answer === 'string' ? answer.trim() : '';
  const w = words(text);
  const notes = [];
  const criteria = task.rubric.criteria.map((c) => {
    const checks = c.checks.map((k) => ({ id: k.id, label: k.label, hint: k.hint, passed: runCheck(k, text) }));
    const fraction = checks.length ? checks.filter((k) => k.passed).length / checks.length : 0;
    return { id: c.id, label: c.label, weight: c.weight, fraction, checks };
  });
  const totalWeight = criteria.reduce((n, c) => n + c.weight, 0) || 1;
  let fraction = criteria.reduce((n, c) => n + c.weight * c.fraction, 0) / totalWeight;

  // Guards against empty / padded submissions.
  if (!w.length || (task.minWords && w.length < task.minWords * 0.5)) {
    fraction = 0;
    notes.push(`Your response is much shorter than the ${task.minWords || 'required'} words expected, so it could not be scored.`);
  } else if (w.length >= 30 && new Set(w.map((x) => x.toLowerCase())).size / w.length < 0.3) {
    fraction *= 0.3;
    notes.push('Your response repeats the same words a lot. Write original sentences.');
  }
  return {
    id: task.id,
    type: 'written',
    max: task.points,
    earned: round(task.points * fraction, 2),
    wordCount: w.length,
    criteria,
    notes,
    modelAnswer: task.modelAnswer || '',
  };
}

/**
 * @param {{tasks: object[]}} assessment full (answer-bearing) assessment body
 * @param {Record<string, string>} answers taskId → optionId | text
 * @param {{ratingBands: object[], passRating: string}} cfg
 */
export function gradeAssessment(assessment, answers, cfg) {
  const tasks = assessment.tasks.map((t) =>
    t.type === 'written' ? gradeWritten(t, answers?.[t.id]) : gradeChoice(t, answers?.[t.id]),
  );
  const max = tasks.reduce((n, t) => n + t.max, 0) || 1;
  const earned = tasks.reduce((n, t) => n + t.earned, 0);
  const score = round((earned / max) * 100, 1);
  const rating = ratingFor(score, cfg.ratingBands);
  const passed = isPassing(rating, cfg.ratingBands, cfg.passRating);
  return { score, rating, passed, earned: round(earned, 2), max, tasks };
}

/** Quiz question check (formative, immediate). */
export function checkQuestion(question, optionId) {
  const chosen = question.options.find((o) => o.id === optionId);
  if (!chosen) return null;
  return {
    correct: chosen.id === question.answer,
    correctOptionId: question.answer,
    chosen: { id: chosen.id, explanation: chosen.explanation },
    explanations: Object.fromEntries(question.options.map((o) => [o.id, o.explanation])),
  };
}
