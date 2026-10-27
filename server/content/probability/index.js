import { buildCourse } from '../builder.js';
import data from '../data/probability.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';

export const probabilityCourse = buildCourse({
  prefix: 'ps',
  meta: {
    title: 'Probability and Statistics',
    subtitle: 'Learn to explore data, reason about chance and draw sound conclusions from samples.',
    description:
      'Work through the four parts of statistics: producing data, exploratory data analysis, probability and inference. You will describe distributions and relationships, design surveys and experiments, use probability rules, random variables and sampling distributions, and carry out estimation and hypothesis tests for proportions, means and relationships. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Data Science and Causal Reasoning',
    level: 'Introductory (basic algebra)',
    coverTheme: 'violet',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5 },
});
