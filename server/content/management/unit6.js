import { mc, tf } from '../builder.js';

export default {
  summary: 'Combine evidence from all four sources, decide whether and how to use it, check what happened, and build evidence-based habits in your organization.',
  modules: {
    12: {
      summary: 'Weigh and combine evidence using conditional probability and Bayes\' rule.',
      sessions: [
        {
          t: 'Probability, prior beliefs and the strength of evidence',
          s: 'Conditional probability, priors and likelihoods.',
          md: `
## Aggregating evidence

After appraising each source, you must **weigh and combine** them. A helpful tool is **Bayes' rule**, which shows how new evidence should change how likely a claim is.

### Key terms
- **Proof** shows something is certain; **evidence** only makes a claim more or less likely.
- **Chance / probability:** a number from 0 (impossible) to 1 (certain).
- **Conditional probability** P(A | B): the probability of A *given that* B is true.

### The ingredients
Let **H** be a claim (the hypothesis), such as "the new onboarding programme reduces early turnover", and **E** a piece of evidence.
- **Prior probability P(H):** how likely H is *before* seeing E. A claim that rarely holds (most fads) deserves a low prior.
- **P(E | H true):** how likely you would see this evidence if H were true.
- **P(E | H false):** how likely you would see it even if H were false.

Evidence is **strong** when P(E | H true) is much larger than P(E | H false). If both are about equal, the evidence tells you little.

### Example
Suppose P(H) = 0.20. A pilot shows improvement (E). If H is true, you would see this 80% of the time; if H is false, you would still see it 30% of the time (by luck or other factors).

- P(E and H) = 0.20 × 0.80 = **0.16**
- P(E and not H) = 0.80 × 0.30 = **0.24**
- Posterior P(H | E) = 0.16 / (0.16 + 0.24) = **0.40**

The evidence moved the probability from 20% to 40%: helpful, but not conclusive.
`,
          q: [
            mc('Evidence E is equally likely whether or not H is true. How should it change your belief in H?', 'It should not change it, because the evidence does not discriminate', 'Equal likelihoods give a likelihood ratio of 1.', [
              ['It should greatly increase it', 'This only holds when E is much more likely if H is true.'],
              ['It should reduce it to zero', 'There is no reason for that.'],
            ]),
            mc('P(H) = 0.20, P(E | H) = 0.80 and P(E | not H) = 0.30. What is P(H | E)?', '0.40', '0.16 / (0.16 + 0.24) = 0.40.', [
              ['0.80', 'This is P(E | H), which is not the probability of H after the evidence.'],
              ['0.16', 'This is only the numerator.'],
            ]),
          ],
        },
        {
          t: 'Updating beliefs with several pieces of evidence',
          s: 'Applying Bayes\' rule to evidence from multiple sources.',
          md: `
## One update at a time

When more evidence arrives, the **posterior becomes the new prior**. Continue the previous example, where the pilot moved P(H) from 0.20 to 0.40.

A scientific meta-analysis (E2) now supports the claim. If H were true you would expect such a result 70% of the time; if false, 20% of the time.

- 0.40 × 0.70 = **0.28**
- 0.60 × 0.20 = **0.12**
- Posterior = 0.28 / (0.28 + 0.12) = **0.70**

After two independent pieces of evidence the probability is 70%.

### Practical points
- Use rough numbers when you do not have exact ones; the logic still helps.
- The evidence pieces must be **independent**. Counting the same finding twice (for example two articles reporting one study) double counts it.
- **Weigh evidence by trustworthiness.** Weak evidence has likelihoods close to each other, and a small effect on the result.
- A **low prior** requires **strong** evidence. Extraordinary claims need stronger evidence.
- Aggregate across all four sources: scientific, organizational, practitioners and stakeholders.
`,
          q: [
            mc('After one update P(H) = 0.40. New independent evidence has P(E | H) = 0.70 and P(E | not H) = 0.20. What is the new probability?', '0.70', '0.40 × 0.70 = 0.28 and 0.60 × 0.20 = 0.12, so 0.28 / 0.40 = 0.70.', [
              ['0.35', 'This is not the result of Bayes\' rule here.'],
              ['0.90', 'This overstates the combined effect.'],
            ]),
            tf('If two news articles report the same single study, you can count them as two independent pieces of evidence.', false, 'They share one source, so counting both would double count the same evidence.', 'Correct. Evidence must be independent to be combined as separate pieces.'),
          ],
        },
      ],
    },
    13: {
      summary: 'Decide whether the evidence applies to your situation and how to use it.',
      sessions: [
        {
          t: 'Does the evidence apply here?',
          s: 'PICOC, moderators, costs, risks and ethics.',
          md: `
## Step 5: Apply

Having an answer from research does not mean it fits **your** organization. Check each element of **PICOC**:
- Is the **population** in the study similar to ours?
- Is the **intervention** one we can realistically implement in the same way?
- Is the **outcome** the one we care about?
- Does the **context** (size, culture, sector, country) match?

### Moderators
A **moderator** may change the effect. A programme that works in large firms might not work in small ones. Identify differences that could matter.

### Bang for your buck
Compare **costs** (money, time, effort, indirect costs) with **expected benefits**. Choose the option with the best ratio, not just the one with the largest benefit.

### Risk
How bad is it if the decision is wrong? Can it be reversed? Test it first with a **pilot** when the risk is high.

### Ethics
Who benefits and who bears the cost? Is anyone treated unfairly or deceived?

### Actionable?
Evidence is **actionable** when you know what to do, with whom and when. If not, break it down into steps.
`,
          q: [
            mc('A study shows a four-day week raised output in small software firms. You run a 5,000-person factory. Which PICOC element is the biggest concern?', 'Population and context: the study firms differ greatly from yours', 'Size, sector and the nature of the work may moderate the effect.', [
              ['Nothing, because evidence applies everywhere', 'Evidence does not always transfer.'],
              ['Only the comparison group', 'The main issue is the mismatch between settings.'],
            ]),
            mc('Option A costs €100,000 and is expected to save €150,000. Option B costs €20,000 and is expected to save €60,000. Which gives the biggest bang for the buck by benefit-to-cost ratio?', 'Option B (ratio 3.0 versus 1.5)', '60,000 / 20,000 = 3.0; 150,000 / 100,000 = 1.5.', [
              ['Option A, because it saves more in total', 'Total saving ignores cost.'],
              ['They are equal', 'The ratios differ.'],
            ]),
          ],
        },
      ],
    },
    14: {
      summary: 'Check what happened after the decision, and learn from it.',
      sessions: [
        {
          t: 'Assessing the outcome of a decision',
          s: 'Types of decisions, implementation checks and methods to assess outcomes.',
          md: `
## Step 6: Assess

### What type of decision is it?
- **Routine:** repeated and well understood (reordering stock).
- **Non-routine:** occurs now and then (restructuring a team).
- **Novel / hyper-complex:** new, unclear and uncertain (entering a new market).

The less routine, the more important it is to monitor closely and learn.

### Was it executed as planned?
Before judging results, check **implementation**: was the decision carried out as designed, by whom, to what extent? A programme that was never implemented properly cannot be blamed for no effect.

### Assess the outcome
- **Gold standard:** a **randomized controlled design**: compare those who got the intervention with a randomly assigned control group.
- **Quasi- or non-experimental:** compare **before and after** with a similar comparison group, or compare over a long run of time points.

To increase validity and reliability: use a **control or comparison group**, measure **before** and **after**, use **reliable measures**, measure at several points, and avoid assessing your own success.

### Look at all the consequences
- **Indirect and intangible costs** (lost goodwill, stress, time spent)
- **Unintended consequences** for stakeholders, positive or negative
- Whether to continue, adjust or stop
`,
          q: [
            mc('A new training programme is introduced, but only 20% of managers actually ran it. Productivity does not change. What should you do first?', 'Check whether the programme was implemented as planned before concluding that it does not work', 'Poor implementation can explain no effect.', [
              ['Conclude that training does not work', 'The programme was barely implemented.'],
              ['Ignore the result', 'The result needs interpretation, not dismissal.'],
            ]),
            mc('Which assessment design is the gold standard?', 'Random assignment of people to intervention and control groups', 'Randomization best rules out other explanations.', [
              ['Asking managers whether they think it worked', 'This is opinion-based and prone to bias.'],
              ['A single before measure only', 'Without comparison or follow-up you cannot assess change.'],
            ]),
          ],
        },
      ],
    },
    15: {
      summary: 'Build the habits, skills and culture that make evidence-based decisions normal.',
      sessions: [
        {
          t: 'Building EBMgt capacity in your organization',
          s: 'Why evidence alone rarely changes minds, and what does.',
          md: `
## Making EBMgt stick

Knowing the six steps is not enough. Organizations need **habits and culture** that support them.

### Why evidence alone does not change minds
People hold beliefs because they are tied to identity, experience and status. Presenting facts can feel like criticism and trigger defence. So:
- **Give people a way out.** Let them change their view without losing face ("given what we knew then, this made sense").
- **Develop a new operating logic.** Show how evidence-based decisions support what they care about (results, fairness, credibility).

### Practical ways to build capacity
- **Develop a questioning mindset:** routinely ask *"How do we know?"* and *"What would change our mind?"*
- **Make decisions explicit:** write down the claim, evidence, assumptions and expected result.
- **Create opportunities to practise** on real decisions, with feedback.
- **Increase accountability for the process**, not only results. People held accountable for how they decided search for more information.
- **Take small steps:** start with one team or one type of decision, and show quick wins.
- **Tailor** the approach to your organization's culture and goals.

> The best way is the one that fits your context. Try it, assess it, and adjust.
`,
          q: [
            mc('A colleague strongly defends an old practice. What approach is most likely to help them reconsider?', 'Acknowledge that it made sense given what was known, and show how new evidence supports their goals', 'This gives them a way out and does not threaten their identity.', [
              ['Present a long list of studies proving them wrong', 'Facts alone often cause defensiveness.'],
              ['Point out in a meeting that they were mistaken', 'Public criticism makes people defend their position.'],
            ]),
            mc('Why does holding people accountable for the decision process (not only results) help?', 'It encourages them to seek more information and consider alternatives', 'Process accountability promotes careful, evidence-seeking behaviour.', [
              ['It lets people avoid responsibility for results', 'It does not remove accountability for results.'],
              ['It discourages anyone from deciding', 'It encourages better-informed decisions.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Aggregate, apply, assess and build capacity',
    tasks: [
      mc('P(H) = 0.50. Evidence E has P(E | H) = 0.90 and P(E | not H) = 0.30. What is P(H | E)?', '0.75', '0.45 / (0.45 + 0.15) = 0.75.', [
        ['0.90', 'This is P(E | H).'],
        ['0.50', 'The evidence should change the probability.'],
        ['0.60', 'This is not the result of Bayes\' rule.'],
      ]),
      mc('A claim has a very low prior probability (for example, a miracle productivity method). What does this mean for the evidence needed?', 'Stronger evidence is needed to make the claim believable', 'A low prior can only be overcome by strong, discriminating evidence.', [
        ['Any single testimonial is enough', 'Weak evidence moves a low prior very little.'],
        ['No evidence is needed', 'Evidence is always needed.'],
        ['The prior should be ignored', 'Priors matter in Bayes\' rule.'],
      ]),
      mc('P(H) = 0.30 and E has P(E | H) = 0.60 and P(E | not H) = 0.60. What is P(H | E)?', '0.30 (no change)', 'The evidence is equally likely either way, so it does not change the probability.', [
        ['0.60', 'This is the likelihood, not the posterior.'],
        ['0.50', 'There is no reason for 0.50.'],
        ['0.90', 'The evidence is not discriminating.'],
      ]),
      mc('A review finds that mentoring raised promotion rates in large banks. You run a small non-profit. What should you do before adopting it?', 'Check whether differences in size, sector and staffing could moderate the effect, and consider a pilot', 'Context differences may change the effect, and a pilot limits risk.', [
        ['Adopt it everywhere immediately', 'This ignores context and risk.'],
        ['Reject it because banks are different', 'Evidence may still be relevant after being checked.'],
        ['Ask the consultant who sells mentoring tools', 'The seller has a stake in the answer.'],
      ]),
      mc('Intervention X costs €50,000 and is expected to produce benefits of €125,000. Intervention Y costs €10,000 and is expected to produce €30,000. Which has the higher benefit-to-cost ratio?', 'Y (3.0 versus 2.5)', '30,000 / 10,000 = 3.0 and 125,000 / 50,000 = 2.5.', [
        ['X (2.5 versus 3.0)', 'X has the lower ratio.'],
        ['They are equal', 'The ratios differ.'],
        ['Cannot be determined', 'The ratios can be calculated from the figures.'],
      ]),
      mc('Which is an example of a non-routine decision?', 'Merging two departments', 'It happens occasionally and needs careful judgement.', [
        ['Reordering printer paper every month', 'This is routine.'],
        ['Processing payroll', 'This is routine.'],
        ['Approving a standard travel claim', 'This is routine.'],
      ]),
      mc('Which design gives the most credible assessment of whether a new onboarding programme reduced early turnover?', 'Compare new hires who were randomly assigned to the programme with those who were not', 'Random assignment makes the groups comparable.', [
        ['Ask the programme designers if it worked', 'They have a stake in the answer.'],
        ['Compare turnover this year to a very different year', 'Other factors may differ.'],
        ['Count the number of people who attended', 'Attendance is not an outcome.'],
      ]),
      mc('Which is an unintended consequence that should be considered when assessing a bonus scheme?', 'Employees focus on bonus targets and neglect teamwork', 'Incentives can produce side effects beyond the intended result.', [
        ['The scheme appears in the annual report', 'This is not a consequence for stakeholders.'],
        ['The scheme has a name', 'This has no relevance.'],
        ['Managers receive more email', 'This is trivial and not a consequence of the scheme as such.'],
      ]),
      tf('Presenting more facts is always the best way to change someone\'s mind about a long-held belief.', false, 'Facts can trigger defensiveness. People are more open when they have a way out and see how evidence serves what they care about.', 'Correct. Beliefs are tied to identity, so providing a way out and a new operating logic works better.'),
    ],
  },
};
