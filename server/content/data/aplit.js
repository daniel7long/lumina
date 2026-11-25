// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year college literary analysis sequence (fiction, poetry,
// drama, theme, style and literary argument).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Fiction: Character and Setting', modules: [
    mod(1, 'Characters and Characterization', ['Distinguish direct from indirect characterization and identify what a detail reveals about a character.', 'Explain how a character’s choices, relationships and changes create meaning.']),
    mod(2, 'Setting and Atmosphere', ['Describe how time, place and social setting shape events and characters.', 'Explain how details of setting create mood and support theme.']),
  ] },
  { n: 2, title: 'Fiction: Narration and Structure', modules: [
    mod(3, 'Narrators and Point of View', ['Compare first-person, third-person limited and omniscient narration.', 'Identify an unreliable narrator and explain the effect of that choice.']),
    mod(4, 'Plot, Structure and Pacing', ['Name the parts of a plot and explain how an author’s ordering of events shapes meaning.', 'Explain flashback, foreshadowing and in medias res.']),
  ] },
  { n: 3, title: 'Poetry: Speaker, Imagery and Figurative Language', modules: [
    mod(5, 'Speaker, Situation and Imagery', ['Distinguish the speaker from the poet and describe the poem’s situation and addressee.', 'Analyze how sensory images build meaning and feeling.']),
    mod(6, 'Figurative Language', ['Identify simile, metaphor, personification, hyperbole, paradox and symbol.', 'Explain what a figure of speech adds beyond a literal statement.']),
  ] },
  { n: 4, title: 'Poetry: Sound, Form and Structure', modules: [
    mod(7, 'Sound Devices and Meter', ['Identify alliteration, assonance, consonance, onomatopoeia and rhyme.', 'Scan a line of iambic pentameter and explain the effect of variations.']),
    mod(8, 'Poetic Forms and Structure', ['Compare the Shakespearean sonnet, the Petrarchan sonnet, the ballad stanza and free verse.', 'Explain how a volta, enjambment and caesura shape meaning.']),
  ] },
  { n: 5, title: 'Drama', modules: [
    mod(9, 'Reading a Play', ['Distinguish dialogue, monologue, soliloquy, aside and stage directions.', 'Explain dramatic irony and how it affects an audience.']),
    mod(10, 'Tragedy and Comedy', ['Describe the tragic hero, hamartia and catharsis, and the conventions of comedy.', 'Explain how foils highlight character.']),
  ] },
  { n: 6, title: 'Meaning: Theme, Symbol and Irony', modules: [
    mod(11, 'Theme, Symbol and Motif', ['Write a theme as a complete statement rather than a topic.', 'Trace a symbol or motif through a text and explain its development.']),
    mod(12, 'Irony, Paradox and Ambiguity', ['Distinguish verbal, situational and dramatic irony.', 'Explain how paradox and ambiguity invite more than one interpretation.']),
  ] },
  { n: 7, title: 'Language and Style', modules: [
    mod(13, 'Diction and Syntax', ['Analyze connotation, register and word choice.', 'Explain the effects of sentence length, parallelism, inversion and punctuation.']),
    mod(14, 'Tone, Mood and Shifts', ['Distinguish tone from mood and name tone with precise words.', 'Identify a shift and explain what it reveals.']),
  ] },
  { n: 8, title: 'Writing a Literary Argument', modules: [
    mod(15, 'Thesis, Evidence and Commentary', ['Write a defensible thesis that makes a claim about how a text creates meaning.', 'Select evidence and explain how it supports the claim.']),
    mod(16, 'Drafting, Sophistication and Revision', ['Avoid plot summary and use specific verbs and integrated quotations.', 'Revise to show complexity and a consistent line of reasoning.']),
  ] },
];
