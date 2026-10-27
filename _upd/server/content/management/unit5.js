import { mc, tf } from '../builder.js';

export default {
  summary: 'Identify who is affected by a decision, gather their views fairly, and judge whether that evidence is representative and honest.',
  modules: {
    10: {
      summary: 'Identify the stakeholders who matter and plan how to hear from them.',
      sessions: [
        {
          t: 'Who are the stakeholders?',
          s: 'Types of stakeholders and how to find the most relevant ones.',
          md: `
## Stakeholder evidence

A **stakeholder** is any person or group who can be **affected by** a decision or who can **affect** it, its implementation or its outcome. Stakeholder evidence covers their **values, concerns, feelings and perceptions**, which can decide whether a decision succeeds.

### Types of stakeholders
| Type | Examples |
| --- | --- |
| **Internal** | Employees, managers, unions, owners |
| **External** | Customers, suppliers, regulators, local community |
| **Directly affected** | The team whose schedule changes |
| **Indirectly affected** | Families, other departments |
| **Influencers** | People who can support or block the change |

### Identify the most relevant ones
Ask two questions for each group:
1. **How much will the decision affect them?** (impact)
2. **How much can they affect the decision or its outcome?** (influence)

Groups high on either are the most relevant. Do not forget **groups with little power but high impact**, such as front-line staff or customers; their experience often reveals problems that others miss.

> Make a list first, then ask: *Who is missing?*
`,
          q: [
            mc('Which stakeholder is "indirectly affected" when a call centre changes its shift pattern?', 'The employees\' families, whose routines change', 'They are not part of the decision but feel its effects.', [
              ['The call-centre agents on the new shifts', 'These are directly affected.'],
              ['The manager who designs the shifts', 'The manager is part of the decision.'],
            ]),
            mc('Which stakeholder should you consider even though they have little power over the decision?', 'Front-line staff who will live with the change every day', 'Low power but high impact; their views are valuable evidence.', [
              ['No one with little power', 'Powerless groups can still be highly affected and informative.'],
              ['Only the board', 'The board is one group, not all relevant ones.'],
            ]),
          ],
        },
        {
          t: 'Collecting stakeholder views validly',
          s: 'Methods that give honest, usable answers.',
          md: `
## How to acquire stakeholder evidence

Choose a method that fits your purpose and group:
- **Surveys** for many people and comparable answers
- **Interviews** for depth and sensitive topics
- **Focus groups** to see how views interact
- **Existing information**: complaints, exit interviews, suggestion boxes

### Make it valid and reliable
- **Be clear about the purpose.** Explain what decision is being considered and how answers will be used.
- **Ask neutral, specific questions** (see Unit 2).
- **Protect anonymity** or confidentiality where views might be risky to share.
- **Sample fairly.** Include all relevant groups, not only the loudest, the most accessible or the ones already in favour.
- **Use the same questions** with each group so you can compare.
- **Listen for feelings as well as facts.** Perceptions are evidence about how people will react, even if the facts are different.

### Practical and ethical impact
Consider what the decision means for stakeholders in practice (workload, income, safety, trust) and ethically (fairness, honesty, respect, rights).
`,
          q: [
            mc('You want honest views on a proposed restructuring. Which approach is most likely to give honest answers?', 'An anonymous survey, with a clear explanation of how results will be used', 'People answer more openly when they are protected and understand the purpose.', [
              ['Ask employees in person in front of their manager', 'People may hold back their true views.'],
              ['Ask only the people who support it', 'This produces biased evidence.'],
            ]),
            tf('Stakeholders\' feelings and perceptions are not evidence because they are subjective.', false, 'Perceptions are important evidence about how people will respond to a decision, and whether it will work in practice.', 'Correct. Subjective views are evidence about acceptance, trust and likely behaviour.'),
          ],
        },
      ],
    },
    11: {
      summary: 'Appraise stakeholder evidence for freedom of expression, bias and representativeness.',
      sessions: [
        {
          t: 'Can stakeholders speak freely, and is the evidence representative?',
          s: 'Psychological safety, selection bias and representativeness.',
          md: `
## Appraising stakeholder evidence

### Why perceptions matter
Even when the facts show a plan is sound, people who **feel** it is unfair may resist, leave or sabotage it. Feelings and perceptions predict reactions, so they belong in the decision.

### Could people speak freely?
Ask:
- Was there **fear of consequences** for disagreeing?
- Was **the most powerful person** in the room?
- Were people asked **in groups** where one voice dominates?
- Was it clear that **all views were welcome** (psychological safety)?

If people could not speak freely, the evidence is likely to be **too positive**, and silence is not agreement.

### Selection bias
Who responded, and who did not? A survey with a 15% response rate may mainly reflect those with strong views. Compare the respondents with the whole group on features like role, location and tenure.

### Representativeness
Evidence is **representative** when it reflects the range of views in the whole stakeholder group. Check the sample size, the sampling method and whether any group was left out.

> If evidence fails these checks, treat it as weak and collect more.
`,
          q: [
            mc('A survey on a new policy got 12% response, mostly from people who strongly dislike it. What is the main risk?', 'Selection bias: the respondents are probably not representative of everyone', 'People with strong feelings are more likely to respond.', [
              ['Measurement reliability only', 'The main issue is who responded.'],
              ['No risk, because strong views are the most important', 'Views of the silent majority also matter.'],
            ]),
            mc('Staff are asked in a meeting, with the CEO present, whether they support a layoff plan. Nobody objects. What can you conclude?', 'Very little, because staff may not feel free to disagree', 'Silence in the presence of power is not reliable evidence of agreement.', [
              ['Everyone agrees with the plan', 'People may be afraid to speak.'],
              ['The plan is ethically fine', 'Lack of objection does not show the plan is ethical.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Stakeholder evidence',
    tasks: [
      mc('A hospital plans to move to electronic patient records. Which group is directly affected?', 'Nurses who enter and use the records', 'They work with the system every day.', [
        ['Patients\' relatives who never visit', 'They are unlikely to be affected.'],
        ['The software vendor\'s competitors', 'They are not affected by the decision.'],
        ['The tax authority', 'It is not directly affected.'],
      ]),
      mc('Which stakeholder can influence the outcome of the same project, even if not directly affected?', 'The IT security officer who can approve or block the system', 'Influence is the ability to affect the decision or the outcome.', [
        ['A patient in another region', 'This person has no influence on the project.'],
        ['A nurse who is on leave for a year', 'This person has little influence on the outcome.'],
        ['A competitor\'s employee', 'They have no stake in the project.'],
      ]),
      mc('You want to know how staff feel about a planned office move. Which method is best for sensitive concerns?', 'Confidential one-to-one interviews or an anonymous survey', 'Confidentiality increases honest answers.', [
        ['An open show of hands in a team meeting', 'People may feel pressure to conform.'],
        ['A note on the notice board asking for volunteers', 'Only some people will respond.'],
        ['Asking the manager what staff think', 'The manager\'s view is second-hand.'],
      ]),
      mc('Which question is the best choice for gathering stakeholder evidence?', '"What concerns, if any, do you have about the planned office move?"', 'It is open and neutral.', [
        ['"Don\'t you agree the move will make things better?"', 'This question is leading.'],
        ['"Are you against progress?"', 'This question is loaded.'],
        ['"Everybody supports the move, right?"', 'This question pressures people to agree.'],
      ]),
      mc('A decision will give most staff a small benefit but will cost a small group their jobs. Which consideration is most relevant for stakeholder evidence?', 'The practical and ethical impact on the group that loses the most', 'Impact on those most affected is central to the decision.', [
        ['Only the total benefit', 'This ignores serious harm to a few.'],
        ['Only legal costs', 'There are also ethical and practical impacts.'],
        ['Only the owners\' views', 'Other stakeholders matter too.'],
      ]),
      mc('You find that engagement survey respondents are 80% from head office, but 70% of staff work in stores. What is the problem?', 'The evidence is not representative of store staff', 'Store employees are under-represented.', [
        ['The survey is too long', 'This is not shown.'],
        ['The survey is too anonymous', 'Anonymity is not the issue.'],
        ['The sample is too large', 'The issue is the mix, not the size.'],
      ]),
      tf('Evidence from stakeholders is only worth collecting if it agrees with the facts.', false, 'Stakeholder views matter even when they differ from the facts, as they show how people will react and what concerns need addressing.', 'Correct. Perceptions help predict acceptance, resistance and unintended consequences.'),
    ],
  },
};
