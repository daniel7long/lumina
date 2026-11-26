import { buildCourse } from '../builder.js';
import data from '../data/apgeo.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';

export const apGeographyCourse = buildCourse({
  prefix: 'apgeo',
  meta: {
    title: 'AP Geography',
    subtitle: 'People, places and the patterns they make on the Earth’s surface.',
    description:
      'A first-year college-level course in the style of AP Human Geography. Learn to read maps and spatial data, then study population and migration, culture, political boundaries, agriculture, cities and economic development. You practice the quantitative skills of the subject: map scale, density, natural increase, doubling time, dependency ratios, the gravity model and the rank-size rule. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Social Sciences',
    level: 'Introductory (high school)',
    coverTheme: 'teal',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7 },
});
