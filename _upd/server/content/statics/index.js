import { buildCourse } from '../builder.js';
import data from '../data/statics.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';

export const staticsCourse = buildCourse({
  prefix: 'sta',
  meta: {
    title: 'Engineering Statics',
    subtitle: 'Learn to analyze forces and moments on structures and machines in equilibrium.',
    description:
      'A systematic approach to statics. You will draw free body diagrams, calculate moments, work with couples and distributed loads, model engineering connections, solve single bodies, frames, machines and trusses, analyze friction and calculate second moments of area and mass moments of inertia. Short sessions with worked examples, quizzes and immediate feedback, and unit assessments rated from A+ to C.',
    category: 'Engineering and Technology',
    level: 'Introductory (basic algebra and trigonometry)',
    coverTheme: 'rose',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7 },
});
