import { buildCourse } from '../builder.js';
import data from '../data/cyber.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';

export const cyberCourse = buildCourse({
  prefix: 'cyb',
  meta: {
    title: 'Cyber Technology: STEM Pathways',
    subtitle: 'Build practical skills in computer hardware, networking and security for a career in technology.',
    description:
      'A hands-on pathway into IT. You will identify PC hardware and software, work with binary and hexadecimal numbers, understand IP addressing and subnetting, configure static routes and NAT, read routing tables, summarize IPv4 and IPv6 routes, learn the basics of network security and finish with a capstone in which you plan a small network. Short sessions with quizzes and immediate feedback, and unit assessments rated from A+ to C.',
    category: 'Computer Science & Programming',
    level: 'Introductory (no experience needed)',
    coverTheme: 'slate',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4 },
});
