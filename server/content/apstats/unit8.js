import { mc, tf } from '../builder.js';

export default {
  summary: 'Compare observed counts with expected counts to test whether a categorical distribution fits a claim, or whether two categorical variables are related.',
  modules: {
    15: {
      summary: 'Goodness-of-fit and independence tests.',
      sessions: [{
        t: 'Chi-square tests',
        s: 'The χ² statistic, expected counts and degrees of freedom.',
        md: `
## The chi-square statistic
**χ² = Σ (O − E)² / E**, summed over all categories (or cells), where O is the observed count and E is the expected count. Large χ² values mean the data are far from what H₀ predicts. The test is always **right-tailed**.

**Condition:** random sample, and **all expected counts at least 5**.

## Goodness-of-fit test
Tests whether a single categorical variable has a **specified distribution**. **df = number of categories − 1**.

**Example:** is a die fair? In 60 rolls, the counts for faces 1–6 are 8, 12, 9, 11, 10, 10. Under H₀, E = 10 for each.
χ² = (4 + 4 + 1 + 1 + 0 + 0)/10 = **1.0** with df = 5, giving a p-value of about **0.96**. There is no evidence that the die is unfair.

## Test of independence (or homogeneity)
Tests whether two categorical variables are **associated**.
**Expected count = (row total × column total) / grand total.**
**df = (rows − 1)(columns − 1).**

**Example:** two groups of 50 people each choose A or B. Group 1: 30 choose A, 20 choose B; Group 2: 20 choose A, 30 choose B. Each expected count is (50 × 50)/100 = **25**.
χ² = 4 × (5²/25) = **4.0**, df = 1, p ≈ 0.046. At α = 0.05, we reject H₀: there is convincing evidence of an association between group and choice.

A significant result shows **association**, not causation.
`,
        q: [
          mc('In 60 rolls of a die, the faces show 8, 12, 9, 11, 10, 10. What is χ² for H₀: the die is fair?', '1.0', 'Each E = 10; Σ(O − E)²/E = (4 + 4 + 1 + 1 + 0 + 0)/10.', [
            ['10', 'This is the expected count for each face.'],
            ['About 1.67', 'This divides the sum of squared differences by 6 (the number of faces) instead of by E.'],
            ['0', 'The observed counts differ from the expected counts, so χ² is positive.'],
          ]),
          mc('A table has row total 50, column total 50 and grand total 100. What is the expected count for that cell?', '25', '(50 × 50)/100.', [
            ['50', 'This is the row total.'],
            ['2,500', 'This is the product of the totals, which must be divided by the grand total.'],
            ['100', 'This is the grand total.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Chi-square inference',
    tasks: [
      mc('A goodness-of-fit test has 4 categories with expected counts of 25 each. The observed counts are 20, 30, 25, 25. What is χ²?', '2.0', '(25 + 25 + 0 + 0)/25 = 2.0.', [
        ['50', 'This is the sum of squared differences, not divided by E.'],
        ['10', 'This is the sum of the absolute differences.'],
        ['0', 'The counts differ from the expected values.'],
      ]),
      mc('A table has 3 rows and 4 columns. What are the degrees of freedom for a chi-square test of independence?', '6', '(3 − 1)(4 − 1) = 6.', [
        ['12', 'This is the number of cells.'],
        ['11', 'This is the number of cells minus 1, which is the formula for goodness-of-fit.'],
        ['7', 'This is the sum of the rows and columns.'],
      ]),
      mc('A cell is in a row with total 60 and a column with total 40, with a grand total of 200. What is its expected count?', '12', '(60 × 40)/200 = 12.', [
        ['100', 'This is 60 + 40.'],
        ['2,400', 'This is the product of the row and column totals without dividing.'],
        ['20', 'This is the grand total divided by 10.'],
      ]),
      mc('A cell has O = 18 and E = 12. What is its contribution to χ²?', '3.0', '(18 − 12)²/12 = 36/12 = 3.', [
        ['6', 'This is the difference O − E, not squared and divided by E.'],
        ['36', 'This is the squared difference, not divided by E.'],
        ['0.5', 'This divides the difference (6) by E without squaring it.'],
      ]),
      mc('A test of independence gives p = 0.03 with α = 0.05. What is the conclusion?', 'Reject H₀: there is convincing evidence of an association between the two variables', 'The p-value is below α.', [
        ['Fail to reject H₀: the variables are independent', 'A p-value below α leads to rejection.'],
        ['One variable causes the other', 'An association does not show causation.'],
        ['The null hypothesis is true with probability 0.97', 'A p-value is not the probability that H₀ is true.'],
      ]),
      tf('A chi-square test for independence can show that two categorical variables are associated, but not that one causes the other.', true, 'The test measures association only.', 'Correct. Causation needs a randomized experiment.'),
    ],
  },
};
