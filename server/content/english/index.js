import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';

export const ENGLISH_COURSE_SLUG = 'english-for-life-at-a-us-university';

export const englishCourse = {
  meta: {
    title: 'English for Life at a U.S. University',
    subtitle: 'Resources, academic communication and everyday life — Units 1–3',
    description:
      'A self-paced online English course for incoming international students. You will find and compare housing, banking, insurance and campus resources; take notes, write polite emails and synthesize scholarly sources; and practice small talk, practical problem solving and asking for support. Every lesson is split into short sessions with quick quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Language and Speech',
    level: 'Intermediate (B1–B2)',
    coverTheme: 'blue',
  },
  units: [unit1, unit2, unit3],
};
