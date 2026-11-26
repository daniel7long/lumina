import { mc, tf } from '../builder.js';

export default {
  summary: 'Cosmology asks how the universe began, what it is made of and how it will end. Study the evidence for the Big Bang and the puzzles of dark matter and dark energy.',
  modules: {
    13: {
      summary: 'The Big Bang and its evidence.',
      sessions: [{
        t: 'A hot beginning',
        s: 'Three lines of evidence for the Big Bang.',
        md: `
## The Big Bang model
About **13.8 billion years ago**, the universe was extremely hot and dense, and it has been expanding and cooling ever since. The Big Bang is not an explosion at a point in space. It describes the expansion of space itself everywhere.

## Evidence
1. **Expansion:** galaxies recede with velocities proportional to distance (Hubble's law).
2. **Cosmic microwave background (CMB):** a faint glow of microwaves coming from all directions, with a blackbody temperature of about **2.7 K**. It was discovered by **Arno Penzias and Robert Wilson** in **1965**. It is light released about **380,000 years** after the Big Bang, when the universe cooled enough for atoms to form and become transparent. Tiny **temperature variations** in the CMB reflect the seeds of later galaxies.
3. **Abundances of light elements:** in the first minutes, nuclei formed (**Big Bang nucleosynthesis**), producing about **75% hydrogen and 25% helium** by mass with trace lithium. This matches observations of the oldest stars and gas.

## Early history
- **Inflation (proposed):** a brief period of very rapid expansion that explains why the universe is so uniform and flat.
- **Nucleosynthesis:** the first few minutes.
- **Recombination:** about 380,000 years, when the CMB was released.
- **Dark ages and first stars:** hundreds of millions of years later.
- **Galaxies** grow through gravity and mergers.

The CMB shows how the cooling of radiation over billions of years has stretched its wavelength: it began as hot light and is now seen as microwaves because of the **cosmological redshift**.
`,
        q: [
          mc('Which observation is a key piece of evidence for the Big Bang?', 'The cosmic microwave background radiation', 'It is the relic glow of the hot early universe, now at about 2.7 K.', [
            ['The existence of black holes', 'Black holes do not test the Big Bang.'],
            ['The phases of the Moon', 'The Moon’s phases are unrelated.'],
            ['The 11-year sunspot cycle', 'This is a property of the Sun.'],
          ]),
          mc('What did Big Bang nucleosynthesis produce?', 'Mostly hydrogen and helium', 'About 75% hydrogen and 25% helium by mass, with trace lithium.', [
            ['Carbon, oxygen and iron', 'Heavier elements were made later in stars.'],
            ['Only helium', 'Hydrogen was by far the most abundant.'],
            ['Uranium and gold', 'These were made later in stellar explosions and collisions.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Dark matter, dark energy and life in the universe.',
      sessions: [{
        t: 'What is the universe made of?',
        s: 'Dark matter, dark energy and the search for life.',
        md: `
## Dark matter
Stars in the outer parts of galaxies orbit **faster** than the visible mass can explain. Galaxy clusters hold together too strongly, and **gravitational lensing** bends light more than visible matter allows. The simplest explanation is **dark matter**, matter that exerts gravity but **does not emit or absorb light**. Its nature is unknown.

## Dark energy
In **1998**, two teams observing distant **Type Ia supernovae** found that they were **dimmer** than expected, which means the expansion of the universe is **accelerating**. The cause is called **dark energy**. Its nature is also unknown.

## The cosmic budget
Current measurements suggest that the universe's energy content is about:
- **5%** ordinary matter (atoms),
- **27%** dark matter,
- **68%** dark energy.

So **most of the universe is something we do not yet understand**. The future depends on dark energy: if it continues to drive acceleration, galaxies will become more and more isolated.

## Are we alone?
Astronomers search for **habitable worlds**: planets in the habitable zone, with a rocky surface. They look for **biosignatures** in exoplanet atmospheres, such as oxygen together with methane, and study places in the solar system (Mars, Europa and Enceladus) for evidence of past or present life. The **Drake equation** is a way to organize the factors that determine how many communicating civilizations might exist, though most of its terms are very uncertain. So far, no confirmed signs of life beyond Earth have been found.

### Thinking like a scientist
In science, "dark" means unseen, not mysterious in a magical sense. Dark matter and dark energy are placeholders for effects that are measured but not yet explained.
`,
        q: [
          mc('What observation provided evidence for dark matter?', 'Stars at the edges of galaxies orbit faster than visible matter can explain', 'Extra unseen mass is needed to supply gravity.', [
            ['The Moon’s phases', 'Lunar phases are unrelated.'],
            ['The detection of exoplanets by transits', 'This is a planet-detection method.'],
            ['The color of the Sun', 'It is unrelated to dark matter.'],
          ]),
          mc('What did the 1998 observations of distant Type Ia supernovae show?', 'The expansion of the universe is accelerating', 'The supernovae were dimmer, so farther, than expected.', [
            ['The universe is contracting', 'The observations show acceleration of expansion.'],
            ['The Sun will become a supernova', 'The Sun will not.'],
            ['Dark matter is made of black holes', 'The observations do not show this.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Cosmology',
    tasks: [
      mc('About how old is the universe?', 'About 13.8 billion years', 'This comes from measurements of expansion and the CMB.', [
        ['About 4.6 billion years', 'This is the age of the solar system.'],
        ['About 138 million years', 'This is far too young.'],
        ['About 138 billion years', 'This is ten times too old.'],
      ]),
      mc('The cosmic microwave background has a temperature of about', '2.7 K', 'It is the relic of the hot early universe.', [
        ['2,700 K', 'This is closer to the temperature at which the CMB was released.'],
        ['27 K', 'It is about ten times colder than this.'],
        ['5,800 K', 'This is the temperature of the Sun’s surface.'],
      ]),
      mc('Who discovered the cosmic microwave background in 1965?', 'Penzias and Wilson', 'They detected the microwave glow from all directions.', [
        ['Kepler and Newton', 'They worked in the seventeenth century.'],
        ['Hubble and Leavitt', 'They worked on galaxies and Cepheids.'],
        ['Chandrasekhar and Bethe', 'They worked on stellar physics.'],
      ]),
      mc('Which fraction of the universe is ordinary matter?', 'About 5%', 'Dark matter and dark energy make up the rest.', [
        ['About 50%', 'This is far too high.'],
        ['About 27%', 'This is the share of dark matter.'],
        ['About 68%', 'This is the share of dark energy.'],
      ]),
      mc('Which is a piece of evidence for dark matter?', 'Gravitational lensing and galaxy rotation curves that require more mass than is visible', 'Unseen mass is needed to explain them.', [
        ['The redshift of the Sun’s light', 'This is not evidence for dark matter.'],
        ['The temperature of the corona', 'It is unrelated.'],
        ['The existence of comets', 'It is unrelated.'],
      ]),
      mc('Which statement about the Big Bang is accurate?', 'It describes the expansion of space everywhere, not an explosion at one point', 'The universe has no center of expansion.', [
        ['It was an explosion of matter into empty space', 'Space itself expanded.'],
        ['It occurred at the center of the Milky Way', 'There is no such center.'],
        ['It was the birth of the Sun', 'The Sun formed much later.'],
      ]),
      tf('Dark energy is the name for the unknown cause of the accelerating expansion of the universe.', true, 'Correct. We do not yet know what it is.', 'This is how the term is used, so the statement is true.'),
    ],
  },
};
