import { buildCourse } from '../builder.js';
import data from '../data/apchem.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';
import unit9 from './unit9.js';

export const apChemistryCourse = buildCourse({
  prefix: 'apch',
  meta: {
    title: 'AP Chemistry',
    subtitle: 'Atoms, bonding, reactions, rates, equilibrium and energy, with the reasoning behind each calculation.',
    description:
      'A first-year college-level chemistry course in the style of AP Chemistry. Begin with atomic structure and periodic trends, then learn how bonding and intermolecular forces explain properties, how to write and balance reactions and calculate amounts, and how kinetics, thermochemistry and equilibrium describe change. The course ends with acids and bases, buffers, entropy, free energy and electrochemistry. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Physical Sciences',
    level: 'Advanced high school (algebra, one prior science course)',
    coverTheme: 'teal',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8, 9: unit9 },
});
