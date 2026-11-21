import { mc, tf } from '../builder.js';

export default {
  summary: 'Use the t distribution to estimate and test population means, including the difference between two means.',
  modules: {
    13: {
      summary: 'Confidence intervals for a mean.',
      sessions: [{
        t: 'The t interval for a mean',
        s: 'Standard error, degrees of freedom and conditions.',
        md: `
## Why t?
When the population standard deviation is unknown, we estimate it with the sample standard deviation s. That extra uncertainty gives the **t distribution**, which has heavier tails than the normal and depends on **degrees of freedom df = n − 1**.

## The one-sample t interval
**x̄ ± t* · s/√n**

**Conditions:**
- **Random** sample (or random assignment).
- **10%** condition: n ≤ 10% of the population.
- **Normal/large sample:** the population is approximately normal, **or** n ≥ 30, **or** a graph of the sample shows no strong skew or outliers.

### Example
n = 25, x̄ = 52, s = 10.
SE = 10/√25 = **2**. df = 24, and t* for 95% is **2.064**.
Margin of error = 2.064 × 2 ≈ 4.13, so the 95% interval is **(47.87, 56.13)**.

> **Interpretation:** We are 95% confident that the interval from 47.87 to 56.13 captures the true mean of the population.

A higher confidence level gives a wider interval; a larger sample gives a narrower one.
`,
        q: [
          mc('A sample of n = 25 has x̄ = 52 and s = 10. What is the standard error of the mean?', '2', 's/√n = 10/5.', [
            ['10', 'This is the sample standard deviation.'],
            ['0.4', 'This is 10/25; the square root of n must be used.'],
            ['5', 'This is √25.'],
          ]),
          mc('A 95% t interval for the same data is about (47.87, 56.13). What do we conclude?', 'We are 95% confident the true population mean is between 47.87 and 56.13', 'The interval estimates the population mean.', [
            ['95% of individual values are between 47.87 and 56.13', 'The interval is about the mean, not individual values.'],
            ['The sample mean is between 47.87 and 56.13 with 95% probability', 'The sample mean is known (52).'],
            ['The population mean is exactly 52', 'The interval expresses uncertainty about the mean.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'One-sample and two-sample t tests.',
      sessions: [{
        t: 'Tests for means',
        s: 'The t statistic, two-sample tests and the link to intervals.',
        md: `
## One-sample t test
H₀: μ = μ₀. The test statistic is

**t = (x̄ − μ₀) / (s/√n)**, with df = n − 1.

**Example:** μ₀ = 100, n = 16, x̄ = 106, s = 12.
SE = 12/4 = 3, so **t = 6/3 = 2.0** with df = 15.
- Two-sided p-value ≈ **0.064**. At α = 0.05, we **fail to reject H₀**: the data do not provide convincing evidence that the mean differs from 100.

## Two-sample t test (independent samples)
H₀: μ₁ − μ₂ = 0.

**SE = √(s₁²/n₁ + s₂²/n₂)** and **t = (x̄₁ − x̄₂)/SE.**

**Example:** s₁ = 6, n₁ = 36, s₂ = 8, n₂ = 64: SE = √(1 + 1) ≈ **1.41**. If x̄₁ − x̄₂ = 3, then t ≈ **2.12**.

If the two samples are **paired** (the same people measured twice), take the differences and do a **one-sample** t test on them.

## Intervals and tests
A 95% confidence interval that **does not contain** the null value matches a **two-sided test** that rejects H₀ at α = 0.05.
`,
        q: [
          mc('H₀: μ = 100. A random sample of 16 has x̄ = 106 and s = 12. What is the t statistic?', '2.0', '(106 − 100)/(12/√16) = 6/3.', [
            ['6', 'This is the difference in means; it must be divided by the standard error.'],
            ['0.5', 'This is 6/12, which ignores the √n.'],
            ['18', 'This multiplies 6 by 3; the difference must be divided by the standard error.'],
          ]),
          mc('For the two-sample example with s₁ = 6, n₁ = 36, s₂ = 8 and n₂ = 64, what is the standard error?', 'About 1.41', '√(36/36 + 64/64) = √2.', [
            ['About 2', 'This is the sum of the two terms (1 + 1) without taking the square root.'],
            ['About 1.0', 'This uses only one of the two terms.'],
            ['About 14', 'This adds the standard deviations.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Inference for means',
    tasks: [
      mc('A sample of n = 36 has s = 15. What is the standard error of x̄?', '2.5', '15/√36 = 15/6.', [
        ['15', 'This is the sample standard deviation.'],
        ['0.42', 'This is 15/36; the square root of n must be used.'],
        ['6', 'This is √36.'],
      ]),
      mc('What is the critical value t* for a 95% confidence interval from a sample of n = 15?', 'About 2.145', 'df = 14, and the 95% critical value is about 2.145.', [
        ['1.96', 'This is the z* value, which is too small for a small sample.'],
        ['About 2.131', 'This is the value for df = 15, which would be for n = 16.'],
        ['1.645', 'This is the z* value for 90% confidence.'],
      ]),
      mc('A sample of n = 16 has x̄ = 20 and s = 5. What is the 95% confidence interval for μ (t* = 2.131)?', 'About (17.34, 22.66)', 'SE = 1.25, margin of error = 2.131 × 1.25 ≈ 2.66.', [
        ['About (18.75, 21.25)', 'This uses one standard error as the margin of error.'],
        ['About (15.0, 25.0)', 'This uses a margin of error equal to s.'],
        ['About (19.2, 20.8)', 'This margin of error (0.8) is too small.'],
      ]),
      mc('Test H₀: μ = 50 with n = 25, x̄ = 54 and s = 10. What is the conclusion at α = 0.05 (two-sided)?', 'Fail to reject H₀ (t = 2.0, p ≈ 0.057)', 'SE = 2, t = 2.0, df = 24, and the two-sided p-value is about 0.057, above 0.05.', [
        ['Reject H₀ (p ≈ 0.02)', 'The p-value is about 0.057, not 0.02.'],
        ['Reject H₀ because t is greater than 1', 'The decision depends on the p-value, not on t > 1.'],
        ['Accept H₀ because the sample mean is near 50', 'We never accept H₀, and 54 is not very close given the standard error.'],
      ]),
      mc('Which situation makes a one-sample t procedure unsafe with n = 12?', 'A dotplot that shows strong skew and an outlier', 'With a small sample, the population needs to be approximately normal.', [
        ['A dotplot that is roughly symmetric', 'This supports using t.'],
        ['A random sample of students from a large school', 'This satisfies the random and 10% conditions.'],
        ['An unknown population standard deviation', 'This is exactly why t is used.'],
      ]),
      tf('If a 95% confidence interval for a mean does not contain the null value μ₀, then a two-sided test at α = 0.05 would reject H₀: μ = μ₀.', true, 'The interval and the two-sided test are linked.', 'Correct. A value outside the 95% interval is not plausible at the 5% level.'),
    ],
  },
};
