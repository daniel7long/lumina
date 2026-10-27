import { mc, tf } from '../builder.js';

export default {
  summary: 'Get oriented: what psychologists study, why, and the major perspectives that have shaped the field.',
  modules: {
    1: {
      summary: 'Goals of psychology and an overview of the course.',
      sessions: [
        {
          t: 'What psychology is for',
          s: 'The goals of psychology and a map of the topics ahead.',
          md: `
## Psychology: the science of mind and behavior

**Psychology** is the scientific study of **behavior** (what organisms do) and **mental processes** (thoughts, feelings, perceptions, memories).

### Goals
| Goal | Question | Example |
| --- | --- | --- |
| **Describe** | What happens? | How many hours do students sleep? |
| **Explain** | Why does it happen? | Why does sleep loss hurt attention? |
| **Predict** | What will happen? | Who is at risk of dropping out? |
| **Influence / change** | How can we improve it? | Which program improves study habits? |

### Basic and applied
**Basic research** builds knowledge for its own sake. **Applied research** tackles practical problems (therapy, education, workplaces). Each informs the other.

### Topics in this course
Methods · the brain and body · sensation and perception · learning · memory · language · intelligence · development · emotion and motivation · personality · social psychology · wellness · disorders · treatment · consciousness.

> Psychology is a **science**: claims are tested with evidence, not decided by opinion or common sense.
`,
          q: [
            mc('A researcher wants to know why sleep loss reduces attention. Which goal of psychology is this?', 'Explain', 'It asks why something happens.', [
              ['Describe', 'Describing would report what happens.'],
              ['Predict', 'Predicting would forecast future outcomes.'],
            ]),
            mc('Research designed to solve a practical problem, such as improving a classroom program, is', 'Applied research', 'It targets real-world problems.', [
              ['Basic research', 'Basic research seeks knowledge for its own sake.'],
              ['Introspection', 'This is a historical method.'],
            ]),
          ],
        },
      ],
    },
    2: {
      summary: 'The history of psychology and its major perspectives.',
      sessions: [
        {
          t: 'History and perspectives',
          s: 'From philosophy to modern perspectives.',
          md: `
## Where psychology came from

Psychology grew out of **philosophy** (questions about mind and body, nature and nurture) and the **physical sciences and physiology** (Helmholtz, Fechner measured sensation). In **1879** **Wilhelm Wundt** opened the first psychology laboratory in Leipzig.

### Early schools
- **Structuralism** (Wundt, Titchener): analyze the elements of consciousness by introspection.
- **Functionalism** (William James): study what mental processes are *for*, influenced by Darwin.

### Contemporary perspectives
| Perspective | Focus |
| --- | --- |
| **Psychodynamic** (Freud) | Unconscious motives and early experience |
| **Behavioral** (Watson, Skinner) | Observable behavior shaped by the environment |
| **Humanistic** (Rogers, Maslow) | Growth, free will, self-actualization |
| **Cognitive** | Thinking, memory, problem solving |
| **Biological** | Brain, genes, hormones |
| **Evolutionary** | Adaptive value of behavior |
| **Sociocultural** | Social and cultural context |

Most psychologists draw on several perspectives. Each is a **lens**, not a rival truth.
`,
          q: [
            mc('Who opened the first psychology laboratory, in 1879?', 'Wilhelm Wundt', 'He worked in Leipzig, Germany.', [
              ['Sigmund Freud', 'Freud developed psychoanalysis.'],
              ['B. F. Skinner', 'Skinner was a later behaviorist.'],
            ]),
            mc('Which perspective emphasizes observable behavior and learning from the environment?', 'Behavioral', 'Watson and Skinner studied observable responses.', [
              ['Humanistic', 'It emphasizes growth and self-actualization.'],
              ['Psychodynamic', 'It emphasizes the unconscious.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Introduction',
    tasks: [
      mc('Which is the best definition of psychology?', 'The scientific study of behavior and mental processes', 'Both are included.', [
        ['The study of mental illness only', 'It is much broader.'],
        ['Common sense about human nature', 'It relies on evidence.'],
        ['The study of the brain only', 'That is neuroscience, one part.'],
      ]),
      mc('A study counts how many hours students sleep. Which goal does it serve?', 'Describe', 'It reports what occurs.', [
        ['Explain', 'Explaining would address why.'],
        ['Predict', 'Predicting would forecast outcomes.'],
        ['Influence', 'It does not change behavior.'],
      ]),
      mc('Which school argued that psychology should study what mental processes do for an organism?', 'Functionalism', 'William James and Darwin\'s influence.', [
        ['Structuralism', 'It analyzed the elements of consciousness.'],
        ['Psychoanalysis', 'It focuses on the unconscious.'],
        ['Behaviorism', 'It focuses on observable behavior.'],
      ]),
      mc('A psychologist studies how adaptation by natural selection shaped human fear responses. Which perspective is this?', 'Evolutionary', 'It looks at adaptive value.', [
        ['Humanistic', 'It looks at personal growth.'],
        ['Behavioral', 'It looks at learned responses.'],
        ['Psychodynamic', 'It looks at unconscious conflict.'],
      ]),
      tf('Modern psychologists must choose a single perspective and reject the others.', false, 'Most psychologists integrate several perspectives, since each explains different aspects of behavior.', 'Correct. The perspectives complement each other.'),
    ],
  },
};
