import { buildCourse } from '../builder.js';
import data from '../data/apecon.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';
import unit9 from './unit9.js';

export const apEconomicsCourse = buildCourse({
  prefix: 'ape',
  meta: {
    title: 'AP Economics',
    subtitle: 'Microeconomics and macroeconomics: how markets, firms and whole economies work.',
    description:
      'A first-year economics course in the style of AP Microeconomics and AP Macroeconomics. Learn scarcity, comparative advantage, supply and demand, elasticity, firm costs and market structures, factor markets and market failure. Then measure the whole economy with GDP, unemployment and inflation, use the AD–AS model, fiscal and monetary policy, and study exchange rates and long-run growth. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Social Sciences',
    level: 'Introductory (high school algebra)',
    coverTheme: 'teal',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8, 9: unit9 },
});
