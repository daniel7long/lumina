import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'Turn close reading into a clear written argument: a defensible thesis, well-chosen evidence and commentary that explains how the text creates meaning.',
  modules: {
    15: {
      summary: 'Thesis, evidence and commentary.',
      sessions: [{
        t: 'Building a claim and supporting it',
        s: 'What a thesis does, how to choose evidence and how to explain it.',
        md: `
## The three literary argument tasks
Writing about literature usually takes one of three forms: **analysis of a poem**, **analysis of a prose passage** and a **literary argument** about a whole work (such as how a character, setting or symbol contributes to the meaning of a novel or play). All three need a **claim**, **evidence** and **commentary**.

## A defensible thesis
A strong thesis:
- makes a **claim** that someone could reasonably dispute;
- says **how** the text creates meaning (through choices of detail, diction, structure or figures);
- is **specific** to the text.

| Weak | Why | Stronger |
| --- | --- | --- |
| The author uses setting. | States a fact; no claim | By filling the corridor with smells and sounds of neglect, the writer creates a weary mood that foreshadows the character’s isolation. |
| The poem is about death. | Names a topic | Dickinson’s polite personification of Death turns an ending into a calm journey, which shows the speaker’s acceptance. |
| Hamlet is a good character. | An opinion without textual focus | Hamlet’s soliloquies expose a mind caught between duty and doubt, and the contrast with Laertes makes his delay a moral problem rather than simple weakness. |

## Evidence and commentary
- **Evidence:** a short, precise quotation or detail. Choose evidence that is **specific**, and **integrate** it into your own sentence.
- **Commentary:** explains **how** the evidence supports the claim: the connotation of a word, the effect of a shift or the pattern of an image. Commentary is **most** of a body paragraph.

> Evidence tells readers what the text says. Commentary tells them why it matters.

A useful body-paragraph pattern is: **claim, evidence, commentary, link back to the thesis.**
`,
        q: [
          mc('Which sentence is the best thesis?', 'By filling the corridor with details of neglect, the writer creates a weary mood that reflects the character’s isolation.', 'It makes a claim about how the text creates meaning.', [
            ['The passage describes a corridor.', 'This states what is obvious and makes no claim.'],
            ['The corridor is an interesting setting.', 'This is an opinion that lacks a claim about how meaning is built.'],
            ['Settings are important in literature.', 'This is too general and not specific to the passage.'],
          ]),
          mc('What is the main job of commentary?', 'To explain how the evidence supports the claim', 'Commentary links evidence to the argument.', [
            ['To retell the plot', 'That is summary.'],
            ['To repeat the quotation in other words', 'Paraphrase alone does not explain significance.'],
            ['To list literary terms', 'Terms help only when they serve an argument.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Drafting, sophistication and revision.',
      sessions: [{
        t: 'From a draft to a sophisticated argument',
        s: 'Avoiding summary, choosing specific verbs and showing complexity.',
        md: `
## Avoid plot summary
Summary retells *what happens*. Analysis explains *how and why the writer’s choices create meaning*.

| Summary | Analysis |
| --- | --- |
| Dolores keeps her receipts in a biscuit tin. | By having Dolores fold every receipt into a biscuit tin, the writer shows a person who expects to be doubted and keeps proof ready. |

## Use specific verbs
Replace weak verbs such as “shows,” “says” and “uses” with verbs that name the effect: **suggests, reveals, emphasizes, contrasts, undercuts, heightens, complicates, establishes, foreshadows**.

## Integrate quotations
Weak: *The speaker says “I wandered lonely as a cloud.”*
Stronger: *By comparing himself to a cloud that “floats on high,” the speaker presents himself as detached from the world below.*

## Sophistication: show complexity
A sophisticated argument does not simply find one meaning. It may:
- explain a **tension** or **contradiction** within the text (a speaker who mocks and loves at once);
- show how a **shift** changes the meaning of earlier details;
- consider how the **context** (time, place and genre) shapes meaning;
- keep a **consistent line of reasoning** where each paragraph advances the thesis.

## Revision checklist
1. Does the thesis make a claim about *how* the text creates meaning?
2. Does each paragraph begin with a claim, not a summary?
3. Is each quotation short, integrated and followed by commentary?
4. Are verbs specific?
5. Does the conclusion add an idea rather than repeat the thesis?
`,
        q: [
          mc('Which sentence is analysis rather than summary?', 'The short, clipped sentences create an urgent tone that mirrors the character’s panic.', 'It explains how the writer’s choices create an effect.', [
            ['The character runs down the street and hides in a shed.', 'This retells events.'],
            ['Then the character calls his sister.', 'This is another event.'],
            ['The story is about a man who is afraid.', 'This summarizes the subject.'],
          ]),
          mc('Which verb choice makes a sentence stronger than “The author shows”?', 'The author undercuts the narrator’s confidence', 'The verb names a specific effect.', [
            ['The author says', 'It is as general as “shows.”'],
            ['The author uses', 'It does not name an effect.'],
            ['The author talks about', 'It is general and informal.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Writing a Literary Argument',
    tasks: [
      mc('Which statement describes a defensible thesis?', 'It makes a claim that could be disputed and says how the text creates meaning', 'It gives the essay direction and room to argue.', [
        ['It states a fact on which everyone agrees', 'A fact leaves nothing to argue.'],
        ['It summarizes the plot', 'Plot summary is not a claim.'],
        ['It reports the author’s birth year', 'Biography alone does not make an interpretive claim.'],
      ]),
      mc('Which sentence integrates a quotation best?', 'By calling summer a “lease,” the speaker suggests that beauty is borrowed and brief.', 'The quotation is part of the writer’s own sentence, followed by an interpretation.', [
        ['The speaker says: “summer’s lease hath all too short a date.”', 'The quotation is not explained.'],
        ['“summer’s lease hath all too short a date.”', 'A quotation alone is not a sentence of analysis.'],
        ['Summer is short.', 'There is no evidence.'],
      ]),
      mc('A strong body paragraph usually contains', 'a claim, specific evidence and commentary explaining the evidence', 'It argues rather than retells.', [
        ['only quotations', 'Without commentary, the paragraph does not argue.'],
        ['a retelling of the entire plot', 'This is summary.'],
        ['a list of literary terms', 'Terms alone are not an argument.'],
      ]),
      mc('Which revision adds sophistication to a thesis?', 'The speaker’s mocking tone toward conventional praise gives way to a sincere affirmation, which complicates the poem’s apparent rejection of love poetry.', 'It identifies a tension and a shift.', [
        ['The poem has a mocking tone.', 'It identifies one feature and no complexity.'],
        ['The poem is good.', 'This is an opinion with no evidence.'],
        ['The poem is a sonnet.', 'This is a fact about form with no argument.'],
      ]),
      tf('Commentary should be longer and more important than the quotations in a body paragraph.', true, 'Correct. The writer’s explanation carries the argument.', 'Evidence supports an argument, but commentary does the explaining, so the statement is true.'),
      wr({
        points: 20,
        prompt: 'Write a thesis statement of one or two sentences about how the writer uses setting in this original passage: “The corridor smelled of boiled cabbage and floor wax, and the single bulb at its end hummed as if it were thinking of going out.”',
        scenario: 'Your claim should say what mood or idea the details create and how the writer creates it.',
        starter: 'By describing the corridor with …',
        minWords: 20,
        checklist: [
          'I made a claim, not just a description.',
          'I named specific details (such as the smell or the bulb).',
          'I named an effect, such as a mood or an idea.',
          'I used a specific verb such as creates, suggests or reveals.',
        ],
        modelAnswer: 'By filling the corridor with the smell of boiled cabbage and the humming of a failing bulb, the writer creates a weary, neglected mood, and the personified bulb that seems to be “thinking of going out” suggests a place and perhaps a person near the end of their energy.',
        rubric: {
          criteria: [
            crit('claim', 'Makes a claim', 'States how the writer creates meaning rather than only describing.', 40, [
              K.any('verb', ['creates', 'suggests', 'reveals', 'establishes', 'emphasizes', 'conveys', 'evokes', 'builds'], 'Uses a specific verb', 'Use a verb such as creates, suggests or reveals.'),
              K.any('effect', ['mood', 'atmosphere', 'tone', 'feeling', 'sense of', 'isolation', 'loneliness', 'decline', 'neglect', 'weary'], 'Names an effect', 'Say what mood or idea the details create.'),
            ]),
            crit('evidence', 'Names specific details', 'Refers to details from the passage.', 40, [
              K.any('details', ['cabbage', 'wax', 'bulb', 'hum', 'hummed', 'smell', 'corridor', 'light'], 'Refers to a detail', 'Mention a detail such as the smell or the bulb.'),
              K.any('how', ['personif', 'sensory', 'image', 'imagery', 'detail', 'details', 'diction', 'by '], 'Says how the writer does it', 'Say how: through sensory details, imagery or personification.'),
            ]),
            crit('form', 'Is a complete thesis', 'Meets the length.', 20, [
              K.words('len', 20, 'Meets the length (20+ words)', 'Write at least one full sentence of about 20 words.'),
            ]),
          ],
        },
      }),
      wr({
        points: 20,
        prompt: 'In 50–100 words, write commentary on this detail: “Dolores kept the receipts from every repair she had ever paid for, folded into squares in a biscuit tin, though no one had asked to see them in thirty years.” Explain what the detail suggests about her and why.',
        scenario: 'Write as part of a body paragraph. Do not retell; explain the effect of the detail.',
        starter: 'The detail that Dolores keeps every receipt suggests …',
        minWords: 50,
        checklist: [
          'I referred to the receipts, the biscuit tin or the thirty years.',
          'I made an inference about Dolores.',
          'I explained why the detail supports my inference.',
          'I used specific verbs rather than “shows” or “says.”',
        ],
        modelAnswer: 'The detail that Dolores keeps every receipt suggests that she expects to be doubted and wants proof ready. Folding each receipt into a square and storing it in a biscuit tin shows careful, almost ritual care, while the phrase “thirty years” emphasizes how long she has prepared for a challenge that never comes. Because no one has asked to see the receipts, the habit reveals more about her anxiety than about any actual accusation, which hints at an earlier experience of being distrusted.',
        rubric: {
          criteria: [
            crit('evidence', 'Uses the detail', 'Refers to the text.', 30, [
              K.any('text', ['receipt', 'receipts', 'tin', 'biscuit', 'thirty', 'folded', 'squares'], 'Refers to a detail', 'Mention the receipts, the tin or the thirty years.'),
            ]),
            crit('inference', 'Makes an inference', 'Says what the detail suggests about Dolores.', 40, [
              K.any('infer', ['suggests', 'reveals', 'shows', 'implies', 'hints', 'indicates', 'emphasizes'], 'Uses a verb of inference', 'Use a verb such as suggests or reveals.'),
              K.any('trait', ['doubt', 'distrust', 'anxious', 'anxiety', 'cautious', 'careful', 'defend', 'proof', 'prepared', 'worry', 'fear', 'control'], 'Names a trait or feeling', 'Name a trait such as caution, anxiety or distrust.'),
            ]),
            crit('why', 'Explains why', 'Connects the detail to the inference.', 30, [
              K.any('because', ['because', 'since', 'which', 'so that', 'as a result', 'therefore', 'suggests that'], 'Explains the connection', 'Use a word such as because or which to explain.'),
              K.words('len', 50, 'Meets the length (50+ words)', 'Add more explanation to reach about 50 words.'),
            ]),
          ],
        },
      }),
    ],
  },
};
