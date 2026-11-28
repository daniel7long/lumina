import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how the redesigned Listening section is built and adapts to you, then build listening habits that work for every task.',
  modules: {
    1: {
      summary: 'Format, adaptivity and scoring.',
      sessions: [{
        t: 'What the 2026 Listening section looks like',
        s: 'Task types, once-only audio and the adaptive design.',
        md: `
## Course note
This course is independent preparation. It is **not** made by ETS, and every script and question is original. Check **ets.org/toefl** for the latest official details.

## How to use the scripts
Lumina cannot play audio. Each listening practice appears as a **transcript**. For good practice:
1. Ask a friend to **read the script aloud once** at natural speed, or use a text-to-speech voice, **without looking at it**.
2. Answer the questions from what you heard and your notes.
3. Read the transcript afterward to check what you missed.

If you read the script yourself first, you lose the real challenge of the test: audio plays **once**.

## The section at a glance
According to ETS, the Listening section since **January 2026** has about **47 items** and takes about **29 minutes**. It uses four task types:

| Task type | What you hear | What you do |
| --- | --- | --- |
| Listen and Choose a Response | A short question or statement (not shown on screen) | Choose the best of four written responses |
| Listen to a Conversation | A short conversation between two speakers | Answer 2 questions |
| Listen to an Announcement | An announcement of about 40–85 words, often about campus life | Answer questions |
| Listen to an Academic Talk | A talk of about 100–250 words, such as a podcast segment | Answer 4 questions |

Audio plays **once**, and the answer options are printed on screen.

## Adaptive design
Like Reading, Listening is **multistage adaptive**: a first **router** module decides whether you receive a **lower** or **upper** second module. The test may also include unscored trial items, and they are not marked.

## Scoring
Listening receives a band score from **1 to 6** in half-band steps, aligned to the CEFR. The overall TOEFL score is the average of all four section bands, rounded to the nearest half band.
`,
        q: [
          mc('What is true about the audio in the Listening section?', 'It plays once', 'Because audio is not repeated, notes and focus matter.', [
            ['It can be replayed as many times as you like', 'The audio plays once.'],
            ['It plays twice, with a pause between', 'The audio is not repeated.'],
            ['It is replaced by written text', 'You hear audio and read the answer options.'],
          ]),
          mc('Which task asks you to choose the best written response to something you hear?', 'Listen and Choose a Response', 'The spoken question is not shown on screen.', [
            ['Listen to an Academic Talk', 'This task asks four questions about a talk.'],
            ['Complete the Words', 'This is a Reading task.'],
            ['Take an Interview', 'This is a Speaking task.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Active listening skills.',
      sessions: [{
        t: 'Predicting, noting and staying focused',
        s: 'Habits that help with once-only audio.',
        md: `
## Predict before you listen
Before the audio starts, look at what you can see: the task name, any context line, and the answer options (when they appear before or while you listen). Ask: **Who is speaking? Where? Why?** A campus conversation will probably concern a deadline, a class, housing, a schedule or a problem to solve.

## Listen for the big picture first
Focus first on **who, what, why**. Details matter, but without the main idea details do not stay in memory.

## Note-taking basics
You cannot write everything. Use **keywords, numbers and symbols**.

| Meaning | Symbol or short form |
| --- | --- |
| leads to / causes | → |
| increase / decrease | ↑ / ↓ |
| and / with | + |
| not / no | ≠ or x |
| because | b/c |
| example | e.g. |
| important | ! |

Write **nouns, verbs, numbers and names**. Skip articles and filler.

## Signal words
Listen for words that mark structure:
- **Change of topic:** *now, let’s turn to, another point*
- **Contrast:** *but, however, on the other hand*
- **Emphasis:** *the key thing is, remember that*
- **Examples:** *for instance, such as*
- **Result:** *so, therefore, as a result*
- **Correction:** *actually, I mean, sorry, I meant*

## Stay with the audio
If you miss a word, **do not stop to think about it**. Keep listening: the next sentence may make it clear. One missed word should not cost you the whole passage.

## Accents and speed
The test uses a variety of English accents and natural speed. Practice with podcasts, lectures, interviews and news from different speakers.
`,
        q: [
          mc('A speaker says, “The deadline is Friday, but the library will stay open late on Thursday.” Which notes are most useful?', 'Deadline Fri; library open late Thu', 'Keywords and details, without filler.', [
            ['The speaker spoke about a deadline and the library and many other things', 'This is too general and omits the days.'],
            ['Friday Thursday library library', 'The meaning is lost.'],
            ['Everything the speaker said, word for word', 'You cannot write that fast, and it is not necessary.'],
          ]),
          mc('You miss a word in the middle of a conversation. What should you do?', 'Keep listening to follow the next idea', 'The audio plays once, so stopping may make you miss more.', [
            ['Stop listening and think about the missed word', 'You will miss the next part.'],
            ['Wait for the audio to repeat', 'It does not repeat.'],
            ['Close your notes', 'Notes help you recall the main points.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The 2026 Listening Section',
    tasks: [
      mc('About how many items does ETS list for the Listening section?', '47', 'ETS lists 47 items and about 29 minutes.', [
        ['4', 'This is the number of questions about an academic talk.'],
        ['12', 'This is the number of Writing items.'],
        ['120', 'This is the total number of items across all four sections.'],
      ]),
      mc('Which statement about the answer options is correct?', 'They are written on the screen', 'The audio is spoken, and the options are printed.', [
        ['They are spoken only', 'The options are shown in writing.'],
        ['They are hidden until the audio ends', 'The options are printed on screen.'],
        ['They are replaced by a typed answer', 'Listening items use multiple choice.'],
      ]),
      mc('Why is it useful to predict the topic before the audio starts?', 'It helps you focus on likely vocabulary and ideas', 'Predicting prepares your attention.', [
        ['It lets you skip the audio', 'You still need to listen to answer.'],
        ['It guarantees the answer', 'Prediction helps but does not guarantee an answer.'],
        ['It replaces taking notes', 'It supports note-taking and does not replace it.'],
      ]),
      mc('Which signal word suggests a contrast?', 'however', 'However marks a contrast.', [
        ['for instance', 'This introduces an example.'],
        ['therefore', 'This introduces a result.'],
        ['first', 'This marks a sequence.'],
      ]),
      mc('The speaker says: “Registration opens on the 5th, not the 15th.” Which note is best?', 'Reg opens 5th (≠ 15th)', 'It captures the correction.', [
        ['Reg opens 15th', 'The speaker said the 5th, not the 15th.'],
        ['Reg opens soon', 'The date is missing.'],
        ['Registration', 'It leaves out the key detail.'],
      ]),
      mc('How should you practice with the transcripts in Lumina?', 'Have someone read them aloud once before you look at them', 'This copies the once-only audio condition.', [
        ['Read the script silently, then answer', 'This removes the listening challenge.'],
        ['Memorize the script', 'This does not build listening skills.'],
        ['Skip the questions', 'The questions give practice with the task.'],
      ]),
      tf('In the real test, the audio for each Listening item can be played again if you ask.', false, 'The audio plays once, so the statement is false.', 'The audio plays once. The statement is false.'),
    ],
  },
};
