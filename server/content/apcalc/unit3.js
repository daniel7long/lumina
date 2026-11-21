import { mc, tf } from '../builder.js';

export default {
  summary: 'Extend differentiation to composite functions, implicit relations, exponentials, logarithms and inverses.',
  modules: {
    5: {
      summary: 'Differentiate composite, exponential and logarithmic functions.',
      sessions: [{
        t: 'The chain rule',
        s: 'Differentiating a function of a function.',
        md: `
## The chain rule

For a composite function f(g(x)):

**d/dx [f(g(x))] = f′(g(x)) · g′(x)**

Differentiate the **outer** function (leaving the inside alone), then multiply by the derivative of the **inner** function.

### Examples
- d/dx [(3x + 1)⁵] = 5(3x + 1)⁴ · 3 = **15(3x + 1)⁴**
- d/dx [sin(x²)] = cos(x²) · 2x = **2x cos(x²)**
- d/dx [e^(3x)] = **3e^(3x)**
- d/dx [ln(x² + 1)] = 2x/(x² + 1)

### Exponentials and logarithms
- d/dx [eˣ] = eˣ
- d/dx [aˣ] = aˣ ln a
- d/dx [ln x] = 1/x (for x > 0)

> Forgetting the inner derivative is the most common chain-rule error. Ask: "What is inside, and did I multiply by its derivative?"
`,
        q: [
          mc('What is d/dx [(x² + 1)³]?', '6x(x² + 1)²', 'Outer: 3(x² + 1)²; inner derivative: 2x. Multiply: 6x(x² + 1)².', [
            ['3(x² + 1)²', 'The inner derivative 2x is missing.'],
            ['3(2x)²', 'The inside x² + 1 should stay inside when the outer function is differentiated.'],
            ['(x² + 1)³·2x', 'The power was not reduced and the factor 3 is missing.'],
          ]),
          mc('What is d/dx [cos(5x)]?', '−5 sin(5x)', 'The derivative of cos is −sin, and the inner derivative is 5.', [
            ['−sin(5x)', 'The inner derivative 5 is missing.'],
            ['5 sin(5x)', 'The derivative of cos is −sin, so the sign is negative.'],
            ['−5 cos(5x)', 'The derivative of cos u is −sin u, not −cos u.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Implicit differentiation, inverse functions and inverse trig.',
      sessions: [{
        t: 'Implicit differentiation and inverses',
        s: 'Finding dy/dx without solving for y, and derivatives of inverse functions.',
        md: `
## Implicit differentiation

When y is not isolated, differentiate both sides with respect to x and treat y as a function of x, so d/dx [y²] = 2y · dy/dx.

**Example:** x² + y² = 25.
2x + 2y · dy/dx = 0, so **dy/dx = −x/y**. At (3, 4) the slope is **−3/4**.

## Inverse functions
If g is the inverse of f, then

**g′(b) = 1 / f′(g(b))**

**Example:** f(x) = x³ + x has f(1) = 2, so g(2) = 1. Since f′(x) = 3x² + 1, f′(1) = 4 and **g′(2) = 1/4**.

### Inverse trigonometric derivatives
- d/dx [arcsin x] = 1/√(1 − x²)
- d/dx [arctan x] = 1/(1 + x²)
`,
        q: [
          mc('For x² + y² = 25, what is dy/dx at the point (3, 4)?', '−3/4', 'dy/dx = −x/y = −3/4.', [
            ['3/4', 'The sign is wrong: 2x + 2y·y′ = 0 gives y′ = −x/y.'],
            ['−4/3', 'The ratio is inverted; it should be x over y.'],
            ['0', 'The slope is zero only where x = 0.'],
          ]),
          mc('If f(x) = x³ + x and g is its inverse, what is g′(2)?', '1/4', 'f(1) = 2, so g′(2) = 1/f′(1) = 1/4.', [
            ['4', 'This is f′(1); the inverse derivative is its reciprocal.'],
            ['1/2', 'This uses f′(2) incorrectly. The point to use is x = 1, where f(1) = 2.'],
            ['1/13', 'This uses f′(2) = 13, but the correct input to f′ is 1.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Composite, implicit and inverse functions',
    tasks: [
      mc('What is d/dx [(2x − 5)⁴]?', '8(2x − 5)³', 'Outer: 4(2x − 5)³; inner derivative: 2.', [
        ['4(2x − 5)³', 'The inner derivative 2 is missing.'],
        ['4(2)³', 'The inside must stay as 2x − 5.'],
        ['8(2x − 5)⁴', 'The exponent should drop by 1.'],
      ]),
      mc('What is d/dx [e^(x²)]?', '2x e^(x²)', 'The exponential is unchanged and is multiplied by the inner derivative 2x.', [
        ['e^(x²)', 'The inner derivative is missing.'],
        ['x² e^(x²−1)', 'This applies the power rule, which does not work for an exponential function.'],
        ['2x e^(2x)', 'The exponent should stay x².'],
      ]),
      mc('What is d/dx [tan(3x)]?', '3 sec²(3x)', 'The derivative of tan u is sec² u, times the inner derivative 3.', [
        ['sec²(3x)', 'The inner derivative 3 is missing.'],
        ['3 tan(3x)', 'The derivative of tan is sec², not tan.'],
        ['3 sec(3x)', 'The derivative of tan is sec², not sec.'],
      ]),
      mc('For xy = 6, what is dy/dx at (2, 3)?', '−3/2', 'Product rule: y + x·y′ = 0, so y′ = −y/x = −3/2.', [
        ['3/2', 'The sign is wrong: y′ = −y/x.'],
        ['−2/3', 'The ratio is inverted.'],
        ['0', 'The slope is not zero; y decreases as x increases.'],
      ]),
      mc('What is the derivative of arctan x at x = 1?', '1/2', 'The derivative is 1/(1 + x²), which is 1/2 at x = 1.', [
        ['1', 'The derivative 1/(1 + x²) equals 1/2 at x = 1, not 1.'],
        ['π/4', 'This is the value of arctan(1), not its derivative.'],
        ['−1/2', 'The derivative of arctan x is positive.'],
      ]),
      tf('For x > 0 and x < 0 alike, d/dx [ln|x|] = 1/x.', true, 'For both signs, the derivative of ln|x| is 1/x.', 'Correct. The function ln|x| has derivative 1/x for every x ≠ 0.'),
    ],
  },
};
