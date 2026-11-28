import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'Finish by learning to edit quickly for common errors, check that a response meets the task, and plan your time and practice.',
  modules: {
    9: {
      summary: 'Editing for accuracy.',
      sessions: [{
        t: 'Common errors and a 60-second check',
        s: 'Find and fix the mistakes that cost the most.',
        md: `
## The 60-second check
In the last minute, check these in order:
1. **Task:** Did I cover every required point or answer the question?
2. **Sentences:** Is each one complete, with a subject and a verb?
3. **Agreement and tense:** Do subjects and verbs match? Is the tense consistent?
4. **Spelling and capitals:** Names, the word *I*, the first word of each sentence.
5. **Punctuation:** End marks, commas after introductory phrases, apostrophes.

## Frequent errors and fixes
| Error | Incorrect | Correct |
| --- | --- | --- |
| Subject-verb agreement | The students *was* late. | The students *were* late. |
| Missing -s | She *write* every day. | She *writes* every day. |
| Article | I need *a advice*. | I need *some advice*. (advice is uncountable) |
| Tense shift | Yesterday I *go* to the library. | Yesterday I *went* to the library. |
| Word form | It is *importantly* to sleep. | It is *important* to sleep. |
| Run-on | I was late I missed the bus. | I was late **because** I missed the bus. |
| Fragment | Because it rained. | We stayed inside because it rained. |
| Preposition | I am agree *with* you. | I *agree* with you. |
| Plural | Many *student* attended. | Many *students* attended. |
| Their/there, your/you’re | *You’re* essay is good. | *Your* essay is good. |

## Confusing words
*affect/effect, advice/advise, accept/except, its/it’s, then/than, lose/loose.*

## Keep it clear
In a timed test, **simple and correct** is better than complex and wrong. Use a variety of structures, but only ones you control.

## Checking the task
Reread the prompt. For an email: did you cover all three points? For a discussion: did you state a position and add something new?
`,
        q: [
          mc('Which sentence is correct?', 'Many students attended the lecture.', 'The plural noun and past verb are correct.', [
            ['Many student attended the lecture.', 'Many needs a plural noun.'],
            ['Many students attends the lecture.', 'A plural subject needs a plural verb form and past tense.'],
            ['Many students is attending the lecture.', 'The verb does not agree with the plural subject.'],
          ]),
          mc('Which sentence corrects “I am agree with you”?', 'I agree with you.', 'Agree is a verb, so no be-verb is needed.', [
            ['I am agreeing with you.', 'Agree is normally used in the simple form, so this is less natural.'],
            ['I am agree to you.', 'The preposition and verb form are wrong.'],
            ['I agreeing with you.', 'The verb form is incomplete.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Time management and practice plan.',
      sessions: [{
        t: 'A plan for the section and for the weeks before the test',
        s: 'Pacing, self-assessment and feedback.',
        md: `
## Pacing the section
ETS lists about **23 minutes** for 12 items. A practical plan:
| Task | Plan |
| --- | --- |
| Build a Sentence | Work steadily; do not spend long on one item |
| Write an Email | 7 minutes: 1 to plan, 5 to write, 1 to check |
| Write for an Academic Discussion | 10 minutes: 1 to read and plan, 8 to write, 1 to check |

## Weekly practice plan
| Day | Practice | Time |
| --- | --- | --- |
| 1 | 10 Build a Sentence items from your own sentences | 15 min |
| 2 | One timed email (7 min) and a checklist review | 20 min |
| 3 | One timed discussion response (10 min) | 20 min |
| 4 | Edit yesterday’s response and list your top 3 errors | 20 min |
| 5 | Write the same response again, using corrections | 15 min |

## Self-assessment checklist
- Did I answer the prompt completely?
- Did I explain and give an example?
- Did I use more than one sentence pattern?
- Did I control spelling, punctuation and capitals?
- Did I write enough (email: all three points; discussion: 100+ words)?

## Getting feedback
Keep a **mistake log** and ask a teacher, tutor or experienced peer to read your responses. Compare your writing with the model answers, but do not memorize them: the scoring looks at how well you respond to **each** prompt.

## Typing
The test is on a computer, so practice **typing** in English and using the keyboard without looking at it.

## On test day
Use the official materials at **ets.org/toefl**. You must complete at least one Writing task for the section to be scored.
`,
        q: [
          mc('Which habit helps most with recurring errors?', 'Keep a mistake log and review it', 'It shows patterns you can correct.', [
            ['Never review your writing', 'You will repeat the errors.'],
            ['Memorize a model answer', 'This does not build flexible skills.'],
            ['Only write long sentences', 'Length does not prevent errors.'],
          ]),
          mc('Why should you practice typing in English?', 'The test is taken on a computer', 'Typing speed and accuracy affect how much you can write.', [
            ['Handwriting is scored', 'The responses are typed.'],
            ['Typing replaces grammar', 'You still need accurate grammar.'],
            ['It makes tasks longer', 'It helps you write within the time limit.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Revision, Accuracy and Test Strategy',
    tasks: [
      mc('Which sentence has correct subject-verb agreement?', 'The students were late.', 'Plural subject, plural verb.', [
        ['The students was late.', 'Was does not agree with a plural subject.'],
        ['The student were late.', 'Were does not agree with a singular subject.'],
        ['The students is late.', 'Is does not agree with a plural subject.'],
      ]),
      mc('Which word completes “It is ___ to sleep before an exam”?', 'important', 'An adjective follows is.', [
        ['importance', 'A noun does not fit here.'],
        ['importantly', 'An adverb does not fit here.'],
        ['import', 'It does not fit the meaning.'],
      ]),
      mc('Which sentence fixes the run-on “I was late I missed the bus”?', 'I was late because I missed the bus.', 'Because joins the two clauses.', [
        ['I was late I missed, the bus.', 'The comma is misplaced and the run-on remains.'],
        ['I was late missed the bus.', 'It lacks a subject for missed.'],
        ['I was because late missed the bus.', 'The word order is incorrect.'],
      ]),
      mc('Which sentence uses its/it’s correctly?', 'The university changed its policy.', 'Its shows possession.', [
        ['The university changed it’s policy.', 'It’s means it is or it has.'],
        ['The university changed its’ policy.', 'Its’ is not a word.'],
        ['The university changed it policy.', 'The possessive form is missing.'],
      ]),
      mc('What should you check first in the 60-second check?', 'That every required point is covered', 'Meeting the task is the first requirement.', [
        ['That the font looks nice', 'Font is not scored.'],
        ['That the response has many difficult words', 'Accuracy matters more than difficult words.'],
        ['That the first sentence is long', 'Length alone does not matter.'],
      ]),
      mc('Which is the best advice about complex sentences in a timed test?', 'Use varied structures that you can control accurately', 'Variety with accuracy is the goal.', [
        ['Always use the longest sentences you can', 'Long sentences can increase errors.'],
        ['Never use complex sentences', 'Syntactic variety is scored.'],
        ['Copy sentences from a model', 'Responses must fit each prompt.'],
      ]),
      wr({
        points: 15,
        prompt: 'Edit this paragraph and rewrite it correctly (about 40–70 words): “Yesterday I go to the library because I need a advice from the librarian. She are very helpful and she give me many book about history I was very happy.”',
        scenario: 'Fix the agreement, tense, article, plural, run-on and word-choice errors. Keep the meaning the same.',
        starter: 'Yesterday I went to the library ',
        minWords: 35,
        checklist: ['Past tense: went, needed, was', 'Some advice (not a advice)', 'She was very helpful and gave', 'many books (plural)', 'Fix the run-on with punctuation or a conjunction'],
        modelAnswer: 'Yesterday I went to the library because I needed some advice from the librarian. She was very helpful and gave me many books about history. I was very happy.',
        rubric: { criteria: [
          crit('tense', 'Past tense', 'Corrects the verb tense.', 30, [
            K.any('went', ['went'], 'You corrected go to went.', 'Change go to went.'),
            K.any('needed', ['needed', 'was looking for', 'wanted'], 'You corrected need.', 'Change need to needed.'),
          ]),
          crit('agreement', 'Agreement and plural', 'Corrects she are, give and book.', 30, [
            K.any('was', ['she was', 'she is'], 'You fixed the verb with she.', 'Use she was (or she is).'),
            K.any('plural', ['books'], 'You made book plural.', 'Make book plural: books.'),
          ]),
          crit('article', 'Article', 'Corrects a advice.', 20, [
            K.any('advice', ['some advice', 'advice'], 'You fixed the article.', 'Use some advice or advice, not a advice.'),
          ]),
          crit('length', 'Complete rewrite', 'Rewrites the whole paragraph.', 20, [
            K.words('len', 30, 'You rewrote the whole paragraph.', 'Rewrite the whole paragraph, not only part of it.'),
          ]),
        ] },
      }),
      tf('A simple response with few errors can score better than a complex response with many errors that make meaning unclear.', true, 'Correct. Accuracy and clarity matter, so a response you control well is the better choice.', 'Clear, accurate writing is rewarded. A response with many meaning-blocking errors is weaker, so the statement is true.'),
    ],
  },
};
