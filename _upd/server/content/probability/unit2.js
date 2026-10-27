import { mc, tf } from '../builder.js';

export default {
  summary: 'Describe single variables and relationships with graphs and numbers, and avoid common traps such as Simpson\'s paradox and lurking variables.',
  modules: {
    3: {
      summary: 'Summarize a categorical variable.',
      sessions: [
        {
          t: 'Describing categorical data',
          s: 'Counts, percentages and bar charts.',
          md: `
## Examining categorical data

A categorical variable is summarized by **counts** and **percentages (proportions)** in each category.

| Pet | Count | Percent |
| --- | --- | --- |
| Dog | 45 | 45% |
| Cat | 35 | 35% |
| Other | 20 | 20% |

Display it with a **bar chart** (one bar per category, with a common baseline) or a **pie chart** (parts of a whole, best for few categories).

### Good practice
- Use **percentages** to compare groups of different sizes.
- Start bars at **zero**.
- Order categories logically, or by size.
- Say what the summary means *in context*: "45% of the 100 students own a dog."
`,
          q: [
            mc('In a class of 40, 14 students prefer tea. What percentage prefers tea?', '35%', '14 / 40 = 0.35.', [
              ['14%', 'That is the count, not the percentage.'],
              ['28%', 'This is not the result of 14 / 40.'],
            ]),
            mc('Why should a bar chart begin at zero?', 'So bar lengths accurately show relative sizes', 'A truncated base exaggerates differences.', [
              ['Because software requires it', 'It is a principle of honest display.'],
              ['To make the bars look taller', 'That would be misleading.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Describe distributions of quantitative variables with shape, center and spread.',
      sessions: [
        {
          t: 'Shape, center and spread',
          s: 'Histograms, stemplots, boxplots, mean, median, SD.',
          md: `
## Examining a distribution

Describe a quantitative variable by its **overall pattern**: **shape, center and spread**, and by **striking deviations** such as outliers.

### Displays
- **Histogram:** bars of counts in intervals.
- **Stemplot:** shows every value.
- **Boxplot:** uses the five-number summary (min, Q1, median, Q3, max).

### Shape
**Symmetric**, **skewed right** (a long tail to the right) or **skewed left**; one peak (unimodal) or more.

### Center and spread
| Measure | Use when |
| --- | --- |
| **Mean** and **standard deviation (SD)** | The shape is roughly symmetric, no extreme outliers |
| **Median** and **interquartile range (IQR = Q3 − Q1)** | The shape is skewed or has outliers |

The mean is pulled toward the tail; the median resists outliers.

### Example
For the data 2, 4, 4, 6, 9: mean = 5, median = 4 and the sample SD ≈ 2.65. The mean is above the median, a sign of a right skew.

### The standard deviation rule (normal shape)
For a bell-shaped distribution, about **68%** of values lie within 1 SD of the mean, **95%** within 2 SD and **99.7%** within 3 SD.

> If IQ scores are normal with mean 100 and SD 15, about 68% lie between 85 and 115.
`,
          q: [
            mc('For the data 2, 4, 4, 6, 9, which statement is correct?', 'The mean (5) is greater than the median (4), suggesting a right skew', 'The large value 9 pulls the mean upward.', [
              ['The median (5) is greater than the mean (4)', 'The mean is 5 and the median is 4.'],
              ['The mean and median are equal', 'They are not equal here.'],
            ]),
            mc('Test scores are approximately normal with mean 100 and SD 15. About what percentage score between 85 and 115?', '68%', 'This is within 1 SD of the mean.', [
              ['95%', 'That is within 2 SD (70 to 130).'],
              ['50%', 'It is not the percentage within 1 SD.'],
            ]),
          ],
        },
        {
          t: 'Choosing measures and comparing groups',
          s: 'Which summary to use and how to compare distributions.',
          md: `
## Choosing the right summary

For **skewed** data (incomes, house prices) the median and IQR describe a typical value better than the mean and SD. For roughly **symmetric** data the mean and SD are standard.

### Comparing distributions of two or more groups
Compare **shape, center, spread and outliers** side by side (for example side-by-side boxplots), and say it **in context**.

> "Salaries in company A have a median of $52,000 and an IQR of $14,000. In company B, the median is $61,000 and the IQR is $30,000. Company B pays more typically, but salaries are much more variable."

### Write a brief summary
1. State the variable and the group.
2. Describe the pattern (shape, center, spread).
3. Mention outliers or deviations.
4. Interpret it in context, with units.
`,
          q: [
            mc('House prices in a city are strongly skewed right. Which measure of center is best to report a typical price?', 'The median', 'It is resistant to the few very expensive houses.', [
              ['The mean', 'Expensive houses pull the mean upward.'],
              ['The maximum', 'The maximum is not a measure of the center.'],
            ]),
            mc('Group A has median 52 and IQR 14, and group B has median 61 and IQR 30. Which statement fits?', 'B is higher in the center and more variable than A', 'Higher median and larger IQR.', [
              ['A is higher in the center and more variable', 'The medians and IQRs show the opposite.'],
              ['A and B have the same spread', 'IQRs differ.'],
            ]),
          ],
        },
      ],
    },
    5: {
      summary: 'Examine relationships between two variables: scatterplots, correlation, regression, two-way tables, Simpson\'s paradox and causation.',
      sessions: [
        {
          t: 'Scatterplots, correlation and regression',
          s: 'Pattern, direction, strength, and the least squares line.',
          md: `
## Quantitative → quantitative

A **scatterplot** shows two quantitative variables. Describe the **form** (linear or curved), **direction** (positive or negative), **strength** and any **deviations** (outliers).

### Correlation (r)
- Ranges from **−1 to +1**, and has no units.
- Close to ±1: strong **linear** relationship; near 0: weak linear relationship.
- It only measures **linear** association, and is **sensitive to outliers**.
- Correlation is **not** causation.

### Least squares regression line
The line ŷ = a + bx that minimizes the squared vertical distances from the points. The **slope b** is the predicted change in y for a 1-unit increase in x. The **intercept a** is the predicted y when x = 0 (it may not be meaningful).

**Example:** for x = 1, 2, 3, 4, 5 and y = 2, 4, 5, 4, 5, the line is ŷ = 2.2 + 0.6x and r ≈ 0.77. For x = 4 we predict ŷ = 2.2 + 0.6(4) = 4.6.

> **Caution:** do not extrapolate far outside the range of the data.
`,
          q: [
            mc('The regression line is ŷ = 2.2 + 0.6x. What is the predicted y when x = 4?', '4.6', '2.2 + 0.6 × 4 = 4.6.', [
              ['2.8', 'This is not the result of the equation.'],
              ['6.6', 'This is not the result of the equation.'],
            ]),
            mc('Which statement about the correlation r is TRUE?', 'It measures only the strength of a linear relationship', 'A curved relationship can have r near 0.', [
              ['A value of r = 0 means there is no relationship of any kind', 'A strong curved relationship can have r near 0.'],
              ['r = 0.9 proves that x causes y', 'Correlation is not causation.'],
            ]),
          ],
        },
        {
          t: 'Two-way tables, Simpson\'s paradox and lurking variables',
          s: 'Categorical relationships, conditional percentages and causation.',
          md: `
## Categorical → categorical

A **two-way table** counts cases by two categorical variables. Compare **conditional percentages**: the distribution of the response within each explanatory category.

| | Passed | Failed | Total |
| --- | --- | --- | --- |
| Tutoring | 40 | 10 | 50 |
| No tutoring | 30 | 20 | 50 |

Pass rate with tutoring: 40/50 = **80%**. Without: 30/50 = **60%**. Since these differ, the variables appear associated.

### Simpson's paradox
A trend within each subgroup can **reverse** when the groups are combined, because of a lurking variable that changes group sizes.

**Example.** Hospital A treats mostly easy cases and B treats mostly hard cases. B may have a lower overall success rate than A even if B does better within *both* easy and hard cases.

### Association vs. causation
Observing an association does not show cause. A **lurking variable** may drive both. Ice-cream sales and drownings are linked because both rise in hot weather. Only a well-designed **experiment** can show causation.
`,
          q: [
            mc('In the tutoring table, what is the pass rate for students without tutoring?', '60%', '30 / 50 = 0.60.', [
              ['40%', 'This is not the pass rate.'],
              ['30%', 'This is the count.'],
            ]),
            mc('Ice-cream sales and drownings are positively associated. What best explains it?', 'A lurking variable: hot weather increases both', 'A common cause can create an association.', [
              ['Ice cream causes drowning', 'There is no causal mechanism.'],
              ['Drowning increases ice cream sales', 'This is also implausible.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Exploratory data analysis',
    tasks: [
      mc('In a sample of 250 customers, 60 prefer online shopping. What percentage is that?', '24%', '60 / 250 = 0.24.', [
        ['60%', 'That is the count.'],
        ['4.2%', 'This is not the result of 60 / 250.'],
        ['40%', 'This is not the proportion.'],
      ]),
      mc('Incomes in a town are strongly skewed right. Which pair of summaries is most appropriate?', 'Median and IQR', 'They are resistant to extreme incomes.', [
        ['Mean and SD', 'Extreme values distort both.'],
        ['Mean and range', 'Both are sensitive to outliers.'],
        ['Maximum and minimum', 'These are not measures of center and spread.'],
      ]),
      mc('Data: 2, 4, 4, 6, 9. What is the sample standard deviation (to 2 decimals)?', '2.65', 'The deviations from 5 are −3, −1, −1, 1, 4. Their squares sum to 28, so s = √(28/4) = √7 ≈ 2.65.', [
        ['2.37', 'This divides by n instead of n − 1.'],
        ['5.00', 'This is the mean.'],
        ['7.00', 'This is the variance.'],
      ]),
      mc('Heights are approximately normal with mean 170 cm and SD 10 cm. About what percentage are between 150 and 190 cm?', '95%', 'This is within 2 SD of the mean.', [
        ['68%', 'That is within 1 SD (160 to 180).'],
        ['99.7%', 'That is within 3 SD (140 to 200).'],
        ['50%', 'It is not the right value.'],
      ]),
      mc('Which statement about a scatterplot is correct?', 'A curved pattern may have a correlation near 0 even if there is a strong relationship', 'The correlation measures only linear association.', [
        ['The correlation always detects curved patterns', 'It does not.'],
        ['A correlation of −0.8 means a weak relationship', 'It indicates a strong negative linear relationship.'],
        ['r has the units of x', 'r has no units.'],
      ]),
      mc('The regression line for predicting weight (kg) from height (cm) is ŷ = −90 + 0.9x. What does the slope 0.9 mean?', 'Each extra cm of height is associated with a 0.9 kg increase in predicted weight', 'The slope is the predicted change in y per unit of x.', [
        ['A person of height 0 weighs 0.9 kg', 'The intercept is -90, and x = 0 is meaningless here.'],
        ['Weight explains height', 'Height is the explanatory variable.'],
        ['Height is exactly 0.9 times weight', 'It is a rate of change.'],
      ]),
      mc('In one hospital 90 of 100 patients with mild illness recovered and 30 of 100 with severe illness recovered. In another, 19 of 20 mild and 55 of 180 severe recovered. Which phenomenon can make the overall comparison misleading?', 'Simpson\'s paradox: severity is a lurking variable that changes the group mix', 'Different mixes of mild and severe cases affect the overall rates.', [
        ['The law of large numbers', 'This is not the phenomenon.'],
        ['Range restriction', 'Not relevant here.'],
        ['The placebo effect', 'Not relevant here.'],
      ]),
      tf('If two variables are strongly correlated, we can conclude that changes in one cause changes in the other.', false, 'A lurking variable or reverse causation may explain it. Only a well-designed experiment can support a causal claim.', 'Correct. Association is not causation.'),
    ],
  },
};
