import { mc, tf } from '../builder.js';

export default {
  summary: 'Study relationships between two quantitative variables with scatterplots, correlation and least-squares regression.',
  modules: {
    4: {
      summary: 'Scatterplots and correlation.',
      sessions: [{
        t: 'Scatterplots and correlation',
        s: 'Describing association and what r means (and does not mean).',
        md: `
## Scatterplots
A scatterplot shows two quantitative variables for the same individuals. Put the **explanatory** variable on the x-axis and the **response** on the y-axis. Describe **direction** (positive or negative), **form** (linear or curved), **strength**, and **unusual features** such as outliers.

## Correlation (r)
- The correlation coefficient **r** is between −1 and 1.
- The **sign** gives the direction; the **size** gives the strength of a **linear** relationship. Values near ±1 are strong; near 0 is weak.
- r has **no units** and does not change if you change units (inches to centimeters) or swap x and y.
- r is **not resistant** to outliers, and it only measures **linear** association.

**Example:** r = −0.90 means a strong negative linear relationship.

## Correlation is not causation
Two variables can move together because of a **lurking variable**. Ice cream sales and drownings are positively correlated because of **hot weather**, which affects both.
`,
        q: [
          mc('A study finds r = −0.90 between the number of hours of TV and exam scores. What does this say?', 'A strong negative linear association', 'The negative sign means as one increases the other tends to decrease; 0.90 is strong.', [
            ['Watching TV causes lower scores', 'Correlation alone does not show causation.'],
            ['A weak negative association', 'A value of −0.90 is close to −1, which is strong.'],
            ['90% of the scores are explained', 'That would be r², not r. And it would be 81% here.'],
          ]),
          mc('Ice cream sales and drowning deaths are positively correlated. What is the best explanation?', 'A lurking variable, hot weather, affects both', 'Warm weather increases both swimming and ice cream sales.', [
            ['Ice cream causes drowning', 'Association does not mean causation.'],
            ['Drowning causes people to buy ice cream', 'There is no sensible causal path in this direction.'],
            ['The correlation must be a calculation error', 'The association is real; it just is not causal.'],
          ]),
        ],
      }],
    },
    5: {
      summary: 'Least-squares regression, residuals and r².',
      sessions: [{
        t: 'Least-squares regression',
        s: 'Slope, intercept, prediction, residuals and r².',
        md: `
## The least-squares line
**ŷ = a + bx**, where
- **slope b = r · (s_y / s_x)**
- **intercept a = ȳ − b·x̄**

The line always passes through (x̄, ȳ).

**Example:** hours studied x: x̄ = 5, s_x = 2. Exam score y: ȳ = 70, s_y = 10. r = 0.8.
- b = 0.8 × (10/2) = **4**; a = 70 − 4(5) = **50**. So **ŷ = 50 + 4x**.
- **Interpretation of the slope:** for each additional hour studied, the predicted score increases by about 4 points.
- **Prediction:** x = 6 gives ŷ = **74**.

## Residuals
**Residual = actual y − predicted ŷ.** A student who studied 6 hours and scored 80 has a residual of 80 − 74 = **+6** (the line underestimates).

## r²
The **coefficient of determination r²** is the share of the variation in y that is accounted for by its linear relationship with x. Here, r² = 0.64: **64%** of the variation in scores is accounted for by the regression on hours studied.

## Extrapolation
Predicting for x-values **outside** the range of the data is **extrapolation** and is unreliable.
`,
        q: [
          mc('Using ŷ = 50 + 4x, what score is predicted for 6 hours of study?', '74', '50 + 4(6) = 74.', [
            ['54', 'This computes 50 + 4 and forgets to multiply by 6.'],
            ['80', 'This is an actual score, not the prediction.'],
            ['24', 'This is 4 × 6 and omits the intercept.'],
          ]),
          mc('In this example, r = 0.8. What does r² = 0.64 mean?', '64% of the variation in exam scores is accounted for by the linear relationship with hours studied', 'This is the definition of r² in context.', [
            ['64% of students pass the exam', 'r² is about variation, not pass rates.'],
            ['The slope is 0.64', 'The slope is 4 in this example.'],
            ['Studying causes 64% of the score', 'r² does not show causation.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Exploring two-variable data',
    tasks: [
      mc('Which statement about a correlation of r = −0.92 is correct?', 'There is a strong negative linear association', 'The sign is negative and the magnitude is close to 1.', [
        ['There is a weak negative association', 'The magnitude 0.92 is close to 1.'],
        ['The line has a slope of −0.92', 'The slope also depends on the standard deviations.'],
        ['92% of the variation is explained', 'This would be r² ≈ 0.85, not 0.92.'],
      ]),
      tf('Changing the units of measurement of x (for example from inches to centimeters) changes the correlation r.', false, 'r is unitless and does not change with linear rescaling.', 'Correct. r is unaffected by changes in units.'),
      mc('r = 0.6, s_x = 5 and s_y = 15. What is the slope of the least-squares line?', '1.8', 'b = r(s_y/s_x) = 0.6 × 3 = 1.8.', [
        ['0.2', 'This uses 0.6 × (5/15), which inverts the ratio.'],
        ['0.6', 'This is the correlation, not the slope.'],
        ['3', 'This is the ratio of standard deviations alone.'],
      ]),
      mc('For a regression with x̄ = 10, ȳ = 40 and slope 1.8, what is the intercept?', '22', 'a = ȳ − b·x̄ = 40 − 18 = 22.', [
        ['58', 'This adds b·x̄ instead of subtracting it.'],
        ['40', 'This is ȳ.'],
        ['−22', 'The sign is wrong: 40 − 18 is positive.'],
      ]),
      mc('A line predicts ŷ = 55 for a point whose actual value is y = 49. What is the residual?', '−6', 'Residual = actual − predicted = 49 − 55.', [
        ['6', 'The sign is wrong; the actual value is below the prediction.'],
        ['55', 'This is the predicted value.'],
        ['104', 'This adds the two values.'],
      ]),
      mc('A regression line is based on children aged 5 to 12. Which prediction is the least reliable?', 'The height of a 40-year-old', 'It is far outside the range of the data (extrapolation).', [
        ['The height of an 8-year-old', 'This is within the range of the data.'],
        ['The height of a 12-year-old', 'This is at the edge of the range but still within it.'],
        ['The height of a 6-year-old', 'This is within the range of the data.'],
      ]),
    ],
  },
};
