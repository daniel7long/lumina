import { mc, tf } from '../builder.js';

export default {
  summary: 'Define the derivative as a limit, interpret it as a slope and a rate, and learn the rules that make differentiation fast.',
  modules: {
    3: {
      summary: 'The derivative as a limit, a slope and a rate of change.',
      sessions: [{
        t: 'The derivative and tangent lines',
        s: 'Difference quotients, tangent lines and the link between differentiability and continuity.',
        md: `
## The derivative

The **derivative** of f at x = a is the limit of the difference quotient:

**f′(a) = lim (h→0) [f(a + h) − f(a)] / h**

It has two meanings:
- **Geometric:** the slope of the tangent line to the graph at x = a.
- **Rate of change:** the instantaneous rate at which f changes at a (with units of f per unit of x).

### Example
For f(x) = x² at a = 3: [(3 + h)² − 9]/h = (6h + h²)/h = 6 + h → **6**. The tangent line is y − 9 = 6(x − 3).

### Differentiability and continuity
- If f is **differentiable** at a, then f is **continuous** at a.
- The reverse is false. f(x) = |x| is continuous at 0 but has a sharp corner, so no derivative there. Cusps, vertical tangents and jumps also prevent differentiability.
`,
        q: [
          mc('Using the limit definition, what is f′(3) for f(x) = x²?', '6', 'The difference quotient simplifies to 6 + h, which approaches 6.', [
            ['9', 'This is f(3), the function value, not the slope.'],
            ['3', 'This is the x-value, not the derivative.'],
            ['0', 'The slope of x² at 3 is not zero; the graph is rising there.'],
          ]),
          mc('Which function is continuous but not differentiable at x = 0?', 'f(x) = |x|', 'The graph has a corner at 0, so the slopes from the left (−1) and right (+1) disagree.', [
            ['f(x) = x²', 'It is smooth at 0, with derivative 0.'],
            ['f(x) = x³', 'It is smooth at 0, with derivative 0.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Differentiate polynomials, products, quotients and trigonometric functions.',
      sessions: [{
        t: 'Power, product and quotient rules',
        s: 'The basic rules and the derivatives of sine, cosine and tangent.',
        md: `
## Basic rules

| Rule | Formula |
| --- | --- |
| **Constant** | d/dx [c] = 0 |
| **Power** | d/dx [xⁿ] = n·xⁿ⁻¹ |
| **Constant multiple, sum** | (c·f)′ = c·f′, (f + g)′ = f′ + g′ |
| **Product** | (f·g)′ = f′g + f·g′ |
| **Quotient** | (f/g)′ = (f′g − f·g′)/g² |

### Trigonometric derivatives
- d/dx [sin x] = **cos x**
- d/dx [cos x] = **−sin x**
- d/dx [tan x] = **sec² x**

### Examples
- d/dx [5x⁴ − 3x + 2] = 20x³ − 3.
- Product: d/dx [x³ sin x] = 3x² sin x + x³ cos x.
- Quotient: d/dx [x/(x + 1)] = [(x + 1) − x]/(x + 1)² = **1/(x + 1)²**.

> Tip: write the rule's pieces (f, g, f′, g′) before you combine them. Most mistakes come from a missing term or a sign in the quotient rule.
`,
        q: [
          mc('What is d/dx [5x⁴ − 3x + 2]?', '20x³ − 3', 'Apply the power rule to each term; the derivative of a constant is 0.', [
            ['20x³ − 3x', 'The derivative of −3x is −3, not −3x.'],
            ['5x³ − 3', 'The exponent 4 must also multiply the coefficient: 5·4 = 20.'],
            ['20x³ − 3 + 2', 'The derivative of the constant 2 is 0.'],
          ]),
          mc('What is d/dx [x² cos x]?', '2x cos x − x² sin x', 'Product rule: (x²)′cos x + x²(cos x)′ = 2x cos x − x² sin x.', [
            ['−2x sin x', 'This differentiates each factor separately and multiplies the derivatives, which is not the product rule.'],
            ['2x cos x + x² sin x', 'The derivative of cos x is −sin x, so the second term is negative.'],
            ['2x cos x', 'The second term x²·(−sin x) is missing.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Derivatives and basic rules',
    tasks: [
      mc('Using the limit definition, what is f′(1) for f(x) = x²?', '2', '[(1 + h)² − 1]/h = 2 + h, which approaches 2.', [
        ['1', 'This is f(1), not the slope.'],
        ['0', 'The function is increasing at x = 1.'],
        ['3', 'The difference quotient simplifies to 2 + h, not 3.'],
      ]),
      mc('What is the slope of the tangent line to y = x³ − 2x at x = 2?', '10', 'y′ = 3x² − 2, and 3(4) − 2 = 10.', [
        ['4', 'This is the function value y(2) = 8 − 4, not the slope.'],
        ['12', 'This forgets to subtract 2: 3x² alone is 12.'],
        ['6', 'The derivative of x³ is 3x², not 3x.'],
      ]),
      mc('What is d/dx [x²/(x + 1)]?', '(x² + 2x)/(x + 1)²', 'Quotient rule: [2x(x + 1) − x²]/(x + 1)² = (x² + 2x)/(x + 1)².', [
        ['2x/1', 'The derivatives of top and bottom cannot simply be divided.'],
        ['(2x − x²)/(x + 1)²', 'The numerator should be 2x(x + 1) − x² = x² + 2x.'],
        ['x²/(x + 1)²', 'The derivative of the numerator was not used.'],
      ]),
      mc('What is d/dx [x² sin x]?', '2x sin x + x² cos x', 'Product rule: 2x·sin x + x²·cos x.', [
        ['2x cos x', 'This multiplies the derivatives of the factors, which is not the product rule.'],
        ['2x sin x − x² cos x', 'The derivative of sin x is +cos x.'],
        ['x² cos x', 'The term from differentiating x² is missing.'],
      ]),
      mc('What is the equation of the tangent line to y = 2x² + 1 at x = 1?', 'y = 4x − 1', 'The point is (1, 3) and the slope is y′(1) = 4, so y − 3 = 4(x − 1), or y = 4x − 1.', [
        ['y = 4x + 1', 'This does not pass through (1, 3).'],
        ['y = 3x', 'The slope should be the derivative, 4.'],
        ['y = 2x + 1', 'This is not tangent; the slope is wrong.'],
      ]),
      tf('If f is differentiable at x = a, then f is continuous at x = a.', true, 'Differentiability at a point forces continuity there.', 'Correct. A function that is not continuous at a cannot have a derivative there. The converse is false.'),
    ],
  },
};
