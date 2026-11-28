import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'Finish with inference, author purpose and organization, then pull everything into a test-day plan for the adaptive Reading section.',
  modules: {
    9: {
      summary: 'Inference, purpose and organization.',
      sessions: [{
        t: 'Reading beyond the words',
        s: 'Inference, rhetorical purpose and text organization.',
        md: `
## Inference
An inference question asks what the passage **suggests** or **implies**. The correct answer is supported by the text, but it is not copied from it.

### Original passage
> Urban heat islands are areas where cities are noticeably warmer than the surrounding countryside. Dark pavement and buildings absorb sunlight, and a lack of trees reduces shade and evaporation. Some cities have responded by painting roofs white and planting trees along streets. Early results suggest that these measures lower temperatures on treated blocks by a few degrees.

**Question:** What can be inferred about trees in cities?
**Answer:** They help cool the surrounding air.
- The passage says a lack of trees makes heat worse and that planting trees lowered temperatures. That supports the inference.
- It does **not** say trees solve every heat problem, so such an option would go too far.

## Author purpose questions
A purpose question asks **why** the author mentions something. Common purposes: to **give an example**, **contrast** two ideas, **define** a term, **explain a cause**, or **introduce a problem**. In the passage above, the white roofs and street trees are mentioned as **responses to the problem**.

## Organization
Recognizing patterns helps you predict what comes next:
- **Problem and solution** (the heat island passage)
- **Cause and effect**
- **Compare and contrast**
- **Chronological order**
- **Claim and evidence**

Look at the first and last sentences of the passage. They often reveal the pattern.

## Wrong-answer patterns
- **Extreme words:** *always, never, completely, only*.
- **Reverse relationship:** the option swaps cause and effect.
- **Outside knowledge:** true in life but not in the passage.
`,
        q: [
          mc('Based on the heat island passage, what can be inferred about white roofs?', 'They may help lower temperatures', 'The passage lists them among measures that lower temperatures.', [
            ['They always remove the heat island completely', 'The passage reports a few degrees of cooling, so this goes too far.'],
            ['They increase the amount of sunlight absorbed', 'White roofs are not described as absorbing more sunlight.'],
            ['They were first used in the countryside', 'The passage does not say where they were first used.'],
          ]),
          mc('Why does the author mention painting roofs white and planting trees?', 'To give examples of responses to the problem', 'They are cities’ responses to urban heat.', [
            ['To define the term urban heat island', 'The first sentence defines it.'],
            ['To argue that cities should be larger', 'The passage makes no such argument.'],
            ['To compare two kinds of pavement', 'No pavement comparison is made.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Putting it together.',
      sessions: [{
        t: 'A test-day plan for the adaptive Reading section',
        s: 'Eliminate, manage time and build a routine.',
        md: `
## Eliminate distractors
For every multiple-choice item:
1. **Find evidence** in the text.
2. **Eliminate** options that are unsupported, contradicted, too extreme or about a different detail.
3. **Choose** the best remaining option. Do not change an answer without a reason.

## Time and attention
- The section includes **50 items** in about **30 minutes**, so you have roughly half a minute per item on average. Short tasks need quick, steady work.
- Complete the Words items are quick to answer if you know the vocabulary.
- If an item is difficult, give your best answer and keep going.
- Remember that the **first stage (router)** affects the difficulty of the second, so start the section focused.

## Daily practice routine
| Skill | Practice idea | Time |
| --- | --- | --- |
| Vocabulary | Learn 10 academic words and write one sentence for each | 15 min |
| Complete the Words | Cover half of every second word in a short paragraph and restore it | 10 min |
| Daily life | Read an email, menu or notice and write the purpose and two details | 10 min |
| Academic passage | Read a 200-word text and write the main idea in one sentence | 15 min |

## Reading widely
The best long-term preparation is regular reading in **history, science and economics**: news explainers, encyclopedia articles and textbook summaries. Make a note of words that appear often.

## On test day
- Use the official ETS preparation materials at **ets.org/toefl** for current rules.
- Check your equipment and the testing environment before the Home Edition.
- Remember that you must complete at least one Reading question for the section to be scored.
`,
        q: [
          mc('A student is unsure about a difficult item early in the section. What is the best action?', 'Choose the best answer, then move on', 'Time is limited, and every item counts.', [
            ['Spend several minutes on it', 'This takes time from other items.'],
            ['Leave it blank', 'A blank earns no credit.'],
            ['Quit the section', 'You must complete at least one question for the section to be scored, and quitting wastes the chance to score.'],
          ]),
          mc('Which is the best long-term way to improve reading speed and vocabulary?', 'Read regularly about history, science and economics', 'Wide reading builds both skills.', [
            ['Read only one type of text', 'Variety better prepares you.'],
            ['Avoid unfamiliar words', 'You grow vocabulary by meeting new words.'],
            ['Memorize one passage', 'This does not build general skills.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Read an Academic Passage II and Test Strategy',
    tasks: [
      mc('An inference answer should be…', 'Supported by the passage', 'Inferences are conclusions based on the text.', [
        ['Based on your own opinion', 'Opinion is not evidence.'],
        ['Copied word for word', 'An inference is usually not stated directly.'],
        ['Unrelated to the passage', 'It must be supported by the text.'],
      ]),
      mc('A passage first describes a problem and then lists several solutions. What is its organization?', 'Problem and solution', 'The text states a problem and then responses.', [
        ['Chronological order', 'The passage is organized by problem and response, not time.'],
        ['Compare and contrast', 'It does not compare two things.'],
        ['Definition only', 'It does more than define a term.'],
      ]),
      mc('An option says that a policy “always” works. In most cases, what should you suspect?', 'It is too extreme', 'Words such as always are often too strong.', [
        ['It is probably correct', 'Extreme words often signal wrong answers.'],
        ['It is a main idea', 'It may not match the passage.'],
        ['It is a vocabulary item', 'It is not about vocabulary.'],
      ]),
      mc('About how much time per item do you have in the Reading section on average (50 items, about 30 minutes)?', 'About 35 seconds', 'Thirty minutes is 1,800 seconds, and 1,800 divided by 50 is 36 seconds.', [
        ['About 5 minutes', 'This is far too long for the section.'],
        ['About 2 minutes', 'This would be 100 minutes in total.'],
        ['About 10 seconds', 'This would be 500 seconds, less than 9 minutes in total.'],
      ]),
      mc('Which sentence from a passage gives a cause?', 'Because the harbor froze, ships could not leave.', 'The word because introduces the cause.', [
        ['The harbor was built in 1850.', 'This gives a fact, not a cause.'],
        ['Ships were large.', 'This describes ships without a cause.'],
        ['Many towns have harbors.', 'This is a general statement.'],
      ]),
      mc('Which practice best prepares you for Complete the Words?', 'Restoring missing letters in short academic paragraphs', 'It matches the real task.', [
        ['Listening to podcasts only', 'That builds listening skills.'],
        ['Memorizing a single paragraph', 'This does not build a skill.'],
        ['Writing emails only', 'That is Writing practice.'],
      ]),
      wr({
        points: 15,
        prompt: 'Write a short study plan (about 90–130 words) for one week of TOEFL Reading practice. Include the three task types, one specific daily activity for each, and how you will check your progress.',
        scenario: 'You have one week before your TOEFL iBT and want to practice Reading every day.',
        starter: 'This week I will practice the three Reading task types: ',
        minWords: 80,
        checklist: ['Mention Complete the Words, Read in Daily Life and Read an Academic Passage', 'Give a specific activity for each task type', 'Say how you will check progress'],
        modelAnswer: 'This week I will practice the three Reading task types every day. For Complete the Words, I will restore the missing letters in two short academic paragraphs and check my spelling. For Read in Daily Life, I will read one email, notice or menu and write its purpose and two key details. For Read an Academic Passage, I will read a 200-word text about science or history, write the main idea in one sentence and answer five questions I write myself. Each evening I will count my correct answers and list the words I missed. At the end of the week I will compare my scores from Monday and Sunday and plan extra practice for my weakest task.',
        rubric: { criteria: [
          crit('tasks', 'Three task types', 'Names all three Reading task types.', 40, [
            K.any('tasks-cw', ['complete the words'], 'You named Complete the Words.', 'Name Complete the Words.'),
            K.any('tasks-dl', ['daily life'], 'You named Read in Daily Life.', 'Name Read in Daily Life.'),
            K.any('tasks-ap', ['academic passage'], 'You named Read an Academic Passage.', 'Name Read an Academic Passage.'),
          ]),
          crit('activities', 'Specific activities', 'Gives concrete daily activities.', 30, [
            K.any('act', ['read', 'write', 'restore', 'answer', 'underline', 'list', 'check'], 'You described concrete actions.', 'Describe what you will actually do, such as read, write or restore.'),
          ]),
          crit('progress', 'Progress check', 'Says how progress will be checked.', 20, [
            K.any('prog', ['progress', 'score', 'compare', 'count', 'review', 'track', 'check'], 'You explained how you will check progress.', 'Explain how you will check or track your progress.'),
          ]),
          crit('length', 'Length', 'Writes at least 80 words.', 10, [
            K.words('len', 80, 'Your plan has enough detail.', 'Add more detail to reach about 90 words.'),
          ]),
        ] },
      }),
    ],
  },
};
