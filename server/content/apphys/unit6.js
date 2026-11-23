import { mc, tf } from '../builder.js';

export default {
  summary: 'Describe what makes objects rotate and balance, and extend the ideas of motion, inertia and momentum to spinning systems.',
  modules: {
    11: {
      summary: 'Torque and balance.',
      sessions: [{
        t: 'Torque and static equilibrium',
        s: 'Torque from force, lever arm and angle, and the conditions for equilibrium.',
        md: `
## Torque

A force can make an object rotate about a pivot. The measure of this turning effect is **torque**:

**τ = r F sin θ**

where r is the distance from the pivot to where the force acts, F is the force and θ is the angle between the force and the line from the pivot to that point. Only the component of the force **perpendicular** to the lever arm produces torque. Torque is measured in N·m.

- A force applied **at the pivot** (r = 0) or **along the line** through the pivot (θ = 0°) produces no torque.
- A longer wrench or a push farther from the hinge gives more torque for the same force.
- By convention, counterclockwise torques are positive and clockwise torques negative.

## Static equilibrium

An object is in **static equilibrium** (not moving or rotating) when both conditions hold:

1. **ΣF = 0**: no net force, so no translational acceleration.
2. **Στ = 0**: no net torque about **any** chosen point, so no angular acceleration.

### Strategy
Choose the pivot at the point where the most unknown forces act, so their torques are zero. Write Στ = 0, solve for one unknown, then use ΣF = 0 for the rest. The weight of a uniform object acts at its **center**.

For a seesaw balanced at its center, m₁d₁ = m₂d₂: a lighter person must sit farther from the pivot.
`,
        q: [
          mc('A 50 N force is applied to a wrench 0.4 m from the bolt, at 30° to the length of the wrench. What is the torque on the bolt?', '10 N·m', 'τ = rF sin θ = 0.4 × 50 × 0.5 = 10 N·m.', [
            ['20 N·m', 'The angle was ignored; this would be the torque for a perpendicular force.'],
            ['17.3 N·m', 'The cosine of the angle was used instead of the sine.'],
          ]),
          mc('A 40 kg child sits 2 m from the pivot of a seesaw. Where must a 20 kg child sit to balance it?', '4 m on the other side', 'Balance needs 40 × 2 = 20 × d, so d = 4 m.', [
            ['1 m on the other side', 'The distance was divided by the mass ratio instead of multiplied.'],
            ['2 m on the other side', 'This would balance only if the masses were equal.'],
            ['8 m on the other side', 'The ratio was applied twice.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Rotational kinematics and angular momentum.',
      sessions: [{
        t: 'Rotational motion and angular momentum',
        s: 'Angular quantities, their link to linear motion, rotational inertia and conservation of angular momentum.',
        md: `
## Angular quantities

Rotation is described like linear motion, using angles in **radians** (one full turn = 2π rad):

| Linear | Angular |
|---|---|
| x | θ |
| v | ω (rad/s) |
| a | α (rad/s²) |

For constant α the same equations apply: ω = ω₀ + αt and θ = ω₀t + ½αt².

A point at distance r from the axis of a rotating rigid object has the **same ω** as every other point, but a **linear speed** v = ωr that grows with r.

## Rotational inertia and Newton's second law

The **rotational inertia** I measures how hard an object is to spin. It depends on the mass **and how far from the axis it is**: mass far from the axis gives a larger I. Newton's second law for rotation is

**Στ = Iα**

A solid disk and a ring of equal mass and radius: the ring has the larger I, so it accelerates more slowly when rolling down a slope.

## Angular momentum

**L = Iω**

If the net external torque is zero, **angular momentum is conserved**: I₁ω₁ = I₂ω₂. When a spinning skater pulls in her arms, I decreases, so ω increases. Her kinetic energy (½Iω² = L²/2I) also increases, because she does work pulling her arms inward.
`,
        q: [
          mc('A wheel of radius 0.5 m spins at 10 rad/s. What is the speed of a point on its rim?', '5 m/s', 'v = ωr = 10 × 0.5 = 5 m/s.', [
            ['20 m/s', 'The angular speed was divided by the radius instead of multiplied.'],
            ['10 m/s', 'This is the number of radians per second; the radius was not used.'],
          ]),
          mc('A skater spinning at 3 rad/s with rotational inertia 4 kg·m² pulls her arms in so her rotational inertia becomes 2 kg·m². What is her new angular speed?', '6 rad/s', 'L = Iω is conserved: 4 × 3 = 2 × ω, so ω = 6 rad/s.', [
            ['1.5 rad/s', 'The ratio of the inertias was applied backward.'],
            ['3 rad/s', 'Angular speed changes when the rotational inertia changes.'],
            ['12 rad/s', 'The ratio was applied twice.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Torque and rotational motion',
    tasks: [
      mc('A uniform 10 kg plank 2 m long rests on two supports at its ends. A 30 kg person stands 0.5 m from the left end. What force does the right support exert? (Use g = 10 m/s².)', '125 N', 'Torques about the left end: N_R(2) = 100(1) + 300(0.5) = 250, so N_R = 125 N.', [
        ['200 N', 'This is half of the total weight; the person is closer to the left support, so the supports share the load unequally.'],
        ['275 N', 'This is the force on the left support (400 − 125).'],
        ['250 N', 'The torque sum was not divided by the 2 m lever arm.'],
      ]),
      tf('The torque produced by a force depends only on the size of the force.', false, 'Torque also depends on where and at what angle the force is applied.', 'Correct. Torque is rF sin θ, so it depends on the lever arm and the angle as well as the force.'),
      mc('A wheel starts from rest and accelerates at 2 rad/s² for 5 s. Through what angle does it turn?', '25 rad', 'θ = ½αt² = ½(2)(25) = 25 rad.', [
        ['50 rad', 'This is the final angular speed times the time (10 × 5), which treats the speed as constant.'],
        ['10 rad', 'This is the final angular speed in rad/s, not an angle.'],
        ['5 rad', 'The time was not squared.'],
      ]),
      tf('If the net external torque on a system is zero, its angular momentum is conserved.', true, 'Torque is the rate of change of angular momentum, so zero torque means no change.', 'This is the angular analog of momentum conservation: with no net external torque, L stays constant.'),
      mc('A solid disk and a ring have the same mass and radius. Both are released from rest at the top of an incline and roll without slipping. Which reaches the bottom first?', 'The solid disk', 'The disk has the smaller rotational inertia, so less of its energy goes into rotation and more into forward speed.', [
        ['The ring', 'The ring has more rotational inertia (its mass is at the rim), so it accelerates more slowly.'],
        ['They arrive together', 'Rolling objects with different mass distributions do not accelerate equally; the rotational inertia differs.'],
      ]),
      mc('A skater spinning with arms outstretched pulls her arms in. What happens to her rotational kinetic energy?', 'It increases', 'L is conserved and KE = L²/2I, so a smaller I means a larger KE. The extra energy comes from the work her muscles do.', [
        ['It stays the same', 'Angular momentum is conserved here, not kinetic energy.'],
        ['It decreases', 'KE = L²/2I increases when I decreases at constant L.'],
      ]),
      mc('Two ladybugs sit on a turntable, one at radius r and one at radius 2r. Which statement is true?', 'They have the same angular speed, but the outer one moves twice as fast', 'All points on a rigid rotating object have the same ω, and v = ωr is proportional to r.', [
        ['They have the same linear speed', 'The outer ladybug covers a larger circle in the same time, so it moves faster.'],
        ['The outer one has twice the angular speed', 'Every point on the turntable completes a rotation in the same time.'],
      ]),
    ],
  },
};
