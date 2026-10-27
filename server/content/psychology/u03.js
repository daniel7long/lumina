import { mc, tf } from '../builder.js';

export default {
  summary: 'See how neurons, brain regions, the nervous system and hormones produce thought and behavior, and how scientists study them.',
  modules: {
    5: {
      summary: 'Neurons, signals and synapses.',
      sessions: [
        {
          t: 'Neurons and how they communicate',
          s: 'Structure, action potentials, synapses and myelin.',
          md: `
## The neuron

| Part | Function |
| --- | --- |
| **Dendrites** | Receive signals |
| **Soma (cell body)** | Integrates inputs, contains the nucleus |
| **Axon** | Carries the signal away |
| **Myelin sheath** | Fatty insulation around many axons; speeds conduction |
| **Axon terminals** | Release neurotransmitters |

**Glial cells** support, insulate and protect neurons.

### Action potential
At rest the inside of a neuron is about **−70 mV**. When input is strong enough to reach the **threshold**, the neuron fires an **action potential**: a brief, **all-or-none** electrical impulse along the axon. Myelin lets it jump quickly between gaps, so damage to myelin (as in multiple sclerosis) disrupts signaling.

### The synapse
Neurons do not touch. At the **synapse** the terminal releases **neurotransmitters** into the gap; they bind to **receptors** on the next cell, and are then cleared by **reuptake** or breakdown. Neurotransmitters can excite or inhibit. Examples: **dopamine** (reward, movement), **serotonin** (mood), **GABA** (inhibition), **acetylcholine** (muscles, memory).
`,
          q: [
            mc('Which part of a neuron receives incoming signals?', 'Dendrites', 'They are branching extensions.', [
              ['Axon terminals', 'These release neurotransmitters.'],
              ['Myelin sheath', 'It insulates the axon.'],
            ]),
            mc('What does the myelin sheath do?', 'It speeds up conduction of the action potential', 'It insulates the axon.', [
              ['It stores neurotransmitters', 'Terminals store them.'],
              ['It receives signals from other neurons', 'Dendrites do this.'],
            ]),
          ],
        },
      ],
    },
    6: {
      summary: 'Major brain structures and their functions.',
      sessions: [
        {
          t: 'Brain regions',
          s: 'The old brain, the limbic system and the cerebral cortex.',
          md: `
## A tour of the brain

### Brainstem and "old brain"
- **Medulla:** breathing, heart rate
- **Pons:** relays signals, sleep
- **Cerebellum:** balance, coordination, motor learning
- **Thalamus:** relay station for senses (except smell)
- **Hypothalamus:** hunger, thirst, temperature, hormones

### Limbic system
- **Amygdala:** fear and emotional memory
- **Hippocampus:** forming new explicit memories

### Cerebral cortex (lobes)
| Lobe | Main functions |
| --- | --- |
| **Frontal** | Planning, decisions, movement (motor cortex), speech production (**Broca's area**) |
| **Parietal** | Touch (somatosensory cortex), spatial awareness |
| **Temporal** | Hearing, language comprehension (**Wernicke's area**), memory |
| **Occipital** | Vision |

The two hemispheres are connected by the **corpus callosum**; many functions (such as language) are **lateralized**, usually to the left hemisphere.

### Plasticity
**Neuroplasticity** is the brain's ability to change with experience and recover from injury. **Neurogenesis**, the growth of new neurons, occurs in limited regions such as the hippocampus in adulthood. The case of **Phineas Gage** showed the role of the frontal lobe in personality and self-control.
`,
          q: [
            mc('Which structure is mainly involved in forming new explicit memories?', 'Hippocampus', 'Damage prevents new memories from forming.', [
              ['Cerebellum', 'It is involved in balance and coordination.'],
              ['Medulla', 'It controls breathing and heart rate.'],
            ]),
            mc('Which lobe contains the primary visual cortex?', 'Occipital lobe', 'It is at the back of the brain.', [
              ['Frontal lobe', 'It handles planning and movement.'],
              ['Temporal lobe', 'It handles hearing.'],
            ]),
          ],
        },
      ],
    },
    7: {
      summary: 'Ways of studying the brain.',
      sessions: [
        {
          t: 'Methods for studying the brain',
          s: 'Lesions, EEG, CT, MRI, fMRI and PET.',
          md: `
## Studying the brain

### Historical approaches
- **Cadaver studies:** examine brains after death and relate damage to symptoms during life.
- **Lesion studies:** see how damage (from injury, disease or surgery) changes behavior.

### Modern methods
| Method | Measures | Strength |
| --- | --- | --- |
| **EEG** | Electrical activity at the scalp | Excellent **timing** (milliseconds), poor location |
| **CT** | X-ray images of **structure** | Fast, widely available |
| **MRI** | Magnetic images of **structure** | Detailed, no radiation |
| **fMRI** | Blood oxygen change = **activity** | Good **location**, slower timing |
| **PET** | Radioactive tracer for glucose or neurotransmitters | Metabolic activity |

Structure scans (CT, MRI) show **what the brain looks like**; functional methods (EEG, fMRI, PET) show **what it is doing**. No method is perfect, so researchers combine them. Activity in a region is **correlational** evidence, not proof it causes a behavior.
`,
          q: [
            mc('Which method is best for tracking brain activity millisecond by millisecond?', 'EEG', 'It has excellent time resolution.', [
              ['MRI', 'It shows structure.'],
              ['PET', 'It has slow timing.'],
            ]),
            mc('A researcher wants to see which regions are active during a memory task. Which method is most appropriate?', 'fMRI', 'It measures changes in blood oxygen linked to activity.', [
              ['CT scan', 'It shows structure.'],
              ['A cadaver study', 'It cannot show live activity.'],
            ]),
          ],
        },
      ],
    },
    8: {
      summary: 'The nervous system and the endocrine system.',
      sessions: [
        {
          t: 'The nervous and endocrine systems',
          s: 'CNS, PNS and hormone glands.',
          md: `
## Communication systems

### Nervous system
- **Central nervous system (CNS):** brain and spinal cord.
- **Peripheral nervous system (PNS):** nerves outside the CNS.
  - **Somatic:** voluntary muscles and sensory input.
  - **Autonomic:** automatic functions.
    - **Sympathetic:** arouses the body ("fight or flight").
    - **Parasympathetic:** calms the body ("rest and digest").

### Endocrine system
Glands release **hormones** into the blood. It is **slower** than the nervous system but its effects **last longer**.
| Gland | Main role |
| --- | --- |
| **Pituitary** | "Master gland"; controls other glands |
| **Thyroid** | Metabolism |
| **Adrenal** | Adrenaline and cortisol for stress |
| **Pancreas** | Insulin and glucagon (blood sugar) |
| **Gonads** | Sex hormones |

The hypothalamus links the two systems.
`,
          q: [
            mc('Which branch of the autonomic nervous system slows the heart and promotes rest?', 'Parasympathetic', 'It calms the body.', [
              ['Sympathetic', 'It arouses the body.'],
              ['Somatic', 'It controls voluntary muscles.'],
            ]),
            mc('How does the endocrine system differ from the nervous system?', 'It uses hormones in the blood, acts more slowly and has longer-lasting effects', 'Hormones travel through the bloodstream.', [
              ['It is faster than the nervous system', 'It is slower.'],
              ['It only works in the brain', 'Glands are throughout the body.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Brains, bodies and behavior',
    tasks: [
      mc('At the synapse, neurotransmitters', 'Cross the gap and bind to receptors on the next cell', 'This is how neurons communicate.', [
        ['Travel along the myelin sheath', 'Myelin is insulation.'],
        ['Are produced by dendrites only', 'They are released from axon terminals.'],
        ['Permanently stay in the gap', 'They are cleared by reuptake or breakdown.'],
      ]),
      mc('What does "all-or-none" mean for an action potential?', 'A neuron either fires fully or does not fire', 'The strength of the impulse does not vary.', [
        ['Every neuron fires at the same time', 'It refers to a single neuron.'],
        ['The impulse gets weaker along the axon', 'It stays the same size.'],
        ['The neuron fires at half strength to weak stimuli', 'There is no partial firing.'],
      ]),
      mc('A person has damage to Broca\'s area. Which problem is most likely?', 'Difficulty producing speech', 'It is in the left frontal lobe.', [
        ['Blindness', 'Vision is occipital.'],
        ['Loss of balance', 'This concerns the cerebellum.'],
        ['Inability to breathe', 'This concerns the medulla.'],
      ]),
      mc('Which structure is a relay station for most sensory information to the cortex?', 'Thalamus', 'It routes sensory information.', [
        ['Hippocampus', 'It forms memories.'],
        ['Cerebellum', 'It coordinates movement.'],
        ['Pons', 'It relays signals between the cortex and the cerebellum.'],
      ]),
      mc('Which technique provides a detailed image of brain structure without radiation?', 'MRI', 'It uses magnetic fields.', [
        ['PET', 'It uses a radioactive tracer.'],
        ['EEG', 'It records electrical activity.'],
        ['CT', 'It uses X-rays.'],
      ]),
      mc('During a stressful event, which branch becomes more active?', 'The sympathetic nervous system', 'It prepares the body for action.', [
        ['The parasympathetic nervous system', 'It calms the body.'],
        ['The somatic nervous system', 'It handles voluntary movement.'],
        ['The corpus callosum', 'This is a bundle of fibres between hemispheres.'],
      ]),
      tf('Adults can never grow any new neurons.', false, 'Neurogenesis occurs in limited regions such as the hippocampus, although it is far more limited than in development.', 'Correct. Neurogenesis exists but is limited.'),
    ],
  },
};
