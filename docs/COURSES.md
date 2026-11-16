# Course library

Lumina ships with ten courses. Eight were built from the outlines in `Lumina_Courses.zip`; English was built earlier, and Astronomy 101 was written without a source outline.

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
| Astronomy 101 | Physical Sciences |

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

### Astronomy 101

48 objectives, all written for this course because there was no source outline; 16 module(s) had objectives added.

- Unit 1, Module 1 *Scale and the Night Sky*: Describe the scales of the universe from planets to galaxies and express large distances in astronomical units and light-years. · Use the celestial sphere to locate objects with altitude, azimuth, right ascension and declination. · Explain why constellations are patterns of sight lines rather than physical groups of stars.
- Unit 1, Module 2 *Motions of Earth and Moon*: Explain day and night, the seasons and the changing path of the Sun using Earth's rotation, revolution and axial tilt. · Explain the phases of the Moon and predict the phase from the Moon's position relative to the Sun. · Distinguish solar eclipses from lunar eclipses and explain why they do not happen every month.
- Unit 1, Module 3 *Light and Telescopes*: Relate the wavelength, frequency and energy of light across the electromagnetic spectrum. · Explain how the spectrum of an object reveals its temperature, composition and motion. · Compare refracting and reflecting telescopes and explain why astronomers observe in many wavelength bands.
- Unit 2, Module 4 *Gravity and the Motions of the Planets*: State Kepler's three laws and use them to compare the orbits of different planets. · Explain Newton's law of gravitation and how it produces orbits and tides. · Calculate how gravity changes with mass and distance.
- Unit 2, Module 5 *Origin and Architecture of the Solar System*: Describe the nebular theory of solar system formation and the evidence that supports it. · Compare the terrestrial planets, giant planets and small-body populations. · Explain how radioactive dating gives the age of the solar system.
- Unit 2, Module 6 *The Terrestrial Worlds*: Describe the interior structure of Earth and explain how interiors, impacts, volcanism and tectonics shape surfaces. · Compare Mercury, Venus, Earth, the Moon and Mars, including their atmospheres. · Explain the greenhouse effect and why Venus is hotter than Mercury.
- Unit 2, Module 7 *Giant Planets, Moons and Small Bodies*: Compare the compositions and structures of Jupiter, Saturn, Uranus and Neptune. · Describe the major moons and why some of them are geologically active. · Distinguish asteroids, comets, Kuiper belt objects and dwarf planets and say where each is found.
- Unit 3, Module 8 *The Sun*: Explain how nuclear fusion powers the Sun and how hydrostatic equilibrium keeps it stable. · Describe the layers of the Sun from the core to the corona. · Describe sunspots, flares and the solar cycle and their effects on Earth.
- Unit 3, Module 9 *Measuring the Stars*: Use parallax to find the distance to nearby stars. · Relate a star's luminosity, temperature and radius. · Read a Hertzsprung-Russell diagram and place stars in the main sequence, giant, supergiant and white dwarf groups.
- Unit 3, Module 10 *How Stars Form and Evolve*: Describe how a star forms from a collapsing cloud of gas and dust. · Explain why a star's mass sets its lifetime and its fate. · Contrast the evolution of low-mass and high-mass stars.
- Unit 3, Module 11 *Stellar Remnants*: Describe white dwarfs, neutron stars and black holes and the mass ranges that produce each. · Explain what a supernova is and why it matters for the chemical elements. · Explain what the event horizon of a black hole is and how black holes are detected.
- Unit 4, Module 12 *The Milky Way*: Describe the structure of the Milky Way: disk, bulge, halo and spiral arms. · Locate the Sun in the Galaxy and describe the Galaxy's rotation. · Explain how the rotation curve provides evidence for dark matter.
- Unit 4, Module 13 *Galaxies and Cosmic Distances*: Classify galaxies as spiral, elliptical or irregular. · Explain how standard candles build the cosmic distance ladder. · Use Hubble's law to relate a galaxy's redshift to its distance.
- Unit 4, Module 14 *The Big Bang and the Fate of the Universe*: Describe the evidence for the Big Bang: the expansion, the cosmic microwave background and the abundance of light elements. · Explain dark matter and dark energy and the evidence for each. · Describe the main possibilities for the future of the universe.
- Unit 5, Module 15 *Detecting Exoplanets*: Explain the transit and radial-velocity methods and what each measures. · Describe the kinds of exoplanets discovered and the biases in the discoveries. · Interpret a transit light curve.
- Unit 5, Module 16 *Habitability and the Search for Life*: Define the habitable zone and explain why it is not the only place life might exist. · Describe the conditions life on Earth needs and where else in the solar system they may occur. · Explain how the Drake equation organizes the question of intelligent life.
