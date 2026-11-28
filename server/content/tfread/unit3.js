import { mc, tf } from '../builder.js';

export default {
  summary: 'Read in Daily Life uses short everyday texts. Learn to identify purpose, find details fast and read between the lines.',
  modules: {
    5: {
      summary: 'Everyday texts and their purposes.',
      sessions: [{
        t: 'Notices, menus, schedules and messages',
        s: 'Purpose, audience and fast detail search.',
        md: `
## What the task uses
According to ETS, Read in Daily Life uses **nonacademic texts** of about **15–150 words**, followed by **2 or 3 multiple-choice questions**. Text types include a poster, sign or notice, a menu, a social media post or web page, a schedule, an email and a chain of text messages.

## Purpose and audience
Ask three questions:
1. **Who** wrote it, and **who** is it for?
2. **Why** was it written (to inform, request, advertise, warn, invite, apologize)?
3. **What** should the reader do?

### Example (original)
> **Maple Street Library** — Starting March 3, the library will close at 6 p.m. on weekdays during building repairs. The reading room remains open until 8 p.m. on Saturdays. Book returns can be made at the outdoor drop box at any time.

- **Purpose:** to inform readers of a temporary change.
- **Detail question:** "When can books be returned?" Answer: at any time, using the outdoor drop box.
- **Trap:** The closing time of **6 p.m.** applies to weekdays, and Saturday hours are different.

## Detail search strategy
- Read the question and underline **key words** (dates, names, amounts, places).
- **Scan** the text for those words or their synonyms.
- Check for **exceptions** (*except, unless, only, until, no later than*).
- Watch for **changed information** (*instead, rescheduled, new*).

## Reading schedules and menus
Schedules use **rows and columns**. Match the right row with the right column before you answer. Menus use categories and notes such as *(vegetarian)* or *served until 11 a.m.*
`,
        q: [
          mc('A notice says, “The pool will be closed Monday through Wednesday for cleaning and will reopen Thursday at 7 a.m.” When can swimmers next use the pool?', 'Thursday morning', 'The notice says it reopens Thursday at 7 a.m.', [
            ['Wednesday evening', 'The pool is closed through Wednesday.'],
            ['Monday at 7 a.m.', 'This is when the closure begins.'],
            ['Friday', 'It reopens Thursday.'],
          ]),
          mc('What is the main purpose of the library notice in the lesson?', 'To tell readers about a temporary change in opening hours', 'It informs readers of a building-repair schedule.', [
            ['To advertise a new book sale', 'No sale is mentioned.'],
            ['To announce that the library will close permanently', 'The change is temporary.'],
            ['To ask readers for donations', 'No request for money appears.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Inference, tone and implied meaning.',
      sessions: [{
        t: 'What a text suggests but does not say',
        s: 'Making supported inferences from short everyday messages.',
        md: `
## Inference
An **inference** is a conclusion supported by evidence in the text, though not stated directly. Correct inferences are **close to the text**. Wrong inferences go too far or use outside knowledge.

### Example (original message chain)
> **Maya:** Are you still coming to the study group?
> **Leo:** My bus broke down. I'm walking now, but it's about 2 miles.
> **Maya:** No rush. We'll be here until 8.

**Question:** What does Maya imply?
**Answer:** Leo can still join the group even if he is late.
- She says *no rush* and *we'll be here until 8*, so lateness is acceptable.
- It does **not** say she is angry, and it does **not** say the group will cancel.

## Tone and register
- **Informal:** abbreviations, short sentences, emoji, *gonna*, *no worries*.
- **Formal:** *Dear Professor*, *I would appreciate*, *Please be advised*.
- **Polite request:** *Could you possibly...*, *Would it be okay if...*
- **Warning:** *Do not*, *Caution*, *Failure to...*

## Common traps
- **Too extreme:** answers with *always, never, only* are often too strong.
- **True but not relevant:** the option is true in the text but does not answer the question.
- **Word match without meaning:** an option repeats words from the text but changes the meaning.

### Strategy
Find the sentence that supports your answer. If you cannot point to a supporting line, reconsider.
`,
        q: [
          mc('Leo writes, “I’m not sure I can make it tonight. Something came up.” What does he most likely mean?', 'He may not be able to attend', 'Not sure I can make it signals uncertainty about attending.', [
            ['He has already arrived', 'He says he is not sure he can attend.'],
            ['He is angry at the group', 'There is no sign of anger.'],
            ['He wants to change the topic', 'The message concerns attendance.'],
          ]),
          mc('Which option is most likely to be a trap answer?', 'An option containing “never” that the text does not support', 'Extreme words often make an option too strong.', [
            ['An option that paraphrases a line in the text', 'This is typically correct.'],
            ['An option that answers the question asked', 'This is typically correct.'],
            ['An option supported by a specific sentence', 'This is typically correct.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Read in Daily Life',
    tasks: [
      mc('Approximately how long are Read in Daily Life texts, according to ETS?', 'About 15–150 words', 'They are short and nonacademic.', [
        ['About 700 words', 'This describes the old long passages.'],
        ['About 5–10 words', 'This is too short.'],
        ['About 1,000 words', 'These texts are much shorter.'],
      ]),
      mc('How many questions follow each Read in Daily Life text?', '2 or 3', 'ETS describes 2 or 3 multiple-choice questions, depending on text length.', [
        ['1 only', 'Each text has 2 or 3 questions.'],
        ['5', 'This is the number for an academic passage.'],
        ['10', 'This is the number of incomplete words in Complete the Words.'],
      ]),
      mc('A restaurant menu says, “Soup of the day (vegetarian) is served until 3 p.m.” Which statement must be true?', 'The soup of the day is a vegetarian dish', 'The menu labels it as vegetarian.', [
        ['The soup is available after 3 p.m.', 'It is served only until 3 p.m.'],
        ['The soup contains meat', 'It is labeled vegetarian.'],
        ['The restaurant closes at 3 p.m.', 'Only the soup’s serving time is given.'],
      ]),
      mc('An email says, “Please submit the form no later than Friday.” What is the deadline?', 'Friday', '“No later than Friday” means Friday is the last day.', [
        ['The Monday before Friday', 'The deadline is Friday.'],
        ['The Saturday after Friday', 'Saturday would be late.'],
        ['There is no deadline', 'A deadline is given.'],
      ]),
      mc('A friend texts, “Can’t talk now, in class. Call you at 5?” What does the friend want?', 'To speak by phone at 5 o’clock', 'The friend proposes a time to call.', [
        ['To cancel the class', 'The friend is in class.'],
        ['To meet in person at 5', 'The friend says “call.”'],
        ['To stop being friends', 'Nothing in the text suggests this.'],
      ]),
      mc('Which type of answer should you be careful with?', 'One that uses the exact words from the text but changes the meaning', 'Such options can look correct while being wrong.', [
        ['One that paraphrases the correct sentence', 'This is typically correct.'],
        ['One that directly answers the question', 'This is typically correct.'],
        ['One supported by a specific sentence', 'This is typically correct.'],
      ]),
      tf('A good inference must be supported by evidence in the text.', true, 'Correct. Inferences are conclusions based on what the text says.', 'An inference needs support from the text, so the statement is true.'),
    ],
  },
};
