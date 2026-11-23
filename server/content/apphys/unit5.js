import { mc, tf } from '../builder.js';

export default {
  summary: 'Use momentum and impulse to analyze collisions and explosions, where forces are large, short and hard to measure.',
  modules: {
    9: {
      summary: 'Momentum, impulse and force over time.',
      sessions: [{
        t: 'Impulse and momentum',
        s: 'Momentum, impulse, the impulse–momentum theorem and force–time graphs.',
        md: `
## Momentum

The **momentum** of an object is **p = mv**. It is a **vector** in the direction of the velocity, measured in kg·m/s. A heavy truck and a light car can have the same momentum if the car is much faster.

## Impulse

**Impulse** is the force applied multiplied by the time it acts:

**J = F_net Δt**

When the force changes, the impulse is the **area under the force–time graph**. Newton's second law can be rewritten using impulse:

**J = Δp = mv − mv₀**

This is the **impulse–momentum theorem**. Direction matters: if a ball hits a wall at 20 m/s and bounces back at 30 m/s, the change in velocity is 30 − (−20) = **50 m/s**, not 10 m/s.

### Why airbags and bent knees work

For a given change in momentum, the impulse is fixed. Spreading the same impulse over a **longer time** means a **smaller average force**: F_avg = Δp/Δt. This is why you bend your knees when landing and why a catcher's mitt moves backward when catching a fastball.
`,
        q: [
          mc('A 0.15 kg ball moving at 20 m/s is hit straight back at 30 m/s. What is the magnitude of the impulse on the ball?', '7.5 N·s', 'Take the initial direction as negative: Δv = 30 − (−20) = 50 m/s, so J = 0.15 × 50 = 7.5 N·s.', [
            ['1.5 N·s', 'The speeds were subtracted without noting that the direction reverses (0.15 × 10).'],
            ['4.5 N·s', 'This is the momentum after the hit only (0.15 × 30).'],
            ['3.0 N·s', 'This is the momentum before the hit only (0.15 × 20).'],
          ]),
          tf('For the same change in momentum, a longer collision time means a smaller average force.', true, 'F_avg = Δp/Δt, so increasing Δt reduces the force.', 'The impulse is fixed by the change in momentum, so the same impulse over a longer time requires a smaller average force.'),
        ],
      }],
    },
    10: {
      summary: 'Conservation of momentum in collisions.',
      sessions: [{
        t: 'Collisions and conservation of momentum',
        s: 'Isolated systems, elastic and inelastic collisions, and explosions.',
        md: `
## Conservation of momentum

For a **system** with no net external force (an **isolated** system), the total momentum stays constant:

**p_before = p_after**

During a collision the forces between the objects are internal, equal and opposite, and act for the same time, so they transfer momentum from one object to the other without changing the total.

### Types of collision

| Type | Momentum | Kinetic energy |
|---|---|---|
| **Elastic** | conserved | conserved |
| **Inelastic** | conserved | **some lost** (as thermal energy, sound, deformation) |
| **Perfectly inelastic** | conserved | **maximum loss**: the objects stick together |

**Momentum is conserved in every collision of an isolated system.** Kinetic energy is conserved only in elastic ones.

### Perfectly inelastic example
A 2 kg cart moving at 6 m/s hits and sticks to a 4 kg cart at rest: 2(6) = (2 + 4)v, so **v = 2 m/s**.

### Explosions and recoil
If a system at rest breaks apart (a gun firing, a spring pushing carts), the total momentum remains zero. The pieces move in opposite directions with momenta of equal size, so the lighter piece moves faster.

Use a sign convention (for example, right = +) and keep it for every object.
`,
        q: [
          mc('A 2 kg cart moving at 6 m/s collides with a 4 kg cart at rest, and the two stick together. What is their common speed?', '2 m/s', 'Momentum is conserved: 2(6) = 6v, so v = 2 m/s.', [
            ['3 m/s', 'This is the average of 6 m/s and 0, which ignores the masses.'],
            ['6 m/s', 'The carts have more mass after the collision, so the speed must be lower.'],
          ]),
          tf('In an inelastic collision between two objects in an isolated system, total momentum is not conserved.', false, 'Momentum is conserved in every collision of an isolated system.', 'Correct. Momentum is conserved; it is kinetic energy that is not conserved in an inelastic collision.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Momentum',
    tasks: [
      mc('A 0.5 kg object at rest is pushed by a force that rises steadily from 0 to 20 N over 0.1 s and then falls steadily back to 0 over the next 0.1 s. What is its speed afterward?', '4 m/s', 'The impulse is the area of the triangle: ½ × 0.2 × 20 = 2 N·s, so v = J/m = 2/0.5 = 4 m/s.', [
        ['8 m/s', 'The area was taken as the full rectangle (20 × 0.2) instead of the triangle.'],
        ['2 m/s', 'The impulse (2 N·s) was not divided by the mass.'],
        ['40 m/s', 'This divides the peak force by the mass (20/0.5) and ignores the time the force acts.'],
      ]),
      mc('A 4 kg rifle, initially at rest, fires a 0.01 kg bullet at 400 m/s. What is the rifle’s recoil speed?', '1 m/s', 'Total momentum stays zero: 4v = 0.01 × 400, so v = 1 m/s.', [
        ['4 m/s', 'This is the bullet’s momentum in kg·m/s, not the rifle’s speed.'],
        ['100 m/s', 'The bullet’s momentum was divided by the bullet’s mass instead of the rifle’s.'],
        ['400 m/s', 'This is the bullet’s speed; the rifle is much heavier and moves much more slowly.'],
      ]),
      mc('A 1000 kg car moving at 20 m/s hits an identical stationary car and the two lock together. How much kinetic energy is lost?', '100 000 J', 'Their common speed is 10 m/s. KE before is ½(1000)(400) = 200 000 J; after, ½(2000)(100) = 100 000 J, so 100 000 J is lost.', [
        ['200 000 J', 'This is all of the initial energy, but the cars still move after the collision.'],
        ['0 J', 'Momentum is conserved, but kinetic energy is not in a perfectly inelastic collision.'],
        ['150 000 J', 'The final kinetic energy was computed with one car’s 1000 kg instead of the combined 2000 kg.'],
      ]),
      mc('A 3 kg ball moving at 4 m/s collides head-on and elastically with an identical stationary ball. What is the speed of the second ball afterward?', '4 m/s', 'For an elastic collision between equal masses, the balls exchange velocities: the first stops and the second moves off at 4 m/s.', [
        ['2 m/s', 'This is the result for a perfectly inelastic collision, where the balls stick.'],
        ['8 m/s', 'This would give the system more momentum and kinetic energy than it started with.'],
        ['0 m/s', 'This is the final speed of the first ball.'],
      ]),
      mc('A spring pushes apart a 1 kg cart and a 3 kg cart that were at rest together. The 1 kg cart moves left at 6 m/s. What is the velocity of the 3 kg cart?', '2 m/s to the right', 'Total momentum remains zero: 3v = 1 × 6, so v = 2 m/s in the opposite direction.', [
        ['6 m/s to the right', 'The masses were ignored; the heavier cart must move more slowly.'],
        ['18 m/s to the right', 'The mass was multiplied instead of divided.'],
        ['2 m/s to the left', 'The carts must move in opposite directions to keep the total momentum zero.'],
      ]),
      mc('Why does pulling your hand backward while catching a fast ball reduce the force you feel?', 'It increases the time over which the momentum changes', 'The change in momentum is fixed, so a longer stopping time gives a smaller average force.', [
        ['It reduces the ball’s change in momentum', 'The ball still comes to rest, so the change in momentum is the same.'],
        ['It reduces the ball’s mass', 'The mass of the ball does not change.'],
        ['It converts the ball’s momentum into energy', 'Momentum and energy are different quantities and one is not converted into the other.'],
      ]),
    ],
  },
};
