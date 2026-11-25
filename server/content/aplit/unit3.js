import { mc, tf } from '../builder.js';

export default {
  summary: 'Poems are compact. Learn who speaks, what the poem pictures and how figures of speech carry meaning.',
  modules: {
    5: {
      summary: 'Speaker, situation and imagery.',
      sessions: [{
        t: 'Who is speaking, and what do we see?',
        s: 'Speaker, occasion, addressee and sensory images.',
        md: `
## The speaker
The **speaker** is the voice of the poem. It is not automatically the poet. When you read a poem, ask four questions:
1. **Who** is speaking?
2. **To whom?** (the addressee: a lover, a reader, nature or no one in particular)
3. **When and where?** (the occasion or situation)
4. **What is the speaker's attitude?** (tone)

## Imagery
**Imagery** is language that appeals to the senses: sight, sound, smell, taste, touch, movement. Images carry feeling and often build to an idea.

### A public-domain example
From William Wordsworth’s poem (1807):

> I wandered lonely as a cloud
> That floats on high o’er vales and hills,

The speaker is recalling an experience of walking. The image of a cloud floating high above valleys and hills suggests solitude and a detached view. The word **lonely** states the mood, while the image shows it.

### Analyzing imagery
Do not just list images. Group them (for example, images of light and darkness), then ask what the pattern suggests and whether it changes.
`,
        q: [
          mc('Which question is most useful for identifying a poem’s situation?', 'Who is speaking, to whom, and in what circumstances?', 'These questions establish the speaker, addressee and occasion.', [
            ['How many words does the poem contain?', 'Word count does not reveal the situation.'],
            ['When was the poet born?', 'Biography can help, but it does not identify the poem’s situation.'],
            ['Does every line rhyme?', 'Rhyme concerns form, not situation.'],
          ]),
          mc('In Wordsworth’s line “I wandered lonely as a cloud,” what does the image of the cloud mainly suggest?', 'Solitude and drifting', 'A cloud moves alone above the land.', [
            ['A crowded celebration', 'The line stresses being alone.'],
            ['Anger and violence', 'Nothing in the image suggests violence.'],
            ['A busy city', 'The image concerns hills and valleys.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Figurative language.',
      sessions: [{
        t: 'Figures of speech',
        s: 'Simile, metaphor, personification, hyperbole, paradox and symbol.',
        md: `
## Common figures
| Figure | What it does | Example |
| --- | --- | --- |
| Simile | Compares using “like” or “as” | “lonely as a cloud” |
| Metaphor | States that one thing is another | “Life is a journey” |
| Personification | Gives human qualities to a non-human thing | “the bulb was thinking” |
| Hyperbole | Exaggeration for effect | “I’ve told you a million times” |
| Understatement | Deliberately makes something seem less important | “It was a bit of a storm” (of a hurricane) |
| Paradox | A statement that seems contradictory yet may be true | “less is more” |
| Oxymoron | Two contradictory words together | “bittersweet” |
| Apostrophe | Addresses an absent person or an object | “O Death, where is thy sting?” |
| Symbol | An object that stands for an idea | A dove for peace |

## From identifying to analyzing
Naming a figure earns little. Explain **what the figure lets the poem say** that a literal statement could not. In Shakespeare’s Sonnet 18, the speaker writes that “summer’s lease hath all too short a date.” By calling summer a **lease**, the speaker makes it a rented thing that must end, and so emphasizes how brief summer is, which sets up the claim that the beloved will last longer in the poem.

### Dickinson’s personification
In Emily Dickinson’s poem, “Because I could not stop for Death – / He kindly stopped for me –,” Death is a courteous visitor with a carriage. Treating Death as polite and patient, rather than frightening, shapes how the speaker approaches it.
`,
        q: [
          mc('Which line contains a simile?', 'I wandered lonely as a cloud', 'It compares the speaker to a cloud using “as.”', [
            ['Life is a broken-winged bird', 'This is a metaphor because it does not use “like” or “as.”'],
            ['The wind sang through the trees', 'This is personification.'],
            ['I have waited a million years for you', 'This is hyperbole.'],
          ]),
          mc('In Dickinson’s lines, what is the effect of making Death “kindly” stop for the speaker?', 'It presents death as a courteous visitor rather than a terrifying force', 'The personification changes how death feels.', [
            ['It proves the poem is about travel by carriage', 'The carriage is part of the figure, but the effect concerns the attitude toward death.'],
            ['It shows that the speaker is angry', 'The word “kindly” suggests calm, not anger.'],
            ['It is a literal description of a funeral', 'Death is treated as a person, which makes it figurative.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Speaker, Imagery and Figurative Language',
    tasks: [
      mc('The speaker of a poem is', 'the voice presented in the poem, who may differ from the poet', 'Analysis treats the speaker as a created voice.', [
        ['always the poet speaking about his own life', 'Poets often create other voices.'],
        ['the person to whom the poem is addressed', 'That is the addressee.'],
        ['the rhyme scheme', 'The rhyme scheme concerns form.'],
      ]),
      mc('Imagery is best described as', 'language that appeals to the senses', 'Images evoke sight, sound, touch, smell or taste.', [
        ['a poem’s rhyme scheme', 'That is form.'],
        ['the title of the poem', 'A title is not imagery.'],
        ['a statement of the theme', 'Theme is an idea, not imagery.'],
      ]),
      mc('“The old house sighed as the wind pushed against it.” This sentence uses', 'personification', 'The house is given a human action.', [
        ['simile', 'There is no “like” or “as.”'],
        ['hyperbole', 'No exaggeration is involved.'],
        ['apostrophe', 'No absent person or object is addressed.'],
      ]),
      mc('A paradox is', 'a statement that seems contradictory but may reveal a truth', 'It invites the reader to look for sense behind the contradiction.', [
        ['a comparison using “like”', 'That is a simile.'],
        ['a repetition of consonant sounds', 'That is alliteration or consonance.'],
        ['an exaggeration', 'That is hyperbole.'],
      ]),
      mc('Which is the strongest analytical sentence about a figure of speech?', 'The metaphor of summer as a lease emphasizes that beauty is temporary.', 'It names the figure and explains its effect.', [
        ['The poem contains a metaphor.', 'It names the device but not its effect.'],
        ['Metaphors are important in poetry.', 'This is too general.'],
        ['The poet likes summer.', 'This is a guess about the poet.'],
      ]),
      mc('In Sonnet 18, the speaker writes that “summer’s lease hath all too short a date.” What does the word “lease” suggest about summer?', 'Summer is rented for a limited time and must end', 'A lease has a term.', [
        ['Summer lasts forever', 'The line says its date is short.'],
        ['Summer is owned by the speaker', 'A lease is borrowed, not owned.'],
        ['Summer is a person', 'The figure concerns time, not a person.'],
      ]),
      tf('Naming a figure of speech is enough for a strong literary analysis.', false, 'Strong analysis also explains the effect of the figure.', 'Correct. Always connect the device to meaning.'),
    ],
  },
};
