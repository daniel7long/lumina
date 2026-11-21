import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how data should be collected: how to sample without bias, and how to design an experiment that can show cause and effect.',
  modules: {
    6: {
      summary: 'Sampling methods and sources of bias.',
      sessions: [{
        t: 'Sampling and bias',
        s: 'Types of samples and what can go wrong.',
        md: `
## Sampling methods
- **Simple random sample (SRS):** every group of n individuals has an equal chance of being chosen.
- **Stratified random sample:** divide the population into similar groups (**strata**), then take an SRS from **each** stratum.
- **Cluster sample:** divide the population into groups (**clusters**), randomly choose some clusters and survey **everyone** in them.
- **Systematic sample:** choose every kth individual, after a random start.
- **Convenience sample:** whoever is easy to reach. This is not random and is likely to be biased.

## Bias
**Bias** is a systematic tendency to over- or under-estimate the true value.
- **Undercoverage:** some groups have little chance of being included.
- **Nonresponse:** chosen people do not respond.
- **Voluntary response:** people choose to respond (call-in polls), which attracts strong opinions.
- **Response bias:** answers are untruthful or influenced by **question wording** (leading questions) or by the interviewer.

A larger sample reduces **sampling variability**, but it does **not** fix bias.
`,
        q: [
          mc('A school lists students by grade and randomly selects 20 students from each grade. What kind of sample is this?', 'Stratified random sample', 'The grades are strata, and an SRS is taken within each.', [
            ['Cluster sample', 'In a cluster sample, entire randomly chosen groups are surveyed.'],
            ['Simple random sample', 'An SRS would not guarantee 20 students from each grade.'],
            ['Convenience sample', 'The selection here is random, not based on who is easy to reach.'],
          ]),
          mc('A radio station asks listeners to call in to vote on a local issue. What problem is most likely?', 'Voluntary response bias', 'People with strong opinions are more likely to call.', [
            ['Undercoverage of the population', 'The main issue here is self-selection, not a missing group in a list.'],
            ['No bias, because the sample is large', 'A large biased sample is still biased.'],
            ['Stratification error', 'No strata were used.'],
          ]),
        ],
      }],
    },
    7: {
      summary: 'Experimental design and cause and effect.',
      sessions: [{
        t: 'Experiments',
        s: 'Treatments, randomization, control, blinding and blocking.',
        md: `
## Observational studies and experiments
- In an **observational study**, researchers observe without imposing treatments. They can show association but **not causation**, because of possible **confounding** variables.
- In an **experiment**, researchers **assign treatments** to experimental units. A well-designed **randomized** experiment can support **cause-and-effect** conclusions.

## Key ideas
- **Explanatory variable** (the factor) and **response variable** (the outcome).
- **Treatments:** the conditions imposed. **Experimental units:** who or what receives them.
- **Random assignment:** creates groups that are similar before treatment, so differences afterwards can be attributed to the treatment.
- **Control group:** a comparison group, often receiving a **placebo**.
- **Blinding:** in a **double-blind** study, neither the subjects nor those measuring the response know who got which treatment.
- **Replication:** use enough units to reduce chance variation.
- **Blocking:** group similar units first (for example by age), then randomize within blocks. A **matched-pairs** design is a block of size two.

> **Random sampling** lets you generalize to a population. **Random assignment** lets you draw a causal conclusion. Good studies may use both.
`,
        q: [
          mc('Why do researchers randomly assign subjects to treatment groups?', 'To make the groups similar before treatment, so differences can be attributed to the treatment', 'Randomization balances other variables, known and unknown, across groups.', [
            ['To guarantee that every subject receives the best treatment', 'Random assignment does not make treatments better; it makes groups comparable.'],
            ['To remove the need for a control group', 'A control group is still needed for comparison.'],
            ['To make the sample representative of the population', 'That is the role of random sampling, not random assignment.'],
          ]),
          mc('In a double-blind experiment,', 'neither the subjects nor the people evaluating the response know who received which treatment', 'This prevents expectations from influencing the results.', [
            ['only the subjects are unaware of their treatment', 'That is a single-blind study.'],
            ['the researchers choose the groups without randomization', 'Blinding is about who knows the treatment, not how groups are formed.'],
            ['two treatments are given to each subject', 'That is a crossover or matched-pairs design.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Collecting data',
    tasks: [
      mc('A pollster lists 1,000 registered voters and selects every 10th name after a random start. What kind of sample is this?', 'A systematic sample', 'Choosing every kth individual after a random start is systematic.', [
        ['A stratified sample', 'No strata were formed.'],
        ['A cluster sample', 'No groups were chosen and surveyed completely.'],
        ['A convenience sample', 'The selection follows a random start and a fixed rule.'],
      ]),
      mc('A researcher randomly selects 5 classrooms in a school and surveys every student in those classrooms. What kind of sample is this?', 'A cluster sample', 'Classrooms are clusters and all students in the chosen clusters are surveyed.', [
        ['A stratified sample', 'In a stratified sample, an SRS is taken from every group.'],
        ['A simple random sample', 'Students are not chosen individually.'],
        ['A systematic sample', 'No rule of "every kth" was used.'],
      ]),
      mc('Which survey question is least likely to be biased?', '"How many hours did you sleep last night?"', 'It is neutral and specific.', [
        ['"Don’t you agree that students need more sleep?"', 'This leading question hints at the desired answer.'],
        ['"Do you sleep too little like most lazy students?"', 'This is loaded and insulting.'],
        ['"Wouldn’t a later start time be great for everyone?"', 'This is leading.'],
      ]),
      mc('A study finds that students who eat breakfast have higher grades. The researchers only observed the students’ habits. What can they conclude?', 'There is an association, but eating breakfast cannot be said to cause higher grades', 'An observational study can have confounding variables, such as family support.', [
        ['Eating breakfast causes higher grades', 'Cause and effect requires a randomized experiment.'],
        ['Higher grades cause students to eat breakfast', 'Cause cannot be established in either direction.'],
        ['There is no association', 'The study found an association.'],
      ]),
      mc('Which design allows a cause-and-effect conclusion about a new teaching method?', 'Randomly assigning students to the new method or the old method and comparing results', 'Random assignment makes the groups comparable.', [
        ['Letting students choose the method they prefer', 'Self-selected groups may differ in ways other than the method.'],
        ['Surveying teachers who use each method', 'This is observational.'],
        ['Comparing this year’s class with last year’s class', 'The classes may differ for many other reasons.'],
      ]),
      tf('Random sampling allows results to be generalized to a population, while random assignment allows cause-and-effect conclusions.', true, 'Each does a different job.', 'Correct. Random sampling concerns who is studied; random assignment concerns who gets which treatment.'),
    ],
  },
};
