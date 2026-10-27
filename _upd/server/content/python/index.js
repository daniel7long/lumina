import { buildCourse } from '../builder.js';
import data from '../data/python.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';

export const pythonCourse = buildCourse({
  prefix: 'py',
  meta: {
    title: 'Principles of Computation with Python',
    subtitle: 'Get an introduction to programming with one of the hottest languages, Python.',
    description:
      'An introduction to programming and to the big ideas of computing. In Unit 1 you write and trace Python programs that use expressions, functions, lists, loops and decisions. In Unit 2 you explore recursion, data structures, binary representation, encryption, the limits of computation and cellular automata. Every module is split into short sessions with quick quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Computer Science & Programming',
    level: 'Introductory (no experience needed)',
    coverTheme: 'blue',
  },
  data,
  units: { 1: unit1, 2: unit2 },
});
