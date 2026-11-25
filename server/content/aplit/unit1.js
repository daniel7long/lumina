import { mc, tf } from '../builder.js';

export default {
  summary: 'Fiction works through people in places. Learn to read what characters do and say, and how the world around them shapes the story.',
  modules: {
    1: {
      summary: 'Characterization.',
      sessions: [{
        t: 'How writers build characters',
        s: 'Direct and indirect characterization, and why details matter.',
        md: `
## Direct and indirect characterization
- **Direct characterization:** the narrator tells you what a character is like. *"Dolores was a cautious woman."*
- **Indirect characterization:** the writer shows you through speech, actions, thoughts, appearance and what other characters say.

Literary analysis mostly works with the **indirect** kind, because you must infer.

### Try it
Read this original passage:

> Dolores kept the receipts from every repair she had ever paid for, folded into squares in a biscuit tin, though no one had asked to see them in thirty years.

Nothing here says Dolores is cautious or distrustful. The details do the work: she keeps **every** receipt, she has done so for **thirty years**, and **no one has asked**. Together they suggest a person who expects to be questioned and wants proof ready. A strong inference is specific and supported by detail: "Dolores prepares to defend herself, which hints that she has been doubted before."

## Character, choice and change
- A **round** character is complex and may surprise us; a **flat** character is defined by one trait.
- A **dynamic** character changes in an important way; a **static** character does not.
- A character’s **choices under pressure** reveal more than what they say about themselves.
- **Foils** are characters whose contrast highlights another character’s traits.

### Close-reading habit
For any character detail, ask: *What does this show? What else could it show? What in the text supports my choice?*
`,
        q: [
          mc('Which sentence is an example of indirect characterization?', 'Marcus straightened the same stack of papers three times before the meeting began.', 'His repeated action shows nervousness or perfectionism without naming it.', [
            ['Marcus was a nervous man.', 'The narrator states the trait directly.'],
            ['Marcus was born in a small town.', 'This is a background fact, not a revealing action or detail.'],
            ['The meeting began at nine.', 'This gives a fact about time and says nothing about a character.'],
          ]),
          mc('What does the Dolores passage most strongly suggest about her?', 'She expects to be questioned and keeps proof ready', 'Keeping every receipt for thirty years, though no one asked, suggests she anticipates challenge.', [
            ['She is careless with money', 'Careful record keeping suggests the opposite.'],
            ['She is generous toward neighbors', 'Nothing in the passage mentions generosity.'],
            ['She enjoys throwing things away', 'She keeps everything.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Setting and atmosphere.',
      sessions: [{
        t: 'Setting does more than place',
        s: 'Time, place, social setting and mood.',
        md: `
## What setting includes
**Setting** is the time, place and social world of a story: the century, the country, the weather, the economic situation and the customs. It can:
- limit what characters can do (a small town, a wartime city);
- create **mood** or **atmosphere**;
- act as a **symbol** (a storm that mirrors a character’s anger);
- create **conflict** (a character against a harsh environment or a rigid society).

### Try it
Read this original passage:

> The corridor smelled of boiled cabbage and floor wax, and the single bulb at its end hummed as if it were thinking of going out.

Details of **smell** (cabbage, wax) and **sound** (the humming bulb) build an atmosphere that is tired and slightly lonely. **Personification** ("thinking of going out") makes the bulb seem to hesitate, which adds a feeling of decline. An analysis connects *details* to *effect*: "The sensory details create a worn, dispirited mood."

## Setting and theme
Settings often support a story’s ideas. A story that takes place in a crowded city may explore isolation, and a story set during a famine may explore sacrifice. Always ask what the setting **makes possible, makes difficult or makes meaningful**.
`,
        q: [
          mc('Which choice best describes the atmosphere created by the corridor passage?', 'Tired and slightly lonely', 'The cabbage, the wax and the humming bulb suggest wear and isolation.', [
            ['Festive and crowded', 'The corridor seems empty and worn.'],
            ['Dangerous and violent', 'No violence or threat is suggested.'],
            ['Luxurious and welcoming', 'The details are plain and dreary.'],
          ]),
          mc('Which statement about setting is most accurate?', 'Setting can limit what characters can do and can shape theme', 'Setting includes social and historical context, not just location.', [
            ['Setting is only the physical location', 'It also includes time and social world.'],
            ['Setting never affects a story’s meaning', 'It often supports theme and mood.'],
            ['Setting is always described in the first sentence', 'It can be revealed gradually.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Character and Setting',
    tasks: [
      mc('Direct characterization occurs when', 'the narrator states what a character is like', 'It tells the reader the trait outright.', [
        ['the reader infers a trait from the character’s actions', 'That is indirect characterization.'],
        ['another character argues with the narrator', 'This does not define direct characterization.'],
        ['the setting changes', 'This concerns setting, not characterization.'],
      ]),
      mc('A dynamic character is one who', 'changes in an important way during the story', 'Change is what makes the character dynamic.', [
        ['has only one trait', 'That describes a flat character.'],
        ['never appears in more than one scene', 'The term concerns change, not appearances.'],
        ['tells the story', 'That describes a narrator.'],
      ]),
      mc('Read: “She said she didn’t mind, but she turned the ring on her finger until the skin reddened.” What does this detail suggest?', 'She is more upset than her words admit', 'Her action contradicts her statement.', [
        ['She is completely at ease', 'Her action suggests discomfort.'],
        ['She is bored by the conversation', 'The detail points to distress rather than boredom.'],
        ['She has lost her ring', 'The ring is still on her finger.'],
      ]),
      mc('A foil is', 'a character whose contrast with another character highlights that character’s qualities', 'Foils help readers see traits by comparison.', [
        ['a type of rhyme scheme', 'This confuses a foil with a poetic term.'],
        ['the turning point of the plot', 'That is the climax.'],
        ['a setting that changes with the seasons', 'A foil is a character.'],
      ]),
      mc('Which is the best use of setting in analysis?', 'Explaining how specific details of place create mood and support an idea', 'Strong analysis links detail to effect.', [
        ['Listing every place in the story', 'This is a summary, not an analysis.'],
        ['Saying the setting is “important” without evidence', 'A claim needs support.'],
        ['Ignoring the time period', 'Time and social context are part of setting.'],
      ]),
      mc('In the corridor passage, “the bulb ... thinking of going out” is an example of', 'personification', 'A non-human thing is given a human thought.', [
        ['hyperbole', 'The line is not an exaggeration of size or amount.'],
        ['onomatopoeia', 'The line does not imitate a sound with a word.'],
        ['direct characterization', 'The bulb is not a character described directly.'],
      ]),
      tf('Setting includes only the physical location of a story.', false, 'Setting also includes time period and social context.', 'Correct. Setting covers time, place and social world.'),
    ],
  },
};
