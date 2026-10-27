// The course library. Each entry is loaded by `npm run seed` if it is not in the database yet.
import { englishCourse } from './english/index.js';
import { pythonCourse } from './python/index.js';
import { javaCourse } from './java/index.js';
import { managementCourse } from './management/index.js';
import { probabilityCourse } from './probability/index.js';
import { biologyCourse } from './biology/index.js';
import { cyberCourse } from './cyber/index.js';
import { staticsCourse } from './statics/index.js';
import { psychologyCourse } from './psychology/index.js';

export const library = [
  { key: 'english', course: englishCourse },
  { key: 'python', course: pythonCourse },
  { key: 'java', course: javaCourse },
  { key: 'management', course: managementCourse },
  { key: 'probability', course: probabilityCourse },
  { key: 'biology', course: biologyCourse },
  { key: 'cyber', course: cyberCourse },
  { key: 'statics', course: staticsCourse },
  { key: 'psychology', course: psychologyCourse },
];
