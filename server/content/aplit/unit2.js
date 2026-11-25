import { mc, tf } from '../builder.js';

export default {
  summary: 'Who tells the story, and in what order, changes what readers know and feel.',
  modules: {
    3: {
      summary: 'Narrators and point of view.',
      sessions: [{
        t: 'Point of view and reliability',
        s: 'First person, third person and the narrator you cannot fully trust.',
        md: `
## Types of narration
- **First person:** a character tells the story using “I.” We see only what that narrator knows and chooses to say.
- **Third-person limited:** an outside narrator follows one character closely and reports that character’s thoughts only.
- **Third-person omniscient:** an outside narrator knows the thoughts of many characters and can comment on events.
- **Second person:** the narrator addresses “you” (rare).

## Why point of view matters
Point of view controls **information**, **sympathy** and **irony**. A narrator close to a character makes us sympathize with that character. An omniscient narrator can show the gap between what characters think and what is true.

## The unreliable narrator
A narrator is **unreliable** when the reader has reasons to doubt the account: the narrator is biased, mistaken, naive or dishonest. The clues are often **contradictions** between what the narrator says and what the details show.

> “I am perfectly calm,” he said, gripping the edge of the table until his knuckles whitened.

The narrator claims calm, but the physical detail contradicts it. An analysis might say: “The gap between his statement and his body language shows that he is anxious and unwilling to admit it.”

### Close-reading habit
Ask: *Who is telling this? What do they want us to believe? What does the text show that they do not say?*
`,
        q: [
          mc('A narrator who stays close to one character and reports only that character’s thoughts is using', 'third-person limited', 'The narrator is outside the story but limited to one mind.', [
            ['first person', 'First person uses “I.”'],
            ['third-person omniscient', 'Omniscient narrators know many characters’ thoughts.'],
            ['second person', 'Second person addresses “you.”'],
          ]),
          mc('What is the best evidence that a narrator is unreliable?', 'The narrator’s claims are contradicted by details in the text', 'Gaps between statement and evidence signal unreliability.', [
            ['The narrator uses the word “I”', 'Many reliable narrators use “I.”'],
            ['The narrator tells the story in the past tense', 'Tense does not determine reliability.'],
            ['The narrator describes the setting in detail', 'Description alone does not suggest unreliability.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Plot, structure and pacing.',
      sessions: [{
        t: 'The shape of a story',
        s: 'Plot parts, ordering and the effects of structure.',
        md: `
## The parts of a plot
1. **Exposition:** introduces characters, setting and situation.
2. **Rising action:** conflicts develop and tension grows.
3. **Climax:** the turning point or moment of greatest tension.
4. **Falling action:** consequences unfold.
5. **Resolution (denouement):** the situation settles, sometimes with questions left open.

Not every story follows this order, and analysis asks why the writer chose a particular shape.

## Ordering and timing
- **In medias res:** starting in the middle of the action.
- **Flashback:** a scene from an earlier time that explains the present.
- **Foreshadowing:** hints of what will happen later.
- **Frame story:** a story inside another story.
- **Pacing:** how quickly or slowly events are presented. A writer may linger over a short moment or summarize years in a sentence.

## Conflict
- **Internal conflict:** within a character (duty against desire).
- **External conflict:** with another person, society or nature.

### Why structure matters
If a story begins with its ending and then moves backward, we read with different questions. Instead of asking *what happens?* we ask *how did it happen, and why?*
`,
        q: [
          mc('A story opens with a character already in the middle of a chase. Which technique is this?', 'In medias res', 'The story begins in the midst of action.', [
            ['Denouement', 'Denouement refers to the resolution.'],
            ['Foreshadowing', 'Foreshadowing hints at later events.'],
            ['Exposition', 'Exposition introduces background and does not usually start mid-chase.'],
          ]),
          mc('In a story, an early mention of a rusty gun hanging on the wall later becomes important. This is an example of', 'foreshadowing', 'An early detail hints at what will happen.', [
            ['a flashback', 'A flashback shows an earlier time.'],
            ['personification', 'Personification gives human traits to non-human things.'],
            ['a frame story', 'A frame story places one story inside another.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Narration and Structure',
    tasks: [
      mc('Which narrator can know the thoughts of several characters?', 'A third-person omniscient narrator', 'Omniscient narrators can move between minds.', [
        ['A first-person narrator', 'First-person narrators know only their own thoughts directly.'],
        ['A third-person limited narrator', 'A limited narrator stays with one character.'],
        ['A frame narrator', 'A frame narrator introduces a story and is not defined by this feature.'],
      ]),
      mc('An unreliable narrator is most likely to be revealed through', 'contradictions between what the narrator says and what the text shows', 'The reader notices gaps.', [
        ['the number of paragraphs in the story', 'Length does not indicate reliability.'],
        ['the title of the story', 'A title rarely proves unreliability.'],
        ['the use of dialogue', 'Dialogue appears in many kinds of stories.'],
      ]),
      mc('The climax of a plot is', 'the turning point or moment of greatest tension', 'It is the high point of the conflict.', [
        ['the introduction of the characters', 'That is exposition.'],
        ['the final sentence of the story', 'The final sentence is usually part of the resolution.'],
        ['a flashback to childhood', 'A flashback is a technique and not necessarily the climax.'],
      ]),
      mc('Which technique gives readers background information by showing an earlier time?', 'A flashback', 'It interrupts the present with the past.', [
        ['Foreshadowing', 'Foreshadowing points ahead.'],
        ['Denouement', 'Denouement is the resolution.'],
        ['In medias res', 'This describes where the story begins.'],
      ]),
      mc('A character struggles over whether to tell the truth or protect a friend. This is mainly', 'an internal conflict', 'The struggle is within the character.', [
        ['an external conflict with nature', 'Nature is not involved.'],
        ['a frame story', 'This is a structural technique.'],
        ['a flat character', 'This describes a type of character, not a conflict.'],
      ]),
      mc('Why might an author use first-person narration?', 'To limit the reader to one person’s view and create closeness or doubt', 'The reader sees only what the narrator knows or chooses to share.', [
        ['To show every character’s thoughts', 'That is omniscience.'],
        ['To avoid having any point of view', 'Every narration has a point of view.'],
        ['To remove conflict from the story', 'Narration does not remove conflict.'],
      ]),
      tf('Every story must present its events in strict chronological order.', false, 'Stories may use flashbacks, jump in time or begin in the middle.', 'Correct. Writers choose an order to shape meaning and effect.'),
    ],
  },
};
