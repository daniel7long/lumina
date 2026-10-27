import { mc, tf } from '../builder.js';

export default {
  summary: 'Examine how intelligence is defined, measured and explained, and the debates about what scores mean.',
  modules: {
    21: {
      summary: 'Measuring intelligence and judging tests.',
      sessions: [
        {
          t: 'Defining and measuring intelligence',
          s: 'IQ, major tests, reliability, validity and standardization.',
          md: `
## Intelligence testing

**Intelligence** is the ability to learn from experience, solve problems and adapt to new situations.

### IQ
Binet and Simon created the first test to identify children needing help. The original **IQ = (mental age ÷ chronological age) × 100**. A 10-year-old performing like a typical 12-year-old has IQ = 12 ÷ 10 × 100 = **120**. Modern tests use a **deviation IQ**: scores are compared with others of the same age, with a mean of **100** and a standard deviation of **15**.

### Major tests
- **Stanford–Binet**
- **Wechsler scales** (WAIS for adults, WISC for children) with verbal, perceptual and processing-speed components

### Qualities of a good test
| Quality | Meaning |
| --- | --- |
| **Standardization** | Uniform procedures and norms from a representative sample |
| **Reliability** | Consistent results (test–retest) |
| **Validity** | Measures what it claims to (e.g. predicts school performance) |

A test can be reliable without being valid (a consistently wrong scale), but cannot be valid unless it is reliable.
`,
          q: [
            mc('A 10-year-old performs like a typical 12-year-old. By the original formula, what is her IQ?', '120', '12 ÷ 10 × 100.', [
              ['83', 'This inverts the ratio.'],
              ['100', 'This would be average.'],
            ]),
            mc('A test yields very similar scores each time it is given to the same people. This shows', 'Reliability', 'Consistency over time.', [
              ['Validity', 'Validity is accuracy in measuring the target.'],
              ['Standardization', 'Standardization concerns procedures and norms.'],
            ]),
          ],
        },
      ],
    },
    22: {
      summary: 'The normal distribution of IQ scores and its extremes.',
      sessions: [
        {
          t: 'The bell curve of intelligence',
          s: 'Percentages, intellectual disability and giftedness.',
          md: `
## The normal distribution of IQ

Scores follow a **bell curve** with mean 100 and SD 15:
- About **68%** of people score between **85 and 115**.
- About **95%** between **70 and 130**.
- About **99.7%** between **55 and 145**.
- About **2.3%** score below 70 and about **2.3%** above 130.
- About **16%** score above 115.

### The extremes
- **Intellectual disability** is diagnosed when there are both **IQ scores roughly below 70** and **significant limits in adaptive functioning** (daily living, social and practical skills) beginning in development. IQ alone is not enough.
- **Giftedness** is often defined as IQ above about 130, though definitions vary and many schools use broader criteria (creativity, specific talents).

Scores are estimates with measurement error, so they are best seen as ranges, and one number does not capture a person's abilities or potential.
`,
          q: [
            mc('IQ scores have a mean of 100 and an SD of 15. About what percentage of people score between 85 and 115?', 'About 68%', 'This is within 1 SD.', [
              ['About 95%', 'That is within 2 SD (70 to 130).'],
              ['About 50%', 'This is not the percentage within 1 SD.'],
            ]),
            mc('Which is required, in addition to a low IQ score, for a diagnosis of intellectual disability?', 'Significant limitations in adaptive functioning', 'Both criteria are needed.', [
              ['A score above 130', 'This is giftedness.'],
              ['A brain scan', 'Not required.'],
            ]),
          ],
        },
      ],
    },
    23: {
      summary: 'Competing theories of intelligence.',
      sessions: [
        {
          t: 'Theories: g, Sternberg and Gardner',
          s: 'One ability or many?',
          md: `
## What is intelligence?

### A general factor
Spearman proposed **g**, a general intelligence underlying performance on varied tasks, because scores on different tests correlate. Cattell distinguished **fluid intelligence** (reasoning on novel problems, declines with age) from **crystallized intelligence** (accumulated knowledge, remains stable or grows).

### Multiple intelligences
**Gardner** proposed eight relatively independent intelligences: linguistic, logical–mathematical, spatial, musical, bodily–kinesthetic, interpersonal, intrapersonal and naturalistic. The theory is popular in education, but critics say that it lacks empirical support and that Gardner's "intelligences" overlap with talents and with g.

### Sternberg's triarchic theory
| Type | Meaning |
| --- | --- |
| **Analytical** | Evaluating and solving problems (typical IQ tests) |
| **Creative** | Generating new ideas |
| **Practical** | Adapting to everyday situations ("street smarts") |

### Related ideas
**Emotional intelligence** (perceiving and managing emotions) and **savant syndrome** (exceptional skill in a narrow area alongside limits elsewhere) challenge a purely single-score view.
`,
          q: [
            mc('Which theorist proposed analytical, creative and practical intelligence?', 'Sternberg', 'The triarchic theory.', [
              ['Gardner', 'He proposed eight intelligences.'],
              ['Spearman', 'He proposed g.'],
            ]),
            mc('Cattell\'s fluid intelligence refers to', 'Reasoning about new problems independent of prior knowledge', 'It tends to decline with age.', [
              ['Accumulated knowledge and vocabulary', 'This is crystallized intelligence.'],
              ['Musical ability', 'This is one of Gardner\'s types.'],
            ]),
          ],
        },
      ],
    },
    24: {
      summary: 'Debates about environment, expectations and group differences.',
      sessions: [
        {
          t: 'Issues and controversies',
          s: 'The Flynn effect, mindsets, stereotype threat and interpreting group differences.',
          md: `
## Controversies

### The Flynn effect
Average IQ scores rose by about **3 points per decade** across the 20th century in many countries. Genes cannot change that fast, so **environmental** factors (nutrition, schooling, health, more cognitively complex environments) must be involved.

### Mindsets
**Entity theorists** see intelligence as fixed; **incremental theorists** see it as improvable through effort (Carol Dweck's "growth mindset"). A growth mindset is linked to greater persistence, though large effects of brief interventions remain debated.

### Stereotype threat
Steele and Aronson found that when a negative stereotype about a group is made salient, members of the group may perform worse on a test from anxiety and distraction. It helps explain how test settings can **underestimate** performance, though the size of the effect varies across studies.

### Interpreting group differences
Average score differences between groups have been reported, but individuals within every group vary far more than the averages differ. **Heritability** describes variation *within* a population in a given environment; it does **not** explain average differences *between* groups, which are strongly affected by differences in opportunity, schooling, health, test familiarity, discrimination and test bias. IQ is not a measure of a person's worth.
`,
          q: [
            mc('The Flynn effect (rising average IQ over decades) is best explained by', 'Environmental changes such as nutrition and education', 'Genetic change is too slow.', [
              ['Rapid genetic evolution', 'Genes cannot change that fast.'],
              ['Errors in the scoring', 'The effect was found repeatedly.'],
            ]),
            mc('Stereotype threat refers to', 'Reduced performance caused by the worry of confirming a negative stereotype', 'It is a situational effect.', [
              ['An inherited difference in ability', 'It is a situational effect.'],
              ['An improvement from praise', 'It is not about praise.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Intelligence',
    tasks: [
      mc('Modern IQ tests are scored so that the mean is 100 and the SD is', '15', 'A deviation IQ.', [
        ['10', 'Not the usual SD.'],
        ['100', 'This is the mean.'],
        ['1', 'This is the SD of z-scores.'],
      ]),
      mc('About what percentage of people have IQ scores above 130?', 'About 2%', 'It is 2 SD above the mean.', [
        ['About 16%', 'This is above 115.'],
        ['About 50%', 'This is above 100.'],
        ['About 0.1%', 'This is too low.'],
      ]),
      mc('A test is consistent but measures something other than intended. It is', 'Reliable but not valid', 'Consistency does not ensure validity.', [
        ['Valid but not reliable', 'A valid test must be reliable.'],
        ['Neither reliable nor valid', 'It is consistent.'],
        ['Standardized only', 'Standardization concerns procedure.'],
      ]),
      mc('Which is NOT one of Gardner\'s eight intelligences?', 'Analytical intelligence', 'It is one of Sternberg\'s types.', [
        ['Musical', 'It is one of Gardner\'s.'],
        ['Naturalistic', 'It is one of Gardner\'s.'],
        ['Interpersonal', 'It is one of Gardner\'s.'],
      ]),
      mc('Someone who adapts well to everyday problems but scores modestly on an IQ test would be strong in which part of Sternberg\'s theory?', 'Practical intelligence', 'Adapting to real-world situations.', [
        ['Analytical intelligence', 'IQ tests measure this.'],
        ['Fluid intelligence', 'This is Cattell\'s term.'],
        ['Linguistic intelligence', 'This is from Gardner.'],
      ]),
      mc('Which statement about heritability is correct?', 'It describes variation within a population in a given environment, not differences between groups', 'It cannot explain between-group averages.', [
        ['It shows that group differences must be genetic', 'This is a common misunderstanding.'],
        ['It measures how fixed a trait is in an individual', 'It is a population statistic.'],
        ['It proves that environment is unimportant', 'It does not.'],
      ]),
      tf('An IQ score is a perfectly precise measure of a person\'s abilities and potential.', false, 'IQ scores contain measurement error and capture only some abilities. They are best interpreted as estimates.', 'Correct. IQ is one imperfect measure.'),
    ],
  },
};
