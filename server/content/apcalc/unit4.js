import { mc, tf } from '../builder.js';

export default {
  summary: 'Use derivatives to describe motion, relate changing quantities, approximate values and evaluate indeterminate limits.',
  modules: {
    7: {
      summary: 'Velocity, acceleration and rates of change in context.',
      sessions: [{
        t: 'Motion along a line',
        s: 'Position, velocity, acceleration and when a particle speeds up.',
        md: `
## Position, velocity, acceleration

If s(t) is a particle’s position:
- **Velocity** v(t) = s′(t). Positive means moving right (or up), negative means left (or down).
- **Acceleration** a(t) = v′(t) = s″(t).
- **Speed** = |v(t)|.

### Key questions
- **At rest:** v(t) = 0.
- **Speeding up:** v and a have the **same sign**. **Slowing down:** opposite signs.

### Example
s(t) = t³ − 6t² + 9t.
v(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3), so the particle is **at rest at t = 1 and t = 3**.
a(t) = 6t − 12. At t = 2: v = −3 and a = 0.

### Units
A derivative in context needs units: if s is in meters and t in seconds, v is in **m/s** and a is in **m/s²**.
`,
        q: [
          mc('A particle has s(t) = t² − 4t. What is its velocity at t = 3?', '2', 'v(t) = 2t − 4, so v(3) = 2.', [
            ['−3', 'This is the position s(3), not the velocity.'],
            ['6', 'This is 2t evaluated at 3; the −4 was dropped.'],
            ['0', 'The velocity is zero at t = 2, not at t = 3.'],
          ]),
          mc('For s(t) = t³ − 6t² + 9t, when is the particle at rest?', 't = 1 and t = 3', 'v(t) = 3(t − 1)(t − 3) is zero at those two times.', [
            ['t = 0 and t = 3', 'v(0) = 9, so it is not at rest at t = 0.'],
            ['t = 2 only', 'At t = 2 the acceleration is zero, not the velocity.'],
            ['t = 1 only', 'v(3) = 0 too.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Related rates, linear approximation and L’Hôpital’s Rule.',
      sessions: [{
        t: 'Related rates, linearization and L’Hôpital’s Rule',
        s: 'Connect rates, approximate with tangent lines and resolve 0/0 limits.',
        md: `
## Related rates
When several quantities change with time, relate them with an equation and differentiate with respect to t.

**Example:** A circle’s radius grows at 2 cm/s. How fast is the area growing when r = 5?
A = πr², so dA/dt = 2πr · dr/dt = 2π(5)(2) = **20π cm²/s**.

Steps: draw a diagram, write an equation, differentiate in t, substitute the known values **after** differentiating.

## Linearization
Near x = a, f(x) ≈ **L(x) = f(a) + f′(a)(x − a)**.
For √x at a = 4: L(x) = 2 + (x − 4)/4, so √4.1 ≈ **2.025**.

## L’Hôpital’s Rule
If lim f/g gives **0/0** or **∞/∞**, then lim f/g = lim f′/g′ (when that limit exists).
Example: lim (x→1) (x² − 1)/ln x = lim 2x/(1/x) = **2**.
`,
        q: [
          mc('A circle’s radius increases at 2 cm/s. How fast is its area increasing when r = 5 cm?', '20π cm²/s', 'dA/dt = 2πr·dr/dt = 2π·5·2 = 20π.', [
            ['10π cm²/s', 'This omits the factor 2 from the derivative of r².'],
            ['25π cm²/s', 'This is the area itself, not its rate of change.'],
            ['2 cm²/s', 'The rate of the area is not the rate of the radius.'],
          ]),
          mc('Use the linearization of √x at x = 4 to estimate √4.1.', '2.025', 'L(4.1) = 2 + (4.1 − 4)/4 = 2.025.', [
            ['2.1', 'This adds the change in x directly (4.1 − 4 = 0.1 to 2) instead of multiplying by the slope 1/4.'],
            ['2.25', 'This adds 0.25 instead of 0.1 × 0.25.'],
            ['2.0', 'This is √4, ignoring the change.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Contextual applications of differentiation',
    tasks: [
      mc('For s(t) = 2t³ − 9t² + 12t, at what times is the particle at rest?', 't = 1 and t = 2', 'v(t) = 6t² − 18t + 12 = 6(t − 1)(t − 2).', [
        ['t = 0 and t = 2', 'v(0) = 12, not zero.'],
        ['t = 1 and t = 3', 'v(3) = 12, not zero.'],
        ['t = 3/2 only', 'This is where the acceleration is zero.'],
      ]),
      mc('A particle has velocity v(t) = t² − 4t. What is its acceleration at t = 3?', '2', 'a(t) = 2t − 4, so a(3) = 2.', [
        ['−3', 'This is the velocity v(3).'],
        ['6', 'This is 2t; the −4 was dropped.'],
        ['0', 'The acceleration is zero at t = 2.'],
      ]),
      mc('The side of a square grows at 3 m/s. How fast is the area growing when the side is 4 m?', '24 m²/s', 'A = s², so dA/dt = 2s·ds/dt = 2·4·3 = 24.', [
        ['12 m²/s', 'The factor 2 from the derivative of s² is missing.'],
        ['16 m²/s', 'This is the area, not its rate of change.'],
        ['48 m²/s', 'This doubles the answer; check dA/dt = 2s·(ds/dt).'],
      ]),
      mc('Using the tangent line of f(x) = x² at x = 3, what is the estimate of f(3.1)?', '9.6', 'L(x) = 9 + 6(x − 3), so L(3.1) = 9.6.', [
        ['9.61', 'This is the exact value of f(3.1), not the linear estimate.'],
        ['9.1', 'This adds 0.1 without multiplying by the slope 6.'],
        ['6.1', 'The starting value must be f(3) = 9, not 6.'],
      ]),
      mc('What is lim (x→0) (1 − cos x)/x²?', '1/2', '0/0 form. L’Hôpital: sin x/(2x) is again 0/0; applying it again gives cos x/2, which approaches 1/2.', [
        ['0', 'The limit is not zero; both numerator and denominator shrink at similar rates.'],
        ['1', 'The sin x/x limit is 1, but this expression has an extra factor 1/2 from differentiating x².'],
        ['Does not exist', 'The limit exists and equals 1/2.'],
      ]),
      tf('L’Hôpital’s Rule can be applied to any limit of a quotient.', false, 'It applies only to 0/0 or ∞/∞ forms.', 'Correct. Using it on a form like 3/5 gives wrong results.'),
    ],
  },
};
