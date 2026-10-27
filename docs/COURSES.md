# Course library

Lumina ships with nine courses. Eight were built from the outlines in `Lumina_Courses.zip`; the ninth (English) was built earlier.

## Read this first

- **All lesson text, quiz questions and written tasks are authored drafts.** They follow the outline's architecture and learning objectives but must be reviewed by a subject expert before real learners use them.
- **No video files are included.** Video items are transcripts or links only.
- Calculation answers were checked by running the numbers (Python, NumPy, SciPy, `ipaddress`), but this does not replace expert review.
- "OLI" wording and the CMU logo need approval from CMU brand owners before public use.

## How the content is organised

`Course → Unit → Lesson (module/chapter) → Session → Item (reading, video, quiz)`. Each unit has an overview item and a graded assessment (A+ / A / B+ / B / C, pass at B+).

Source files:

| File | Purpose |
| --- | --- |
| `server/content/data/<course>.js` | Learning objectives per module, with an `added` list for objectives that were not in the outline |
| `server/content/<course>/` | Unit files with lesson text, quiz questions, tasks |
| `server/content/builder.js`, `helpers.js` | Turn the files into a course |
| `server/content/index.js` | The library; `npm run seed` loads any course not yet in the database |

Validate everything with `npm run check:content`.

## Courses

Python (2 units) and Java (1 unit) cover only the units present in their outlines; add further units as new files in the same folder and register them in the course's `index.js`.

| Course | Category |
| --- | --- |
| Python Programming | Computer Science & Programming |
| Java Programming | Computer Science & Programming |
| Evidence-Based Management | Business |
| Probability and Statistics | Data Science and Causal Reasoning |
| Modern Biology | Life Sciences |
| Cyber Technology: STEM Pathways | Computer Science & Programming |
| Engineering Statics | Engineering and Technology |
| Introduction to Psychology | Social Sciences |

## Reconstructed (added) objectives

Where an outline listed a module without objectives, or the objectives were incomplete, objectives were added from the module title and neighbouring modules. They are listed here so the course team can confirm or replace them.

### Python Programming

36 objectives from the outline; 0 module(s) had objectives added.

_None added._

### Java Programming

19 objectives from the outline; 0 module(s) had objectives added.

_None added._

### Evidence-Based Management

118 objectives from the outline; 0 module(s) had objectives added.

_None added._

### Probability and Statistics

57 objectives from the outline; 4 module(s) had objectives added.

- Unit 1, Module 1 *The Big Picture*: Describe the four parts of the big picture of statistics: producing data, exploratory data analysis, probability and inference. · Distinguish between a population and a sample, and between a parameter and a statistic. · Explain why variability makes statistical reasoning necessary.
- Unit 1, Module 2 *Types of Data*: Classify a variable as categorical or quantitative. · Identify the explanatory and response variables in a study (the role-type classification). · Read a data table and identify its cases, variables and values.
- Unit 2, Module 3 *Examining Categorical Data*: Summarize a categorical variable with counts and percentages. · Display a categorical variable with a bar chart or a pie chart and interpret the display. · Recognize misleading displays of categorical data.
- Unit 5, Module 13 *Introduction to Inference*: Explain how the sampling distribution connects a sample statistic to a population parameter. · Distinguish between estimation (confidence intervals) and hypothesis testing as the two forms of inference. · State the conditions under which the inference methods in this unit can be used.

### Modern Biology

183 objectives from the outline; 1 module(s) had objectives added.

- Unit 1, Module 1 *The Cell and the Chemistry of Life*: Describe the central ideas of modern biology: the cell as the unit of life, the flow of information from DNA to RNA to protein, and the role of energy and metabolism. · Distinguish prokaryotic cells from eukaryotic cells and name the main organelles and their functions. · Explain how scientists use experiments and models to study molecules, cells and genes.

### Cyber Technology: STEM Pathways

26 objectives from the outline; 5 module(s) had objectives added.

- Unit 1, Module 1 *PC Hardware*: Identify the main internal components of a PC and describe what each does. · Describe how storage devices connect to the motherboard.
- Unit 1, Module 2 *PC Software*: Distinguish operating systems, applications and utilities. · Explain the role of drivers and updates.
- Unit 2, Module 3 *Network Essentials*: Describe the purpose of IP addresses and common network devices.
- Unit 2, Module 4 *Security Fundamentals*: Describe common threats and basic defenses such as authentication, encryption and firewalls.
- Unit 4, Module 10 *Capstone*: Apply the skills from the pathway to plan the connection of a small network.

### Engineering Statics

79 objectives from the outline; 0 module(s) had objectives added.

_None added._

### Introduction to Psychology

239 objectives from the outline; 0 module(s) had objectives added.

_None added._
