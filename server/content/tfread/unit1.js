import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how the redesigned Reading section is built, how it adapts to you and how it is scored, then add reading strategies that work on every task.',
  modules: {
    1: {
      summary: 'Format, adaptivity and scoring.',
      sessions: [{
        t: 'What the 2026 Reading section looks like',
        s: 'Task types, items, adaptivity and the 1–6 scale.',
        md: `
## Course note
This course is independent preparation. It is **not** made by ETS, and the practice items are original. Always check **ets.org/toefl** for the latest official information, because test details can change.

## The section at a glance
Since **January 2026**, the TOEFL iBT Reading section is built from three task types, according to ETS:

| Task type | What you do | Text |
| --- | --- | --- |
| Complete the Words | Type the missing letters of words in a paragraph | About 70–100 words, 10 incomplete words |
| Read in Daily Life | Answer 2 or 3 multiple-choice questions about an everyday text | About 15–150 words (notices, menus, schedules, emails, message chains) |
| Read an Academic Passage | Answer 5 multiple-choice questions about a short passage | About 200 words (history, science, economics and similar) |

ETS lists **50 items** and about **30 minutes** for the section. The old 700-word passages are gone. The texts are shorter, so you read more texts and switch topics more often.

## Adaptive design
Reading is **multistage adaptive**. You first complete a **router** module. Based on your performance, the second stage gives you a **lower** or **upper** module. Harder items are in the upper module. The test also includes some unscored items that ETS uses to trial new questions, and you cannot tell which are which, so treat every item as if it counts.

Because the test adapts, **time and item numbers may vary slightly**.

## Scoring
Reading, Listening, Writing and Speaking each receive a **band score from 1 to 6 in half-band steps** (1, 1.5, 2 ... 6). Bands are aligned to the **CEFR**: for example 4 to 4.5 is B2, 5 to 5.5 is C1 and 6 is C2. The overall score is the **average of the four section scores, rounded to the nearest half band**. For two years after January 2026, score reports also show a comparable 0–120 score.

## Two rules to remember
- You must answer at least one question in each section or none of your sections will be scored.
- There are no scheduled breaks.
`,
        q: [
          mc('Which description matches the Complete the Words task?', 'Typing the missing letters of words in a short paragraph', 'This is the format ETS describes for the task.', [
            ['Choosing the best reply to a spoken question', 'This describes Listen and Choose a Response in the Listening section.'],
            ['Writing an email in response to a situation', 'This is a Writing task.'],
            ['Answering ten questions about a 700-word passage', 'Long 700-word passages are no longer used.'],
          ]),
          mc('What does “multistage adaptive” mean for the Reading section?', 'Your performance on the first module decides whether you get an easier or harder second module', 'The router module determines the lower or upper module.', [
            ['The test changes its questions each time you click', 'The adaptation happens between stages, not after every click.'],
            ['You can choose your own difficulty', 'The test chooses the second stage based on performance.'],
            ['Only the Writing section is adaptive', 'Reading and Listening are the adaptive sections.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Reading strategies that transfer.',
      sessions: [{
        t: 'Skimming, scanning, context and word parts',
        s: 'Core strategies for short, varied texts.',
        md: `
## Three ways to read
- **Skimming:** read quickly for the main idea (title, first sentence, last sentence, repeated key words).
- **Scanning:** look for a specific detail (a name, number, time, place).
- **Close reading:** read slowly when a question asks about meaning, implication or purpose.

Choose the mode that fits the **question**. A question about a time on a schedule needs scanning, and a question about why an author included an example needs close reading.

## Reading the question first
For short texts it can help to read the **questions first**, then read the text with those questions in mind. Always return to the text to check an answer. Do not choose an option only because it "sounds right."

## Guessing a word from context
When you meet an unknown word:
1. Read the whole sentence and the sentence around it.
2. Decide the **part of speech** (noun, verb, adjective, adverb).
3. Look for **clues**: a definition, an example, a contrast (*but, however, unlike*) or a cause and effect link.
4. Check **word parts**: prefixes (*un-, re-, pre-, mis-*), roots and suffixes (*-tion, -ive, -ous*).

### Example
*The mayor's remarks were deliberately ambiguous, so reporters left unsure what she meant.* The clause after *so* shows the result: unsure what she meant. So **ambiguous** means unclear or open to more than one meaning.

## Time habits
- Do not spend several minutes on one item. Mark your best guess and move on.
- Never leave an answer blank. A guess is better than no answer.
- Keep your attention fresh: each task is short, so treat each one as new.
`,
        q: [
          mc('A question asks, “At what time does the library close on Friday?” Which reading mode is best?', 'Scanning for the time', 'The question asks for one specific detail.', [
            ['Skimming for the main idea', 'Skimming does not locate a single detail quickly.'],
            ['Close reading of every sentence', 'This wastes time on a detail question.'],
            ['Ignoring the text', 'The answer must come from the text.'],
          ]),
          mc('The report was filled with jargon, terms that only specialists could understand. What does “jargon” most likely mean?', 'Specialized language used by a particular group', 'The phrase after the comma defines it.', [
            ['Clear, simple language', 'The text says only specialists could understand it.'],
            ['A type of report', 'The sentence says the report was filled with jargon.'],
            ['A mistake in spelling', 'The clue concerns understanding, not spelling.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The 2026 Reading Section',
    tasks: [
      mc('About how many items does ETS list for the Reading section?', '50', 'ETS lists about 50 items and about 30 minutes.', [
        ['5', 'This is the number of questions about one academic passage.'],
        ['10', 'This is the number of incomplete words in one Complete the Words paragraph.'],
        ['120', 'This is the total number of items across all four sections.'],
      ]),
      mc('Which is a Reading task type in the 2026 test?', 'Read in Daily Life', 'It uses everyday texts such as notices, menus and emails.', [
        ['Listen and Repeat', 'This is a Speaking task.'],
        ['Build a Sentence', 'This is a Writing task.'],
        ['Take an Interview', 'This is a Speaking task.'],
      ]),
      mc('A student gets a section score of 4.5. Which CEFR level does this band align with?', 'B2', 'Bands 4 and 4.5 align with B2.', [
        ['A2', 'A2 corresponds to bands 2 and 2.5.'],
        ['C1', 'C1 corresponds to bands 5 and 5.5.'],
        ['C2', 'C2 corresponds to band 6.'],
      ]),
      mc('The four section scores are 5, 4.5, 5 and 5.5. What is the overall score?', '5', 'The average is 5.0, already a half band.', [
        ['4.5', 'The average is 5.0, not 4.5.'],
        ['5.5', 'The average is 5.0, not 5.5.'],
        ['20', 'The overall score is an average on the 1–6 scale, not a sum.'],
      ]),
      mc('You are unsure of an item and have already spent a long time on it. What is the best action?', 'Choose your best answer and move on', 'Time is limited, and a guess is better than no answer.', [
        ['Leave it blank', 'A blank answer earns no credit.'],
        ['Spend the rest of the section on it', 'This leaves no time for other items.'],
        ['Close the test', 'You must complete the section.'],
      ]),
      mc('Which clue best shows that “scarce” means “rare” in this sentence? “Fresh water is scarce in the region, so farmers must carefully ration it.”', 'The farmers must ration the water', 'Rationing is done when a resource is limited.', [
        ['The word “region”', 'It names a place and gives no clue about the meaning.'],
        ['The word “fresh”', 'It describes the water and does not explain “scarce.”'],
        ['The word “farmers”', 'It names the people and does not give a clue.'],
      ]),
      tf('Because the Reading section is adaptive, every unscored trial item is clearly marked so you can skip it.', false, 'Trial items are not marked, so you should treat every item as if it counts.', 'Correct. You cannot tell which items are unscored.'),
    ],
  },
};
