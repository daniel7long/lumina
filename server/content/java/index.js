import { buildCourse } from '../builder.js';
import data from '../data/java.js';
import unit1 from './unit1.js';

export const javaCourse = buildCourse({
  prefix: 'jv',
  meta: {
    title: 'Introduction to Programming in Java',
    subtitle: 'Learn Java and be part of one of the largest programming communities.',
    description:
      'A first course in programming with Java. You learn how Java code is compiled and run, write simple programs and your own methods, repeat steps with loops, store data in arrays, make decisions with Boolean expressions and if statements, and test and debug your programs. Every module is split into short sessions with quick quizzes and immediate feedback, and the unit ends with an assessment rated from A+ to C.',
    category: 'Computer Science & Programming',
    level: 'Introductory (no experience needed)',
    coverTheme: 'amber',
  },
  data,
  units: { 1: unit1 },
});
