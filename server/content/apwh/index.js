import { buildCourse } from '../builder.js';
import data from '../data/apwh.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';
import unit9 from './unit9.js';

export const apWorldHistoryCourse = buildCourse({
  prefix: 'apwh',
  meta: {
    title: 'AP World History',
    subtitle: 'Connections, empires, revolutions and globalization from 1200 to today.',
    description:
      'A first-year college-level course in the style of AP World History: Modern. Follow nine units from the networks of the thirteenth century through land-based empires, the first global economy, revolutions, industrialization, imperialism, two world wars, the Cold War, decolonization and globalization. Along the way you practice the habits of a historian: comparison, causation, continuity and change over time, and reading sources for point of view and purpose. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Arts & Humanities',
    level: 'Advanced high school (reading and writing at grade level)',
    coverTheme: 'amber',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8, 9: unit9 },
});
