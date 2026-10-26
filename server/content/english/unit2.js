import { mcq, tf, reading, video, session, lesson, written, choice, K, crit } from '../helpers.js';

const P = 'eng:u2';

export default {
  id: P,
  title: 'Unit 2 · Navigating Academia',
  summary: 'Understand the hidden rules of U.S. classrooms: take useful notes, write polite academic emails, read scholarly texts and synthesize sources in your own words.',
  objectives: [
    'Analyze lectures and explanations of university procedures.',
    'Construct polite requests and responses for university and everyday interactions.',
    'Analyze scholarly texts and decode unfamiliar academic terminology.',
    'Synthesize sources in writing without copying.',
  ],
  lessons: [
    /* ───────────── Lesson 1 ───────────── */
    lesson(`${P}:l1`, 'Lesson 1 · Active Note-Taking and Strategic Annotation', 'Separate important content from announcements and build your own note system.',
      ['Identify discourse markers that signal administrative information versus core content.', 'Apply at least two note-taking frameworks and explain when each helps.', 'Create your own annotation key.'],
      [
        session(`${P}:l1:s1`, 'Why U.S. lectures feel different', 'Tangents, announcements and class participation.', {
          reading: reading('The U.S. lecture: what is really happening', 6, `
## Lectures are conversations with extra information

In many U.S. classes the professor does more than present facts. In the same hour you may hear:

- **Core content** — ideas, theories, examples and definitions you must learn
- **Tangents** — personal stories or side topics that explain an idea but are not the main point
- **Administrative information** — changes to deadlines, exam dates, office hours, reading assignments

### Why this is difficult
1. You listen in English *and* write at the same time.
2. Important announcements are often short and quiet, e.g. *"By the way, the quiz is moved to Thursday."*
3. Professors may encourage questions and discussion, so the lecture does not always follow a straight line.

### Strategies
- Listen for **signals** (you will study them in the next session).
- Write **key words**, not full sentences.
- Keep a separate **"Action items"** box for dates and tasks.
- Review your notes within 24 hours and fill in gaps.

Remember: it is normal to miss some details. Good notes are *useful*, not *perfect*.
`),
          quiz: [
            mcq('Which of these is administrative information?', [
              ['"A phoneme is the smallest unit of sound."', 'This is core content: a definition you should learn.'],
              ['"Next week\'s quiz is moved from Tuesday to Thursday."', 'Correct. It tells you about a change to the course schedule and is something you must act on.'],
              ['"When I lived in Boston, I noticed an interesting accent."', 'This is a personal story (a tangent) that may illustrate a point.'],
            ], 1),
            tf('Good notes try to capture every word the professor says.', false,
              'Not quite. Writing every word is impossible and makes it harder to listen. Key words and ideas are more useful.',
              'Correct. Good notes record key ideas and action items, not every word.'),
          ],
        }),
        session(`${P}:l1:s2`, 'Discourse markers: important or not?', 'Listen for the phrases that tell you what to write down.', {
          reading: reading('Signals professors use', 7, `
## Phrases that tell you what matters

Professors usually give signals before important information. Learn to hear them.

### Signals for core content (write it down)
- *The key takeaway here is…*
- *What you need to remember is…*
- *This will be on the exam.*
- *There are three main reasons…*
- *In other words…* (a restatement — often a definition)

### Signals for administrative information (put it in the Action box)
- *Make sure you check Canvas for…*
- *Before next class, please read…*
- *The deadline has changed to…*
- *My office hours will be…*
- *Don't forget to submit…*

### Signals for tangents (optional)
- *This won't be on the test, but…*
- *Just as an aside…*
- *Off topic for a second…*

> **Careful:** "This won't be on the test, but…" means the next piece is *not* required for the exam. It may still help you understand the idea.

### Practice
Next time you listen to a lecture, put a **star** next to any sentence beginning with a content signal and a **box** around any administrative signal.
`),
          quiz: [
            mcq('The professor says: "Make sure you check Canvas for the revised reading list." What kind of information is this?', [
              ['Core content', 'It is not an idea or theory from the course topic.'],
              ['Administrative information', 'Correct. The signal "Make sure you check…" introduces a task you must do and belongs in your Action box.'],
              ['A tangent', 'Tangents are side stories. This is a task.'],
            ], 1),
            mcq('"The key takeaway here is that context changes meaning." What should you do?', [
              ['Ignore it', 'Phrases like "key takeaway" signal very important content.'],
              ['Write it down as a main idea', 'Correct. "The key takeaway" is a content signal that points to what the professor wants you to remember.'],
              ['Put it in the Action box', 'There is no task here, so it is not an action item.'],
            ], 1),
          ],
        }),
        session(`${P}:l1:s3`, 'Interactive lecture', 'Watch, take notes and find the action items.', {
          video: video('Simulated lecture: Politeness in Language (excerpt)', 8, `
**Professor:** Good afternoon, everyone. Let's get started. Before we begin, a quick reminder: the midterm has moved from October 14 to October 16. Please check Canvas for the updated syllabus.

Today's topic is **politeness in language**. The key takeaway is that politeness is not only about "please" and "thank you." It is about how speakers protect each other's *face* — their public self-image.

There are two kinds of face. **Positive face** is the wish to be liked and approved of. **Negative face** is the wish not to be imposed on. When I say, "Could you possibly close the window?" instead of "Close the window," I reduce the imposition on your negative face.

This won't be on the exam, but I once saw a sign in a café that said, "Kindly refrain from loud conversation." Some people found it too formal and slightly cold. Context really matters.

Back to the main idea. In other words: the more serious the request, the more softening language speakers tend to use. Remember that for the exam.

Last thing: my office hours this week are on Wednesday, 2 to 4 p.m., not Tuesday. And please read Chapter 5 before Thursday's class.

Okay, that's it for today. See you on Thursday!

---
**How to use this video**
1. Watch once and take notes as if you were in class.
2. Write 3–4 sentences about what you think was important.
3. Read the *Note-taking frameworks* session, then watch again and compare.
`, 'A short lecture that mixes course content with announcements and a tangent.'),
          quiz: [
            mcq('In the lecture, which item is an action item?', [
              ['Positive face is the wish to be liked.', 'This is core content.'],
              ['Read Chapter 5 before Thursday\'s class.', 'Correct. It is a task with a deadline, so it belongs in the Action box.'],
              ['The sign in the café.', 'This was a tangent used to illustrate an idea.'],
            ], 1),
            mcq('What changed about the midterm?', [
              ['It moved from October 14 to October 16.', 'Correct. The professor announced this at the start. Always check the revised syllabus.'],
              ['It was cancelled.', 'The professor did not say it was cancelled.'],
              ['It is now an essay.', 'No format change was mentioned.'],
            ], 0),
          ],
        }),
        session(`${P}:l1:s4`, 'Note-taking frameworks and your annotation key', 'Cornell, outline and concept maps.', {
          reading: reading('Frameworks you can use', 9, `
## Three popular frameworks

| Framework | How it works | Best for |
| --- | --- | --- |
| **Cornell** | Page split into notes (right), cues/questions (left) and a summary (bottom) | Lectures with many definitions; exam review |
| **Outline** | Main ideas with indented sub-points | Well-organized lectures |
| **Concept map** | Ideas in circles connected by arrows | Relationships, processes, cause and effect |

### Build your own annotation key
An **annotation key** (legend) is a set of symbols that you use throughout your notes. Example:

| Symbol | Meaning |
| --- | --- |
| ★ | Important / likely on exam |
| ☐ | Action item (deadline, task) |
| ? | I don't understand — ask or look up |
| → | Leads to / causes |
| = | Means the same as / definition |
| ~ | Example |

### Your "Action items" box
At the bottom or side of every page, draw a box and list every date, task or change. Review it at the end of class.

### After the lecture
1. Compare your notes with a classmate's.
2. Highlight gaps and write questions.
3. Write a 3-sentence summary in your own words.

You can share your personal key and templates with other learners in the course community and get feedback on how clear it is.
`),
          quiz: [
            mcq('Which framework is the best choice for showing cause-and-effect relationships?', [
              ['Cornell notes', 'Cornell is excellent for definitions and review, but does not show relationships visually.'],
              ['A concept map', 'Correct. Arrows between ideas show relationships and causes clearly.'],
              ['Copying the slides word for word', 'This is not a framework and does not help you process the ideas.'],
            ], 1),
            tf('An annotation key should be used consistently so you can read your notes later.', true,
              'Correct. Consistent symbols make your notes fast to read and easy to review.',
              'Not quite. A key helps only if you use the same symbols every time.'),
          ],
        }),
      ]),

    /* ───────────── Lesson 2 ───────────── */
    lesson(`${P}:l2`, 'Lesson 2 · Academic Emailing and Making Requests', 'Write respectful, clear emails to professors and staff.',
      ['Recognize formal and informal register in emails.', 'Use softening phrases to make polite requests.', 'Draft, check and revise an academic email.'],
      [
        session(`${P}:l2:s1`, 'Register: how formal should I be?', 'Compare a good and a poor email.', {
          reading: reading('Writing to professors: formal register', 7, `
## What is register?

**Register** is the level of formality in language. Emails to professors and university staff use a **formal-to-neutral register**. Emails to classmates can be more relaxed.

### Compare two emails
**Poor email**
> **Subject:** hey
> hey prof, i cant come tmrw. need extension. send me the notes asap

**Good email**
> **Subject:** Extension request for Assignment 2 (LING 101, Section B)
>
> Dear Professor Martin,
>
> I hope you are well. I am writing to ask whether it would be possible to receive a short extension on Assignment 2. I have been ill this week and was unable to finish my draft.
>
> I would be happy to submit it by Friday if that works for you. Thank you very much for your time and understanding.
>
> Best regards,
> Amira Hassan

### Why is the second email better?
- Clear **subject line** with the course name
- Proper **greeting** (*Dear Professor Martin*) and **closing** (*Best regards*)
- Gives a short **reason** and a **specific proposal**
- Uses **polite language** and full sentences
- Does not demand (*send me*, *asap*)

### Titles
Use **Professor** or **Dr.** plus the last name unless the professor has told you to use a first name.
`),
          quiz: [
            mcq('Which subject line is best?', [
              ['help', 'Too vague. The professor will not know what you need.'],
              ['Extension request for Assignment 2 (LING 101, Section B)', 'Correct. It states the purpose and the course so the professor can quickly understand and find your record.'],
              ['URGENT!!! READ NOW', 'It sounds demanding and unprofessional.'],
            ], 1),
            tf('It is appropriate to begin an email to a professor with "Hey prof,".', false,
              'Not quite. "Hey prof" is too informal in most cases. Start with "Dear Professor …" or "Hello Professor …".',
              'Correct. Use "Dear Professor …" or "Hello Professor …" to begin a formal email.'),
          ],
        }),
        session(`${P}:l2:s2`, 'Polite requests and hedging', 'Soften your language with the right phrases.', {
          video: video('Instructor walk-through: how to sound polite, not demanding', 5, `
Hello, everyone. Today we'll look at **hedging** — small words and phrases that make a request softer.

Imagine you want an extension. Compare these three sentences.

One: "Give me more time." That is a **command**. It sounds demanding.

Two: "Can I get more time?" Better, but still quite direct for a professor.

Three: "**Would it be possible** to have a short extension?" This is polite and shows respect. The professor can say yes or no without feeling pressure.

Here are more softening phrases you can use:

- "**I was wondering if** you could…"
- "**Would you mind** if I…?"
- "**I would really appreciate it if** you could…"
- "**Please let me know** if this is possible."

You can also soften with modal verbs — **could, would, might** — and with words like **possibly** or **a little**.

One more tip: always add a **reason** and a **specific proposal**. For example: "Would it be possible to submit the paper on Friday instead of Wednesday? I have been ill this week."

Finally, say **thank you** at the end. A polite closing makes a big difference. Thanks for watching!
`, 'How hedging language softens requests in academic emails.'),
          quiz: [
            mcq('Which sentence is the most polite way to ask for an extension?', [
              ['I need more time.', 'This is direct and a statement of need, not a request.'],
              ['Can I get more time?', 'Better, but "can" is more direct than "would it be possible."'],
              ['I was wondering if it would be possible to have a short extension.', 'Correct. "I was wondering if…" and "would it be possible" are both softening phrases.'],
            ], 2),
            mcq('What should you always include with a request?', [
              ['A reason and a specific proposal', 'Correct. A reason helps the reader understand, and a proposal (e.g., "by Friday") makes it easy to say yes.'],
              ['A list of your problems', 'Too much personal detail is not necessary. A short, clear reason is enough.'],
              ['A deadline for the professor to reply', 'Telling the professor when to reply can sound demanding.'],
            ], 0),
          ],
        }),
        session(`${P}:l2:s3`, 'Draft, check and revise', 'Templates and a self-review checklist.', {
          reading: reading('Email templates and a checklist', 7, `
## Starter templates

### Asking for an extension
> Dear Professor [Last name],
> I am writing to ask whether it would be possible to [request]. [One-sentence reason.] I would be able to [specific plan] by [date].
> Thank you for considering my request.
> Best regards,
> [Name]

### Scheduling office hours
> Dear Professor [Last name],
> I was wondering if I could meet with you during your office hours this week to discuss [topic]. I am available [times]. Please let me know what works for you.
> Thank you,
> [Name]

### Clarifying assignment directions
> Hello Professor [Last name],
> I have a question about [assignment]. Could you clarify whether [your question]? I want to make sure I understand the expectations.
> Thank you very much,
> [Name]

### Quick message to a classmate (informal is fine)
> Hi Sam, did you take notes on Tuesday's lecture? I missed the part about the project. Could you share them? Thanks!

## Self-review checklist
- ☐ The subject line is clear and includes the course.
- ☐ I used a proper greeting and closing.
- ☐ I made one clear request.
- ☐ I used at least one softening phrase.
- ☐ I included a short reason and a plan.
- ☐ I read it aloud and checked spelling.
`),
          quiz: [
            mcq('You want to meet your professor. Which sentence is best?', [
              ['Meet me tomorrow.', 'This is a command and does not show respect for the professor\'s schedule.'],
              ['I was wondering if I could meet with you during your office hours this week.', 'Correct. It is polite, specific about when, and leaves the professor free to choose.'],
              ['When are you free?', 'Too direct and does not say why you want to meet.'],
            ], 1),
          ],
        }),
      ]),

    /* ───────────── Lesson 3 ───────────── */
    lesson(`${P}:l3`, 'Lesson 3 · Analyzing Scholarly Texts and Academic Jargon', 'Read dense academic writing with confidence.',
      ['Describe the parts of a scholarly article.', 'Decode unfamiliar terms using context clues.', 'Summarize an argument in plain language.'],
      [
        session(`${P}:l3:s1`, 'What is a scholarly text?', 'Anatomy of a research article.', {
          reading: reading('Parts of a scholarly article', 7, `
## You do not need to read from start to finish

Scholarly (academic) articles are written for experts. They follow a predictable structure, so you can find information quickly.

| Part | What it tells you | Read it… |
| --- | --- | --- |
| **Abstract** | A summary of the whole article (usually 150–250 words) | First |
| **Introduction** | The problem, why it matters, the research question | Second |
| **Method** | How the study was done | Skim |
| **Results** | What the researchers found | Look at tables and figures |
| **Discussion / Conclusion** | What it means; limitations; future research | Carefully |
| **References** | The sources the authors used | When you need more reading |

### Active reading steps
1. Read the title, abstract and conclusion.
2. Mark the **research question** and the **main claim**.
3. Underline words you do not know — but do not stop at every one.
4. Write one question for each section.

### Why scholarly texts feel hard
They use **long sentences**, **abstract nouns** (*implementation, perception*) and **jargon** — special words used in a field. The next session shows how to decode it.
`),
          quiz: [
            mcq('Which part of an article should you usually read first to see if it is useful?', [
              ['References', 'References show which sources were used; they do not summarize the article.'],
              ['Abstract', 'Correct. The abstract is a short summary of the question, method, findings and conclusion.'],
              ['Method', 'Method gives detail; read it after you know the article is relevant.'],
            ], 1),
          ],
        }),
        session(`${P}:l3:s2`, 'Decoding jargon with context clues', 'Use the text itself to find meaning.', {
          reading: reading('How to understand a new academic word', 8, `
## Four types of context clues

| Clue type | What to look for | Example |
| --- | --- | --- |
| **Definition** | *is, means, refers to, is defined as* | *Code-switching **refers to** alternating between two languages in one conversation.* |
| **Restatement** | *in other words, that is, or* | *The study was **longitudinal**, **that is**, it followed learners over several years.* |
| **Example** | *such as, for instance, including* | *Discourse markers, **such as** "however" and "in addition," organize ideas.* |
| **Contrast** | *but, whereas, unlike* | *Unlike **formative** assessment, which supports learning, summative assessment measures it at the end.* |

### Word parts
- **Prefix:** *inter-* (between), *multi-* (many), *non-* (not)
- **Root:** *ling* (language), *graph* (writing)
- **Suffix:** *-ology* (study of), *-ization* (process of)

*Interdisciplinary* = *inter* (between) + *discipline* (a field of study) + *ary* (relating to) → relating to more than one field.

### A good routine
1. Mark the word.
2. Read the sentence before and after.
3. Guess the meaning from clues.
4. Check in a learner's dictionary or your translation app.
5. Write the word and your own example in a personal glossary.

You may use your own translation app to understand a word in your first language, then write the meaning in English too.
`),
          quiz: [
            mcq('"The study was longitudinal, that is, it followed the same students over five years." What does longitudinal mean?', [
              ['Very short', 'The sentence says five years, which is a long time.'],
              ['Following the same people over a long period', 'Correct. The restatement clue "that is" gives the meaning directly.'],
              ['Related to language', 'This is a different word. The text defines it with "that is".'],
            ], 1),
            mcq('"Unlike formative assessment, which supports learning, summative assessment measures learning at the end." What kind of clue is "unlike"?', [
              ['Contrast', 'Correct. "Unlike" signals that the two terms are different, so summative must be different from formative.'],
              ['Example', 'There is no "such as" or "for example" here.'],
              ['Definition', 'The sentence does not use "is" or "means" to define the term.'],
            ], 0),
          ],
        }),
        session(`${P}:l3:s3`, 'Summarize the core argument in plain language', 'From dense text to a clear sentence.', {
          reading: reading('Summarizing a scholarly paragraph', 8, `
## Plain-language summaries

### Original (dense)
> *Notwithstanding the proliferation of digital platforms facilitating asynchronous interaction, empirical evidence suggests that learner engagement is contingent upon perceived instructor presence.*

### Step 1: Find the main subject and verb
*Learner engagement is contingent upon perceived instructor presence.* → **Engagement depends on whether learners feel the instructor is there.**

### Step 2: Remove the extra
*Notwithstanding…* = although / even though. *Proliferation of digital platforms* = many online tools.

### Step 3: Rewrite in your own words
> **Even though there are many online tools for communicating at different times, research shows that learners participate more when they feel their instructor is present.**

### A formula you can follow
**Author(s) + verb + main claim + (evidence)**
*Smith (2022) argues that online learners stay engaged when they feel their instructor is present.*

### Useful reporting verbs
*argues · suggests · shows · claims · reports · finds · concludes*

### Check your summary
- ☐ Is it shorter than the original?
- ☐ Is it in my own words (not copied)?
- ☐ Does it keep the author's main claim?
- ☐ Did I name the source?
`),
          quiz: [
            mcq('Which sentence is the best plain-language summary of: "Learner engagement is contingent upon perceived instructor presence"?', [
              ['Learners always love their instructors.', 'This changes the meaning. The sentence is about engagement and presence.'],
              ['Learners participate more when they feel the instructor is there.', 'Correct. It keeps the claim, uses simpler words and shows the relationship.'],
              ['Instructor presence is perceived by learners contingent on engagement.', 'This copies the structure and keeps the jargon, and the meaning is confused.'],
            ], 1),
            tf('A good summary should be written in your own words and name the source.', true,
              'Correct. Your own words show understanding, and naming the source gives credit to the author.',
              'Not quite. Paraphrasing and citing are both essential in U.S. academic writing.'),
          ],
        }),
      ]),

    /* ───────────── Lesson 4 ───────────── */
    lesson(`${P}:l4`, 'Lesson 4 · Turning Scholarly Analysis into Synthesis', 'Combine ideas from several sources into your own argument.',
      ['Explain the difference between summary and synthesis.', 'Use lexical bundles to link sources.', 'Create a simple coding scheme and write a synthesis paragraph.'],
      [
        session(`${P}:l4:s1`, 'Summary vs. synthesis', 'Why a list of summaries is not enough.', {
          reading: reading('What is synthesis?', 6, `
## From "what each source says" to "what the sources say together"

- **Summary:** reports what one source says.
- **Synthesis:** combines ideas from two or more sources to show **relationships** — agreement, disagreement, cause, development — and supports **your** point.

### Example
**Summary-style (weak):**
> Smith (2021) says that online students feel lonely. Lee (2022) says that online students like flexibility.

**Synthesis (strong):**
> Online learning offers flexibility (Lee, 2022), but this freedom may come with isolation (Smith, 2021). Taken together, these studies suggest that course designers should balance flexibility with opportunities for connection.

### What makes it a synthesis?
1. It is organized around an **idea**, not around the sources.
2. It shows **how sources relate** (but, similarly, together).
3. It adds **your own conclusion**.

### Do not copy
Copying words without quotation marks and citation is plagiarism. Paraphrase, and always cite.
`),
          quiz: [
            mcq('Which paragraph is a synthesis?', [
              ['Smith says A. Lee says B. Kim says C.', 'This is a list of summaries. It does not connect the sources.'],
              ['Smith and Lee both found that A, but Kim adds that B; together, they suggest C.', 'Correct. It shows relationships between sources and ends with a combined conclusion.'],
              ['I think A is true.', 'This is your opinion, but it does not use sources.'],
            ], 1),
          ],
        }),
        session(`${P}:l4:s2`, 'Structure and lexical bundles', 'Phrases that connect ideas and sources.', {
          reading: reading('Language for synthesis', 7, `
## Lexical bundles

**Lexical bundles** are groups of words that often appear together in academic writing. They make your writing sound natural and organized.

| Purpose | Bundle |
| --- | --- |
| Introduce a source | *According to Smith (2021), … · As Lee (2022) notes, …* |
| Show agreement | *Similarly, … · In line with … · Both studies found…* |
| Show contrast | *In contrast, … · However, … · Unlike …* |
| Add information | *In addition, … · Moreover, …* |
| Show a result | *As a result, … · Therefore, …* |
| Conclude | *Taken together, … · Overall, … · These findings suggest that…* |

### Paragraph structure (PEEL)
1. **P**oint — your topic sentence
2. **E**vidence — source 1, then source 2
3. **E**xplanation — how the sources relate
4. **L**ink — your conclusion

### Example
> Flexible learning has benefits and risks. **According to** Lee (2022), students value being able to study at their own pace. **In contrast,** Smith (2021) found that the same students often feel isolated. **Taken together,** these findings suggest that flexibility alone is not enough.
`),
          quiz: [
            mcq('Which bundle best shows that two sources disagree?', [
              ['Similarly,', 'This shows agreement.'],
              ['In contrast,', 'Correct. "In contrast" introduces a difference between sources.'],
              ['Taken together,', 'This is used for a final conclusion, not to show disagreement.'],
            ], 1),
            tf('"According to Smith (2021)," is a good way to introduce a source.', true,
              'Correct. It names the author and year so readers can find the source.',
              'Not quite. This is a standard way to introduce a source.'),
          ],
        }),
        session(`${P}:l4:s3`, 'Create a coding scheme', 'Organize sources into categories before you write.', {
          reading: reading('Coding scheme: a table for your sources', 8, `
## Why use a coding scheme?

A **coding scheme** is a table that helps you compare sources before you write. Each row is a source. Each column is a category (a "code") such as *topic, method, finding, limitation*.

| Source | Topic | Method | Main finding | Limitation |
| --- | --- | --- | --- | --- |
| Smith (2021) | Online learning | Survey of 200 students | Students feel isolated | Only one university |
| Lee (2022) | Online learning | Interviews with 15 students | Students value flexibility | Small sample |
| Kim (2023) | Peer support | Experiment | Discussion groups reduce isolation | Short study |

### How to build your own
1. Read each source and highlight its question, method and finding.
2. Choose **3–5 columns** that matter for your topic.
3. Fill in the table with short phrases (not full sentences).
4. Look **across rows**: What is similar? What is different? What is missing?
5. Write a sentence for each pattern you see.

### Patterns from the table above
- **Similar:** all three look at the student experience of online learning.
- **Different:** Smith finds a problem (isolation); Lee finds a benefit (flexibility).
- **Gap/solution:** Kim suggests a way to reduce isolation.
`),
          quiz: [
            mcq('What is the main purpose of a coding scheme?', [
              ['To copy information from sources', 'It is a comparison tool, not a copy of the sources.'],
              ['To compare sources across the same categories and see patterns', 'Correct. Looking across rows and columns shows how sources relate.'],
              ['To make your essay longer', 'Its purpose is organization, not length.'],
            ], 1),
          ],
        }),
        session(`${P}:l4:s4`, 'Putting it all together', 'Write a synthesis paragraph.', {
          reading: reading('Write your synthesis paragraph', 9, `
## A step-by-step plan

1. **Choose your point.** From your coding scheme, decide the idea you want to argue.
   *Example: Online learning needs both flexibility and social connection.*
2. **Select evidence.** Pick one finding from each source that supports the point.
3. **Paraphrase.** Rewrite each finding in your own words.
4. **Connect.** Use bundles: *In contrast, Similarly, Taken together.*
5. **Conclude.** End with your own idea or recommendation.
6. **Cite.** Add author and year after each idea you took from a source.

### Model paragraph (about 110 words)
> Online learning gives students freedom, but freedom is not enough. **According to** Lee (2022), students appreciate studying at their own pace and fitting classes around work. **In contrast,** Smith (2021) reports that many online students feel isolated and disconnected from classmates. Kim (2023) **adds that** small discussion groups can reduce this loneliness. **Taken together,** these studies suggest that courses should combine flexible schedules with structured chances to interact. **As a result,** instructors who include group discussions may help students stay motivated while keeping the flexibility they value.

### Final checklist
- ☐ Starts with a clear point
- ☐ Uses at least two sources and names them
- ☐ Shows how the sources relate
- ☐ Contains no copied sentences
- ☐ Ends with your own conclusion
`),
          quiz: [
            mcq('Which sentence is a good final sentence for a synthesis paragraph?', [
              ['Smith wrote an article.', 'This is a summary detail, not a conclusion.'],
              ['Taken together, these studies suggest that flexibility and connection should be planned together.', 'Correct. It combines the sources and states your own conclusion.'],
              ['I copied this from the article.', 'Copying without credit is plagiarism.'],
            ], 1),
            tf('In a synthesis paragraph you should paraphrase and cite each source.', true,
              'Correct. Paraphrasing shows understanding, and citing gives credit.',
              'Not quite. In U.S. universities, paraphrasing and citing are expected for every idea you take from a source.'),
          ],
        }),
      ]),
  ],

  assessment: {
    id: `${P}:assessment`,
    title: 'Unit 2 Assessment · Academic Communications & Synthesis Portfolio',
    estMinutes: 40,
    body: {
      instructions: `
## Portfolio check

This assessment brings together your notes, email and synthesis skills. Complete the four short questions first, then the two writing tasks. Writing tasks are scored with a rubric, and you can compare your response with a model answer after submitting.

You need a **B or higher** to pass. You can try again, and your best result counts.
`,
      tasks: [
        choice('t1', 10, mcq('A professor says: "This won\'t be on the test, but it\'s interesting." How should you treat this information in your notes?', [
          ['Mark it as a top priority for exam review.', 'The professor has said it will not be on the test.'],
          ['Treat it as optional background and keep it short.', 'Correct. "This won\'t be on the test" signals a tangent. You may note it briefly if it helps you understand.'],
          ['Put it in the action items box.', 'It is not a task or deadline.'],
        ], 1)),
        choice('t2', 10, tf('A good academic email usually includes a clear subject line, a greeting, a polite request and a closing.', true,
          'Correct. These four parts make an email clear and respectful.',
          'Not quite. These parts are expected in a professional email to a professor.')),
        choice('t3', 10, mcq('"Participants completed the survey anonymously, that is, without writing their names." What does anonymously mean?', [
          ['Quickly', 'The text does not talk about speed.'],
          ['Without giving a name', 'Correct. The restatement "that is, without writing their names" gives the meaning.'],
          ['In a group', 'There is no clue about groups.'],
        ], 1)),
        choice('t4', 10, mcq('Which expression best introduces a contrast between two sources?', [
          ['In addition,', 'This adds more information; it does not contrast.'],
          ['Similarly,', 'This shows agreement.'],
          ['In contrast,', 'Correct. This shows that the second source differs from the first.'],
        ], 2)),
        written('t5', 30, {
          prompt: 'Write an email (60–120 words) to a professor asking for an extension.',
          scenario: 'You are in Professor Martin\'s course LING 101 (Section B). You were sick this week, and you cannot submit Assignment 2 by Wednesday. Write a polite email asking for a short extension. Include a subject line, a greeting, your request, a reason, a plan and a closing.',
          starter: 'Subject: …\n\nDear Professor Martin,\n',
          minWords: 60,
          checklist: [
            'My subject line says what the email is about and includes the course.',
            'I used "Dear Professor …" and a polite closing.',
            'I used a softening phrase (e.g., "Would it be possible…").',
            'I gave a short reason and a specific new date.',
            'I said thank you.',
          ],
          modelAnswer: 'Subject: Extension request for Assignment 2 (LING 101, Section B)\n\nDear Professor Martin,\n\nI hope you are well. I am writing to ask whether it would be possible to have a short extension on Assignment 2. I have been ill this week and was not able to finish my draft before Wednesday.\n\nI would be able to submit the assignment by Friday at 5 p.m. if that works for you. Please let me know if you would like me to send a doctor\'s note.\n\nThank you very much for your time and understanding.\n\nBest regards,\nAmira Hassan',
          rubric: {
            criteria: [
              crit('format', 'Email format', 'Subject, greeting and closing.', 30, [
                K.any('subject', ['subject:', 'subject line'], 'Includes a subject line', 'Start with "Subject: …".'),
                K.any('greet', ['dear professor', 'hello professor', 'dear dr', 'hello dr'], 'Uses a formal greeting', 'Begin with "Dear Professor Martin,".'),
                K.any('close', ['best regards', 'sincerely', 'kind regards', 'thank you', 'thanks'], 'Ends with a polite closing', 'End with "Best regards," and your name.'),
              ]),
              crit('request', 'Polite request', 'Hedging, reason and plan.', 45, [
                K.any('hedge', ['would it be possible', 'i was wondering if', 'would you mind', 'i would appreciate', 'could i', 'could you', 'i would be grateful'], 'Uses a softening phrase', 'Use "Would it be possible…" or "I was wondering if…".'),
                K.any('reason', ['ill', 'sick', 'because', 'since', 'unwell', 'unable', 'was not able', 'was unable', 'due to'], 'Gives a reason', 'Explain briefly why you need an extension.'),
                K.any('plan', ['by friday', 'by monday', 'by tuesday', 'by thursday', 'by wednesday', 'by the end', 'on friday', 'submit', 'p.m.', 'a.m.'], 'Proposes a specific new deadline', 'Say exactly when you can submit.'),
                K.any('thanks', ['thank you', 'thanks', 'appreciate'], 'Says thank you', 'Add "Thank you for your understanding".'),
              ]),
              crit('length', 'Clarity and length', 'Complete sentences and enough detail.', 25, [
                K.words('len', 60, 'Meets the length (60+ words)', 'Add detail to reach about 60 words.'),
                K.sentences('sent', 4, 'Uses complete sentences', 'Write at least four complete sentences.'),
              ]),
            ],
          },
        }),
        written('t6', 30, {
          prompt: 'Write a synthesis paragraph (110–170 words) that connects the two sources below.',
          scenario: `**Source A — Rivera (2022):** In a survey of 300 international students, 68% said that speaking in class was the hardest part of studying in the U.S. Many reported fear of making mistakes.\n\n**Source B — Chen (2023):** In a study of 40 international students, those who joined small discussion groups spoke more in class and reported more confidence after one semester.\n\nWrite one paragraph in your own words that: (1) introduces both sources, (2) shows how they relate, and (3) ends with your own conclusion. Do not copy sentences.`,
          starter: 'Speaking in class can be difficult for international students. According to Rivera (2022), …',
          minWords: 110,
          checklist: [
            'I named both sources (Rivera and Chen).',
            'I used at least two connecting phrases (e.g., "In contrast," "Taken together,").',
            'I used my own words, not copied sentences.',
            'I ended with my own conclusion or recommendation.',
          ],
          modelAnswer: 'Speaking in class is a major challenge for many international students, but support can help. According to Rivera (2022), a large majority of the students surveyed said that speaking in class was the hardest part of studying in the U.S., mainly because they were afraid of making mistakes. In contrast, Chen (2023) found that students who took part in small discussion groups spoke more often and felt more confident after one semester. Similarly, both studies focus on the same problem, but Chen\'s research points toward a possible solution. Taken together, these findings suggest that universities should create small, low-pressure speaking groups for international students. As a result, learners may gain confidence step by step, and the fear of mistakes described by Rivera may become less powerful over time.',
          rubric: {
            criteria: [
              crit('sources', 'Uses both sources', 'Names and integrates both authors.', 35, [
                K.all('both', ['Rivera', 'Chen'], 'Names both authors', 'Mention both Rivera and Chen by name.'),
                K.any('year', ['2022', '2023'], 'Includes the years', 'Add the year in brackets, e.g. Rivera (2022).', 2),
                K.any('verbs', ['found', 'reported', 'suggests', 'shows', 'argues', 'notes', 'says', 'indicates', 'observed'], 'Uses reporting verbs', 'Use verbs such as "found", "reported" or "suggests".'),
              ]),
              crit('synthesis', 'Synthesis language', 'Shows how sources relate.', 40, [
                K.any('connect', ['in contrast', 'similarly', 'however', 'taken together', 'in addition', 'moreover', 'both', 'whereas', 'unlike'], 'Uses connecting phrases', 'Use at least two phrases such as "In contrast," or "Taken together,".', 2),
                K.any('concl', ['taken together', 'overall', 'these findings suggest', 'as a result', 'therefore', 'suggest that', 'this suggests'], 'Draws a conclusion', 'End with "Taken together, …" or "These findings suggest that …".'),
                K.any('own', ['should', 'could', 'may', 'might', 'recommend', 'suggest'], 'States your own idea', 'Add what you think universities or learners should do.'),
              ]),
              crit('length', 'Development', 'Enough well-formed sentences.', 25, [
                K.words('len', 110, 'Meets the length (110+ words)', 'Add detail to reach about 110 words.'),
                K.sentences('sent', 5, 'Uses at least five complete sentences', 'Write at least five complete sentences.'),
              ]),
            ],
          },
        }),
      ],
    },
  },
};
