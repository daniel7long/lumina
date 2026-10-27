import { mc, tf } from '../builder.js';

export default {
  summary: 'Model friction between contacting bodies and decide whether they stay at rest, slip or tip.',
  modules: {
    18: {
      summary: 'Static and kinetic friction, slipping and tipping.',
      sessions: [
        {
          t: 'Static and kinetic friction',
          s: 'The friction law and when motion begins.',
          md: `
## Friction

Real contacts have a **normal force N** (perpendicular to the surface) and a **friction force f** (tangential, opposing motion or its tendency).

### Coulomb's law
| Case | Friction force |
| --- | --- |
| **At rest** (static) | f ≤ μₛ N. The friction is whatever is needed for equilibrium, up to the maximum |
| **About to slip** (impending) | f = μₛ N |
| **Sliding** (kinetic) | f = μₖ N, with μₖ < μₛ typically |

Friction always acts to **oppose** the relative (or impending) motion. The coefficient μ depends on the two surfaces, not on the contact area.

### Example
A 100 N block on a horizontal floor, μₛ = 0.3, μₖ = 0.25. N = 100 N, so the maximum static friction is **30 N**.
- Push of 25 N: the block stays at rest; friction = **25 N** (not 30 N).
- Push of 35 N: the block **slips**; friction drops to μₖN = **25 N** and the net force is 10 N.

### Block on an incline
A block starts to slide when tan θ = μₛ. For μₛ = 0.4, θ = arctan 0.4 ≈ **21.8°**, regardless of the weight.

### Slip, tip or stay?
A body may stay at rest, **slip**, or **tip** (rotate about an edge). Check each:
- Slipping needs P = μₛN.
- Tipping starts when the normal force moves to the edge: a block of width 0.4 m, weight 100 N, pushed at the top (height 1 m) tips when P × 1 = 100 × 0.2, so **P = 20 N**. With μₛ = 0.3 the slip load is 30 N, so it **tips first**.

The mode that needs the **smaller** force happens first.
`,
          q: [
            mc('A 100 N block rests on a floor with μₛ = 0.3. A horizontal push of 25 N is applied. What is the friction force?', '25 N', 'Friction equals what is needed for equilibrium, since 25 < 30.', [
              ['30 N', 'This is the maximum possible, not the actual value.'],
              ['0 N', 'Friction is needed to resist the push.'],
            ]),
            mc('At what angle does a block with μₛ = 0.4 begin to slide on an incline?', 'About 21.8°', 'tan θ = 0.4, so θ = arctan 0.4.', [
              ['About 40°', 'The coefficient is not an angle in degrees.'],
              ['About 68°', 'This is arctan 2.5.'],
            ]),
          ],
        },
        {
          t: 'Does it slip, tip or stay?',
          s: 'A method for deciding the outcome.',
          md: `
## A method

1. Draw the FBD with **N**, **f** and the applied loads. Assume the body is in equilibrium and **friction is whatever is needed**.
2. Solve equilibrium for **N** and the **required friction f**.
3. Compare: if **f ≤ μₛN**, there is no slipping. If f > μₛN, the body slips and f = μₖN.
4. Also check that the location of N is **inside the contact area**. If the equations place N outside the base, the body tips.

### Finding the conditions for impending motion
Set f = μₛN and solve for the load, the angle or the coefficient that satisfies equilibrium.

### Worked example
A 50 N crate rests on a floor, μₛ = 0.4. A rope pulls at 30° above horizontal with force P.
- ΣFy: N + P sin 30° = 50 → N = 50 − 0.5P
- ΣFx at impending slip: P cos 30° = 0.4(50 − 0.5P)
- 0.866P = 20 − 0.2P → **P = 18.8 N**

Pulling a little upward reduces N, and so reduces the friction.

### Remember
Friction is a **reaction** force: never assume it is always μN.
`,
          q: [
            mc('A crate is pulled by a rope at an angle above the horizontal. Why can this require less force than a horizontal pull?', 'The vertical component reduces the normal force and hence the friction', 'N = W − P sin θ.', [
              ['It increases the weight', 'The rope reduces the normal force.'],
              ['It changes the coefficient of friction', 'The coefficient depends on the surfaces.'],
            ]),
            tf('Friction force on a body at rest always equals μₛN.', false, 'Friction equals μₛN only at the point of impending slip. Otherwise it equals whatever is needed for equilibrium.', 'Correct. μₛN is the maximum, not the actual value.'),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Friction',
    tasks: [
      mc('A 200 N block rests on a surface with μₛ = 0.5 and μₖ = 0.4. What is the maximum static friction force?', '100 N', 'μₛN = 0.5 × 200.', [
        ['80 N', 'This uses μₖ.'],
        ['200 N', 'This ignores the coefficient.'],
        ['40 N', 'This is not the result.'],
      ]),
      mc('The same block is pushed with 70 N horizontally. What happens?', 'It stays at rest with 70 N of friction', '70 N < 100 N, so friction equals the push.', [
        ['It slides', 'The push is below the static limit.'],
        ['Friction is 100 N', 'Friction is only what is needed.'],
        ['Friction is 80 N', 'This is the kinetic friction value, not applicable here.'],
      ]),
      mc('The block is now pushed with 120 N. What is the friction force once it slides?', '80 N', 'Kinetic friction: μₖN = 0.4 × 200.', [
        ['100 N', 'This is the maximum static friction.'],
        ['120 N', 'This is the push.'],
        ['0 N', 'Friction still acts.'],
      ]),
      mc('A box slides on a ramp when the angle exceeds 30°. Which is the coefficient of static friction (approximately)?', '0.58', 'μₛ = tan 30° = 0.577.', [
        ['0.50', 'tan 30° is 0.577.'],
        ['0.87', 'This is cos 30°.'],
        ['0.30', 'This is not the result.'],
      ]),
      mc('A block of weight 100 N, width 0.4 m, is pushed at its top (height 1 m). μₛ = 0.3. What happens as the push increases?', 'It tips at about 20 N, before it would slip at 30 N', 'Tipping needs P × 1 = 100 × 0.2.', [
        ['It slips at 30 N', 'It tips first.'],
        ['It slides at 20 N', 'At 20 N it tips.'],
        ['It stays at rest regardless', 'Both limits are exceeded.'],
      ]),
      mc('Which statement about the friction coefficient is correct?', 'It depends on the two surfaces in contact, not on the contact area', 'This is Coulomb\'s law.', [
        ['It increases with contact area', 'Area does not matter.'],
        ['It equals the weight of the body', 'It is dimensionless.'],
        ['It has units of newtons', 'It is dimensionless.'],
      ]),
      mc('A 50 N crate is pulled at 30° above horizontal. μₛ = 0.4. What force P is needed to start it moving?', 'About 18.8 N', 'P cos 30° = 0.4 (50 − P sin 30°).', [
        ['20 N', 'This is the friction force for a horizontal pull.'],
        ['50 N', 'This is the weight.'],
        ['10 N', 'This is too small.'],
      ]),
      mc('Which statement is true when a body is sliding?', 'The friction force opposes the sliding and equals μₖN', 'This is the kinetic friction law.', [
        ['Friction acts in the direction of sliding', 'Friction opposes motion.'],
        ['Friction is zero', 'There is friction.'],
        ['Friction equals μₛN', 'Kinetic friction uses μₖ.'],
      ]),
      tf('For a body at rest, the friction force always has the maximum value μₛN.', false, 'Static friction adjusts to what equilibrium requires, up to the maximum μₛN.', 'Correct. μₛN is only an upper limit.'),
    ],
  },
};
