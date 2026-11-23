import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain why objects accelerate: identify the forces on an object, add them, and use Newton’s laws on level ground, inclines and connected objects.',
  modules: {
    3: {
      summary: 'Newton’s laws and free-body diagrams.',
      sessions: [{
        t: 'Newton’s laws and free-body diagrams',
        s: 'Inertia, F = ma, action–reaction pairs and how to draw a free-body diagram.',
        md: `
## Newton's three laws

1. **Inertia.** An object keeps its velocity (including rest) unless a **net force** acts on it.
2. **F_net = ma.** The acceleration is in the direction of the net force and is proportional to it and inversely proportional to the mass.
3. **Action–reaction.** If A pushes on B, then B pushes on A with an equal and opposite force. The two forces act on **different objects**, so they never cancel each other.

## Common forces

- **Weight** (F_g = mg), straight down.
- **Normal force** (F_N), perpendicular to a surface.
- **Tension** (F_T), along a rope or string.
- **Friction**, parallel to a surface and opposing sliding.

## Free-body diagrams

A free-body diagram shows **one object** as a dot and draws **only the forces acting on it**, each as an arrow from the dot. Do not draw forces the object exerts on other things, and do not draw "the force of motion". Then:

1. Choose axes (along the direction of acceleration if you can).
2. Write ΣF = ma along each axis.
3. Solve for the unknown.

If the net force is zero, the acceleration is zero: the object is at rest or moves at constant velocity.
`,
        q: [
          mc('A 5 kg object is pushed to the right with 20 N and to the left with 8 N. What is its acceleration?', '2.4 m/s² to the right', 'The net force is 20 − 8 = 12 N to the right, so a = 12/5 = 2.4 m/s².', [
            ['4 m/s² to the right', 'This ignores the 8 N force (20/5).'],
            ['5.6 m/s² to the right', 'The forces were added instead of subtracted: 28/5.'],
            ['2.4 m/s² to the left', 'The acceleration points in the direction of the net force, which is to the right.'],
          ]),
          tf('A book resting on a table: its weight and the normal force from the table are an action–reaction pair.', false, 'They are not a third-law pair.', 'Correct. Both forces act on the book. The reaction to the book’s weight is the book’s pull on Earth.'),
        ],
      }],
    },
    4: {
      summary: 'Friction, inclines and connected objects.',
      sessions: [{
        t: 'Friction, inclines and connected objects',
        s: 'Static and kinetic friction, components of weight on a slope, and strings between masses.',
        md: `
## Friction

- **Kinetic friction** (sliding): f_k = μ_k F_N.
- **Static friction** (not sliding): f_s ≤ μ_s F_N. It adjusts to match the applied force up to this maximum, and μ_s is usually larger than μ_k.

On a level surface with no vertical acceleration, F_N = mg. This is not always true: in an elevator, or when a rope pulls upward at an angle, F_N changes.

## Inclines

On a slope of angle θ, tilt the axes so that one is **parallel** and one **perpendicular** to the surface:

- Component of weight down the slope: **mg sin θ**
- Component of weight into the slope: **mg cos θ**, so F_N = mg cos θ
- Acceleration down a frictionless slope: **a = g sin θ**
- With friction: a = g sin θ − μ_k g cos θ

## Connected objects

For blocks joined by a string, treat the whole system to get the acceleration, then apply F = ma to one block to find the tension. If the string is light and does not stretch, both blocks have the same acceleration and the tension is the same on both ends.
`,
        q: [
          mc('A 10 kg block on a level floor is pulled by a 50 N horizontal force. The coefficient of kinetic friction is 0.3. What is its acceleration? (Use g = 10 m/s².)', '2 m/s²', 'Friction is 0.3 × 100 = 30 N, so the net force is 20 N and a = 20/10 = 2 m/s².', [
            ['5 m/s²', 'This ignores friction.'],
            ['8 m/s²', 'Friction was added to the pull (80/10) instead of subtracted.'],
            ['3 m/s²', 'This is the friction force divided by the mass, which leaves out the applied force.'],
          ]),
          mc('What is the acceleration of a block sliding down a frictionless 30° incline? (Use g = 10 m/s².)', '5 m/s²', 'a = g sin 30° = 10 × 0.5 = 5 m/s².', [
            ['8.7 m/s²', 'This is g cos 30°, the component into the slope.'],
            ['10 m/s²', 'This is free-fall acceleration, which would apply only to a vertical drop.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Force and translational dynamics',
    tasks: [
      mc('A 60 kg person stands on a scale in an elevator that accelerates upward at 2 m/s². What does the scale read? (Use g = 10 m/s².)', '720 N', 'F_N − mg = ma, so F_N = m(g + a) = 60 × 12 = 720 N.', [
        ['600 N', 'This is the person’s weight; the scale reads more when accelerating upward.'],
        ['480 N', 'This is m(g − a), which would apply if the elevator accelerated downward.'],
        ['120 N', 'This is only the net force, ma.'],
      ]),
      tf('A hockey puck slides at constant velocity across frictionless ice. A net force must be acting on it in the direction of its motion.', false, 'No net force is needed to maintain constant velocity.', 'Correct. By Newton’s first law, constant velocity means the net force is zero.'),
      mc('A 3 kg block and a 2 kg block are joined by a light string on a frictionless table. A 15 N horizontal force pulls the 3 kg block directly away from the 2 kg block. What is the tension in the string?', '6 N', 'The system accelerates at 15/5 = 3 m/s². The string alone pulls the 2 kg block, so T = 2 × 3 = 6 N.', [
        ['15 N', 'This is the applied force; the string carries only the force needed to accelerate the 2 kg block.'],
        ['9 N', 'This is the net force on the 3 kg block (3 × 3), not the tension in the string.'],
        ['7.5 N', 'This assumes the force is shared equally between the two blocks.'],
      ]),
      mc('A 20 kg crate rests on a floor with μ_s = 0.5 and μ_k = 0.4. What is the smallest horizontal force that will start it moving? (Use g = 10 m/s².)', '100 N', 'The maximum static friction is μ_s mg = 0.5 × 200 = 100 N.', [
        ['80 N', 'This uses the kinetic coefficient, which applies once the crate is already sliding.'],
        ['200 N', 'This is the crate’s weight, not the friction limit.'],
        ['10 N', 'The weight was replaced by the mass (0.5 × 20).'],
      ]),
      mc('A 5 kg block slides down a 36.9° incline (sin θ = 0.6, cos θ = 0.8) with μ_k = 0.5. What is its acceleration? (Use g = 10 m/s².)', '2 m/s²', 'a = g sin θ − μ_k g cos θ = 6 − 0.5(10)(0.8) = 6 − 4 = 2 m/s².', [
        ['6 m/s²', 'This is g sin θ alone, which ignores friction.'],
        ['4 m/s²', 'This is the deceleration due to friction alone.'],
        ['8 m/s²', 'This is g cos θ, the wrong component of gravity.'],
      ]),
      mc('A 3 kg mass and a 1 kg mass hang from opposite ends of a light string over a frictionless pulley. What is the magnitude of their acceleration? (Use g = 10 m/s².)', '5 m/s²', 'The net driving force is (3 − 1)(10) = 20 N and the total mass is 4 kg, so a = 5 m/s².', [
        ['20 m/s²', 'The net force was divided by 1 kg only; both masses accelerate.'],
        ['6.7 m/s²', 'The net force was divided by 3 kg only; both masses accelerate.'],
        ['10 m/s²', 'This is g, which would apply only if one mass were in free fall.'],
      ]),
      tf('When a heavy truck collides head-on with a small car, the truck exerts a larger force on the car than the car exerts on the truck.', false, 'The forces are equal in size.', 'Correct. Newton’s third law says the two forces are equal and opposite. The car’s acceleration is larger because its mass is smaller.'),
    ],
  },
};
