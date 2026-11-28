import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'Later interview questions ask for opinions. Learn to give and support an opinion in 45 seconds, then build a practice routine and test-day habits.',
  modules: {
    9: {
      summary: 'Opinion questions.',
      sessions: [{
        t: 'Position, reasons and examples in 45 seconds',
        s: 'Give an opinion and support it clearly.',
        md: `
## The task
ETS says later interview questions ask for **opinions**. Your answer should state a **position**, explain **why** and give a **specific example**.

## Pattern
1. **Position** (*I think…, In my opinion…*)
2. **Reason 1** (*One reason is that…*)
3. **Example** (*For example…*)
4. **Reason 2 or a contrast** (*Another point is…, However…*)
5. **Close** (*That is why I believe…*)

## Original opinion questions
1. Some people prefer to study alone, and others prefer to study in groups. Which do you prefer and why?
2. Do you think students should wear uniforms at school? Why or why not?
3. Is it better to live in a big city or a small town?

## Model answer
**Question:** Do you prefer to study alone or in a group?

> I prefer to study alone, especially when I am learning something new. One reason is that I can control my speed and focus without distractions. For example, when I prepared for a chemistry exam, I studied alone for two hours each night and understood the main ideas much better. However, I do like groups for review, because friends can explain things in different ways. So I usually study alone first and then meet a group before the test.

## Opinion language
| Function | Language |
| --- | --- |
| Position | I prefer… / I would choose… / In my opinion… |
| Reason | One reason is that… / This is important because… |
| Example | For example… / For instance… |
| Concession | Although… / However… / Of course… |
| Close | That is why… / So overall… |

## Vocabulary range
Use precise words rather than repeating *good* and *bad*:
- *beneficial, practical, convenient, stressful, distracting, affordable, flexible, meaningful*

## Avoid
- Long silence before you begin
- Only a position, with no reason
- Stating both sides equally without choosing one
- A prepared speech that does not fit the question
`,
        q: [
          mc('Which sentence best states a position?', 'I prefer to study alone because I can focus better.', 'It gives a position and a reason.', [
            ['There are many ways to study.', 'It does not state a position.'],
            ['Students study.', 'It does not state a position.'],
            ['Some like groups, and some like alone.', 'It describes both sides without choosing.'],
          ]),
          mc('Which word is a more precise alternative to “good” in “Studying alone is good”?', 'beneficial', 'It is more precise.', [
            ['nice', 'It is vague.'],
            ['okay', 'It is vague.'],
            ['thing', 'It is vague and is not an adjective.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Practice routine and test strategy.',
      sessions: [{
        t: 'Record, review and improve',
        s: 'A weekly routine and test-day habits.',
        md: `
## Weekly practice routine
| Day | Practice | Time |
| --- | --- | --- |
| 1 | Listen and Repeat: 10 sentences from a podcast or textbook | 15 min |
| 2 | Interview: 3 personal questions, 45 seconds each, recorded | 20 min |
| 3 | Review recordings with the self-check table | 15 min |
| 4 | Interview: 3 opinion questions, recorded | 20 min |
| 5 | Re-record your weakest answer | 15 min |

## Self-check table
| Feature | Ask yourself |
| --- | --- |
| Relevance | Did I answer the question? |
| Elaboration | Did I give a reason and an example? |
| Pace | Was my speed steady? |
| Intelligibility | Could a listener understand every word? |
| Rhythm and intonation | Did I stress important words? |
| Language | Did I use varied sentences and precise words? |

## Getting outside feedback
Share a recording with a teacher, tutor or language partner. Ask them to notice **two things**: what was unclear and what was strong.

## Managing nerves
- Take one slow breath before the section.
- Start speaking as soon as the recording begins.
- If you make a mistake, **continue**; do not stop to apologize.
- Remember that each response is scored on its own.

## On test day
- Check your microphone and headset, and find a quiet place.
- Use the official materials at **ets.org/toefl** for current rules.
- Remember that you must complete at least one Speaking task for the section to be scored.
`,
        q: [
          mc('What is a good first step in reviewing a recording?', 'Use a checklist for relevance, pace and clarity', 'A checklist makes feedback specific.', [
            ['Delete the recording', 'You lose the chance to improve.'],
            ['Listen only to the first sentence', 'You need to review the whole response.'],
            ['Compare it with a memorized script', 'The goal is to respond to the question.'],
          ]),
          mc('What should you do if you make a mistake during an answer?', 'Continue speaking', 'A smooth response is better than stopping.', [
            ['Stop and apologize', 'You lose time.'],
            ['Start again from the beginning', 'You may run out of time.'],
            ['Say nothing for the rest of the time', 'You lose credit.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Take an Interview II',
    tasks: [
      mc('Which question is likely to appear later in an interview, according to ETS?', 'An opinion question', 'ETS says later questions ask for opinions.', [
        ['A multiple-choice question', 'There are no multiple-choice items in Speaking.'],
        ['A spelling question', 'The task does not test spelling.'],
        ['A reading comprehension question', 'The task has no reading passage.'],
      ]),
      mc('Which sentence best signals a reason?', 'One reason is that I can focus better.', 'It introduces a reason.', [
        ['For example, last week I studied.', 'It introduces an example.'],
        ['So overall, I prefer it.', 'It introduces a closing.'],
        ['However, groups are useful.', 'It introduces a contrast.'],
      ]),
      mc('Which is the strongest answer to “Do you prefer cities or small towns?”', 'I prefer small towns because they are quiet, and for example my town has a park where I walk every morning.', 'It has a position, a reason and an example.', [
        ['Cities and towns exist.', 'It states no position.'],
        ['Both are fine.', 'It states no clear position or reason.'],
        ['I prefer.', 'It is incomplete.'],
      ]),
      mc('Which word is a precise alternative to “bad” in “Noise is bad for studying”?', 'distracting', 'It names a precise problem.', [
        ['nice', 'It has the opposite meaning.'],
        ['thing', 'It is vague.'],
        ['okay', 'It is vague.'],
      ]),
      mc('Which practice helps most with pace?', 'Record answers and time them', 'You can hear your speed and check your time.', [
        ['Read a book silently', 'It does not train speaking pace.'],
        ['Write a list of words', 'It does not train speaking pace.'],
        ['Memorize a speech', 'Your answers must respond to the question.'],
      ]),
      mc('What should you do in the first seconds of an interview answer?', 'Begin with a ready phrase and answer directly', 'There is no preparation time.', [
        ['Wait silently for ten seconds', 'You lose time.'],
        ['Ask the interviewer to repeat', 'The interviewer is prerecorded.'],
        ['Say that you are nervous', 'It does not answer the question.'],
      ]),
      wr({
        points: 15,
        prompt: 'Write a planned answer (about 85–115 words) that you could say in 45 seconds to this question: “Some people think students should have homework every day. Others think homework should be limited. What do you think?” State your position, give a reason and an example, and end with a short closing. Then read it aloud and time yourself.',
        scenario: 'Practice an opinion interview question. Write the answer as you would speak it.',
        starter: 'In my opinion, ',
        minWords: 75,
        checklist: ['A clear position', 'A reason', 'A specific example', 'A contrast or second reason', 'A short closing'],
        modelAnswer: 'In my opinion, homework should be limited. One reason is that students also need time to rest, exercise and spend time with family. For example, when I was in high school, I had four hours of homework every night, and I was always tired the next day. However, I do think some homework is useful, because it helps students practice what they learned. So a few well-chosen assignments each week are better than a large amount every day, because quality matters more than quantity.',
        rubric: { criteria: [
          crit('position', 'Clear position', 'States an opinion.', 25, [
            K.any('pos', ['in my opinion', 'i think', 'i believe', 'i prefer', 'i would', 'i agree', 'i disagree', 'should be', 'should have'], 'You stated a position.', 'State your position, such as In my opinion…'),
          ]),
          crit('support', 'Reason and example', 'Supports the position.', 35, [
            K.any('reason', ['because', 'one reason', 'that is why', 'this is important'], 'You gave a reason.', 'Add a reason with because or one reason is that.'),
            K.any('example', ['for example', 'for instance', 'when i', 'last ', 'in my experience'], 'You gave an example.', 'Add a specific example with for example.'),
          ]),
          crit('balance', 'Contrast or closing', 'Adds a contrast or a closing.', 20, [
            K.any('contrast', ['however', 'although', 'on the other hand', 'so overall', 'that is why', 'so '], 'You added a contrast or closing.', 'Add however, although or a closing like so overall.'),
          ]),
          crit('length', 'Length', 'Writes at least 75 words.', 20, [
            K.words('len', 75, 'Your answer is long enough for 45 seconds.', 'Add more detail to reach about 85 words.'),
          ]),
        ] },
      }),
    ],
  },
};
