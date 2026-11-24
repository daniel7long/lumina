import { buildCourse } from '../builder.js';
import data from '../data/apcs.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';

export const apComputerScienceCourse = buildCourse({
  prefix: 'apcs',
  meta: {
    title: 'AP Computer Science',
    subtitle: 'Program in Java: from variables and loops to classes, inheritance and recursion.',
    description:
      'A first-year college-level programming course in the style of AP Computer Science A, taught in Java. Start with types, expressions and the standard String and Math classes, then control the flow of a program with conditions and loops. Write your own classes, store data in arrays, ArrayLists and 2D arrays, extend classes with inheritance and polymorphism, and finish with recursion, searching and sorting. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Computer Science & Programming',
    level: 'Advanced high school (algebra; no prior programming needed)',
    coverTheme: 'violet',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8 },
});
