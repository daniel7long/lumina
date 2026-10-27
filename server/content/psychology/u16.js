import { mc, tf } from '../builder.js';

export default {
  summary: 'Investigate consciousness: what it is, how sleep and dreaming restore us, and how psychoactive drugs alter the mind and brain.',
  modules: {
    57: {
      summary: 'The mind–body problem and the unconscious.',
      sessions: [
        {
          t: 'Introduction to consciousness',
          s: 'Dualism, monism, awareness and the unconscious.',
          md: `
## What is consciousness?

**Consciousness** is our subjective awareness of ourselves and the environment: sensations, thoughts and feelings.

### Mind and body
- **Dualism** (Descartes): mind and body are separate kinds of things.
- **Monism**: mind and body are one. Modern neuroscience takes this view: mental states arise from, or are identical with, brain activity. Evidence: brain damage, anesthesia and stimulation change consciousness.

### Levels of awareness
- **Attention** limits what we are conscious of at any moment (e.g. the cocktail-party effect).
- **Automatic processing** occurs with little awareness.
- **Freud:** the **conscious**, **preconscious** and **unconscious** (the "iceberg"), with the unconscious harboring repressed wishes. Many of his specific ideas lack scientific support.
- **Modern view:** the **cognitive unconscious**: much information processing (perception, priming, habits) occurs outside awareness.

### Altered states
Sleep, dreaming, hypnosis, meditation and drug use produce different states of consciousness. Researchers study consciousness using **neural correlates** (e.g. fMRI, EEG), but the "hard problem" of why brain activity produces subjective experience is unsolved.
`,
          q: [
            mc('The belief that the mind and body are separate kinds of things is', 'Dualism', 'Associated with Descartes.', [
              ['Monism', 'Monism holds that they are one.'],
              ['Behaviorism', 'A different perspective.'],
            ]),
            mc('Modern psychology generally views the unconscious as', 'Information processing that occurs outside awareness', 'The cognitive unconscious.', [
              ['A hidden storehouse of repressed wishes proven by experiments', 'Freud\'s specific claims are poorly supported.'],
              ['Nonexistent', 'Much processing occurs without awareness.'],
            ]),
          ],
        },
      ],
    },
    58: {
      summary: 'Sleep stages, dreams and sleep problems.',
      sessions: [
        {
          t: 'Sleeping and dreaming',
          s: 'Sleep stages, theories of dreams, deprivation and everyday application.',
          md: `
## Sleep

### Rhythm
The **circadian rhythm** is a roughly 24-hour cycle controlled by the **suprachiasmatic nucleus** in the hypothalamus, responding to light. Darkness triggers **melatonin**.

### Stages
| Stage | Features |
| --- | --- |
| **NREM 1** | Light sleep, drifting |
| **NREM 2** | Sleep spindles; most of the night |
| **NREM 3** | Deep, **slow-wave** sleep; physical restoration |
| **REM** | Rapid eye movements, vivid dreams, brain active, muscles paralyzed; important for memory and emotion |

A cycle lasts about **90 minutes**; deep sleep is more common early in the night and REM later. Most adults need **7–9 hours**.

### Dream theories
- **Freud:** disguised wish fulfillment (little support).
- **Activation-synthesis:** the brain makes a story from random neural activity.
- **Problem-solving / memory consolidation:** dreams reflect processing of waking concerns.

### Costs of sleep deprivation
Poor attention, memory and mood, slower reaction time (impairment similar to alcohol intoxication after long wakefulness), weakened immunity, and higher risks for accidents, obesity, diabetes and depression.

### Common problems
**Insomnia**, **sleep apnea** (breathing pauses), **narcolepsy**. Persistent problems should be assessed by a doctor.

### Better sleep
Regular schedule, dark and cool room, no screens or caffeine late, daily activity, and CBT for insomnia.
`,
          q: [
            mc('Which sleep stage is most associated with vivid dreaming and an active brain?', 'REM sleep', 'It involves rapid eye movements.', [
              ['NREM stage 3', 'This is deep slow-wave sleep.'],
              ['NREM stage 1', 'This is light sleep.'],
            ]),
            mc('Which brain structure keeps the 24-hour circadian rhythm?', 'Suprachiasmatic nucleus', 'It responds to light.', [
              ['Amygdala', 'It handles emotion.'],
              ['Cerebellum', 'It coordinates movement.'],
            ]),
          ],
        },
      ],
    },
    59: {
      summary: 'How psychoactive drugs affect the brain and behavior.',
      sessions: [
        {
          t: 'Psychoactive drugs',
          s: 'Classes, effects, addiction and risks.',
          md: `
## Psychoactive drugs

**Psychoactive drugs** change the brain's chemistry, altering mood, perception and behavior, mostly by affecting neurotransmitters.

| Class | Effect | Examples |
| --- | --- | --- |
| **Depressants** | Slow the nervous system | Alcohol, benzodiazepines |
| **Opioids** | Pain relief, euphoria; very high overdose risk | Heroin, fentanyl, prescription painkillers |
| **Stimulants** | Increase arousal | Caffeine, nicotine, cocaine, amphetamines |
| **Hallucinogens** | Alter perception | LSD, psilocybin |
| **Cannabis** | Mixed effects | Marijuana (THC) |

### Dependence and addiction
Repeated use causes **tolerance** (needing more for the same effect) and **withdrawal** (symptoms when stopping). Many drugs increase **dopamine** in the brain's reward circuit. **Addiction** is a chronic condition of compulsive use despite harm, influenced by genes, mental health, stress, environment and age of first use (adolescent brains are more vulnerable).

### Risks
Each class has risks: accidents, overdose (especially with opioids and mixing depressants such as alcohol with other sedatives), mental health effects, and legal and social harms. Legal drugs like alcohol and tobacco cause the most deaths overall.

### Getting help
Addiction is treatable: behavioral therapies, medications and peer support help. In the US, **SAMHSA's National Helpline is 1-800-662-HELP (4357)**, free and confidential; elsewhere, contact a doctor or local services.
`,
          q: [
            mc('The need for increasing amounts of a drug to get the same effect is called', 'Tolerance', 'It develops with repeated use.', [
              ['Withdrawal', 'This is the symptoms of stopping.'],
              ['Extinction', 'This is a learning term.'],
            ]),
            mc('Which class of drug slows the nervous system?', 'Depressants such as alcohol', 'They reduce arousal.', [
              ['Stimulants such as caffeine', 'They increase arousal.'],
              ['Hallucinogens such as LSD', 'They alter perception.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 16 assessment · Consciousness',
    tasks: [
      mc('A neuroscientist says mental states are produced by brain activity. This is a form of', 'Monism', 'Mind and body are one.', [
        ['Dualism', 'Dualism separates them.'],
        ['Structuralism', 'A historical school.'],
        ['Behaviorism', 'A different perspective.'],
      ]),
      mc('You can hear your name in a noisy room, even when focusing on another conversation. This shows', 'Selective attention (the cocktail-party effect)', 'Important information can capture attention.', [
        ['Dissociation', 'A different phenomenon.'],
        ['Hypnosis', 'Not relevant.'],
        ['Sleepwalking', 'Not relevant.'],
      ]),
      mc('In which stage does slow-wave (deep) sleep occur?', 'NREM stage 3', 'It is important for physical restoration.', [
        ['REM', 'REM involves active brain and dreaming.'],
        ['NREM stage 1', 'This is light sleep.'],
        ['Wakefulness', 'Not a sleep stage.'],
      ]),
      mc('Which theory of dreams states that dreams are the brain\'s attempt to make sense of random neural activity?', 'Activation-synthesis', 'The brain builds a story from signals.', [
        ['Wish fulfillment', 'Freud\'s theory.'],
        ['Classical conditioning', 'Not a dream theory.'],
        ['Cognitive dissonance', 'Not a dream theory.'],
      ]),
      mc('Which is a consequence of chronic sleep deprivation?', 'Poor attention, memory and mood and a higher risk of accidents', 'Sleep affects many functions.', [
        ['Improved reaction time', 'It slows reaction time.'],
        ['Stronger immunity', 'It weakens immunity.'],
        ['Better concentration', 'It worsens concentration.'],
      ]),
      mc('Which drug class is most associated with a high risk of fatal overdose through slowed breathing?', 'Opioids (and depressants)', 'They suppress the brain\'s breathing control.', [
        ['Caffeine', 'Not typically fatal in ordinary use.'],
        ['Hallucinogens only', 'Not the main overdose risk.'],
        ['Melatonin', 'Not a drug of this type.'],
      ]),
      mc('What is the best response to someone worried about their own drug or alcohol use?', 'Seek support from a doctor, counsellor or helpline, as addiction is treatable', 'Help is available and effective.', [
        ['Keep it secret', 'Support helps recovery.'],
        ['Assume that nothing helps', 'Treatment works for many.'],
        ['Use more to cope', 'This worsens problems.'],
      ]),
      tf('Addiction is simply a lack of willpower and cannot be treated.', false, 'Addiction is a chronic condition involving brain, psychological and social factors, and it is treatable with therapy, medication and support.', 'Correct. Addiction is a treatable medical and psychological condition.'),
    ],
  },
};
