import { buildCourse } from '../builder.js';
import data from '../data/tfread.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const toeflReadingCourse = buildCourse({
  prefix: 'tfrd',
  meta: {
    title: 'TOEFL Reading',
    subtitle: 'Prepare for the Reading section of the 2026 TOEFL iBT.',
    description:
      'Independent preparation for the Reading section of the TOEFL iBT as redesigned in January 2026. Learn the three task types (Complete the Words, Read in Daily Life and Read an Academic Passage), the two-stage adaptive design and the 1–6 band score scale, then practice the reading skills each task measures. All practice items are original and written for this course. This is not an official ETS product and is not affiliated with or endorsed by ETS; TOEFL and TOEFL iBT are registered trademarks of ETS. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Language and Speech',
    level: 'Intermediate to advanced (B1–C1)',
    coverTheme: 'blue',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
