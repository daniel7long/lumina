import { mc, tf } from '../builder.js';

export default {
  summary: 'Test whether a linear relationship exists in a population and estimate the true slope.',
  modules: {
    16: {
      summary: 'The t test and confidence interval for a slope.',
      sessions: [{
        t: 'Inference for the slope of a regression line',
        s: 'Conditions, the t statistic and an interval for the slope.',
        md: `
## The model
In the population, the mean of y at each x lies on a line: **μ_y = α + βx**. The sample slope **b** estimates the true slope **β**.

## Conditions (LINER)
- **L**inear: the relationship is linear (check the scatterplot and the **residual plot**: no curved pattern).
- **I**ndependent observations (random sample; 10% condition).
- **N**ormal residuals (check a histogram or normal probability plot of the residuals).
- **E**qual variance: residual spread is about the same for all x.
- **R**andom sample or experiment.

## t test for the slope
H₀: β = 0 (no linear relationship); Hₐ: β ≠ 0.

**t = b / SE_b**, with **df = n − 2**.

**Example:** n = 22, b = 4.0 and SE_b = 1.6. t = **2.5**, df = **20**, and the two-sided p-value ≈ **0.021**. We reject H₀: there is convincing evidence of a linear relationship between x and y in the population.

## Confidence interval for the slope
**b ± t* · SE_b**. With t* = 2.086 (df = 20, 95%): 4.0 ± 3.34 gives **(0.66, 7.34)**.

> If the interval **contains 0**, a linear relationship is plausible to be absent at that confidence level. Computer output gives b, SE_b, t and p; the p-value shown is usually two-sided.
`,
        q: [
          mc('A regression based on n = 22 points has b = 4.0 and SE_b = 1.6. What are the t statistic and the degrees of freedom?', 't = 2.5 and df = 20', 't = b/SE_b = 4.0/1.6 and df = n − 2.', [
            ['t = 0.4 and df = 21', 'The ratio is inverted, and df should be n − 2, not n − 1.'],
            ['t = 2.5 and df = 21', 'The t statistic is right, but df for regression is n − 2.'],
            ['t = 6.4 and df = 20', 'This multiplies b and SE_b instead of dividing.'],
          ]),
          mc('Which residual plot pattern suggests that the linear model is not appropriate?', 'A clear curved pattern', 'A curve means that a line does not capture the form of the relationship.', [
            ['Residuals randomly scattered around zero', 'This is what we want to see.'],
            ['Residuals with about equal spread for all x', 'This supports the equal-variance condition.'],
            ['Residuals that sum to zero', 'Least-squares residuals always sum to zero.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 9 assessment · Inference for slopes',
    tasks: [
      mc('A regression has b = 1.5 and SE_b = 0.5. What is the t statistic for H₀: β = 0?', '3.0', '1.5/0.5 = 3.', [
        ['0.33', 'This inverts the ratio.'],
        ['0.75', 'This is the product of b and SE_b.'],
        ['2.0', 'This subtracts the two numbers.'],
      ]),
      mc('A regression is based on n = 15 points. How many degrees of freedom does the t test for the slope have?', '13', 'df = n − 2.', [
        ['14', 'This is n − 1, used for one-sample means.'],
        ['15', 'This is n.'],
        ['12', 'This is n − 3.'],
      ]),
      mc('A t test for the slope gives a very small p-value. What does this mean?', 'There is convincing evidence of a linear relationship between x and y in the population', 'H₀: β = 0 is rejected.', [
        ['x causes y', 'Causation requires a randomized experiment.'],
        ['The sample correlation is exactly 1', 'A small p-value does not imply perfect correlation.'],
        ['All the points lie on the line', 'Points can scatter widely around a line with a nonzero slope.'],
      ]),
      mc('A regression has b = 2.0 and SE_b = 0.4 with n = 20 (t* = 2.101 for df = 18, 95%). What is the 95% confidence interval for β?', '(1.16, 2.84)', 'The margin of error is 2.101 × 0.4 ≈ 0.84.', [
        ['(1.6, 2.4)', 'This uses one standard error as the margin of error.'],
        ['(0.8, 3.2)', 'This margin of error (1.2) is too large.'],
        ['(2.0, 2.84)', 'The interval must extend on both sides of b.'],
      ]),
      mc('Which finding in the residual plot would violate the equal-variance condition?', 'The residuals fan out, becoming much more spread out as x increases', 'The spread of residuals should be about the same for all x.', [
        ['Residuals randomly scattered with constant spread', 'This is the desired pattern.'],
        ['A residual plot that has no obvious outliers', 'This does not violate any condition.'],
        ['Residuals centered at zero', 'Least-squares residuals are always centered at zero.'],
      ]),
      tf('A 95% confidence interval for a slope that contains 0 means the data do not provide convincing evidence of a linear relationship at the 5% level.', true, 'A slope of 0 is a plausible value, which matches failing to reject H₀: β = 0.', 'Correct. The interval and the two-sided test give the same conclusion.'),
    ],
  },
};
