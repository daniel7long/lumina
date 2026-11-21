import { mc, tf } from '../builder.js';

export default {
  summary: 'Use derivatives to find extreme values, describe the shape of a graph and solve optimization problems.',
  modules: {
    9: {
      summary: 'The Mean Value Theorem and extreme values.',
      sessions: [{
        t: 'The Mean Value Theorem and extrema',
        s: 'Critical points, absolute extrema on a closed interval and the MVT.',
        md: `
## Extreme Value Theorem
A function that is **continuous on a closed interval [a, b]** has an absolute maximum and an absolute minimum on that interval.

### Finding absolute extrema (Candidates Test)
1. Find the **critical points** inside the interval: where f′(x) = 0 or f′ does not exist.
2. Evaluate f at the critical points **and at both endpoints**.
3. The largest value is the maximum; the smallest is the minimum.

**Example:** f(x) = x³ − 3x on [−2, 2]. f′ = 3x² − 3 = 0 gives x = ±1.
f(−2) = −2, f(−1) = 2, f(1) = −2, f(2) = 2. Absolute max **2**, absolute min **−2**.

## Mean Value Theorem
If f is continuous on [a, b] and differentiable on (a, b), there is a c with

**f′(c) = [f(b) − f(a)] / (b − a)**

Somewhere the tangent slope equals the average slope. For x² on [1, 3]: the average slope is (9 − 1)/2 = 4, and f′(c) = 2c = 4 gives **c = 2**.
`,
        q: [
          mc('For f(x) = x² on [1, 3], what value of c does the Mean Value Theorem give?', 'c = 2', 'The average slope is 4, and f′(c) = 2c = 4 gives c = 2.', [
            ['c = 4', 'This is the average slope, not the value of c.'],
            ['c = 1', 'f′(1) = 2, which does not equal the average slope 4.'],
            ['c = 3', 'f′(3) = 6, which does not equal the average slope 4.'],
          ]),
          mc('What are the critical points of f(x) = x³ − 3x?', 'x = −1 and x = 1', 'f′(x) = 3x² − 3 = 3(x − 1)(x + 1).', [
            ['x = 0 only', 'f′(0) = −3, so 0 is not critical.'],
            ['x = 3 and x = −3', 'These do not make 3x² − 3 zero.'],
            ['x = 1 only', 'x = −1 is also a root of f′.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Curve sketching and optimization with derivatives.',
      sessions: [{
        t: 'Analyzing graphs and optimizing',
        s: 'The first and second derivative tests, concavity and applied optimization.',
        md: `
## What the derivatives tell you
- **f′ > 0:** f is increasing. **f′ < 0:** f is decreasing.
- **First derivative test:** a critical point where f′ changes from + to − is a **local maximum**; from − to +, a **local minimum**.
- **f″ > 0:** concave up. **f″ < 0:** concave down.
- **Second derivative test:** at a critical point, f″ > 0 gives a local minimum and f″ < 0 a local maximum.
- An **inflection point** is where concavity changes (f″ changes sign).

**Example:** f(x) = x³ − 3x². Then f′ = 3x(x − 2) and f″ = 6x − 6. Critical points are 0 and 2. f″(0) = −6 (local max) and f″(2) = 6 (local min). Inflection at x = 1.

## Optimization
1. Draw a picture and name the variables.
2. Write the quantity to optimize and the constraint.
3. Reduce to one variable, find critical points, and check endpoints.

**Example:** A rectangle has perimeter 40. With width x, the length is 20 − x and A = x(20 − x). A′ = 20 − 2x = 0 gives x = 10, so the maximum area is **100** (a square).
`,
        q: [
          mc('For f(x) = x³ − 3x², where is the local minimum?', 'x = 2', 'f′ = 3x(x − 2) = 0 at 0 and 2; f″(2) = 6 > 0, so x = 2 is a local minimum.', [
            ['x = 0', 'f″(0) = −6 < 0, so x = 0 is a local maximum.'],
            ['x = 1', 'This is the inflection point, where f″ = 0, not a critical point.'],
            ['x = 3', 'f′(3) = 9, so 3 is not a critical point.'],
          ]),
          mc('A rectangle has perimeter 40. What is its maximum possible area?', '100', 'With A = x(20 − x), the maximum is at x = 10, giving 10 × 10 = 100.', [
            ['200', 'This is not the area; the perimeter is only 40, so the area cannot be this large.'],
            ['400', 'This is 20², which would need a side length of 20.'],
            ['40', 'This is the perimeter, not the area.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Analytical applications of differentiation',
    tasks: [
      mc('f(x) = x² − 4x + 1 has one critical point. What is it and what type is it?', 'x = 2, a minimum', 'f′ = 2x − 4 = 0 at x = 2, and f″ = 2 > 0.', [
        ['x = 2, a maximum', 'f″ = 2 is positive, so the graph is concave up: a minimum.'],
        ['x = 4, a minimum', 'f′(4) = 4, so 4 is not critical.'],
        ['x = −2, a minimum', 'f′(−2) = −8, so −2 is not critical.'],
      ]),
      mc('For f(x) = x³ on [0, 2], which value of c satisfies the Mean Value Theorem?', '2/√3 (about 1.155)', 'The average slope is (8 − 0)/2 = 4, and 3c² = 4 gives c = 2/√3.', [
        ['1', 'f′(1) = 3, not 4.'],
        ['4/3', 'This solves 3c = 4, not 3c² = 4.'],
        ['2', 'f′(2) = 12, not 4.'],
      ]),
      mc('What are the critical points of f(x) = x⁴ − 2x²?', 'x = −1, 0 and 1', 'f′ = 4x³ − 4x = 4x(x − 1)(x + 1).', [
        ['x = 0 only', 'x = ±1 also make f′ zero.'],
        ['x = ±1 only', 'x = 0 also makes f′ zero.'],
        ['x = ±2', 'f′(2) = 24, not zero.'],
      ]),
      mc('Where is f(x) = x³ − 6x² + 5 concave up?', 'x > 2', 'f″ = 6x − 12 is positive when x > 2.', [
        ['x < 2', 'f″ is negative there, so the graph is concave down.'],
        ['x > 4', 'f″ = 6x − 12 changes sign at 2, not 4.'],
        ['Everywhere', 'f″ changes sign at x = 2.'],
      ]),
      mc('Two positive numbers have sum 20. What is the maximum possible product?', '100', 'P = x(20 − x) is largest at x = 10, giving 100.', [
        ['200', 'This is not achievable; 10 × 20 is not allowed with sum 20.'],
        ['99', 'This comes from 9 × 11 and is not the maximum.'],
        ['400', 'This would need both numbers to be 20.'],
      ]),
      tf('If f′(c) = 0, then f must have a local maximum or minimum at x = c.', false, 'A zero derivative only makes c a critical point.', 'Correct. For f(x) = x³, f′(0) = 0 but 0 is neither a maximum nor a minimum.'),
    ],
  },
};
