import { mc, tf } from '../builder.js';

export default {
  summary: 'Listen and Repeat asks you to repeat sentences exactly. Learn how the task works and how to hold a sentence in memory, then practice with short and medium sentences.',
  modules: {
    3: {
      summary: 'How the task works.',
      sessions: [{
        t: 'Hear it once, say it exactly',
        s: 'Format, scoring and memory strategies.',
        md: `
## The format
According to ETS, **Listen and Repeat** has **7 sentences** in a campus or academic scenario. You hear each sentence once and **repeat it exactly**. You have about **8–12 seconds** to record each response. The sentences **get longer** as the task goes on. A top score needs an **exact and intelligible** repetition.

## How to practice here
Lumina cannot play audio. For each sentence in this course:
1. Ask a friend to **read it aloud once**, or play it with text-to-speech without looking at the text.
2. **Say it aloud immediately.**
3. Record yourself and compare with the text.

## What makes repetition hard
- **Length:** you must remember many words.
- **Small words:** *a, the, of, to* are easy to lose.
- **Endings:** *-s, -ed, -ing* change meaning.
- **Numbers and names:** they have no pattern to help you.

## Strategies
### 1. Listen for meaning, not for single words
If you understand the **message**, the words are easier to recall.

### 2. Chunk the sentence
Divide it into **meaningful groups**:
> The registration office / will be closed / on Friday afternoon / for a staff meeting.

### 3. Hold the rhythm
Your memory records the **rhythm** (stressed beats). Repeat the beats: *regisTRAtion OFfice … will be CLOSED … on FRIday AFternoon … for a STAFF MEEting.*

### 4. Start speaking right away
Do not wait. Begin as soon as the audio ends, while the sentence is still in your memory.

### 5. Do not stop to fix
If you slip, **keep going**. A smooth, nearly exact repetition is better than a long pause.
`,
        q: [
          mc('How many times do you hear each Listen and Repeat sentence?', 'Once', 'The audio plays once.', [
            ['Twice', 'The sentence is not repeated.'],
            ['Three times', 'The sentence is not repeated.'],
            ['As many times as you click', 'You cannot replay it.'],
          ]),
          mc('Which strategy helps most with longer sentences?', 'Chunk the sentence into meaningful groups', 'Chunks reduce the memory load.', [
            ['Try to memorize each word separately', 'This is harder than chunking.'],
            ['Wait several seconds before starting', 'Your memory fades.'],
            ['Say only the first half', 'The goal is the exact full sentence.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Short and medium sentences.',
      sessions: [{
        t: 'Practice set 1: from 6 to 12 words',
        s: 'Keep small words and endings.',
        md: `
Practice each sentence this way: **hear it once, repeat it, check it**. Notice the stress marks and chunks.

## Set 1: short sentences
1. The library opens at nine.
2. Please bring your student card.
3. The lab is on the second floor.
4. Our class meets every Tuesday.
5. You can submit the form online.

## Set 2: medium sentences
6. The bookstore is offering a discount on all science textbooks.
7. Students must return their library books before the end of the term.
8. The professor will explain the assignment at the start of class.
9. If you need help with your essay, visit the writing center.
10. The campus shuttle runs every fifteen minutes during the day.

## Chunked versions
- The bookstore / is offering a discount / on all science textbooks.
- Students must return / their library books / before the end of the term.
- If you need help / with your essay, / visit the writing center.

## Common errors
| Heard | Often said | Problem |
| --- | --- | --- |
| students **must return** | student must return | missing -s |
| **their** library books | the library books | wrong small word |
| every **fifteen** minutes | every fifty minutes | number confusion |
| **before** the end | after the end | changed meaning |

## Self-check
After repeating, ask: **Did I keep every word, ending and number?** Count the words and compare.
`,
        q: [
          mc('Which repetition changes the meaning of “Students must return their library books before the end of the term”?', 'Students must return their library books after the end of the term', 'Before and after have opposite meanings.', [
            ['Students must return their library books before the end of the term', 'This is the original sentence.'],
            ['The students must return their library books before the end of term', 'This changes small words but keeps the meaning, though it is not exact.'],
            ['Students must return their books before the end of the term', 'It drops a word, but the meaning is similar; still, it is not exact.'],
          ]),
          mc('Which chunking is most helpful for “If you need help with your essay, visit the writing center”?', 'If you need help / with your essay / visit the writing center', 'The chunks match meaningful phrases.', [
            ['If / you need / help with / your / essay visit / the writing / center', 'The chunks are too small and break phrases.'],
            ['If you need help with your essay visit the writing center', 'It is a single chunk that is too long to remember.'],
            ['If you / need help with your / essay visit the / writing center', 'The chunks break meaningful phrases.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Listen and Repeat I',
    tasks: [
      mc('About how much time do you have to record each Listen and Repeat response, according to ETS?', '8–12 seconds', 'ETS lists about 8–12 seconds.', [
        ['45 seconds', 'This is the time for an interview answer.'],
        ['2 minutes', 'This is much longer than the time allowed.'],
        ['1–2 seconds', 'This is shorter than the time allowed.'],
      ]),
      mc('What does a top score require?', 'An exact, intelligible repetition', 'ETS says a 5 needs an exact and intelligible repetition.', [
        ['A paraphrase in your own words', 'You must repeat exactly.'],
        ['A very fast response', 'Clarity matters more than speed.'],
        ['A longer sentence than the one you heard', 'Adding words is not exact.'],
      ]),
      mc('Which is the best first reaction after the audio ends?', 'Start repeating right away', 'Memory fades quickly.', [
        ['Wait ten seconds', 'You may forget the sentence.'],
        ['Say a different sentence', 'The task requires the same sentence.'],
        ['Ask for the audio again', 'The audio plays once.'],
      ]),
      mc('Which word is easiest to lose in repetition?', 'a small function word such as “their”', 'Small words are weakly stressed and easy to lose.', [
        ['The main noun “library”', 'Content words are usually easier to remember.'],
        ['The first word', 'The first word is often remembered.'],
        ['No word is easy to lose', 'Small words are commonly lost.'],
      ]),
      mc('Which is a good chunking of “The campus shuttle runs every fifteen minutes during the day”?', 'The campus shuttle / runs every fifteen minutes / during the day', 'The chunks are meaningful phrases.', [
        ['The / campus / shuttle / runs / every', 'The chunks are too small.'],
        ['The campus shuttle runs every fifteen minutes during the day', 'It is one long chunk.'],
        ['The campus / shuttle runs every / fifteen minutes during / the day', 'The chunks cut through phrases.'],
      ]),
      mc('You make a small slip in the middle of a repetition. What should you do?', 'Keep going and finish smoothly', 'A smooth response is better than a long pause.', [
        ['Stop and say nothing', 'You lose the remaining credit.'],
        ['Start the sentence again from the beginning', 'You may run out of time.'],
        ['Speak louder', 'Volume does not fix a slip.'],
      ]),
      tf('Sentences in Listen and Repeat get longer as the task goes on.', true, 'Correct. ETS says the sentences get longer.', 'ETS says the sentences get longer, so the statement is true.'),
    ],
  },
};
