import { mc, tf } from '../builder.js';

export default {
  summary: 'Accumulate change with Riemann sums and definite integrals, then use the Fundamental Theorem to evaluate them.',
  modules: {
    11: {
      summary: 'Approximate and interpret definite integrals.',
      sessions: [{
        t: 'Riemann sums and the definite integral',
        s: 'Left, right and midpoint sums, and what an integral measures.',
        md: `
## Accumulating change

The **definite integral** ∫ₐᵇ f(x) dx is the limit of **Riemann sums**: split [a, b] into n strips of width Δx = (b − a)/n, multiply each height by Δx and add.

- **Left sum:** use the left endpoint of each strip.
- **Right sum:** use the right endpoint.
- **Midpoint sum:** use the middle of each strip.

**Example:** f(x) = x² on [0, 4] with n = 4, so Δx = 1.
- Left sum = 0 + 1 + 4 + 9 = **14**
- Right sum = 1 + 4 + 9 + 16 = **30**
The exact integral is 64/3 ≈ 21.3, between them because f is increasing.

### Meaning
∫ₐᵇ f(x) dx is the **net signed area** between the graph and the x-axis: area above the axis counts as positive and area below as negative. When f is a **rate**, the integral is the **net change** in the quantity.

For simple shapes use geometry: ∫₀³ 2x dx is a triangle with base 3 and height 6, so its area is **9**.
`,
        q: [
          mc('What is the left Riemann sum for f(x) = x² on [0, 4] with 4 equal strips?', '14', 'The left endpoints are 0, 1, 2, 3, so the sum is 0 + 1 + 4 + 9 = 14 (width 1).', [
            ['30', 'This is the right Riemann sum.'],
            ['21', 'This is close to the exact value, but it is not the left sum of the four strips.'],
            ['10', 'This adds the left endpoints (0 + 1 + 2 + 3) without squaring and without the rest.'],
          ]),
          mc('Use geometry to find ∫₀³ 2x dx.', '9', 'The region is a triangle with base 3 and height 6: ½·3·6 = 9.', [
            ['18', 'This is base × height, without the factor ½.'],
            ['6', 'This is the height at x = 3, not the area.'],
            ['3', 'This is the base length, not the area.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'The Fundamental Theorem, antiderivatives and substitution.',
      sessions: [{
        t: 'The Fundamental Theorem of Calculus',
        s: 'Both parts of the theorem, basic antiderivatives and u-substitution.',
        md: `
## Fundamental Theorem of Calculus (FTC)

**Part 1:** If F(x) = ∫ₐˣ f(t) dt and f is continuous, then **F′(x) = f(x)**.

**Part 2:** If F′ = f, then **∫ₐᵇ f(x) dx = F(b) − F(a)**.

So integration undoes differentiation.

### Antiderivatives
- ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1)
- ∫ eˣ dx = eˣ + C, ∫ 1/x dx = ln|x| + C
- ∫ cos x dx = sin x + C, ∫ sin x dx = −cos x + C

**Example:** ∫₀² (3x² + 1) dx = [x³ + x]₀² = 8 + 2 = **10**.

### u-substitution
Use it to undo the chain rule. For ∫ 2x cos(x²) dx, let u = x², du = 2x dx, so the integral is ∫ cos u du = **sin(x²) + C**.

With limits, change them too: ∫₀¹ 2x eˣ² dx → u = x², from 0 to 1, giving ∫₀¹ eᵘ du = **e − 1**.
`,
        q: [
          mc('What is ∫₁³ 2x dx?', '8', 'An antiderivative is x², so the value is 9 − 1 = 8.', [
            ['9', 'This forgets to subtract F(1) = 1.'],
            ['6', 'This is 2·3, the integrand at 3.'],
            ['4', 'This is 2·(3 − 1), which treats 2x as constant.'],
          ]),
          mc('What is ∫ 2x(x² + 1)³ dx?', '(x² + 1)⁴/4 + C', 'Let u = x² + 1, du = 2x dx; then ∫ u³ du = u⁴/4 + C.', [
            ['(x² + 1)⁴ + C', 'The factor 1/4 from integrating u³ is missing.'],
            ['2x(x² + 1)⁴/4 + C', 'The 2x was already used as du; it should not remain.'],
            ['6x(x² + 1)² + C', 'This is a derivative, not an antiderivative.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Integration and accumulation of change',
    tasks: [
      mc('What is ∫₀³ x² dx?', '9', 'An antiderivative is x³/3, so the value is 27/3 = 9.', [
        ['27', 'This forgets to divide by 3.'],
        ['3', 'This is x³/3 evaluated incorrectly at 1.'],
        ['18', 'This is 2·9; the antiderivative of x² is x³/3.'],
      ]),
      mc('What is the right Riemann sum for f(x) = x on [0, 4] with 4 equal strips?', '10', 'The right endpoints are 1, 2, 3, 4, and each strip has width 1: 1 + 2 + 3 + 4 = 10.', [
        ['6', 'This is the left sum (0 + 1 + 2 + 3).'],
        ['8', 'This is the exact integral, not the right sum.'],
        ['16', 'This squares the heights, which is not what the function does.'],
      ]),
      mc('What is d/dx ∫₁ˣ t² dt?', 'x²', 'By FTC Part 1, the derivative of the accumulation function is the integrand evaluated at x.', [
        ['x³/3', 'This is the antiderivative, not its derivative.'],
        ['2x', 'This differentiates the integrand, which is not what FTC Part 1 says.'],
        ['x² − 1', 'The lower limit contributes a constant, whose derivative is 0.'],
      ]),
      mc('What is ∫ (4x³ − 2x) dx?', 'x⁴ − x² + C', 'Integrate each term with the power rule.', [
        ['12x² − 2', 'This is the derivative, not the antiderivative.'],
        ['x⁴ − x²', 'The constant of integration C is missing.'],
        ['4x⁴ − 2x² + C', 'Each coefficient must be divided by the new exponent.'],
      ]),
      mc('What is ∫₀^π sin x dx?', '2', 'An antiderivative is −cos x, so the value is −cos π + cos 0 = 1 + 1 = 2.', [
        ['0', 'This would be correct over [0, 2π], where the areas cancel.'],
        ['−2', 'The sign is wrong: −cos π = 1.'],
        ['1', 'This forgets the second term, cos 0 = 1.'],
      ]),
      mc('What is ∫ x eˣ² dx?', 'eˣ²/2 + C', 'Let u = x², du = 2x dx, so x dx = du/2 and the integral is ½∫ eᵘ du.', [
        ['eˣ² + C', 'The factor ½ from x dx = du/2 is missing.'],
        ['x²eˣ²/2 + C', 'The x is already part of du; it should not remain.'],
        ['2eˣ² + C', 'The factor should be ½, not 2.'],
      ]),
      tf('A definite integral can be negative.', true, 'When the graph lies below the x-axis, the integral is negative.', 'Correct. The definite integral is net signed area, and area below the axis counts as negative.'),
    ],
  },
};
