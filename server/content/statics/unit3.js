import { mc, tf } from '../builder.js';

export default {
  summary: 'Apply the method to engineering systems: choose a subsystem, draw its free body diagram and solve for unknown forces.',
  modules: {
    10: {
      summary: 'Draw the free body diagram of one subsystem.',
      sessions: [
        {
          t: 'Drawing an FBD of a subsystem',
          s: 'Show every interaction with the rest of the system.',
          md: `
## FBD of a subsystem

When a structure contains several parts, you analyze one **subsystem** at a time. Its FBD must show **every interaction** with everything outside the boundary.

### Procedure
1. **Draw a boundary** around the subsystem.
2. **Replace each cut connection** with the forces and couples that connection transmits (see the connection table in Unit 2).
3. Add **applied loads** and the subsystem's **weight** (if significant).
4. Label **knowns and unknowns**. Dimensions and angles should be included.
5. Where bodies were connected by a shared pin, the forces on the two FBDs are **equal and opposite**.

### Example
A beam is pinned to a wall at A and supported by a cable from B to a point on the wall. On the beam's FBD you show: a pin force at A with two components (Ax, Ay), the cable tension T at B directed along the cable (toward the wall), and the applied load.

> **Do not draw** the wall or the cable on the FBD; they are replaced by the forces they exert.
`,
          q: [
            mc('A beam is held by a pin at A and a cable at B. What should its FBD show at the cable connection?', 'A tension force along the cable, pulling the beam toward the cable\'s anchor', 'A cable can only pull and acts along its length.', [
              ['A force perpendicular to the cable', 'A cable carries only tension along its axis.'],
              ['A couple', 'A cable cannot transmit a couple.'],
            ]),
            tf('On the FBD of a beam you should also draw the wall to which it is attached.', false, 'The wall is replaced by the forces and couples it exerts. Draw those instead of the wall.', 'Correct. Replace removed bodies by their forces.'),
          ],
        },
      ],
    },
    11: {
      summary: 'Write and solve equilibrium equations for a subsystem.',
      sessions: [
        {
          t: 'Solving equilibrium for a single body',
          s: 'Cantilever, distributed loads, ranges of parameters.',
          md: `
## Equilibrium of a subsystem

After the FBD: write **ΣFx = 0, ΣFy = 0, ΣM = 0**, choosing the moment point to eliminate unknowns.

### Example 1: cantilever
A 3 m cantilever carries 5 kN at its free end. At the wall:
- ΣFy: Ay − 5 = 0 → **Ay = 5 kN**
- ΣM_A: M_A − 5 × 3 = 0 → **M_A = 15 kN·m**

### Example 2: distributed load
A simply supported beam of 4 m carries a uniform load of 2 kN/m. The resultant is 8 kN at 2 m; by symmetry **each support carries 4 kN**.

### Interpreting the results
- A **negative** answer means the true sense is opposite to the assumed sense.
- If the support is a simple smooth contact (a beam resting on a surface) and the solution says it must pull on the beam, the contact cannot provide it, so the body would **lift off**: the assumed contact is invalid.

### Finding a range of a parameter
**Example:** a 4 m beam with a pin at A and a roller at B carries 100 N at distance x from A. The reaction at B is **By = 100x/4 = 25x**. If the roller can support at most 80 N, then 25x ≤ 80 and **x ≤ 3.2 m**.

### Qualitative use
Without solving, equilibrium tells you things like: reactions are greater nearer the load; the sign of a reaction; or which assumption (such as contact) must hold.
`,
          q: [
            mc('A 3 m cantilever carries a 5 kN load at the free end. What is the moment reaction at the wall?', '15 kN·m', 'M = 5 × 3.', [
              ['5 kN·m', 'The distance is missing.'],
              ['1.67 kN·m', 'This divides.'],
            ]),
            mc('A 4 m beam on a pin and roller carries 100 N at x from the pin. The roller can support at most 80 N. What is the largest x?', '3.2 m', 'By = 25x ≤ 80, so x ≤ 3.2.', [
              ['4 m', 'At x = 4 m the roller would carry 100 N.'],
              ['2.0 m', 'This is too conservative.'],
            ]),
          ],
        },
      ],
    },
    12: {
      summary: 'Pick subsystems that can be solved and use two-force members.',
      sessions: [
        {
          t: 'Choosing a solvable subsystem',
          s: 'Counting unknowns and recognizing two-force members.',
          md: `
## Which subsystem to draw first?

A subsystem is **fully solvable** when the number of **unknowns** is at most the number of independent equilibrium equations (3 in 2D for a general case).

### Strategy
1. List the unknown forces in each possible FBD.
2. Pick the subsystem with **≤ 3 unknowns** (or one where you only need a few of them).
3. After solving, use those results as **knowns** for the next subsystem.

### Two-force members
A member loaded by forces at **only two points**, with no couple and negligible weight, is a **two-force member**. The forces must be **equal, opposite and collinear**, acting **along the line joining the two points**. This reduces unknowns to **one** (the magnitude).

Recognizing them early often makes a problem solvable. A straight bar with pins at its ends and no other loads is a typical example; so is a curved link.

### Pulleys
Treat a frictionless pulley and its cable as a system: tension is equal on both sides, and the pulley's pin force balances the two tensions.

### Systems without special connections
For simple systems (a block on a plane) the whole body is the subsystem and the unknowns are the contact forces.
`,
          q: [
            mc('A weightless straight bar is pinned at its two ends and has no other loads. What do you know about the force on the bar?', 'It acts along the line joining the pins', 'It is a two-force member.', [
              ['It acts perpendicular to the bar', 'Two-force members carry axial force.'],
              ['It is zero', 'It could carry a force but it must be axial.'],
            ]),
            mc('How many unknowns can be solved using equilibrium of a general 2D rigid body?', 'Up to three', 'ΣFx, ΣFy and ΣM.', [
              ['Up to two', 'That is for concurrent or parallel force systems.'],
              ['Up to six', 'That is for 3D.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Single-body equilibrium',
    tasks: [
      mc('A cantilever of length 2 m has a 10 kN load at its free end. What is the moment at the wall?', '20 kN·m', '10 × 2.', [
        ['5 kN·m', 'This divides.'],
        ['10 kN·m', 'The length is missing.'],
        ['12 kN·m', 'This adds.'],
      ]),
      mc('A simply supported beam of span 6 m carries a uniform load of 3 kN/m. What is each reaction?', '9 kN', 'Total = 18 kN; by symmetry 9 kN each.', [
        ['18 kN', 'This is the total load.'],
        ['3 kN', 'This is the load intensity.'],
        ['4.5 kN', 'This is half of the correct answer.'],
      ]),
      mc('A pin-and-roller beam of 5 m carries a 200 N load 2 m from the pin. What is the roller reaction?', '80 N', 'ΣM_pin: R × 5 = 200 × 2.', [
        ['120 N', 'This is the pin reaction.'],
        ['200 N', 'This is the load.'],
        ['40 N', 'This is not the result.'],
      ]),
      mc('In solving an equilibrium problem, a reaction comes out negative. What does this mean?', 'Its true sense is opposite to the assumed sense', 'The magnitude is right.', [
        ['The problem has no solution', 'It has a solution.'],
        ['The structure is not in equilibrium', 'Equilibrium is assumed.'],
        ['The force is zero', 'Its magnitude is nonzero.'],
      ]),
      mc('Which member can be identified as a two-force member?', 'A weightless link with pins at both ends and no loads between them', 'Forces act only at two points.', [
        ['A beam with a distributed load', 'It carries forces at many points.'],
        ['A cantilever with an end couple', 'It has a couple and a fixed support.'],
        ['A member with three pins', 'Three points of loading.'],
      ]),
      mc('A subsystem FBD has 5 unknowns in 2D. Can it be solved by equilibrium alone?', 'No, because a 2D rigid body has only three equations', 'You need other subsystems or information.', [
        ['Yes, using five equations', 'Only three are independent.'],
        ['Yes, if the forces are small', 'Size does not matter.'],
        ['Yes, using ΣM about five points', 'Moments about more points are not independent.'],
      ]),
      mc('A 4 m beam is pinned at A and has a roller at B. A load P acts at x from A. The reaction at B is', 'Px/4', 'ΣM_A = 0 gives B × 4 = P × x.', [
        ['P(4 − x)/4', 'This is the reaction at A.'],
        ['Px', 'The span is missing.'],
        ['P/x', 'This is not the result.'],
      ]),
      mc('A frictionless pulley carries a cable with tension 100 N on each side, with the two parts at right angles. What is the magnitude of the pin force on the pulley?', '141 N', '√(100² + 100²) = 141.4 N.', [
        ['200 N', 'This adds the tensions as if they were parallel.'],
        ['100 N', 'This is one tension.'],
        ['0 N', 'The tensions do not cancel.'],
      ]),
      tf('A beam resting on a smooth surface can be pulled toward the surface by the contact if the solution requires it.', false, 'A resting contact can only push (a unilateral contact). If the solution requires a pull, the beam would lift off and the assumed contact is not valid.', 'Correct. A simple resting contact can only push.'),
    ],
  },
};
