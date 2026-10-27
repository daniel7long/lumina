import { mc, tf } from '../builder.js';

export default {
  summary: 'Explore how memories are formed, stored, retrieved and sometimes distorted, and how to remember better.',
  modules: {
    16: {
      summary: 'Memory systems and stages.',
      sessions: [
        {
          t: 'Types and stages of memory',
          s: 'Sensory, short-term, working and long-term memory; implicit vs. explicit.',
          md: `
## Stages of memory

| Stage | Capacity and duration |
| --- | --- |
| **Sensory memory** | Very brief: **iconic** (visual, under a second), **echoic** (auditory, a few seconds) |
| **Short-term memory** | About 20–30 seconds without rehearsal; about **4–7 chunks** |
| **Long-term memory** | Very large, potentially lasting |

**Working memory** (Baddeley) is the active workspace for holding and manipulating information (e.g. mental arithmetic). **Chunking** groups items (e.g. 1-9-4-5) to expand capacity. Rare **eidetic imagery** ("photographic" memory) is seen mainly in some children.

### Long-term memory types
| | Description |
| --- | --- |
| **Explicit (declarative)** | Conscious recall |
| ↳ **Episodic** | Personal events (your last birthday) |
| ↳ **Semantic** | Facts and knowledge (Paris is the capital of France) |
| **Implicit (non-declarative)** | Influences behavior without conscious recall |
| ↳ **Procedural** | Skills (riding a bike) |
| ↳ **Priming, conditioning** | Prior exposure and learned associations |
`,
          q: [
            mc('Remembering how to ride a bicycle is an example of', 'Implicit (procedural) memory', 'It is a skill performed without conscious recall.', [
              ['Episodic memory', 'Episodic concerns personal events.'],
              ['Semantic memory', 'Semantic concerns facts.'],
            ]),
            mc('Grouping the digits 1-9-4-5 into a year to remember them better is called', 'Chunking', 'It combines items into meaningful units.', [
              ['Priming', 'Priming is a prior exposure effect.'],
              ['Extinction', 'This is a conditioning term.'],
            ]),
          ],
        },
      ],
    },
    17: {
      summary: 'Encoding, retrieval and techniques that improve memory.',
      sessions: [
        {
          t: 'How we remember and how to improve it',
          s: 'Encoding, cues, forgetting and effective study.',
          md: `
## Encoding, storage, retrieval

- **Encoding:** getting information in. **Deeper (meaning-based)** processing beats shallow processing (levels of processing).
- **Storage:** maintaining it.
- **Retrieval:** getting it out, helped by **cues**.

### Retrieval effects
- **Serial position effect:** better recall for the first (**primacy**) and last (**recency**) items in a list.
- **Context-dependent** and **state-dependent** memory: recall is better when the setting or internal state matches learning.
- **Tip-of-the-tongue** experiences show that retrieval can fail while the memory exists.

### Forgetting
Ebbinghaus's **forgetting curve** shows that most forgetting happens quickly, then levels off. Causes include decay, interference and retrieval failure.

### Study strategies supported by research
| Strategy | Why it works |
| --- | --- |
| **Spaced practice** | Distributed study beats cramming |
| **Retrieval practice** (self-testing) | Practising recall strengthens memory |
| **Elaboration** | Link new material to what you know |
| **Mnemonics** (acronyms, method of loci) | Provide organized cues |
| **Sleep** | Consolidates memory |
`,
          q: [
            mc('Which study strategy has the strongest research support for long-term learning?', 'Spaced practice combined with self-testing', 'Both improve retention.', [
              ['Cramming the night before', 'Cramming gives fast forgetting.'],
              ['Rereading the text many times', 'Rereading is less effective than testing.'],
            ]),
            mc('Better recall of the first and last items in a list is the', 'Serial position effect', 'Primacy and recency.', [
              ['Misinformation effect', 'This concerns distorted memory.'],
              ['Spacing effect', 'This concerns distributed study.'],
            ]),
          ],
        },
      ],
    },
    18: {
      summary: 'Brain systems that support memory.',
      sessions: [
        {
          t: 'The biology of memory',
          s: 'Synaptic change and key structures.',
          md: `
## Memory in the brain

### At the cellular level
Memories involve changes in connections between neurons. **Long-term potentiation (LTP)** is a lasting strengthening of a synapse after repeated stimulation: "neurons that fire together wire together."

### Key structures
| Structure | Role |
| --- | --- |
| **Hippocampus** | Forms new explicit (episodic, semantic) memories; consolidation |
| **Amygdala** | Attaches emotional significance; emotional memories are stronger |
| **Cerebellum** | Procedural and conditioned responses |
| **Basal ganglia** | Habits and skills |
| **Cerebral cortex** | Long-term storage of consolidated memories |

### Evidence
Patient **H.M.**, whose hippocampi were removed to treat epilepsy, could no longer form new explicit memories (**anterograde amnesia**) but could still learn new motor skills, showing that explicit and implicit memory rely on different systems.

**Consolidation** (strengthening over hours and during sleep) turns fragile new memories into stable ones.
`,
          q: [
            mc('Patient H.M. could not form new memories of events but could learn a new motor skill. What does this suggest?', 'Explicit and implicit memories depend on different brain systems', 'The hippocampus is needed for explicit memory.', [
              ['All memory is stored in the hippocampus', 'Skills were learned without it.'],
              ['Skills are not memories', 'They are implicit memories.'],
            ]),
            mc('Which structure adds emotional significance to memories?', 'Amygdala', 'Emotional events are often remembered better.', [
              ['Cerebellum', 'It is involved in procedural memory.'],
              ['Occipital lobe', 'It processes vision.'],
            ]),
          ],
        },
      ],
    },
    19: {
      summary: 'Why memory and thinking are fallible.',
      sessions: [
        {
          t: 'Accuracy and inaccuracy in memory and thinking',
          s: 'Reconstruction, misinformation, heuristics and counterfactuals.',
          md: `
## Memory is reconstructive

Memory is not a recording. We **reconstruct** past events from fragments and expectations, so errors are normal.

### Common errors
- **Misinformation effect** (Loftus): misleading information after an event alters the memory. Asking "how fast were the cars going when they *smashed* into each other?" raised speed estimates.
- **Source monitoring errors:** forgetting where a memory came from.
- **False memories** can be implanted by suggestion.
- **Overconfidence:** confidence is only a weak guide to accuracy, which matters for **eyewitness testimony**.
- **Flashbulb memories** feel vivid but are not more accurate than others.

### Thinking shortcuts
- **Algorithm:** a step-by-step procedure that guarantees a solution.
- **Heuristic:** a quick rule of thumb (e.g. **availability**: judging frequency by ease of recall).
- **Confirmation bias:** seeking evidence that supports one's belief.
- **Counterfactual thinking:** imagining "what might have been" (e.g. "if only I had left earlier"), which can intensify regret.

### Practical lessons
Interview witnesses with neutral questions; do not assume that confident memories are accurate.
`,
          q: [
            mc('Asking witnesses "how fast were the cars going when they smashed into each other?" produces higher estimates than "hit". This shows', 'The misinformation effect', 'Wording changes the memory.', [
              ['Flashbulb memory', 'It concerns vivid memories of surprising events.'],
              ['Proactive interference', 'It concerns old learning interfering with new.'],
            ]),
            mc('Judging that flying is dangerous because crashes are widely reported is an example of', 'The availability heuristic', 'Judgments are based on easily recalled examples.', [
              ['An algorithm', 'An algorithm guarantees a correct answer.'],
              ['Counterfactual thinking', 'This is imagining alternatives to the past.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Memory',
    tasks: [
      mc('Remembering what you had for breakfast this morning is', 'Episodic memory', 'It concerns a personal event.', [
        ['Procedural memory', 'It concerns skills.'],
        ['Semantic memory', 'It concerns facts.'],
        ['Sensory memory', 'It lasts a second or two.'],
      ]),
      mc('Which memory store holds an exact visual image for less than a second?', 'Iconic memory', 'It is the visual sensory register.', [
        ['Echoic memory', 'It holds sounds.'],
        ['Long-term memory', 'It lasts much longer.'],
        ['Working memory', 'It is the active workspace.'],
      ]),
      mc('You recall a list of words and remember the first and last words best. This is the', 'Serial position effect', 'Primacy and recency effects.', [
        ['Spacing effect', 'This concerns distributed practice.'],
        ['Misinformation effect', 'This concerns distorted memories.'],
        ['Tip-of-the-tongue effect', 'This concerns near-recall.'],
      ]),
      mc('A student studies for 1 hour on each of 5 days rather than for 5 hours the night before. Why is the first approach better?', 'Spaced practice improves long-term retention', 'The spacing effect.', [
        ['It takes less time overall', 'The total time is the same.'],
        ['It avoids sleep', 'Sleep helps consolidation.'],
        ['It reduces the need to retrieve', 'Retrieval is beneficial.'],
      ]),
      mc('A person with hippocampal damage is most likely to have difficulty with', 'Forming new episodic memories', 'The hippocampus is needed for new explicit memories.', [
        ['Riding a bicycle they learned as a child', 'This is an implicit memory.'],
        ['Seeing colors', 'The visual cortex handles this.'],
        ['Breathing', 'The medulla handles this.'],
      ]),
      mc('An eyewitness is very confident in an identification. What is the best conclusion?', 'Confidence is only weakly related to accuracy', 'Confident witnesses can be wrong.', [
        ['The identification must be accurate', 'Confidence does not ensure accuracy.'],
        ['The witness is lying', 'Honest witnesses can be mistaken.'],
        ['The memory has been recorded perfectly', 'Memory is reconstructive.'],
      ]),
      tf('Memory works like a video recorder, preserving events exactly as they happened.', false, 'Memory is reconstructive: we rebuild events from fragments, which makes errors and distortions common.', 'Correct. Memory is constructed, not recorded.'),
    ],
  },
};
