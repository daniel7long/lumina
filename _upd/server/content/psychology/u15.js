import { mc, tf } from '../builder.js';

export default {
  summary: 'Compare the main approaches to treating mental health problems, how we know whether treatments work, and how to prevent problems before they start. This unit is educational and is not a substitute for professional care.',
  modules: {
    53: {
      summary: 'The major psychotherapies.',
      sessions: [
        {
          t: 'Psychotherapy',
          s: 'Psychodynamic, humanistic, behavioral, cognitive and CBT approaches.',
          md: `
## Psychotherapy

**Psychotherapy** uses a professional relationship and psychological techniques to reduce distress and change thinking and behavior.

| Approach | Idea | Techniques |
| --- | --- | --- |
| **Psychodynamic** (Freud and successors) | Problems stem from unconscious conflicts | Free association, dream and transference interpretation; gaining insight |
| **Humanistic** (Rogers) | Growth is blocked by conditions of worth | **Client-centered**: empathy, genuineness, unconditional positive regard |
| **Behavioral** | Problem behaviors are learned and can be unlearned | **Exposure** and **systematic desensitization** for fears; reinforcement; skills training |
| **Cognitive** (Beck, Ellis) | Distress arises from distorted thoughts | Identify and challenge negative automatic thoughts |
| **Cognitive-behavioral therapy (CBT)** | Combines both | Structured, goal-oriented, homework; strong evidence for anxiety, depression, OCD, PTSD and insomnia |

### Format
Individual, couples, family or group; online or in person.

### Common factors
Across approaches, the **therapeutic alliance** (a trusting, collaborative bond), hope and a plausible rationale predict good outcomes.

### Choosing a therapist
Look for licensed professionals (psychologists, counselors, clinical social workers, psychiatrists), ask about their approach and experience, and judge the fit after a few sessions.
`,
          q: [
            mc('Gradually exposing a person to a feared object while teaching relaxation is called', 'Systematic desensitization', 'A behavioral technique.', [
              ['Free association', 'A psychodynamic technique.'],
              ['Client-centered therapy', 'A humanistic approach.'],
            ]),
            mc('Which therapy focuses on identifying and changing distorted thoughts and also uses behavioral techniques?', 'Cognitive-behavioral therapy', 'CBT combines both.', [
              ['Psychoanalysis', 'It focuses on unconscious conflict.'],
              ['Person-centered therapy only', 'It does not use homework or cognitive restructuring.'],
            ]),
          ],
        },
      ],
    },
    54: {
      summary: 'Medication and brain stimulation treatments.',
      sessions: [
        {
          t: 'Biomedical treatments',
          s: 'Medications and brain interventions.',
          md: `
## Biomedical treatment

### Medications
| Class | Used for | Examples |
| --- | --- | --- |
| **Antidepressants** | Depression, anxiety | SSRIs (fluoxetine, sertraline); take several weeks to work |
| **Antipsychotics** | Schizophrenia, severe mania | Reduce dopamine activity; can have significant side effects |
| **Mood stabilizers** | Bipolar disorder | Lithium, certain anticonvulsants |
| **Anti-anxiety drugs** | Short-term relief of severe anxiety | Benzodiazepines (risk of dependence) |
| **Stimulants and others** | ADHD | Methylphenidate, amphetamines, atomoxetine |

Medications are prescribed by physicians (or other prescribers) who monitor benefits and side effects. **Do not stop or change a medication without consulting the prescriber**, as stopping suddenly can cause withdrawal or relapse.

### Brain stimulation
- **Electroconvulsive therapy (ECT):** brief electrical stimulation under anesthesia; effective for severe, treatment-resistant depression; memory side effects possible.
- **Transcranial magnetic stimulation (TMS):** magnetic pulses on the scalp to stimulate cortical regions; non-invasive.
- **Deep brain stimulation (DBS):** implanted electrodes; experimental for some severe conditions.
- **Psychosurgery** is now very rare.

Treatments are chosen based on the diagnosis, severity, preferences and evidence; often **medication plus psychotherapy** works best.
`,
          q: [
            mc('SSRIs are mainly used to treat', 'Depression and anxiety disorders', 'They act on the serotonin system.', [
              ['Schizophrenia', 'Antipsychotics are used for schizophrenia.'],
              ['Bipolar mania, as the first choice', 'Mood stabilizers are used.'],
            ]),
            mc('What is the safest guidance about stopping a psychiatric medication?', 'Consult the prescriber before changing or stopping it', 'Sudden changes can cause problems.', [
              ['Stop immediately when feeling better', 'Relapse or withdrawal can occur.'],
              ['Double the dose if symptoms return', 'Dose changes need a prescriber.'],
            ]),
          ],
        },
      ],
    },
    55: {
      summary: 'Community and group-based support.',
      sessions: [
        {
          t: 'Social and community approaches',
          s: 'Community mental health, group therapy and self-help.',
          md: `
## Social approaches

### Community mental health
After **deinstitutionalization** (from the 1950s on), many people moved from large psychiatric hospitals into the community. **Community mental health** aims to provide accessible local services: outpatient clinics, crisis services, case management, supported housing and employment programs. A major challenge has been that community resources were often insufficient.

### Group therapy
A therapist works with several people with similar problems.
Advantages: lower cost, **support and normalization** ("I'm not alone"), learning from others, opportunities to practise social skills.

### Self-help and peer support
Groups run by peers, such as **Alcoholics Anonymous** or depression support groups, offer shared experience and mutual support. Peer support is a valued part of recovery, though it complements rather than replaces professional care for serious conditions.

### Family and couples therapy
Treat problems as part of a **system**; improving communication can help the person with a disorder and the whole family.

### Technology
Telehealth, apps and online programs increase access, with quality varying; evidence-based programs are best.
`,
          q: [
            mc('One advantage of group therapy is that it', 'Provides support and shows participants they are not alone', 'Normalization is a key benefit.', [
              ['Always replaces individual therapy', 'It is one option among several.'],
              ['Requires no therapist', 'A trained leader is involved.'],
            ]),
            mc('Deinstitutionalization refers to', 'Moving people from large psychiatric hospitals into community care', 'It began in the mid-20th century.', [
              ['Closing all outpatient clinics', 'The aim was the opposite.'],
              ['Replacing therapy with medication only', 'Not the meaning.'],
            ]),
          ],
        },
      ],
    },
    56: {
      summary: 'Evaluating treatments and preventing problems.',
      sessions: [
        {
          t: 'Evaluating effectiveness and prevention',
          s: 'Evidence, outcomes and levels of prevention.',
          md: `
## Do treatments work?

### Studying effectiveness
- **Randomized controlled trials (RCTs)** compare treatment with a control (placebo, waitlist or another treatment).
- **Meta-analysis** combines many studies. Smith and Glass (1977) showed that psychotherapy produced benefits greater than no treatment.
- Importantly, people often improve over time without treatment, and **placebo** effects exist, so controls are essential.

### What we know
- **Psychotherapy** is effective for many conditions. For mild to moderate depression and anxiety, psychotherapy (e.g. CBT) is about as effective as medication, with lower relapse after stopping. For severe depression, **combination** treatment is often best. Severe disorders like schizophrenia and bipolar disorder need medication, often with psychosocial support.
- Different therapies often yield similar average results, which suggests the importance of **common factors**, though some therapies are better for specific problems (e.g. exposure for phobias).
- **Evidence-based practice** combines the best research, clinical expertise and the client's values.

### Prevention
| Level | Aim | Example |
| --- | --- | --- |
| **Primary** | Prevent problems before they start | Anti-bullying programs, parenting support |
| **Secondary** | Detect and treat early | Screening for depression |
| **Tertiary** | Reduce relapse and disability | Rehabilitation, relapse prevention |
`,
          q: [
            mc('Why do researchers need control groups when evaluating therapy?', 'People may improve over time or from placebo effects even without the treatment', 'Controls reveal the true effect.', [
              ['Control groups make treatment more expensive for no reason', 'They are essential for valid conclusions.'],
              ['Therapy never works without them', 'Not the reason.'],
            ]),
            mc('A school program that teaches coping skills to all students before any problems arise is which level of prevention?', 'Primary prevention', 'It aims to stop problems before they start.', [
              ['Secondary prevention', 'This detects early problems.'],
              ['Tertiary prevention', 'This reduces relapse and disability.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 15 assessment · Treatment',
    tasks: [
      mc('A therapist who uses free association and dream interpretation is most likely using which approach?', 'Psychodynamic therapy', 'It aims to uncover unconscious conflict.', [
        ['Behavior therapy', 'It targets learned behaviors.'],
        ['Cognitive therapy', 'It targets thoughts.'],
        ['Biomedical therapy', 'It uses medication or devices.'],
      ]),
      mc('Which is a defining feature of client-centered therapy?', 'Empathy and unconditional positive regard from the therapist', 'It is Rogers\' approach.', [
        ['Interpreting dreams', 'This is psychodynamic.'],
        ['Prescribing medication', 'This is biomedical.'],
        ['Using punishment', 'Not part of the approach.'],
      ]),
      mc('Challenging the thought "I always fail" and testing it against evidence is a technique of', 'Cognitive therapy', 'It modifies distorted thinking.', [
        ['Psychoanalysis', 'Not its technique.'],
        ['ECT', 'A biomedical treatment.'],
        ['Group therapy', 'A format, not a technique.'],
      ]),
      mc('A person feels better after a few weeks on an antidepressant. What is the best advice?', 'Continue as prescribed and talk to the prescriber before making any changes', 'Stopping suddenly may risk relapse or withdrawal.', [
        ['Stop immediately', 'Stopping suddenly is risky.'],
        ['Double the dose', 'Dose changes need a prescriber.'],
        ['Share the medication with a friend', 'Medication is prescribed individually.'],
      ]),
      mc('Which treatment is used mainly for severe, treatment-resistant depression?', 'Electroconvulsive therapy (ECT)', 'It can be effective when others fail.', [
        ['Free association', 'A psychodynamic technique.'],
        ['Systematic desensitization', 'Used for phobias.'],
        ['Group therapy for phobias', 'Not for severe depression.'],
      ]),
      mc('Which conclusion best summarizes research on mild to moderate depression?', 'Psychotherapy such as CBT is about as effective as medication', 'Combination can be best for severe cases.', [
        ['Only medication works', 'Not supported.'],
        ['Nothing works better than no treatment', 'Treatments are effective.'],
        ['Only hospitalization works', 'Not supported.'],
      ]),
      tf('Because many people improve without treatment, researchers can judge a therapy\'s effect without any comparison group.', false, 'Comparison groups are essential, because natural improvement and placebo effects occur.', 'Correct. Controls are needed to estimate the true effect.'),
    ],
  },
};
