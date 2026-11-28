import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how the redesigned Speaking section is built and scored, then build the delivery habits (pace, stress and intonation) that every task rewards.',
  modules: {
    1: {
      summary: 'Format, timing and scoring.',
      sessions: [{
        t: 'What the 2026 Speaking section looks like',
        s: 'Two task types, 11 items and AI scoring.',
        md: `
## Course note
This course is independent preparation. It is **not** made by ETS, and every sentence and question is original. Lumina cannot record or score speech, so you must **say everything aloud** and, if possible, **record yourself**. Check **ets.org/toefl** for current details.

## The section at a glance
According to ETS, the Speaking section since **January 2026** has **11 items** and takes about **8 minutes**:

| Task | Items | What you do |
| --- | --- | --- |
| Listen and Repeat | 7 | Hear a sentence in a campus or academic scenario and repeat it exactly; about 8–12 seconds to record each |
| Take an Interview | 4 | Answer questions from a prerecorded interviewer; 45 seconds per answer, with no preparation time |

The older **Independent** and **Integrated** speaking tasks were replaced. Speaking is **linear**, not adaptive.

## Scoring
Each response is **AI-scored from 0 to 5**. The Speaking score is reported as a **band from 1 to 6**, and it is averaged with the other three sections for the overall score.

- **Listen and Repeat:** sentences get longer as the task proceeds. A top score needs an **exact, intelligible repetition**.
- **Take an Interview:** scoring looks at topic relevance and elaboration, pace, intelligibility, rhythm and intonation, and the range of grammar and vocabulary.

## Equipment
You speak into a **microphone** and your response is recorded. Check your headset and your room before you start. There is no one to ask during the test.
`,
        q: [
          mc('How many Listen and Repeat items are in the Speaking section, according to ETS?', '7', 'ETS lists 7 Listen and Repeat sentences.', [
            ['4', 'This is the number of interview questions.'],
            ['11', 'This is the total number of Speaking items.'],
            ['1', 'The section has many more items.'],
          ]),
          mc('How long is each Take an Interview response?', '45 seconds', 'ETS lists 45 seconds per question, with no preparation time.', [
            ['10 seconds', 'This is about the time for a Listen and Repeat response.'],
            ['2 minutes', 'This is longer than the time allowed.'],
            ['5 minutes', 'This is much longer than the time allowed.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Delivery: pace, clarity and rhythm.',
      sessions: [{
        t: 'Speaking so that the listener can follow',
        s: 'Pace, stress, rhythm and intonation.',
        md: `
## Why delivery matters
ETS lists **pace, intelligibility, rhythm and intonation** among the features of a good interview response. Your ideas matter, but listeners must be able to **follow your speech easily**.

## Pace
- **Steady, not rushed.** Speaking too fast reduces clarity.
- **Few long pauses.** A short pause between ideas is natural; long silences waste your 45 seconds.
- **Use fillers sparingly.** A short *well* or *let me think* is natural, but repeated *um* and *uh* distract.

## Word stress and rhythm
English is **stress-timed**: stressed syllables carry the rhythm, and unstressed words are shorter and weaker.
- **Content words** (nouns, main verbs, adjectives, adverbs) are stressed.
- **Function words** (*a, the, of, to, and, can*) are usually weak.

Say aloud: **STUdents SHOULD reGISter beFORE the DEADline.**

## Intonation
- **Falling** at the end of a statement: *I live in Pittsburgh.* ↘
- **Rising** at the end of a yes/no question: *Do you live here?* ↗
- **Rise-fall** in lists: *We studied history, ↗ science, ↗ and math.* ↘
- **Emphasis** on new or contrasting information.

## Linking
Native speakers **link** words: *turn it off → tur-ni-toff*, *a lot of → a lotta*. You do not need to copy fast speech, but linking final consonants to the next vowel sounds natural.

## Daily practice
1. Choose a 30-second audio clip.
2. Play one sentence, pause and **repeat** it, copying the rhythm.
3. Record yourself and compare.

## Self-recording checklist
- Can I understand every word?
- Is my speed comfortable?
- Do my stressed syllables stand out?
- Does my voice fall at the end of statements?
`,
        q: [
          mc('Which words are usually stressed in a sentence?', 'Content words such as nouns and main verbs', 'They carry the main meaning.', [
            ['Articles such as a and the', 'Articles are normally weak.'],
            ['Every word equally', 'English is stress-timed, so not every word is stressed.'],
            ['Only the first word', 'Stress depends on meaning, not position.'],
          ]),
          mc('Which intonation pattern is normal for a statement?', 'Falling at the end', 'A falling tone signals a finished statement.', [
            ['Rising at the end', 'A rising tone is normal for a yes/no question.'],
            ['Flat with no change', 'It sounds unnatural.'],
            ['Rising on every word', 'It is distracting.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The 2026 Speaking Section',
    tasks: [
      mc('About how many items does the Speaking section have, according to ETS?', '11', 'ETS lists 11 items: 7 Listen and Repeat and 4 Take an Interview.', [
        ['4', 'This is the number of interview questions.'],
        ['7', 'This is the number of Listen and Repeat items.'],
        ['47', 'This is the number of Listening items.'],
      ]),
      mc('How is each Speaking response scored, according to ETS?', 'By AI, from 0 to 5', 'Each response gets a 0–5 AI score.', [
        ['By a friend', 'The test scores responses automatically.'],
        ['Pass or fail only', 'Scores run from 0 to 5.'],
        ['By length only', 'Several features are scored.'],
      ]),
      mc('Is there preparation time in Take an Interview?', 'No', 'ETS lists no preparation time.', [
        ['Yes, 30 seconds', 'There is no preparation time.'],
        ['Yes, one minute', 'There is no preparation time.'],
        ['Yes, five minutes', 'There is no preparation time.'],
      ]),
      mc('Which word in the sentence “Students should register before the deadline” is least likely to be stressed?', 'the', 'It is a function word.', [
        ['register', 'It is a main verb and is stressed.'],
        ['deadline', 'It is a noun and is stressed.'],
        ['Students', 'It is a noun and is stressed.'],
      ]),
      mc('Which is a good way to practice rhythm?', 'Repeat short sentences after an audio clip and record yourself', 'This builds and checks rhythm.', [
        ['Read silently', 'Rhythm needs speaking aloud.'],
        ['Memorize a word list only', 'It does not train rhythm.'],
        ['Speak as fast as possible', 'Speed reduces clarity.'],
      ]),
      mc('What is the problem with very fast speech?', 'It can reduce clarity', 'Intelligibility is scored.', [
        ['It always raises the score', 'Clarity matters more than speed.'],
        ['It lowers your volume', 'Speed does not change volume.'],
        ['It changes the topic', 'It does not change the topic.'],
      ]),
      tf('Lumina can record and score your speaking in this course.', false, 'Lumina cannot record or score speech, so you must record yourself, and the statement is false.', 'You must say answers aloud and record yourself with another device. The statement is false.'),
    ],
  },
};
