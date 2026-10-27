import { mc, tf } from '../builder.js';

export default {
  summary: 'Trace human development from conception through old age: physical, cognitive, social and moral change.',
  modules: {
    25: {
      summary: 'What developmental psychology studies.',
      sessions: [
        {
          t: 'Introduction to lifespan development',
          s: 'Core questions and approaches.',
          md: `
## Developmental psychology

**Developmental psychology** studies how people change and stay the same across the **lifespan**, from conception to death.

### Three big questions
| Question | The debate |
| --- | --- |
| **Nature vs. nurture** | How much do genes and environment each contribute? (Both interact) |
| **Continuity vs. discontinuity** | Is development gradual or in distinct stages? |
| **Stability vs. change** | Do early traits persist? |

### Research designs
- **Cross-sectional:** compare different age groups at one time (fast, but cohort differences confound age).
- **Longitudinal:** follow the same people over time (shows change, but is slow, costly and has attrition).

### Domains
Physical, cognitive and social-emotional development, which interact throughout life.
`,
          q: [
            mc('A study follows the same 200 people from age 5 to 30. This is a', 'Longitudinal design', 'The same individuals are tracked over time.', [
              ['Cross-sectional design', 'It compares different ages at one time.'],
              ['Case study', 'A case study examines one individual in depth.'],
            ]),
            mc('Most developmental psychologists conclude that development is shaped by', 'The interaction of nature and nurture', 'Genes and environment work together.', [
              ['Genes only', 'Environment matters too.'],
              ['Environment only', 'Genes matter too.'],
            ]),
          ],
        },
      ],
    },
    26: {
      summary: 'Prenatal development.',
      sessions: [
        {
          t: 'Prenatal and early development',
          s: 'Stages, teratogens and newborn reflexes.',
          md: `
## Before birth

| Stage | Timing | Key events |
| --- | --- | --- |
| **Germinal** | Weeks 0–2 | Zygote divides and implants in the uterus |
| **Embryonic** | Weeks 3–8 | Major organs and the neural tube form; very sensitive to harm |
| **Fetal** | Week 9–birth | Growth, brain development, movement |

### Teratogens
**Teratogens** are substances that can harm the developing baby: **alcohol** (can cause fetal alcohol spectrum disorders), **tobacco**, some drugs and medications, certain infections and severe malnutrition. Effects depend on dose, timing and genetics. Pregnant people should talk to a health professional about medications and substances.

### Newborn reflexes
| Reflex | Response |
| --- | --- |
| **Rooting** | Turns toward touch on the cheek |
| **Sucking** | Sucks on objects in the mouth |
| **Grasping** | Closes fingers around an object in the palm |
| **Moro (startle)** | Throws out arms when startled |
| **Babinski** | Toes fan out when the sole is stroked |

Most reflexes fade in the first months as voluntary control develops.
`,
          q: [
            mc('During which prenatal stage do the major organs form?', 'Embryonic stage', 'Weeks 3 to 8.', [
              ['Germinal stage', 'It is the first two weeks.'],
              ['Fetal stage', 'This is mostly growth.'],
            ]),
            mc('A newborn turns toward a touch on the cheek. This is the', 'Rooting reflex', 'It helps the baby find food.', [
              ['Moro reflex', 'This is the startle reflex.'],
              ['Babinski reflex', 'This involves the toes.'],
            ]),
          ],
        },
      ],
    },
    27: {
      summary: 'Piaget\'s theory of cognitive development.',
      sessions: [
        {
          t: 'Cognitive development in childhood',
          s: 'Schemas, Piaget\'s four stages and their critics.',
          md: `
## Piaget

Jean Piaget saw children as active "little scientists" who build **schemas** (mental frameworks).
- **Assimilation:** fitting new information into an existing schema (calling a zebra a "horse").
- **Accommodation:** changing the schema to fit the new information (creating a new category "zebra").

### Four stages
| Stage | Age | Features |
| --- | --- | --- |
| **Sensorimotor** | 0–2 | Learns through senses and actions; **object permanence** (objects exist when out of sight) develops |
| **Preoperational** | 2–7 | Symbolic thought and pretend play; **egocentrism**; fails **conservation** tasks |
| **Concrete operational** | 7–11 | Logical thought about concrete objects; understands conservation |
| **Formal operational** | 12+ | Abstract and hypothetical reasoning |

### Criticisms
Infants and young children show more abilities than Piaget thought when tasks are simplified. Development is more **continuous** and varies across children and cultures. **Vygotsky** stressed social interaction and the **zone of proximal development** (what a child can do with help).
`,
          q: [
            mc('A child pours water from a short, wide glass into a tall, thin glass and says there is now more water. In Piaget\'s theory the child has not yet mastered', 'Conservation', 'This is typical in the preoperational stage.', [
              ['Object permanence', 'This develops in infancy.'],
              ['Assimilation', 'This is a process, not a stage ability.'],
            ]),
            mc('Changing the schema "all four-legged animals are dogs" after seeing a cat is', 'Accommodation', 'The schema is changed to fit the new information.', [
              ['Assimilation', 'This would be calling the cat a dog.'],
              ['Conservation', 'Not relevant.'],
            ]),
          ],
        },
      ],
    },
    28: {
      summary: 'Temperament, attachment, parenting and self-awareness.',
      sessions: [
        {
          t: 'Social and personality development in children',
          s: 'Temperament, attachment, parenting styles and self.',
          md: `
## Social development in childhood

### Temperament
Inborn emotional reactivity. Thomas and Chess identified **easy** (about 40% of babies), **difficult** (about 10%) and **slow-to-warm-up** (about 15%). Temperament is relatively stable but is shaped by experience ("goodness of fit" with caregivers).

### Attachment
Harlow's monkeys preferred a soft cloth "mother" to a wire one that gave milk, showing that **contact comfort** matters. Ainsworth's **Strange Situation** identified patterns:
| Style | Behavior |
| --- | --- |
| **Secure** | Uses caregiver as a secure base; comforted on return |
| **Anxious-ambivalent** | Very distressed; hard to soothe on return |
| **Avoidant** | Little distress; ignores caregiver |
| **Disorganized** | Inconsistent, confused behavior |

Secure attachment is linked to caregivers' sensitivity and to better later social outcomes; but attachment is not destiny and children are resilient.

### Parenting styles (Baumrind)
**Authoritative** (warm and firm; best outcomes on average), **authoritarian** (strict, low warmth), **permissive** (warm, few limits). Effects vary by culture.

### Self-awareness
Around 18 months, children recognize themselves in a mirror (the "rouge test"), and gender identity and self-concept develop over the preschool years.
`,
          q: [
            mc('Which parenting style combines warmth with clear limits?', 'Authoritative', 'It is associated with the best average outcomes.', [
              ['Authoritarian', 'It is strict with low warmth.'],
              ['Permissive', 'It has few limits.'],
            ]),
            mc('In the Strange Situation, an infant who is not distressed when the caregiver leaves and ignores her on return is classified as', 'Avoidant', 'The infant shows little emotional response.', [
              ['Secure', 'Secure infants seek comfort on return.'],
              ['Anxious-ambivalent', 'These infants are highly distressed.'],
            ]),
          ],
        },
      ],
    },
    29: {
      summary: 'Adolescence: brain, identity and moral reasoning.',
      sessions: [
        {
          t: 'Development during adolescence',
          s: 'Puberty, identity and Kohlberg\'s moral stages.',
          md: `
## Adolescence

### Physical and brain development
**Puberty** brings rapid growth and sexual maturation. The **prefrontal cortex** (planning, impulse control) matures into the mid-20s, while emotional and reward systems develop earlier, which helps explain risk-taking.

### Identity
Erikson: **identity vs. role confusion**. Marcia described four identity statuses: *diffusion*, *foreclosure*, *moratorium* and *achievement*. Peers become more influential.

### Moral reasoning (Kohlberg)
Presented moral dilemmas (such as the Heinz dilemma: should a man steal a drug to save his wife?). What matters is the **reasoning**, not the answer.
| Level | Reasoning |
| --- | --- |
| **Preconventional** | Avoiding punishment; getting rewards |
| **Conventional** | Following rules and social expectations; being a good citizen |
| **Postconventional** | Principles of justice and rights that may override laws |

### Criticisms
- **Gilligan:** the theory underestimates reasoning based on care and relationships.
- It reflects **Western** cultural values; people do not always act as they reason.
`,
          q: [
            mc('A teen reasons that Heinz should not steal the drug because he might be punished. Which level is this?', 'Preconventional', 'The reasoning focuses on punishment.', [
              ['Conventional', 'It would focus on rules and social order.'],
              ['Postconventional', 'It would focus on universal principles.'],
            ]),
            mc('Why might adolescents be more prone to risk-taking?', 'Reward systems mature earlier than the prefrontal cortex', 'Control systems are still developing.', [
              ['Their brains are fully developed', 'The prefrontal cortex continues to mature.'],
              ['They have no peer influences', 'Peer influence is strong.'],
            ]),
          ],
        },
      ],
    },
    30: {
      summary: 'Early, middle and late adulthood.',
      sessions: [
        {
          t: 'Adulthood: early, middle and late',
          s: 'Physical change, cognition, social tasks, aging and dying.',
          md: `
## Adulthood

### Erikson's adult tasks
| Stage | Task |
| --- | --- |
| Young adulthood | **Intimacy vs. isolation** |
| Middle adulthood | **Generativity vs. stagnation** (contributing to the next generation) |
| Late adulthood | **Integrity vs. despair** (reviewing life with acceptance) |

### Physical change
Gradual declines in vision (presbyopia), hearing, reaction time and muscle mass; **menopause** in midlife ends fertility. Healthy habits (exercise, social ties, sleep) slow decline.

### Cognition
**Fluid intelligence** and processing speed decline gradually; **crystallized intelligence** (knowledge, vocabulary) remains stable or grows. **Dementia**, such as Alzheimer's disease, is **not** normal aging: it involves serious loss of memory and function. Anyone concerned about memory changes should consult a doctor.

### Well-being in later life
Many older adults report **high life satisfaction** and emotional stability. Staying active, connected and purposeful predicts successful aging.

### Death and grief
Kübler-Ross proposed five "stages" of dying (denial, anger, bargaining, depression, acceptance), but reactions vary widely: there is no single correct way to grieve.
`,
          q: [
            mc('Which ability tends to remain stable or increase in older adulthood?', 'Crystallized intelligence', 'Accumulated knowledge and vocabulary.', [
              ['Fluid intelligence', 'It declines gradually.'],
              ['Reaction time', 'It slows with age.'],
            ]),
            mc('Erikson\'s crisis of middle adulthood is', 'Generativity vs. stagnation', 'It concerns contributing to others and the future.', [
              ['Intimacy vs. isolation', 'This belongs to young adulthood.'],
              ['Integrity vs. despair', 'This belongs to late adulthood.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 9 assessment · Lifespan development',
    tasks: [
      mc('Cross-sectional studies of development have a problem that longitudinal studies avoid. What is it?', 'Differences between age groups may reflect generation (cohort) rather than age', 'Different cohorts grew up in different eras.', [
        ['They take too long', 'Longitudinal studies take longer.'],
        ['They lose participants over time', 'This is a longitudinal problem.'],
        ['They cannot compare ages', 'They compare ages directly.'],
      ]),
      mc('Which substance exposure during pregnancy is a known cause of fetal alcohol spectrum disorders?', 'Alcohol', 'It is a teratogen.', [
        ['Vitamin D', 'It is not a teratogen at normal levels.'],
        ['Exercise', 'It is generally beneficial.'],
        ['Sunlight', 'It is not a cause.'],
      ]),
      mc('A toddler looks for a toy that was hidden under a blanket. This shows understanding of', 'Object permanence', 'Objects continue to exist out of sight.', [
        ['Conservation', 'This is later.'],
        ['Egocentrism', 'This is a preoperational feature.'],
        ['Formal operations', 'This is adolescent reasoning.'],
      ]),
      mc('A preschooler believes that everyone sees what she sees. This is', 'Egocentrism', 'A feature of the preoperational stage.', [
        ['Accommodation', 'This is changing schemas.'],
        ['Conservation', 'This is a later ability.'],
        ['Generativity', 'This is an adult task.'],
      ]),
      mc('Ainsworth\'s Strange Situation is used to assess', 'Attachment', 'It observes infant reactions to separation and reunion.', [
        ['Intelligence', 'Not its purpose.'],
        ['Moral reasoning', 'Kohlberg studied this.'],
        ['Temperament only', 'It assesses attachment.'],
      ]),
      mc('Kohlberg scored moral reasoning according to', 'The reasoning behind a decision, not the decision itself', 'The justification determines the level.', [
        ['Whether the person chose to steal', 'The answer is not scored.'],
        ['The person\'s age', 'Age is not the criterion.'],
        ['The person\'s gender', 'Not a criterion.'],
      ]),
      mc('Which is true about aging and intelligence?', 'Crystallized intelligence remains stable while fluid intelligence tends to decline', 'The two change differently.', [
        ['All mental abilities decline equally', 'They do not.'],
        ['Intelligence increases steadily after 60', 'Fluid intelligence declines.'],
        ['Memory loss is always normal', 'Dementia is not normal aging.'],
      ]),
      tf('There is one correct sequence of stages that all grieving people go through.', false, 'People grieve in many different ways. The "five stages" are not a universal sequence.', 'Correct. Grief varies widely between individuals and cultures.'),
    ],
  },
};
