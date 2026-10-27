import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how to gather evidence from practitioners without bias, and how to judge when professional experience can and cannot be trusted.',
  modules: {
    3: {
      summary: 'Decide what to ask practitioners, how to ask it and how to avoid bias in who answers.',
      sessions: [
        {
          t: 'Acquiring evidence from practitioners',
          s: 'What to collect, from whom and how to ask fair questions.',
          md: `
## Practitioner evidence

**Practitioners** are people with professional experience in the situation: managers, employees, specialists, consultants. Their experience can tell you things data cannot, such as how a policy works in practice. But it must be collected carefully.

### 1. Decide what to acquire
Link the question to your problem. Useful things to ask:
- What have they seen **work or fail** in similar situations, and **what were the circumstances**?
- What **facts or observations** (not just opinions) support their view?
- What are the **side effects** they saw?

### 2. Avoid selection bias
**Selection bias** occurs when the people you ask are not typical of everyone with relevant experience. Asking only the most visible or most senior people, or only those who volunteer, gives a skewed picture. Include people with **different roles, levels and views**, and include those who might disagree.

### 3. Choose a method
| Method | Best for |
| --- | --- |
| Structured interviews | Depth, with the same questions for all |
| Survey | Many people, comparable answers |
| Focus group or workshop | Surfacing different views (watch for dominant voices) |

### 4. Ask clear, unbiased questions
- **Leading:** "Don't you agree the new system is much better?"
- **Neutral:** "How has the new system changed your work?"

Ask one thing at a time. Avoid jargon, and avoid questions that suggest an answer.

> **Check afterwards:** could bias in *who* you asked or *how* you asked have shaped the answers?
`,
          q: [
            mc('Which is the best way to prevent selection bias when asking practitioners for evidence?', 'Include people from different roles and levels, including those likely to disagree', 'A varied group gives a more representative picture than one type of person.', [
              ['Ask only the people who volunteer first', 'Volunteers are often the most enthusiastic, so their views may not be typical.'],
              ['Ask only the most senior people', 'Seniority limits the range of views and can hide front-line experience.'],
            ]),
            mc('Which question is the most neutral?', '"How has the new system changed your work?"', 'It does not suggest what the answer should be.', [
              ['"Don\'t you think the new system has made your work easier?"', 'This is a leading question: it hints at the preferred answer.'],
              ['"How much better is the new system, and why is it so great?"', 'It assumes the system is better and great.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Judge when professional expertise is valid and reliable, and recognize the biases that distort it.',
      sessions: [
        {
          t: 'Is professional experience trustworthy?',
          s: 'The conditions for valid expertise and how to grade it.',
          md: `
## Experience is not automatically expertise

Practitioners often feel very sure of their judgements. But confidence is not accuracy. Research on expertise suggests that **valid intuition** develops only when two conditions hold:

1. **A regular environment**: the situation has stable patterns that can be learned (a chess board or a fire ground, rather than long-run stock prices).
2. **Opportunities to learn**: lots of practice **with timely, clear feedback** on whether judgements were right.

Experienced people working in irregular environments, or where feedback is slow or unclear, can feel confident while being wrong. Examples: predicting which strategy will succeed in five years, or which candidate will perform best.

### Grading the trustworthiness of professional experience
Ask:
- Is the environment **regular** enough to learn from?
- Did the person get **frequent, accurate feedback**?
- Is the judgement **based on facts** and many cases, or on one memorable case?
- Do **other experienced people agree**, independently?
- Is the person **objective**, or do they have a stake in the answer?

The more of these that are true, the higher the trust. Where most are doubtful, treat the experience as weak evidence and look for other sources.

> **Key idea:** ask "How would this person know they were wrong?" If the answer is "they would not", be careful.
`,
          q: [
            mc('Which situation is most likely to produce valid professional intuition?', 'A firefighter who has handled hundreds of fires and learned the outcome of each soon afterwards', 'It has a regular environment and quick, clear feedback.', [
              ['A manager who predicts the stock market over five years', 'The environment is irregular and feedback takes a long time.'],
              ['A consultant who advises on a new market once a year', 'There are too few cases and little feedback.'],
            ]),
            tf('If an experienced practitioner is very confident, their judgement can be trusted as valid evidence.', false, 'This is wrong: confidence is not a guide to accuracy. Check the environment and the feedback they received.', 'Correct. Confidence and accuracy are different. You need a regular environment and feedback.'),
          ],
        },
        {
          t: 'Fast thinking, cognitive biases and how to reduce them',
          s: 'System 1 and System 2 thinking, common biases and ways to overcome them.',
          md: `
## Two ways of thinking

| | System 1 | System 2 |
| --- | --- | --- |
| Speed | Fast, automatic | Slow, deliberate |
| Effort | Almost none | High |
| Typical use | Recognizing a face, a gut feeling | Checking a calculation, comparing options |

System 1 is very useful, but it uses mental shortcuts that cause **cognitive biases**. A decision is more likely System 1 when it was made **quickly, with confidence, with little analysis, and no one questioned it**.

### Common biases
- **Confirmation bias:** noticing evidence that supports what we already believe.
- **Availability bias:** judging by what comes to mind easily (a recent vivid example).
- **Anchoring:** being pulled toward the first number we hear.
- **Overconfidence:** being more sure than the evidence justifies.
- **Hindsight bias:** "I knew it all along."
- **Halo effect:** one good trait colours the whole judgement.

### Ways to reduce bias
- **Slow down** and use System 2 for important decisions.
- **Seek disconfirming evidence** and assign someone to argue the other side.
- Run a **pre-mortem**: imagine the decision failed, then ask why.
- Use **checklists** and structured criteria. Decide the criteria before looking at options.
- Look at **base rates**: how often does this usually work for others?

### Critically appraising practitioner evidence
Put the pieces together: how valid is the environment, were biases likely, did people check the claim, and does it agree with other sources?
`,
          q: [
            mc('A manager hires a candidate because the first thing she noticed, a prestigious university, made every other quality look better. Which bias is this?', 'Halo effect', 'One positive trait influences the whole judgement.', [
              ['Anchoring', 'Anchoring means being pulled toward the first number or value we hear.'],
              ['Availability bias', 'Availability means judging by examples that come to mind easily.'],
            ]),
            mc('Which action best reduces the effect of confirmation bias in a decision team?', 'Ask a team member to argue the case against the preferred option', 'This forces the team to look at disconfirming evidence.', [
              ['Make the decision faster so there is less time for doubt', 'Speed increases System 1 thinking and bias.'],
              ['Let the most senior person decide first, so there is a clear direction', 'This anchors the group and makes dissent less likely.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Evidence from practitioners',
    tasks: [
      mc('You are asked to collect evidence from practitioners about a new scheduling system. Which approach best reduces selection bias?', 'Interview a sample that includes managers, schedulers and front-line staff from different sites', 'A varied sample is closer to the whole group that has relevant experience.', [
        ['Interview the three managers who introduced it', 'They have a stake in its success and see only one side.'],
        ['Send a survey and use only the replies that arrive first', 'Early responders are often not typical.'],
        ['Ask only staff who have complained', 'This would give a one-sided view.'],
      ]),
      mc('Which question is unbiased?', '"What changes have you noticed since the new system was introduced?"', 'It is open and does not suggest an answer.', [
        ['"Isn\'t it true that the new system has saved a lot of time?"', 'This is a leading question.'],
        ['"How much do you love the new system?"', 'This assumes a positive attitude.'],
        ['"Why do you dislike the new system?"', 'This assumes a negative attitude.'],
      ]),
      mc('Which expert\'s judgement is most likely to be valid?', 'A hospital triage nurse who sees hundreds of cases and learns each patient\'s outcome within hours', 'Regular patterns and rapid feedback support valid intuition.', [
        ['A strategy consultant forecasting industry trends for the next decade', 'The environment is hard to predict and feedback is slow.'],
        ['A manager who succeeded once with a new approach', 'A single case does not build reliable expertise.'],
        ['An executive who feels sure about market timing', 'Feeling sure does not show that the judgement is accurate.'],
      ]),
      mc('A decision was made within minutes, by a confident leader, with no data and no discussion. Which type of thinking most likely produced it?', 'System 1 (fast, automatic)', 'Speed, confidence and no analysis are signs of System 1.', [
        ['System 2 (slow, deliberate)', 'System 2 involves effort, analysis and checking.'],
        ['Neither; this was a statistical decision', 'No data or analysis was used.'],
      ]),
      mc('A team sees a news story about a rare accident and decides a safe process is dangerous. Which bias is most likely at work?', 'Availability bias', 'A vivid, recent example is easy to recall, so its likelihood is overestimated.', [
        ['Hindsight bias', 'Hindsight bias is believing after the event that you knew it all along.'],
        ['Anchoring', 'Anchoring is being pulled toward a first number.'],
        ['Halo effect', 'The halo effect is when one trait colours the whole judgement.'],
      ]),
      mc('Which step best helps a team overcome overconfidence in a plan?', 'Run a pre-mortem: imagine the plan has failed and list the reasons', 'This invites people to look for weaknesses that they would otherwise overlook.', [
        ['Ask everyone to rate their confidence and take the average', 'Overconfident people will all report high confidence.'],
        ['Skip the review to avoid doubt', 'Doubt is useful when stakes are high.'],
        ['Use only evidence that supports the plan', 'That is confirmation bias.'],
      ]),
    ],
  },
};
