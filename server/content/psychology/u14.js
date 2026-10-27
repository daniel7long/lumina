import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how psychological disorders are defined and classified, and the main features and causes of major categories. This unit is educational and not a basis for diagnosing yourself or others.',
  modules: {
    46: {
      summary: 'What counts as a disorder and how we study them.',
      sessions: [
        {
          t: 'Defining psychological disorders',
          s: 'Criteria, terms, the biopsychosocial model and stigma.',
          md: `
## What is a psychological disorder?

A **psychological disorder** is a pattern of thoughts, feelings or behaviors that causes significant **distress or impairment** and is not simply an expected response to a stressor or a cultural norm. Common criteria (the "four Ds"): **Deviance** (atypical), **Distress**, **Dysfunction** (interferes with life) and sometimes **Danger**. Deviance alone is not a disorder.

### Classification
The **DSM-5** (American Psychiatric Association) and the **ICD-11** (WHO) list diagnostic criteria. A diagnosis should be made only by a trained professional.

### Key terms
- **Prevalence:** how common a disorder is in a population.
- **Comorbidity:** having more than one disorder at once (common).
- **Etiology:** causes.

Mental health conditions are common: roughly **one in five** adults has a diagnosable condition in a given year.

### Biopsychosocial model
Disorders usually arise from interacting **biological** (genes, brain chemistry), **psychological** (thoughts, trauma, coping) and **social** (stress, relationships, culture) factors. The **diathesis–stress model** says that vulnerability combines with stress.

### Stigma
Stigma discourages people from seeking help. Recovery is common with treatment and support, and people with mental health conditions are more likely to be victims than perpetrators of violence.
`,
          q: [
            mc('Which of these is NOT sufficient alone to define a disorder?', 'Behavior that is merely unusual', 'Deviance without distress or impairment is not a disorder.', [
              ['Significant distress', 'This is one criterion.'],
              ['Marked impairment of daily functioning', 'This is one criterion.'],
            ]),
            mc('The diathesis–stress model proposes that disorders arise from', 'Vulnerability combined with stressful experiences', 'Both factors interact.', [
              ['Genes only', 'Stress also matters.'],
              ['Stress only', 'Vulnerability also matters.'],
            ]),
          ],
        },
      ],
    },
    47: {
      summary: 'Anxiety, obsessive-compulsive and trauma-related disorders.',
      sessions: [
        {
          t: 'Anxiety, OCD and PTSD',
          s: 'Features and causes.',
          md: `
## Anxiety and related disorders

Fear and anxiety are normal. They become a **disorder** when they are excessive, persistent and impairing.

| Disorder | Core features |
| --- | --- |
| **Generalized anxiety disorder** | Chronic, hard-to-control worry about many things, with tension and fatigue |
| **Panic disorder** | Sudden panic attacks (racing heart, shortness of breath, fear of losing control) and worry about more attacks |
| **Specific phobia** | Intense fear of a particular object or situation |
| **Social anxiety disorder** | Fear of being judged in social situations |
| **Obsessive-compulsive disorder (OCD)** | **Obsessions** (intrusive thoughts) and **compulsions** (repetitive behaviors or mental acts to reduce anxiety) |
| **Post-traumatic stress disorder (PTSD)** | After trauma: re-experiencing, avoidance, negative mood and thoughts, heightened arousal for over a month |

### Causes
- **Biological:** genetic vulnerability, overactive amygdala, neurotransmitter differences.
- **Learning:** classical conditioning of fear, avoidance reinforced by relief (negative reinforcement).
- **Cognitive:** misinterpreting bodily sensations or ambiguous events as dangerous.

These conditions are among the **most treatable**, usually with CBT, exposure-based therapy and/or medication.
`,
          q: [
            mc('A person has repeated intrusive thoughts about contamination and washes hands for hours to ease the anxiety. Which disorder fits this pattern?', 'Obsessive-compulsive disorder', 'Obsessions and compulsions.', [
              ['Panic disorder', 'Panic disorder involves sudden panic attacks.'],
              ['Specific phobia', 'A phobia concerns fear of an object or situation.'],
            ]),
            mc('Why does avoiding a feared situation maintain anxiety?', 'The relief reinforces avoidance and prevents learning that the situation is safe', 'This is negative reinforcement.', [
              ['Avoidance is always effective', 'It maintains fear.'],
              ['Avoidance increases exposure', 'It reduces exposure.'],
            ]),
          ],
        },
      ],
    },
    48: {
      summary: 'Depression and bipolar disorders.',
      sessions: [
        {
          t: 'Mood disorders',
          s: 'Depression, bipolar disorder and their causes.',
          md: `
## Mood disorders

### Major depressive disorder
At least **two weeks** of depressed mood or loss of interest/pleasure, plus other symptoms: changes in sleep or appetite, fatigue, worthlessness or guilt, poor concentration, psychomotor change and thoughts of death. Depression is more than sadness and is not a weakness.

### Bipolar disorders
Episodes of **mania** (elevated or irritable mood, high energy, decreased need for sleep, risky behavior; at least a week for bipolar I) and usually episodes of depression. **Bipolar II** involves **hypomania** (milder) and depression.

### Causes
- **Biological:** heritability; serotonin, norepinephrine and dopamine systems; stress hormone regulation.
- **Cognitive:** **Beck**: negative thinking about self, world and future; **learned helplessness** (Seligman).
- **Social:** loss, chronic stress, isolation.

Depression and bipolar disorder are treatable with psychotherapy (CBT, interpersonal therapy), medication and lifestyle support.

> **If you or someone you know has thoughts of suicide or self-harm, seek help right away.** In the US call or text **988**; elsewhere contact local emergency services or a local crisis line. Talking about it with a trusted person or professional helps.
`,
          q: [
            mc('Which feature distinguishes bipolar disorder from major depressive disorder?', 'Episodes of mania or hypomania', 'Depression alone does not include mania.', [
              ['Low mood', 'Both can involve low mood.'],
              ['Sleep changes', 'Both can involve sleep change.'],
            ]),
            mc('Beck\'s cognitive explanation of depression emphasizes', 'Negative thinking about self, the world and the future', 'The cognitive triad.', [
              ['Excess dopamine', 'This is not Beck\'s explanation.'],
              ['Unconscious conflict', 'This is psychodynamic.'],
            ]),
          ],
        },
      ],
    },
    49: {
      summary: 'Schizophrenia: symptoms and causes.',
      sessions: [
        {
          t: 'Schizophrenia',
          s: 'Symptoms, onset and causes.',
          md: `
## Schizophrenia

A serious disorder affecting about **1%** of people, usually appearing in the late teens to early 30s. It is **not** "split personality" and most people with schizophrenia are not violent.

### Symptoms
| Type | Examples |
| --- | --- |
| **Positive** (added experiences) | **Hallucinations** (often voices), **delusions** (fixed false beliefs), disorganized speech and behavior |
| **Negative** (reduced functions) | Flat affect, reduced speech, lack of motivation, social withdrawal |
| **Cognitive** | Problems with attention, memory and planning |

### Causes
- **Genetics:** risk is about 10% with a first-degree relative, and about 40–50% for an identical twin, so genes matter but do not determine the outcome.
- **Dopamine hypothesis:** overactivity in some dopamine pathways is linked to positive symptoms.
- **Brain differences:** enlarged ventricles and reduced gray matter in some regions.
- **Environmental risks:** prenatal infection or malnutrition, birth complications, cannabis use in adolescence, urban upbringing, chronic stress.

### Course and treatment
Early treatment with **antipsychotic medication**, psychotherapy, family support and rehabilitation improves outcomes. Many people recover substantially.
`,
          q: [
            mc('Hallucinations and delusions are classified as', 'Positive symptoms', 'They are added experiences.', [
              ['Negative symptoms', 'Negative symptoms are reductions in function.'],
              ['Cognitive symptoms', 'Cognitive symptoms involve thinking processes.'],
            ]),
            mc('Which statement about schizophrenia is correct?', 'Genetic risk is substantial, yet it is not determined by genes alone', 'Even identical twins are not always both affected.', [
              ['It means having multiple personalities', 'This is a common misconception.'],
              ['It is caused entirely by poor parenting', 'This is not supported.'],
            ]),
          ],
        },
      ],
    },
    50: {
      summary: 'Personality disorders and their clusters.',
      sessions: [
        {
          t: 'Personality disorders',
          s: 'Definition and the three clusters.',
          md: `
## Personality disorders

A **personality disorder** is an enduring pattern of inner experience and behavior that is inflexible, deviates from cultural expectations, starts by adolescence or early adulthood and causes distress or impairment in several areas of life.

### The three clusters (DSM-5)
| Cluster | Theme | Disorders |
| --- | --- | --- |
| **A** | Odd or eccentric | Paranoid, schizoid, schizotypal |
| **B** | Dramatic, emotional, erratic | **Antisocial**, **borderline**, histrionic, narcissistic |
| **C** | Anxious or fearful | Avoidant, dependent, obsessive-compulsive personality disorder |

### Notes
- **Borderline personality disorder** features unstable relationships, self-image and emotions, and impulsivity. **Dialectical behavior therapy (DBT)** is an evidence-based treatment.
- **Antisocial personality disorder** involves a persistent disregard for the rights of others.
- Causes combine temperament, genetics, early experience and environment.
- Diagnosis is controversial in some respects (overlap between categories, a dimensional view of traits) and labels can carry stigma. People with these diagnoses can improve with treatment.
`,
          q: [
            mc('Which cluster of personality disorders is characterized by anxious or fearful behavior?', 'Cluster C', 'Avoidant, dependent and obsessive-compulsive.', [
              ['Cluster A', 'Odd or eccentric.'],
              ['Cluster B', 'Dramatic, emotional or erratic.'],
            ]),
            mc('Which therapy was developed for borderline personality disorder and has good evidence?', 'Dialectical behavior therapy', 'It teaches emotion regulation and distress tolerance.', [
              ['Psychoanalysis only', 'DBT is more strongly supported.'],
              ['Exposure therapy for phobias', 'It is not the specific treatment.'],
            ]),
          ],
        },
      ],
    },
    51: {
      summary: 'Neurodevelopmental conditions: ADHD and autism.',
      sessions: [
        {
          t: 'ADHD and autism spectrum disorder',
          s: 'Features, prevalence and debates.',
          md: `
## Neurodevelopmental disorders

These conditions begin in **early development**.

### ADHD
**Attention-deficit/hyperactivity disorder** involves a persistent pattern of **inattention** and/or **hyperactivity-impulsivity** that interferes with functioning, present in more than one setting with several symptoms before age 12. It affects about 5–7% of children and often persists into adulthood. It is highly heritable. Treatment: behavioral strategies, parent training, school supports and often **stimulant medication**.

### Autism spectrum disorder (ASD)
Differences in **social communication and interaction**, plus **restricted, repetitive behaviors and interests** (including sensory differences). It is a **spectrum**: support needs vary widely. In the US about 1 in 36 children is identified with ASD (CDC, 2020 data). It is strongly genetic, and **vaccines do not cause autism** (this has been repeatedly disproved).

### Controversies
- Concern about **over- or under-diagnosis**, and changing criteria (DSM-5 merged Asperger's disorder into ASD).
- The **neurodiversity** perspective sees these differences as natural variation, while recognizing that many people need support.

Early identification and support improve outcomes. Parents concerned about development should consult a pediatrician.
`,
          q: [
            mc('Which statement about autism is supported by research?', 'Vaccines do not cause autism', 'Large studies have found no link.', [
              ['Autism is caused by cold parenting', 'This idea has been discredited.'],
              ['Everyone with autism has the same needs', 'Support needs vary widely.'],
            ]),
            mc('To meet the criteria for ADHD, symptoms must', 'Be persistent, impairing, and present in more than one setting', 'Several symptoms before age 12.', [
              ['Occur only at school', 'More than one setting is needed.'],
              ['Begin in late adulthood', 'Symptoms begin in childhood.'],
            ]),
          ],
        },
      ],
    },
    52: {
      summary: 'Dissociative disorders and the debate around them.',
      sessions: [
        {
          t: 'Dissociative disorders',
          s: 'Dissociation, main disorders and the controversy.',
          md: `
## Dissociative disorders

**Dissociation** is a disruption in the normal integration of consciousness, memory, identity or perception. Mild dissociation (daydreaming, "highway hypnosis") is common. A disorder involves distressing, impairing dissociation.

| Disorder | Features |
| --- | --- |
| **Dissociative amnesia** | Inability to recall important personal information, usually about a stressful or traumatic event, beyond ordinary forgetting |
| **Depersonalization/derealization disorder** | Persistent feelings of being detached from oneself or from reality, with intact reality testing |
| **Dissociative identity disorder (DID)** | Two or more distinct identity states with gaps in memory |

### Causes
Dissociation is linked to **trauma** (especially severe childhood trauma) as a way of coping.

### Controversy
- Some researchers (the **trauma model**) say that DID results from trauma.
- Others (the **sociocognitive model**) say that media, suggestion and therapy practices can shape or inflate symptoms.
- Surges in diagnosis, and disputes over **recovered memories**, have made the area contested. Research shows memory is reconstructive and suggestible (Unit 6).

Even so, people who experience dissociation suffer real distress and benefit from trauma-informed psychotherapy.
`,
          q: [
            mc('Persistent feelings of being detached from oneself, while still knowing that the experience is not real, are characteristic of', 'Depersonalization/derealization disorder', 'Reality testing remains intact.', [
              ['Schizophrenia', 'Reality testing is impaired in psychosis.'],
              ['Dissociative amnesia', 'This involves memory loss.'],
            ]),
            mc('Why is dissociative identity disorder controversial?', 'Researchers disagree about the roles of trauma versus suggestion and cultural influences', 'The two models differ.', [
              ['No one experiences dissociation', 'Dissociation is real.'],
              ['It has been proven to be entirely caused by genes', 'Not supported.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 14 assessment · Disorders',
    tasks: [
      mc('A pattern of behavior is considered a disorder when it', 'Causes significant distress or impairment', 'Atypical behavior alone is not enough.', [
        ['Is unusual', 'Unusual behavior may be harmless.'],
        ['Is disliked by others', 'This is not the criterion.'],
        ['Is rare in the person\'s culture', 'Cultural norms are considered, but not sufficient.'],
      ]),
      mc('Sudden attacks of intense fear with a racing heart and shortness of breath, and worry about further attacks, indicate', 'Panic disorder', 'These are panic attacks.', [
        ['Specific phobia', 'Fear is tied to a specific object.'],
        ['Schizophrenia', 'Not relevant.'],
        ['Bipolar disorder', 'Not relevant.'],
      ]),
      mc('Which is a core feature of PTSD?', 'Re-experiencing of a trauma, avoidance and heightened arousal', 'Symptoms last over a month.', [
        ['Episodes of mania', 'This is bipolar disorder.'],
        ['Hallucinations only', 'Not core.'],
        ['Fear of a single animal', 'This is a phobia.'],
      ]),
      mc('A person has had weeks of depressed mood, loss of interest, fatigue and poor concentration. Which is the best next step for the person?', 'See a doctor or mental health professional for assessment', 'These conditions are treatable.', [
        ['Wait indefinitely', 'Treatment helps.'],
        ['Self-diagnose from the internet only', 'Professional assessment is needed.'],
        ['Avoid people', 'Isolation worsens mood.'],
      ]),
      mc('Which is a negative symptom of schizophrenia?', 'Flat affect and reduced motivation', 'Negative symptoms are reductions in normal function.', [
        ['Hallucinations', 'This is a positive symptom.'],
        ['Delusions', 'This is a positive symptom.'],
        ['Disorganized speech', 'This is a positive symptom.'],
      ]),
      mc('Which statement about personality disorders is correct?', 'They are enduring, inflexible patterns that cause distress or impairment', 'Defined in clusters A, B and C.', [
        ['They appear suddenly in old age', 'They start by early adulthood.'],
        ['They are the same as schizophrenia', 'They are distinct.'],
        ['They cannot be treated', 'Treatment can help.'],
      ]),
      mc('Which statement about autism is accurate?', 'It is a spectrum with differing support needs and it is not caused by vaccines', 'It is strongly genetic.', [
        ['It is caused by vaccines', 'This has been disproved.'],
        ['It is a single uniform condition', 'It is a spectrum.'],
        ['It results from parents\' coldness', 'This has been discredited.'],
      ]),
      tf('Most people with schizophrenia are violent.', false, 'Most are not violent, and they are more likely to be victims of violence than perpetrators.', 'Correct. The stereotype is false.'),
    ],
  },
};
