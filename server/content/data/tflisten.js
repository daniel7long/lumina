// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the published structure of the TOEFL iBT Listening section (January 2026 format).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'The 2026 Listening Section', modules: [
    mod(1, 'Format, Adaptivity and Scoring', ['Describe the four Listening task types and the adaptive design.', 'Explain that audio plays once and what that means for note-taking.']),
    mod(2, 'Active Listening Skills', ['Predict content from the question and context.', 'Take brief notes with keywords and symbols.']),
  ] },
  { n: 2, title: 'Listen and Choose a Response', modules: [
    mod(3, 'Understanding the Task', ['Describe how the task works and what makes a response appropriate.', 'Identify the purpose of a question or statement.']),
    mod(4, 'Choosing the Best Reply', ['Eliminate replies that repeat sounds but miss the meaning.', 'Recognize polite requests, suggestions and offers.']),
  ] },
  { n: 3, title: 'Listen to a Conversation', modules: [
    mod(5, 'Campus Conversations', ['Follow the speakers, topic and problem in a short conversation.', 'Answer detail questions.']),
    mod(6, 'Attitude, Purpose and Next Steps', ['Infer a speaker’s feeling or opinion.', 'Identify why a speaker says something and what happens next.']),
  ] },
  { n: 4, title: 'Listen to an Announcement', modules: [
    mod(7, 'Campus Announcements', ['Identify the main information in an academic or campus announcement.', 'Note times, places and actions.']),
    mod(8, 'Details and Changes', ['Track changes and conditions in an announcement.', 'Answer questions about who should do what.']),
  ] },
  { n: 5, title: 'Listen to an Academic Talk', modules: [
    mod(9, 'Following a Short Academic Talk', ['Identify the topic, main points and examples.', 'Recognize signposts and organization.']),
    mod(10, 'Question Types and Test Strategy', ['Answer main idea, detail, purpose and inference questions.', 'Build a preparation routine for the adaptive Listening section.']),
  ] },
];
