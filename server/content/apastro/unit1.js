import { mc, tf } from '../builder.js';

export default {
  summary: 'Everything in astronomy begins with what we see from Earth. Learn why the sky moves, why we have seasons, phases and eclipses, and how gravity governs orbits.',
  modules: {
    1: {
      summary: 'The sky, seasons, phases and eclipses.',
      sessions: [{
        t: 'Why the sky changes',
        s: 'Daily motion, seasons, lunar phases and eclipses.',
        md: `
## The daily sky
Earth **rotates** once about every 24 hours (a solar day; a **sidereal day**, measured against the stars, is about 23 hours 56 minutes). This makes the Sun, Moon and stars appear to rise in the east and set in the west. The **celestial sphere** is a model that places all objects on a sphere around Earth.

For a northern observer, **Polaris** (the North Star) sits almost directly above Earth's rotation axis, so its altitude above the horizon equals the observer's **latitude**. At latitude 40° N, Polaris is about 40° above the horizon.

## Seasons
Earth's axis is **tilted by 23.5°**. Seasons result from this tilt, **not** from changing distance from the Sun. When the Northern Hemisphere tilts toward the Sun, it receives more direct sunlight and longer days (summer). Earth is actually **closest** to the Sun in early January, during Northern Hemisphere winter.

- **Solstices:** around June 21 and December 21, when the Sun reaches its highest or lowest noon position.
- **Equinoxes:** around March 20 and September 22, when day and night are nearly equal.

## Phases of the Moon
Half of the Moon is always lit by the Sun. We see different amounts of the lit half as the Moon orbits Earth, which takes about **29.5 days** from one new moon to the next.
- **New Moon:** the Moon is between Earth and Sun and its lit side faces away from us.
- **Full Moon:** Earth is between the Sun and Moon, and we see the whole lit side.
- Phases are **not** caused by Earth's shadow.

## Eclipses
- A **solar eclipse** occurs at **new moon**, when the Moon passes between the Sun and Earth.
- A **lunar eclipse** occurs at **full moon**, when the Moon passes into Earth's shadow.
- They do not occur every month because the Moon's orbit is **tilted about 5°** relative to Earth's orbit, so the Sun, Earth and Moon rarely line up exactly.
`,
        q: [
          mc('What causes Earth’s seasons?', 'The 23.5° tilt of Earth’s rotation axis', 'The tilt changes the directness of sunlight and length of day through the year.', [
            ['Earth’s changing distance from the Sun', 'Earth is closest to the Sun in January, during Northern Hemisphere winter.'],
            ['The shadow of the Moon', 'The Moon does not cause seasons.'],
            ['The Sun’s changing brightness over each year', 'The Sun’s output is nearly constant over a year.'],
          ]),
          mc('Why does a solar eclipse not occur at every new moon?', 'The Moon’s orbit is tilted about 5° relative to Earth’s orbit around the Sun', 'The three bodies usually do not line up exactly.', [
            ['The Moon is too far away', 'The Moon’s distance is not the reason; alignment is.'],
            ['Eclipses only happen at full moon', 'Solar eclipses happen at new moon.'],
            ['Earth’s shadow covers the Moon each month', 'This describes a lunar eclipse and does not explain why solar eclipses are rare.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Gravity and orbits.',
      sessions: [{
        t: 'Kepler, Newton and orbits',
        s: 'The laws that describe how planets move.',
        md: `
## Kepler's laws
Johannes Kepler used Tycho Brahe's careful observations to discover three laws:
1. **Law of ellipses:** each planet moves in an **ellipse** with the Sun at one focus.
2. **Law of equal areas:** a line from the Sun to a planet sweeps out equal areas in equal times, so a planet moves **faster** when closer to the Sun (at **perihelion**) and slower when farther (at **aphelion**).
3. **Harmonic law:** P² = a³, where **P** is the orbital period in **years** and **a** is the semi-major axis in **astronomical units (AU)**. One AU is the average Earth–Sun distance, about 150 million km.

### Worked examples
- A planet with a = 4 AU has P² = 4³ = 64, so **P = 8 years**.
- An asteroid with period 27 years has a³ = 27² = 729, so **a = 9 AU**.

## Newton's law of gravitation
Every mass attracts every other mass with a force:

**F = G m₁ m₂ / r²**

The force is proportional to each mass and falls with the **square** of the distance. If the distance doubles, the force becomes **one quarter**. Newton showed that this law explains Kepler's laws. An orbit is a **continuous fall**: an object moves sideways fast enough that it keeps missing the body it falls toward.

## Orbits in general
Orbits can be ellipses, parabolas or hyperbolas. A bound orbit requires speed below **escape velocity**.
`,
        q: [
          mc('A planet orbits the Sun at an average distance of 4 AU. What is its orbital period?', '8 years', 'P² = a³ = 64, so P = 8 years.', [
            ['4 years', 'This sets the period equal to the distance, but Kepler’s law uses P² = a³.'],
            ['16 years', 'This squares the distance (4²) instead of using P² = a³.'],
            ['64 years', 'This is a³, which equals P², not P.'],
          ]),
          mc('According to Kepler’s second law, a planet moves fastest', 'when it is closest to the Sun', 'It sweeps equal areas in equal times, so it speeds up at perihelion.', [
            ['when it is farthest from the Sun', 'It moves slowest at aphelion.'],
            ['at a constant speed in every part of the orbit', 'Speed varies along an elliptical orbit.'],
            ['only during summer', 'Seasons do not control orbital speed.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The Sky and Its Motions',
    tasks: [
      mc('At a latitude of 40° N, about how high above the horizon is Polaris?', 'About 40°', 'Polaris’s altitude equals the observer’s latitude.', [
        ['About 50°', 'This is 90° minus the latitude, which is the angle from the zenith.'],
        ['About 23.5°', 'This is Earth’s axial tilt and not the altitude of Polaris.'],
        ['About 0°', 'Polaris is on the horizon only at the equator.'],
      ]),
      mc('When is Earth closest to the Sun?', 'In early January', 'This is during Northern Hemisphere winter, which shows that distance does not cause the seasons.', [
        ['In late June', 'Earth is farthest from the Sun in early July.'],
        ['At the summer solstice in the Northern Hemisphere', 'The solstice occurs in June, when Earth is not closest.'],
        ['At the March equinox only', 'Earth’s distance does not follow the equinoxes.'],
      ]),
      mc('Which lunar phase occurs during a solar eclipse?', 'New Moon', 'The Moon is between the Sun and Earth.', [
        ['Full Moon', 'A lunar eclipse occurs at full moon.'],
        ['First quarter', 'The Moon is not aligned with the Sun and Earth at this phase.'],
        ['Waning crescent only', 'Solar eclipses occur at new moon, not in a crescent phase.'],
      ]),
      mc('An asteroid orbits the Sun with a period of 27 years. Its semi-major axis is', '9 AU', 'a³ = P² = 729, so a = 9 AU.', [
        ['3 AU', 'This is the cube root of 27, which confuses P with a³.'],
        ['27 AU', 'This sets a equal to P, but P² = a³.'],
        ['729 AU', 'This is P squared, not the cube root of it.'],
      ]),
      mc('The distance between two masses doubles. The gravitational force between them becomes', 'one quarter as strong', 'Force falls with the square of the distance: 1/2² = 1/4.', [
        ['half as strong', 'Gravity depends on the square of distance.'],
        ['twice as strong', 'Force decreases with distance.'],
        ['unchanged', 'The force depends on distance.'],
      ]),
      mc('Which statement about the phases of the Moon is correct?', 'They result from our changing view of the Moon’s lit half as it orbits Earth', 'Half of the Moon is always illuminated.', [
        ['They are caused by Earth’s shadow falling on the Moon', 'Earth’s shadow causes lunar eclipses.'],
        ['They are caused by clouds', 'Clouds do not cause lunar phases.'],
        ['The Moon changes its shape', 'The Moon’s shape does not change.'],
      ]),
      tf('Earth’s seasons are caused by its changing distance from the Sun.', false, 'The seasons are caused by the tilt of Earth’s axis.', 'Correct. Earth is closest to the Sun in early January.'),
    ],
  },
};
