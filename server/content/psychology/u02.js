import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how psychologists test ideas: the scientific method, hypotheses, and the strengths and limits of research designs.',
  modules: {
    3: {
      summary: 'The scientific method and testable hypotheses.',
      sessions: [
        {
          t: 'The scientific method and hypotheses',
          s: 'Five steps from question to conclusion.',
          md: `
## The scientific method

1. **Ask a question** based on observation or theory.
2. **Form a hypothesis**: a testable prediction.
3. **Test it** by collecting data in a planned way.
4. **Analyze** the data (statistics) and draw conclusions.
5. **Report and replicate**: share results so others can check and repeat them.

### A good hypothesis
- **Testable and falsifiable**: it could be proven wrong.
- Uses **operational definitions**: concepts defined by how they are measured (e.g. "stress" = score on a stress questionnaire).
- Distinguish the **conceptual** definition (what the idea means) from the **operational** one (how you measure it).

*Example:* "Students who sleep 8 hours score higher on a memory test than students who sleep 4 hours."

### Theories
A **theory** is a well-supported explanation that organizes many findings and generates new hypotheses. It is not a mere guess.

### Basic vs. applied research
Basic research seeks knowledge; applied research solves problems. Both use the same method.
`,
          q: [
            mc('Which hypothesis is most testable?', 'Students who sleep 8 hours score higher on a memory test than students who sleep 4 hours', 'It specifies measurable variables.', [
              ['Sleep is good for people', 'It is too vague to test.'],
              ['Dreams reveal our hidden wishes', 'It is hard to falsify.'],
            ]),
            mc('Defining "stress" as the score on a stress questionnaire is an example of', 'An operational definition', 'It defines a concept by how it is measured.', [
              ['A theory', 'A theory explains many findings.'],
              ['A conceptual definition', 'That states what the idea means.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Descriptive, correlational and experimental designs; validity and ethics.',
      sessions: [
        {
          t: 'Research designs and what they can show',
          s: 'Correlation, experiments and threats to validity.',
          md: `
## Research designs

### Descriptive
Naturalistic observation, case studies and surveys describe behavior but do not test cause.

### Correlational
Measures two variables and the strength (−1 to +1) of their relationship. It allows **prediction**, but **correlation does not show causation**: there might be a **third variable**, or the direction might be reversed.

### Experimental
The researcher **manipulates** an **independent variable (IV)**, measures the **dependent variable (DV)**, and uses **random assignment** to groups (experimental vs. control). Only experiments can support **cause-and-effect** conclusions.

A **quasi-experiment** compares existing groups (no random assignment), so causal conclusions are weaker.

### Threats to internal validity
- **Confounds**: other variables that differ between groups.
- **Placebo effect**: improvement from expectation.
- **Experimenter bias** and **demand characteristics**: handled by **double-blind** procedures.
- **Selection bias** and attrition.

### Ethics
**Informed consent**, minimal harm, confidentiality, **debriefing**, review by an ethics board (IRB).
`,
          q: [
            mc('A study finds that ice-cream sales and drowning rates are positively correlated. What is the best conclusion?', 'The relationship may be due to a third variable such as hot weather, so causation is not shown', 'Correlation does not establish cause.', [
              ['Ice cream causes drowning', 'There is no evidence for causation.'],
              ['Drowning causes ice-cream sales', 'The direction is also not shown.'],
            ]),
            mc('What feature allows an experiment to support cause-and-effect conclusions?', 'Manipulating the independent variable with random assignment', 'Randomization balances other variables.', [
              ['A large number of questions', 'Number of questions is unrelated.'],
              ['Observing people in natural settings', 'That is descriptive.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Methods',
    tasks: [
      mc('Which step of the scientific method follows forming a hypothesis?', 'Test it by collecting data', 'The hypothesis must be tested.', [
        ['Report the results', 'Reporting comes after analysis.'],
        ['Ask a question', 'This comes before forming the hypothesis.'],
        ['Reject all theories', 'This is not a step.'],
      ]),
      mc('A good hypothesis must be', 'Falsifiable', 'It must be possible to show it wrong.', [
        ['Impossible to disprove', 'This would make it untestable.'],
        ['A statement of opinion', 'It must be testable.'],
        ['A proven fact', 'A hypothesis is a prediction.'],
      ]),
      mc('A researcher randomly assigns 100 people to either a mindfulness course or a waitlist, then measures stress. Which variable is the independent variable?', 'The course (mindfulness or waitlist)', 'It is the manipulated variable.', [
        ['Stress scores', 'This is the dependent variable.'],
        ['The number of participants', 'This is not manipulated.'],
        ['The age of the researcher', 'Not relevant.'],
      ]),
      mc('A study compares students at two existing schools, which differ in curriculum. Why is this a quasi-experiment?', 'Participants were not randomly assigned to the groups', 'Existing groups may differ in other ways.', [
        ['Participants were not measured', 'They were measured.'],
        ['There was a control group', 'This does not explain it.'],
        ['It had too many participants', 'Size is not the criterion.'],
      ]),
      mc('Why are double-blind procedures used?', 'To prevent expectations of participants and researchers from affecting results', 'Neither party knows who got which condition.', [
        ['To increase the sample size', 'They do not affect sample size.'],
        ['To make participants unaware that they are in a study', 'Consent requires awareness.'],
        ['To avoid the need for ethics review', 'Ethics review is still required.'],
      ]),
      tf('A strong correlation between two variables proves that one causes the other.', false, 'Correlation does not prove causation: a third variable or reverse causation may be responsible.', 'Correct. Only experiments support causal claims.'),
    ],
  },
};
