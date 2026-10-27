import { mc, tf } from '../builder.js';

export default {
  summary: 'Find scientific research that answers your question, understand how science works, and judge how far a study can be trusted.',
  modules: {
    5: {
      summary: 'Search research databases efficiently and narrow results to the most relevant, trustworthy studies.',
      sessions: [
        {
          t: 'Choosing databases and search terms (PICOC)',
          s: 'Where to look and which terms to use.',
          md: `
## Where to look

Use a database that fits the field. Common choices for management questions are **ABI/INFORM**, **Business Source Premier**, **PsycINFO** (psychology and organizational behavior) and **Google Scholar** (broad, but less selective). Check whether a journal is **peer reviewed**: the journal website or a database filter normally says so. In peer review, independent experts assess a paper before it is published.

## PICOC: turn your question into search terms

| Letter | Meaning | Example |
| --- | --- | --- |
| **P** | Population | Sales staff |
| **I** | Intervention | Bonus scheme |
| **C** | Comparison | No bonus |
| **O** | Outcome | Staff turnover |
| **C** | Context | Retail |

Not every search needs all five. Start with the **most important terms** (usually P, I and O).

### Find alternative terms
Researchers use different words for one idea: *bonus*, *incentive*, *pay for performance*. Find them by:
- searching the Internet for synonyms and related terms
- using **Google Scholar** to see which terms academic papers use, including broader ones
- reading the keywords of a relevant paper

**Test your terms.** Try each term and see which gives the most relevant results, then keep the best.
`,
          q: [
            mc('You want to know whether an incentive scheme reduces turnover among nurses in hospitals. Which PICOC element is "nurses"?', 'Population', 'The population is the group that the question is about.', [
              ['Intervention', 'The intervention is the incentive scheme.'],
              ['Outcome', 'The outcome is turnover.'],
            ]),
            mc('Why should you search for alternative terms such as "incentive" and "pay for performance"?', 'Different authors use different words for the same idea, so one term would miss relevant studies', 'Synonyms widen the search so that relevant studies are not missed.', [
              ['Because databases only accept synonyms', 'This is untrue. Databases accept any term.'],
              ['Because it makes the list of results shorter', 'Extra terms usually add results; you then filter them.'],
            ]),
          ],
        },
        {
          t: 'Building and refining a search',
          s: 'Boolean operators, search history, filters and limits.',
          md: `
## Boolean operators

| Operator | Effect | Example |
| --- | --- | --- |
| **AND** | Both terms must appear (fewer results) | bonus AND turnover |
| **OR** | Either term may appear (more results) | bonus OR incentive |
| **NOT** | Excludes a term (use carefully) | turnover NOT customer |

Use **brackets** to combine: *(bonus OR incentive OR "pay for performance") AND turnover*. Use **quotation marks** for exact phrases and an asterisk for word endings (*incentiv\\** finds incentive, incentives, incentivize).

## Use the search history
Most databases save each search with a number. Run one search per idea, for example **S1** (intervention terms with OR) and **S2** (outcome terms with OR), then combine with **S1 AND S2**. This is quicker to adjust than one long query.

## Narrow the results
- Add another **PICOC term** (for example the context).
- Apply **methodological filters** to find meta-analyses, or controlled and longitudinal studies.
- **Limit the date range** if the field has changed or older studies are out of date.
- Limit to **peer-reviewed** journals.

If you get too few results, remove a term or add synonyms with OR. If you get too many, add a term with AND or apply filters.
`,
          q: [
            mc('You search "bonus AND turnover" and get only 3 results. What is the best next step?', 'Add synonyms with OR, for example (bonus OR incentive) AND turnover', 'OR widens the search so more relevant studies appear.', [
              ['Add another term with AND', 'AND narrows the search further, which would give even fewer results.'],
              ['Use NOT to remove more words', 'NOT would exclude results, giving fewer.'],
            ]),
            mc('What is the main advantage of the search history function?', 'You can run separate searches for each idea and combine them, which is easy to adjust', 'Combining numbered searches (S1 AND S2) is easier than editing one long query.', [
              ['It automatically judges the quality of the studies', 'Search history stores queries; it does not appraise studies.'],
              ['It removes duplicates from your reference list', 'This is not its purpose.'],
            ]),
          ],
        },
      ],
    },
    6: {
      summary: 'Understand the scientific method and the main reasons why a study\'s results could be wrong.',
      sessions: [
        {
          t: 'Science, pseudo-science and reading a paper',
          s: 'The scientific method, red flags and an efficient way to read research.',
          md: `
## What makes something scientific?

Research follows the **scientific method**: it asks a clear question, states a hypothesis that could be proven wrong, collects data in a systematic way, analyses it transparently and is open to **peer review and replication**.

### Recognizing pseudo-science
Warning signs:
- claims that **cannot be tested or disproved**
- reliance on **testimonials and anecdotes** instead of data
- no peer review, or no way for others to check or repeat it
- **confirming evidence only**; contrary evidence is ignored
- impressive jargon but vague definitions
- claims of a **miracle** or a simple answer to a complex problem

## Reading a research paper efficiently
You do not need to read every word. A good order:
1. **Abstract**: question, method and main finding
2. **Introduction** (last paragraph): the research question or hypothesis
3. **Method**: who was studied, what was done, how outcomes were measured
4. **Results**: the main numbers
5. **Discussion**: the authors' interpretation and **limitations**

Ask: *Is it a quantitative or a qualitative study?* **Quantitative** research measures and uses numbers to test relationships. **Qualitative** research explores meaning and experience in words (interviews, observation). Both can be valuable for different questions.
`,
          q: [
            mc('Which is a warning sign of pseudo-science?', 'A claim that is phrased so that no evidence could ever disprove it', 'Scientific claims must be testable and capable of being shown wrong.', [
              ['The results have been replicated by independent teams', 'Replication is a sign of good science.'],
              ['The authors describe the limitations of their study', 'Being open about limits is good practice.'],
            ]),
            mc('Which describes qualitative research?', 'It explores meanings and experience, for example through interviews or observation', 'Qualitative research uses words and context rather than only numbers.', [
              ['It only uses statistical tests on numerical data', 'That describes quantitative research.'],
              ['It cannot be peer reviewed', 'Qualitative studies are peer reviewed like others.'],
            ]),
          ],
        },
        {
          t: 'Why results can mislead: bias, confounders, placebo and moderators',
          s: 'The main threats to a study\'s conclusions.',
          md: `
## Threats to the trustworthiness of a study

### Methodological bias
A **bias** is a systematic error. Examples:
- **Selection bias:** the groups differ before the intervention (for example, volunteers vs. others).
- **Measurement bias:** the outcome is measured differently or inaccurately for different groups.
- **Attrition:** many participants drop out, and those who remain are different.
- **Observer or expectation bias:** people who know the hypothesis see what they expect.

### Confounders
A **confounder** is a third factor linked to both the supposed cause and the outcome. Example: companies with training programmes show higher profits, but they may also be larger and better managed; size and quality of management are confounders.

### Placebo effect
People may improve **because they believe they are being helped**. Controlled studies often use a control group that gets a placebo, or blinding so participants and researchers do not know who gets what.

### Moderators and mediators
- A **moderator** changes the *strength* of a relationship (feedback works better for novices than for experts).
- A **mediator** explains *how* an effect occurs (training raises skill, and skill raises performance).

### Statistical significance is not practical relevance
A result can be "statistically significant" yet so small that it matters little in practice, especially in very large samples. Always ask **how big** the effect is.
`,
          q: [
            mc('Firms that offer yoga classes have lower absenteeism, but they are also much wealthier and have better working conditions. What are wealth and working conditions here?', 'Possible confounders', 'They are related to both yoga classes and absenteeism, so they may explain the link.', [
              ['Mediators', 'A mediator would be the mechanism through which yoga reduces absenteeism.'],
              ['Placebo effects', 'A placebo effect concerns belief about receiving a treatment.'],
            ]),
            tf('If a result is statistically significant, it must also be important in practice.', false, 'Not necessarily: with large samples a tiny, unimportant effect can be significant. Check the size of the effect.', 'Correct. Significance does not show the effect is large or practically relevant.'),
          ],
        },
      ],
    },
    7: {
      summary: 'Judge the design, effect size, precision and overall trustworthiness of a study.',
      sessions: [
        {
          t: 'Research designs and the question being asked',
          s: 'Matching design to question and grading methodological appropriateness.',
          md: `
## Does the design fit the question?

First, what kind of question is it?
- A **cause-and-effect** question: *Does X lead to Y?* (Does coaching improve performance?)
- A **non-effect** question: prevalence, relationship, experience, or process (How common is burnout? What do staff think?).

For cause-and-effect questions, designs differ in how well they rule out other explanations.

| Design | Description | Strength for causal questions |
| --- | --- | --- |
| **Randomized controlled trial** | People are randomly assigned to groups | Highest |
| **Controlled before-and-after (quasi-experiment)** | Compare a group before and after with a similar group that did not get the intervention | High to medium |
| **Cohort / longitudinal** | Follow groups over time | Medium |
| **Case-control** | Compare people with and without an outcome, looking back | Lower |
| **Cross-sectional survey** | One snapshot | Low (shows association only) |
| **Case study / anecdote** | One or few cases | Lowest |

A **systematic review or meta-analysis** combines many studies and is usually more trustworthy than a single one, if the studies it includes are good.

### Methodological appropriateness
A design is *appropriate* when it can answer the question. A cross-sectional survey can show that two things go together, but cannot show that one *causes* the other.

### Methodological quality
Within a design, ask how well it was carried out: sample size and representativeness, randomization, blinding, drop-out, reliable measures.

> **Grading:** trustworthiness depends on both appropriateness (the right design) and quality (a well-executed study).
`,
          q: [
            mc('Which question is a cause-and-effect question?', 'Does a mentoring programme increase the promotion rate of junior staff?', 'It asks whether one thing leads to another.', [
              ['What proportion of staff are currently mentored?', 'This asks how common something is.'],
              ['How do staff experience mentoring?', 'This is a question about experience.'],
            ]),
            mc('A cross-sectional survey finds that employees who exercise report higher job performance. What can you conclude?', 'The two are associated, but the survey alone cannot show that exercise causes better performance', 'A snapshot cannot rule out confounders or reverse causation.', [
              ['Exercise improves performance', 'That is a causal claim the design cannot support.'],
              ['Performance improves exercise', 'That would also be a causal claim, and is not shown either.'],
            ]),
          ],
        },
        {
          t: 'Effect size, confidence intervals and reliability',
          s: 'How big is the effect, how precise is it, and was it measured well?',
          md: `
## How big is the effect?

An **effect size** shows the *size* of a difference or relationship. Common ones:
- **Cohen's d:** the difference between two group means in standard deviation units. By convention, about **0.2 is small, 0.5 medium, 0.8 large**.
- **Correlation (r):** about **0.1 small, 0.3 medium, 0.5 large**.

Always ask whether the effect is large enough to matter *in your situation* (the cost, the context).

## How precise is it?
A **confidence interval (CI)** gives a range of plausible values. A **narrow** interval means a precise estimate; a **wide** one means high uncertainty, usually from a small sample. If a 95% CI for d runs from **0.05 to 1.10**, the effect could be trivial or very large; you should be careful.

## Was the outcome measured reliably?
**Reliability** means the measure gives consistent results: the same answer from the same person under the same conditions (test-retest) or from different raters (inter-rater). Unreliable measures add noise and hide real effects. A single self-rated question is often less reliable than a validated scale.

## Summarize the study
After reading, write a short summary: the **question**, the **design**, the **main finding with effect size and CI**, the **main weaknesses**, and your overall judgement of **trustworthiness** (high, medium or low) for your question.
`,
          q: [
            mc('A study reports d = 0.80 between a training group and a control group. How would this normally be described?', 'A large effect', 'By convention 0.8 is large.', [
              ['A small effect', 'A small effect is around 0.2.'],
              ['No effect', 'A d of 0 would mean no difference.'],
            ]),
            mc('Study A and study B both find a positive effect. A has a 95% CI of 0.40 to 0.50, B of 0.05 to 1.10. Which estimate is more precise?', 'Study A, because its interval is narrower', 'A narrow interval indicates a more precise estimate.', [
              ['Study B, because its interval is wider', 'A wider interval shows more uncertainty, not more precision.'],
              ['They are equally precise', 'The intervals differ greatly in width.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Scientific evidence',
    tasks: [
      mc('For the question "Does a four-day week reduce burnout in software teams?", which is the Outcome in PICOC?', 'Burnout', 'The outcome is what you want to change or measure.', [
        ['Software teams', 'This is the population.'],
        ['Four-day week', 'This is the intervention.'],
        ['No change in schedule', 'This is the comparison.'],
      ]),
      mc('Your search "(bonus OR incentive) AND turnover" returns 4,800 results. Which step is most likely to give a manageable list of relevant studies?', 'Add the context term with AND and apply a filter for controlled studies or meta-analyses', 'Adding terms and filters narrows the result.', [
        ['Replace AND with OR', 'This would increase the number of results.'],
        ['Remove the outcome term', 'Fewer terms would broaden the search.'],
        ['Add more synonyms with OR', 'This would broaden the search.'],
      ]),
      mc('Which is the best evidence that a journal is peer reviewed?', 'The journal\'s website or database record states that its articles are reviewed by independent experts', 'Check the journal\'s information or the database filter.', [
        ['It has a professional-looking website', 'Appearance says nothing about review.'],
        ['It has been cited in a newspaper', 'Media coverage does not show peer review.'],
        ['It is published by a consulting firm', 'Publisher type does not prove review.'],
      ]),
      mc('A consultant says: "Our method is revolutionary, works for every company and has never failed. Our clients tell us so." Which signs of pseudo-science appear?', 'Testimonials instead of data, and a claim that cannot fail', 'A claim that could never be shown wrong and rests on testimonials is a warning sign.', [
        ['Use of a control group and independent replication', 'These are signs of good science and are not mentioned.'],
        ['A stated limitation of the method', 'No limitation is stated.'],
        ['Peer review in a scientific journal', 'Nothing is said about review.'],
      ]),
      mc('A study of 40,000 employees finds that a mindfulness course raises engagement by 0.02 points on a 7-point scale (p < 0.001). What is the best interpretation?', 'The effect is statistically significant but probably too small to matter in practice', 'With a very large sample, tiny effects can be significant.', [
        ['The course has a large effect', 'An increase of 0.02 points is very small.'],
        ['The result is not significant', 'p < 0.001 is significant.'],
        ['The study proves that mindfulness courses work', 'A tiny effect does not prove a useful impact.'],
      ]),
      mc('Companies using an expensive HR software have higher productivity, but they are also larger and more profitable. Which is the most likely threat to a causal conclusion?', 'Confounding by company size and profitability', 'These factors may explain both software adoption and productivity.', [
        ['A placebo effect', 'A placebo effect concerns belief in treatment for individuals.'],
        ['A mediator', 'A mediator would explain how software affects productivity.'],
        ['Reliability of the measure', 'Nothing here points to a reliability issue.'],
      ]),
      mc('Which design is the most appropriate for the question "Does a coaching programme improve sales performance?"', 'A randomized controlled trial, with sales staff randomly assigned to coaching or no coaching', 'Random assignment best rules out other explanations.', [
        ['A single case study of one successful coach', 'One case cannot show cause and effect.'],
        ['A one-time survey asking people if they like coaching', 'Satisfaction does not show an effect on performance.'],
        ['A list of testimonials', 'Testimonials are weak evidence.'],
      ]),
      mc('A study reports r = 0.45 between job satisfaction and performance, 95% CI 0.38 to 0.52, N = 600. How would you describe it?', 'A medium-to-large association estimated with good precision', 'r around 0.3 to 0.5 is medium to large, and the interval is narrow.', [
        ['A negligible and imprecise association', 'The value is not negligible, and the CI is narrow.'],
        ['Proof that satisfaction causes performance', 'A correlation alone does not show causation.'],
        ['A negative association', 'The coefficient is positive.'],
      ]),
      tf('A narrow confidence interval means the estimate is precise, but it does not guarantee that the study had no bias.', true, 'Correct: a narrow interval reflects precision (usually from a large sample), but bias can still distort the result.', 'Not quite. Precision and bias are different: a precise estimate can still be systematically wrong.'),
    ],
  },
};
