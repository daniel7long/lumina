import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how data should be collected: representative samples, well-designed surveys, and experiments that can support causal conclusions.',
  modules: {
    6: {
      summary: 'Choose and critique sampling methods, and read media claims about polls with care.',
      sessions: [
        {
          t: 'Sampling methods and bias',
          s: 'Random and non-random samples, and what can go wrong.',
          md: `
## Sampling

We want a sample that **represents** the population. Bias arises when some members are more likely to be chosen than others.

### Probability sampling methods
| Method | How it works |
| --- | --- |
| **Simple random sample (SRS)** | Every group of n members is equally likely to be chosen |
| **Stratified** | Split the population into strata, then take an SRS from each |
| **Cluster** | Choose whole groups (such as classes) at random and survey everyone in them |
| **Systematic** | Pick every k-th member after a random start |

### Biased methods
- **Convenience sample:** whoever is easy to reach.
- **Voluntary response:** people choose to respond (online polls, call-in shows), which attracts strong opinions.

### Sources of bias
- **Sampling bias:** some groups are left out (a phone poll that excludes people without phones).
- **Non-response bias:** the people who refuse are different from those who respond.
- **Response bias:** answers are untruthful or influenced by wording.

A **larger** sample reduces random variation but does **not** fix bias. A biased sample of one million can be worse than a random sample of 1,000.

### Reading the media
Ask: *Who was sampled? How? How many responded? What exact question was asked? Who paid for it?*
`,
          q: [
            mc('A radio show asks listeners to call in with their opinion on a new tax. What type of sample is this?', 'Voluntary response, which is likely to be biased', 'People with strong opinions are more likely to respond.', [
              ['Simple random sample', 'Listeners self-select; it is not random.'],
              ['Stratified sample', 'There is no division into strata with random selection.'],
            ]),
            mc('A school divides students into grades 9, 10, 11 and 12, then randomly selects 25 from each grade. What sampling method is used?', 'Stratified sampling', 'Each grade is a stratum with its own random sample.', [
              ['Cluster sampling', 'In cluster sampling whole groups are chosen, not individuals from each group.'],
              ['Convenience sampling', 'The choice within each grade is random.'],
            ]),
          ],
        },
      ],
    },
    7: {
      summary: 'Design surveys and studies, and understand what each design can conclude.',
      sessions: [
        {
          t: 'Survey design, observational studies and experiments',
          s: 'Question wording, control, randomization and blinding.',
          md: `
## Designing studies

### Survey features that affect accuracy
- **Question wording:** "Do you support helping the poor?" gets more yes than "Do you support higher taxes for welfare?"
- **Order** of questions and answer options
- **Mode** (phone, online, in person) and **non-response**

### Two kinds of study
| | Observational study | Experiment |
| --- | --- | --- |
| Researcher assigns the treatment? | No | **Yes** |
| Can show cause and effect? | No (lurking variables) | **Yes**, if well designed |

### Principles of a good experiment
- **Control:** include a comparison (control) group, perhaps getting a **placebo**.
- **Randomization:** assign subjects to groups by chance, so groups are similar on average, including on unmeasured variables.
- **Blinding:** in a **single-blind** study subjects do not know their treatment; in a **double-blind** study, neither subjects nor those measuring outcomes know.
- **Replication:** use enough subjects to see through chance variation.

A **randomized comparative experiment** is the gold standard for causation. Further features include **matched pairs** (compare similar subjects, or the same subject twice) and **blocking** (grouping similar subjects before randomizing).

### Conclusions allowed
Random sampling lets us **generalize** to the population; random assignment lets us infer **causation**.
`,
          q: [
            mc('Researchers let 200 volunteers choose whether to take a vitamin or not and then compare their health. What kind of study is this?', 'An observational study', 'The researchers did not assign the treatment.', [
              ['A randomized experiment', 'Subjects chose; there was no random assignment.'],
              ['A double-blind study', 'Blinding does not apply when subjects choose.'],
            ]),
            mc('What is the main purpose of random assignment in an experiment?', 'To make the groups similar on average, so differences in outcome can be attributed to the treatment', 'Randomization balances lurking variables.', [
              ['To make the sample representative of the population', 'That is the purpose of random sampling.'],
              ['To make sure subjects know their treatment', 'That would remove blinding.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Producing data',
    tasks: [
      mc('A company wants opinions from its 5,000 employees. It randomly picks 12 of its 60 offices and surveys all employees in them. What sampling method is this?', 'Cluster sampling', 'Whole groups (offices) are chosen at random.', [
        ['Stratified sampling', 'In stratified sampling you sample from every stratum.'],
        ['Voluntary response', 'The offices are chosen at random.'],
        ['Systematic sampling', 'It is not an every-k-th selection.'],
      ]),
      mc('Which of these cannot be fixed by increasing the sample size?', 'Bias from a voluntary-response method', 'A larger biased sample is still biased.', [
        ['Random sampling variability', 'More data reduces random variability.'],
        ['A wide margin of error', 'A larger sample narrows it.'],
        ['Small-sample uncertainty', 'A larger sample reduces it.'],
      ]),
      mc('A news site reports "85% of 20,000 readers who voted in our online poll oppose the law." What is the best critique?', 'It is a voluntary-response sample, so it may not represent all people, despite its large size', 'Large size does not remove bias.', [
        ['The sample is too large', 'Size is not the issue.'],
        ['Online polls are always accurate', 'They can be biased.'],
        ['85% is too high to be true', 'The issue is bias, not the value itself.'],
      ]),
      mc('Which change would make a survey question LESS biased?', '"Do you support or oppose the proposed city parking fee?"', 'It is neutral and presents both options.', [
        ['"Do you agree that the unfair parking fee should be scrapped?"', 'It uses loaded wording.'],
        ['"Don\'t you think the fee is a good idea?"', 'It leads the respondent.'],
        ['"How much do you hate the fee?"', 'It presumes a negative view.'],
      ]),
      mc('A study randomly assigns 100 patients to a new drug or a placebo, and neither the patients nor the doctors measuring outcomes know who got which. How is it best described?', 'A randomized, double-blind, placebo-controlled experiment', 'It has random assignment, a placebo control and double blinding.', [
        ['An observational study', 'The researchers assigned the treatment.'],
        ['A single-blind observational study', 'It is an experiment and both parties are blind.'],
        ['A cluster sample', 'This describes sampling, not the design.'],
      ]),
      mc('A random sample of residents shows that people who drink more coffee have higher blood pressure. What can be concluded?', 'There is an association that can be generalized to the population, but it does not show that coffee causes the difference', 'Random sampling supports generalization; there was no random assignment.', [
        ['Coffee causes high blood pressure in the population', 'This is an observational study.'],
        ['The result applies to no one', 'The sample was random, so it can be generalized.'],
        ['Blood pressure causes coffee drinking', 'This is also a causal claim.'],
      ]),
      tf('Random assignment to groups allows the researcher to draw conclusions about cause and effect.', true, 'Correct: random assignment balances other variables across groups, so differences can be attributed to the treatment.', 'Not quite. Random assignment is exactly what supports causal conclusions.'),
    ],
  },
};
