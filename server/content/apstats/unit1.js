import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn to describe data with graphs and numbers, and to use the normal distribution as a model.',
  modules: {
    1: {
      summary: 'Variable types and describing distributions.',
      sessions: [{
        t: 'Describing a distribution',
        s: 'Variable types and the four features of a distribution.',
        md: `
## Variables
- A **categorical** variable places each individual in a group (favorite subject, zip code).
- A **quantitative** variable is numerical, and arithmetic on it makes sense (height, income).

For a categorical variable, use counts or **relative frequencies** (percentages) and a bar chart. If 14 of 40 students prefer a subject, its relative frequency is 14/40 = **35%**.

## Describing a quantitative distribution
Use **SOCS**, and always in context:
- **S**hape: symmetric, skewed left, skewed right, unimodal or bimodal.
- **O**utliers or other unusual features.
- **C**enter: a typical value (mean or median).
- **S**pread: how variable the values are (range, IQR, standard deviation).

### Shape and center
- **Skewed right:** a long tail to the high side, so the **mean > median**.
- **Skewed left:** a long tail to the low side, so the **mean < median**.
- **Symmetric:** the mean and median are about equal.

Graphs for quantitative data: dotplot, stemplot, **histogram** and boxplot.
`,
        q: [
          mc('In a class of 40 students, 14 prefer math. What is the relative frequency of preferring math?', '35%', '14/40 = 0.35.', [
            ['14%', 'This is the count, not the percent of the class.'],
            ['40%', 'This is the class size written as a percent.'],
            ['2.9%', 'This divides 40 by 14 and then misreads the result.'],
          ]),
          mc('A distribution of household incomes is skewed right. Which is true?', 'The mean is greater than the median', 'High values pull the mean upward more than the median.', [
            ['The mean is less than the median', 'This happens in a left-skewed distribution.'],
            ['The mean equals the median', 'This is typical of symmetric distributions.'],
            ['The median cannot be computed', 'The median is defined for any quantitative data.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Summary statistics, resistance and outliers.',
      sessions: [{
        t: 'Summary statistics, boxplots and outliers',
        s: 'Median, quartiles, IQR, standard deviation and the 1.5 × IQR rule.',
        md: `
## Measures of center and spread
- **Mean** x̄ = Σx/n. **Median:** the middle value.
- **Standard deviation (s)** measures typical distance from the mean.
- **Quartiles:** Q1 is the median of the lower half and Q3 the median of the upper half. **IQR = Q3 − Q1**.

The **median and IQR are resistant** to outliers; the **mean and standard deviation are not**.

### Five-number summary and boxplot
Minimum, Q1, median, Q3, maximum.

### Outliers: the 1.5 × IQR rule
A value is an outlier if it is below **Q1 − 1.5·IQR** or above **Q3 + 1.5·IQR**.

**Example:** 3, 5, 6, 7, 9, 10, 12, 30.
- Median = (7 + 9)/2 = **8**; Q1 = 5.5; Q3 = 11; IQR = 5.5.
- Upper fence = 11 + 1.5(5.5) = **19.25**, so 30 is an **outlier**.
- The mean is 10.25 (pulled up by 30) and s ≈ 8.48.

When there is an outlier or strong skew, report the median and IQR.
`,
        q: [
          mc('For the data 3, 5, 6, 7, 9, 10, 12, 30, is 30 an outlier by the 1.5 × IQR rule?', 'Yes, because it is above the upper fence of 19.25', 'Q3 + 1.5(IQR) = 11 + 8.25 = 19.25, and 30 exceeds it.', [
            ['No, because it is within two standard deviations of the mean', 'That is a different rule, and 30 is more than 2 standard deviations above the mean of 10.25 anyway (10.25 + 16.96 = 27.2).'],
            ['No, because it is the maximum', 'The maximum is not automatically an outlier; it is compared with the fence.'],
            ['Yes, because it is more than 1.5 times the median', 'The rule uses 1.5 times the IQR added to Q3.'],
          ]),
          mc('Which pair of statistics is resistant to outliers?', 'The median and the IQR', 'They depend on positions in the ordered data, not on extreme values.', [
            ['The mean and the standard deviation', 'Both use every value, so extreme values change them.'],
            ['The mean and the median', 'The mean is not resistant.'],
            ['The range and the standard deviation', 'Neither is resistant.'],
          ]),
        ],
      }],
    },
    3: {
      summary: 'z-scores and normal models.',
      sessions: [{
        t: 'The normal distribution',
        s: 'Standardizing and the 68–95–99.7 rule.',
        md: `
## z-scores
A **z-score** tells how many standard deviations a value is from the mean:

**z = (x − μ) / σ**

**Example:** SAT-like scores have μ = 500 and σ = 100. A score of 650 has z = (650 − 500)/100 = **1.5**, which is above about **93.3%** of scores.

## The normal model
A bell-shaped, symmetric distribution described by μ and σ.

**Empirical rule (68–95–99.7):**
- About **68%** of values lie within 1 σ of the mean.
- About **95%** within 2 σ.
- About **99.7%** within 3 σ.

So the share of scores between 400 and 600 (within one σ) is about **68%**.

### Solving problems
1. Define the variable and the distribution: *X ~ N(μ, σ)*.
2. Draw and shade a sketch.
3. Standardize, then use the standard normal table or a calculator.
4. Answer in context.
`,
        q: [
          mc('Scores have a mean of 500 and a standard deviation of 100. What is the z-score for 650?', '1.5', '(650 − 500)/100 = 1.5.', [
            ['150', 'This is the difference from the mean, not the number of standard deviations.'],
            ['0.15', 'This divides by 1,000 instead of 100.'],
            ['6.5', 'This divides the score by 100 without subtracting the mean.'],
          ]),
          mc('Approximately what percent of a normal distribution lies within two standard deviations of the mean?', '95%', 'This is the middle part of the 68–95–99.7 rule.', [
            ['68%', 'This is the share within one standard deviation.'],
            ['99.7%', 'This is the share within three standard deviations.'],
            ['50%', 'This is the share on each side of the mean.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Exploring one-variable data',
    tasks: [
      mc('Which variable is categorical?', 'Zip code', 'It labels a group; adding or averaging zip codes has no meaning.', [
        ['Height', 'It is quantitative.'],
        ['Number of siblings', 'It is quantitative (a count).'],
        ['Annual income', 'It is quantitative.'],
      ]),
      mc('A histogram of the number of text messages sent per day is skewed to the right. Which statement is most likely true?', 'The mean is greater than the median', 'The long right tail pulls the mean up.', [
        ['The mean is less than the median', 'This is typical for left-skewed data.'],
        ['The mean and median are equal', 'This is typical for symmetric data.'],
        ['The standard deviation is zero', 'The data vary, so it is not zero.'],
      ]),
      mc('For the data 2, 4, 6, 8, 10, 12, 14, what is the IQR?', '8', 'Q1 = 4 and Q3 = 12, so IQR = 12 − 4 = 8.', [
        ['12', 'This is Q3 itself.'],
        ['6', 'This is the difference between consecutive data values, not the IQR.'],
        ['10', 'The IQR is Q3 − Q1 = 12 − 4, not the median plus 2.'],
      ]),
      mc('A data set has Q1 = 20 and Q3 = 30. Which value is an outlier by the 1.5 × IQR rule?', '48', 'IQR = 10, so the upper fence is 30 + 15 = 45, and 48 exceeds it.', [
        ['42', 'This is below the upper fence of 45.'],
        ['8', 'The lower fence is 20 − 15 = 5, and 8 is above it.'],
        ['35', 'This is within the fences.'],
      ]),
      mc('A test has a mean of 70 and a standard deviation of 8. What is the z-score of a score of 82?', '1.5', '(82 − 70)/8 = 1.5.', [
        ['12', 'This is the difference from the mean, not the z-score.'],
        ['0.67', 'This is 8/12, the inverse of the correct ratio.'],
        ['−1.5', 'The score is above the mean, so z is positive.'],
      ]),
      mc('Heights are approximately normal with a mean of 64 inches and a standard deviation of 3 inches. About what percent of heights are between 58 and 70 inches?', '95%', '58 and 70 are 2 standard deviations below and above the mean.', [
        ['68%', 'This would be 61 to 67 inches (one standard deviation).'],
        ['99.7%', 'This would be 55 to 73 inches (three standard deviations).'],
        ['50%', 'This is the share on one side of the mean.'],
      ]),
      tf('The standard deviation is resistant to outliers.', false, 'It uses every value, so an outlier changes it.', 'Correct. The standard deviation is not resistant; the IQR is.'),
    ],
  },
};
