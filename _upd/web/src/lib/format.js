export const minutesLabel = (m) => (m >= 60 ? `${Math.floor(m / 60)} h ${m % 60 ? `${m % 60} min` : ''}`.trim() : `${m} min`);
export const dateLabel = (iso) => (iso ? new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '—');
export const timeAgo = (iso) => {
  if (!iso) return 'never';
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 90) return 'just now';
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  if (s < 86400 * 30) return `${Math.round(s / 86400)} d ago`;
  return dateLabel(iso);
};
export const kindLabel = { video: 'Video', reading: 'Reading', quiz: 'Quiz', overview: 'Overview', assessment: 'Assessment' };
export const pct = (n) => `${Math.round(n * 10) / 10}%`;
export const num = (n) => Number(n).toLocaleString();

/** Content titles may already start with "Unit 1 ·" or "Lesson 2 ·"; the outline adds its own numbering. */
export const plainTitle = (t = '') => t.replace(/^(Unit|Lesson)\s+\d+\s*[·:.\-–]\s*/i, '');

/** Lesson heading in outlines. Courses that already number their lessons ("Module 4: …", "Chapter 3: …") keep their own numbering. */
export const lessonLabel = (title = '', index = 0) => (/^(Module|Chapter|Topic|Lesson)\s+\d+\s*[:·.\-–]/i.test(title)
  ? title
  : `Lesson ${index + 1}: ${plainTitle(title)}`);
