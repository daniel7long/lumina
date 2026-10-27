import { buildCourse } from '../builder.js';
import data from '../data/psychology.js';
import u01 from './u01.js';
import u02 from './u02.js';
import u03 from './u03.js';
import u04 from './u04.js';
import u05 from './u05.js';
import u06 from './u06.js';
import u07 from './u07.js';
import u08 from './u08.js';
import u09 from './u09.js';
import u10 from './u10.js';
import u11 from './u11.js';
import u12 from './u12.js';
import u13 from './u13.js';
import u14 from './u14.js';
import u15 from './u15.js';
import u16 from './u16.js';

export const psychologyCourse = buildCourse({
  prefix: 'psy',
  meta: {
    title: 'Introduction to Psychology',
    subtitle: 'Explore the science of the mind, brain and behavior, from how we learn to how we connect.',
    description:
      'A tour of modern psychology in sixteen units: research methods; the brain and body; sensation and perception; learning; memory; language; intelligence; lifespan development; emotion and motivation; personality; social behavior; wellness; psychological disorders and their treatment; and consciousness. Short sessions with quizzes and immediate feedback, and unit assessments rated from A+ to C. Course content is educational and is not a substitute for professional diagnosis or care.',
    category: 'Social Sciences',
    level: 'Introductory (no experience needed)',
    coverTheme: 'violet',
  },
  data,
  units: { 1: u01, 2: u02, 3: u03, 4: u04, 5: u05, 6: u06, 7: u07, 8: u08, 9: u09, 10: u10, 11: u11, 12: u12, 13: u13, 14: u14, 15: u15, 16: u16 },
});
