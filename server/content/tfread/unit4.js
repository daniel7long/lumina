import { mc, tf } from '../builder.js';

export default {
  summary: 'The Read an Academic Passage task uses a short passage of about 200 words and five questions. Learn to find the main idea, locate details and work out vocabulary and reference.',
  modules: {
    7: {
      summary: 'Main idea and supporting details.',
      sessions: [{
        t: 'Reading a 200-word academic passage',
        s: 'Main idea, structure and detail questions.',
        md: `
## The format
According to ETS, Read an Academic Passage uses a passage of about **200 words** from fields such as history, science or economics, followed by **5 multiple-choice questions**. No background knowledge is needed. The text stays on screen while you answer.

ETS does not publish a complete list of question types for this task, so this course teaches the skills such passages commonly test: main idea, detail, vocabulary, reference, inference, purpose and organization. Treat this list as preparation, not as an official specification.

## Original practice passage
> **The Printing Press and Literacy**
> Before the fifteenth century, books in Europe were copied by hand, a slow process that made them expensive and rare. When Johannes Gutenberg introduced movable metal type around 1450, the cost of producing a book fell sharply. Printers soon established workshops in many cities, and the number of available titles grew quickly. As books became cheaper, more people had reason to learn to read. Historians do not agree on how large the effect was, because literacy rates were also shaped by religion, trade and schooling. Still, most agree that printing helped ideas spread faster than ever before.

## Main idea
The **main idea** is the central point of the whole passage. A good main idea answer covers the **whole** text, not one detail.
- Correct: *Printing made books cheaper and helped ideas spread, although its exact effect on literacy is debated.*
- Too narrow: *Gutenberg introduced movable type around 1450.* (one detail)
- Too broad: *Technology has changed society.* (not specific to the passage)

## Detail questions
A detail question asks what the passage **states**. Find the matching sentence and compare. For example: "According to the passage, why did the cost of books fall?" The passage says movable metal type reduced the cost of producing a book.

## Method
1. Read the passage once for the overall idea.
2. Read the question. Identify the **key words**.
3. Return to the passage and find the sentence that matches.
4. Eliminate options that are **not mentioned, contradict the text or are too extreme**.
`,
        q: [
          mc('Which is the best statement of the main idea of the printing-press passage?', 'Printing lowered the cost of books and helped ideas spread, though its effect on literacy is debated', 'It covers the whole passage, including the debate.', [
            ['Gutenberg was born in the fifteenth century', 'This detail does not appear and is not the main idea.'],
            ['Books were copied by hand in Europe', 'This is background, not the central point.'],
            ['Literacy rates depend only on religion', 'The passage says several factors shaped literacy.'],
          ]),
          mc('According to the passage, why did book production become cheaper?', 'Movable metal type reduced production costs', 'The passage links Gutenberg’s invention to the fall in cost.', [
            ['Scribes were paid less', 'The passage does not mention pay for scribes.'],
            ['Paper was discovered', 'The passage does not mention the discovery of paper.'],
            ['Fewer people wanted books', 'The passage says demand grew.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Vocabulary in context and reference.',
      sessions: [{
        t: 'Words, pronouns and links in a passage',
        s: 'Resolve what words and pronouns refer to.',
        md: `
## Vocabulary in context
An academic passage may use a word you do not know or a familiar word with a less common meaning. Use the context.

From the passage: *Printers soon **established** workshops in many cities.*
- Here **established** means *set up or founded*, not *proved*.

Method:
1. Replace the word with your guess and reread. Does the sentence still make sense?
2. Look for clues in nearby sentences.
3. Check the part of speech.

## Reference questions
A reference question asks what a pronoun or phrase refers to. Common words: *it, they, this, these, those, which, such, the former, the latter*.

> *Historians do not agree on how large the effect was, because **literacy rates** were also shaped by religion, trade and schooling. Still, most agree that **it** helped ideas spread faster than ever before.*

If *it* appeared in the last sentence referring to printing, test it: substitute *printing* for *it*. If the sentence makes sense, the reference is correct.

## Reading the links between sentences
Transition words show relationships:
| Relationship | Words |
| --- | --- |
| Addition | also, moreover, in addition |
| Contrast | but, however, although, still, whereas |
| Cause and result | because, so, therefore, as a result |
| Example | for instance, such as |
| Sequence | first, then, later, finally |

In the passage, **Still** signals a contrast: even though historians disagree about the size of the effect, most agree on the spread of ideas.
`,
        q: [
          mc('In “Printers soon established workshops in many cities,” what does “established” mean?', 'Set up', 'Workshops are founded or set up.', [
            ['Proved', 'This meaning does not fit workshops.'],
            ['Destroyed', 'The sentence says the number of titles grew.'],
            ['Visited', 'Printers set up workshops; the sentence does not say they visited them.'],
          ]),
          mc('In the passage, the word “Still” at the start of the last sentence signals what?', 'A contrast with the previous idea', 'It introduces agreement despite the disagreement.', [
            ['An example', 'An example would use words such as for instance.'],
            ['A sequence in time', 'It does not show time order.'],
            ['A definition', 'The sentence does not define a term.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Read an Academic Passage I',
    tasks: [
      mc('About how long is a Read an Academic Passage text, according to ETS?', 'About 200 words', 'The passages are short, about 200 words.', [
        ['About 700 words', 'This describes the older long passages.'],
        ['About 20 words', 'This is much shorter than the task.'],
        ['About 2,000 words', 'This is much longer than the task.'],
      ]),
      mc('How many multiple-choice questions follow each academic passage?', '5', 'ETS lists 5 questions per passage.', [
        ['2', 'Two or three questions follow a daily-life text.'],
        ['10', 'This is the number of incomplete words in Complete the Words.'],
        ['14', 'This is not the number of questions for a passage.'],
      ]),
      mc('Which answer to a main idea question is usually best?', 'One that covers the whole passage', 'The main idea summarizes the entire text.', [
        ['One that repeats a small detail', 'A detail is too narrow.'],
        ['One that states a general idea not in the passage', 'It is too broad.'],
        ['One that contradicts the passage', 'It would be incorrect.'],
      ]),
      mc('A passage says, “Coastal towns flourished as trade increased.” What does “flourished” most likely mean?', 'Grew successfully', 'Towns that benefit from trade grow.', [
        ['Disappeared', 'Trade increasing would not cause towns to disappear.'],
        ['Were attacked', 'No attack is mentioned.'],
        ['Closed their ports', 'Increasing trade suggests open ports.'],
      ]),
      mc('“The company hired new staff. This increased its costs.” What does “This” refer to?', 'The hiring of new staff', '“This” refers to the action in the previous sentence.', [
        ['The company’s name', 'The name is not what increased costs.'],
        ['The costs', 'The costs are what increased.'],
        ['The next sentence', 'A pronoun like this refers back to the previous idea.'],
      ]),
      mc('Which answer should you eliminate on a detail question?', 'An option the passage contradicts', 'A contradicted option cannot be correct.', [
        ['An option that paraphrases a sentence in the passage', 'Paraphrases are usually correct.'],
        ['An option with a matching key idea', 'Matching ideas are usually correct.'],
        ['An option supported by the text', 'Supported options are usually correct.'],
      ]),
      tf('Questions about an academic passage require you to know the topic before reading.', false, 'ETS says no background knowledge is needed, so the statement is false.', 'The statement is false because the passage supplies what you need.'),
    ],
  },
};
