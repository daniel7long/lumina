import { mcq, tf, reading, video, session, lesson, written, choice, K, crit } from '../helpers.js';

const P = 'eng:u3';

export default {
  id: P,
  title: 'Unit 3 · Everyday Communication and Adjustment',
  summary: 'Use English for small talk, practical tasks (housing, transportation, shopping, banking, bills) and asking for support while you adjust to life in the U.S.',
  objectives: [
    'Start, continue and end common informal conversations in U.S. university settings.',
    'Find social opportunities that match your interests and explain how to join them.',
    'Understand practical information (listings, bills, notices), identify what is unclear and ask specific clarification questions.',
    'Explain an adjustment-related difficulty, compare two support options, justify a choice and write a clear request for help.',
  ],
  lessons: [
    /* ───────────── Lesson 1 ───────────── */
    lesson(`${P}:l1`, 'Lesson 1 · Social Practices and Small-Talk Culture', 'Understand what small talk is for and practice natural responses.',
      ['Identify the purpose and parts of small talk.', 'Respond to common informal questions and ask follow-up questions.', 'Choose a campus community that fits your interests and take a first step.'],
      [
        session(`${P}:l1:s1`, 'What is small talk for?', 'Light conversation with a real purpose.', {
          reading: reading('Small talk in U.S. university life', 6, `
## Why people make small talk

**Small talk** is friendly, low-pressure conversation about everyday topics. Its purpose is not to share important information. It shows that you are friendly and open to talking.

### Common situations
- Waiting for class to start
- Standing in line at a café
- Meeting a classmate at an event
- Walking into the lab or the elevator

### Typical topics
Weather · weekend plans · the class or assignment · food · hometown · campus events

### Be careful with…
Very personal topics (income, weight, politics, religion) are usually avoided with people you have just met.

### Greeting patterns
**"How are you?"** is usually a greeting, not a real medical question. Typical answers: *Good, thanks. You?* · *Pretty good! How about you?* · *Not bad.* You do not need to give a long answer.

### Structure of a conversation
1. **Open** — *Hi, I'm Lin. Are you in this class too?*
2. **Keep it going** — a follow-up question or comment
3. **Close** — *It was nice talking with you. See you in class!*

> People communicate differently. You can be quiet or talkative. The goal is to have a few phrases ready, so talking feels easier.
`),
          quiz: [
            mcq('A classmate says "Hey, how\'s it going?" as they walk past. What is the most natural reply?', [
              ['Describe your whole day in detail.', 'Too long for a quick greeting. This question is usually a short hello.'],
              ['Good, thanks! How about you?', 'Correct. A short answer plus a question back keeps the exchange friendly. Other short replies would also work.'],
              ['Say nothing.', 'Silence can seem unfriendly. A short reply is the normal response.'],
            ], 1),
            tf('"How are you?" is usually a real question that expects a long answer about your health.', false,
              'Not quite. In most casual situations it is a greeting, and a short answer is expected.',
              'Correct. It is mainly a greeting. Short answers are usual, unless the speaker is a close friend.'),
          ],
        }),
        session(`${P}:l1:s2`, 'Listening: three campus conversations', 'Notice how people open, continue and close.', {
          video: video('Three short conversations on campus', 4, `
**Conversation 1 — Waiting for class**

**Lin:** Hi! Is this the Statistics lecture?
**Jordan:** Yeah, it starts in five minutes. I'm Jordan, by the way.
**Lin:** I'm Lin. Nice to meet you. Did you finish the homework?
**Jordan:** Mostly. The last problem was tough! What are you studying?
**Lin:** Data science. How about you?
**Jordan:** Economics. Oh, the professor's here. See you after class!

**Conversation 2 — At the coffee line**

**Sam:** Long line today, huh?
**Priya:** I know! Mondays are the worst. Do you come here often?
**Sam:** Pretty much every morning. The oat latte is great.
**Priya:** Good to know. I'll try it. Anyway, I have to run — have a good one!
**Sam:** You too!

**Conversation 3 — A club event**

**Maria:** Hi, are you new to the photography club?
**Chen:** Yes, it's my first time. I just moved here from Shanghai.
**Maria:** Welcome! What kind of photos do you like to take?
**Chen:** Mostly street photography. I'd love to learn more about editing.
**Maria:** We have a workshop next Friday. I can send you the details if you want.
**Chen:** That would be great, thank you!

---
**Notice**
- Opening: *Hi! Is this…?* · *Long line today, huh?* · *Are you new to…?*
- Follow-up questions: *What are you studying?* · *What kind of photos do you like?*
- Closing: *See you after class!* · *I have to run — have a good one!*
`, 'Opening, continuing and closing small talk in three settings.'),
          quiz: [
            mcq('In Conversation 2, what does Priya say to end the conversation politely?', [
              ['"Do you come here often?"', 'This is a question that keeps the conversation going.'],
              ['"Anyway, I have to run — have a good one!"', 'Correct. "Anyway" signals the end, and she gives a short reason and a friendly closing.'],
              ['"Good to know."', 'This responds to Sam\'s recommendation, but does not close the conversation.'],
            ], 1),
            mcq('Which question does Maria use to keep the conversation going?', [
              ['What kind of photos do you like to take?', 'Correct. An open follow-up question about the other person\'s interests invites more talk.'],
              ['Are you new to the photography club?', 'This is the opening question.'],
              ['Welcome!', 'A greeting, not a question.'],
            ], 0),
          ],
        }),
        session(`${P}:l1:s3`, 'Responding, following up and closing', 'Build your own language bank.', {
          reading: reading('Language bank: keep the conversation going', 7, `
## Practice patterns

### Reacting
*Oh, nice! · Really? · That sounds fun. · I know what you mean.*

### Follow-up questions
Instead of answering "yes/no," ask **open questions**.
- *What do you like about it?*
- *How did you get into…?*
- *What are you working on this semester?*
- *Do you have any plans for the weekend?*

### Sharing something about yourself
Give one extra detail so the other person has something to ask.
✔ *I'm from Vietnam — I just arrived last week, so I'm still finding my way around.*
✘ *Vietnam.*

### Polite closings
- *It was nice talking to you.*
- *I should get going — I have class. See you around!*
- *Let's catch up another time.*

### If you need help understanding
- *Sorry, could you say that again?*
- *Do you mean…?*

### You can say no politely
- *Thanks for the invitation, but I can't make it this time.*
- *I'd love to, but I have an exam. Maybe next time?*

There is more than one correct way to talk. Choose phrases that feel natural to you.
`),
          quiz: [
            mcq('Which reply gives the other person something to continue the conversation with?', [
              ['"Yes."', 'It ends the conversation.'],
              ['"I\'m from Vietnam — I just arrived last week, so I\'m still finding my way around."', 'Correct. It gives extra information the other person can ask about.'],
              ['"I don\'t know."', 'It does not add information or invite more conversation.'],
            ], 1),
          ],
        }),
        session(`${P}:l1:s4`, 'Finding your community', 'Choose a student group and write a first message.', {
          reading: reading('Student organizations and events', 7, `
## Where to find people

Universities have **student organizations** (clubs), department events, and cultural or interest groups. Search the university's student activities page or events calendar.

### Three sample listings
> **Hiking & Outdoors Club** — Weekend trips to local trails. All levels welcome. Meetings every Tuesday at 7 p.m. in Student Center Room 201. Contact: hiking@university.example
>
> **International Students Association** — Welcome events, language exchange and cultural festivals. Open to everyone. Monthly meetings. Sign up through the student activities portal.
>
> **Data Science Society** — Weekly study group, career talks and project teams. Open to students from all majors.

### How to decide
1. Match the **interest** to the student's profile.
2. Check the **meeting time** and **place**.
3. Check who can join (**open to everyone?**).
4. Look for how to **sign up**.

### First message (example)
> Hi! I'm Chen, a first-year student in the Master of Data Science program. I saw that the Data Science Society meets weekly. Is it open to first-year students, and how can I join the next meeting? Thank you!

### What the message includes
Greeting · who you are · what you saw · one clear question · thanks.
`),
          quiz: [
            mcq('Anika loves hiking and wants to meet people on the weekend. Which group fits best?', [
              ['Data Science Society', 'This group focuses on study and careers, not outdoor activities.'],
              ['Hiking & Outdoors Club', 'Correct. It matches her interest and runs weekend trips.'],
              ['International Students Association', 'This could be a good place to meet people, but it is not specific to hiking.'],
            ], 1),
            tf('A good first message to a student group includes who you are and one clear question.', true,
              'Correct. It helps the other person understand your situation and answer easily.',
              'Not quite. A short introduction and one specific question make the reply easier.'),
          ],
        }),
      ]),

    /* ───────────── Lesson 2 ───────────── */
    lesson(`${P}:l2`, 'Lesson 2 · Before Arrival: Finding Housing and Planning Transportation', 'Compare options and ask clear questions before you travel.',
      ['Read listings and schedules for cost, conditions and missing details.', 'Compare two options and justify a choice.', 'Draft a housing inquiry and a transportation question.'],
      [
        session(`${P}:l2:s1`, 'Read listings and schedules', 'What matters, what is missing.', {
          reading: reading('Interpreting information before you arrive', 7, `
## A fictional student: Wei

Wei arrives on **August 20** at the airport. His budget is **$900 per month** for housing and he will study on the main campus.

### Option A: Room in a shared apartment
> Furnished room in 3BR apartment, 15 min bus to campus. **$750/month**, utilities extra (about $80). 12-month lease. **Avail. Aug 25.**

### Option B: University residence hall
> Single room, 5-min walk to campus. **$1,050/month**, meal plan included. Semester contract. Move-in from **Aug 18**.

### Option C: Sublet
> Room in 2BR near campus, **$680/month** including utilities. Sept 1 – Dec 31. Roommate is a graduate student.

### What to compare
| | A | B | C |
| --- | --- | --- | --- |
| Total monthly cost | ~$830 | $1,050 | $680 |
| Available on arrival (Aug 20)? | No (Aug 25) | Yes | No (Sept 1) |
| Length | 12 months | Semester | 4 months |

### What is missing?
- A: Is the deposit refundable? How much?
- B: Is the meal plan optional?
- C: What happens after December?

**Tip:** Underline numbers and dates. Then write down what you still need to ask.
`),
          quiz: [
            mcq('Wei arrives August 20 and has a $900 budget. Which option has a problem with BOTH time and cost?', [
              ['Option A', 'A costs about $830, which fits the budget. The problem is only the arrival date.'],
              ['Option B', 'B is available on arrival, but it costs more than his budget. It has a cost problem only.'],
              ['None of them has both problems', 'Correct. A has a date problem, B has a cost problem, and C has a date problem. Each option has a different trade-off.'],
            ], 2),
          ],
        }),
        session(`${P}:l2:s2`, 'Ask for what is missing', 'Watch a clarification conversation.', {
          video: video('Audio: a call with a landlord', 4, `
**Landlord:** Hello, this is Rob Harris.

**Wei:** Hello, Mr. Harris. My name is Wei Zhang. I'm an incoming international student and I saw your listing for the furnished room near campus. Do you have a few minutes to answer some questions?

**Landlord:** Sure. The room's still available.

**Wei:** Thank you. The listing says the rent is $750. Does the rent include utilities?

**Landlord:** No, utilities are extra. They're usually around eighty dollars a month.

**Wei:** I see. Is the deposit refundable?

**Landlord:** Yes, it's one month's rent and it's returned at the end of the lease if there's no damage.

**Wei:** Great. One more thing — I arrive on August 20. Is it possible to move in before August 25?

**Landlord:** Hmm, the current tenant leaves on the 24th. I could let you in on the 24th if you want.

**Wei:** That would be helpful. Could you send me the lease so I can read it before I decide?

**Landlord:** Of course. What's your email address?

**Wei:** Thank you very much, Mr. Harris. I really appreciate your help.

---
**Question patterns**
*Does the rent include…? · Is the deposit refundable? · Is it possible to…? · Could you send me…?*
`, 'Specific questions that fill in missing information.'),
          quiz: [
            mcq('What problem does Wei solve by asking "Is it possible to move in before August 25?"', [
              ['He learns that utilities are extra.', 'That was answered by an earlier question.'],
              ['He finds out whether he can move in closer to his arrival date.', 'Correct. The question addresses the date mismatch and leads to a possible solution (August 24).'],
              ['He finds out the deposit amount.', 'That was a different question.'],
            ], 1),
            tf('A specific question like "Does the rent include utilities?" is more useful than "I don\'t understand."', true,
              'Correct. A specific question tells the other person exactly what information you need.',
              'Not quite. Specific questions are easier to answer because they say exactly what is missing.'),
          ],
        }),
        session(`${P}:l2:s3`, 'Build a pre-arrival plan', 'Compare, decide and write an inquiry.', {
          reading: reading('Compare options and write an inquiry', 8, `
## Step 1: Compare

Use a comparison table. Write short facts, not opinions, then add one sentence of reasoning.

**Example reasoning:** *I recommend Option A because the total cost (about $830) fits Wei's budget, and the landlord may let him move in on August 24. Option B is more expensive than his budget.*

### Useful phrases
*I recommend… because… · This option fits the budget… · The main problem is… · On the other hand…*

## Step 2: Write a housing inquiry

A good inquiry has: **greeting → who you are → what you saw → specific questions → thanks**.

> Dear Mr. Harris,
> My name is Wei Zhang and I am an incoming international student. I saw your listing for the furnished room near campus. I arrive on August 20, and I have a few questions: Is the deposit refundable? Does the rent include internet? Would it be possible to move in on August 24?
> Thank you for your time.
> Best regards,
> Wei Zhang

## Step 3: A transportation question
*Does the airport shuttle run after 10 p.m.? · Is a student discount available for the monthly pass?*

You do not need to share personal travel or payment information when you practice.
`),
          quiz: [
            mcq('Which part of an inquiry should come right after the greeting?', [
              ['Your list of questions', 'First introduce yourself so the other person knows who is writing.'],
              ['Who you are and what you saw', 'Correct. It gives context before you ask questions.'],
              ['A request for a discount', 'Hold requests for later. Begin with context.'],
            ], 1),
            mcq('Which question is the clearest?', [
              ['Can you tell me more?', 'Too general. The reader will not know what to explain.'],
              ['Is the shuttle available after 10 p.m.?', 'Correct. It asks for one specific piece of information.'],
              ['Shuttle?', 'Too short and not polite.'],
            ], 1),
          ],
        }),
      ]),

    /* ───────────── Lesson 3 ───────────── */
    lesson(`${P}:l3`, 'Lesson 3 · After Arrival: Shopping, Banking and Paying Bills', 'Find what you must do, ask what you do not know and repair problems.',
      ['Find the action point in a bill, receipt or notice.', 'Separate what you understand from what you need to clarify.', 'Explain a practical problem and ask for help.'],
      [
        session(`${P}:l3:s1`, 'Find the action point', 'The information that changes what you do.', {
          reading: reading('What do I actually need to do?', 7, `
## You do not have to translate every word

On a bill, receipt or notice, look for the **action point** — the information that tells you what to do and by when.

### What to look for
- **Amount due** — how much?
- **Due date** — by when?
- **Fee or late fee** — what happens if I am late?
- **Payment status** — has it been paid?
- **Contact information** — who can I ask?
- **Return period** — how many days can I return an item?

### Example: Utility bill
> **City Power & Light** · Statement date: Oct 1
> Previous balance: $0.00 · Current charges: $62.40
> **Amount due: $62.40** · **Due date: Oct 22**
> A **$5.00 late fee** applies after the due date.
> Pay online, by phone or at an authorized store. Questions? Call 555-0100.

**Action point:** Pay $62.40 by October 22 to avoid a $5 late fee.

### Example: Store policy
> *Items may be returned within 30 days with a receipt. Opened electronics: 14 days.*

**Action point:** Keep the receipt. For opened electronics, return within 14 days.
`),
          quiz: [
            mcq('Which is the action point in the utility bill example?', [
              ['The statement date is October 1.', 'It is a detail, but it does not tell you what to do.'],
              ['Pay $62.40 by October 22 to avoid a late fee.', 'Correct. It tells you the amount, the deadline and the consequence.'],
              ['The company name is City Power & Light.', 'This is useful to know, but it is not the action point.'],
            ], 1),
          ],
        }),
        session(`${P}:l3:s2`, 'What do I know, what do I still need?', 'Sort information before you ask.', {
          reading: reading('Know / Need-to-know', 7, `
## Make two lists

Before you ask for help, divide the information into two lists.

### Scenario
Sofia receives a text from her bank: *"A payment of $120.00 to ShopFast was declined. Contact us to review your account."*

| I know | I still need to know |
| --- | --- |
| A $120 payment to ShopFast was declined | **Why** it was declined (not enough money? a security block?) |
| The bank asks me to contact them | **How** to contact them (phone? app? branch?) |
| | Whether my card is **still active** |

### Turn "need to know" into questions
- *Why was the payment declined?*
- *Is my card still active?*
- *What should I do to fix this?*

### Compare these messages
✘ **Too vague:** *I don't understand my account.*
✘ **Too long:** a full paragraph with unrelated details.
✔ **Clear and specific:** *Hello, I received a message that a $120 payment to ShopFast was declined. Could you tell me why it was declined and whether my card is still active?*

### Remember
Say what you **know**, then ask for what you **need**. This shows you are prepared and saves time for both people.
`),
          quiz: [
            mcq('Which message is clear and specific?', [
              ['I need help with my money.', 'This is too general. The bank cannot tell what you need.'],
              ['A $120 payment was declined. Could you tell me why and whether my card is active?', 'Correct. It states what you know and asks two specific questions.'],
              ['Your bank is bad. Fix it now.', 'This is a complaint, not a clear question, and it is not polite.'],
            ], 1),
          ],
        }),
        session(`${P}:l3:s3`, 'Repair a misunderstanding', 'When something has already gone wrong.', {
          video: video('Service encounter: a double charge', 4, `
**[Scene: a store customer-service desk.]**

**Customer (Ana):** Hi, excuse me. I think I was charged twice for this purchase.

**Clerk:** Let me take a look. Do you have your receipt?

**Ana:** Yes, here it is. The total was $24.50, but my bank app shows two charges of $24.50 from yesterday.

**Clerk:** I see one charge on our system. Sometimes the second one is a "pending" authorization.

**Ana:** I'm sorry, what does "pending" mean?

**Clerk:** It means the bank has put a temporary hold on the money, but it hasn't been taken yet. It usually disappears in two to three business days.

**Ana:** I see. So does that mean I don't need to do anything right now?

**Clerk:** Right. If it's still there after three business days, call your bank and show them this receipt.

**Ana:** Could I get a copy of the receipt with the transaction number, please?

**Clerk:** Of course. Here you go.

**Ana:** Thank you very much — that's really helpful.

---
**Useful phrases**
*I think I was charged twice. · What does … mean? · So does that mean…? · Could I get a copy of…?*
`, 'Explaining a problem calmly and checking the next step.'),
          quiz: [
            mcq('Ana asks: "So does that mean I don\'t need to do anything right now?" What is she doing?', [
              ['Complaining', 'Her tone is calm and she is checking understanding, not complaining.'],
              ['Double-checking what the clerk said and the next step', 'Correct. "So does that mean…?" repeats the idea to confirm it.'],
              ['Asking for a refund', 'She does not ask for a refund here.'],
            ], 1),
            tf('A "pending" charge means the money has already been permanently taken.', false,
              'Not quite. "Pending" means a temporary hold. It may disappear in a few business days.',
              'Correct. Pending means the bank is holding money temporarily; it may not become a final charge.'),
          ],
        }),
        session(`${P}:l3:s4`, 'Compare ways of asking for help', 'Choose the most useful message for the situation.', {
          reading: reading('A good message: five parts', 7, `
## Five-part request

1. **Greeting** — *Hello, / Dear …,*
2. **Who you are / context** — *I'm a student at … I live at …*
3. **The problem (facts)** — *I was charged twice for…*
4. **What you need** — *Could you tell me…? / Could you check…?*
5. **Thanks** — *Thank you for your help.*

### Compare three messages to a landlord
**A (too vague):** *My heating is bad. Help.*
**B (too long):** *Hello, I moved in last month and my roommate is from… [200 words of story]…*
**C (clear):**
> Hello Mr. Harris, this is Wei Zhang in apartment 3B. Since Monday the heating has not been working, and the apartment is very cold. Could you let me know when a technician can come? Thank you very much.

### Which person to contact?
| Problem | Contact |
| --- | --- |
| Heating not working | Landlord or building manager |
| Unexpected bank charge | Bank customer service |
| Wrong item in an order | Store customer service |
| Unclear university bill | Student accounts office |

### Mini decision checklist
*What is the problem? What information matters? What is unclear? Who should I contact? What should I ask? What will I do next?*
`),
          quiz: [
            mcq('Which message to a landlord is the most useful?', [
              ['My heating is bad. Help.', 'It is too vague. The landlord needs to know what is wrong and since when.'],
              ['Hello Mr. Harris, since Monday the heating has not worked. Could you let me know when a technician can come?', 'Correct. It states the problem, the time and a clear request.'],
              ['I hate this apartment.', 'It does not give useful information or make a request.'],
            ], 1),
            mcq('You see an unexpected charge on your credit card. Whom should you contact first?', [
              ['The bank or card company', 'Correct. They can explain the charge and help dispute it if it is wrong.'],
              ['Your landlord', 'The landlord cannot see your card statement.'],
              ['The library', 'The library has no information about your card.'],
            ], 0),
          ],
        }),
      ]),

    /* ───────────── Lesson 4 ───────────── */
    lesson(`${P}:l4`, 'Lesson 4 · Everyday Cultural Encounters, Culture Shock and Homesickness', 'Interpret unfamiliar interactions and ask for support.',
      ['Consider more than one meaning of an unfamiliar interaction.', 'Choose a response that fits the situation and your preferences.', 'Identify suitable support and write a request.'],
      [
        session(`${P}:l4:s1`, 'Interpreting everyday encounters', 'More than one possible meaning.', {
          reading: reading('Unfamiliar interactions', 7, `
## Not everything has one meaning

Sometimes a conversation in the U.S. may feel unexpected. **Context** (where you are, who the person is, tone of voice, body language) helps you think about what the person might mean. Practices differ across regions, communities and individuals, so there may be more than one reasonable interpretation.

### Scenario 1: A stranger compliments your jacket
*"Nice jacket!"* — said by someone in line at a store.
Possible meanings: just being friendly; a way to start small talk; simply an opinion.
Possible responses: *Thanks!* · *Thanks! I got it last winter.* · a smile and a nod.

### Scenario 2: "We should get lunch sometime!"
Possible meanings: a real invitation; a polite goodbye. How to find out: *"That sounds nice! When would be good for you?"* If the person offers a day, it is likely a real plan.

### Scenario 3: "How are you?" from a cashier
Meaning: a greeting. Response: *Good, thanks. How are you?*

### Questions to ask yourself
1. Where am I? Who is this person?
2. What is the speaker's tone?
3. What are two things this might mean?
4. How do I want to respond?
`),
          quiz: [
            mcq('A classmate says "We should get lunch sometime!" What is a useful way to find out whether it is a real plan?', [
              ['Ask: "That sounds nice! When would be good for you?"', 'Correct. It shows interest and invites the person to suggest a time, which helps you see if it is a real plan.'],
              ['Be angry that they have not given a date.', 'This phrase is not always meant as a specific invitation. Getting angry is not helpful.'],
              ['Never answer.', 'Answering shows friendliness, and you can decide later.'],
            ], 0),
            tf('There is only one correct way to respond to a compliment from a stranger.', false,
              'Correct. You can say thanks, add a comment, or just smile. All can be appropriate, depending on the situation and your preference.',
              'Not quite. Several responses can work, and you may choose what feels comfortable.'),
          ],
        }),
        session(`${P}:l4:s2`, 'Clarifying and setting boundaries', 'Phrases for asking, accepting and declining.', {
          reading: reading('Language for preferences and boundaries', 7, `
## You decide how to respond

You can **engage**, **ask for clarification** or **politely end** an interaction.

### Ask for clarification
- *Do you mean…?*
- *Sorry, I didn't catch that. Could you say it again?*
- *Could you explain what you mean by…?*

### Accept with thanks
- *Thanks, that's kind of you.*
- *That sounds great. Thank you!*

### Decline politely
- *Thanks for asking, but I'd rather not.*
- *I'm not comfortable with that, but thank you.*
- *Sorry, I can't stop right now.*

### Politely end a conversation
- *I'm sorry, I need to go now. Take care!*
- *It was nice talking to you. I have to head to class.*

### Keep it short and clear
You do not need to explain more than you want to. A short, polite sentence is enough.

### Practice
Choose a situation and write 1–2 sentences: a stranger asks where you are from; a classmate invites you to a party you do not want to go to; someone asks a personal question about your salary.
`),
          quiz: [
            mcq('A stranger on campus asks a personal question you do not want to answer. Which response is polite and clear?', [
              ['Thanks for asking, but I\'d rather not say.', 'Correct. It is polite, short and clear. You do not have to give a reason.'],
              ['Answer every question to avoid seeming rude.', 'You are not required to answer personal questions.'],
              ['Walk away without saying anything.', 'This is possible, but a short polite phrase is usually clearer.'],
            ], 0),
          ],
        }),
        session(`${P}:l4:s3`, 'Culture shock and homesickness', 'A normal part of adjusting.', {
          reading: reading('Understanding adjustment', 7, `
## It is common — and it changes

**Culture shock** is the stress or confusion people may feel when daily life is very different from what they know. **Homesickness** is missing home, family and familiar routines. Many international students experience both, sometimes after the excitement of arriving fades.

### Fictional example
*Hana has been in the U.S. for six weeks. Every day she must talk to new people, and the small talk is tiring. She misses her mother's cooking and feels guilty for not being happier. She sometimes skips events because she is exhausted.*

### Words to describe how you feel
*tired · overwhelmed · lonely · homesick · nervous · frustrated · uncertain*

### Sentences to explain a difficulty
- *I'm having trouble adjusting to…*
- *I feel overwhelmed because…*
- *I miss… and it's hard to…*

### Small actions that often help
- Keep a routine (sleep, meals, exercise)
- Plan regular calls with family
- Join one small group activity
- Ask for help early

This course teaches you the **language and steps for finding support**. It does not measure how you feel.
`),
          quiz: [
            mcq('Which sentence best explains a difficulty clearly?', [
              ['Everything is bad.', 'This is too general and does not say what the difficulty is.'],
              ['I feel overwhelmed because I have to speak English all day and I miss my family.', 'Correct. It states the feeling, the reason and the context.'],
              ['No problem.', 'This does not describe the difficulty.'],
            ], 1),
            tf('Many international students feel homesick, and feeling this way does not mean something is wrong with you.', true,
              'Correct. Adjustment is a normal process, and asking for support is a sensible step.',
              'Not quite. Feeling homesick is common and does not mean you are failing.'),
          ],
        }),
        session(`${P}:l4:s4`, 'Find support and write a request', 'Compare options and ask clearly.', {
          reading: reading('Choosing support and asking for it', 8, `
## Compare support options

| Option | Good for | How to access |
| --- | --- | --- |
| **Counseling center** | Talking with a trained professional about stress, loneliness, adjustment | Book an appointment on the center's website; many offer short or free sessions to students |
| **International student office** | Questions about adjusting, events and community | Visit or email the office |
| **Student organization** | Meeting people who share your language, culture or interest | Search the activities portal |
| **Academic advisor** | Managing workload and balancing schoolwork | Book an advising appointment |

### Justify your choice
*I would choose the counseling center because Hana feels tired and lonely every day, and a counselor can help her find strategies. She could also join one cultural group.*

### Write a request for help
> Dear International Student Office,
> My name is Hana Kim and I am a first-year student. I have been in the U.S. for six weeks and I am finding it hard to adjust. I feel tired and lonely, and I miss my family. Could you tell me about support groups or events for new international students? I would be grateful for any advice.
> Thank you,
> Hana Kim

### Parts of the request
**Greeting → who you are → the difficulty → a specific request → thanks.**

> **If you ever feel unsafe or think about harming yourself,** contact your local emergency number right away. In the U.S., you can call or text **988** (Suicide & Crisis Lifeline) at any time.
`),
          quiz: [
            mcq('Hana feels lonely and tired every day. Which support option is the best match?', [
              ['The library', 'The library is helpful for study, but it does not provide support for adjustment.'],
              ['The counseling center, with a student group as an additional step', 'Correct. A counselor can help with stress and loneliness, and a group can give community. Other options could also help.'],
              ['Ignoring the problem', 'Waiting alone usually makes it harder. Asking early is better.'],
            ], 1),
            mcq('Which request is clearest?', [
              ['Help me.', 'Too general to answer.'],
              ['I am finding it hard to adjust and feel lonely. Could you tell me about events for new international students?', 'Correct. It names the difficulty and asks for a specific type of information.'],
              ['I want everything to be different.', 'It does not make a request.'],
            ], 1),
          ],
        }),
      ]),
  ],

  assessment: {
    id: `${P}:assessment`,
    title: 'Unit 3 Assessment · A Newly Arrived Student',
    estMinutes: 35,
    body: {
      instructions: `
## Scenario

**Hana** has just arrived in the U.S. as an international student. In this assessment you will help her with three things: **start a conversation and find a community**, **understand a practical problem with a bill**, and **ask for support while adjusting**.

Answer the quick questions first, then complete the three writing tasks. The writing tasks are scored with a rubric. You can read a model answer after you submit.

You need a **B or higher** to pass. You can try again, and your best result counts.
`,
      tasks: [
        choice('t1', 10, mcq('Hana loves photography and wants to meet people. Which listing is the best match?', [
          ['Photography Club — meets Fridays at 6 p.m., open to everyone.', 'Correct. It matches her interest and is open to all students.'],
          ['Accounting Society — monthly career events for accounting majors.', 'It does not match her interest and is for a specific major.'],
          ['Chess Club — Wednesday nights, beginners welcome.', 'It could be a good way to meet people, but it is not related to photography.'],
        ], 0)),
        choice('t2', 10, mcq('Hana receives this bill: "Amount due: $48.20. Due date: Nov 5. Late fee: $8 after Nov 5." What is the action point?', [
          ['The bill has a late fee.', 'The late fee is one detail, but not the full action.'],
          ['Pay $48.20 by November 5 to avoid an $8 fee.', 'Correct. It includes the amount, the deadline and the consequence.'],
          ['The bill is from a utility company.', 'It may be true, but it does not say what to do.'],
        ], 1)),
        choice('t3', 10, tf('Saying "Do you mean…?" is a polite way to check that you understood something.', true,
          'Correct. It lets the other person confirm or explain, and it shows that you are paying attention.',
          'Not quite. "Do you mean…?" is a standard polite clarification phrase.')),
        written('t4', 25, {
          prompt: 'Write a short conversation (60–110 words) in which Hana starts, continues and ends a conversation with a classmate at a Photography Club event.',
          scenario: 'Write both speakers\' lines. Hana should: (1) open the conversation, (2) ask at least one follow-up question, and (3) end politely. Then add one sentence explaining how Hana could join the club.',
          starter: 'Hana: Hi! Are you new to the club?\nMaria: …',
          minWords: 60,
          checklist: [
            'There is a clear opening (a greeting or an opening question).',
            'Hana asks at least one follow-up question.',
            'There is a polite closing.',
            'I explained how Hana can join the club.',
          ],
          modelAnswer: 'Hana: Hi! Are you new to the Photography Club?\nMaria: Yes, this is my first meeting. I\'m Maria.\nHana: Nice to meet you, Maria. I\'m Hana. What kind of photos do you like to take?\nMaria: Mostly portraits. How about you?\nHana: I like street photography. I just moved here, so I\'m still exploring the city.\nMaria: That sounds fun! There is a photo walk next Saturday.\nHana: I would love to join. Anyway, I have to go to class now. It was great talking with you. See you next week!\nTo join the club, Hana can sign up through the student activities portal and attend the next meeting on Friday at 6 p.m.',
          rubric: {
            criteria: [
              crit('open', 'Opening', 'Starts the conversation naturally.', 20, [
                K.any('open', ['hi', 'hello', 'hey', 'nice to meet', 'are you new'], 'Includes an opening', 'Start with a greeting or "Are you new to…?".'),
              ]),
              crit('continue', 'Keeps it going', 'Follow-up question and response.', 35, [
                K.question('fq', 'Asks at least one question', 'Add a follow-up question such as "What kind of photos do you like to take?".'),
                K.any('react', ['sounds fun', 'nice', 'great', 'cool', 'really', 'interesting', 'love'], 'Reacts to the other person', 'Add a reaction like "That sounds fun!".'),
              ]),
              crit('close', 'Closing and next step', 'Ends politely and explains how to join.', 30, [
                K.any('close', ['see you', 'have to go', 'i should go', 'i need to go', 'nice talking', 'great talking', 'take care', 'have to head', 'talk later'], 'Ends politely', 'End with "I have to go… See you next week!".'),
                K.any('join', ['sign up', 'join', 'portal', 'attend', 'meeting', 'register', 'email'], 'Explains how to join', 'Add how Hana can join: sign up, attend a meeting…'),
              ]),
              crit('len', 'Length', 'Enough development.', 15, [K.words('len', 60, 'Meets the length (60+ words)', 'Add more lines to reach about 60 words.')]),
            ],
          },
        }),
        written('t5', 30, {
          prompt: 'Write 50–100 words explaining what Hana should do about the bill, and write one clarification question for the company.',
          scenario: 'Hana receives this notice: "Your internet service bill of $48.20 is due on Nov 5. Your account shows an unpaid balance from last month. A late fee of $8 may apply. Questions? Call customer service." Hana does not understand why there is an unpaid balance from last month. Explain (1) what the problem is, (2) which information matters, (3) what is unclear, (4) who she should contact, and (5) write her question. Then say what she will do next.',
          starter: 'The problem is that…',
          minWords: 50,
          checklist: [
            'I named the key information (amount and deadline).',
            'I said what is unclear.',
            'I said who Hana should contact.',
            'I wrote one specific question.',
            'I said what Hana will do next.',
          ],
          modelAnswer: 'The problem is that Hana received an internet bill of $48.20 due on November 5, and it shows an unpaid balance from last month. The important information is the amount, the due date, and the possible $8 late fee. It is unclear why there is an unpaid balance, because Hana thought she had paid. She should contact the company\'s customer service. Her question is: "Could you tell me why my account shows an unpaid balance from last month, and what is the total I need to pay by November 5?" Next, she will keep her payment receipt, call customer service, and pay the correct amount before the deadline to avoid the late fee.',
          rubric: {
            criteria: [
              crit('info', 'Key information', 'Identifies the amount, date and fee.', 30, [
                K.any('amount', ['48.20', '$48'], 'Mentions the amount', 'Include the amount due ($48.20).'),
                K.any('date', ['nov 5', 'november 5', '5 nov', 'deadline', 'due date'], 'Mentions the due date', 'Include the due date (November 5).'),
                K.any('fee', ['late fee', '$8', 'fee'], 'Mentions the late fee', 'Mention the possible $8 late fee.'),
              ]),
              crit('unclear', 'Unclear information and contact', 'Says what is unclear and who to contact.', 30, [
                K.any('unclear', ['unclear', 'does not understand', 'doesn\'t understand', 'not sure', 'unpaid balance', 'don\'t know why', 'why'], 'Says what is unclear', 'Explain what Hana does not understand.'),
                K.any('who', ['customer service', 'company', 'provider', 'contact', 'call'], 'Names who to contact', 'Say who Hana should contact.'),
              ]),
              crit('question', 'Question and next step', 'A specific question and a plan.', 40, [
                K.question('q', 'Includes a clarification question', 'Write one specific question, ending with a question mark.'),
                K.any('polite', ['could you', 'would you', 'can you', 'please'], 'Question is polite', 'Use "Could you tell me…?".'),
                K.any('next', ['next', 'will', 'then', 'after that', 'she will'], 'States the next step', 'Say what Hana will do next.'),
                K.words('len', 50, 'Meets the length (50+ words)', 'Add detail to reach about 50 words.'),
              ]),
            ],
          },
        }),
        written('t6', 25, {
          prompt: 'Compare two support options for Hana and write a short request for help (70–130 words).',
          scenario: 'Hana has been in the U.S. for six weeks. She feels tired and lonely, and she misses her family. Choose TWO support options (for example, the counseling center, the international student office, a student club, or an academic advisor). In your answer: (1) explain her difficulty, (2) compare the two options, (3) justify which one fits best, and (4) write a short request to that office.',
          starter: 'Hana is finding it difficult to… The first option is…',
          minWords: 70,
          checklist: [
            'I explained Hana\'s difficulty.',
            'I compared two support options.',
            'I gave a reason for my choice.',
            'My request has a greeting, a clear request and thanks.',
          ],
          modelAnswer: 'Hana feels tired and lonely because she has to speak English all day and she misses her family. One option is the counseling center, where she can talk with a professional about stress and loneliness. Another option is the international student office, which can tell her about events and groups for new students. I think the counseling center fits best because her difficulty is happening every day, and a counselor can help her find strategies. She could also join one cultural event later. Her request: "Dear Counseling Center, I am a first-year international student and I feel lonely and tired. Could I make an appointment to talk with a counselor? Thank you for your help. Hana Kim"',
          rubric: {
            criteria: [
              crit('difficulty', 'Explains the difficulty', 'States what Hana is experiencing.', 20, [
                K.any('diff', ['lonely', 'tired', 'homesick', 'overwhelmed', 'miss', 'adjust', 'difficult'], 'Describes the difficulty', 'Say what Hana feels and why.'),
              ]),
              crit('compare', 'Compares two options', 'Names two options and how they differ.', 35, [
                K.any('opts', ['counseling', 'counselor', 'international student office', 'student organization', 'club', 'advisor', 'group', 'health center'], 'Names two options', 'Name two different support options.', 2),
                K.any('contrast', ['while', 'whereas', 'on the other hand', 'another option', 'the first', 'the second', 'compared', 'however', 'one option'], 'Shows a comparison', 'Use "One option … Another option …" or "while".'),
                K.any('reason', ['because', 'fits', 'best', 'i think', 'i would choose', 'i recommend'], 'Justifies the choice', 'Explain why one option fits best, with "because".'),
              ]),
              crit('request', 'Request for help', 'A polite, specific request.', 45, [
                K.any('greet', ['dear', 'hello', 'hi '], 'Includes a greeting', 'Start the request with "Dear …,".'),
                K.any('ask', ['could i', 'could you', 'would it be possible', 'i would like', 'can i', 'would you'], 'Makes a clear request', 'Use "Could I make an appointment…?".'),
                K.any('thanks', ['thank you', 'thanks', 'grateful', 'appreciate'], 'Says thank you', 'End with "Thank you for your help".'),
                K.words('len', 70, 'Meets the length (70+ words)', 'Add detail to reach about 70 words.'),
              ]),
            ],
          },
        }),
      ],
    },
  },
};
