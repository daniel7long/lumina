import { buildCourse } from '../builder.js';
import data from '../data/apstats.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';
import unit9 from './unit9.js';

export const apStatisticsCourse = buildCourse({
  prefix: 'aps',
  meta: {
    title: 'AP Statistics',
    subtitle: 'Explore data, collect it well, and draw sound conclusions with inference.',
    description:
      'A first-year statistics course in the style of AP Statistics. Describe one-variable and two-variable data, collect data with sound sampling and experimental design, and use probability, random variables and sampling distributions. Then carry out inference: confidence intervals and tests for proportions and means, chi-square tests, and inference for the slope of a regression line. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Data Science and Causal Reasoning',
    level: 'Advanced high school (algebra II)',
    coverTheme: 'rose',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8, 9: unit9 },
});
