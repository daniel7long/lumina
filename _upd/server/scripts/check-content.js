// Validates every course in the library the same way publishing does, and prints a summary.
//   npm run check:content
import { library } from '../content/index.js';
import { sanitizeTree, publishProblems } from '../services/courseTree.js';

let bad = 0;
for (const { course } of library) {
  const tree = sanitizeTree(course);
  const problems = publishProblems(tree);
  const sessions = tree.units.flatMap((u) => u.lessons.flatMap((l) => l.sessions));
  const lessons = tree.units.reduce((n, u) => n + u.lessons.length, 0);
  const questions = sessions.reduce((n, s) => n + s.items.reduce((m, i) => m + (i.kind === 'quiz' ? i.body.questions.length : 0), 0), 0);
  const tasks = tree.units.reduce((n, u) => n + u.assessment.body.tasks.length, 0);
  const thin = sessions.filter((s) => s.items.some((i) => i.kind === 'reading' && i.body.markdown.split(/\s+/).length < 110));
  console.log(`${tree.meta.title}\n  ${tree.units.length} units · ${lessons} lessons · ${sessions.length} sessions · ${questions} quiz questions · ${tasks} assessment tasks`);
  if (thin.length) console.log(`  note: ${thin.length} short readings (under 110 words)`);
  if (problems.length) { bad += problems.length; console.log(`  PROBLEMS:\n   - ${problems.join('\n   - ')}`); }
}
if (bad) { console.error(`\n${bad} problem(s) found.`); process.exit(1); }
console.log('\nAll courses pass the publishing checks.');
