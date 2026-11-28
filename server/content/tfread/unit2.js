import { mc, tf } from '../builder.js';

export default {
  summary: 'Complete the Words is the first and most unusual Reading task. Learn how it works and how grammar, topic and word knowledge help you restore each missing word.',
  modules: {
    3: {
      summary: 'How the task works.',
      sessions: [{
        t: 'Reading a paragraph with missing letters',
        s: 'The format, and how to predict missing words.',
        md: `
## The format
According to ETS, a Complete the Words task shows an academic paragraph of about **70–100 words**. The **first sentence is complete**. After that, the **second half of every second word is deleted**, and you type the missing letters. There are **10** incomplete words in a paragraph.

The task tests how well you process written text for **both meaning and form**: you need to know what the text is about and how English words are built.

### Example (original)
> Honeybees communicate with a special movement. A bee that finds food returns to the hive and perf___ a "dance" that sh___ other bees where the flowers are.

- *perf___* → **performs** (a present-tense verb after *and*, matching *returns*).
- *sh___* → **shows** (a third-person singular verb after *that* in a relative clause).

## How to restore a word
1. **Read the whole paragraph first**, ignoring the gaps, to find the topic.
2. For each gap, ask: **what part of speech** goes here? (noun, verb, adjective, preposition, article)
3. Check **form**: singular or plural, tense, *-s* ending, *-ing* or *-ed*.
4. Use the **visible letters** as a pattern. The number of missing letters is often a clue.
5. **Reread** the sentence with your answer to make sure it makes sense.

## Which letters are deleted?
ETS describes the task as deleting the **second half** of every second word, so you see the **beginning** of each incomplete word and type the **ending**. The number of blanks hints at how long the word is: *sh___* has a short ending, while *environ______* needs a longer one. Always check that the whole word fits the sentence.
`,
        q: [
          mc('In “A bee that finds food returns to the hive and perf___ a dance,” which word best completes perf___?', 'performs', 'The verb matches “returns” and fits the meaning.', [
            ['permits', 'Permits does not begin with the visible letters perf.'],
            ['perfect', 'Perfect begins with perf, but it is an adjective and does not fit after “and” here.'],
            ['performed', 'Performed is past tense and does not match “returns” in the present tense.'],
          ]),
          mc('What is the best first step in a Complete the Words paragraph?', 'Read the whole paragraph to understand the topic', 'Knowing the topic helps you predict missing words.', [
            ['Fill in the longest gap first', 'You need context to predict words.'],
            ['Skip the paragraph', 'The task must be completed.'],
            ['Type random letters to see feedback', 'There is no feedback during the test.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Strategies and word knowledge.',
      sessions: [{
        t: 'Grammar clues, collocations and word parts',
        s: 'Practical ways to choose the right missing letters.',
        md: `
## Grammar clues
Many missing words are **function words** (*the, of, that, which, because, although, between*). Think about sentence structure:
- After an article (*a, an, the*) you need a noun or an adjective.
- After a subject you need a verb.
- After a preposition (*in, on, of, between*) you need a noun phrase.
- A comparison with *than* needs a comparative (*more, less, -er*).

## Collocations
Words often appear together: *make a decision*, *conduct research*, *play a role*, *heavily dependent on*. If you see *rese____* after *conduct*, **research** is a strong candidate.

## Word families and word parts
Notice the ending that is visible:
- *-tion, -ment, -ness* → noun
- *-ive, -ous, -al, -ic* → adjective
- *-ly* → adverb
- *-ize, -ify* → verb

If *develop____* appears after *economic*, think **development**. If *impor____* appears after *is*, think **important**.

## Spelling counts
The answer must be **spelled correctly**. Practice the spelling of common academic words: *environment, government, necessary, separate, evidence, achieve, receive, occur*.

## Avoid common errors
- Missing the *-s* on third-person singular verbs.
- Choosing a word that fits the visible letters but **not the meaning**.
- Forgetting plurals after words such as *several, many, both*.
- Typing letters that are already visible.

### Practice habit
Read short academic paragraphs and cover every second half-word with your finger. Predict the missing letters, then check.
`,
        q: [
          mc('In “Scientists often conduct rese____ before publishing their results,” which word fits?', 'research', 'It is a strong collocation with conduct and fits the visible letters.', [
            ['reserve', 'Reserve begins with rese, but it does not fit the meaning after “conduct.”'],
            ['resemble', 'Resemble begins with rese, but it is a verb and does not fit after “conduct.”'],
            ['researchers', 'Researchers is a plural noun and does not fit the meaning “conduct ___ before publishing.”'],
          ]),
          mc('In “It is impor____ to sleep well before an exam,” which word completes impor____?', 'important', 'An adjective follows “is,” and important fits the meaning.', [
            ['importance', 'A noun does not fit after “It is” in this sentence.'],
            ['importantly', 'An adverb does not fit after “is” here.'],
            ['imported', 'Imported does not fit the meaning of the sentence.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Complete the Words',
    tasks: [
      mc('In the Complete the Words task, which part of the paragraph is left intact?', 'The first sentence', 'It gives the topic and context.', [
        ['The last sentence', 'The first sentence, not the last, is intact.'],
        ['Every second word', 'Part of every second word is deleted.'],
        ['The title only', 'The first sentence is intact.'],
      ]),
      mc('How many incomplete words does one Complete the Words paragraph contain, according to ETS?', '10', 'The paragraph has 10 words with missing letters.', [
        ['5', 'This is the number of questions about an academic passage.'],
        ['30', 'This is the total number of Complete the Words items across the section in the ETS specification.'],
        ['50', 'This is the total number of Reading items.'],
      ]),
      mc('Which word best completes “Plants need sunlight to prod___ food”?', 'produce', 'The infinitive verb fits after “to.”', [
        ['product', 'A noun does not fit after “to” in this sentence.'],
        ['production', 'A noun does not fit after “to.”'],
        ['productive', 'An adjective does not fit after “to.”'],
      ]),
      mc('Which word best completes “The two cities differ bet____ their climates”?', 'between', 'The preposition is a fixed pattern: differ between.', [
        ['better', 'Better begins with bet, but it does not fit the meaning of the sentence.'],
        ['betray', 'Betray begins with bet, but it does not fit the sentence.'],
        ['betting', 'Betting begins with bet, but it does not fit the sentence.'],
      ]),
      mc('Which strategy is most helpful for a missing function word?', 'Think about the grammar of the sentence', 'Function words follow grammatical patterns.', [
        ['Choose the longest word', 'Length is not a reliable guide.'],
        ['Ignore the surrounding words', 'Context is the main clue.'],
        ['Use only the first letter', 'The surrounding grammar is more useful.'],
      ]),
      mc('A student types “importent” instead of “important.” What is the problem?', 'A spelling error', 'The answer must be spelled correctly.', [
        ['The word is the wrong part of speech', 'The part of speech is right, but the spelling is wrong.'],
        ['The word is too short', 'Length is not the problem.'],
        ['The first sentence was missing', 'The first sentence is always intact.'],
      ]),
      tf('You should only type the missing letters, not the whole word.', true, 'Correct. The visible letters are already in the answer box.', 'You type only the letters that were deleted, so the statement is true.'),
    ],
  },
};
