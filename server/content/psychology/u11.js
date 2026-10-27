import { mc, tf } from '../builder.js';

export default {
  summary: 'Compare the major theories of personality, how it is measured, and how genes and environment shape it.',
  modules: {
    34: {
      summary: 'Trait theories and personality assessment.',
      sessions: [
        {
          t: 'Trait theories and assessment',
          s: 'The Big Five, self-report inventories and projective tests.',
          md: `
## Personality traits

**Personality** is a person's characteristic pattern of thoughts, feelings and behaviors. **Trait theories** describe stable dimensions on which people differ.

### The Big Five (OCEAN)
| Trait | High score | Low score |
| --- | --- | --- |
| **Openness** | Curious, imaginative | Conventional, practical |
| **Conscientiousness** | Organized, disciplined | Spontaneous, careless |
| **Extraversion** | Sociable, energetic | Reserved, quiet |
| **Agreeableness** | Cooperative, trusting | Competitive, skeptical |
| **Neuroticism** | Anxious, moody | Calm, stable |

Eysenck proposed two broad dimensions: extraversion and neuroticism. Traits are fairly stable across adulthood and predict outcomes such as job performance and health.

### Assessment
- **Self-report inventories** (e.g. NEO-PI-R, MMPI-2): standardized questions about oneself. Strengths: objective scoring, good reliability. Weakness: people may answer in a socially desirable way.
- **Projective tests** (e.g. Rorschach inkblots, Thematic Apperception Test): interpret ambiguous images, assuming responses reveal unconscious content. They are criticized for low **reliability and validity** and are less trusted than inventories.
`,
          q: [
            mc('A person who is organized, careful and disciplined scores high on which Big Five trait?', 'Conscientiousness', 'It reflects self-discipline and organization.', [
              ['Openness', 'It reflects curiosity.'],
              ['Agreeableness', 'It reflects cooperation.'],
            ]),
            mc('Why are projective tests like the Rorschach criticized?', 'Their scoring is subjective and their reliability and validity are weak', 'Evidence for their accuracy is limited.', [
              ['They are too objective', 'They are subjective.'],
              ['They measure only height', 'Not related.'],
            ]),
          ],
        },
      ],
    },
    35: {
      summary: 'Psychodynamic, humanistic and neo-Freudian approaches.',
      sessions: [
        {
          t: 'Psychodynamic and humanistic approaches',
          s: 'Freud, the neo-Freudians, Rogers and Maslow.',
          md: `
## Origins of personality

### Psychodynamic (Freud)
Personality arises from conflicts among unconscious forces:
- **Id:** instinctual drives, pleasure principle.
- **Ego:** reality principle, mediates.
- **Superego:** conscience and ideals.

Ego uses **defense mechanisms** (repression, denial, projection, displacement, rationalization) to cope with anxiety. Freud proposed **psychosexual stages** (oral, anal, phallic, latency, genital). Many of his specific claims lack empirical support, but his ideas about unconscious processes and the importance of early experience were influential.

### Neo-Freudians
- **Jung:** the *collective unconscious* and archetypes.
- **Adler:** striving for superiority; the *inferiority complex*.
- **Horney:** emphasis on culture, social relationships and anxiety; challenged Freud's view of women.

### Humanistic approach
Stresses free will, growth and the whole person.
- **Rogers:** the **self-concept**, **unconditional positive regard** and **congruence** between the real and ideal self.
- **Maslow:** **self-actualization**, the drive to fulfil one's potential.

Critics say humanistic concepts are hard to test and overly optimistic, but they influenced therapy and positive psychology.
`,
          q: [
            mc('Which part of Freud\'s personality structure operates on the reality principle?', 'Ego', 'It balances the id and superego.', [
              ['Id', 'It follows the pleasure principle.'],
              ['Superego', 'It represents conscience.'],
            ]),
            mc('Rogers believed that healthy development is promoted by', 'Unconditional positive regard', 'Acceptance without conditions.', [
              ['Strict discipline', 'Not his emphasis.'],
              ['Defense mechanisms', 'This is a Freudian concept.'],
            ]),
          ],
        },
      ],
    },
    36: {
      summary: 'Genetic and environmental influences on personality.',
      sessions: [
        {
          t: 'Nature or nurture? Behavioral and molecular genetics',
          s: 'Twin and adoption studies, heritability and gene–environment interplay.',
          md: `
## Nature and nurture in personality

### Behavioral genetics
- **Twin studies:** **identical (monozygotic)** twins share nearly 100% of their genes; **fraternal (dizygotic)** twins share about 50%. If identical twins are more alike than fraternal twins, genes contribute.
- **Adoption studies:** compare adoptees with biological and adoptive relatives.

**Findings:** each Big Five trait has a **heritability of roughly 40–50%**, so about half of the variation among people is linked to genetic differences. The rest is environmental, and surprisingly, it is mostly the **non-shared environment** (unique experiences) rather than the shared family environment.

### Understanding heritability
Heritability is a population statistic. It does **not** tell how much of one person's personality is "genetic", and it does **not** mean traits are fixed.

### Molecular genetics
Personality traits are influenced by **many genes of tiny effect** (polygenic), not a single "gene for" a trait. Gene effects depend on the environment (**gene–environment interaction**), and people select and shape environments that fit their genes (**gene–environment correlation**). **Epigenetics** shows that experience can change gene expression.
`,
          q: [
            mc('Identical twins raised apart are more similar in personality than would be expected by chance. What does this suggest?', 'Genes contribute to personality', 'Shared genes explain similarities.', [
              ['Only the environment matters', 'The environments differed.'],
              ['Personality is random', 'The similarity is systematic.'],
            ]),
            mc('Which statement about heritability is correct?', 'It describes variation in a population, not how much of an individual\'s trait is genetic', 'It is a population statistic.', [
              ['A heritability of 50% means half of your personality is genetic', 'It does not apply to an individual.'],
              ['High heritability means a trait cannot change', 'It does not mean that.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 11 assessment · Personality',
    tasks: [
      mc('Which Big Five trait relates to anxiety and emotional instability?', 'Neuroticism', 'Low scores indicate emotional stability.', [
        ['Extraversion', 'It reflects sociability.'],
        ['Openness', 'It reflects curiosity.'],
        ['Agreeableness', 'It reflects cooperativeness.'],
      ]),
      mc('A person unconsciously blames someone else for their own unacceptable feelings. Freud called this', 'Projection', 'A defense mechanism.', [
        ['Repression', 'Pushing thoughts out of awareness.'],
        ['Displacement', 'Redirecting feelings to a substitute target.'],
        ['Rationalization', 'Making excuses.'],
      ]),
      mc('Which assessment method is most criticized for low reliability and validity?', 'Projective tests', 'Scoring is subjective.', [
        ['Structured self-report inventories', 'They are standardized.'],
        ['Standardized IQ tests', 'Not a personality method.'],
        ['Behavior ratings', 'More objective.'],
      ]),
      mc('Maslow\'s highest need in his hierarchy is', 'Self-actualization', 'Realizing one\'s potential.', [
        ['Safety', 'A lower need.'],
        ['Belonging', 'A middle need.'],
        ['Physiological needs', 'The lowest need.'],
      ]),
      mc('Fraternal twins share approximately what proportion of their genes?', '50%', 'Like ordinary siblings.', [
        ['100%', 'This is identical twins.'],
        ['25%', 'Not correct.'],
        ['0%', 'They share half.'],
      ]),
      mc('Which statement best summarizes current genetic research on personality?', 'Many genes with small effects interact with the environment', 'Traits are polygenic.', [
        ['A single gene determines each trait', 'This is not supported.'],
        ['Genes have no effect', 'Genes contribute.'],
        ['Environment alone shapes traits', 'Genes contribute.'],
      ]),
      tf('A heritability estimate of 50% for extraversion means that 50% of any individual\'s extraversion comes from genes.', false, 'Heritability applies to variation in a population, not to an individual\'s composition.', 'Correct. It is a population statistic.'),
    ],
  },
};
