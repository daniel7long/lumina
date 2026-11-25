import { mc, tf } from '../builder.js';

export default {
  summary: 'A play is written to be performed. Learn the conventions of drama and how tragedy and comedy shape an audience’s experience.',
  modules: {
    9: {
      summary: 'Reading a play.',
      sessions: [{
        t: 'Speech, stage directions and irony',
        s: 'How playwrights reveal character and information to an audience.',
        md: `
## Elements of a play
- **Dialogue:** conversation between characters. What characters say, avoid saying or interrupt reveals relationships.
- **Monologue:** a long speech by one character to others.
- **Soliloquy:** a speech in which a character, alone on stage, speaks thoughts aloud to the audience.
- **Aside:** a brief remark to the audience or to another character that others on stage do not hear.
- **Stage directions:** the playwright’s instructions about action, setting, movement and tone. In older plays they are brief, and in modern plays they can be long.
- **Acts and scenes:** the units of structure.

## Dramatic irony
**Dramatic irony** occurs when the audience knows something that a character does not. In *Romeo and Juliet*, Juliet takes a potion that makes her appear dead, and Romeo, who does not know the plan, believes she has died. The audience’s knowledge makes his actions painful to watch.

## A famous soliloquy
> To be, or not to be, that is the question

In *Hamlet*, this opening line begins a speech spoken while Hamlet is alone, which lets the audience hear his thoughts rather than what he would say to others. Analysis often asks what a soliloquy reveals that the **dialogue** conceals.

### Performance matters
The same lines can mean different things in different productions. When you read a play, imagine the staging: who is on stage, who is listening and what action accompanies the words.
`,
        q: [
          mc('A speech in which a character alone on stage speaks his thoughts aloud is called', 'a soliloquy', 'It reveals inner thoughts to the audience.', [
            ['an aside', 'An aside is a brief remark.'],
            ['a stage direction', 'Stage directions are instructions from the playwright.'],
            ['a couplet', 'A couplet is a pair of rhymed lines.'],
          ]),
          mc('Which situation is an example of dramatic irony?', 'The audience knows a character is in danger that the character does not see', 'The audience knows more than the character.', [
            ['A character says the opposite of what he means', 'This is verbal irony.'],
            ['A play ends happily', 'A happy ending is not irony.'],
            ['An actor forgets a line', 'This is a performance accident.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Tragedy and comedy.',
      sessions: [{
        t: 'Conventions of tragedy and comedy',
        s: 'Tragic heroes, comic endings and the role of foils.',
        md: `
## Tragedy
In his *Poetics*, the ancient Greek philosopher **Aristotle** described tragedy as the story of a person of high standing who falls because of a **tragic flaw** (**hamartia**), such as pride or ambition. Common features include:
- a **tragic hero** with admirable qualities and a flaw;
- a **reversal** of fortune and a moment of **recognition**;
- **catharsis**: the audience’s release of pity and fear.

Shakespeare’s tragedies, such as *Hamlet*, *Macbeth* and *Othello*, follow variations of this pattern.

## Comedy
Comedies end in a restored or new social order, often with **marriage**, reconciliation or celebration. They use misunderstandings, disguises and mistaken identity. In Shakespeare’s *Twelfth Night*, Viola disguises herself as a man, which causes confusion until identities are revealed and couples are united. Comedy often includes serious ideas about identity and love.

## Foils
A **foil** is a character who contrasts with another to highlight qualities. In *Hamlet*, Laertes acts quickly to avenge his father, while Hamlet delays, so Laertes highlights Hamlet’s hesitation.

### Genre and expectations
Knowing the conventions lets you see how a playwright follows or breaks them. A tragedy that gives its hero a quiet ending, or a comedy with a bitter note, asks readers to look closely at why.
`,
        q: [
          mc('In Aristotle’s description of tragedy, hamartia refers to', 'the tragic flaw or error that contributes to the hero’s downfall', 'It is the weakness that helps cause the fall.', [
            ['the audience’s release of emotion', 'That is catharsis.'],
            ['a speech made while alone', 'That is a soliloquy.'],
            ['the final couplet of a sonnet', 'That is a poetic form.'],
          ]),
          mc('Which feature is most typical of a traditional comedy?', 'It ends with restored order, often through reconciliation or marriage', 'The ending is typically harmonious.', [
            ['The hero dies because of a flaw', 'This describes tragedy.'],
            ['It is performed without dialogue', 'Comedies are filled with dialogue.'],
            ['It must contain no serious ideas', 'Many comedies explore serious themes.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Drama',
    tasks: [
      mc('A brief remark by a character that other characters on stage do not hear is called', 'an aside', 'It is directed to the audience or one character.', [
        ['a soliloquy', 'A soliloquy is a longer speech by a character who is alone.'],
        ['a monologue', 'A monologue is a long speech to others.'],
        ['a stage direction', 'A stage direction is an instruction by the playwright.'],
      ]),
      mc('Stage directions are', 'instructions from the playwright about action, setting or delivery', 'They help readers imagine the performance.', [
        ['lines spoken by the audience', 'The audience does not speak in a play.'],
        ['a type of rhyme', 'Stage directions are not a poetic device.'],
        ['the climax of the play', 'The climax is part of the plot.'],
      ]),
      mc('Catharsis is', 'the release of pity and fear that an audience may feel at the end of a tragedy', 'Aristotle described it as the effect of tragedy.', [
        ['a mistake made by the hero', 'That would be hamartia.'],
        ['a character who contrasts with the hero', 'That is a foil.'],
        ['a speech by a single actor', 'That is a monologue or soliloquy.'],
      ]),
      mc('Laertes is described as a foil for Hamlet because', 'his quick action highlights Hamlet’s hesitation', 'Contrast reveals character.', [
        ['he is the narrator of the play', 'Plays do not have narrators in this sense.'],
        ['he is Hamlet’s twin brother', 'He is not Hamlet’s brother.'],
        ['he delivers all of Hamlet’s soliloquies', 'Hamlet speaks his own soliloquies.'],
      ]),
      mc('Which is an example of dramatic irony?', 'Romeo mourns Juliet’s death while the audience knows she is alive', 'The audience knows more than the character.', [
        ['A character jokes sarcastically', 'This is verbal irony or sarcasm.'],
        ['A character walks off stage', 'A stage movement is not irony.'],
        ['A character is introduced in act one', 'Introduction is not irony.'],
      ]),
      mc('Which ending is most typical of a traditional comedy?', 'Couples united and the community restored', 'This restores harmony.', [
        ['The hero’s fall and death', 'This is a tragic pattern.'],
        ['The audience is left unaware of what happened', 'Comedies usually resolve their confusion.'],
        ['A long soliloquy with no resolution', 'A soliloquy is not an ending convention.'],
      ]),
      tf('A soliloquy is spoken by a character who is alone on stage and lets the audience hear private thoughts.', true, 'Correct. This is the usual definition of a soliloquy.', 'This is the standard meaning of a soliloquy, so the statement is true.'),
    ],
  },
};
