import { mc, tf } from '../builder.js';

export default {
  summary: 'Meaning in literature rarely sits on the surface. Learn to state a theme, follow a symbol and read irony and paradox.',
  modules: {
    11: {
      summary: 'Theme, symbol and motif.',
      sessions: [{
        t: 'From topic to theme',
        s: 'Stating a theme and tracing symbols and motifs.',
        md: `
## Topic and theme
A **topic** is a subject: *love*, *power*, *memory*. A **theme** is a **claim** the work makes about the topic, written as a complete sentence.

| Topic | Possible theme |
| --- | --- |
| Memory | Memory can preserve people but also reshape the past to suit our needs |
| Ambition | Unchecked ambition can destroy the relationships it was meant to serve |
| Home | A sense of home depends on the people we share it with more than on place |

Good themes are specific to the text, supported by several details and not a cliché such as “money is the root of all evil.”

## Symbol and motif
- A **symbol** is an object, person, place or action that stands for something beyond itself. Its meaning is built by the text. The green light in *The Great Gatsby* is widely read as a symbol of Gatsby’s longing.
- A **motif** is a **repeated** element (image, phrase, object or situation) that builds meaning across a work.

### How to trace a symbol
1. Find each appearance.
2. Note what is happening and how the character feels.
3. Ask whether its meaning changes.
4. Link the pattern to a larger idea.

An object that appears only once may be a detail. An object that returns, changes or is emphasized is more likely a symbol.
`,
        q: [
          mc('Which choice is a theme rather than a topic?', 'Ambition can destroy the relationships it was meant to serve', 'It makes a claim in a complete sentence.', [
            ['Ambition', 'This names a subject only.'],
            ['Power and ambition', 'This lists subjects without a claim.'],
            ['The story’s main character', 'This names a character and not an idea.'],
          ]),
          mc('How does a motif differ from a symbol?', 'A motif is a repeated element that builds meaning, while a symbol stands for something beyond itself', 'A symbol may appear once; a motif recurs.', [
            ['A motif is always a character', 'A motif can be any repeated image, phrase or situation.'],
            ['A symbol is a type of rhyme', 'A symbol is not a sound device.'],
            ['They mean exactly the same thing', 'They overlap but are not identical.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Irony, paradox and ambiguity.',
      sessions: [{
        t: 'When meaning is double',
        s: 'Three kinds of irony, paradox and ambiguity.',
        md: `
## Irony
- **Verbal irony:** a speaker says one thing but means another (often the opposite).
- **Situational irony:** the outcome is the opposite of what is expected. A fire station burns down.
- **Dramatic irony:** the audience knows something that a character does not.

### A public-domain example
Jane Austen opens *Pride and Prejudice* (1813) with:

> It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

The sentence sounds like a solemn statement of fact. But the story that follows shows the idea belongs to **families with unmarried daughters**, who see wealthy single men as opportunities. The gap between the confident tone and the real source of the “truth” is **verbal irony**, and it gently mocks the social world of the novel.

## Paradox and ambiguity
A **paradox** seems self-contradictory but may express a truth (“the child is father of the man”). **Ambiguity** occurs when a text supports more than one reasonable interpretation. In literary analysis, ambiguity is not a flaw. It can be a source of richness. The task is to show how the text supports each reading, and which details do so.

### Another example
Charles Dickens begins *A Tale of Two Cities* (1859): “It was the best of times, it was the worst of times.” The **paradox** and the **parallel structure** signal an age of extremes.
`,
        q: [
          mc('Austen’s opening sentence of Pride and Prejudice is best described as', 'verbal irony, because the confident statement hides a more self-interested truth', 'The tone is solemn, but the meaning is gently mocking.', [
            ['situational irony, because it ends the novel', 'The sentence opens the novel.'],
            ['dramatic irony, because it is spoken by an actor', 'The sentence is narration in a novel.'],
            ['onomatopoeia', 'It does not imitate a sound.'],
          ]),
          mc('Which description fits ambiguity in literature?', 'A text supports more than one reasonable interpretation', 'Strong analysis shows how details support each reading.', [
            ['A text that has no meaning', 'Ambiguity means several possible meanings, not none.'],
            ['A mistake by the author', 'Ambiguity is often intentional.'],
            ['A word that rhymes with another', 'That describes rhyme.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Theme, Symbol and Irony',
    tasks: [
      mc('Which statement is the best expression of a theme?', 'Pride can blind a person to the faults that others see clearly', 'It is a complete claim about human experience.', [
        ['Pride', 'It names a topic.'],
        ['A story about a proud man', 'This describes the story, not an idea.'],
        ['Pride, blindness and faults', 'It lists words with no claim.'],
      ]),
      mc('A symbol is', 'something that stands for an idea beyond itself', 'The text develops its meaning.', [
        ['a repeated sound at the start of words', 'That is alliteration.'],
        ['the turning point of the plot', 'That is the climax.'],
        ['a speech given while alone', 'That is a soliloquy.'],
      ]),
      mc('A fire station burns down. This is an example of', 'situational irony', 'The outcome is the opposite of what is expected.', [
        ['verbal irony', 'No one is speaking with a hidden meaning.'],
        ['dramatic irony', 'The statement does not describe audience knowledge.'],
        ['assonance', 'Assonance concerns vowel sounds.'],
      ]),
      mc('A character says “What lovely weather!” in the middle of a storm. This is', 'verbal irony', 'The speaker means the opposite of what is said.', [
        ['situational irony', 'This is about the statement, not the outcome of events.'],
        ['personification', 'Weather is not given human traits.'],
        ['a symbol', 'No object is standing for an idea.'],
      ]),
      mc('What do Dickens’s words “the best of times, the worst of times” show?', 'A paradox and parallel structure that suggest extremes', 'The two opposites appear in matching form.', [
        ['A simile', 'There is no “like” or “as.”'],
        ['An example of onomatopoeia', 'No sound is imitated.'],
        ['A detailed description of one room', 'The lines are general.'],
      ]),
      mc('Which is the strongest approach to a recurring image in a novel?', 'Trace each appearance and explain how its meaning develops', 'Patterns build a stronger case.', [
        ['Mention it once and move on', 'One mention does not show a pattern.'],
        ['Say it is “symbolic” without evidence', 'A claim needs support.'],
        ['Ignore it and summarize the plot', 'Summary is not analysis.'],
      ]),
      tf('Ambiguity means that any interpretation of a text is equally valid.', false, 'Valid interpretations must be supported by details in the text.', 'Correct. Ambiguity means more than one reasonable reading, each supported by evidence.'),
    ],
  },
};
