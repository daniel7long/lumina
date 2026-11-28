import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'The academic talk is the longest Listening task, about 100–250 words with four questions. Learn to follow its organization and answer the main question types, then plan your preparation.',
  modules: {
    9: {
      summary: 'Following a short academic talk.',
      sessions: [{
        t: 'Topic, main points and examples',
        s: 'How a short talk is organized.',
        md: `
## The format
According to ETS, in **Listen to an Academic Talk** you hear a talk of about **100–250 words**, for example a short podcast segment, and answer **4 questions**.

## Practice script G (read aloud once)
> Today I want to talk about something called the “sleeper effect” in psychology. Imagine you read an article, and you decide it is not trustworthy, perhaps because it comes from an unreliable source. You reject the message. But researchers have found that weeks later, people sometimes remember the message and forget where it came from. Because the source is gone from memory, the message may seem more believable than before. In other words, the doubt fades faster than the information. That is why advertisers and political campaigns often repeat messages: even if people dismiss the source at first, the message itself can stay in memory.

### Questions
1. **What is the talk mainly about?** → A memory effect in which a message can seem more believable over time after the source is forgotten. *(main idea)*
2. **According to the speaker, why can the message seem more believable later?** → The source is forgotten, but the information is remembered. *(detail)*
3. **Why does the speaker mention advertisers?** → To give a real-world example of using the effect. *(purpose)*
4. **What does the speaker imply about repeating messages?** → It can help the message stay in memory. *(inference)*

## Organization patterns
- **Introduce, explain, example, implication** (script G)
- **Problem and solution**
- **Cause and effect**
- **Compare and contrast**
- **Chronological order**

## Signposts
| Signal | Meaning |
| --- | --- |
| Today I want to talk about… | topic |
| Imagine… / For example… | example |
| In other words… | restatement |
| That is why… | result |
| But / However | contrast |

## Notes for talks
- Topic: sleeper effect
- Reject source → weeks later: remember msg, forget source
- Doubt fades faster than info
- Ads/campaigns repeat msg
`,
        q: [
          mc('In script G, what does the speaker mean by “the doubt fades faster than the information”?', 'People stop doubting the source before they forget the message', 'The doubt disappears sooner than the message.', [
            ['People remember doubt longer than the message', 'This reverses the order.'],
            ['Information is never remembered', 'The speaker says the message can stay in memory.'],
            ['Advertisers stop repeating ads', 'The speaker says they repeat messages.'],
          ]),
          mc('Which phrase marks an example in a talk?', 'Imagine you read an article', 'It introduces a scenario that illustrates the idea.', [
            ['Today I want to talk about', 'This introduces the topic.'],
            ['In other words', 'This restates an idea.'],
            ['That is why', 'This introduces a result.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Question types and test strategy.',
      sessions: [{
        t: 'Answering the questions and preparing',
        s: 'Main idea, detail, purpose, inference and a training routine.',
        md: `
## Question types
ETS does not publish a full list of Listening question types, so use this as a skills map.
| Type | Question looks like | Tip |
| --- | --- | --- |
| Main idea | What is the talk mainly about? | Use the topic sentence and the repeated idea |
| Detail | According to the speaker, why…? | Use your notes |
| Purpose | Why does the speaker mention…? | Decide the function (example, contrast, cause) |
| Inference | What does the speaker imply about…? | Stay close to what was said |
| Attitude | How does the speaker feel about…? | Listen to tone and word choice |

## Test strategy
- **Use the question time well:** read the question and options carefully; the audio does not repeat.
- **Avoid extreme answers** (*always, never, all*) unless the speaker said so.
- **Do not use outside knowledge.** The answer comes from the audio.
- **Eliminate** the options that are not mentioned, reversed or about a different detail.

## Weekly practice routine
| Day | Activity |
| --- | --- |
| 1 | Listen to a 2-minute podcast, write a 15-word summary |
| 2 | Shadowing: repeat a short clip right after the speaker |
| 3 | Dictation: write a 30-second clip, then check |
| 4 | Watch a lecture clip, take notes, answer your own questions |
| 5 | Review mistakes and unknown words |

## On test day
Use the official materials at **ets.org/toefl**, check your headphones and sound before starting, and remember that you must answer at least one Listening question for the section to be scored.
`,
        q: [
          mc('A question asks, “Why does the speaker mention advertisers?” What type is it?', 'Purpose', 'It asks why the speaker includes something.', [
            ['Main idea', 'Main idea asks about the whole talk.'],
            ['Vocabulary only', 'It does not ask about a word’s meaning.'],
            ['Pronunciation', 'It does not concern pronunciation.'],
          ]),
          mc('Which practice builds listening skill by copying a speaker’s words right after hearing them?', 'Shadowing', 'Shadowing means repeating immediately after the speaker.', [
            ['Skimming', 'Skimming is a reading skill.'],
            ['Scanning', 'Scanning is a reading skill.'],
            ['Dictionary lookup', 'This helps vocabulary but is not a listening practice.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Listen to an Academic Talk',
    tasks: [
      mc('How many questions follow each academic talk, according to ETS?', '4', 'ETS lists 4 questions for an academic talk.', [
        ['2', 'Two questions follow a conversation.'],
        ['10', 'This is the number of Build a Sentence items.'],
        ['47', 'This is the total number of Listening items.'],
      ]),
      mc('Which phrase usually introduces a restatement?', 'In other words', 'It restates an earlier idea.', [
        ['For example', 'This introduces an example.'],
        ['However', 'This introduces a contrast.'],
        ['First', 'This marks a sequence.'],
      ]),
      mc('A speaker says, “Some students prefer notes on paper. Others, however, type them.” What is the relationship?', 'Contrast', 'However shows contrast.', [
        ['Cause and effect', 'No cause is stated.'],
        ['Chronological order', 'No time order is given.'],
        ['Definition', 'No term is defined.'],
      ]),
      mc('Which answer should you avoid on an inference question?', 'One that depends on outside knowledge', 'Answers must be supported by the audio.', [
        ['One supported by the speaker’s words', 'Supported options are usually correct.'],
        ['One that paraphrases the talk', 'Paraphrases are usually correct.'],
        ['One that matches your notes', 'This is a good sign.'],
      ]),
      mc('In script G, why do advertisers repeat messages according to the speaker?', 'The message can stay in memory even if the source is dismissed', 'The speaker links repetition to memory.', [
        ['People enjoy hearing ads', 'The speaker does not say this.'],
        ['Sources are always trusted', 'The speaker says the source may be rejected.'],
        ['Ads are cheaper to repeat', 'Cost is not mentioned.'],
      ]),
      mc('Which routine most directly builds the habit of noting key points?', 'Listen to a clip, take notes and write a short summary', 'This practices the same skill used in the test.', [
        ['Reading a dictionary', 'This is not listening practice.'],
        ['Memorizing a script', 'This does not build a skill.'],
        ['Turning off the sound', 'This removes the listening.'],
      ]),
      wr({
        points: 15,
        prompt: 'Write notes and a summary (about 70–110 words) for this original mini-talk, which your friend reads aloud once: “Urban beekeeping is growing in cities. Rooftop hives give bees access to flowers in parks and gardens, and city honey can taste different from country honey. However, beekeepers warn that too many hives in one area can leave bees short of food.” First list your notes, then write a short summary and say one thing you would listen for in the questions.',
        scenario: 'Practice taking notes and summarizing a short talk after hearing it once.',
        starter: 'Notes: ',
        minWords: 60,
        checklist: ['Include the topic: urban beekeeping', 'Include a benefit and a concern', 'Use short notes or symbols', 'Write a one-to-two-sentence summary'],
        modelAnswer: 'Notes: Topic: urban beekeeping, growing. Rooftop hives → bees reach flowers in parks and gardens. City honey tastes different. BUT too many hives → not enough food. Summary: The talk explains that beekeeping in cities is increasing because rooftop hives let bees reach nearby flowers and produce honey with a different taste. However, if there are too many hives in one area, bees may not find enough food. In the questions I would listen for the benefit, the warning and why the speaker uses the word however.',
        rubric: { criteria: [
          crit('topic', 'Topic', 'Names the topic.', 25, [
            K.any('topic', ['beekeeping', 'bees', 'hives', 'honey'], 'You named the topic.', 'Name the topic: urban beekeeping.'),
          ]),
          crit('balance', 'Benefit and concern', 'Includes a benefit and a concern.', 35, [
            K.any('benefit', ['flowers', 'parks', 'gardens', 'rooftop', 'honey', 'taste'], 'You included a benefit.', 'Include a benefit such as access to flowers or different honey.'),
            K.any('concern', ['too many', 'short of food', 'not enough food', 'food', 'however', 'but', 'warn'], 'You included a concern.', 'Include the concern about too many hives and food.'),
          ]),
          crit('summary', 'Summary', 'Writes a summary of the talk.', 25, [
            K.any('sum', ['summary', 'the talk', 'explains', 'says', 'warns'], 'You wrote a summary.', 'Write a short summary with a verb such as explains or warns.'),
          ]),
          crit('length', 'Length', 'Writes at least 60 words.', 15, [
            K.words('len', 60, 'Your notes and summary have enough detail.', 'Add more detail to reach about 70 words.'),
          ]),
        ] },
      }),
    ],
  },
};
