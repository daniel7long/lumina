import { buildCourse } from '../builder.js';
import data from '../data/apphys.js';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import unit7 from './unit7.js';
import unit8 from './unit8.js';

export const apPhysicsCourse = buildCourse({
  prefix: 'app',
  meta: {
    title: 'AP Physics',
    subtitle: 'Mechanics, waves and circuits, explained with the reasoning behind each law.',
    description:
      'An algebra-based first-year physics course in the style of AP Physics 1. Start with kinematics and Newton’s laws, then study circular motion and gravitation, work, energy and power, momentum and collisions, torque and rotation, oscillations and waves, and finally electric charge and simple circuits. Each module has short sessions with quizzes and immediate feedback, and each unit ends with an assessment rated from A+ to C.',
    category: 'Physical Sciences',
    level: 'High school (algebra and basic trigonometry)',
    coverTheme: 'violet',
  },
  data,
  units: { 1: unit1, 2: unit2, 3: unit3, 4: unit4, 5: unit5, 6: unit6, 7: unit7, 8: unit8 },
});
