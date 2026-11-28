// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the published structure of the TOEFL iBT Reading section (January 2026 format).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'The 2026 Reading Section', modules: [
    mod(1, 'Format, Adaptivity and Scoring', ['Describe the three Reading task types, the two-stage adaptive design and the 1–6 band scale.', 'Plan time and attention across the section.']),
    mod(2, 'Reading Strategies That Transfer', ['Use skimming, scanning and close reading for different questions.', 'Infer the meaning of unknown words from context and word parts.']),
  ] },
  { n: 2, title: 'Complete the Words', modules: [
    mod(3, 'How the Task Works', ['Describe the Complete the Words format and what it measures.', 'Use the intact first sentence and the topic to predict missing words.']),
    mod(4, 'Strategies and Word Knowledge', ['Use grammar, collocation and word-part clues to restore words.', 'Avoid common spelling and form errors.']),
  ] },
  { n: 3, title: 'Read in Daily Life', modules: [
    mod(5, 'Everyday Texts and Their Purposes', ['Identify the purpose and audience of notices, menus, schedules, emails and message chains.', 'Locate specific details quickly.']),
    mod(6, 'Inference, Tone and Implied Meaning', ['Infer what a text implies without stating.', 'Read tone and register in informal messages.']),
  ] },
  { n: 4, title: 'Read an Academic Passage I', modules: [
    mod(7, 'Main Idea and Supporting Details', ['Identify the main idea of a short expository passage.', 'Match question wording to the relevant sentence.']),
    mod(8, 'Vocabulary in Context and Reference', ['Determine word meaning from context.', 'Resolve pronoun and reference links.']),
  ] },
  { n: 5, title: 'Read an Academic Passage II and Test Strategy', modules: [
    mod(9, 'Inference, Purpose and Organization', ['Make supported inferences and explain why an author includes a detail.', 'Recognize patterns such as cause and effect, comparison and sequence.']),
    mod(10, 'Putting It Together', ['Choose answers by eliminating distractors.', 'Build a preparation routine for the adaptive Reading section.']),
  ] },
];
