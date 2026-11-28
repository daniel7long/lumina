import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'The academic discussion task asks you to join an online class discussion in ten minutes. Learn to read the posts, choose a position and write a developed contribution of at least 100 words.',
  modules: {
    7: {
      summary: 'Reading the discussion.',
      sessions: [{
        t: 'A professor and two students',
        s: 'Summarize the question and the two positions, then add something new.',
        md: `
## The format
According to ETS, **Write for an Academic Discussion** gives you **10 minutes**. A **professor** poses a question, and **two students** post responses with **different positions**. You write your own contribution to the discussion. ETS says an effective response is **at least 100 words**. The response is AI-scored from **0 to 5**.

## Original discussion
> **Professor:** This week we are discussing how universities should handle first-year housing. Some schools require all first-year students to live on campus, while others let students choose. What do you think is the better policy and why?
>
> **Student A (Jun):** I think it should be required. Living on campus helps new students meet others and feel connected, and it keeps them close to classes and the library.
>
> **Student B (Priya):** I disagree. Housing on campus can be expensive, and some students would rather live with family or save money. Students should be able to choose what works for them.

## Reading plan (about 1 minute)
1. **Question:** What exactly is the professor asking?
2. **Student A:** position + reason
3. **Student B:** position + reason
4. **Your position:** agree with one, disagree with both, or propose a middle position.
5. **Your own idea:** something new, not just a repetition.

## Contribute something new
A strong response **engages with the discussion** and adds a fresh reason, example or condition:
- Support one student and **add** a new reason.
- Disagree and explain why, with an example.
- Take a **middle position** (for example, require housing only for the first semester).

## Relevance
Respond to the **professor’s question**. You may mention the students by name, but do not only summarize them.
`,
        q: [
          mc('How long is the Write for an Academic Discussion task?', '10 minutes', 'ETS lists 10 minutes.', [
            ['7 minutes', 'This is the email time.'],
            ['3 minutes', 'This is too short for the task.'],
            ['30 minutes', 'This is far longer than the task.'],
          ]),
          mc('What should your response add to the discussion?', 'A new reason, example or idea', 'Adding something new shows elaboration.', [
            ['Only a repeat of the first student', 'This does not add anything.'],
            ['A copy of the professor’s question', 'This is not a response.'],
            ['An unrelated story', 'It would lack relevance.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Writing a developed contribution.',
      sessions: [{
        t: 'Position, reasons, example and variety',
        s: 'A structure you can write in ten minutes.',
        md: `
## Time plan (10 minutes)
| Minutes | Action |
| --- | --- |
| 0:00–1:00 | Read the posts and choose a position |
| 1:00–1:30 | Plan: position, reason 1, reason 2 or example |
| 1:30–9:00 | Write about 100–150 words |
| 9:00–10:00 | Check grammar, spelling and relevance |

## Structure
1. **Position** that answers the question
2. **Reason 1** with explanation
3. **Reason 2 or example**
4. **Response to another student** (agree, partly agree or disagree) or a **closing sentence**

## Model response (about 120 words)
> I partly agree with Jun, but I think universities should require on-campus housing only for the first semester. In the first weeks, students need to make friends and learn how campus works, and living in a residence hall makes that easier. For example, when I started university, I met my study group in the dormitory kitchen. However, I understand Priya’s concern about cost. If students can show that they have financial reasons or live nearby with family, the university should allow them to live off campus. Therefore, a flexible policy, with a short required period and clear exceptions, supports both connection and fairness.

## Language for discussion posts
| Function | Language |
| --- | --- |
| Position | I believe… / In my opinion… / I partly agree with… |
| Reason | because… / One reason is that… / This matters because… |
| Example | For example… / For instance… |
| Contrast | However… / On the other hand… / Although… |
| Result | Therefore… / As a result… |

## Variety
Mix sentence types: simple, compound and complex. Avoid repeating the same word (*good, bad, thing*) and choose **specific** words (*affordable, isolated, convenient, flexible*).

## Common problems
- No clear position
- Only repeating the students’ ideas
- Too short (under about 100 words)
- A list of ideas with no explanation
- Frequent errors that make meaning unclear
`,
        q: [
          mc('Which sentence is the clearest position?', 'I believe universities should require housing only for the first semester.', 'It answers the question directly.', [
            ['There are many opinions about housing.', 'It states no position.'],
            ['Housing is a topic.', 'It states no position.'],
            ['Jun and Priya both wrote something.', 'It only describes the discussion.'],
          ]),
          mc('Which sentence best adds a reason with explanation?', 'This matters because new students often need help finding friends and getting around campus.', 'It gives a reason and explains why it matters.', [
            ['Because yes.', 'It gives no explanation.'],
            ['Housing is housing.', 'It adds no information.'],
            ['I like dorms.', 'It is too simple and lacks explanation.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Write for an Academic Discussion',
    tasks: [
      mc('According to ETS, an effective academic discussion response is at least how long?', '100 words', 'ETS gives 100 words as a guide for an effective response.', [
        ['20 words', 'This is too short.'],
        ['500 words', 'This is much more than needed in 10 minutes.'],
        ['1,000 words', 'This is much more than needed in 10 minutes.'],
      ]),
      mc('Which is a criterion for the Academic Discussion task?', 'Relevance', 'ETS lists relevance, elaboration, syntactic variety, vocabulary and mechanics.', [
        ['Handwriting', 'The task is typed.'],
        ['Speed of typing', 'Typing speed is not a criterion.'],
        ['Number of paragraphs', 'The number of paragraphs is not a criterion.'],
      ]),
      mc('Which sentence best shows contrast?', 'However, I understand why some students prefer to live off campus.', 'However signals contrast.', [
        ['For example, I lived in a dormitory.', 'This gives an example.'],
        ['Therefore, the policy is good.', 'This gives a result.'],
        ['First, I will write.', 'This signals sequence.'],
      ]),
      mc('Which response is more developed?', 'I support flexible housing because students have different budgets, and some can save money by living with family.', 'It gives a position, a reason and an explanation.', [
        ['I agree with Priya.', 'It gives no reason.'],
        ['Housing is important.', 'It states no position or reason.'],
        ['Yes.', 'It is too short.'],
      ]),
      mc('Which word is the most specific choice for “a good policy”?', 'flexible', 'It names a precise quality.', [
        ['nice', 'It is vague.'],
        ['thing', 'It is vague.'],
        ['okay', 'It is vague.'],
      ]),
      mc('Which is the best use of the last minute?', 'Check grammar, spelling and relevance', 'Mechanics and relevance are scored.', [
        ['Write a new introduction', 'There is not enough time.'],
        ['Delete your best reason', 'This would weaken the response.'],
        ['Add unrelated vocabulary', 'This may reduce relevance.'],
      ]),
      wr({
        points: 20,
        prompt: 'Read this original discussion and write your contribution (about 100–140 words). Professor: “Should universities give students a week off each semester for mental health, in place of a longer holiday later? Why or why not?” Student A (Noor): “Yes. A week off in the middle of the semester helps students rest before exams.” Student B (Leo): “No. A break in the middle makes it hard to return to studying, and the schedule is already crowded.”',
        scenario: 'Respond to the professor’s question. State your position, give at least one reason with an example, and respond to one of the students. Aim to finish in about ten minutes.',
        starter: 'I believe that ',
        minWords: 90,
        checklist: ['A clear position', 'At least one reason with explanation', 'An example or detail', 'A response to Noor or Leo', 'Varied sentences and linking words'],
        modelAnswer: 'I agree with Noor that universities should give students a week off in the middle of each semester. By the seventh or eighth week, many students are tired, and a short break gives them time to rest and catch up on work before exams. For example, last term I had three assignments due in the same week, and I could not sleep enough to finish them well. A week off would have helped me. However, I understand Leo’s concern that returning to a routine can be difficult. To solve this problem, universities could schedule the break after a major deadline and add a short review lesson in the first class back. Therefore, a mid-semester break supports well-being without harming learning.',
        rubric: { criteria: [
          crit('position', 'Clear position', 'States a position on the question.', 25, [
            K.any('pos', ['i agree', 'i disagree', 'i believe', 'in my opinion', 'i think', 'i support', 'i partly agree', 'should'], 'You stated a position.', 'State your position with a phrase such as I believe or I agree.'),
          ]),
          crit('support', 'Reasons and examples', 'Gives a reason and an example.', 30, [
            K.any('reason', ['because', 'one reason', 'this matters', 'so that', 'since'], 'You gave a reason.', 'Give a reason with because or one reason is that.'),
            K.any('example', ['for example', 'for instance', 'such as', 'last term', 'in my experience'], 'You gave an example.', 'Add an example with for example or for instance.'),
          ]),
          crit('engage', 'Engages with the discussion', 'Responds to a student or the professor.', 25, [
            K.any('engage', ['noor', 'leo', 'however', 'on the other hand', 'although', 'i understand'], 'You engaged with the discussion.', 'Respond to Noor or Leo, using However or I understand.'),
          ]),
          crit('length', 'Length', 'Writes at least 90 words.', 20, [
            K.words('len', 90, 'Your response has enough development.', 'Add more explanation to reach about 100 words.'),
          ]),
        ] },
      }),
    ],
  },
};
