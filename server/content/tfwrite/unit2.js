import { mc, tf } from '../builder.js';

export default {
  summary: 'Build a Sentence asks you to put scrambled words and phrases into a correct reply. Learn to read the context and apply English word order patterns quickly.',
  modules: {
    3: {
      summary: 'How the task works.',
      sessions: [{
        t: 'Reading the context and rebuilding the reply',
        s: 'Format and a method for every item.',
        md: `
## The format
According to ETS, **Build a Sentence** has **10 items** and is **machine-scored**. Each item gives you one **intact sentence** and then a **reply** whose words or phrases are scrambled. You put the pieces in the correct order to make a grammatical, sensible reply.

### Original example
> **Intact sentence:** “Where did you put the lab report?”
> **Pieces:** *it / on / I / left / your desk*
> **Correct reply:** *I left it on your desk.*

## Method
1. **Read the intact sentence.** What is being asked or said? Note the topic, tense and person.
2. **Find the subject and verb** of the reply.
3. **Place the verb phrase and objects** in a natural order.
4. **Add place and time phrases** at the end (or at the start if the pieces show it).
5. **Read the whole reply** to check meaning and grammar.

## Clues in the pieces
- A **capitalized word** often begins the sentence (but names are capitalized too).
- **Punctuation** attached to a piece (a period or a question mark) shows the end.
- **Verb forms** show tense: *had left*, *is going*, *will be*.
- **Prepositions** start phrases: *on your desk*, *in the library*, *by Friday*.

## Match the context
If the question is in the past (*Where did you put…*), the reply should usually be in the past. If it is a yes/no question, the reply may begin with *Yes,* or *No,* followed by a clause.

### Second example
> **Intact sentence:** “Did the professor mention the due date?”
> **Pieces:** *she / it / did not / mention / , / but / I / will / email her*
> **Possible reply:** *She did not mention it, but I will email her.*
`,
        q: [
          mc('Which reply can be built from: “the library / is / closed / today”?', 'The library is closed today.', 'It follows subject, verb, complement, time.', [
            ['Is the library closed today.', 'A statement should not start with the verb.'],
            ['The library closed is today.', 'The verb order is incorrect.'],
            ['Today closed the library is.', 'The word order is not English.'],
          ]),
          mc('What is the best first step in a Build a Sentence item?', 'Read the intact sentence for context', 'It tells you the tense, topic and function.', [
            ['Put the longest piece first', 'Length does not decide order.'],
            ['Ignore the intact sentence', 'The context is your main clue.'],
            ['Place punctuation at the beginning', 'End punctuation goes at the end.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Word order patterns.',
      sessions: [{
        t: 'Statements, negatives, questions and embedded questions',
        s: 'The patterns that scrambled items test most often.',
        md: `
This module teaches word order patterns that are common in English. ETS does not publish the exact grammar points in each item, so use this as general preparation.

## 1. Statements
**Subject + verb + object + place + time**
- *The committee approved the plan on Monday.*

## 2. Negatives
Use **do/does/did + not + base verb**, or **be/have/modal + not**:
- *She does not agree.*
- *They have not finished.*
- *We cannot attend.*

## 3. Questions
**Auxiliary + subject + base verb**
- *Did you submit the form?*
- *Where will the meeting be held?*
Question words (*who, what, where, when, why, how*) come first.

## 4. Embedded (indirect) questions
Inside a statement or polite question, use **statement order**, with no *do/does/did*:
- Direct: *Where is the library?*
- Embedded: *Could you tell me where the library is?* (not *where is the library*)
- Direct: *What did he say?*
- Embedded: *I wonder what he said.* (not *what did he say*)

## 5. Relative clauses
**Noun + who/which/that + verb**
- *The student who wrote the essay won a prize.*
- *The book that I borrowed is overdue.*

## 6. Passive voice
**be + past participle (+ by agent)**
- *The report was written by the committee.*
- *The results will be announced on Friday.*

## 7. Adverbs and particles
- Frequency adverbs go before the main verb and after *be*: *She **always** checks. He is **often** late.*
- Phrasal verbs: *turn in the paper*, or *turn the paper in*. With a pronoun use *turn it in* (not *turn in it*).

## 8. Comparatives and conditionals
- *This route is shorter than that one.*
- *If it rains, we will stay inside.*
`,
        q: [
          mc('Which sentence has correct embedded-question word order?', 'Can you tell me where the lab is?', 'An embedded question uses statement order.', [
            ['Can you tell me where is the lab?', 'This keeps question word order.'],
            ['Can you tell me where does the lab is?', 'It adds an unnecessary does.'],
            ['Can you tell me is the lab where?', 'The order is not grammatical.'],
          ]),
          mc('Which sentence places the phrasal verb with a pronoun correctly?', 'Please turn it in by Friday.', 'With a pronoun object, the pronoun goes between the verb and particle.', [
            ['Please turn in it by Friday.', 'A pronoun object cannot follow the particle.'],
            ['Please it turn in by Friday.', 'The pronoun is in the wrong position.'],
            ['Please in turn it by Friday.', 'The particle is in the wrong position.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Build a Sentence',
    tasks: [
      mc('Build a reply from: “I / left / it / on / your desk” (intact sentence: “Where did you put the lab report?”).', 'I left it on your desk.', 'This follows subject, verb, object and place.', [
        ['Left I it on your desk.', 'The subject should come first.'],
        ['I it left on your desk.', 'The object should follow the verb.'],
        ['On I left it your desk.', 'The preposition and noun must stay together.'],
      ]),
      mc('Build a reply from: “has / not / the report / been / finished”.', 'The report has not been finished.', 'It uses subject, has, not, been and the participle.', [
        ['The report not has been finished.', 'Not should come after has.'],
        ['The report has been not finished.', 'Not should come after has.'],
        ['Has not the report been finished.', 'A statement should not start with the verb.'],
      ]),
      mc('Which is a correct question?', 'When will the results be announced?', 'The question word, auxiliary, subject, then the verb.', [
        ['When the results will be announced?', 'The auxiliary must come before the subject.'],
        ['When will be the results announced?', 'The subject should come before be.'],
        ['When the results be announced will?', 'The word order is not grammatical.'],
      ]),
      mc('Which sentence uses an embedded question correctly?', 'I do not know what she said.', 'It uses statement order after know.', [
        ['I do not know what did she say.', 'It keeps question word order.'],
        ['I do not know what she did say.', 'It adds an unnecessary did.'],
        ['I do not know she what said.', 'The word order is not grammatical.'],
      ]),
      mc('Which sentence has the frequency adverb in the correct place?', 'She always arrives early.', 'Frequency adverbs go before the main verb.', [
        ['She arrives always early.', 'The adverb is in an unnatural position.'],
        ['Always she arrives early.', 'This is not a standard word order for this sentence.'],
        ['She arrives early always.', 'This is not a natural order.'],
      ]),
      mc('Which sentence is a correct passive?', 'The results will be announced on Friday.', 'It uses will be plus the past participle.', [
        ['The results will announce on Friday.', 'The passive needs be plus a participle.'],
        ['The results are announce on Friday.', 'The participle should be announced.'],
        ['The results will be announcing on Friday.', 'A passive needs a past participle.'],
      ]),
      tf('In an embedded question, you should use do/does/did before the subject.', false, 'Embedded questions use statement word order, so the statement is false.', 'Embedded questions use statement order. The statement is false.'),
    ],
  },
};
