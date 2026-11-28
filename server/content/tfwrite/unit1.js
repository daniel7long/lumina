import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how the redesigned Writing section is built and scored, then refresh the grammar you need for fast, accurate writing.',
  modules: {
    1: {
      summary: 'Format, timing and scoring.',
      sessions: [{
        t: 'What the 2026 Writing section looks like',
        s: 'Three task types, timing and scoring.',
        md: `
## Course note
This course is independent preparation. It is **not** made by ETS, and every prompt and model answer is original. The model answers are examples, not official scored samples. Check **ets.org/toefl** for current details.

## The section at a glance
According to ETS, the Writing section since **January 2026** has **12 items** and takes about **23 minutes**:

| Task | Items | Time | Scoring |
| --- | --- | --- | --- |
| Build a Sentence | 10 | the rest of the section time (ETS lists about 23 minutes overall) | Machine-scored |
| Write an Email | 1 | 7 minutes | AI-scored, 0–5 |
| Write for an Academic Discussion | 1 | 10 minutes | AI-scored, 0–5 |

The older **Integrated** (read, listen, write) and **Independent** essay tasks were replaced. Writing is **linear**: it is not adaptive.

## How responses are scored
- **Build a Sentence** items are marked correct or incorrect by machine.
- **Email** responses are scored on whether you achieve the goal, elaborate, use a range of syntax and vocabulary, follow social conventions and control mechanics (spelling, punctuation, capitalization).
- **Academic Discussion** responses are scored on relevance to the discussion, elaboration, syntactic variety, vocabulary and mechanics.

The Writing score is reported as a **band from 1 to 6** in half-band steps. It is one of four section scores that are averaged for the overall score.

## What good writing looks like here
- **Clear:** the reader understands your goal immediately.
- **Developed:** you explain and give reasons or examples.
- **Varied:** you use more than one sentence pattern.
- **Accurate:** errors do not make meaning unclear.
- **Appropriate:** the tone fits the situation.
`,
        q: [
          mc('How many Build a Sentence items are in the Writing section, according to ETS?', '10', 'ETS lists 10 Build a Sentence items.', [
            ['1', 'There is one email and one academic discussion task.'],
            ['12', 'This is the total number of Writing items.'],
            ['50', 'This is the total number of Reading items.'],
          ]),
          mc('Which Writing task has a 10-minute time limit?', 'Write for an Academic Discussion', 'ETS lists 10 minutes for this task.', [
            ['Write an Email', 'The email task has 7 minutes.'],
            ['Build a Sentence', 'It is shorter per item.'],
            ['Take an Interview', 'This is a Speaking task.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Grammar foundations for timed writing.',
      sessions: [{
        t: 'Sentence basics you can use under time pressure',
        s: 'Word order, agreement, tense and punctuation.',
        md: `
## Basic English word order
**Subject + verb + object/complement + place + time**
- *The students submitted their reports on Friday.*

## Agreement
- Singular subject → singular verb: *The professor **is** late.*
- Plural subject → plural verb: *The professors **are** late.*
- Third-person singular present needs **-s**: *She **writes** clearly.*

## Verb tenses to control
| Tense | Use | Example |
| --- | --- | --- |
| Present simple | habits, facts | I study every evening. |
| Present continuous | now, temporary | I am studying for an exam. |
| Past simple | finished past | I sent the form yesterday. |
| Present perfect | past with a link to now | I have already sent the form. |
| Future | plans, promises | I will send it tomorrow. |

## Punctuation that matters
- **Capital letter** at the start of a sentence and for names (*Professor Lee*).
- **Comma** after an introductory phrase: *However, I disagree.*
- **Comma** before *and, but, so* when they join two full clauses: *I wanted to attend, but I had a class.*
- **Apostrophe** for contractions and possession: *I’m, the student’s notes.*
- **Period or question mark** at the end of every sentence.

## Avoid run-ons and fragments
- Run-on: *I missed class I was sick.* → *I missed class **because** I was sick.*
- Fragment: *Because I was sick.* → *I missed class because I was sick.*

## Useful sentence types
- Simple: *I support the idea.*
- Compound: *I support the idea, but I have one concern.*
- Complex: *Although the idea is useful, it may be expensive.*
- Relative clause: *Students who work part-time need flexible deadlines.*
`,
        q: [
          mc('Which sentence is correct?', 'The professor writes clear comments.', 'The singular subject takes writes.', [
            ['The professor write clear comments.', 'A singular third-person subject needs writes.'],
            ['The professor are writes clear comments.', 'Are and writes cannot appear together here.'],
            ['The professor writing clear comments.', 'It lacks a finite verb, so it is a fragment.'],
          ]),
          mc('Which sentence correctly fixes the run-on “I missed class I was sick”?', 'I missed class because I was sick.', 'Because joins the two clauses.', [
            ['I missed class, I was sick.', 'A comma alone does not fix the run-on.'],
            ['I missed class because.', 'It leaves the idea incomplete.'],
            ['Missed class I was sick.', 'It still lacks clear structure.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The 2026 Writing Section',
    tasks: [
      mc('How long is the Write an Email task, according to ETS?', '7 minutes', 'ETS lists 7 minutes for the email.', [
        ['10 minutes', 'This is the time for the Academic Discussion task.'],
        ['30 minutes', 'This is far longer than the email task.'],
        ['3 minutes', 'This is shorter than the email task.'],
      ]),
      mc('Which statement about the Writing section is correct?', 'It includes three task types', 'Build a Sentence, Write an Email and Write for an Academic Discussion.', [
        ['It includes an integrated read-listen-write task', 'The integrated task was replaced.'],
        ['It is multistage adaptive', 'Writing is linear.'],
        ['It has only one task', 'It has three task types.'],
      ]),
      mc('Which sentence uses a comma correctly?', 'However, I disagree with the proposal.', 'A comma follows the introductory word.', [
        ['However I, disagree with the proposal.', 'The comma is in the wrong place.'],
        ['However I disagree, with the proposal.', 'The comma does not belong there.'],
        ['However I disagree with, the proposal.', 'The comma splits the verb phrase.'],
      ]),
      mc('Which sentence is a fragment?', 'Although the room was small.', 'It starts a dependent clause but does not finish the idea.', [
        ['The room was small.', 'It is a complete sentence.'],
        ['The room was small, but it was quiet.', 'It is a complete sentence.'],
        ['Because the room was small, we moved.', 'It is a complete sentence.'],
      ]),
      mc('Which verb form completes “She ___ the form yesterday”?', 'submitted', 'Yesterday signals the past simple.', [
        ['submit', 'This is the base form and does not show past time.'],
        ['submits', 'This is present simple.'],
        ['will submit', 'This is future.'],
      ]),
      mc('Which criterion is NOT listed by ETS for the Academic Discussion task?', 'Handwriting', 'The task is typed, and handwriting is not scored.', [
        ['Mechanics', 'Mechanics is a criterion.'],
        ['Vocabulary', 'Vocabulary is a criterion.'],
        ['Elaboration', 'Elaboration is a criterion.'],
      ]),
      tf('The model answers in this course are official ETS scored samples.', false, 'They are original examples written for this course, so the statement is false.', 'They are original examples. The statement is false.'),
    ],
  },
};
