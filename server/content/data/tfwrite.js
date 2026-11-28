// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the published structure of the TOEFL iBT Writing section (January 2026 format).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'The 2026 Writing Section', modules: [
    mod(1, 'Format, Timing and Scoring', ['Describe the three Writing task types, their timing and how responses are scored.', 'Explain that integrated and independent essay tasks were replaced.']),
    mod(2, 'Grammar Foundations for Timed Writing', ['Build clear sentences with correct word order, agreement and tense.', 'Use punctuation and capitalization accurately.']),
  ] },
  { n: 2, title: 'Build a Sentence', modules: [
    mod(3, 'How the Task Works', ['Describe the Build a Sentence format and what it measures.', 'Use the context sentence to decide the grammar of the reply.']),
    mod(4, 'Word Order Patterns', ['Order words in statements, negatives, questions and embedded questions.', 'Place adverbs, particles and prepositions correctly.']),
  ] },
  { n: 3, title: 'Write an Email', modules: [
    mod(5, 'Understanding the Email Task', ['Identify the goal, audience and three required points.', 'Choose an appropriate register.']),
    mod(6, 'Planning and Writing in Seven Minutes', ['Organize a short email with a greeting, body and closing.', 'Use polite request and explanation language.']),
  ] },
  { n: 4, title: 'Write for an Academic Discussion', modules: [
    mod(7, 'Reading the Discussion', ['Summarize the professor’s question and two student posts.', 'Decide on a position that adds something new.']),
    mod(8, 'Writing a Developed Contribution', ['Write a response of at least 100 words with a clear position and support.', 'Use varied sentence structures and precise vocabulary.']),
  ] },
  { n: 5, title: 'Revision, Accuracy and Test Strategy', modules: [
    mod(9, 'Editing for Accuracy', ['Find and fix common grammar, spelling and punctuation errors.', 'Check that a response meets the task.']),
    mod(10, 'Time Management and Practice Plan', ['Use a time plan for the whole section.', 'Build a weekly practice routine with self-assessment.']),
  ] },
];
