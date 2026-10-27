import { mc, tf } from '../builder.js';

export default {
  summary: 'Explore what it means to be well: balance across life, the signs of imbalance, stress and pain, and evidence-based practices such as mindfulness.',
  modules: {
    40: {
      summary: 'The concept of wellness and its dimensions.',
      sessions: [
        {
          t: 'Wellness and balance',
          s: 'Homeostasis and the dimensions of wellness.',
          md: `
## What is wellness?

**Wellness** is an active process of making choices toward a full, healthy life; it is more than the absence of illness. It involves **balance** across areas of life.

### Homeostasis
**Homeostasis** is the body's tendency to maintain a stable internal state (temperature, blood sugar, hydration). Many wellness practices help the body and mind return to balance.

### Dimensions of wellness
| Dimension | Examples |
| --- | --- |
| **Physical** | Activity, nutrition, sleep |
| **Emotional** | Understanding and managing feelings |
| **Intellectual** | Learning, curiosity |
| **Social** | Supportive relationships |
| **Spiritual / meaning** | Purpose, values |
| **Occupational** | Satisfying work or study |
| **Environmental** | Safe, healthy surroundings |

The dimensions **interact**: poor sleep affects mood, which affects relationships. Wellness is a **lifelong, dynamic** process with ups and downs, not a fixed destination.
`,
          q: [
            mc('Which best describes wellness?', 'An active, ongoing process of balance across life dimensions', 'It is more than the absence of illness.', [
              ['The absence of any disease', 'Wellness is broader.'],
              ['A fixed state reached once', 'It is dynamic.'],
            ]),
            mc('Maintaining body temperature within a narrow range is an example of', 'Homeostasis', 'The body maintains stable internal conditions.', [
              ['Classical conditioning', 'This is learning.'],
              ['Habituation', 'This is reduced response to repeated stimuli.'],
            ]),
          ],
        },
      ],
    },
    41: {
      summary: 'Lifestyle and mind–body practices that support wellness.',
      sessions: [
        {
          t: 'Maintaining balance and optimal wellness',
          s: 'Lifestyle choices and the mind–body connection.',
          md: `
## Supporting wellness

### Lifestyle choices
| Area | Evidence-based guidance |
| --- | --- |
| **Physical activity** | At least 150 minutes of moderate activity weekly (WHO guideline) improves mood, sleep and health |
| **Sleep** | Most adults need 7–9 hours |
| **Nutrition** | A varied diet with plenty of plants; limit excess alcohol |
| **Social connection** | Strong ties predict better health and longevity |
| **Time in nature, hobbies, meaning** | Reduce stress and boost well-being |

### Mind–body connection
Thoughts and emotions affect the body (stress raises heart rate and weakens immunity over time), and the body affects mood (exercise reduces depressive symptoms).

### Therapies and practices
Different approaches have different levels of evidence: **psychotherapy** (e.g. CBT), **meditation and mindfulness**, **yoga**, **massage**, **relaxation training** and **biofeedback**. Check the evidence and consult qualified professionals; "natural" does not automatically mean safe or effective, and complementary practices should not replace needed medical care.
`,
          q: [
            mc('How much moderate physical activity per week does the WHO recommend for adults?', 'At least 150 minutes', 'This guideline supports health and mood.', [
              ['About 10 minutes', 'Too little.'],
              ['At least 24 hours', 'Unrealistic.'],
            ]),
            mc('Which is a sound approach to choosing a wellness therapy?', 'Check the evidence and consult qualified professionals', 'Not all practices have equal support.', [
              ['Choose whatever is labeled natural', 'Natural does not imply safe or effective.'],
              ['Stop all medical care in favor of it', 'It should complement, not replace, medical care.'],
            ]),
          ],
        },
      ],
    },
    42: {
      summary: 'Recognizing signs of imbalance.',
      sessions: [
        {
          t: 'Being out of balance',
          s: 'Physical, emotional and social signs.',
          md: `
## Signs of imbalance

When demands outweigh resources for too long, balance is lost. Signs appear in several areas:

| Area | Examples |
| --- | --- |
| **Physical** | Persistent fatigue, headaches, muscle tension, sleep changes, appetite changes, frequent illness |
| **Emotional / cognitive** | Irritability, worry, low mood, trouble concentrating, feeling overwhelmed |
| **Social** | Withdrawing from friends, more conflict, neglecting responsibilities |
| **Behavioral** | Increased use of alcohol or other substances, avoidance, procrastination |

Imbalance can be **temporary** (an exam week) or **chronic**. Noticing early signs allows early action: adjusting the load, restoring sleep, connecting with others and using coping skills.

### When to seek help
If symptoms last for weeks, interfere with daily life, or include thoughts of harming yourself, contact a doctor, counsellor or mental health professional. Campus counselling centres offer support. **In the US, call or text 988 (Suicide & Crisis Lifeline) if you or someone you know is in crisis; elsewhere, contact local emergency services or a crisis line.**
`,
          q: [
            mc('Which of these could be a social sign of imbalance?', 'Withdrawing from friends and activities', 'Social withdrawal is a common sign.', [
              ['Joining a new club', 'This is a positive step.'],
              ['Exercising regularly', 'This is a physical wellness behavior.'],
            ]),
            mc('Symptoms of imbalance last for several weeks and interfere with daily life. What is the best step?', 'Talk to a doctor, counsellor or mental health professional', 'Professional support is appropriate.', [
              ['Wait and hope it improves on its own', 'Persistent symptoms deserve attention.'],
              ['Rely on alcohol to cope', 'This tends to worsen problems.'],
            ]),
          ],
        },
      ],
    },
    43: {
      summary: 'The stress response and coping.',
      sessions: [
        {
          t: 'Stress',
          s: 'Responses, appraisal, hormones and coping.',
          md: `
## Stress

**Stress** is the physical and psychological response to demands (stressors) perceived as taxing.

### Kinds
- **Everyday stress** (hassles), **extreme stress** (trauma) and **chronic stress**.
- **Eustress** (motivating, positive) vs. **distress** (harmful).

### Appraisal
Lazarus: stress depends on **primary appraisal** ("Is this a threat?") and **secondary appraisal** ("Can I cope?").

### The stress response
- **Fight or flight:** the sympathetic system and adrenal glands release adrenaline and cortisol; heart rate, breathing and alertness rise.
- **Tend and befriend** (Taylor): seeking social support, more common in women under stress.
- **General adaptation syndrome** (Selye): **alarm → resistance → exhaustion**. Prolonged stress weakens immunity and raises risk for heart disease, depression and anxiety.

### Coping and regulation
| Strategy | Examples |
| --- | --- |
| **Problem-focused** | Planning, time management, seeking information |
| **Emotion-focused** | Relaxation, support, reframing |

**Cognitive reappraisal** (reinterpreting a situation) is generally more effective for long-term emotion regulation than **suppression** (hiding feelings). Exercise, sleep, social support and mindfulness reduce stress.
`,
          q: [
            mc('In Selye\'s General Adaptation Syndrome, prolonged stress eventually leads to the stage of', 'Exhaustion', 'Resources become depleted.', [
              ['Alarm', 'This is the first stage.'],
              ['Resistance', 'This is the second stage.'],
            ]),
            mc('Reinterpreting an exam as a challenge instead of a threat is an example of', 'Cognitive reappraisal', 'It changes the emotional impact.', [
              ['Suppression', 'Suppression hides the emotion.'],
              ['Denial of the exam', 'Reappraisal acknowledges the situation.'],
            ]),
          ],
        },
      ],
    },
    44: {
      summary: 'Understanding and managing pain.',
      sessions: [
        {
          t: 'Pain management',
          s: 'Acute and chronic pain and biopsychosocial approaches.',
          md: `
## Pain

**Acute pain** warns of injury and fades as tissue heals. **Chronic pain** lasts beyond normal healing (typically over three months) and can persist without ongoing damage.

### Why chronic pain persists
Repeated pain signals can make the nervous system **more sensitive** (central sensitization). Stress, poor sleep, low mood, fear of movement and inactivity amplify pain, and pain in turn worsens sleep, mood, work and relationships.

### The biopsychosocial approach
Pain is shaped by biology, psychology and social context (gate-control theory, Unit 4).

| Approach | Examples |
| --- | --- |
| **Medical** | Medications (taken as prescribed; opioids carry serious risks), injections, procedures |
| **Physical** | Graded exercise, physiotherapy |
| **Psychological** | **CBT**, acceptance and commitment therapy, relaxation, mindfulness |
| **Complementary** | Acupuncture, massage (evidence is mixed) |

The best programs combine approaches and aim to improve **function and quality of life**, not only reduce pain intensity. Anyone with persistent pain should be assessed by a health professional.
`,
          q: [
            mc('Chronic pain is typically defined as pain that', 'Persists beyond the expected healing time (about three months)', 'It outlasts normal recovery.', [
              ['Lasts for one day', 'That would be acute.'],
              ['Always indicates ongoing tissue damage', 'Not necessarily.'],
            ]),
            mc('Why is a combined approach often used for chronic pain?', 'Pain is influenced by biological, psychological and social factors', 'Treatment targets several factors.', [
              ['Pain is only a physical signal', 'Psychology matters too.'],
              ['Medication always eliminates pain', 'It does not.'],
            ]),
          ],
        },
      ],
    },
    45: {
      summary: 'Mindfulness and its effects.',
      sessions: [
        {
          t: 'Mindfulness',
          s: 'What it is, how it is practiced and what the evidence says.',
          md: `
## Mindfulness

**Mindfulness** is paying attention to the present moment, on purpose and without judgment (Kabat-Zinn).

### Practices
- **Mindful breathing:** attend to the breath; when the mind wanders, notice and gently return.
- **Body scan:** move attention through the body.
- **Mindful eating and walking.**
- Structured programs such as **MBSR** (mindfulness-based stress reduction) and **MBCT** (cognitive therapy).

### A short exercise to try
Sit comfortably for two minutes. Notice the sensation of breathing. When a thought arises, label it ("thinking") and return to the breath. Afterwards, note what you observed: how often did your mind wander? Were you able to be non-judgmental about it?

### Evidence
Studies show benefits for **stress, anxiety, depressive relapse, attention, sleep and pain coping**, with small to moderate effects. Brain imaging suggests changes in attention and emotion-regulation networks. Limitations: effects are modest, quality of studies varies, and mindfulness is not a cure-all. For people with trauma or severe mental illness, practice should be guided by a qualified professional.
`,
          q: [
            mc('Which best defines mindfulness?', 'Paying attention to the present moment on purpose and without judgment', 'This is Kabat-Zinn\'s definition.', [
              ['Emptying the mind of all thoughts', 'Mindfulness notices thoughts.'],
              ['Planning the future carefully', 'It focuses on the present.'],
            ]),
            mc('What does research suggest about mindfulness?', 'It has small to moderate benefits for stress, anxiety and attention, but is not a cure-all', 'Evidence is promising but modest.', [
              ['It cures every mental illness', 'Evidence does not support this.'],
              ['It has no effect on anything', 'Benefits have been found.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 13 assessment · Wellness',
    tasks: [
      mc('Which sequence correctly lists Selye\'s stages?', 'Alarm, resistance, exhaustion', 'This is the General Adaptation Syndrome.', [
        ['Resistance, alarm, exhaustion', 'Alarm comes first.'],
        ['Exhaustion, alarm, resistance', 'Exhaustion comes last.'],
        ['Alarm, exhaustion, resistance', 'Exhaustion follows resistance.'],
      ]),
      mc('A student makes a study plan to deal with an upcoming exam. This is', 'Problem-focused coping', 'It directly addresses the stressor.', [
        ['Emotion-focused coping', 'It would address feelings.'],
        ['Suppression', 'Not relevant.'],
        ['Denial', 'Not relevant.'],
      ]),
      mc('Sleep is part of which dimension of wellness?', 'Physical', 'Along with activity and nutrition.', [
        ['Occupational', 'It concerns work.'],
        ['Spiritual', 'It concerns meaning.'],
        ['Environmental', 'It concerns surroundings.'],
      ]),
      mc('Which is an example of tend-and-befriend?', 'Seeking out friends and caring for others under stress', 'Taylor\'s alternative to fight or flight.', [
        ['Running away from danger', 'This is flight.'],
        ['Confronting a threat', 'This is fight.'],
        ['Freezing', 'Not a tend-and-befriend response.'],
      ]),
      mc('Which approach to chronic pain is most consistent with the biopsychosocial model?', 'A program combining medical care, exercise and psychological skills', 'It addresses multiple factors.', [
        ['Rest and avoidance of all activity', 'This often worsens chronic pain.'],
        ['Medication only', 'It ignores other factors.'],
        ['Ignoring the pain', 'This is not effective.'],
      ]),
      mc('A person who practices mindfulness notices that her mind has wandered. What is the recommended response?', 'Notice it without judgment and gently return attention', 'This is the core skill.', [
        ['Criticize herself', 'This is not non-judgmental.'],
        ['Stop practicing', 'Wandering is normal.'],
        ['Force the thoughts out', 'Mindfulness is not suppression.'],
      ]),
      tf('Persistent symptoms of imbalance that interfere with daily life should be taken seriously and discussed with a health professional.', true, 'Correct. Early help leads to better outcomes.', 'Not quite. Persistent, impairing symptoms warrant professional support.'),
    ],
  },
};
