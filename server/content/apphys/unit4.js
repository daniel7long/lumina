import { mc, tf } from '../builder.js';

export default {
  summary: 'Track energy as it moves between forms, and use work and power to solve problems that forces and acceleration make hard.',
  modules: {
    7: {
      summary: 'Work and kinetic energy.',
      sessions: [{
        t: 'Work and the work–energy theorem',
        s: 'Work by a constant force at an angle, kinetic energy, and the link between them.',
        md: `
## Work

A constant force F does **work** on an object that moves through a displacement d:

**W = F d cos θ**

where θ is the angle between the force and the displacement. Work is measured in **joules** (1 J = 1 N·m).

- θ = 0°: all of the force helps, W = Fd.
- θ = 90°: the force is perpendicular to the motion, so **W = 0**. Examples: the normal force on a sliding block, gravity on a satellite in a circular orbit, and the upward force of a person who carries a box at constant height.
- θ = 180°: the force opposes the motion, so the work is **negative** (friction, for example).

## Kinetic energy and the work–energy theorem

The **kinetic energy** of an object is **KE = ½mv²**. It depends on the **square** of the speed, so doubling the speed quadruples the kinetic energy.

The **net work** done on an object equals its change in kinetic energy:

**W_net = ΔKE = ½mv² − ½mv₀²**

This is often easier than using F = ma, because it needs no information about time and works even when the force changes.
`,
        q: [
          mc('A 20 N force pulls a box 5 m along the floor at 60° above the horizontal. How much work does this force do?', '50 J', 'W = Fd cos θ = 20 × 5 × cos 60° = 20 × 5 × 0.5 = 50 J.', [
            ['100 J', 'The angle was ignored (20 × 5).'],
            ['86.6 J', 'The sine of the angle was used instead of the cosine.'],
          ]),
          mc('A 2 kg object speeds up from 3 m/s to 5 m/s. How much net work was done on it?', '16 J', 'W = ½m(v² − v₀²) = ½(2)(25 − 9) = 16 J.', [
            ['4 J', 'The speeds were subtracted before squaring: ½(2)(5 − 3)².'],
            ['34 J', 'The squares were added instead of subtracted.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Potential energy, conservation of energy and power.',
      sessions: [{
        t: 'Potential energy, conservation and power',
        s: 'Gravitational and spring energy, energy conservation with and without friction, and power.',
        md: `
## Potential energy

- **Gravitational:** U_g = mgh, where h is the height above a chosen zero level. Only **changes** in U matter.
- **Elastic (spring):** U_s = ½kx², where k is the spring constant and x the stretch or compression from the relaxed length.

## Conservation of energy

If only **conservative** forces (gravity, springs) do work, the total mechanical energy is constant:

**KE + U = constant**

A block dropped from rest from height h reaches the ground with ½mv² = mgh, so **v = √(2gh)**, whatever its mass.

If a **non-conservative** force such as friction also does work, then

**KE₀ + U₀ + W_nc = KE + U**

Friction does negative work, and the "missing" mechanical energy becomes thermal energy.

## Power

**Power** is the rate of doing work or transferring energy:

**P = W/Δt = F v**

It is measured in **watts** (1 W = 1 J/s). A machine that does twice the work in the same time has twice the power. For a car at constant speed, the engine force balances the resistance, so P = Fv.
`,
        q: [
          mc('A block is dropped from rest from a height of 1.8 m. How fast is it moving just before it hits the ground? (Use g = 10 m/s²; ignore air resistance.)', '6 m/s', 'mgh = ½mv², so v = √(2gh) = √(2 × 10 × 1.8) = √36 = 6 m/s.', [
            ['36 m/s', 'This is v²; the square root was not taken.'],
            ['18 m/s', 'This is gh, which is not a speed.'],
            ['4.2 m/s', 'This is √(gh); the factor of 2 was missed.'],
          ]),
          mc('A 60 kg student climbs 5 m up a staircase in 10 s. What is the average power needed to raise her weight? (Use g = 10 m/s².)', '300 W', 'P = mgh/t = 60 × 10 × 5/10 = 300 W.', [
            ['3000 W', 'This is the work in joules (3000 J); it was not divided by the time.'],
            ['30 W', 'The factor of g was left out: 60 × 5/10.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Energy',
    tasks: [
      mc('A 0.5 kg block is pressed against a spring (k = 200 N/m) that is compressed by 0.1 m, then released on a frictionless surface. What speed does the block have when the spring is back at its relaxed length?', '2 m/s', 'The spring stores ½kx² = ½(200)(0.01) = 1 J, so ½(0.5)v² = 1 and v = 2 m/s.', [
        ['4 m/s', 'This is v²; the square root was not taken.'],
        ['2.8 m/s', 'The factor ½ was missed in the spring energy (kx² = 2 J).'],
        ['1 m/s', 'This is the energy in joules, not the speed.'],
      ]),
      mc('A roller-coaster car starts from rest at the top of a 20 m hill and rolls without friction. How fast is it going at the bottom? (Use g = 10 m/s².)', '20 m/s', 'v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s.', [
        ['400 m/s', 'This is v²; the square root was not taken.'],
        ['14 m/s', 'This is √(gh); the factor of 2 was missed.'],
      ]),
      mc('A 2 kg block moving at 6 m/s slides 9 m across a rough floor and stops. What is the coefficient of kinetic friction? (Use g = 10 m/s².)', '0.2', 'The block loses ½(2)(36) = 36 J, so the friction force is 36/9 = 4 N and μ_k = 4/(2 × 10) = 0.2.', [
        ['0.4', 'The factor ½ was missed in the kinetic energy (72 J).'],
        ['4', 'This is the friction force in newtons, not the coefficient.'],
      ]),
      mc('A car engine delivers 40 kW to the wheels while the car moves at a constant 20 m/s. What is the force the engine provides?', '2000 N', 'From P = Fv, F = P/v = 40 000/20 = 2000 N.', [
        ['800 000 N', 'The power was multiplied by the speed instead of divided.'],
        ['100 N', 'The power was divided by the speed squared.'],
      ]),
      tf('A satellite in a circular orbit has no work done on it by gravity.', true, 'Gravity points toward the center, perpendicular to the velocity, so W = Fd cos 90° = 0.', 'The force is perpendicular to the satellite’s motion at every instant, so gravity does no work and the speed stays constant.'),
      mc('A person carries a 10 kg box horizontally at a constant speed for 5 m. How much work does the person’s upward force on the box do? (Use g = 10 m/s².)', '0 J', 'The upward force is perpendicular to the horizontal displacement, so cos 90° = 0.', [
        ['500 J', 'This is mg × d, which would apply only if the box moved vertically.'],
        ['50 J', 'This multiplies mass by distance, which has no physical meaning here.'],
      ]),
      mc('A car doubles its speed. By what factor does its kinetic energy increase?', '4', 'KE is proportional to v², and 2² = 4.', [
        ['2', 'This treats KE as proportional to v rather than v².'],
        ['8', 'This would need KE proportional to v³.'],
        ['1', 'Kinetic energy depends on speed.'],
      ]),
    ],
  },
};
