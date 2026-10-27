import { buildCourse } from '../builder.js';
import data from '../data/biology.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const biologyCourse = buildCourse({
  prefix: 'bio',
  meta: {
    title: 'Modern Biology',
    subtitle: 'Understand life at the molecular level, from the chemistry of the cell to how it uses energy.',
    description:
      'A molecular tour of modern biology. You will study the chemistry of water, acids and bases; the structure and function of carbohydrates, proteins and enzymes; lipids and membrane transport; DNA, RNA and the flow of genetic information; and the metabolic pathways, glycolysis, the TCA cycle and oxidative phosphorylation, that power the cell. Short sessions with quizzes and immediate feedback, and unit assessments rated from A+ to C.',
    category: 'Life Sciences',
    level: 'Introductory college',
    coverTheme: 'teal',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
