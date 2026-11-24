import { buildCourse } from '../builder.js';
import data from '../data/apbio.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';

export const apBiologyCourse = buildCourse({
  prefix: 'apbio',
  meta: {
    title: 'AP Biology',
    subtitle: 'From molecules to ecosystems, with the data skills you need to reason like a biologist.',
    description:
      'A first-year college-level biology course in the style of AP Biology. Start with the chemistry of life, then study cells and membranes, cellular energetics, cell communication and the cell cycle, heredity, gene expression, natural selection and ecology. Along the way you practice the quantitative skills of the subject: water potential, rates, chi-square, Hardy–Weinberg and population growth. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Life Sciences',
    level: 'Advanced high school (one prior science course)',
    coverTheme: 'blue',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8 },
});
