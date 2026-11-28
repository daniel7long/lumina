import { buildCourse } from '../builder.js';
import data from '../data/tfspeak.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const toeflSpeakingCourse = buildCourse({
  prefix: 'tfsp',
  meta: {
    title: 'TOEFL Speaking',
    subtitle: 'Prepare for the Speaking section of the 2026 TOEFL iBT.',
    description:
      'Independent preparation for the Speaking section of the TOEFL iBT as redesigned in January 2026. Learn the two task types (Listen and Repeat and Take an Interview), then practice delivery, repetition and short interview answers. Lumina cannot record or score your speech, so lessons are text-based: say each practice sentence and answer aloud, record yourself on your phone, and compare with the model answers and checklists. Written planning tasks are checked by a simple keyword checklist and are not scored like the real test. This is not an official ETS product and is not affiliated with or endorsed by ETS; TOEFL and TOEFL iBT are registered trademarks of ETS. Each unit ends with an assessment rated from A+ to C.',
    category: 'Language and Speech',
    level: 'Intermediate to advanced (B1–C1)',
    coverTheme: 'violet',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
