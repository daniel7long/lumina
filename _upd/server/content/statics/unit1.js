import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn the language of forces: how bodies interact, how to draw free body diagrams, how forces create moments, and the conditions for equilibrium under concentrated forces.',
  modules: {
    1: {
      summary: 'Forces between bodies, springs and frictionless contacts.',
      sessions: [
        {
          t: 'Forces and interactions',
          s: 'Attributes of a force, springs and smooth contacts.',
          md: `
## Forces and interactions

A **force** is the action of one body on another. It is a **vector**, so it has:
- **Magnitude** (newtons, N)
- **Direction** (the line of action) and **sense** (which way along that line)
- A **point of application** (for a rigid body, only the **line of action** matters)

Two bodies **interact** when each exerts a force on the other. By **Newton's third law** these forces are **equal in magnitude, opposite in sense and collinear**.

### Spring force
A linear spring exerts a force along its axis: **F = k·x**, where k is the stiffness (N/m) and x is the stretch or compression from the natural length. A spring of k = 500 N/m stretched by 0.04 m pulls with **20 N** on each body it connects. A spring can pull or push, but only along its axis.

### Frictionless contact
When two smooth surfaces touch, the force between them is **normal (perpendicular) to the surfaces** at the point of contact and always **pushes** the bodies apart. A frictionless surface cannot pull and cannot exert any force along the surface.

> **Remember:** to find the direction of a contact force, ask "What motion does this contact prevent?" The force acts to prevent that motion.
`,
          q: [
            mc('A spring with stiffness 500 N/m is stretched 0.04 m from its natural length. What force does it exert on the body attached to it?', '20 N, directed along the spring toward the spring', 'F = kx = 500 × 0.04 = 20 N, pulling the body back.', [
              ['2 N', 'This is not the result of kx.'],
              ['20 N, perpendicular to the spring', 'A spring acts along its axis.'],
            ]),
            mc('What is the direction of the force between two frictionless contacting surfaces?', 'Perpendicular to the surfaces at the contact, pushing the bodies apart', 'Without friction there is no tangential component.', [
              ['Along the surfaces', 'That would require friction.'],
              ['Perpendicular, pulling the bodies together', 'Contact forces push; they cannot pull.'],
            ]),
          ],
        },
      ],
    },
    2: {
      summary: 'Why and how to draw a free body diagram.',
      sessions: [
        {
          t: 'Free body diagrams',
          s: 'Isolate a body and show every external force.',
          md: `
## The free body diagram (FBD)

A **free body diagram** isolates a body (or subsystem) from its surroundings and shows **all external forces and couples** acting on it. It is the most important tool in statics: you cannot write correct equilibrium equations without it.

### Purpose
- It makes the **system** you are analyzing explicit.
- It shows **every interaction** with the outside world.
- It gives you the **unknowns** and a way to write equations of equilibrium.

### How to draw one
1. **Choose the body** and imagine cutting it free.
2. Sketch its outline and any needed dimensions or angles.
3. Show **applied loads** (weights, given forces).
4. Show **reactions** at every place the body touched something you removed: a force for every motion prevented.
5. Label known values and give unknowns a letter, with an **assumed sense**. A negative result later only means the true sense is opposite.
6. Add a coordinate system.

### Common mistakes
- Forgetting a force (particularly weight, if it is not negligible).
- Showing **internal** forces between parts of the same body.
- Drawing forces **on other bodies** rather than on the isolated body.
- Showing a contact force with the wrong direction.
`,
          q: [
            mc('What should a free body diagram of a ladder show?', 'All external forces acting on the ladder, including its weight and the contact forces', 'The FBD includes only forces acting on the ladder.', [
              ['The forces the ladder exerts on the wall and the floor', 'These act on other bodies, not on the ladder.'],
              ['Only the person\'s weight', 'Everything external must be shown.'],
            ]),
            tf('If you assume the wrong sense for an unknown force on an FBD, the equations cannot be solved.', false, 'You can assume any sense: a negative answer simply shows the true sense is opposite.', 'Correct. A negative result just reverses the assumed direction.'),
          ],
        },
      ],
    },
    3: {
      summary: 'Translation, rotation and the moment of a force.',
      sessions: [
        {
          t: 'The moment of a force',
          s: 'Moment arm, sign convention and what determines rotation.',
          md: `
## Effects of a force

A force can make a body **translate** (move along a line) and/or **rotate** (turn about a point). The tendency to rotate is the **moment** of the force.

### Definition
**M = F × d**, where F is the force magnitude and **d is the perpendicular distance** (the **moment arm**) from the moment center to the force's **line of action**. Units: N·m.

- A 50 N force with a perpendicular distance of 0.4 m has a moment of **20 N·m**.
- If the line of action passes **through** the moment center, d = 0 and the moment is zero.

### Sign convention
Counter-clockwise (CCW) moments are usually taken as positive and clockwise (CW) as negative; state your convention.

### What matters
The effect depends on four things: the **magnitude**, **direction**, **sense** and **line of action** of the force. Sliding a force along its line of action does not change its moment about any point.

### Motions
A force can produce pure translation (acting through the center of mass), rotation (a couple), or a combination.
`,
          q: [
            mc('A 50 N force acts with a line of action 0.4 m (perpendicular distance) from point O. What is its moment about O?', '20 N·m', 'M = F·d = 50 × 0.4.', [
              ['125 N·m', 'This divides instead of multiplying.'],
              ['0.008 N·m', 'This divides distance by force.'],
            ]),
            mc('What is the moment of a force about a point lying on the force\'s line of action?', 'Zero', 'The perpendicular distance is zero.', [
              ['Equal to the force', 'The moment has units of force × distance.'],
              ['Infinite', 'It is zero.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Adding forces and moments using components.',
      sessions: [
        {
          t: 'Components, resultants and moments of components',
          s: 'Vector addition and Varignon\'s theorem.',
          md: `
## Combining forces

### Components
A force F at angle θ above the x-axis has components **Fx = F cos θ** and **Fy = F sin θ**. A 100 N force at 30° has Fx = **86.6 N** and Fy = **50 N**.

### Translational effects add as vectors
The resultant of concurrent forces is found by **summing components**: Rx = ΣFx, Ry = ΣFy; magnitude R = √(Rx² + Ry²).

**Example:** F₁ = (30, 40) N and F₂ = (−10, 20) N. R = (20, 60) N, so R = **63.2 N** at **71.6°** above the x-axis.

### Rotational effects add as moments
The total moment about a point is the **algebraic sum** of the individual moments.

### Varignon's theorem
The moment of a force about a point equals the **sum of the moments of its components** (horizontal and vertical, or parallel and perpendicular to a line). Choose the easier method: if the perpendicular distance is hard to find, use components with their simple moment arms.

### Balancing a moment
**Example:** a 100 N force makes a clockwise moment of 30 N·m. To balance it with a counter-clockwise force acting 0.5 m from the point, F = 30 / 0.5 = **60 N**.
`,
          q: [
            mc('A 100 N force acts at 30° above the horizontal. What is its vertical component?', '50 N', '100 sin 30° = 50 N.', [
              ['86.6 N', 'This is the horizontal component.'],
              ['30 N', 'This is not the result of the trigonometry.'],
            ]),
            mc('F₁ = (30, 40) N and F₂ = (−10, 20) N act at the same point. What is the resultant?', '(20, 60) N', 'Add the components separately.', [
              ['(40, 20) N', 'The signs and components are mixed up.'],
              ['(20, 20) N', 'The y-components were not added correctly.'],
            ]),
          ],
        },
      ],
    },
    5: {
      summary: 'Conditions for equilibrium of concentrated-force systems in 2D.',
      sessions: [
        {
          t: 'Equilibrium in two dimensions',
          s: 'ΣF = 0 and ΣM = 0 for general, concurrent, collinear and parallel systems.',
          md: `
## Equilibrium

A body is in **equilibrium** when it has no tendency to translate or rotate. For a planar rigid body:

**ΣFx = 0, ΣFy = 0, ΣM = 0 (about any point)**

That gives **three independent equations** for a general coplanar system.

### Special cases (fewer independent equations)
| System | Equations available |
| --- | --- |
| **General coplanar forces** | 3 (ΣFx, ΣFy, ΣM) |
| **Concurrent forces** (all lines meet at a point) | 2 (moments about the meeting point are automatically zero) |
| **Parallel forces** (all in one direction) | 2 (ΣF along that direction, and ΣM) |
| **Collinear forces** | 1 (ΣF along the line) |

### Worked example
A beam AB (4 m) is supported by a pin at A and a roller at B. A 100 N downward load acts 1 m from A.
- ΣM about A: By × 4 − 100 × 1 = 0 → **By = 25 N**
- ΣFy: Ay + By − 100 = 0 → **Ay = 75 N**

Taking moments about a point where unknown forces meet removes them from the equation, which makes problems easier.
`,
          q: [
            mc('A beam AB of length 4 m has a pin at A and a roller at B. A load of 100 N acts 1 m from A. What is the reaction at B?', '25 N', 'ΣM_A = 0: By × 4 = 100 × 1.', [
              ['75 N', 'This is the reaction at A.'],
              ['100 N', 'This is the load.'],
            ]),
            mc('How many independent equilibrium equations are there for a system of concurrent coplanar forces?', 'Two', 'Moments about the point of concurrency are zero automatically.', [
              ['Three', 'That is for a general coplanar system.'],
              ['One', 'That is for collinear forces.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Concentrated forces and their effects',
    tasks: [
      mc('A spring (k = 800 N/m) is compressed by 0.05 m. What force does it exert?', '40 N', 'F = kx = 800 × 0.05.', [
        ['16,000 N', 'Check the units: x is in metres.'],
        ['4 N', 'This is not the result of kx.'],
        ['0.05 N', 'This is not the result of kx.'],
      ]),
      mc('A smooth (frictionless) floor supports a box. What is the direction of the floor\'s force on the box?', 'Vertical, perpendicular to the floor', 'There is no friction, so the contact force is normal.', [
        ['Horizontal, along the floor', 'That would need friction.'],
        ['At 45° to the floor', 'Only a normal force exists.'],
        ['Zero', 'The floor supports the weight.'],
      ]),
      mc('Which is NOT part of a correct free body diagram?', 'Forces exerted by the body on its surroundings', 'Only forces acting on the body are shown.', [
        ['The body\'s weight', 'This is an external force on the body.'],
        ['Reaction forces at supports', 'These act on the body.'],
        ['Applied loads', 'These act on the body.'],
      ]),
      mc('A force of 60 N acts at a perpendicular distance of 0.5 m from point O. What is its moment about O?', '30 N·m', 'M = Fd.', [
        ['120 N·m', 'This divides instead of multiplying.'],
        ['3 N·m', 'This is not the result.'],
        ['60 N·m', 'This ignores the distance.'],
      ]),
      mc('A force F has components Fx = 30 N and Fy = 40 N. What is its magnitude?', '50 N', '√(30² + 40²) = 50 N.', [
        ['70 N', 'This adds the components.'],
        ['10 N', 'This subtracts them.'],
        ['35 N', 'This is the mean.'],
      ]),
      mc('A 100 N clockwise-moment-producing force acts with a moment arm of 0.3 m. What counter-clockwise force at 0.5 m balances it? (Force is perpendicular to the arm.)', '60 N', '100 × 0.3 = 30 N·m, and 30 / 0.5 = 60 N.', [
        ['30 N', 'This is the moment value in N·m.'],
        ['100 N', 'This is the first force.'],
        ['166.7 N', 'This divides the wrong way.'],
      ]),
      mc('A force is moved along its line of action to a new point. What happens to its moment about a fixed point?', 'It does not change', 'The moment arm and the force are unchanged.', [
        ['It doubles', 'There is no reason for doubling.'],
        ['It becomes zero', 'This happens only when the line passes through the point.'],
        ['It changes sign', 'The sense of rotation is unchanged.'],
      ]),
      mc('A simply supported beam of length 4 m carries a 100 N load 3 m from A. What is the reaction at A?', '25 N', 'ΣM_B = 0: Ay × 4 = 100 × 1.', [
        ['75 N', 'This is the reaction at B.'],
        ['100 N', 'This is the load.'],
        ['0 N', 'A carries part of the load.'],
      ]),
      tf('For a system of parallel forces, you can write three independent equations of equilibrium.', false, 'Parallel force systems have only two independent equations: the sum of forces and the sum of moments.', 'Correct. Parallel forces give two independent equations.'),
    ],
  },
};
