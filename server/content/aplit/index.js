import { buildCourse } from '../builder.js';
import data from '../data/aplit.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';

export const apEnglishLiteratureCourse = buildCourse({
  prefix: 'aplit',
  meta: {
    title: 'AP English Literature',
    subtitle: 'Read closely, interpret with evidence and write a literary argument.',
    description:
      'A first-year college-level course in the style of AP English Literature and Composition. Learn to read fiction, poetry and drama closely: character and setting, narration and structure, speaker and imagery, figurative language, sound and form, dramatic conventions, theme, irony, diction, syntax and tone. Then turn your reading into writing, with a defensible thesis, well-chosen evidence and commentary that explains how a text creates meaning. Passages are short original examples or public-domain works. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Arts & Humanities',
    level: 'Advanced high school (reading and writing at grade level)',
    coverTheme: 'rose',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8 },
});
