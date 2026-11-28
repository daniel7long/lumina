// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the published structure of the TOEFL iBT Speaking section (January 2026 format).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'The 2026 Speaking Section', modules: [
    mod(1, 'Format, Timing and Scoring', ['Describe the two Speaking task types, their timing and how responses are scored.', 'Explain that integrated and independent speaking tasks were replaced.']),
    mod(2, 'Delivery: Pace, Clarity and Rhythm', ['Use stress, rhythm and intonation to make speech easy to follow.', 'Practice at a steady pace without long pauses.']),
  ] },
  { n: 2, title: 'Listen and Repeat I', modules: [
    mod(3, 'How the Task Works', ['Describe the Listen and Repeat format and what it measures.', 'Use chunking and memory strategies to repeat sentences.']),
    mod(4, 'Short and Medium Sentences', ['Repeat sentences accurately, keeping word endings and small words.', 'Practice with campus and academic scenarios.']),
  ] },
  { n: 3, title: 'Listen and Repeat II', modules: [
    mod(5, 'Longer Sentences', ['Chunk long sentences into meaningful groups.', 'Maintain natural rhythm in sentences with clauses.']),
    mod(6, 'Sound Details and Self-Correction', ['Control word stress, final consonants and unstressed words.', 'Recover smoothly from a slip.']),
  ] },
  { n: 4, title: 'Take an Interview I', modules: [
    mod(7, 'Understanding the Interview', ['Describe the Take an Interview format and scoring criteria.', 'Structure a 45-second answer without preparation time.']),
    mod(8, 'Personal Questions', ['Answer personal questions with specific detail.', 'Use a simple answer pattern: answer, reason, example.']),
  ] },
  { n: 5, title: 'Take an Interview II', modules: [
    mod(9, 'Opinion Questions', ['Give and support an opinion within 45 seconds.', 'Use precise vocabulary and linking words.']),
    mod(10, 'Practice Routine and Test Strategy', ['Build a weekly practice routine with self-recording and review.', 'Manage nerves and recover from mistakes.']),
  ] },
];
