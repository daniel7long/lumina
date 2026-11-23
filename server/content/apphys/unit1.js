import { mc, tf } from '../builder.js';

export default {
  summary: 'Describe motion precisely with position, velocity and acceleration, then split two-dimensional motion into independent horizontal and vertical parts.',
  modules: {
    1: {
      summary: 'Position, velocity and acceleration in one dimension, with graphs and the kinematic equations.',
      sessions: [{
        t: 'Describing and calculating motion',
        s: 'Displacement, velocity, acceleration, motion graphs and the constant-acceleration equations.',
        md: `
## Describing motion

- **Displacement** (Δx) is the change in position, with direction. **Distance** is the total path length and has no direction.
- **Velocity** is the rate of change of displacement: v = Δx/Δt. **Speed** is its magnitude.
- **Acceleration** is the rate of change of velocity: a = Δv/Δt. A negative acceleration is not always "slowing down": an object slows down only when velocity and acceleration point in opposite directions.

### Reading graphs
- On a **position–time** graph, the **slope** is velocity.
- On a **velocity–time** graph, the **slope** is acceleration and the **area** under the curve is displacement.

### Constant acceleration
When acceleration is constant:

- v = v₀ + at
- Δx = v₀t + ½at²
- v² = v₀² + 2aΔx

Pick the equation that contains the three quantities you know and the one you want.

### Free fall
Near Earth's surface, with air resistance ignored, every object accelerates downward at g. **In this course we round g to 10 m/s²** so that you can do the arithmetic by hand (the exam sheet gives 9.8 m/s²). At the top of a thrown object's path the velocity is zero, but the acceleration is still g.
`,
        q: [
          mc('A car starts from rest and accelerates at 3 m/s² for 4 s. What is its displacement?', '24 m', 'Δx = v₀t + ½at² = 0 + ½(3)(4²) = 24 m.', [
            ['12 m', 'This is the final speed (3 × 4 = 12 m/s), not a distance.'],
            ['48 m', 'This uses the final speed times the time, which assumes the car travelled at 12 m/s the whole time.'],
            ['6 m', 'The time was not squared in ½at².'],
          ]),
          mc('A ball is thrown straight up at 20 m/s. How long does it take to reach its highest point? (Use g = 10 m/s².)', '2 s', 'At the top v = 0, so t = (v₀ − 0)/g = 20/10 = 2 s.', [
            ['4 s', 'This is the time for the whole round trip, up and back down.'],
            ['0.5 s', 'The ratio was inverted (g/v₀ instead of v₀/g).'],
            ['10 s', 'This is the value of g, not a time.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Vectors, components and projectile motion.',
      sessions: [{
        t: 'Vectors and projectiles',
        s: 'Resolving vectors and treating horizontal and vertical motion separately.',
        md: `
## Vectors and components

A **vector** has magnitude and direction. A vector of magnitude A at angle θ above the horizontal has components

- Aₓ = A cos θ
- A_y = A sin θ

To add vectors, add their components separately. The magnitude is √(Aₓ² + A_y²).

## Projectile motion

A **projectile** moves under gravity alone. The key idea: **horizontal and vertical motion are independent.**

| | Horizontal | Vertical |
|---|---|---|
| Acceleration | 0 | g downward |
| Velocity | constant | changes by g each second |

For a projectile launched at speed v and angle θ:

- vₓ = v cos θ and v_y0 = v sin θ
- Time to the top: t = v_y0 / g, so the **total time of flight** (landing at launch height) is 2v_y0 / g.
- **Maximum height:** H = v_y0² / 2g
- **Range:** R = vₓ × time of flight

A ball rolled off a table and a ball dropped from the same height hit the floor at the same time, because the horizontal velocity does not change the vertical motion.
`,
        q: [
          mc('A ball is launched at 40 m/s at 30° above the horizontal. What is its initial vertical velocity?', '20 m/s', 'v_y0 = 40 sin 30° = 40 × 0.5 = 20 m/s.', [
            ['34.6 m/s', 'This is the horizontal component, 40 cos 30°.'],
            ['40 m/s', 'This is the full launch speed, not the vertical part.'],
          ]),
          tf('Ignoring air resistance, the horizontal velocity of a projectile stays constant during its flight.', true, 'No horizontal force acts, so the horizontal acceleration is zero.', 'Without air resistance there is no horizontal force, so the horizontal velocity cannot change.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Kinematics',
    tasks: [
      mc('A v–t graph is a straight line from (0 s, 2 m/s) to (4 s, 14 m/s). What is the displacement during these 4 s?', '32 m', 'The area under the line is the average velocity × time: (2 + 14)/2 × 4 = 32 m.', [
        ['56 m', 'This uses the final velocity (14 m/s) for the entire 4 s.'],
        ['8 m', 'This is the average velocity in m/s, not a displacement.'],
        ['48 m', 'This is 12 m/s × 4 s, which uses the change in velocity instead of the average.'],
      ]),
      mc('A stone is dropped from rest from a cliff and hits the ground after 3 s. How high is the cliff? (Use g = 10 m/s².)', '45 m', 'Δy = ½gt² = ½(10)(3²) = 45 m.', [
        ['30 m', 'This is the impact speed (10 × 3 = 30 m/s), not a distance.'],
        ['90 m', 'This is 30 m/s × 3 s, which assumes the final speed for the whole fall.'],
        ['15 m', 'This is v t /2 with v = 10 m/s rather than the final speed.'],
      ]),
      mc('A car moving at 20 m/s brakes with constant acceleration of 5 m/s² (in the opposite direction) until it stops. How far does it travel?', '40 m', 'From v² = v₀² + 2aΔx: 0 = 400 − 2(5)Δx, so Δx = 40 m.', [
        ['80 m', 'This is v₀²/a; the factor of 2 in 2aΔx was missed.'],
        ['4 m', 'This is the stopping time (20/5 = 4 s), not a distance.'],
        ['100 m', 'This is v₀ multiplied by a (20 × 5), which has no physical meaning here.'],
      ]),
      tf('At the highest point of a ball thrown straight up, its acceleration is zero.', false, 'Acceleration is not zero at the top.', 'Correct. The velocity is momentarily zero, but gravity still gives an acceleration of g downward.'),
      mc('A ball rolls off a 20 m high cliff horizontally at 15 m/s. How far from the base of the cliff does it land? (Use g = 10 m/s².)', '30 m', 'The fall time is √(2h/g) = √4 = 2 s, so the range is 15 × 2 = 30 m.', [
        ['15 m', 'This assumes a fall time of 1 s.'],
        ['60 m', 'This forgot the square root: it uses 4 s as the fall time.'],
        ['20 m', 'This is the height of the cliff, not the horizontal distance.'],
      ]),
      mc('A projectile is launched at 20 m/s at 30° above the horizontal. What is its maximum height? (Use g = 10 m/s².)', '5 m', 'v_y0 = 20 sin 30° = 10 m/s, and H = v_y0²/2g = 100/20 = 5 m.', [
        ['10 m', 'The factor of 2 in 2g was missed.'],
        ['20 m', 'This uses the full launch speed instead of the vertical component.'],
        ['15 m', 'This uses the horizontal component (17.3 m/s), which does not affect the height.'],
      ]),
      tf('A ball dropped from a table and a ball rolled horizontally off the same table at the same moment land at the same time.', true, 'Both start with zero vertical velocity and fall the same height under the same acceleration.', 'The vertical motion is independent of the horizontal speed, so both take the same time to fall.'),
    ],
  },
};
