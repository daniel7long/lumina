import { mc, tf } from '../builder.js';

export default {
  summary: 'Announcements give a lot of information in a short time. Learn to capture the purpose, the key details and any changes or conditions.',
  modules: {
    7: {
      summary: 'Campus announcements.',
      sessions: [{
        t: 'Purpose, time, place and action',
        s: 'The main information in a 40–85-word announcement.',
        md: `
## The format
According to ETS, in **Listen to an Announcement** you hear a short announcement of about **40–85 words**, usually about **academic or campus life**, and answer questions about it.

## Practice script E (read aloud once)
> Attention, students. The campus bookstore will hold its end-of-semester sale this week. All textbooks will be half price from Wednesday through Friday, and sweatshirts will be twenty percent off. Please note that used books must be in good condition to be eligible for buyback. The store will close an hour early on Friday for inventory.

### Questions
1. **What is the main purpose?** → To announce a bookstore sale. *(main idea)*
2. **When are textbooks half price?** → Wednesday through Friday. *(detail)*
3. **What must be true of used books for buyback?** → They must be in good condition. *(detail)*
4. **What is different on Friday?** → The store closes an hour early. *(detail)*

## What to listen for
- **Purpose:** inform, warn, remind, invite, announce a change.
- **Who:** the audience (students, residents, staff, new members).
- **What, when, where:** the event, date and place.
- **Action:** what listeners must do (register, bring, pay, avoid, report).
- **Condition:** *must, only if, unless, until, no later than*.

## Notes for announcements
Use a quick list:
- Bookstore sale this wk
- Textbooks ½ price Wed–Fri; sweatshirts −20%
- Buyback: good condition only
- Fri: close 1 hr early
`,
        q: [
          mc('In script E, what discount applies to sweatshirts?', 'Twenty percent', 'The announcement says sweatshirts will be twenty percent off.', [
            ['Half price', 'Half price applies to textbooks.'],
            ['Ten percent', 'Ten percent is not mentioned.'],
            ['No discount', 'Sweatshirts are discounted.'],
          ]),
          mc('Which signal word in an announcement tells you about a condition?', 'unless', 'Unless introduces a condition.', [
            ['today', 'It is a time word, not a condition.'],
            ['attention', 'It gets listeners’ attention.'],
            ['students', 'It names the audience.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Details and changes.',
      sessions: [{
        t: 'Tracking changes, numbers and conditions',
        s: 'Answer questions about who should do what.',
        md: `
## Changes and corrections
Announcements often **change** something: a date, room, deadline, route or rule. Listen for words such as *instead, rescheduled, moved, canceled, now, effective, starting*.

## Practice script F (read aloud once)
> Good afternoon, residents of Maple Hall. Because of water-line repairs, the water will be shut off on Tuesday from nine in the morning until noon. Showers and sinks will not work during this time. Residents who need water may use the facilities in Pine Hall, which will be open all day. If you have questions, please contact the front desk.

### Questions
1. **Why will the water be shut off?** → Repairs to the water line. *(cause)*
2. **For how long?** → From 9 a.m. until noon (three hours). *(detail)*
3. **What can residents do if they need water?** → Use the facilities in Pine Hall. *(action)*
4. **Who should residents contact with questions?** → The front desk. *(detail)*

## Numbers and times
- Be careful with similar-sounding numbers: **thirteen/thirty**, **fifteen/fifty**.
- Stress helps: *thirTEEN* has stress at the end, while *THIRty* has stress at the start.
- Write numbers as digits in your notes.

## Typical trap options
- **Wrong place:** the option names Maple Hall instead of Pine Hall.
- **Wrong time:** the option reverses morning and afternoon.
- **Not mentioned:** the option adds a rule the announcement did not state.
- **Opposite:** the option says the facilities will be closed.
`,
        q: [
          mc('In script F, which hall’s facilities can residents use during the shut-off?', 'Pine Hall', 'The announcement names Pine Hall.', [
            ['Maple Hall', 'Maple Hall is where the water is shut off.'],
            ['Oak Hall', 'Oak Hall is not mentioned.'],
            ['The front desk building', 'The front desk is for questions.'],
          ]),
          mc('You hear “The workshop starts at fifteen minutes past ten.” Which time is it?', '10:15', 'Fifteen minutes past ten is 10:15.', [
            ['10:50', 'That would be ten fifty.'],
            ['10:05', 'That would be five minutes past ten.'],
            ['9:15', 'That would be fifteen minutes past nine.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Listen to an Announcement',
    tasks: [
      mc('About how long is a Listen to an Announcement item, according to ETS?', 'About 40–85 words', 'Announcements are short.', [
        ['About 500 words', 'This is much longer than an announcement.'],
        ['About 5 words', 'This is much shorter than an announcement.'],
        ['About 1,000 words', 'This is much longer than an announcement.'],
      ]),
      mc('Which is usually the first thing to identify in an announcement?', 'The purpose', 'Purpose organizes the details.', [
        ['The speaker’s hometown', 'This is rarely relevant.'],
        ['The color of the room', 'This is rarely relevant.'],
        ['Every adjective', 'This is not useful.'],
      ]),
      mc('An announcement says, “The meeting has been moved from Room 12 to Room 21.” Where is the meeting now?', 'Room 21', 'The new room is the second one named.', [
        ['Room 12', 'This is the old room.'],
        ['Room 2', 'Room 2 is not mentioned.'],
        ['Room 121', 'Room 121 is not mentioned.'],
      ]),
      mc('“Students must register by Friday unless they have already received a code.” Who does not need to register by Friday?', 'Students who already have a code', 'The word unless marks the exception.', [
        ['All students', 'Only students with a code are exempt.'],
        ['Students without a code', 'They must register.'],
        ['Nobody', 'There is an exception.'],
      ]),
      mc('In script F, how long is the water off?', 'Three hours', 'From nine until noon is three hours.', [
        ['One hour', 'The period is longer than one hour.'],
        ['Six hours', 'The period is not six hours.'],
        ['All day', 'The water is off from 9 until noon only.'],
      ]),
      mc('Which note best captures “The library will close at six instead of eight on Friday”?', 'Library Fri: closes 6 (not 8)', 'It records the change.', [
        ['Library closes at eight', 'This is the usual time, not Friday’s.'],
        ['Library', 'It leaves out the key details.'],
        ['Friday six eight', 'The meaning is unclear.'],
      ]),
      tf('You should write down every word of an announcement.', false, 'Notes should be short and focus on key details, so the statement is false.', 'Short notes with key details work best. The statement is false.'),
    ],
  },
};
