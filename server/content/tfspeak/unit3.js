import { mc, tf } from '../builder.js';

export default {
  summary: 'Longer sentences need stronger chunking and rhythm. Practice sentences with clauses, then work on sound details and smooth recovery from slips.',
  modules: {
    5: {
      summary: 'Longer sentences.',
      sessions: [{
        t: 'Practice set 3: 13 to 22 words',
        s: 'Chunk clauses and keep the rhythm.',
        md: `
## Set 3: longer sentences
Practice each sentence: **hear it once, repeat it, check it**. Use the chunks to help you remember.

1. Because the weather is expected to be bad, / the outdoor orientation will be moved / to the main auditorium.
2. Students who finish the survey / before Friday / will receive a free coffee voucher.
3. The department is looking for volunteers / to help new students / find their classrooms during the first week.
4. Although the lecture was recorded, / attending in person / is strongly recommended for the discussion section.
5. After you register for the workshop, / you will receive an email / with the room number and a reading list.

## How to remember a long sentence
- **Find the structure:** *Because…, …* / *Students who… will…* / *Although…, …* / *After…, …*
- **Remember the order of ideas:** reason → result; condition → action.
- **Keep the stress beats:** say the chunks with their stressed syllables.
- **Link the chunks** with a short pause or a breath, not a long stop.

## Clauses and rhythm
| Sentence part | Rhythm |
| --- | --- |
| Introductory clause | Rising or level, then a short pause |
| Main clause | Falling at the end |
| List of items | Rising on each item, falling on the last |

## Practice order
1. Read the sentence aloud while looking at it.
2. Cover it and repeat from memory.
3. Record and compare.
4. Repeat with a different sentence.
`,
        q: [
          mc('In “Because the weather is expected to be bad, the outdoor orientation will be moved to the main auditorium,” what is the correct order of ideas?', 'Reason, then result', 'Because introduces the reason, and the main clause gives the result.', [
            ['Result, then reason', 'The sentence begins with the reason.'],
            ['Two unrelated ideas', 'The clauses are related.'],
            ['A list of three items', 'The sentence is not a list.'],
          ]),
          mc('Which chunking is best for “Students who finish the survey before Friday will receive a free coffee voucher”?', 'Students who finish the survey / before Friday / will receive a free coffee voucher', 'The chunks follow the structure.', [
            ['Students / who / finish / the / survey', 'The chunks are too small.'],
            ['Students who finish the survey before Friday will receive a free coffee voucher', 'It is one long chunk.'],
            ['Students who finish / the survey before / Friday will receive / a free coffee / voucher', 'The chunks break phrases.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Sound details and self-correction.',
      sessions: [{
        t: 'Endings, unstressed words and smooth recovery',
        s: 'The details that make a repetition exact and intelligible.',
        md: `
## Word endings
Endings carry grammar. Practice saying them clearly.
- **-s / -es:** *students, registers, matches*
- **-ed:** *finished /t/, needed /id/, closed /d/*
- **Final consonants:** *help, hand, test, list*

Exercise: say **asked, helped, finished, moved, wanted** with the correct ending sound.

## Unstressed words
Small words are short and weak, but they must be present.
- *of* → /əv/
- *to* → /tə/
- *and* → /ənd/ or /n/
- *the* → /ðə/ (before a consonant) and /ði/ (before a vowel)

## Common sound pairs to practice
| Pair | Examples |
| --- | --- |
| /ɪ/ and /iː/ | ship / sheep, live / leave |
| /θ/ and /s/ | think / sink |
| /r/ and /l/ | right / light |
| /v/ and /b/ | very / berry |

(These are common difficulties for some learners, but difficulties differ by first language. Record yourself to find your own.)

## Recovering from a slip
1. **Do not apologize** or stop.
2. **Keep the rhythm.**
3. If you notice an error right away, you may **repeat the phrase correctly** and continue, but only if time allows.
4. Never leave a long silence.

## Self-review table
| After recording, ask | If the answer is no |
| --- | --- |
| Did I include every word? | Practice chunking |
| Did I keep every ending? | Practice -s and -ed sounds |
| Was my stress natural? | Mark stressed syllables and repeat |
| Was I smooth? | Slow down slightly and link words |
`,
        q: [
          mc('How is the ending of “finished” pronounced?', '/t/ at the end', 'After the voiceless /ʃ/ sound, -ed is pronounced /t/.', [
            ['/id/ at the end', 'This ending is used after /t/ or /d/, as in wanted.'],
            ['/d/ at the end', 'This ending is used after voiced sounds, as in closed.'],
            ['No ending sound', 'The ending must be pronounced.'],
          ]),
          mc('You slip on a word in the middle of a sentence. What is the best response?', 'Keep going smoothly', 'A smooth response usually scores better than a long pause.', [
            ['Apologize and stop', 'You lose the rest of the response.'],
            ['Wait five seconds', 'You may run out of time.'],
            ['Start a different sentence', 'The task requires the same sentence.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Listen and Repeat II',
    tasks: [
      mc('Which word is pronounced with a /id/ ending?', 'wanted', 'After /t/ or /d/, -ed is pronounced /id/.', [
        ['asked', 'It ends with /t/.'],
        ['moved', 'It ends with /d/.'],
        ['helped', 'It ends with /t/.'],
      ]),
      mc('Which word is pronounced with a /t/ ending?', 'helped', 'After the voiceless /p/, -ed is pronounced /t/.', [
        ['needed', 'It ends with /id/.'],
        ['closed', 'It ends with /d/.'],
        ['wanted', 'It ends with /id/.'],
      ]),
      mc('Which part of the sentence usually has falling intonation at the end?', 'The main clause of a statement', 'A statement ends with a fall.', [
        ['A yes/no question', 'It usually rises.'],
        ['The first item in a list', 'It usually rises.'],
        ['An introductory clause', 'It usually rises or stays level.'],
      ]),
      mc('Which strategy helps with a sentence that begins with “Although…”?', 'Remember the contrast structure: although idea, then main idea', 'Knowing the structure helps recall.', [
        ['Ignore the first clause', 'You must repeat the whole sentence.'],
        ['Say only the main clause', 'The repetition must be exact.'],
        ['Add your own idea', 'The repetition must be exact.'],
      ]),
      mc('What is the best use of the 8–12 seconds when repeating a long sentence?', 'Speak steadily from the start without long pauses', 'A steady response fits in the time.', [
        ['Wait several seconds, then speak quickly', 'You may run out of time and lose clarity.'],
        ['Speak very softly', 'The recording must be intelligible.'],
        ['Stop after the first clause', 'You must repeat the whole sentence.'],
      ]),
      mc('Which unstressed pronunciation of “of” is normal in connected speech?', '/əv/', 'It is weak in connected speech.', [
        ['/ɒf/ with strong stress every time', 'It is usually weak.'],
        ['/ɔːl/', 'This is a different sound.'],
        ['No sound at all', 'The word must be present.'],
      ]),
      tf('If you make a small slip, the best choice is to stop speaking and apologize.', false, 'A smooth, continuous response is better, so the statement is false.', 'Continue smoothly instead. The statement is false.'),
    ],
  },
};
