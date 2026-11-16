import { mc, tf } from '../builder.js';

export default {
  summary: 'Get your bearings: the scale of the universe, how the sky appears from Earth, how Earth and the Moon move, and how light carries information to our telescopes.',
  modules: {
    1: {
      summary: 'Distances in astronomy, the celestial sphere and the constellations.',
      sessions: [
        {
          t: 'The scale of the universe',
          s: 'Astronomical units, light-years and the size of things.',
          md: `
## How big is the universe?

Astronomical distances are far too large for kilometres, so astronomers use units built from light and from the Earth–Sun distance.

| Unit | Meaning | Size |
| --- | --- | --- |
| **Astronomical unit (AU)** | Average Earth–Sun distance | about 150 million km |
| **Light-year (ly)** | Distance light travels in one year | about 9.46 trillion km |

A light-year is a **distance**, not a time. Light is fast (about 300,000 km per second) but not instant: sunlight takes about **8 minutes** to reach us, and light from the nearest other star, **Proxima Centauri**, takes **4.2 years**.

### A ladder of scales
1. **Solar system:** the Sun, the planets and small bodies. Neptune is about 30 AU from the Sun.
2. **Stars:** the nearest are a few light-years apart.
3. **Galaxy:** the Milky Way holds hundreds of billions of stars in a disk about 100,000 ly across.
4. **Galaxy groups and clusters**, then **superclusters** and the cosmic web.
5. **The observable universe:** the part we can see, containing hundreds of billions of galaxies.

### Looking far means looking back
Because light takes time to travel, we see every object as it **was**. A galaxy 10 million light-years away is seen as it was 10 million years ago. Telescopes are therefore also time machines.
`,
          q: [
            mc('A star is 20 light-years away. What does this mean?', 'Its light takes 20 years to reach us, so we see it as it was 20 years ago', 'A light-year is a distance, and the travel time of its light tells us how far back in time we are looking.', [
              ['The star is 20 years old', 'A light-year measures distance, not the age of a star.'],
              ['The star will reach us in 20 years', 'The star is not moving toward us at the speed of light. Its light is what takes 20 years.'],
            ]),
            mc('Which is the correct order from smallest to largest?', 'Solar system, Milky Way, galaxy cluster', 'A galaxy contains many star systems, and clusters contain many galaxies.', [
              ['Milky Way, solar system, galaxy cluster', 'The solar system sits inside the Milky Way, so it is smaller.'],
              ['Galaxy cluster, Milky Way, solar system', 'This order runs from largest to smallest.'],
            ]),
          ],
        },
        {
          t: 'The celestial sphere and the constellations',
          s: 'Finding objects in the sky and why constellations are only patterns.',
          md: `
## The sky as a sphere

From Earth the sky looks like a giant dome. Astronomers picture a **celestial sphere** around us and describe where objects appear on it. The sphere does not exist, but it is a handy model for directions.

### Two ways to give a position
| System | Coordinates | Depends on |
| --- | --- | --- |
| **Horizon (local)** | **Altitude** (0° at the horizon to 90° at the zenith) and **azimuth** (compass bearing, measured from north through east) | Your place and the time |
| **Equatorial (fixed)** | **Declination** (like latitude) and **right ascension** (like longitude, in hours) | Only the object, so it works as a catalogue |

The point straight overhead is the **zenith**. The sky seems to turn each night because **Earth rotates**. The north celestial pole, close to the star **Polaris**, stays put, and its altitude equals your **latitude**: Polaris is about 40° up from latitude 40° N.

### Constellations
A **constellation** is a region of the sky, and the 88 official ones cover the whole sphere. The star patterns are only **sight lines**: the stars in one constellation are often at very different distances and are not physically connected. Seen from another star system, the patterns would look completely different.
`,
          q: [
            mc('An observer at latitude 50° N looks at Polaris. About how high above the horizon is it?', '50°', 'The altitude of the north celestial pole equals the observer\'s latitude.', [
              ['90°', 'Polaris is at the zenith only at the North Pole.'],
              ['0°', 'Polaris is on the horizon only at the equator.'],
            ]),
            tf('The stars in a constellation are physically close to one another.', false, 'The stars only appear close together along our line of sight. They can be at very different distances.', 'Correct. A constellation is a pattern on the sky, and its stars can lie hundreds of light-years apart in depth.'),
          ],
        },
      ],
    },
    2: {
      summary: 'Rotation, tilt and orbits explain day, night, the seasons, the lunar phases and eclipses.',
      sessions: [
        {
          t: 'Day, night and the seasons',
          s: 'How rotation and axial tilt shape what we see.',
          md: `
## Earth's motions

Earth does two main things at once:

- **Rotation:** it spins once about every 24 hours, giving **day and night** and the apparent daily motion of the Sun, Moon and stars.
- **Revolution:** it orbits the Sun once a year.

### The cause of the seasons
Earth's spin axis is **tilted 23.5°** from the perpendicular to its orbit and keeps pointing the same way (toward Polaris) all year. So for half the year the northern hemisphere leans **toward** the Sun, and for the other half, **away**.

| | Sun's path | Result |
| --- | --- | --- |
| Hemisphere tilted toward the Sun | High in the sky, long days | Direct sunlight, **summer** |
| Hemisphere tilted away | Low in the sky, short days | Slanting sunlight, **winter** |

The **solstices** (about June 21 and December 21) are the extremes, and the **equinoxes** (about March 20 and September 22) are when day and night are nearly equal.

> **Common mistake:** the seasons are **not** caused by changing distance from the Sun. Earth is actually closest to the Sun in early January, when it is winter in the northern hemisphere. If the distance mattered, both hemispheres would have the same season at the same time. They do not.
`,
          q: [
            mc('What causes the seasons on Earth?', 'The tilt of Earth\'s axis as it orbits the Sun', 'Tilt changes how directly sunlight strikes each hemisphere and how long the days are.', [
              ['Earth\'s changing distance from the Sun', 'Earth is closest to the Sun in January, in the middle of northern winter.'],
              ['The Moon\'s gravity', 'The Moon does not control the seasons.'],
            ]),
            mc('When it is summer in Australia, it is', 'Winter in Canada', 'The two hemispheres are tilted in opposite directions relative to the Sun.', [
              ['Summer in Canada', 'Canada is in the northern hemisphere, which is tilted away from the Sun at that time.'],
              ['Spring in both', 'The hemispheres have opposite seasons.'],
            ]),
          ],
        },
        {
          t: 'Phases of the Moon and eclipses',
          s: 'Why the Moon changes shape and why eclipses are rare.',
          md: `
## Lunar phases

The Moon shines by reflected sunlight, and **half of it is always lit**. The **phase** we see depends on how much of the lit half faces Earth, which depends on where the Moon is in its orbit relative to the Sun.

New → waxing crescent → first quarter → waxing gibbous → **full** → waning gibbous → third quarter → waning crescent → new

- **New Moon:** the Moon is between Earth and Sun, and its lit side faces away from us.
- **Full Moon:** Earth is between Sun and Moon, so we see the whole lit side.
- The cycle takes about **29.5 days**. The Moon always shows us the same face because it rotates once per orbit.

> Phases are **not** caused by Earth's shadow. The shadow matters only in an eclipse.

### Eclipses
- A **solar eclipse** happens at **new Moon**, when the Moon's shadow falls on Earth. Totality is visible only along a narrow path.
- A **lunar eclipse** happens at **full Moon**, when the Moon passes into Earth's shadow, and anyone on the night side can see it.

There is not an eclipse every month because the Moon's orbit is **tilted about 5°** to Earth's orbit. Most months the Moon passes above or below the line from the Sun to Earth.
`,
          q: [
            mc('During which phase can a lunar eclipse occur?', 'Full Moon', 'The Moon must be on the far side of Earth from the Sun to enter Earth\'s shadow.', [
              ['New Moon', 'New Moon is when a solar eclipse can occur.'],
              ['First quarter', 'At first quarter the Moon is far from the Sun–Earth line.'],
            ]),
            mc('Why do we not see a solar eclipse every month?', 'The Moon\'s orbit is tilted relative to Earth\'s orbit around the Sun', 'Most new Moons miss the Sun–Earth line, passing above or below it.', [
              ['The Moon is too small to block the Sun', 'The Moon\'s apparent size is about the same as the Sun\'s, so it can block it completely.'],
              ['Earth\'s shadow covers the Moon every month', 'That describes a lunar eclipse, and it does not happen every month either.'],
            ]),
          ],
        },
      ],
    },
    3: {
      summary: 'The properties of light, what spectra reveal and how telescopes work.',
      sessions: [
        {
          t: 'Light and the electromagnetic spectrum',
          s: 'Wavelength, frequency, energy and what spectra tell us.',
          md: `
## Light as a wave

Light is **electromagnetic radiation**. It travels at about **300,000 km/s** in a vacuum, and its wavelength and frequency are linked by

**c = λ × f**

so a **shorter wavelength** means a **higher frequency** and **more energy** per photon.

### The electromagnetic spectrum
From long to short wavelength: **radio → microwave → infrared → visible → ultraviolet → X-ray → gamma ray.** Visible light is only a small slice, from red (longest) to violet (shortest).

### Reading a spectrum
Splitting light into its colours gives a **spectrum**:

| Type | What it looks like | Source |
| --- | --- | --- |
| **Continuous** | A smooth rainbow | A hot, dense object |
| **Emission lines** | Bright lines on dark | A hot, thin gas |
| **Absorption lines** | Dark lines on a rainbow | Cooler gas in front of a hot source |

Each element has its own **line pattern**, so spectra reveal **composition**. The **peak colour** of a continuous spectrum reveals **temperature**: hotter objects peak at shorter wavelengths, which is why a hot star looks blue and a cool one red.

### The Doppler shift
If a source moves **away**, its lines shift to longer wavelengths (**redshift**). If it moves **toward** us, they shift to shorter wavelengths (**blueshift**). The size of the shift gives the speed along the line of sight.
`,
          q: [
            mc('Which type of light has the most energy per photon?', 'Gamma rays', 'They have the shortest wavelength and highest frequency in the spectrum.', [
              ['Radio waves', 'Radio waves have the longest wavelengths and the least energy.'],
              ['Visible light', 'Visible light lies in the middle of the spectrum.'],
            ]),
            mc('The spectral lines of a galaxy are shifted toward longer wavelengths. What does this tell us?', 'The galaxy is moving away from us', 'A shift to longer wavelengths is a redshift, caused by motion away from the observer.', [
              ['The galaxy is moving toward us', 'Motion toward us causes a shift to shorter wavelengths (blueshift).'],
              ['The galaxy is hotter than the Sun', 'Temperature is read from the peak colour of the continuous spectrum, not from a shift of the lines.'],
            ]),
          ],
        },
        {
          t: 'Telescopes and the atmosphere',
          s: 'Collecting light, seeing detail and observing from space.',
          md: `
## What telescopes do

A telescope has two main jobs:

1. **Light-gathering power:** the larger the collecting area, the fainter the objects you can see. Area grows with the **square of the diameter**, so a 10 m mirror collects 100 times more light than a 1 m mirror.
2. **Resolution:** the ability to see fine detail. Larger telescopes give sharper images, and shorter wavelengths give finer detail.

### Refractors and reflectors
- A **refracting** telescope focuses light with a **lens**.
- A **reflecting** telescope focuses light with a **mirror**.

Almost all large research telescopes are **reflectors**. A mirror can be supported from behind, which lets it be made very large, and it does not split light into colours the way a lens does.

### Observing through the atmosphere
Earth's atmosphere is **transparent** to visible light and radio waves, but it **blocks** most **ultraviolet, X-ray, gamma-ray** and much **infrared** radiation. It also blurs images (twinkling). Astronomers respond by:

- building observatories on **high, dry mountains**;
- using **adaptive optics** to cancel the blur;
- launching **space telescopes** such as Hubble (mostly visible and ultraviolet) and the James Webb Space Telescope (infrared).

Observing at **many wavelengths** matters because different processes shine at different wavelengths: cool dust glows in the infrared, hot gas around black holes in X-rays.
`,
          q: [
            mc('How much more light does a 4 m mirror collect than a 2 m mirror?', '4 times as much', 'Collecting area is proportional to the square of the diameter, and 2² = 4.', [
              ['2 times as much', 'Light collection grows with area, not with diameter.'],
              ['8 times as much', 'That would follow from the cube of the diameter, which is not how area works.'],
            ]),
            mc('Why are X-ray telescopes placed in space?', 'Earth\'s atmosphere absorbs X-rays', 'X-rays cannot reach the ground, so they must be observed above the atmosphere.', [
              ['X-rays are too slow to reach the ground', 'X-rays travel at the speed of light. The atmosphere absorbs them.'],
              ['Space has no X-ray background', 'The reason is the atmosphere\'s absorption, not the background.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Observing the sky',
    tasks: [
      mc('Light from a galaxy takes 50 million years to reach Earth. What do we see?', 'The galaxy as it was 50 million years ago', 'Light travel time means we see distant objects in the past.', [
        ['The galaxy as it is now', 'We cannot see the present state of a distant object.'],
        ['The galaxy as it will be in 50 million years', 'Light carries information from the past, not the future.'],
        ['Only its largest stars', 'The light travel time applies to all of its light.'],
      ]),
      mc('Which statement about a light-year is correct?', 'It is a unit of distance', 'A light-year is how far light travels in a year.', [
        ['It is a unit of time', 'The name is misleading, but it measures distance.'],
        ['It is a unit of speed', 'Speed would be a distance per time, such as km/s.'],
        ['It is the age of a star', 'Age is measured in years, not light-years.'],
      ]),
      mc('Why does Earth have seasons?', 'Its axis is tilted about 23.5° and keeps pointing the same way', 'The tilt changes the angle and length of daylight over the year.', [
        ['It moves much closer to the Sun in summer', 'Earth is closest to the Sun in January.'],
        ['The Sun\'s output changes each season', 'The Sun\'s output hardly changes over a year.'],
        ['Its rotation speeds up and slows down', 'Earth\'s rotation is steady over a year.'],
      ]),
      mc('A Moon with its whole lit face turned toward Earth is in which phase?', 'Full Moon', 'Earth is then between the Sun and the Moon.', [
        ['New Moon', 'At new Moon the lit side faces away from Earth.'],
        ['First quarter', 'At first quarter we see half of the lit side.'],
        ['Waning crescent', 'A crescent shows only a thin part of the lit side.'],
      ]),
      mc('A star\'s spectrum has dark lines on a continuous rainbow. What produced them?', 'Cooler gas absorbing certain colours from the light behind it', 'Absorption lines come from cooler gas between the observer and a hotter source.', [
        ['A hot, thin gas glowing by itself', 'That produces emission lines, which are bright on a dark background.'],
        ['A solid, cold object', 'A cold object does not produce a rainbow with lines.'],
        ['Reflection from a planet', 'Reflected light does not by itself explain dark lines.'],
      ]),
      mc('Why do most large research telescopes use mirrors rather than lenses?', 'A mirror can be supported from behind and made very large', 'This allows larger collecting area and avoids splitting light into colours.', [
        ['Mirrors are lighter than any lens', 'Weight is not the main reason.'],
        ['Lenses cannot focus visible light', 'Lenses can focus visible light, as in refractors.'],
        ['Mirrors work only in space', 'Large mirror telescopes work well on the ground.'],
      ]),
      tf('The seasons occur because Earth is closer to the Sun in summer than in winter.', false, 'The distance does not control the seasons. Earth is closest in early January.', 'Correct. The tilt of Earth\'s axis causes the seasons.'),
      tf('A solar eclipse can only happen at new Moon.', true, 'Correct. The Moon must be between Earth and the Sun.', 'At full Moon the Moon is on the far side of Earth, so it cannot block the Sun.'),
    ],
  },
};
