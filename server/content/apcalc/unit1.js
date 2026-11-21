import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn what it means for a function to approach a value, and how limits define continuity, the foundation for the derivative and the integral.',
  modules: {
    1: {
      summary: 'Evaluate limits graphically and algebraically.',
      sessions: [{
        t: 'Finding limits',
        s: 'Direct substitution, factoring, rationalizing and behavior at infinity.',
        md: `
## The idea of a limit

**lim (x→a) f(x) = L** means f(x) gets as close to L as we like when x is close to a (but not necessarily equal to a). The function does not even need to be defined at a.

A limit exists only if the **left-hand** and **right-hand** limits agree. If they differ, the limit **does not exist (DNE)**.

### Strategies
1. **Direct substitution.** If f is a polynomial or other function defined at a, just compute f(a).
2. **Factor and cancel.** If you get 0/0, factor: lim (x→2) (x² − 4)/(x − 2) = lim (x + 2) = **4**.
3. **Rationalize.** lim (x→0) (√(x + 9) − 3)/x: multiply by the conjugate to get 1/(√(x + 9) + 3), so the limit is **1/6**.
4. **Limits at infinity.** Divide by the highest power: lim (x→∞) (3x² + 1)/(x² − 5) = **3**.

### Asymptotes
- If lim (x→a) f(x) = ±∞, there is a **vertical asymptote** at x = a.
- If lim (x→∞) f(x) = L, there is a **horizontal asymptote** y = L.
`,
        q: [
          mc('What is lim (x→3) (x² − 9)/(x − 3)?', '6', 'Factor: (x − 3)(x + 3)/(x − 3) = x + 3, which approaches 6.', [
            ['0', 'Substituting gives 0/0, which is not a value; you must simplify first.'],
            ['Does not exist', 'After cancelling, the function approaches 6 from both sides.'],
            ['9', 'This is x², not the simplified expression x + 3.'],
          ]),
          mc('What is lim (x→∞) (4x + 1)/(2x − 7)?', '2', 'Divide by x: (4 + 1/x)/(2 − 7/x) → 4/2 = 2.', [
            ['4', 'Only the numerator’s coefficient was used.'],
            ['∞', 'The degrees are equal, so the limit is a finite ratio of coefficients.'],
            ['0', 'This happens when the denominator’s degree is higher.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Decide where a function is continuous and use the Intermediate Value Theorem.',
      sessions: [{
        t: 'Continuity and the Intermediate Value Theorem',
        s: 'The three conditions, types of discontinuity and what the IVT guarantees.',
        md: `
## Continuity at a point

f is **continuous at x = a** when all three hold:
1. f(a) is defined,
2. lim (x→a) f(x) exists, and
3. lim (x→a) f(x) = f(a).

### Types of discontinuity
- **Removable:** the limit exists but f(a) is missing or different (a "hole"). Example: f(x) = (x² − 1)/(x − 1) at x = 1.
- **Jump:** the one-sided limits exist but are different.
- **Infinite:** the function grows without bound (a vertical asymptote).

### Making a function continuous
For f(x) = x + 2 when x < 1 and kx² when x ≥ 1, continuity at 1 needs the two pieces to match: 1 + 2 = k·1², so **k = 3**.

### Intermediate Value Theorem (IVT)
If f is **continuous on [a, b]** and N is between f(a) and f(b), then **at least one** c in [a, b] has f(c) = N.

For example, if f is continuous with f(1) = −2 and f(3) = 5, there is at least one zero between 1 and 3. The theorem says "at least one", not "exactly one", and it needs continuity.
`,
        q: [
          mc('What kind of discontinuity does f(x) = (x² − 1)/(x − 1) have at x = 1?', 'Removable', 'The limit is 2 but f(1) is undefined, so it is a hole that could be filled.', [
            ['Jump', 'A jump needs different one-sided limits; here both sides approach 2.'],
            ['Infinite', 'The function does not grow without bound near 1.'],
          ]),
          tf('If f is continuous on [1, 3] with f(1) = −2 and f(3) = 5, the Intermediate Value Theorem guarantees exactly one zero in [1, 3].', false, 'The theorem only guarantees at least one zero, not exactly one.', 'Correct. It guarantees at least one; there could be three zeros, for instance.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Limits and continuity',
    tasks: [
      mc('What is lim (x→−2) (x² + x − 2)/(x + 2)?', '−3', 'Factor the numerator as (x + 2)(x − 1); cancelling leaves x − 1, which approaches −3.', [
        ['0', 'Substitution gives 0/0, which means more work is needed, not that the limit is 0.'],
        ['−2', 'The value x = −2 was substituted into the denominator only.'],
        ['Does not exist', 'The factor cancels, so the limit exists.'],
      ]),
      mc('What is lim (x→∞) (5x³ − 2x)/(2x³ + x²)?', '5/2', 'The degrees are equal, so the limit is the ratio of the leading coefficients: 5/2.', [
        ['5', 'The denominator’s coefficient (2) was ignored.'],
        ['0', 'That would need a higher degree in the denominator.'],
        ['∞', 'That would need a higher degree in the numerator.'],
      ]),
      mc('Which lines are vertical asymptotes of f(x) = (x + 1)/(x² − x − 6)?', 'x = 3 and x = −2', 'The denominator factors as (x − 3)(x + 2), and the numerator is not zero at either value.', [
        ['x = −1 only', 'x = −1 makes the numerator zero; it is a zero of f, not an asymptote.'],
        ['x = 3 only', 'x = −2 also makes the denominator zero.'],
        ['x = 6 and x = −1', 'These are not roots of the denominator.'],
      ]),
      mc('f(x) = x + 2 for x < 1 and f(x) = kx² for x ≥ 1. For what k is f continuous at x = 1?', 'k = 3', 'The left limit is 1 + 2 = 3 and f(1) = k, so k must be 3.', [
        ['k = 1', 'This would give f(1) = 1, not 3.'],
        ['k = 2', 'This does not match the left limit of 3.'],
        ['k = 0', 'This would make f(1) = 0, a jump from 3.'],
      ]),
      mc('What is lim (x→0) |x|/x?', 'Does not exist', 'From the left the value is −1 and from the right it is +1; the one-sided limits differ.', [
        ['1', 'This is only the right-hand limit.'],
        ['−1', 'This is only the left-hand limit.'],
        ['0', 'The expression never approaches 0.'],
      ]),
      tf('If lim (x→a) f(x) exists, then f(a) must be defined.', false, 'The limit describes behavior near a and ignores the value at a, which may be undefined (a hole).', 'Correct. For example, (x² − 4)/(x − 2) has a limit of 4 at x = 2 but is undefined there.'),
    ],
  },
};
