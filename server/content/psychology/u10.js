import { mc, tf } from '../builder.js';

export default {
  summary: 'Understand how emotions arise and are expressed, what makes us happy, and what drives our behavior.',
  modules: {
    31: {
      summary: 'Theories and expression of emotion.',
      sessions: [
        {
          t: 'The experience of emotion',
          s: 'Theories, brain pathways, expression and misattribution.',
          md: `
## Emotion

An emotion has **physiological arousal**, a **cognitive appraisal** and **behavioral expression**.

### Theories
| Theory | Order of events |
| --- | --- |
| **James–Lange** | Arousal first, then emotion ("I tremble, so I am afraid") |
| **Cannon–Bard** | Arousal and emotion occur **at the same time** |
| **Schachter–Singer (two-factor)** | Arousal + a **cognitive label** from the situation |

**Misattribution of arousal:** in the Dutton and Aron "bridge" study, men on a wobbly suspension bridge were more likely to call a woman researcher (some interpreted the arousal as attraction) than men on a stable bridge.

### Two brain routes (LeDoux)
- **Fast ("low road")**: thalamus → **amygdala**; an immediate, rough reaction.
- **Slow ("high road")**: thalamus → **cortex** → amygdala; a more accurate appraisal.

### Expression
**Ekman** found six facial expressions recognized across cultures: happiness, sadness, fear, anger, surprise and disgust. **Display rules** are cultural norms about when and how to show emotion. Emotions are also conveyed by body posture, voice and text.
`,
          q: [
            mc('Which theory says that the physical response comes first, and the emotion follows as we interpret it?', 'James–Lange theory', 'Arousal precedes emotion.', [
              ['Cannon–Bard theory', 'It says they occur simultaneously.'],
              ['Schachter–Singer theory', 'It adds a cognitive label.'],
            ]),
            mc('The fast "low road" of emotion goes from the thalamus to the', 'Amygdala', 'It enables quick emotional reactions.', [
              ['Hippocampus', 'It forms explicit memories.'],
              ['Frontal cortex', 'This is the slower route.'],
            ]),
          ],
        },
      ],
    },
    32: {
      summary: 'What contributes to happiness.',
      sessions: [
        {
          t: 'Positive emotions and happiness',
          s: 'Money, relationships and forecasting.',
          md: `
## Happiness

**Subjective well-being** combines life satisfaction with frequent positive and infrequent negative emotions.

### Findings
- **Money and happiness:** Rising income improves well-being most when it lifts people out of poverty. At higher incomes, gains are smaller (diminishing returns), and the link is weaker than most people expect.
- **Relationships:** Strong social ties and social support are among the best predictors of happiness.
- **Hedonic adaptation:** We adapt to both good and bad changes and return near our baseline.
- **Affective forecasting:** We **overestimate** how strongly and how long future events will affect our feelings (the **impact bias**).
- **Practices linked to higher well-being:** gratitude, acts of kindness, meaningful activity, exercise, savoring experiences. Seligman's **PERMA** model: positive emotion, engagement, relationships, meaning, accomplishment.

Genes (a temperament set-point), circumstances and intentional activities all contribute.
`,
          q: [
            mc('Predicting that a promotion will make you much happier for years, and then finding the boost fades quickly, illustrates', 'Affective forecasting error (impact bias) and hedonic adaptation', 'We overestimate the intensity and duration of future feelings.', [
              ['Confirmation bias', 'This concerns seeking supporting evidence.'],
              ['The Flynn effect', 'This concerns IQ over time.'],
            ]),
            mc('Which factor is one of the strongest predictors of happiness?', 'Strong social relationships and support', 'Connection is a consistent finding.', [
              ['Owning more possessions', 'The link is weak.'],
              ['Avoiding all stress', 'This is impossible and not predictive.'],
            ]),
          ],
        },
      ],
    },
    33: {
      summary: 'Theories of motivation, hunger, sex and attraction.',
      sessions: [
        {
          t: 'Human motivation',
          s: 'Needs, drives, hunger, eating disorders, sexuality and attraction.',
          md: `
## Motivation

### Theories
- **Instinct:** inborn programmes.
- **Drive reduction:** a physiological need creates a drive (hunger) that we reduce.
- **Arousal theory:** we seek an optimal level of stimulation (**Yerkes–Dodson**: performance is best at moderate arousal).
- **Maslow's hierarchy:** physiological → safety → belonging → esteem → self-actualization (a useful but not strictly ordered scheme).
- **Self-determination theory:** needs for **autonomy, competence and relatedness**. **Intrinsic** motivation can be weakened by excessive external rewards (**overjustification effect**).

### Hunger
The hypothalamus integrates signals such as **ghrelin** (increases hunger) and **leptin** (signals fullness), plus blood glucose, culture and learning.

### Eating disorders
**Anorexia nervosa**, **bulimia nervosa** and **binge-eating disorder** are serious conditions with biological, psychological and sociocultural contributors. They are treatable: anyone concerned about their own or another person's eating should seek help from a doctor or a mental health professional.

### Sexual behavior and orientation
Sexual response involves arousal and the brain's reward systems. Research shows that sexual orientation is a natural variation shaped by biological and environmental factors; it is not a choice or a disorder, and attempts to change it are not effective.

### Attraction
Attraction is increased by **proximity**, **similarity**, **mere exposure**, **reciprocal liking** and physical attractiveness, although long-term bonds rely on other factors such as trust and compassion.
`,
          q: [
            mc('Which hormone signals fullness and reduces hunger?', 'Leptin', 'Ghrelin has the opposite effect.', [
              ['Ghrelin', 'It increases hunger.'],
              ['Adrenaline', 'It prepares the body for action.'],
            ]),
            mc('A child loves drawing but loses interest after being paid for each drawing. This illustrates', 'The overjustification effect', 'External rewards can undermine intrinsic motivation.', [
              ['Drive reduction', 'It concerns physiological needs.'],
              ['Extinction', 'It concerns conditioned responses.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 10 assessment · Emotion and motivation',
    tasks: [
      mc('According to Schachter and Singer, emotion depends on', 'Physiological arousal and a cognitive label for it', 'Both elements are required.', [
        ['Arousal alone', 'The label also matters.'],
        ['Thoughts alone', 'Arousal also matters.'],
        ['Facial expression only', 'Not their claim.'],
      ]),
      mc('Which emotion is NOT among the six basic expressions identified by Ekman?', 'Pride', 'The six are happiness, sadness, fear, anger, surprise, disgust.', [
        ['Fear', 'This is one of the six.'],
        ['Surprise', 'This is one of the six.'],
        ['Disgust', 'This is one of the six.'],
      ]),
      mc('People often overestimate how long they will feel upset after a negative event. This is', 'The impact bias in affective forecasting', 'We underestimate our ability to adapt.', [
        ['The halo effect', 'A different bias.'],
        ['Cognitive dissonance', 'A different concept.'],
        ['Reciprocal altruism', 'A different concept.'],
      ]),
      mc('According to research on money and happiness,', 'Income raises well-being most at low levels, with smaller gains at higher levels', 'Diminishing returns.', [
        ['More money always raises happiness at the same rate', 'The effect diminishes.'],
        ['Money is unrelated to well-being', 'It matters, especially at low incomes.'],
        ['Rich people are never happy', 'Not supported.'],
      ]),
      mc('Performing best under moderate levels of arousal is described by', 'The Yerkes–Dodson law', 'The relationship follows an inverted U.', [
        ['Maslow\'s hierarchy', 'It concerns need levels.'],
        ['The James–Lange theory', 'It concerns emotion.'],
        ['Weber\'s law', 'It concerns sensory differences.'],
      ]),
      mc('Which is the best-supported statement about sexual orientation?', 'It is a natural variation influenced by biological and environmental factors, not a choice or a disorder', 'Attempts to change it are ineffective.', [
        ['It is a choice that therapy can change', 'This is not supported.'],
        ['It is purely caused by parenting', 'No evidence supports this.'],
        ['It is a mental disorder', 'Not considered a disorder.'],
      ]),
      tf('Offering large rewards for an activity people already enjoy can reduce their intrinsic motivation.', true, 'Correct: this is the overjustification effect.', 'Not quite. External rewards can undermine intrinsic interest.'),
    ],
  },
};
