import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'Take an Interview gives you four questions from a prerecorded interviewer and 45 seconds for each answer, with no preparation time. Learn the format and a simple answer pattern, then practice personal questions.',
  modules: {
    7: {
      summary: 'Understanding the interview.',
      sessions: [{
        t: 'Four questions, 45 seconds each',
        s: 'Format, scoring features and a time plan.',
        md: `
## The format
According to ETS, in **Take an Interview** you answer **4 questions** from a prerecorded interviewer. You have **45 seconds per question** and **no preparation time**. Early questions are usually **personal**, and later questions ask for **opinions**. Each answer is AI-scored from **0 to 5**.

## What is scored
ETS lists these features:
- **Topic relevance and elaboration** (do you answer the question, with detail?)
- **Pace** (steady and comfortable)
- **Intelligibility** (can the listener understand you?)
- **Rhythm and intonation** (natural stress and melody)
- **Range of grammar and vocabulary**

## A 45-second plan
| Time | Part |
| --- | --- |
| 0–5 s | **Answer** the question directly |
| 5–25 s | **Reason** with an explanation |
| 25–40 s | **Example** or detail from your life |
| 40–45 s | Short **closing** idea |

You may not use all 45 seconds, but a very short answer cannot show elaboration. Aim for about **90–110 words** at a natural pace.

## Starting immediately
There is no preparation time, so start with a **ready phrase**:
- *I would say…*
- *Well, for me…*
- *One thing I really enjoy is…*
- *That is an interesting question. I think…*

## Original interview questions
1. What do you enjoy doing in your free time?
2. Tell me about a place you like to visit in your city.
3. How do you usually prepare for a test?

Practice each aloud for 45 seconds and record it.

## Do not memorize a script
The AI scores how well you respond to **this** question. A memorized answer that does not match the question is less relevant.
`,
        q: [
          mc('How much preparation time do you get in Take an Interview?', 'None', 'ETS says there is no preparation time.', [
            ['30 seconds', 'There is no preparation time.'],
            ['One minute', 'There is no preparation time.'],
            ['Two minutes', 'There is no preparation time.'],
          ]),
          mc('Which feature is NOT listed by ETS for interview scoring?', 'Handwriting', 'The task is spoken.', [
            ['Pace', 'Pace is listed.'],
            ['Intelligibility', 'Intelligibility is listed.'],
            ['Topic relevance and elaboration', 'It is listed.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Personal questions.',
      sessions: [{
        t: 'Answer, reason, example',
        s: 'A simple pattern for personal questions.',
        md: `
## The pattern
1. **Answer** the question.
2. Give a **reason**.
3. Add a **specific example or detail**.
4. End with a short **closing**.

## Model answer
**Question:** What do you enjoy doing in your free time?

> I really enjoy cooking, especially trying recipes from different countries. One reason is that it helps me relax after a busy day of classes. For example, last weekend I made a vegetable curry for my roommates, and we ate together and talked for hours. It was a great way to forget about homework. So cooking is both my hobby and a way to spend time with people I like.

(About 70 words: a good length for 30–35 seconds. Add one more detail to fill 45 seconds.)

## Language you can use
| Function | Language |
| --- | --- |
| Opinion or preference | I really enjoy… / I prefer… |
| Reason | One reason is that… / That is because… |
| Example | For example, last weekend… |
| Frequency | I usually… / I try to… every week |
| Closing | So overall… / That is why… |

## Be specific
- Weak: *I like music.*
- Better: *I like listening to jazz while I study because it helps me focus.*

## If you do not know what to say
Use **real information**, but if you cannot think of anything, give a **simple, true answer** and develop it with details. The test measures language, not how interesting your life is.

## Answering questions about places and people
- **Place:** what it is, why you like it, one memory.
- **Person:** who, what they do, why they matter.
- **Habit:** what, when, why.
`,
        q: [
          mc('Which answer is better for “What do you enjoy doing in your free time?”', 'I enjoy cooking because it helps me relax, and last weekend I made a curry for my roommates.', 'It gives an answer, a reason and an example.', [
            ['Cooking.', 'It is too short.'],
            ['I like it.', 'It does not answer the question.'],
            ['Free time is time when you are free.', 'It does not answer the question.'],
          ]),
          mc('Which phrase introduces an example?', 'For example, last weekend…', 'It signals a specific example.', [
            ['One reason is that…', 'It introduces a reason.'],
            ['So overall…', 'It introduces a closing.'],
            ['I usually…', 'It introduces a habit.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Take an Interview I',
    tasks: [
      mc('How many questions are in Take an Interview?', '4', 'ETS lists 4 questions.', [
        ['2', 'There are 4 questions.'],
        ['7', 'This is the number of Listen and Repeat items.'],
        ['11', 'This is the total number of Speaking items.'],
      ]),
      mc('What kind of questions come first, according to ETS?', 'Personal questions', 'Early questions are personal, and later ones ask for opinions.', [
        ['Opinion questions about world policy', 'Opinions come later.'],
        ['Questions about a reading passage', 'The task does not use a reading passage.'],
        ['Yes/no questions only', 'Answers need elaboration.'],
      ]),
      mc('Which is the best opening for an answer with no preparation time?', 'Well, for me, I really enjoy…', 'A ready phrase lets you start immediately.', [
        ['Silence for ten seconds', 'You lose time.'],
        ['I do not know what to say.', 'It does not answer the question.'],
        ['Can I have more time?', 'There is no preparation time.'],
      ]),
      mc('Why should you avoid memorizing a script?', 'The answer must be relevant to the actual question', 'Relevance is scored.', [
        ['Scripts are not allowed to be typed', 'The issue is relevance.'],
        ['Scripts make speech slow', 'The main problem is relevance.'],
        ['Scripts are always too short', 'Length is not the main problem.'],
      ]),
      mc('Which sentence adds elaboration?', 'I like cooking because it helps me relax after class, and last weekend I made curry for my roommates.', 'It adds a reason and an example.', [
        ['I like cooking.', 'It lacks detail.'],
        ['Cooking.', 'It is a single word.'],
        ['It is good.', 'It is vague.'],
      ]),
      mc('About how many words fit in a natural 45-second answer?', 'About 90–110 words', 'A natural pace is about 120–150 words per minute, so 45 seconds is roughly 90–110 words.', [
        ['About 10 words', 'This is far too short.'],
        ['About 400 words', 'This is far too fast.'],
        ['About 1,000 words', 'This is not possible in 45 seconds.'],
      ]),
      wr({
        points: 15,
        prompt: 'Write a planned answer (about 80–110 words) that you could say in 45 seconds to this question: “Tell me about a place in your city or town where you like to spend time.” Use the pattern answer, reason, example, closing. Then read it aloud and time yourself.',
        scenario: 'Practice the personal interview question. Write the answer as you would speak it, in natural spoken English.',
        starter: 'One place I really like is ',
        minWords: 70,
        checklist: ['A clear answer (name the place)', 'A reason', 'A specific example or memory', 'A short closing', 'Natural spoken language'],
        modelAnswer: 'One place I really like is the public library near my apartment. I go there because it is quiet, and I can focus on my reading. Last Sunday, for example, I spent three hours there working on an essay, and a librarian helped me find two useful articles. I also enjoy the big windows, because I can watch the street while I think. So the library is more than a place to study: it is a place where I feel calm and productive.',
        rubric: { criteria: [
          crit('answer', 'Clear answer', 'Names a place and answers the question.', 25, [
            K.any('place', ['place', 'library', 'park', 'cafe', 'café', 'museum', 'garden', 'market', 'river', 'beach', 'street', 'campus'], 'You named a place.', 'Name the place directly.'),
          ]),
          crit('reason', 'Reason', 'Explains why.', 25, [
            K.any('reason', ['because', 'one reason', 'that is why', 'since', 'so that'], 'You gave a reason.', 'Add a reason with because or one reason is that.'),
          ]),
          crit('example', 'Example', 'Gives a specific example or memory.', 30, [
            K.any('example', ['for example', 'for instance', 'last ', 'once', 'yesterday', 'one day', 'when i'], 'You gave an example.', 'Add a specific example, such as for example, last Sunday…'),
          ]),
          crit('length', 'Length', 'Writes at least 70 words.', 20, [
            K.words('len', 70, 'Your answer is long enough for 45 seconds.', 'Add more detail to reach about 80 words.'),
          ]),
        ] },
      }),
    ],
  },
};
