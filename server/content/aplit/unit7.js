import { mc, tf } from '../builder.js';

export default {
  summary: 'Style is the way a writer chooses words and builds sentences. Learn to describe tone precisely and spot shifts.',
  modules: {
    13: {
      summary: 'Diction and syntax.',
      sessions: [{
        t: 'Word choice and sentence shape',
        s: 'Connotation, register, sentence length and punctuation.',
        md: `
## Diction
**Diction** is word choice. Look at:
- **Denotation** (dictionary meaning) and **connotation** (the feelings or associations a word carries). “Slim” and “skinny” denote similar things, but “skinny” suggests something less positive.
- **Register:** formal, informal, technical, poetic or slang.
- **Concrete** words name things you can sense and **abstract** words name ideas.

### Example
Compare: *“The man walked into the room”* with *“The man crept into the room.”* **Crept** adds secrecy and caution.

## Syntax
**Syntax** is the arrangement of words into sentences. Consider:
- **Length:** short sentences can feel urgent or blunt, while long sentences can feel flowing, anxious or reflective.
- **Parallelism:** repeated grammatical structure that creates rhythm and emphasis.
- **Inversion:** unusual word order that draws attention.
- **Periodic and cumulative sentences:** a periodic sentence delays the main idea until the end, and a cumulative sentence begins with the main idea and adds details.
- **Fragments and punctuation:** dashes, semicolons and question marks all shape pace and tone.

### Original example
> The door closed. Silence. Then, slowly, as if the house itself were holding its breath, the stairs began to creak.

Three short units create a pause, and then a long sentence slows time with a **personified** house. The syntax builds suspense.

Always connect a feature to an **effect**: “The short sentences create abruptness, and the long final sentence delays the sound, which heightens suspense.”
`,
        q: [
          mc('What is the connotation of the word “crept” compared with “walked”?', 'It suggests secrecy or caution', 'Connotation adds associations beyond the literal movement.', [
            ['It suggests speed and energy', 'Crept suggests slowness and stealth.'],
            ['It has no connotation', 'Most words have associations.'],
            ['It means exactly the same as “ran”', 'Crept and ran differ greatly.'],
          ]),
          mc('Which effect is most likely created by a series of very short sentences?', 'A feeling of urgency or abruptness', 'Short sentences create quick, clipped pace.', [
            ['A feeling of leisurely reflection', 'Long sentences more often create this.'],
            ['A formal academic tone', 'Sentence length alone does not create this.'],
            ['A shift to first-person narration', 'Sentence length does not change point of view.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Tone, mood and shifts.',
      sessions: [{
        t: 'Naming tone and tracking change',
        s: 'The difference between tone and mood, and how shifts reveal meaning.',
        md: `
## Tone and mood
- **Tone** is the **attitude** of the speaker or author toward the subject (for example, ironic, wistful, defiant, tender or detached).
- **Mood** is the **feeling** created in the **reader**.

A narrator may write calmly about a terrible event. The tone is detached, and the mood for the reader may be unease.

## Use precise words
“Sad” is too general. Compare: *mournful*, *resigned*, *bitter*, *nostalgic*, *regretful*. A precise word shows that you noticed the detail that separates them.

## Shifts
A **shift** is a change in tone, perspective, time, setting or argument. Signals include:
- transition words (**but**, **yet**, **however**, **still**);
- a change in punctuation or sentence length;
- a new image or a new addressee;
- a **volta** in a sonnet.

### Example
In Shakespeare’s Sonnet 130, the speaker lists ways his mistress falls short of poetic ideals (“My mistress’ eyes are nothing like the sun”) in a seemingly mocking tone. The final couplet turns to a **tender** claim that his love is as rare as any woman praised in false comparisons. The shift reveals that the earlier lines serve the poem’s final affirmation.

### Ask
*What is the tone at the start? Where does it change? What causes the change? What does the change show?*
`,
        q: [
          mc('Which pair correctly distinguishes tone and mood?', 'Tone is the speaker’s attitude, while mood is the feeling created in the reader', 'These terms are often confused.', [
            ['Tone is the setting, while mood is the plot', 'Neither definition is correct.'],
            ['Tone is the feeling created in the reader, while mood is the speaker’s attitude', 'This reverses the definitions.'],
            ['Tone and mood are always identical', 'They can differ.'],
          ]),
          mc('Which word would be the most precise description of a speaker who looks back on childhood with fond longing?', 'Nostalgic', 'It names longing for the past.', [
            ['Furious', 'The speaker is not angry.'],
            ['Neutral', 'The speaker shows feeling.'],
            ['Sad', 'This is accurate but less precise than “nostalgic.”'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Language and Style',
    tasks: [
      mc('Diction refers to', 'a writer’s choice of words', 'It includes connotation and register.', [
        ['the order of events in a plot', 'That concerns structure.'],
        ['the rhyme scheme of a poem', 'That concerns form.'],
        ['the point of view of a narrator', 'That concerns narration.'],
      ]),
      mc('Which word has the most negative connotation?', 'Stubborn', 'It suggests an unreasonable refusal to change, while “determined” and “persistent” sound positive.', [
        ['Determined', 'This has a positive connotation.'],
        ['Persistent', 'This has a positive or neutral connotation.'],
        ['Resolute', 'This has a positive connotation.'],
      ]),
      mc('A periodic sentence is one that', 'delays its main idea until the end', 'It builds suspense or emphasis.', [
        ['begins with the main idea and adds detail', 'That is a cumulative sentence.'],
        ['has no verb', 'That is a fragment.'],
        ['repeats the same structure', 'That is parallelism.'],
      ]),
      mc('Parallelism is', 'the repetition of grammatical structure for rhythm and emphasis', 'It makes ideas stand out.', [
        ['a reversal of word order', 'That is inversion.'],
        ['a comparison using “like”', 'That is a simile.'],
        ['an imitation of sounds', 'That is onomatopoeia.'],
      ]),
      mc('Which word best describes the tone of a speaker who describes a lost home with longing and fondness?', 'Wistful', 'It names a gentle longing.', [
        ['Hostile', 'The speaker is fond.'],
        ['Indifferent', 'The speaker is emotionally involved.'],
        ['Playful', 'The longing is not playful.'],
      ]),
      mc('Which word is a common signal of a shift?', 'However', 'It marks a turn from what came before.', [
        ['And', 'It usually adds to what came before.'],
        ['The', 'It does not signal a turn.'],
        ['Because', 'It signals a reason rather than a change.'],
      ]),
      tf('Tone and mood always mean the same thing.', false, 'Tone is the speaker’s attitude and mood is the feeling created in the reader.', 'Correct. A narrator can be calm while the reader feels unease.'),
    ],
  },
};
