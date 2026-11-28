import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'The email task gives you seven minutes to respond to a short scenario. Learn to cover all required points, choose the right tone and write a clear, polite message.',
  modules: {
    5: {
      summary: 'Understanding the email task.',
      sessions: [{
        t: 'Goal, audience, three required points and tone',
        s: 'What the prompt asks and how responses are judged.',
        md: `
## The format
According to ETS, **Write an Email** gives you **7 minutes** to write an email in response to an academic or social scenario. The prompt states **three tasks** your email should complete. The response is AI-scored from **0 to 5** on whether you achieve the goal, elaborate, use a range of syntax and vocabulary, follow social conventions, and control mechanics.

## Original prompt
> You missed a lecture because you were ill. Write an email to your professor, Dr. Alvarez. In your email:
> 1. Explain why you were absent.
> 2. Ask how you can get the material you missed.
> 3. Ask whether you can discuss the missed content during office hours.

## Read the prompt like a checklist
Underline the **three tasks**. A strong email covers **every task** with a clear sentence or two.

## Audience and register
| Audience | Greeting | Tone |
| --- | --- | --- |
| Professor | Dear Dr. Alvarez, | formal, polite |
| Advisor or staff | Dear Ms. Chen, | formal, polite |
| Classmate | Hi Sam, | friendly, informal |
| Roommate or friend | Hey Alex, | informal |

When in doubt, be **polite and clear**.

## Social conventions
- Greeting (*Dear…*)
- Clear opening line that states the purpose
- Polite requests (*Could you please…? I would appreciate it if…*)
- Closing (*Thank you for your time. / Best regards,*) and your name

## Elaboration
Add a **short reason or detail** to each point. Not: *I was sick.* Better: *I had a high fever on Tuesday and could not leave home.*
`,
        q: [
          mc('How many stated tasks does the email prompt in this lesson contain?', 'Three', 'The prompt lists three things to do.', [
            ['One', 'The prompt has three tasks.'],
            ['Five', 'The prompt has three tasks.'],
            ['Ten', 'This is the number of Build a Sentence items.'],
          ]),
          mc('Which greeting best fits an email to a professor?', 'Dear Dr. Alvarez,', 'It is formal and polite.', [
            ['Hey Alvarez,', 'It is too informal.'],
            ['Yo!', 'It is too informal.'],
            ['To whom it may concern,', 'You know the recipient, so use their name.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Planning and writing in seven minutes.',
      sessions: [{
        t: 'A one-minute plan and a clear structure',
        s: 'Greeting, purpose, three points, closing.',
        md: `
## Time plan (7 minutes)
| Minutes | Action |
| --- | --- |
| 0:00–0:45 | Read the prompt; mark the three tasks and the audience |
| 0:45–1:00 | Plan the order in your head or in two-word notes |
| 1:00–6:00 | Write |
| 6:00–7:00 | Check spelling, punctuation and that all three tasks are covered |

## Structure
1. **Greeting**
2. **Purpose sentence** (*I am writing to…*)
3. **Task 1** with a detail
4. **Task 2** with a polite request
5. **Task 3** with a polite request
6. **Thanks and closing**

## Useful language
- Purpose: *I am writing to explain why I missed…*
- Reason: *I was unable to attend because…*
- Request: *Could you please let me know…? Would it be possible to…?*
- Offer: *I would be happy to…*
- Thanks: *Thank you for your understanding.*

## Model answer for the prompt in the last lesson
> Dear Dr. Alvarez,
>
> I am writing to explain why I missed Tuesday’s lecture. I had a high fever and could not leave my apartment, and my doctor advised me to rest for two days.
>
> Could you please let me know how I can get the slides and any handouts from that class? I would also like to borrow notes from a classmate, so I would appreciate any suggestions.
>
> Would it be possible to meet during your office hours this week to discuss the material? I would like to make sure I understand the main ideas before the next lecture.
>
> Thank you for your understanding.
>
> Best regards,
> Maria Gomez

## Common problems
- Missing a task
- Too short, with no detail
- Too informal for a professor
- Run-on sentences
- No greeting or closing
`,
        q: [
          mc('Which sentence is the best opening purpose sentence?', 'I am writing to ask about the material I missed.', 'It states the purpose clearly and politely.', [
            ['Hi.', 'It does not state the purpose.'],
            ['You must send me the slides.', 'It is a demand and too direct for a professor.'],
            ['I was sick, I missed class, I need slides.', 'It is a run-on and not polite.'],
          ]),
          mc('How should you use the last minute?', 'Check that all three tasks are covered and fix errors', 'This protects your score.', [
            ['Start a new email', 'There is no time.'],
            ['Delete the closing', 'The closing is a social convention.'],
            ['Add random vocabulary', 'This may make the email less clear.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Write an Email',
    tasks: [
      mc('What does AI scoring look at in an email, according to ETS?', 'Goal achievement, elaboration, range of language, social conventions and mechanics', 'These are the criteria ETS lists.', [
        ['Only the length', 'Length alone is not the criterion.'],
        ['Only handwriting', 'The email is typed.'],
        ['Only the greeting', 'The greeting is only one convention.'],
      ]),
      mc('Which closing is best for an email to an advisor?', 'Thank you for your time. Best regards, Li', 'It is polite and formal.', [
        ['Bye', 'It is too informal.'],
        ['Whatever, thanks', 'It is not polite.'],
        ['See ya later', 'It is too informal.'],
      ]),
      mc('Which sentence makes a polite request?', 'Could you please let me know the deadline?', 'It uses polite request language.', [
        ['Tell me the deadline.', 'It is a direct command.'],
        ['I want the deadline now.', 'It is demanding.'],
        ['The deadline is when?', 'It is abrupt and informal.'],
      ]),
      mc('A prompt asks you to do three things, but your email covers only two. What is the likely problem?', 'It does not fully achieve the goal', 'Missing a task weakens goal achievement.', [
        ['The email is too polite', 'Politeness is not the problem.'],
        ['The email has too many details', 'The problem is a missing task.'],
        ['The email is typed', 'Typing is required.'],
      ]),
      mc('Which sentence adds elaboration?', 'I had a high fever on Tuesday and could not leave home.', 'It gives a specific detail.', [
        ['I was sick.', 'It gives no detail.'],
        ['Sick.', 'It is a fragment with no detail.'],
        ['I was not there.', 'It does not explain why.'],
      ]),
      mc('Which sentence has correct mechanics?', 'I would appreciate your advice.', 'It has correct capitalization, spelling and punctuation.', [
        ['i would appreciate your advise.', 'It has a capitalization error and a spelling error (advise instead of advice).'],
        ['I would appreciate your advice', 'It lacks final punctuation.'],
        ['I would appreciate you’re advice.', 'You’re should be your.'],
      ]),
      wr({
        points: 20,
        prompt: 'Write an email (about 80–130 words) to your housing office. In your email: (1) explain that the heating in your room is not working, (2) ask when a technician can visit, (3) ask whether you can stay in a temporary room if the repair takes more than two days. Use a polite, formal tone. Write the whole email, including a greeting and closing.',
        scenario: 'Your dormitory room has been cold for two days. You are writing to the housing office. Aim to finish in about seven minutes.',
        starter: 'Dear Housing Office,',
        minWords: 70,
        checklist: ['Greeting and closing', 'Explains the heating problem with a detail', 'Asks when a technician can visit', 'Asks about a temporary room', 'Polite request language'],
        modelAnswer: 'Dear Housing Office,\n\nI am writing to report that the heating in my room, 214 in Pine Hall, has not worked since Sunday. The room is very cold at night, and I am finding it difficult to sleep and study.\n\nCould you please let me know when a technician can visit? I am usually in class until two o’clock, but I can be in the room any afternoon.\n\nIf the repair will take more than two days, would it be possible to stay in a temporary room? I would appreciate any information about how to arrange this.\n\nThank you for your help.\n\nSincerely,\nAnna Lee',
        rubric: { criteria: [
          crit('tasks', 'Covers the three tasks', 'Includes the problem, the technician request and the temporary room.', 40, [
            K.any('problem', ['heat', 'heating', 'cold'], 'You explained the heating problem.', 'Explain the problem: the heating is not working.'),
            K.any('tech', ['technician', 'repair', 'fix', 'visit'], 'You asked about a technician visit.', 'Ask when a technician can visit.'),
            K.any('temp', ['temporary', 'another room', 'different room', 'move'], 'You asked about a temporary room.', 'Ask about a temporary room.'),
          ]),
          crit('polite', 'Polite and formal', 'Uses polite language.', 25, [
            K.any('polite', ['could you', 'would it be possible', 'i would appreciate', 'please', 'thank you'], 'You used polite request language.', 'Use phrases such as Could you please or I would appreciate.'),
          ]),
          crit('conventions', 'Greeting and closing', 'Has a greeting and a closing.', 20, [
            K.any('greet', ['dear'], 'You included a greeting.', 'Begin with Dear Housing Office.'),
            K.any('close', ['sincerely', 'best regards', 'regards', 'thank you'], 'You included a closing.', 'End with a closing such as Sincerely or Thank you.'),
          ]),
          crit('length', 'Length', 'Writes at least 70 words.', 15, [
            K.words('len', 70, 'Your email has enough detail.', 'Add more detail to reach about 80 words.'),
          ]),
        ] },
      }),
    ],
  },
};
