import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow how children acquire language, debate how it develops, and see how language relates to thought.',
  modules: {
    20: {
      summary: 'Language development, theories and bilingualism.',
      sessions: [
        {
          t: 'The structure and development of language',
          s: 'Building blocks and the milestones of acquisition.',
          md: `
## Language

### Building blocks
| Level | Meaning |
| --- | --- |
| **Phonemes** | Basic sound units (about 40 in English) |
| **Morphemes** | Smallest units of meaning (*un-happy-ness*) |
| **Syntax** | Grammar: rules for combining words |
| **Semantics** | Meaning |
| **Pragmatics** | Using language appropriately in context |

### Milestones (typical ages)
| Age | Milestone |
| --- | --- |
| Birth | Prefers speech sounds; distinguishes many phonemes |
| ~2 months | **Cooing** |
| ~6 months | **Babbling** (ba-ba, ma-ma) |
| ~12 months | **First words** |
| ~18 months | Vocabulary growth; **two-word** stage |
| 2–3 years | **Telegraphic speech** ("more juice"), then sentences |

Children also overgeneralize rules ("goed", "foots"), which shows rule learning, not just imitation. Children vary widely in timing; concerns about delays should be raised with a pediatrician.
`,
          q: [
            mc('What are phonemes?', 'The basic units of sound in a language', 'English has about 40.', [
              ['The smallest units of meaning', 'These are morphemes.'],
              ['The rules of grammar', 'This is syntax.'],
            ]),
            mc('A child says "goed" for "went". What does this suggest?', 'The child has learned a grammatical rule and applied it too broadly', 'Overregularization shows rule learning.', [
              ['The child is only imitating adults', 'Adults do not say "goed".'],
              ['The child has a language disorder', 'It is a normal stage.'],
            ]),
          ],
        },
        {
          t: 'Theories of language acquisition, bilingualism and thought',
          s: 'Nature vs. nurture, the critical period and linguistic relativity.',
          md: `
## How is language acquired?

| Theory | Claim |
| --- | --- |
| **Learning (Skinner)** | Language is learned through imitation and reinforcement |
| **Nativist (Chomsky)** | Humans are born with an innate capacity for grammar (a "language acquisition device", **universal grammar**) |
| **Interactionist** | Biology provides the capacity; **social interaction** shapes it |

Most researchers favor an **interactionist** view: both biology and experience matter. Evidence for a **critical period** comes from cases of children isolated from language (such as "Genie") who failed to master grammar, and from the fact that **younger** learners typically reach native-like accents in a second language.

### Bilingualism
Bilingual children may have a slightly smaller vocabulary in each language at first, but the **total** vocabulary is similar and they often show advantages in **attention control and switching**. Bilingualism does not confuse children.

### Language and thought
The **Sapir–Whorf hypothesis** proposes that language shapes thought. The strong version (language determines thought) is rejected; a **weaker version** is supported: language can influence attention, categorization and memory (for example color naming).
`,
          q: [
            mc('Which theory says humans have an innate capacity for grammar?', 'Nativist theory (Chomsky)', 'He proposed universal grammar.', [
              ['Skinner\'s learning theory', 'It emphasizes reinforcement.'],
              ['Behaviorism only', 'Behaviorism emphasizes learning.'],
            ]),
            mc('What is true about bilingual children?', 'They often show advantages in attention control and switching', 'There is no evidence that bilingualism confuses children.', [
              ['They always have delayed language development', 'Typical development is expected.'],
              ['They cannot learn grammar', 'They learn grammar of both languages.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Language',
    tasks: [
      mc('The word "unhappiness" contains how many morphemes?', 'Three (un, happy, ness)', 'Each is a unit of meaning.', [
        ['One', 'It has several units of meaning.'],
        ['Two', 'There are three meaningful units.'],
        ['Eleven', 'This counts letters.'],
      ]),
      mc('At about what age do infants typically begin babbling?', 'About 6 months', 'Babbling follows cooing.', [
        ['Birth', 'Newborns cry and coo later.'],
        ['About 3 years', 'This is much later.'],
        ['About 18 months', 'By then they use words.'],
      ]),
      mc('Which statement describes telegraphic speech?', 'Short sentences that include essential words, such as "more juice"', 'Function words are omitted.', [
        ['Babbling sounds', 'This is earlier.'],
        ['Single words only', 'This is the one-word stage.'],
        ['Fully grammatical complex sentences', 'This is later.'],
      ]),
      mc('Chomsky argued that', 'Humans have an innate predisposition for language', 'He proposed a language acquisition device.', [
        ['Language is learned only by reinforcement', 'This is Skinner\'s view.'],
        ['Only deaf children acquire language', 'This is incorrect.'],
        ['Animals teach language to humans', 'This is incorrect.'],
      ]),
      mc('The strong form of the Sapir–Whorf hypothesis (language determines thought) is', 'Not supported; only weaker influences have been found', 'Language can influence but not determine thought.', [
        ['Completely proven', 'It has not been proven.'],
        ['Irrelevant to all research', 'The weaker form is studied.'],
        ['The only accepted view', 'It is largely rejected.'],
      ]),
      tf('Children raised bilingual end up with delayed or confused thinking.', false, 'Research shows no confusion. Bilingual children often show advantages in attention and executive control.', 'Correct. Bilingualism is not harmful.'),
    ],
  },
};
