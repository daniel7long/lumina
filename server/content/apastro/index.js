import { buildCourse } from '../builder.js';
import data from '../data/apastro.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';

export const apAstronomyCourse = buildCourse({
  prefix: 'apast',
  meta: {
    title: 'AP Astronomy',
    subtitle: 'From the motions of the sky to the history of the universe.',
    description:
      'A first-year college-level astronomy course in the AP style, with a quantitative focus. Start with the sky, seasons and orbits, then study light and telescopes, the solar system, the Sun and the stars, stellar evolution, galaxies and cosmology. You practice the calculations of the subject: Kepler’s period law, parallax, Wien’s law, the Stefan–Boltzmann law, the inverse-square law, the Doppler shift and Hubble’s law. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Physical Sciences',
    level: 'Advanced high school (algebra)',
    coverTheme: 'slate',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7 },
});
