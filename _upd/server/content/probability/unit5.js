import { mc, tf } from '../builder.js';

export default {
  summary: 'Use sample data to estimate population values and test claims, and know how to choose the right method for comparing groups and examining relationships.',
  modules: {
    13: {
      summary: 'The logic of inference: estimation and hypothesis testing.',
      sessions: [
        {
          t: 'From sample to population: two kinds of inference',
          s: 'Why we estimate, why we test, and what we mean by confidence.',
          md: `
## Introduction to inference

**Statistical inference** uses sample data to draw conclusions about a population, and states how uncertain those conclusions are. The uncertainty comes from the sampling distributions of Unit 4.

### Two main types
| | Question | Example |
| --- | --- | --- |
| **Estimation** | What is the value of the parameter? | What proportion of voters support the law? Give a range |
| **Hypothesis testing** | Is a claim about the parameter supported? | Is more than half of voters' support real, or sampling luck? |

### Conditions
Inference methods need the sample to be **random** (or like one), observations to be **independent**, and the sampling distribution to be approximately normal (large enough sample or normal population).

> Inference does **not** fix a biased sampling method: it only measures random sampling error.
`,
          q: [
            mc('"The percentage of students who use a bike is between 21% and 29%." Which type of inference is this?', 'Estimation', 'It gives a range of plausible values for a parameter.', [
              ['Hypothesis testing', 'Testing evaluates a claim.'],
              ['Descriptive statistics', 'It goes beyond describing the sample.'],
            ]),
            tf('Inference can correct for a sample that was chosen in a biased way.', false, 'Inference only accounts for random sampling variability, not for bias in how the sample was chosen.', 'Correct. Good design comes before inference.'),
          ],
        },
      ],
    },
    14: {
      summary: 'Point estimates and confidence intervals.',
      sessions: [
        {
          t: 'Confidence intervals',
          s: 'Interpretation, margin of error and sample size.',
          md: `
## Estimation

A **point estimate** is a single number (such as x̄ or p̂) that estimates a parameter. A **confidence interval** gives a range:

**estimate ± margin of error**, with margin of error = (critical value) × (standard error).

For 95% confidence the critical value is **1.96** (normal).

### Population proportion
p̂ ± 1.96 √(p̂(1−p̂)/n).
**Example:** p̂ = 0.40, n = 100 → standard error = 0.049, margin ≈ 0.096 → CI = (**0.304, 0.496**).

### Population mean (σ known or large n)
x̄ ± 1.96 σ/√n. With x̄ = 50, σ = 10, n = 100: 50 ± 1.96 → (**48.04, 51.96**). (With small samples and unknown σ use a t critical value.)

### Interpretation
"We are 95% confident that the true proportion lies in (0.304, 0.496)." It means the **method** captures the true parameter in 95% of all samples. It does **not** say 95% of the data lies in the interval.

### What changes the width?
- **Larger sample size** → narrower interval (the margin shrinks by √n).
- **Higher confidence level** → wider interval.

### Sample size for a proportion
To get margin of error m with 95% confidence and p = 0.5: n = (1.96/m)² × 0.25. For m = 0.03, n = 1,067.1, so take **n = 1,068**.
`,
          q: [
            mc('p̂ = 0.40 from n = 100. What is the approximate 95% confidence interval for p?', '(0.304, 0.496)', '0.40 ± 1.96 × 0.049 ≈ 0.40 ± 0.096.', [
              ['(0.30, 0.50)', 'This rounds the margin of error too much; the correct margin is about 0.096.'],
              ['(0.36, 0.44)', 'This margin is too small.'],
            ]),
            mc('What happens to the width of a confidence interval if you raise the confidence level from 95% to 99% (same data)?', 'It gets wider', 'More confidence requires a larger critical value.', [
              ['It gets narrower', 'Higher confidence needs a wider interval.'],
              ['It stays the same', 'The critical value changes.'],
            ]),
          ],
        },
      ],
    },
    15: {
      summary: 'The logic of hypothesis tests, p-values, errors and significance versus importance.',
      sessions: [
        {
          t: 'Hypotheses, test statistics and p-values',
          s: 'Setting up and carrying out a test for a proportion.',
          md: `
## Hypothesis testing

1. **State hypotheses.** The **null hypothesis H₀** is the claim of no effect or no difference (p = 0.5). The **alternative Hₐ** is what we look for (p > 0.5, p < 0.5 or p ≠ 0.5).
2. **Check conditions** and compute the **test statistic**: z = (p̂ − p₀) / √(p₀(1−p₀)/n).
3. Find the **p-value**: the probability, assuming H₀ is true, of getting a result **as extreme or more extreme** than the one observed.
4. **Conclude.** A small p-value (less than α, often 0.05) is evidence against H₀.

### Example
A coin lands heads 56 times in 100 tosses. Is it biased? H₀: p = 0.5, Hₐ: p ≠ 0.5.
z = (0.56 − 0.50)/0.05 = **1.2**. Two-sided p-value = **0.230**. Since 0.230 > 0.05, we do not reject H₀: the data are consistent with a fair coin.

### What the p-value is NOT
It is **not** the probability that H₀ is true. "Not rejecting" H₀ is also not proof that H₀ is true.

### Connection to confidence intervals
A two-sided test at α = 0.05 rejects H₀: p = p₀ exactly when p₀ is outside the 95% confidence interval.
`,
          q: [
            mc('In a test, z = 1.2 and the two-sided p-value is 0.23. With α = 0.05, what is the conclusion?', 'Do not reject H₀: the evidence is not strong enough', '0.23 is greater than 0.05.', [
              ['Reject H₀', 'The p-value is not small enough.'],
              ['H₀ is proven true', 'Failing to reject does not prove it.'],
            ]),
            mc('What does a p-value of 0.03 mean?', 'If H₀ were true, a result at least this extreme would happen about 3% of the time', 'This is the definition of the p-value.', [
              ['There is a 3% probability that H₀ is true', 'The p-value is not the probability of H₀.'],
              ['The effect is 3% large', 'It says nothing about effect size.'],
            ]),
          ],
        },
        {
          t: 'Errors, power and practical importance',
          s: 'Type I and II errors, sample size and significance vs. importance.',
          md: `
## Errors

| | H₀ true | H₀ false |
| --- | --- | --- |
| **Reject H₀** | **Type I error** (false positive), probability α | Correct |
| **Do not reject H₀** | Correct | **Type II error** (false negative), probability β |

- Choosing a smaller α makes Type I errors rarer but Type II errors more likely.
- **Power** = 1 − β: the chance of detecting a real effect. It increases with a **larger sample**, a **larger true effect**, and a larger α.

### Statistical significance vs. practical importance
With a very large sample, a tiny difference can be statistically significant. Always look at the **size** of the effect and the confidence interval, and ask whether it matters in context.

> A new drug lowers blood pressure by 0.3 mmHg (p < 0.001, n = 100,000). It is significant, but not clinically important.

Conversely, a small study may find a large, important effect that is not significant because the sample is too small (low power).
`,
          q: [
            mc('A medical test announces a patient has a disease when the patient is actually healthy. What kind of error is it?', 'Type I error (false positive)', 'The null (healthy) was rejected although it was true.', [
              ['Type II error', 'A Type II error would miss a disease that is present.'],
              ['No error', 'The test result is wrong.'],
            ]),
            mc('How can you increase the power of a test?', 'Increase the sample size', 'More data makes it easier to detect real effects.', [
              ['Decrease the sample size', 'This lowers power.'],
              ['Choose a smaller α without changing anything else', 'This lowers power.'],
            ]),
          ],
        },
      ],
    },
    16: {
      summary: 'Compare groups: independent samples, matched pairs and ANOVA.',
      sessions: [
        {
          t: 'Comparing groups',
          s: 'Choosing between independent samples, paired data and ANOVA.',
          md: `
## Inference for relationships: comparing groups

When the **explanatory variable is categorical** and the **response is quantitative**, we compare group means.

| Situation | Method | H₀ |
| --- | --- | --- |
| Two **independent** samples | Two-sample t-test | μ₁ = μ₂ |
| **Matched pairs** (before/after, twins) | Paired t-test on the differences | μ_d = 0 |
| **Three or more** groups | ANOVA (F-test) | μ₁ = μ₂ = … = μₖ |

### How to tell
- Are the same subjects measured twice, or subjects matched? → **paired**.
- Are the groups made of different, unrelated subjects? → **independent**.
- More than 2 groups → **ANOVA**; if significant, follow up to see which means differ.

### Example (two independent samples)
Group 1: x̄ = 72, s = 10, n = 50. Group 2: x̄ = 68, s = 10, n = 50.
SE = √(10²/50 + 10²/50) = √4 = 2. z = 4/2 = **2.0**, two-sided p ≈ **0.046**, which is (just) significant at 0.05.

### Example (paired)
Differences (after − before) for 5 people: 3, 5, 1, 4, 2. Mean = 3, s = 1.58, t = 3/(1.58/√5) = **4.24** with 4 df, p ≈ 0.013, so the mean change is significantly different from 0.
`,
          q: [
            mc('The same 30 employees' + "'" + ' stress is measured before and after a mindfulness course. Which method is appropriate?', 'A paired (matched pairs) t-test', 'The same people are measured twice.', [
              ['Two independent samples t-test', 'The two measurements are not independent.'],
              ['ANOVA with three groups', 'There are only two measurements.'],
            ]),
            mc('Which method would you use to compare the mean test score for four different teaching methods (independent groups)?', 'ANOVA', 'It compares the means of three or more groups.', [
              ['Paired t-test', 'The groups are independent, and there are more than two.'],
              ['A single two-sample t-test', 'It handles only two groups.'],
            ]),
          ],
        },
      ],
    },
    17: {
      summary: 'Choose a method for any pair of variables and justify the choice.',
      sessions: [
        {
          t: 'Choosing the right inference method',
          s: 'Chi-square test, regression inference and a decision guide.',
          md: `
## Inference for relationships: a decision guide

Use the **role-type classification** (Unit 1).

| Explanatory → Response | Method |
| --- | --- |
| Categorical → Quantitative | t-test (2 groups), paired t-test or ANOVA (3+) |
| Categorical → Categorical | **Chi-square test** of independence |
| Quantitative → Quantitative | **Inference for regression/correlation** (test of the slope) |

### Chi-square test
H₀: the two categorical variables are **independent**. Compare observed counts with the counts **expected** if H₀ were true: expected = (row total × column total) / grand total.
χ² = Σ (observed − expected)² / expected.

**Example.** Table: group 1 = 30 yes / 20 no, group 2 = 20 yes / 30 no. Expected counts are all 25, so χ² = 4 × (5²/25) = **4.0** with 1 df, p ≈ **0.046**. At α = 0.05 there is evidence of an association.

### Regression inference
Test H₀: slope = 0 (no linear relationship). A small p-value shows evidence of a linear association in the population, but it still does not show causation unless the data come from an experiment.

### Always
State hypotheses, check conditions, compute, and **conclude in context**.
`,
          q: [
            mc('You want to know whether smoking status (yes/no) is associated with having a certain disease (yes/no). Which method fits?', 'Chi-square test of independence', 'Both variables are categorical.', [
              ['Two-sample t-test', 'The response is not quantitative.'],
              ['Linear regression', 'Neither variable is quantitative.'],
            ]),
            mc('In a 2 × 2 table with 100 cases, the row totals are 50 and 50, and the column totals are 50 and 50. What is the expected count for each cell under independence?', '25', '(50 × 50) / 100 = 25.', [
              ['50', 'This is a row or column total.'],
              ['10', 'This is not the expected count.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Inference',
    tasks: [
      mc('A sample of 100 gives x̄ = 50 with σ = 10. What is the 95% confidence interval for μ?', '(48.04, 51.96)', '50 ± 1.96 × 10/√100 = 50 ± 1.96.', [
        ['(40, 60)', 'This is x̄ ± σ.'],
        ['(49, 51)', 'This uses 1 as the multiplier.'],
        ['(30, 70)', 'This margin is far too wide.'],
      ]),
      mc('A 95% confidence interval for a proportion is (0.30, 0.40). How is it correctly interpreted?', 'We are 95% confident the true proportion lies between 0.30 and 0.40', 'The method captures the true value in 95% of samples.', [
        ['95% of individuals in the sample have a value between 0.30 and 0.40', 'The interval is about the parameter, not individuals.'],
        ['There is a 95% probability the sample proportion is between 0.30 and 0.40', 'The sample proportion is known.'],
        ['The true proportion changes between 0.30 and 0.40', 'The parameter is fixed.'],
      ]),
      mc('A poll wants a margin of error of 3 percentage points at 95% confidence (using p = 0.5). What sample size is needed?', '1,068', '(1.96/0.03)² × 0.25 = 1,067.1, so round up to 1,068.', [
        ['1,067', 'Always round up.'],
        ['400', 'This gives a larger margin of error.'],
        ['10,000', 'This is much more than needed.'],
      ]),
      mc('If the sample size is quadrupled, what happens to the margin of error (all else equal)?', 'It is halved', 'The margin is proportional to 1/√n and √4 = 2.', [
        ['It is quartered', 'The margin shrinks by √n, not n.'],
        ['It stays the same', 'It changes with n.'],
        ['It doubles', 'It gets smaller, not larger.'],
      ]),
      mc('A test of H₀: p = 0.5 gives z = 1.2 and a two-sided p-value of 0.23. What should you conclude at α = 0.05?', 'There is not enough evidence to reject H₀', 'The p-value is greater than α.', [
        ['H₀ is true', 'Failing to reject does not prove H₀.'],
        ['The result is significant', 'It is not significant at 0.05.'],
        ['The null hypothesis has a 23% chance of being true', 'The p-value is not the probability that H₀ is true.'],
      ]),
      mc('A company tests a new process with a very large sample and finds an improvement of 0.1% that is statistically significant. What is the best advice?', 'Check whether such a small improvement is practically important before acting', 'Significance does not equal importance.', [
        ['Implement it immediately because it is significant', 'The effect may be trivial.'],
        ['Ignore the result because the p-value is small', 'The p-value is not the problem.'],
        ['Conclude that the effect is large', 'The effect is small.'],
      ]),
      mc('Which situation calls for a paired t-test?', 'Comparing the weight of the same 20 people before and after a diet', 'The same people are measured twice.', [
        ['Comparing the weight of men and women in a random sample', 'These are independent groups.'],
        ['Comparing weights across four age groups', 'This calls for ANOVA.'],
        ['Testing if smoking is related to disease status', 'This calls for a chi-square test.'],
      ]),
      mc('A 2 × 2 table of observed counts has all expected counts equal to 25 and observed counts of 30, 20, 20 and 30. What is the chi-square statistic?', '4.0', 'Each cell contributes (5²)/25 = 1, and there are four cells, so χ² = 4.', [
        ['2.0', 'You must sum over all four cells.'],
        ['1.0', 'This is the value of one cell.'],
        ['25', 'This is the expected count.'],
      ]),
      tf('A Type II error occurs when we fail to reject a false null hypothesis.', true, 'Correct: a Type II error is a missed real effect (a false negative).', 'Not quite. Failing to reject a false null is a Type II error.'),
    ],
  },
};
