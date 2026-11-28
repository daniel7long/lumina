import { mc, tf } from '../builder.js';

export default {
  summary: 'In Listen to a Conversation you hear two speakers, usually on a campus topic, and answer questions about the problem, details and attitudes.',
  modules: {
    5: {
      summary: 'Campus conversations.',
      sessions: [{
        t: 'Who, what and why in a short conversation',
        s: 'Follow the speakers, topic and problem.',
        md: `
## The format
According to ETS, in **Listen to a Conversation** you hear a short conversation between two speakers and answer **2 questions**.

Typical settings: a student and a staff member, two students, or a student and a professor. Typical topics: schedules, assignments, housing, equipment, library services, events and small problems.

## Practice script C (read aloud once, with two voices)
**Nina:** Hi, I’m trying to book a study room for Thursday, but the website says they’re all full.
**Staff:** Yes, they go quickly. Group rooms are booked up, but the single rooms on the second floor sometimes open up when people cancel.
**Nina:** There are four of us working on a presentation, so a single room won’t work.
**Staff:** In that case, you could try the seminar room in the science building. It isn’t on the website, but you can reserve it at the front desk there.
**Nina:** That’s helpful. Do I need to bring anything?
**Staff:** Just your student ID.

### Questions
1. **Why does Nina need a room?** → For four students to work on a presentation. *(main idea)*
2. **What does the staff member suggest?** → Reserving the seminar room at the front desk of the science building. *(detail)*
3. **What must Nina bring?** → Her student ID. *(detail)*

## Listening plan
1. **Who** is speaking, and what is their relationship?
2. **What** is the topic or problem?
3. **What** solution or decision is reached?
4. **What** will happen next?

## Notes for conversations
Write the **speaker names or roles** and one line each.
- Nina: needs room Thu, 4 ppl
- Staff: group rooms full; try sci. bldg seminar rm, front desk
- Bring: student ID
`,
        q: [
          mc('In script C, why can’t Nina use a single room?', 'There are four people in her group', 'She says four of them are working on a presentation.', [
            ['Single rooms cost more', 'Cost is not mentioned.'],
            ['Single rooms are closed on Thursday', 'The staff member says they sometimes open up.'],
            ['She does not have a student ID', 'She is told to bring her student ID.'],
          ]),
          mc('Where is the seminar room?', 'In the science building', 'The staff member recommends the seminar room in the science building.', [
            ['In the library basement', 'The library basement is not mentioned.'],
            ['On the second floor of the library', 'The second floor is where single rooms are.'],
            ['At the student union', 'The student union is not mentioned.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Attitude, purpose and next steps.',
      sessions: [{
        t: 'What speakers feel, mean and plan to do',
        s: 'Inference, speaker purpose and future actions.',
        md: `
## Attitude and feeling
Listen to **tone** and to word choice:
- Worry: *I’m a bit nervous about…*, *I don’t know if I can…*
- Relief: *Oh, good, that’s a relief.*
- Disappointment: *Oh, that’s too bad.*
- Doubt: *Hmm, I’m not so sure.*
- Enthusiasm: *That sounds great!*

## Speaker purpose
A question may ask **why a speaker says something**: to ask for help, to suggest, to complain, to explain a policy, to politely refuse, or to confirm information.

## Practice script D (read aloud once)
**Marcus:** Professor Lee, I wanted to ask about the lab report. I’m not sure I can finish it by Friday. My laptop broke last weekend, and I lost part of my data.
**Professor:** I’m sorry to hear that. Did you save anything to the cloud?
**Marcus:** Only the first half. I’ve been redoing the rest in the computer lab.
**Professor:** All right. Friday is firm for the class, but I can give you until Monday morning if you send me an email today so I have it in writing.
**Marcus:** Thank you. I’ll write it as soon as I get home.

### Questions
1. **Why does Marcus visit the professor?** → To ask for more time on a lab report. *(purpose)*
2. **How does the professor respond?** → She offers an extension to Monday morning if he emails today. *(detail)*
3. **What will Marcus probably do next?** → Email the professor after he gets home. *(next step)*
4. **How does the professor feel about the situation?** → Sympathetic but firm about the rule. *(attitude)*

## Common wrong answers
- **Extreme:** *The professor refuses to help.*
- **Wrong speaker:** *The professor lost her data.*
- **Not mentioned:** *Marcus will buy a new laptop tomorrow.*
`,
        q: [
          mc('In script D, what must Marcus do to receive the extension?', 'Send an email today', 'The extension depends on a written request today.', [
            ['Visit the professor on Monday', 'Monday is the new deadline, not a meeting.'],
            ['Submit the report on Friday', 'The extension allows him to submit later.'],
            ['Redo the lab', 'He is already redoing his data; that is not the condition.'],
          ]),
          mc('Which word best describes the professor’s response?', 'Sympathetic', 'She says she is sorry to hear it and offers help.', [
            ['Angry', 'She does not show anger.'],
            ['Bored', 'She asks a helpful question.'],
            ['Amused', 'The situation is not treated as funny.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Listen to a Conversation',
    tasks: [
      mc('How many questions follow each Listen to a Conversation item, according to ETS?', '2', 'ETS lists 2 questions per conversation.', [
        ['1', 'Each conversation has 2 questions.'],
        ['4', 'This is the number for an academic talk.'],
        ['10', 'This is the number of Build a Sentence items.'],
      ]),
      mc('Which is a good first listening goal for a conversation?', 'Who is speaking, and what is the problem?', 'These give you the main idea.', [
        ['Write every word', 'This is impossible and unnecessary.'],
        ['Ignore the speakers’ roles', 'Roles help you understand purpose.'],
        ['Wait for the last sentence only', 'You need the whole conversation.'],
      ]),
      mc('A student says, “Oh, that’s a relief.” What is the student’s feeling?', 'Relieved', 'The phrase names relief directly.', [
        ['Worried', 'Relief is the opposite of worry here.'],
        ['Confused', 'The phrase shows understanding.'],
        ['Angry', 'The phrase is not angry.'],
      ]),
      mc('In script D, why does the professor ask whether Marcus saved anything to the cloud?', 'To learn how much data he lost', 'The question helps her understand the problem.', [
        ['To criticize his laptop', 'She is sympathetic and does not criticize.'],
        ['To change the topic', 'The question relates to the problem.'],
        ['To end the meeting', 'She continues to help him.'],
      ]),
      mc('A speaker says, “I’m afraid the form is due today.” What is the speaker most likely doing?', 'Giving unwelcome information politely', 'I’m afraid introduces bad news politely.', [
        ['Expressing fear of the form', 'In this phrase, afraid is a polite softener, not fear.'],
        ['Asking for the form', 'The speaker is giving information.'],
        ['Making an offer', 'There is no offer.'],
      ]),
      mc('Which note is the most useful for the sentence “The meeting moved from Tuesday to Thursday at 3”?', 'Mtg: Tue → Thu 3pm', 'It captures the change and time.', [
        ['Meeting', 'It leaves out the key details.'],
        ['Tuesday Thursday Tuesday', 'It does not show which is the new day.'],
        ['Moved', 'It does not say what moved or when.'],
      ]),
      tf('In a conversation, a correct answer may be implied rather than stated directly.', true, 'Correct. Speakers often imply meaning with tone and indirect phrases.', 'Speakers often imply meaning, so the statement is true.'),
    ],
  },
};
