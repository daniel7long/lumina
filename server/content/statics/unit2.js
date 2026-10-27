import { mc, tf } from '../builder.js';

export default {
  summary: 'Handle more complex interactions: couples, statically equivalent loads, distributed forces and the connections engineers use to join bodies.',
  modules: {
    6: {
      summary: 'Couples and pure rotation.',
      sessions: [
        {
          t: 'Couples',
          s: 'Equal, opposite, parallel forces and their moment.',
          md: `
## Couples

A **couple** is a pair of forces that are **equal in magnitude, opposite in sense and parallel but not collinear**. It has **zero resultant force** but produces a **pure rotation**.

### Moment of a couple
**M = F × d**, where d is the perpendicular distance between the two lines of action.
- Two 40 N forces 0.25 m apart give **M = 10 N·m**.

### Key property
The moment of a couple is the **same about every point**: a couple is a **free vector**. It does not matter where on the body it acts, only its magnitude and sense matter.

### When do we use couples?
- A multi-force interaction (such as a fixed support or a screw being turned) can be represented as a couple if the net force is zero.
- At least **two forces** are needed to cause rotation alone; a single force always also tends to translate the body.
- Couples **add algebraically**. To balance a couple you need an equal and opposite couple, not a single force.

> **Check:** the sum of the forces in a couple is zero, but the sum of moments is not.
`,
          q: [
            mc('Two parallel forces of 40 N act in opposite directions, 0.25 m apart. What is the moment of this couple?', '10 N·m, the same about any point', 'M = 40 × 0.25 = 10 N·m, independent of the reference point.', [
              ['80 N·m', 'This adds the forces.'],
              ['0, because the forces cancel', 'The forces cancel, but their moments do not.'],
            ]),
            tf('A single force can produce a pure rotation of a free body, without any translation.', false, 'A single force always tends to translate the body. Pure rotation needs at least two forces forming a couple.', 'Correct. Pure rotation requires a couple.'),
          ],
        },
      ],
    },
    7: {
      summary: 'Replacing systems of forces with simpler, equivalent ones.',
      sessions: [
        {
          t: 'Statically equivalent loads',
          s: 'Moving forces, force–couple systems and resultants.',
          md: `
## Static equivalence

Two loadings are **statically equivalent** if they have the **same resultant force and the same moment about every point**. They have the same effect on the **external** reaction forces, though they may cause different **internal** effects (so they are not "fully" equivalent).

### Rules for replacement
- A force may slide **along its line of action** (no change).
- A force F at point A can be moved to point B if you add a **couple** equal to the moment of F about B: **M = F × d**, with d the perpendicular distance from B to F's line.
  - **Example:** 100 N at A, 0.5 m (perpendicular) from B → 100 N at B plus a couple of **50 N·m**.
- **Parallel forces in the same sense** combine into a single force equal to their sum, located so that it has the same moment.
- **Parallel forces in opposite senses** (unequal) combine into a single force equal to their difference.

### Example: two parallel forces
30 N and 70 N, same direction, 1 m apart. The resultant is **100 N**. Taking moments about the 30 N force: 100 × x = 70 × 1, so **x = 0.7 m** from the 30 N force, i.e. closer to the larger force.

### General system
Any planar system can be replaced by **one force at a chosen point plus one couple** (a force–couple system). If the resultant force is non-zero it can be reduced further to a **single force** at a location where the couple is eliminated.
`,
          q: [
            mc('A 100 N force acts at A. To replace it with a force at B, which is 0.5 m perpendicular to the line of action, you add', 'A couple of 50 N·m', 'M = Fd = 100 × 0.5.', [
              ['A force of 50 N', 'You need a moment (a couple), not a force.'],
              ['Nothing, because forces can move freely', 'Forces can slide only along their line of action.'],
            ]),
            mc('Parallel forces of 30 N and 70 N (same direction) are 1 m apart. Where does the single resultant of 100 N act, measured from the 30 N force?', '0.7 m', '100 × x = 70 × 1.', [
              ['0.3 m', 'This is the distance from the 70 N force.'],
              ['0.5 m', 'This would be the midpoint for equal forces.'],
            ]),
          ],
        },
      ],
    },
    8: {
      summary: 'Distributed loads and centers of gravity.',
      sessions: [
        {
          t: 'Distributed loads and centers of gravity',
          s: 'Resultants of line loads and composite shapes.',
          md: `
## Distributed forces

Many forces are spread over a length, area or volume. We replace them by a single **equivalent force** (the resultant) acting through the **centroid** of the loading diagram.

### Line loads
| Load shape | Resultant | Line of action |
| --- | --- | --- |
| **Uniform** w (N/m) over length L | wL | At L/2 |
| **Triangular** from 0 to w over L | ½wL | At 2L/3 from the zero end (L/3 from the big end) |

- 2 kN/m over 6 m → **12 kN** at 3 m.
- A triangle from 0 to 4 kN/m over 3 m → **6 kN**, 2 m from the zero end.

A load per area or volume (pressure, weight) can be converted to a load **per length** by multiplying by the width or area.

### Center of gravity of composite bodies
Break the body into simple shapes with known centroids:

x̄ = Σ(Aᵢ xᵢ) / ΣAᵢ (or weights/volumes).

**Example:** areas 12 and 8 with centroids at x = 3 and x = 7: x̄ = (12×3 + 8×7) / 20 = **4.6**.

**Symmetry:** if a body has a plane of symmetry, the center of gravity lies in that plane. For doubly symmetric bodies it lies on the line where the planes meet, so many 3D problems reduce to 2D.

### Unknown contact pressures
When a symmetric flat body presses on a surface, the unknown distributed contact force can be replaced by a single (statically equivalent) force acting at the centroid of the contact if the pressure is uniform, or shifted if not.
`,
          q: [
            mc('A uniform load of 2 kN/m acts over a 6 m beam. Where does its resultant act, and how large is it?', '12 kN at the midpoint (3 m)', 'The resultant is wL at the centroid, L/2.', [
              ['12 kN at 4 m', '4 m is the centroid for a triangular load.'],
              ['2 kN at 3 m', 'This ignores the length.'],
            ]),
            mc('A triangular load rises from 0 to 4 kN/m over 3 m. What is the resultant force?', '6 kN, acting 2 m from the zero end', '½ × 4 × 3 = 6, at 2L/3 from the zero end.', [
              ['12 kN at 1.5 m', 'This is the uniform load result.'],
              ['6 kN at 1.5 m', 'The centroid of a triangle is not at the middle.'],
            ]),
          ],
        },
      ],
    },
    9: {
      summary: 'How to model supports and connections between bodies.',
      sessions: [
        {
          t: 'Representing engineering connections',
          s: 'The forces and couples transmitted by common connections.',
          md: `
## Connections and what they transmit

A connection transmits a force or couple in each direction in which it **prevents** motion, and none where it allows motion.

| Connection | Prevents | Reaction in 2D |
| --- | --- | --- |
| **Roller / rocker / smooth surface** | Motion normal to the surface | **1 force**, perpendicular to the surface |
| **Cable (or rope)** | Moving apart | **1 tension force** along the cable (pull only) |
| **Link with two pins** (two-force member, weightless) | Motion along the link | **1 force along the line between pins** |
| **Pin (hinge)** | Translation in any direction | **2 force components** (no moment) |
| **Pin in a slot** | Motion perpendicular to the slot | 1 force perpendicular to the slot |
| **Rigid sliding joint** | Rotation and motion perpendicular to the slide | 1 force + **1 couple** |
| **Fixed connection (built-in)** | All motion | **2 force components + 1 couple** |

### Details
- **Shared pin:** two bodies connected by the same pin exert **equal and opposite** forces on each other (Newton's third law). On each FBD the pin force is shown with components of opposite sense.
- **Cable over a frictionless, massless pulley:** the **tension is the same** on both sides; the pulley only changes the direction.
- **Cylindrical rod in a surface or hole:** frictionless contact means normal forces.
- A pin connection loaded in different planes in 3D can often be modeled in 2D.

Most common supports are **fixed** and **pinned**.
`,
          q: [
            mc('How many reaction components does a fixed (built-in) support provide in 2D?', 'Three: two force components and a couple', 'It prevents both translations and rotation.', [
              ['Two force components only', 'That is a pin.'],
              ['One force', 'That is a roller.'],
            ]),
            mc('A weightless link with pins at both ends and no other loads transmits', 'A single force along the line connecting the pins', 'It is a two-force member.', [
              ['A force perpendicular to the link', 'A two-force member cannot carry a transverse force.'],
              ['A couple only', 'A couple cannot be transmitted through frictionless pins.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Complex interactions between bodies',
    tasks: [
      mc('Two forces of 25 N, parallel and opposite, are 0.8 m apart. What is the couple moment?', '20 N·m', '25 × 0.8.', [
        ['50 N·m', 'This adds the forces.'],
        ['0', 'The moments do not cancel.'],
        ['31.25 N·m', 'This divides instead of multiplying.'],
      ]),
      mc('The moment of a couple about different points is', 'The same for all points', 'A couple is a free vector.', [
        ['Largest at the point midway between the forces', 'It does not depend on the point.'],
        ['Zero at either force', 'It is the same everywhere.'],
        ['Dependent on the choice of axes', 'It does not depend on axes.'],
      ]),
      mc('A 200 N force acts along a line 0.3 m from point B. Replacing it with a force at B requires adding a couple of', '60 N·m', '200 × 0.3.', [
        ['600 N·m', 'The multiplication is wrong.'],
        ['0.0015 N·m', 'This divides.'],
        ['200 N·m', 'The couple depends on the distance.'],
      ]),
      mc('Parallel forces of 20 N and 60 N, in the same direction, are 2 m apart. Where is the 80 N resultant relative to the 20 N force?', '1.5 m', '80 × x = 60 × 2, so x = 1.5.', [
        ['0.5 m', 'This is the distance from the 60 N force.'],
        ['1.0 m', 'This would be the midpoint.'],
        ['2.0 m', 'This would be at the 60 N force.'],
      ]),
      mc('A uniform load of 3 kN/m acts on 5 m. What is the resultant force?', '15 kN', 'wL = 3 × 5.', [
        ['8 kN', 'This adds instead of multiplies.'],
        ['7.5 kN', 'This is half the answer.'],
        ['0.6 kN', 'This divides.'],
      ]),
      mc('A triangular load of 0 to 6 kN/m acts on 4 m, with the maximum at the right end. What is the resultant and its distance from the left end?', '12 kN, 2.67 m from the left end', '½ × 6 × 4 = 12 kN, located 2L/3 = 2.67 m from the zero end.', [
        ['24 kN, 2 m', 'The triangular factor ½ and location are missing.'],
        ['12 kN, 2 m from the left end', 'The centroid of a triangle is not at the midpoint.'],
        ['12 kN, 1.33 m from the left end', 'This is the distance from the large end.'],
      ]),
      mc('A composite area consists of 12 cm² with centroid at x = 3 cm and 8 cm² with centroid at x = 7 cm. Where is the centroid of the whole?', '4.6 cm', '(12×3 + 8×7)/20.', [
        ['5.0 cm', 'This is the average of the centroids.'],
        ['3.0 cm', 'This is the centroid of one part.'],
        ['10 cm', 'This adds the positions.'],
      ]),
      mc('A cable passes over a frictionless pulley. The tension on one side is 200 N. What is it on the other side?', '200 N', 'The tension is the same on both sides.', [
        ['100 N', 'The tension does not halve.'],
        ['400 N', 'The tension does not double.'],
        ['0 N', 'The cable would be slack.'],
      ]),
      mc('A roller support on a horizontal floor provides', 'One vertical force', 'It prevents motion normal to the surface.', [
        ['Two force components', 'This is a pin.'],
        ['A couple', 'A roller does not resist rotation.'],
        ['A horizontal force only', 'The reaction is normal to the surface.'],
      ]),
      tf('Two statically equivalent loadings always cause identical internal forces in the body.', false, 'Equivalent loadings produce the same external reactions, but the internal forces and deformations can differ.', 'Correct. Static equivalence concerns external effects.'),
    ],
  },
};
