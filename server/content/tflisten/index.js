import { buildCourse } from '../builder.js';
import data from '../data/tflisten.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const toeflListeningCourse = buildCourse({
  prefix: 'tflis',
  meta: {
    title: 'TOEFL Listening',
    subtitle: 'Prepare for the Listening section of the 2026 TOEFL iBT.',
    description:
      'Independent preparation for the Listening section of the TOEFL iBT as redesigned in January 2026. Learn the four task types (Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement and Listen to an Academic Talk), the once-only audio and the adaptive design, then practice the listening skills each task measures. Lumina has no audio, so listening scripts appear as transcripts: ask a friend to read them aloud, or use text-to-speech, and answer before you read the script. All practice items are original. This is not an official ETS product and is not affiliated with or endorsed by ETS; TOEFL and TOEFL iBT are registered trademarks of ETS. Each unit ends with an assessment rated from A+ to C.',
    category: 'Language and Speech',
    level: 'Intermediate to advanced (B1–C1)',
    coverTheme: 'teal',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
