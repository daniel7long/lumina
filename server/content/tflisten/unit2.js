import { mc, tf } from '../builder.js';

export default {
  summary: 'Listen and Choose a Response is a short task: you hear one question or statement and pick the most appropriate reply. Learn to catch the purpose and avoid sound-alike traps.',
  modules: {
    3: {
      summary: 'Understanding the task.',
      sessions: [{
        t: 'One utterance, four possible replies',
        s: 'How the task works and what “appropriate” means.',
        md: `
## The format
According to ETS, in **Listen and Choose a Response** you hear a spoken question or statement. It is **not written on the screen**. You then choose the **best response** from four written options.

The task tests whether you understand **what the speaker means and wants**, not just the words.

## Read aloud: practice script A
*(Have someone read each line once. Then choose the reply.)*

1. “Have you got a minute to look at my draft?”
2. “I’m afraid the lab is closed on weekends.”
3. “Would you mind moving your bag so I can sit?”

### Answers
1. Best reply: **“Sure, I can look at it now.”** (accepts the request)
2. Best reply: **“Oh, then I’ll go on Monday.”** (a sensible response to the information)
3. Best reply: **“Of course, sorry about that.”** (agrees to the polite request)

## Understand the function
Ask what the speaker is **doing**:
| Function | Example | Natural response |
| --- | --- | --- |
| Request | Could you send me the notes? | Sure, I’ll send them tonight. |
| Offer | Shall I carry that for you? | Thanks, that would be great. |
| Suggestion | Why don’t we study at the library? | Good idea. |
| Complaint | The heating in my room isn’t working. | I’ll report it right away. |
| Information | The seminar starts at noon. | Thanks, I thought it was at one. |
| Question | Where did you leave your jacket? | I think it’s in the lecture hall. |

## Listen for the question word or sentence type
*Who, what, when, where, why, how* or a **yes/no** question each need a different kind of answer. A *when* question needs a time, not a place.
`,
        q: [
          mc('You hear: “Could you lend me a pen?” Which reply is most appropriate?', 'Sure, here you go', 'It accepts the request and gives the pen.', [
            ['It is on the table by the window', 'This answers a where question, not a request.'],
            ['I wrote the report yesterday', 'This does not relate to the request.'],
            ['Pens are made of plastic', 'This is a statement about pens that does not respond to the request.'],
          ]),
          mc('You hear: “When does the bookstore open?” What kind of answer is needed?', 'A time', 'A when question needs a time.', [
            ['A place', 'This would answer a where question.'],
            ['A person', 'This would answer a who question.'],
            ['A reason', 'This would answer a why question.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Choosing the best reply.',
      sessions: [{
        t: 'Distractors, polite forms and indirect answers',
        s: 'Eliminate replies that sound right but do not fit.',
        md: `
## Common distractors
1. **Sound-alike trap:** the option repeats a sound or word from the speaker but changes the meaning.
   - You hear: *“Did you hear the lecture on poverty?”*
   - Trap: *“No, the pottery class was fun.”* (*poverty* / *pottery*)
2. **Wrong tense or person:** the reply answers a different time or person.
   - You hear: *“Did she finish the report?”* Trap: *“I will finish it tomorrow.”*
3. **Wrong function:** the reply is a good sentence, but it does not respond to what the speaker wanted.
4. **Too literal:** the option answers the words but not the intended meaning.
   - You hear: *“Do you know what time it is?”* The literal reply *“Yes”* is technically true but not natural. A better reply gives the time.

## Indirect answers
English speakers often answer **indirectly**:
- *“Are you coming to the party?”* → *“I have an exam in the morning.”* (This implies **no**, or **maybe not**.)
- *“Did you like the film?”* → *“Let’s just say I’ve seen better.”* (This implies **no**.)

The correct option often **implies** the answer rather than stating it.

## Polite language
| Form | Meaning |
| --- | --- |
| Would you mind… ? | polite request |
| I was wondering if… | polite request |
| How about… ? / Why don’t we… ? | suggestion |
| Do you want me to… ? | offer |
| I’m afraid… | polite bad news |

## Practice script B (read aloud once)
1. “Do you want me to save you a seat?”
2. “I was wondering if I could hand in the essay tomorrow.”
3. “Isn’t the deadline today?”

Good replies: (1) *“Yes, please, I’ll be a few minutes late.”* (2) *“Let me check with the professor.”* (3) *“No, it was extended to Monday.”*
`,
        q: [
          mc('You hear: “Are you coming to the review session?” Which reply most clearly implies “no”?', 'I have a dentist appointment then', 'It gives a reason that prevents attending.', [
            ['I will bring my notes', 'This implies attendance.'],
            ['What time does it start?', 'This shows interest in attending.'],
            ['Yes, I wouldn’t miss it', 'This clearly says yes.'],
          ]),
          mc('You hear: “Did you hear the lecture on poverty?” Which reply is a sound-alike trap?', 'No, the pottery class was fun', 'Pottery sounds like poverty but changes the topic.', [
            ['No, I missed it', 'This answers the question directly.'],
            ['Yes, it was interesting', 'This answers the question directly.'],
            ['I read the summary instead', 'This is a relevant answer.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Listen and Choose a Response',
    tasks: [
      mc('In Listen and Choose a Response, what do you choose?', 'The best written response to what you heard', 'You choose from four written options.', [
        ['The longest option', 'Length does not decide the answer.'],
        ['The option that repeats the most words', 'Repeated words are often traps.'],
        ['The option that is read aloud', 'The options are written.'],
      ]),
      mc('You hear: “Would you mind closing the window?” Which reply is most appropriate?', 'Not at all, I’ll close it', 'It agrees to the polite request.', [
        ['Yes, I would mind', 'This refuses the request. “Not at all” is the natural way to agree to a “Would you mind…?” request.'],
        ['The window is made of glass', 'This does not respond to the request.'],
        ['I closed it yesterday', 'This does not respond to the current request.'],
      ]),
      mc('You hear: “Shall I carry that for you?” What is the speaker doing?', 'Making an offer', 'Shall I… is a common way to offer help.', [
        ['Making a complaint', 'There is no complaint.'],
        ['Asking for directions', 'There is no request for directions.'],
        ['Giving a warning', 'There is no warning.'],
      ]),
      mc('You hear: “Where did you leave your umbrella?” Which reply fits?', 'I think it’s in the library', 'It gives a place.', [
        ['At three o’clock', 'This is a time.'],
        ['Because it was raining', 'This is a reason.'],
        ['Yes, I did', 'A where question does not need yes or no.'],
      ]),
      mc('You hear: “Did you like the film?” The reply is: “Let’s just say I’ve seen better.” What does the reply imply?', 'The speaker did not like it very much', 'The phrase suggests a weak opinion.', [
        ['The speaker loved it', 'The reply suggests the opposite.'],
        ['The speaker has not seen it', 'The speaker says they have seen it.'],
        ['The speaker wants to see it again', 'This is not implied.'],
      ]),
      mc('You hear: “Why don’t we study together tonight?” Which reply is most natural?', 'Good idea. What time?', 'It accepts the suggestion and moves on.', [
        ['Because I don’t', 'It misreads the suggestion as a literal why question.'],
        ['I studied yesterday, so tonight is a date', 'This is unclear and does not respond.'],
        ['Together is a long word', 'This does not respond.'],
      ]),
      tf('The best reply in this task always repeats words from the speaker.', false, 'Repeated words are often a trap, so the statement is false.', 'The correct reply often uses different words. The statement is false.'),
    ],
  },
};
