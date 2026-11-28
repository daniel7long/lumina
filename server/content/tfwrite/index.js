import { buildCourse } from '../builder.js';
import data from '../data/tfwrite.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const toeflWritingCourse = buildCourse({
  prefix: 'tfwr',
  meta: {
    title: 'TOEFL Writing',
    subtitle: 'Prepare for the Writing section of the 2026 TOEFL iBT.',
    description:
      'Independent preparation for the Writing section of the TOEFL iBT as redesigned in January 2026. Learn the three task types (Build a Sentence, Write an Email and Write for an Academic Discussion), then practice sentence building, email writing and academic discussion posts with original prompts and model answers. Written practice tasks are checked by a simple keyword checklist and are not scored like the real test; compare your writing with the model answers and ask a teacher for feedback. This is not an official ETS product and is not affiliated with or endorsed by ETS; TOEFL and TOEFL iBT are registered trademarks of ETS. Each unit ends with an assessment rated from A+ to C.',
    category: 'Language and Speech',
    level: 'Intermediate to advanced (B1–C1)',
    coverTheme: 'amber',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
