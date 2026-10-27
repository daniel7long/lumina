import { mc, tf } from '../builder.js';

export default {
  summary: 'See how the four parts of statistics fit together, and learn to classify data so you can choose the right tools.',
  modules: {
    1: {
      summary: 'The big picture: producing data, exploring it, using probability and drawing inferences.',
      sessions: [
        {
          t: 'The four parts of statistics',
          s: 'From a population to a sample and back again.',
          md: `
## What is statistics for?

Statistics is the science of learning from data in the presence of **variability**. Individuals differ, so we cannot learn about a group by looking at a single case.

### The big picture
1. **Producing data:** deciding how to collect a sample so it represents the population.
2. **Exploratory data analysis:** describing the sample with graphs and numbers.
3. **Probability:** the language of chance, which tells us how samples behave.
4. **Inference:** using the sample to draw conclusions about the population, with a statement of how sure we are.

### Population and sample
- **Population:** the entire group we want to learn about.
- **Sample:** the part of the population we actually observe.
- **Parameter:** a number describing a population (such as the true mean, μ).
- **Statistic:** a number describing a sample (such as the sample mean, x̄).

We usually **cannot** measure the whole population, so we use a statistic to estimate a parameter.

> **Example:** a poll asks 1,200 of the 150 million voters whom they support. The 1,200 are the sample; the 150 million are the population. The percentage in favour among the 1,200 is a statistic.
`,
          q: [
            mc('A university surveys 400 of its 20,000 students about sleep. The average sleep of the 400 students is 6.8 hours. What is 6.8?', 'A statistic', 'It describes a sample.', [
              ['A parameter', 'A parameter describes the whole population (all 20,000 students).'],
              ['A population', 'A population is a group, not a number.'],
            ]),
            mc('Which part of statistics uses a sample to draw conclusions about a population?', 'Inference', 'Inference goes from sample to population.', [
              ['Exploratory data analysis', 'This describes the data you have.'],
              ['Producing data', 'This is about how data are collected.'],
            ]),
          ],
        },
      ],
    },
    2: {
      summary: 'Classify variables and decide which are explanatory and which are response.',
      sessions: [
        {
          t: 'Types of data and the role of variables',
          s: 'Categorical vs. quantitative, and explanatory vs. response.',
          md: `
## Types of variables

A **variable** is a characteristic that varies from case to case.

| Type | Meaning | Examples |
| --- | --- | --- |
| **Categorical** | Places a case in a group | Eye colour, major, yes/no |
| **Quantitative** | Numerical values where arithmetic makes sense | Height, income, number of siblings |

A zip code is **categorical**, even though it is a number, since averaging zip codes is meaningless.

### Roles
- **Explanatory variable (X):** the one used to explain or predict.
- **Response variable (Y):** the outcome we want to understand.

### Role-type classification
Combine the roles and types to choose a display and summary:

| Explanatory → Response | Typical tool |
| --- | --- |
| Categorical → Quantitative | Compare distributions by group (side-by-side boxplots) |
| Categorical → Categorical | Two-way table |
| Quantitative → Quantitative | Scatterplot, correlation, regression |
| Quantitative → Categorical | Less common; often handled by other methods |

### Reading a data table
Each **row** is a case (a person or object); each **column** is a variable.
`,
          q: [
            mc('Which variable is quantitative?', 'Number of siblings', 'It is a count where arithmetic makes sense.', [
              ['Zip code', 'It is a label for a place, so it is categorical.'],
              ['Favourite colour', 'It is categorical.'],
            ]),
            mc('You study whether study method (flashcards, rereading, practice tests) affects exam score. What is the role-type classification?', 'Categorical explanatory, quantitative response', 'Study method is a category; exam score is a number.', [
              ['Quantitative explanatory, categorical response', 'The roles and types are reversed.'],
              ['Both quantitative', 'Study method is not numerical.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The big picture of statistics',
    tasks: [
      mc('Which of these is a parameter?', 'The true proportion of all registered voters in a country who support a law', 'It describes the whole population.', [
        ['The proportion of 1,000 sampled voters who support a law', 'This describes a sample, so it is a statistic.'],
        ['The average of ten survey answers', 'This is also a statistic.'],
        ['The margin of error of a poll', 'It is a feature of the estimate, not a population parameter.'],
      ]),
      mc('Why do we need statistics, rather than looking at a single case?', 'Because individuals vary, so conclusions need many cases and an account of variability', 'Variability is the reason for statistical reasoning.', [
        ['Because computers need data', 'The reason is variability.'],
        ['Because populations never change', 'This is not true.'],
        ['Because one case is always wrong', 'A single case can be right, but it may not be typical.'],
      ]),
      mc('Which variable is categorical?', 'Whether a patient recovered (yes or no)', 'It places each patient in a group.', [
        ['Body temperature in degrees', 'It is quantitative.'],
        ['Number of hospital visits', 'It is quantitative.'],
        ['Weight in kilograms', 'It is quantitative.'],
      ]),
      mc('A researcher compares the mean salary of graduates from three universities. Which role-type classification applies?', 'Categorical explanatory (university), quantitative response (salary)', 'University is a category; salary is a number.', [
        ['Quantitative explanatory, quantitative response', 'University is not a number.'],
        ['Categorical explanatory, categorical response', 'Salary is quantitative.'],
        ['Quantitative explanatory, categorical response', 'The roles are reversed.'],
      ]),
      mc('Which display fits the study of how hours studied (X) relate to exam score (Y)?', 'A scatterplot', 'Both variables are quantitative.', [
        ['A pie chart', 'A pie chart displays one categorical variable.'],
        ['Side-by-side boxplots of a categorical X', 'X is quantitative here.'],
        ['A two-way table', 'A two-way table is for two categorical variables.'],
      ]),
      tf('A zip code is a quantitative variable because it is made of digits.', false, 'Zip codes are labels. Averaging them has no meaning, so they are categorical.', 'Correct. Numbers used as labels are categorical.'),
    ],
  },
};
