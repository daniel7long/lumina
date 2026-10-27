import { mc, tf } from '../builder.js';

export default {
  summary: 'Find and judge data from inside your organization: what to collect, where it is kept, and the traps that make numbers misleading.',
  modules: {
    8: {
      summary: 'Decide what organizational data you need and where to find it.',
      sessions: [
        {
          t: 'Data, information and evidence from the organization',
          s: 'Why organizational evidence matters and what types exist.',
          md: `
## Why look inside the organization?

Scientific studies tell you what works *in general*. **Organizational evidence** tells you what is happening *here*: the actual problem, its size, and whether an intervention worked in your setting. It also helps you check whether research findings apply to you.

### Data, information, evidence
- **Data:** raw facts and figures (a list of monthly sick days).
- **Information:** data that has been organized so it means something (average sick days per department).
- **Evidence:** information that is used to judge whether a claim is true (sick days rose 40% only in the department with the new schedule).

### Decide what to acquire
Link it to the question: *What would show whether the problem exists, how big it is, and what causes it?* Ask for data that could **support or contradict** your view.

### Types of organizational evidence
| Type | Examples |
| --- | --- |
| **Operational data** | Sales, output, defects, complaints |
| **Metrics and KPIs** | Turnover rate, customer satisfaction, cost per hire |
| **Benchmarks** | Comparison with similar organizations |
| **Survey and HR data** | Engagement, absence, performance ratings |

**Descriptive** measures summarize what you have (the mean, a percentage). **Inferential** measures use a sample to draw conclusions about a larger group (a confidence interval).
`,
          q: [
            mc('"Average sick days per employee rose from 4 to 6 in the call centre." In terms of data, information and evidence, what is this statement?', 'Information, because data has been organized to give it meaning', 'Raw numbers have been summarized, but it has not yet been used to judge a claim.', [
              ['Raw data', 'Raw data would be the individual records.'],
              ['Evidence of the cause of the rise', 'It shows a change, not its cause.'],
            ]),
            mc('Which is a descriptive measure?', 'The mean employee tenure in the sample', 'It summarizes the sample itself.', [
              ['A 95% confidence interval for tenure in all similar firms', 'This infers something about a wider group.'],
              ['A prediction of next year\'s turnover for the whole industry', 'This is an inference beyond the data.'],
            ]),
          ],
        },
        {
          t: 'Where to find organizational evidence, and common barriers',
          s: 'Sources, big data and obstacles to getting data.',
          md: `
## Where is it kept?

Typical places:
- **HR systems** (hiring, turnover, absence, pay)
- **Finance and sales systems**
- **Customer relationship systems** and complaint logs
- **Operations and quality records**
- **Surveys** and exit interviews
- **Meeting notes and reports**

Ask who *owns* each data set, who can give access, and how often it is updated.

### "Normal" data vs. Big Data
**Big Data** means very large, fast-growing and varied data sets (web logs, sensor data, social media). They need special tools to store and analyze. For most management questions, **ordinary data** of a few hundred or thousand records is enough. More data is not automatically better evidence: quality and relevance matter more than quantity.

### Barriers
- Data is **scattered** across systems that do not connect
- **Privacy and legal limits** (such as data protection rules)
- **Poor quality** or missing records
- **Resistance**: people fear what the data may show
- Data is not collected for the question you have
- Lack of **time or skills** to analyze it

Plan for these early: ask for access, agree on privacy safeguards (such as anonymizing), and be open about the purpose.
`,
          q: [
            mc('A manager says: "We have 10 million web-log records, so our evidence about why employees leave must be very strong." What is the best response?', 'Size is not the same as quality: check whether the data is relevant to the question and accurate', 'Large data sets can still be irrelevant or inaccurate.', [
              ['Big Data is always better evidence', 'Quantity does not guarantee relevance or accuracy.'],
              ['Web logs are always inaccurate', 'They may be useful, but only if they relate to the question.'],
            ]),
            mc('Which is a typical barrier to acquiring organizational data?', 'Data kept in separate systems that are not connected', 'Fragmented systems make combining data hard.', [
              ['Having too many people who want to help', 'This is not a typical barrier.'],
              ['Data that is too accurate', 'Accuracy is not a barrier.'],
            ]),
          ],
        },
      ],
    },
    9: {
      summary: 'Judge whether organizational data and metrics can be trusted and interpreted.',
      sessions: [
        {
          t: 'Is the data accurate and relevant?',
          s: 'Logic models, data quality, measurement error and missing context.',
          md: `
## Appraising organizational data

### Was a logic model used?
A **logic model** describes the chain from actions to results: *inputs → activities → outputs → outcomes*. It shows what data would be needed at each step. Without it, people often collect whatever is easy rather than what is relevant.

### Questions to ask
- **Relevance:** does the data relate to the problem and the people in question?
- **Collection and processing:** who entered the data, how, and what could go wrong (manual entry, changing definitions, missing records, merged systems)?
- **Missing context:** a turnover figure of 20% means little without knowing the *industry norm, previous years* or *which groups*.
- **Measurement error:** is the measure accurate? Self-reports, ratings from biased managers and imprecise counts all introduce error.
- **Small number problem:** with few cases, figures swing wildly. One resignation out of five staff makes a **20%** turnover.

> **Rule of thumb:** before trusting a number, ask "How was this measured, by whom, over what period, for whom, and compared with what?"
`,
          q: [
            mc('A team of 5 has one resignation, so the report says "20% turnover, double the company average". What is the main issue?', 'A small number problem: one person changes the percentage dramatically', 'With few cases, percentages are unstable.', [
              ['Range restriction', 'Range restriction concerns a limited spread of scores.'],
              ['An outlier in the correlation', 'No correlation is being reported.'],
            ]),
            mc('Why is a logic model useful when collecting organizational evidence?', 'It shows the chain from actions to outcomes, so you know what data to collect at each step', 'It guides which evidence is relevant.', [
              ['It guarantees that the data is free of error', 'It does not remove errors.'],
              ['It replaces the need for any analysis', 'It supports analysis; it does not replace it.'],
            ]),
          ],
        },
        {
          t: 'Reading metrics, graphs, correlations and outliers',
          s: 'Standard deviation, valid graphs, correlation, regression, outliers and range restriction.',
          md: `
## Making sense of numbers

### Is the metric a good summary?
A **mean** can hide a lot. Look at the **standard deviation (SD)**, which shows how spread out the values are. Two teams may both average 70 points, but with SD = 2 everyone is close to 70, and with SD = 20 scores vary widely. In roughly bell-shaped data, about **68%** of values lie within one SD of the mean and **95%** within two. The **median** is better than the mean when there are extreme values.

### Check the graph
Misleading graphs have: a **truncated axis** (starting at 90 not 0 for bars), uneven scales, 3D effects, missing labels or cherry-picked time periods.

### Correlation and regression
A **correlation coefficient (r)** goes from −1 to +1; it describes the strength and direction of a *linear* relationship. A **regression coefficient** says how much the outcome changes when the predictor changes by one unit (for example, +2.5 sales for each extra training hour). Ask whether the size is **practically relevant**, and remember that correlation does not prove causation.

### Distortions
- **Outliers:** one extreme value can create or hide a correlation.
- **Range restriction:** if only a narrow range is included (for example, only people who were hired), the relationship looks weaker than it is.

Also check whether a **confidence interval** is narrow enough to be useful.
`,
          q: [
            mc('Two teams both have a mean customer score of 70. Team A has SD = 2 and team B has SD = 20. What does this show?', 'Team B\'s scores are much more spread out than team A\'s', 'A larger SD means more variation around the mean.', [
              ['The teams perform identically', 'Equal means do not mean equal distributions.'],
              ['Team A has a lower mean', 'Both means are 70.'],
            ]),
            mc('A study of only the top-scoring applicants who were hired finds almost no relation between test score and job performance. Which issue could explain this?', 'Range restriction: low scorers were never hired, so the range of scores is narrow', 'Limited variation in scores weakens the observed correlation.', [
              ['A truncated graph axis', 'The issue is in the sample, not a graph.'],
              ['A small number problem in the mean', 'The problem is the limited range of test scores.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Organizational evidence',
    tasks: [
      mc('"Monthly absence by employee" is stored in an HR system. Which term fits it best?', 'Data', 'It is raw facts before being summarized.', [
        ['Evidence', 'Evidence is information used to judge a claim.'],
        ['A benchmark', 'A benchmark is a comparison with others.'],
        ['A KPI', 'A KPI is a key performance metric derived from data.'],
      ]),
      mc('Which is the best example of a benchmark?', 'Comparing our 12% turnover with the industry average of 9%', 'Benchmarks compare our results with a reference group.', [
        ['The list of everyone who left last year', 'This is raw data.'],
        ['A forecast of next year\'s hires', 'This is a prediction.'],
        ['A survey question about satisfaction', 'This is a measure, not a comparison.'],
      ]),
      mc('Which is a good reason NOT to depend on Big Data for a question about why employees in one department leave?', 'Quality, relevance and context matter more than size for this question', 'A small, relevant, accurate data set can be better than a huge irrelevant one.', [
        ['Big Data cannot be stored', 'It can be stored with the right tools.'],
        ['Big Data is always illegal to use', 'It is not always illegal.'],
        ['Small data sets are always more accurate', 'Accuracy depends on how data was collected.'],
      ]),
      mc('A report says "Satisfaction rose 30% after the new office layout" but does not mention what satisfaction was before, which employees were included, or how it was measured. What is missing?', 'Contextual information needed to interpret the figure', 'Without baseline, group and method you cannot judge the claim.', [
        ['A larger sample', 'We do not yet know the sample size.'],
        ['A confidence interval only', 'More context is needed, not only an interval.'],
        ['A bar chart', 'A chart would not give the missing information.'],
      ]),
      mc('A line chart of monthly sales starts the vertical axis at 98 and ends at 101, making a rise of 1% look dramatic. What is the problem?', 'The axis scale exaggerates a small change', 'A narrow axis makes small differences look large.', [
        ['Sales cannot be shown in a line chart', 'Line charts are fine for trends.'],
        ['The chart shows too many months', 'The issue is the vertical scale.'],
        ['It shows a negative correlation', 'No correlation is described.'],
      ]),
      mc('A regression shows each extra training hour is linked to +2.5 sales per employee per month (95% CI 0.1 to 4.9). What should you conclude?', 'The estimated effect is uncertain: it may be negligible or large, and it does not by itself prove training causes sales', 'The CI is wide, and regression does not prove causation.', [
        ['Training definitely adds 2.5 sales', 'The CI shows uncertainty around 2.5.'],
        ['Training reduces sales', 'The estimate is positive.'],
        ['The result is precise', 'The CI is wide.'],
      ]),
      mc('One employee sold 5,000 units while the rest sold 100 to 300. What effect might this have on the mean?', 'It would pull the mean up, so the median may be a better summary', 'An outlier distorts the mean.', [
        ['It would lower the mean', 'A very high value raises the mean.'],
        ['It would not affect the mean', 'Extreme values affect the mean.'],
        ['It would make the SD smaller', 'An outlier increases the SD.'],
      ]),
      tf('A strong correlation between two organizational metrics shows that one causes the other.', false, 'Correlation alone does not show causation. A third factor or reverse causation could explain it.', 'Correct. Correlation does not prove that one variable causes the other.'),
    ],
  },
};
