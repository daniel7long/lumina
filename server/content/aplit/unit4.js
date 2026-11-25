import { mc, tf } from '../builder.js';

export default {
  summary: 'A poem is made of sound and shape as well as meaning. Learn to hear its music and see how its form carries ideas.',
  modules: {
    7: {
      summary: 'Sound devices and meter.',
      sessions: [{
        t: 'The music of poetry',
        s: 'Repeated sounds, rhyme and iambic pentameter.',
        md: `
## Sound devices
- **Alliteration:** repeated consonant sounds at the start of words (“**s**ilver **s**ea”).
- **Assonance:** repeated vowel sounds inside words (“the r**ai**n in Sp**ai**n falls m**ai**nly”).
- **Consonance:** repeated consonant sounds anywhere in words (“pitter-patter”).
- **Onomatopoeia:** words that imitate sounds (“buzz,” “clang”).
- **Rhyme:** matching end sounds. **End rhyme** falls at the ends of lines, **internal rhyme** occurs inside a line and **slant rhyme** is a near match (“worm” and “warm”).

Sound is evidence only when it connects to meaning. Soft, flowing sounds may suggest calm, while harsh, clipped sounds may suggest anger.

## Meter
**Meter** is the pattern of stressed and unstressed syllables. A single unit is a **foot**. An **iamb** is an unstressed syllable followed by a stressed one (da-DUM). **Iambic pentameter** has five iambs per line, or ten syllables.

> Shall I compare thee to a summer’s day?

Read aloud, the stress falls like this: shall I | com-PARE | thee TO | a SUM | mer’s DAY. The line has ten syllables and a steady rhythm.

**Blank verse** is unrhymed iambic pentameter, often used in Shakespeare’s plays.

### Variations
A poet may break the pattern to draw attention. A line that begins with a stressed syllable instead of an unstressed one (a reversed foot) can stand out as emphatic.
`,
        q: [
          mc('“Peter Piper picked a peck of pickled peppers” is an example of', 'alliteration', 'The repeated initial p sound is alliteration.', [
            ['onomatopoeia', 'Onomatopoeia imitates a sound.'],
            ['assonance', 'Assonance repeats vowel sounds.'],
            ['blank verse', 'Blank verse is a metrical form.'],
          ]),
          mc('How many syllables are in a line of iambic pentameter (without variation)?', 'Ten', 'Five feet with two syllables each give ten.', [
            ['Five', 'Five is the number of feet.'],
            ['Eight', 'Eight syllables would be iambic tetrameter.'],
            ['Fourteen', 'Fourteen is the number of lines in a sonnet.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Poetic forms and structure.',
      sessions: [{
        t: 'Forms and what they do',
        s: 'Sonnets, ballads, free verse, the volta, enjambment and caesura.',
        md: `
## Common forms
| Form | Features |
| --- | --- |
| Shakespearean sonnet | 14 lines in iambic pentameter: three quatrains and a couplet (ABAB CDCD EFEF GG) |
| Petrarchan sonnet | 14 lines: an octave (8 lines) and a sestet (6 lines) |
| Ballad stanza | Four-line stanzas, often alternating four and three stresses, with rhyme on the second and fourth lines; usually tells a story |
| Blank verse | Unrhymed iambic pentameter |
| Free verse | No fixed meter or rhyme scheme; uses line breaks, rhythm and imagery |
| Villanelle | 19 lines with two repeated refrains |

## Structure and shifts
- **Volta:** the “turn” in a sonnet where the argument or mood changes. In a Petrarchan sonnet it often comes after the octave. In a Shakespearean sonnet it often comes before the final couplet.
- **Stanza:** a group of lines, like a paragraph.
- **Enjambment:** a sentence runs past the end of a line. It can create momentum or surprise.
- **End-stopped line:** a line ends with a pause or punctuation.
- **Caesura:** a pause inside a line.

### Example: Shakespeare’s Sonnet 130
The opening line says, “My mistress’ eyes are nothing like the sun.” The sonnet follows a convention of love poems (comparing the beloved to wonders of nature), but it **reverses** it, and the final couplet turns to affirm that the speaker’s love is real. The form (a sonnet) raises expectations of praise, and the poem’s meaning depends on how it plays against them.

### Form and meaning
Ask: *Why this form? Where does the pattern break? What changes at the break?*
`,
        q: [
          mc('A Shakespearean sonnet typically ends with', 'a rhymed couplet', 'The final two lines (GG) often sum up or turn the argument.', [
            ['a sestet', 'A sestet belongs to the Petrarchan form.'],
            ['a refrain repeated twice', 'This describes a villanelle.'],
            ['no rhyme', 'The couplet rhymes.'],
          ]),
          mc('What is a volta?', 'A turn in thought or feeling within a poem', 'It marks a shift in argument or attitude.', [
            ['A type of rhyme', 'A volta concerns structure, not rhyme.'],
            ['A line that has ten syllables', 'That describes the length of a line of iambic pentameter.'],
            ['The title of a poem', 'A volta occurs inside the poem.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Sound, Form and Structure',
    tasks: [
      mc('Which word is an example of onomatopoeia?', 'Buzz', 'The word imitates a sound.', [
        ['Sorrow', 'It names an emotion and does not imitate a sound.'],
        ['Mountain', 'It names a thing without imitating a sound.'],
        ['Because', 'It is a connecting word.'],
      ]),
      mc('Slant rhyme is', 'a near rhyme in which the sounds are similar but not identical', 'Examples include “worm” and “warm.”', [
        ['an exact rhyme at the ends of lines', 'That is true end rhyme.'],
        ['a repetition of the same word', 'That is repetition.'],
        ['a rhyme within a single line', 'That is internal rhyme.'],
      ]),
      mc('An iamb is', 'an unstressed syllable followed by a stressed syllable', 'It makes a da-DUM pattern.', [
        ['a stressed syllable followed by an unstressed syllable', 'That is a trochee.'],
        ['a line of fourteen syllables', 'Fourteen is the number of lines in a sonnet.'],
        ['a group of four lines', 'That is a quatrain.'],
      ]),
      mc('Blank verse is', 'unrhymed iambic pentameter', 'It was used widely in Shakespeare’s plays.', [
        ['poetry with no meter or rhyme', 'That is free verse.'],
        ['rhymed couplets of any length', 'That describes couplets.'],
        ['a nineteen-line form with refrains', 'That is a villanelle.'],
      ]),
      mc('Which statement best describes enjambment?', 'A sentence or phrase continues past the end of a line', 'It carries the reader onward without a pause.', [
        ['A pause in the middle of a line', 'That is caesura.'],
        ['A line that ends in punctuation', 'That is an end-stopped line.'],
        ['A repeated line at the end of every stanza', 'That is a refrain.'],
      ]),
      mc('In a Petrarchan sonnet, the volta often comes', 'after the first eight lines', 'The octave sets up the problem and the sestet responds.', [
        ['before the first line', 'There is nothing to turn from before the poem begins.'],
        ['only in the final word', 'The volta usually marks a larger shift.'],
        ['after every stanza', 'The volta is a single main turn.'],
      ]),
      tf('A strong analysis of rhyme explains how the sound connects to meaning.', true, 'Correct. Sound matters when it supports or complicates the poem’s ideas.', 'Rhyme analysis is stronger when it explains meaning, so this statement is true.'),
    ],
  },
};
