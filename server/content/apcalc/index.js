import { buildCourse } from '../builder.js';
import data from '../data/apcalc.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';

export const apCalculusCourse = buildCourse({
  prefix: 'apc',
  meta: {
    title: 'AP Calculus',
    subtitle: 'Limits, derivatives and integrals, with the reasoning behind each idea.',
    description:
      'A first-year calculus course in the style of AP Calculus AB. Begin with limits and continuity, then learn the derivative and its rules, apply derivatives to motion, related rates and optimization, and meet the integral and the Fundamental Theorem of Calculus. The course ends with differential equations and applications of integration such as area and volume. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Mathematics and Logic',
    level: 'Advanced high school (precalculus)',
    coverTheme: 'amber',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8 },
});
