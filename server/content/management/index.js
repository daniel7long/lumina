import { buildCourse } from '../builder.js';
import data from '../data/management.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';

export const managementCourse = buildCourse({
  prefix: 'ebm',
  lessonWord: 'Chapter',
  meta: {
    title: 'Evidence-Based Management',
    subtitle: 'Strengthen your EBM skills and critical mindset to improve the quality of your decisions.',
    description:
      'Learn the six steps of evidence-based management: Ask, Acquire, Appraise, Aggregate, Apply and Assess. You will practise drawing on four sources of evidence (scientific research, organizational data, practitioner experience and stakeholder concerns), judging how far each can be trusted, combining them with Bayes\' rule, and building the habits that make better decisions normal in your organization. Each unit ends with an assessment rated from A+ to C.',
    category: 'Business',
    level: 'Introductory (no experience needed)',
    coverTheme: 'slate',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6 },
});
