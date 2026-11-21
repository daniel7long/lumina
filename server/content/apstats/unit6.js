import { mc, tf } from '../builder.js';

export default {
  summary: 'Estimate a population proportion with a confidence interval and test a claim about it with a hypothesis test.',
  modules: {
    11: {
      summary: 'Confidence intervals for a proportion.',
      sessions: [{
        t: 'Confidence intervals for a proportion',
        s: 'Constructing, interpreting and sizing an interval.',
        md: `
## The one-proportion z interval
**p̂ ± z* · √(p̂(1 − p̂)/n)**

Common critical values: **z\\* = 1.645** (90%), **1.96** (95%), **2.576** (99%).

**Conditions:** random sample; n ≤ 10% of the population; at least 10 successes and 10 failures in the sample.

### Example
In a random sample of 400 voters, 240 support a measure, so p̂ = 0.6.
SE = √(0.6 × 0.4/400) ≈ 0.0245; margin of error = 1.96 × 0.0245 ≈ **0.048**.
The 95% interval is **(0.552, 0.648)**.

### Interpretation
"We are **95% confident** that the interval from 0.552 to 0.648 captures the **true proportion** of all voters who support the measure."

The 95% describes the **method**: about 95% of intervals made this way would capture the true proportion. It is **not** the probability that this particular interval does.

### Planning a sample size
For a margin of error m: **n ≥ (z\\*/m)² · p̂(1 − p̂)**. With no prior estimate, use p̂ = 0.5. For m = 0.03 at 95%: n ≥ (1.96/0.03)² × 0.25 ≈ 1,067.1, so round **up** to **1,068**.
`,
        q: [
          mc('In a random sample of 400 voters, 240 support a measure. What is the margin of error for a 95% interval?', 'About 0.048', '1.96 × √(0.6 × 0.4/400) ≈ 1.96 × 0.0245.', [
            ['About 0.0245', 'This is the standard error; multiply by 1.96 to get the margin of error.'],
            ['About 0.6', 'This is the sample proportion.'],
            ['About 0.96', 'This is not related to the margin of error.'],
          ]),
          mc('Which is the correct interpretation of the 95% interval (0.552, 0.648)?', 'We are 95% confident the true proportion of all voters in favor is between 0.552 and 0.648', 'The interval estimates the population proportion.', [
            ['95% of voters are between 55.2% and 64.8% in favor', 'The interval is about a single population proportion, not about individual voters.'],
            ['There is a 95% probability that p̂ is in the interval', 'p̂ = 0.6 is known and is in the interval; the interval is about the unknown p.'],
            ['95% of all samples will have p̂ in the interval', 'The interval is not a statement about other samples’ proportions.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Hypothesis tests for a proportion.',
      sessions: [{
        t: 'Tests for a proportion',
        s: 'Hypotheses, the z statistic, p-values and errors.',
        md: `
## Steps of a significance test
1. **State hypotheses:** H₀: p = p₀ and Hₐ: p < p₀, p > p₀ or p ≠ p₀.
2. **Check conditions:** random sample, 10% condition and np₀ ≥ 10, n(1 − p₀) ≥ 10 (using p₀).
3. **Compute the test statistic:** **z = (p̂ − p₀) / √(p₀(1 − p₀)/n)**
4. **Find the p-value.**
5. **Conclude** in context by comparing the p-value with the significance level α (often 0.05).

### Example
Claim: half of students walk to school (p₀ = 0.5). In a random sample of 200, p̂ = 0.58.
z = 0.08/√(0.25/200) = 0.08/0.0354 ≈ **2.26**. For Hₐ: p ≠ 0.5, the p-value is 2 × 0.0118 ≈ **0.024**.
Since 0.024 < 0.05, we **reject H₀**: there is convincing evidence that the proportion of students who walk is not 0.5.

### What a p-value means
The **p-value** is the probability, **assuming H₀ is true**, of getting a result as extreme as, or more extreme than, the one observed. It is **not** the probability that H₀ is true.

### Errors
- **Type I error:** rejecting a true H₀. Its probability is **α**.
- **Type II error:** failing to reject a false H₀. **Power** = 1 − P(Type II).
`,
        q: [
          mc('In the example (p₀ = 0.5, n = 200, p̂ = 0.58), what is the z statistic?', 'About 2.26', '(0.58 − 0.5)/√(0.25/200) = 0.08/0.0354.', [
            ['About 0.08', 'This is the difference p̂ − p₀, not yet divided by the standard error.'],
            ['About 1.13', 'This halves the correct value, for example by dividing by √(0.25/50).'],
            ['About 0.024', 'This is the p-value, not the z statistic.'],
          ]),
          mc('The p-value is 0.024 and α = 0.05. What is the correct conclusion?', 'Reject H₀: there is convincing evidence against the claim', 'The p-value is smaller than α.', [
            ['Fail to reject H₀, because 0.024 is small', 'A p-value below α leads to rejecting H₀.'],
            ['H₀ is true with probability 0.976', 'A p-value is not the probability that H₀ is true.'],
            ['Accept H₀', 'We never "accept" H₀; at best we fail to reject it.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Inference for proportions',
    tasks: [
      mc('A random sample of 250 gives p̂ = 0.4. Which interval is the 90% confidence interval (z* = 1.645)?', '(0.349, 0.451)', 'SE = √(0.4 × 0.6/250) ≈ 0.031 and the margin of error is 1.645 × 0.031 ≈ 0.051.', [
        ['(0.339, 0.461)', 'This margin of error (0.061) corresponds to about z* = 1.96, which is the 95% value.'],
        ['(0.369, 0.431)', 'This margin of error is too small (0.031); it equals one standard error.'],
        ['(0.4, 0.451)', 'The interval must extend on both sides of p̂.'],
      ]),
      mc('A pollster wants a margin of error of at most 0.03 at 95% confidence and has no prior estimate of p. What sample size is needed?', '1,068', 'Use p̂ = 0.5: (1.96/0.03)² × 0.25 ≈ 1,067.1, rounded up.', [
        ['1,067', 'Sample size must be rounded up, not down, to guarantee the margin of error.'],
        ['2,135', 'This multiplies by 0.5 instead of p̂(1 − p̂) = 0.25.'],
        ['267', 'This is the size needed for a margin of error of 0.06.'],
      ]),
      mc('Test H₀: p = 0.2 against Hₐ: p > 0.2 with n = 150 and p̂ = 0.26. What is the z statistic?', 'About 1.84', '(0.26 − 0.2)/√(0.2 × 0.8/150) = 0.06/0.0327.', [
        ['About 0.06', 'This is the difference, not yet divided by the standard error.'],
        ['About 1.68', 'This uses p̂ instead of p₀ in the standard error; a test uses the null value p₀.'],
        ['About 3.67', 'This doubles the correct value.'],
      ]),
      mc('For that test, the p-value is about 0.033 and α = 0.05. What is the conclusion?', 'Reject H₀: there is convincing evidence that p is greater than 0.2', 'The p-value is below α.', [
        ['Fail to reject H₀ because 0.033 > 0.01', 'The comparison should be with α = 0.05.'],
        ['Fail to reject H₀ because the sample is small', 'n = 150 is not the issue; the p-value decides.'],
        ['Prove that p = 0.26', 'The test does not establish an exact value.'],
      ]),
      mc('What does a p-value of 0.033 mean?', 'If H₀ were true, there would be about a 3.3% chance of a result at least this extreme', 'This is the definition of the p-value.', [
        ['There is a 3.3% chance that H₀ is true', 'The p-value is computed assuming H₀ is true.'],
        ['There is a 96.7% chance that Hₐ is true', 'A p-value does not give the probability of either hypothesis.'],
        ['3.3% of the population has the characteristic', 'That would be a proportion, not a p-value.'],
      ]),
      mc('A Type I error occurs when', 'we reject a null hypothesis that is actually true', 'This is a false positive, and its probability is α.', [
        ['we fail to reject a null hypothesis that is false', 'This is a Type II error.'],
        ['we reject a false null hypothesis', 'This is a correct decision.'],
        ['the sample is not random', 'This is a flaw in design, not a Type I error.'],
      ]),
      tf('If we fail to reject H₀, we have proven that H₀ is true.', false, 'A failure to reject only means the data did not provide convincing evidence against H₀.', 'Correct. We never prove H₀; there may be too little data to detect a real difference.'),
    ],
  },
};
