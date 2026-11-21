import { mc, tf } from '../builder.js';

export default {
  summary: 'Understand how sample statistics vary from sample to sample, which is the foundation for every confidence interval and test.',
  modules: {
    10: {
      summary: 'Sampling distributions of p̂ and x̄, and the Central Limit Theorem.',
      sessions: [{
        t: 'Sampling distributions and the Central Limit Theorem',
        s: 'Center, spread and shape of p̂ and x̄.',
        md: `
## What is a sampling distribution?
If you took many samples of the same size and computed a statistic from each, the distribution of those values is the **sampling distribution** of the statistic.

### For a sample proportion p̂
- Mean: **μ = p**
- Standard deviation: **σ = √(p(1 − p)/n)**
- **Conditions:** random sample, n ≤ 10% of the population (independence), and **large counts**: np ≥ 10 and n(1 − p) ≥ 10, so the shape is approximately normal.

**Example:** p = 0.6, n = 100: σ = √(0.24/100) ≈ **0.049**. P(p̂ > 0.65) = P(z > 1.02) ≈ 0.154.

### For a sample mean x̄
- Mean: **μ**; standard deviation: **σ/√n**.
- **Central Limit Theorem (CLT):** for large n (a common guide is n ≥ 30), the sampling distribution of x̄ is approximately normal, whatever the shape of the population.

**Example:** μ = 50, σ = 12, n = 36: standard deviation = 12/6 = **2**. P(x̄ > 53) = P(z > 1.5) ≈ **0.067**.

> A larger n gives a **smaller** standard deviation of the statistic (less variability), but the center stays the same.
`,
        q: [
          mc('A population has μ = 50 and σ = 12. For samples of size 36, what is the standard deviation of x̄?', '2', 'σ/√n = 12/6.', [
            ['12', 'This is the population standard deviation.'],
            ['0.33', 'This is 12/36; the square root of n must be used.'],
            ['6', 'This is √36, the square root of the sample size.'],
          ]),
          mc('For p = 0.6 and n = 100, what is the standard deviation of p̂?', 'About 0.049', '√(0.6 × 0.4/100) = √0.0024 ≈ 0.049.', [
            ['0.24', 'This is p(1 − p), not yet divided by n or square-rooted.'],
            ['0.6', 'This is the mean of p̂.'],
            ['0.0024', 'This is the variance; take its square root.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Sampling distributions',
    tasks: [
      mc('A population has μ = 80 and σ = 20. What is the standard deviation of x̄ for samples of size 100?', '2', '20/√100 = 2.', [
        ['20', 'This is the population standard deviation.'],
        ['0.2', 'This is 20/100; the square root is missing.'],
        ['200', 'This multiplies by √100.'],
      ]),
      mc('A population proportion is p = 0.3 and n = 50. What is the standard deviation of p̂?', 'About 0.065', '√(0.3 × 0.7/50) = √0.0042 ≈ 0.065.', [
        ['0.3', 'This is the mean of p̂.'],
        ['0.21', 'This is p(1 − p), not divided by n or square-rooted.'],
        ['0.0042', 'This is the variance.'],
      ]),
      mc('For p = 0.05 and n = 100, can the sampling distribution of p̂ be treated as approximately normal?', 'No, because np = 5 is less than 10', 'The large-counts condition requires np ≥ 10 and n(1 − p) ≥ 10.', [
        ['Yes, because n = 100 is large', 'Both np and n(1 − p) must be at least 10.'],
        ['Yes, because p is small', 'A small p makes the distribution skewed for moderate n.'],
        ['No, because n(1 − p) = 5', 'n(1 − p) is 95; the failing count is np = 5.'],
      ]),
      mc('The Central Limit Theorem says that, for large n, the sampling distribution of x̄ is', 'approximately normal regardless of the population’s shape', 'This is the content of the theorem.', [
        ['exactly the shape of the population', 'The shape approaches normality, not the population shape.'],
        ['skewed in the same direction as the population', 'With large n, the skew disappears.'],
        ['uniform', 'Uniform is not implied.'],
      ]),
      mc('A population has μ = 50 and σ = 12. For samples of size 36, what is P(x̄ > 53), approximately?', '0.067', 'The standard deviation is 2, so z = 1.5, and the tail area is about 0.067.', [
        ['0.401', 'This standardizes with the population σ of 12 (z = 0.25) instead of the standard deviation of x̄, which is 2.'],
        ['0.933', 'This is the area to the left of 53.'],
        ['0.5', 'This is the area above the mean, not above 53.'],
      ]),
      tf('Increasing the sample size decreases the standard deviation of the sample mean.', true, 'It equals σ/√n, which shrinks as n grows.', 'Correct. Larger samples give more precise estimates.'),
    ],
  },
};
