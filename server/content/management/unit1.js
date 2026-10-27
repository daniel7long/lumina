import { mc, tf } from '../builder.js';

export default {
  summary: 'Understand what evidence-based management is, why it matters, what counts as evidence, and how to turn a practical issue into a clear, answerable question.',
  modules: {
    1: {
      summary: 'The basic principles of evidence-based management and what counts as evidence.',
      sessions: [
        {
          t: 'What evidence-based management is and why we need it',
          s: 'Definition, the six steps and the reasons managers need it.',
          md: `
## A better way to decide

**Evidence-based management (EBMgt)** is making decisions about the practice of management through the *conscientious, explicit and judicious use of the best available evidence from multiple sources*. Its aim is to improve the quality of decisions.

### Why do we need it?
Many management decisions are shaped by fads, tradition, a charismatic consultant or a single success story. Research shows that managers often act on beliefs that the evidence does not support. Decisions that sound sensible can still fail, and organizations rarely check why.

EBMgt does not replace judgement. It makes judgement better informed. It helps because it:
- reduces reliance on opinions and fashion
- makes decision-making explicit, so it can be checked and improved
- makes it easier to learn from results

### The six steps (the six A's)
1. **Ask**: translate a practical issue into an answerable question
2. **Acquire**: gather evidence from several sources
3. **Appraise**: judge how trustworthy the evidence is
4. **Aggregate**: weigh and combine the evidence
5. **Apply**: use it in the decision
6. **Assess**: check the outcome

> **Remember:** the question is not "Is there evidence?" but "What is the best available evidence, and how trustworthy is it?"
`,
          q: [
            mc('Which statement best summarizes evidence-based management?', 'Using the best available evidence from multiple sources to improve the quality of decisions', 'This is the core principle: explicit, careful use of the best available evidence from several sources.', [
              ['Following whatever the most successful companies do', 'Copying others is a common alternative to EBMgt, and it is not based on checking the evidence.'],
              ['Relying only on published scientific studies', 'EBMgt uses several sources: scientific, organizational, professional experience and stakeholder concerns.'],
            ]),
            mc('In which order do the six steps of EBMgt appear?', 'Ask, Acquire, Appraise, Aggregate, Apply, Assess', 'First ask a clear question, then gather, judge, combine and use the evidence, and finally check the outcome.', [
              ['Acquire, Ask, Apply, Appraise, Assess, Aggregate', 'You cannot acquire evidence before you know what question you are asking.'],
              ['Ask, Apply, Acquire, Appraise, Aggregate, Assess', 'Applying before acquiring and appraising would mean deciding without evidence.'],
            ]),
          ],
        },
        {
          t: 'What counts as evidence, and common misconceptions',
          s: 'The four sources of evidence and how to judge quality in general terms.',
          md: `
## What counts as evidence?

**Evidence** is information that helps you judge whether a claim is true. Not all information is evidence of the same quality. EBMgt draws on **four sources**:

| Source | Examples |
| --- | --- |
| **Scientific** | Published, peer-reviewed research |
| **Organizational** | Data, metrics and records from the organization |
| **Practitioners** | Professional experience and judgement |
| **Stakeholders** | Values, concerns and perceptions of those affected |

### Assess quality in general terms
For each source, ask: **Where does it come from? How was it collected? Is it relevant to our situation?** Then judge it as stronger or weaker. A rigorous controlled study usually outweighs one person's anecdote. A single data point is weaker than a trend over time.

Always check whether a decision used the **best available** evidence. That means the best that exists *and* can be obtained in the time available, not perfect evidence.

### Misconceptions
- *"EBMgt means only using research."* No. All four sources count.
- *"Evidence gives the answer."* No. Evidence informs a decision. Judgement and values still matter.
- *"Experience does not count."* It does, but it must be weighed for its trustworthiness.
- *"There is not enough time."* Even a quick check of the best available evidence improves a decision.

> **Tip:** when someone says "research shows…", ask which research, how it was done, and whether it fits your situation.
`,
          q: [
            mc('Which is NOT one of the four sources of evidence used in EBMgt?', 'The decision maker\'s intuition alone, without any check', 'Intuition is not a separate source. Professional experience counts only when its trustworthiness is weighed.', [
              ['Organizational data and records', 'This is one of the four sources.'],
              ['The values and concerns of stakeholders', 'This is one of the four sources.'],
            ]),
            tf('Evidence-based management means that managers must always follow what scientific research says, whatever the context.', false, 'This is a misconception: evidence informs the decision, and other sources and judgement still matter.', 'Correct. Evidence informs the decision. Four sources are weighed, and judgement remains essential.'),
          ],
        },
      ],
    },
    2: {
      summary: 'Turn a practical issue into a clear question, and check the claims and assumptions behind it.',
      sessions: [
        {
          t: 'Asking: claims, assumptions, problems and solutions',
          s: 'Make a problem and a preferred solution clear and check the evidence for both.',
          md: `
## Step 1: Ask

Most decisions start with a statement such as *"Our staff lack motivation, so we need a new bonus scheme."* Before acting, **Ask** questions about it.

### Find hidden claims and assumptions
That sentence contains claims:
- Staff lack motivation (the **problem**).
- A bonus scheme will fix it (the **solution**).
- Lack of motivation is the cause. (A hidden **assumption**.)

Write each assumption down so it can be tested.

### Is the problem clear?
A clear problem says **what** is wrong, **how big** it is, **where**, and **compared with what**. "Staff lack motivation" is vague. "Voluntary turnover in sales rose from 8% to 15% in 12 months" is clear.

### Is there evidence for the problem?
Ask: *How do we know? Is there data, or only anecdote?*

### Is the solution clear, and is there evidence for it?
A clear solution says **what exactly** will be done, **for whom**, and **what result** is expected. Then ask whether evidence from **more than one source** supports it. A solution backed only by a vendor's presentation is not supported.

> **Key idea:** a vague problem leads to a vague solution. Clarify first, and check each claim for evidence.
`,
          q: [
            mc('"Our staff lack motivation, so we need a new bonus scheme." Which is a hidden assumption in this statement?', 'That lack of motivation is the cause of the problem and a bonus is the cure', 'The statement assumes a cause and a remedy without showing evidence for either.', [
              ['That staff are paid monthly', 'Nothing in the statement says this.'],
              ['That bonuses are expensive', 'Cost is not claimed, so it is not a hidden assumption here.'],
            ]),
            mc('Which problem statement is the clearest?', 'Voluntary turnover in sales rose from 8% to 15% in the last 12 months', 'It says what, how much, where and over what period.', [
              ['People are unhappy at work', 'This is vague: who, how unhappy, and compared with what?'],
              ['We have a retention culture issue', 'This is a label, not a measurable description of the problem.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Principles and asking',
    tasks: [
      mc('Which description of evidence-based management is most accurate?', 'Making decisions through the explicit use of the best available evidence from multiple sources', 'EBMgt is about explicit, careful use of several sources, not about a single source.', [
        ['Making decisions that match what a majority of managers believe', 'Popularity is not evidence.'],
        ['Choosing the option with the most research papers on it', 'The number of papers does not tell you whether they are trustworthy or relevant.'],
        ['Replacing management judgement with statistics', 'EBMgt informs judgement; it does not replace it.'],
      ]),
      mc('A manager says: "I have 20 years of experience, so I do not need evidence." What is the best EBMgt response?', 'Experience is one valuable source, and it should be weighed together with other sources and checked for trustworthiness', 'EBMgt values professional experience but treats it as one source, to be appraised like the others.', [
        ['Experience is worthless in EBMgt', 'EBMgt counts professional experience as one of the four sources.'],
        ['Experience is always right if it is more than 10 years', 'Length of experience does not guarantee that judgements are valid.'],
        ['Only the scientific literature counts', 'EBMgt uses four sources, not one.'],
      ]),
      mc('Which of these best shows that the "best available" evidence was used?', 'The decision draws on the strongest evidence that exists and could be obtained in the time available', '"Best available" means the best you can obtain within your limits, not perfect evidence.', [
        ['Every possible study was read before deciding', 'That is rarely possible and not required.'],
        ['One consultant\'s report was used because it was recent', 'Recency does not make a single report the best available evidence.'],
        ['The most senior person agreed with the decision', 'Seniority does not make evidence stronger.'],
      ]),
      tf('In EBMgt, evidence from stakeholders, such as their concerns and values, is not evidence and should be ignored.', false, 'This is wrong: stakeholder values and concerns are one of the four sources.', 'Correct. Stakeholder evidence is one of the four sources of evidence.'),
      mc('"Absenteeism is rising because employees are not committed, so we will launch a loyalty programme." Which is the first Ask-step question to raise?', 'How do we know absenteeism is rising, and what evidence shows it is caused by low commitment?', 'The claim and the assumed cause need evidence before a solution is chosen.', [
        ['Which loyalty programme is cheapest?', 'Choosing a solution comes after confirming the problem and its cause.'],
        ['Who designed the programme?', 'The designer is not what matters. The evidence for the problem and solution is.'],
        ['When can we launch it?', 'Timing is a later question.'],
      ]),
      mc('Which is the clearest description of a preferred solution?', 'Give all new sales hires a six-month mentor from the top 10% of performers, to cut first-year turnover by a third', 'It states what, for whom and the expected result.', [
        ['Improve the onboarding experience', 'This is too vague to test or evaluate.'],
        ['Create a culture of belonging', 'This is a goal, not a defined action.'],
        ['Invest in people', 'This says nothing about what exactly will be done.'],
      ]),
    ],
  },
};
