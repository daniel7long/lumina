import { mc, tf } from '../builder.js';

export default {
  summary: 'Model change with differential equations: read slope fields, solve separable equations and use exponential growth and decay.',
  modules: {
    13: {
      summary: 'Slope fields and separable equations.',
      sessions: [{
        t: 'Slope fields and separable differential equations',
        s: 'Reading slopes from dy/dx and solving by separation of variables.',
        md: `
## Differential equations
A **differential equation** relates a function to its derivative, such as dy/dx = x − y. A **solution** is a function that makes the equation true.

### Slope fields
At each point (x, y), the equation gives the slope of the solution through that point. Draw a short segment with that slope at many points to make a **slope field**.

For dy/dx = x − y at (2, 1) the slope is 2 − 1 = **1**.

### Separable equations
If dy/dx = f(x)·g(y), separate the variables and integrate:
1/g(y) dy = f(x) dx.

**Example:** dy/dx = 2y with y(0) = 3.
dy/y = 2 dx, so ln|y| = 2x + C, giving y = Ce²ˣ. Using y(0) = 3, **y = 3e²ˣ**.

### Check your solution
Differentiate your answer and substitute it back. Also check the initial condition. Always include +C **before** applying an initial condition.
`,
        q: [
          mc('For dy/dx = x − y, what is the slope of the solution curve at (2, 1)?', '1', 'Substitute x = 2 and y = 1: 2 − 1 = 1.', [
            ['3', 'This adds the coordinates instead of subtracting.'],
            ['−1', 'This is the slope at (1, 2), with the coordinates swapped.'],
            ['2', 'This uses only x and ignores y.'],
          ]),
          mc('What is the solution of dy/dx = 2y with y(0) = 3?', 'y = 3e²ˣ', 'Separate to get y = Ce²ˣ, and y(0) = 3 gives C = 3.', [
            ['y = 2e³ˣ', 'The constants are swapped.'],
            ['y = e²ˣ + 3', 'The solution of this equation is a multiple of an exponential, not a sum.'],
            ['y = 3x²', 'This is not a solution; its derivative 6x is not 2y.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Exponential growth and decay.',
      sessions: [{
        t: 'Exponential growth and decay',
        s: 'The model dy/dt = ky, doubling time and half-life.',
        md: `
## The model dy/dt = ky
When the rate of change of a quantity is proportional to the quantity, the solution is

**y = y₀ e^(kt)**

- k > 0: **growth**. k < 0: **decay**.
- y₀ is the starting amount at t = 0.

### Examples
- dy/dt = 0.2y, y(0) = 10. Then y(5) = 10e¹ ≈ **27.18**.
- dy/dt = −0.1y, y(0) = 50. Then y(10) = 50e⁻¹ ≈ 18.39.

### Doubling time and half-life
- **Doubling time** (growth): ln 2 / k. For k = 0.05, that is about **13.86** time units.
- **Half-life** (decay): ln 2 / |k|.

### Units
k has units of 1/time. A model is only an approximation: exponential growth cannot continue forever in a real population.
`,
        q: [
          mc('If dy/dt = 0.2y and y(0) = 10, what is y(5)?', 'About 27.18', 'y = 10e^(0.2t), so y(5) = 10e¹ ≈ 27.18.', [
            ['20', 'This doubles the starting value without using the exponential.'],
            ['11', 'This adds 1 to y₀; the model is multiplicative, not additive.'],
            ['10e⁵ ≈ 1484', 'The exponent is kt = 0.2·5 = 1, not 5.'],
          ]),
          mc('A population grows with dy/dt = 0.05y. About how long does it take to double?', '13.86 time units', 'Doubling time is ln 2 / 0.05 ≈ 13.86.', [
            ['20 time units', 'This is 1/0.05, which is not the doubling time.'],
            ['0.69 time units', 'This is ln 2, which still needs to be divided by k.'],
            ['10 time units', 'The doubling time is not 0.5/k.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Differential equations',
    tasks: [
      mc('For dy/dx = xy, what is the slope at (1, 3)?', '3', 'Substitute x = 1 and y = 3: 1 · 3 = 3.', [
        ['4', 'This adds instead of multiplying.'],
        ['1', 'This uses only x.'],
        ['0', 'The slope is zero only where x = 0 or y = 0.'],
      ]),
      mc('What is the solution of dy/dx = 3y with y(0) = 2?', 'y = 2e³ˣ', 'The general solution is y = Ce³ˣ, and y(0) = 2 gives C = 2.', [
        ['y = 3e²ˣ', 'The initial value and rate are swapped.'],
        ['y = 2 + 3x', 'The derivative of this is 3, not 3y.'],
        ['y = 2x³', 'This does not satisfy dy/dx = 3y.'],
      ]),
      mc('What is the general solution of dy/dx = xy (with y > 0)?', 'y = Ce^(x²/2)', 'Separating gives dy/y = x dx, so ln y = x²/2 + C.', [
        ['y = Ce^x', 'This solves dy/dx = y, not xy.'],
        ['y = x²/2 + C', 'This ignores the y on the right side.'],
        ['y = Cx²', 'This does not satisfy the equation.'],
      ]),
      mc('What is the solution of dy/dx = 2x with y(0) = 1?', 'y = x² + 1', 'Integrate to get y = x² + C, and y(0) = 1 gives C = 1.', [
        ['y = x²', 'This ignores the initial condition y(0) = 1.'],
        ['y = 2x + 1', 'This has derivative 2, not 2x.'],
        ['y = e^(2x)', 'This would solve dy/dx = 2y.'],
      ]),
      mc('A population obeys dP/dt = 0.04P with P(0) = 500. What is P(10), to the nearest whole number?', '746', 'P = 500e^(0.04t), so P(10) = 500e^0.4 ≈ 745.9.', [
        ['700', 'This adds 0.04 × 500 × 10; growth is exponential, not linear.'],
        ['2,203', 'This uses an exponent of 4 instead of 0.4.'],
        ['520', 'This is only the first-year linear estimate.'],
      ]),
      mc('A substance decays with dy/dt = −0.5y. What is its half-life?', 'ln 2 / 0.5 ≈ 1.39', 'The half-life is ln 2 / |k|.', [
        ['2', 'This is 1/0.5, which is not the half-life.'],
        ['0.5', 'This is the decay constant.'],
        ['ln 2 × 0.5 ≈ 0.35', 'The half-life is ln 2 divided by k, not multiplied.'],
      ]),
      tf('The function y = x² solves the differential equation dy/dx = 2y/x for x > 0.', true, 'If y = x², then dy/dx = 2x, and 2y/x = 2x, so both sides match.', 'Correct. Substituting y = x² gives 2x on both sides.'),
    ],
  },
};
