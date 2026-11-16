import { buildCourse } from '../builder.js';
import data from '../data/astronomy.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const astronomyCourse = buildCourse({
  prefix: 'ast',
  meta: {
    title: 'Astronomy 101',
    subtitle: 'Explore the sky, the solar system, the stars, the galaxies and the origin of the universe.',
    description:
      'A first course in astronomy in five units: observing the sky and the nature of light; the solar system, from Kepler\'s laws to the giant planets and small bodies; the Sun and the life cycles of stars; galaxies, dark matter and the Big Bang; and exoplanets and the search for life. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Physical Sciences',
    level: 'Introductory (basic algebra)',
    coverTheme: 'slate',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
