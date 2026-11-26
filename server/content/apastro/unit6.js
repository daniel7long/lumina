import { mc, tf } from '../builder.js';

export default {
  summary: 'Stars gather into galaxies, and galaxies fill an expanding universe. Learn the structure of our galaxy and how Hubble discovered the expansion.',
  modules: {
    11: {
      summary: 'The Milky Way and other galaxies.',
      sessions: [{
        t: 'Galaxies and how far away they are',
        s: 'The Milky Way, galaxy types and standard candles.',
        md: `
## The Milky Way
The Milky Way is a **barred spiral galaxy** about **100,000 light-years** across, containing hundreds of billions of stars. Its parts are:
- the **disk**, containing spiral arms, gas, dust and young stars;
- the central **bulge**;
- the **halo**, a roughly spherical region with old stars and **globular clusters**.

The Sun lies about **26,000 light-years** from the center and orbits it about once every **230 million years**. At the center is a **supermassive black hole**, **Sagittarius A***, of about 4 million solar masses.

## Types of galaxies
Edwin Hubble classified galaxies:
- **Spiral:** disks with arms, gas and ongoing star formation.
- **Elliptical:** smooth, rounded, with old stars and little gas.
- **Irregular:** no regular shape, often rich in gas and young stars.

Galaxies form **groups and clusters**. The Milky Way belongs to the **Local Group**, which includes the **Andromeda Galaxy**, about **2.5 million light-years** away. Galaxies can **collide and merge**.

## The distance ladder
No single method works at all distances, so astronomers build a **distance ladder**:
1. **Parallax** for nearby stars.
2. **Standard candles**, objects of known luminosity, whose apparent brightness gives distance.
   - **Cepheid variable stars:** their pulsation period is linked to luminosity (**period–luminosity relation**, discovered by **Henrietta Leavitt**), so measuring the period gives the luminosity and then the distance.
   - **Type Ia supernovae:** very luminous and visible at great distances.
3. **Hubble's law** for the most distant galaxies.
`,
        q: [
          mc('What kind of galaxy is the Milky Way?', 'A barred spiral galaxy', 'It has a central bar and spiral arms.', [
            ['An elliptical galaxy', 'Elliptical galaxies are smooth with little gas and no spiral arms.'],
            ['An irregular galaxy', 'The Milky Way has a clear structure.'],
            ['A globular cluster', 'A globular cluster is a small group of old stars in the halo.'],
          ]),
          mc('Why are Cepheid variable stars useful for measuring distances?', 'Their pulsation period tells us their luminosity, so their apparent brightness gives distance', 'They are standard candles calibrated by period.', [
            ['They are always exactly one parsec away', 'Cepheids lie at many distances.'],
            ['They do not change in brightness', 'They vary in brightness.'],
            ['They are the largest galaxies', 'They are stars.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Hubble’s law and the expanding universe.',
      sessions: [{
        t: 'The universe is expanding',
        s: 'Redshift, recession and Hubble’s law.',
        md: `
## Redshift and recession
In the 1920s Vesto Slipher and then Edwin Hubble found that the spectral lines of distant galaxies are **redshifted**, and that the **more distant** a galaxy is, the **faster** it is moving away. In **1929** Hubble published this relationship, now called **Hubble's law**:

**v = H₀ d**

where **v** is the recession velocity, **d** is the distance and **H₀** is the **Hubble constant**, about **70 km/s per megaparsec (Mpc)**. (One megaparsec is about 3.26 million light-years.)

### Worked examples
- A galaxy 100 Mpc away: v = 70 × 100 = **7,000 km/s**.
- A galaxy receding at 14,000 km/s: d = 14,000 / 70 = **200 Mpc**.
- A galaxy with redshift z = 0.01: v ≈ cz = 0.01 × 300,000 = 3,000 km/s, so d ≈ 3,000 / 70 ≈ **43 Mpc**. (This approximation holds for small z.)

## Interpreting expansion
The galaxies are not moving *through* space away from a center. **Space itself expands**, and the light's wavelength **stretches** as it travels, called **cosmological redshift**. An analogy is dots on the surface of an inflating balloon: every dot sees all the others move away, and there is no center on the surface.

## Age of the universe
Running the expansion backward, the universe was once extremely hot and dense. A simple estimate of its age is **1 / H₀**, about **14 billion years**. More careful measurements give about **13.8 billion years**.
`,
        q: [
          mc('Using H₀ = 70 km/s/Mpc, how fast is a galaxy 100 Mpc away receding?', '7,000 km/s', 'v = H₀ d = 70 × 100 = 7,000 km/s.', [
            ['70 km/s', 'This is the Hubble constant and not the velocity at 100 Mpc.'],
            ['700 km/s', 'This is ten times too small.'],
            ['70,000 km/s', 'This is ten times too large.'],
          ]),
          mc('How does the expanding-universe picture explain the redshift of distant galaxies?', 'Space itself expands, stretching the wavelength of light as it travels', 'This is the cosmological redshift.', [
            ['Galaxies are moving away from a center point in space', 'Expansion has no center; every observer sees the same pattern.'],
            ['Distant galaxies are cooler than nearby ones', 'Redshift is caused by expansion, not by temperature differences.'],
            ['Light is absorbed by dust in each galaxy', 'Absorption does not shift spectral lines.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Galaxies and the Expanding Universe',
    tasks: [
      mc('Where is the Sun located in the Milky Way?', 'In the disk, about 26,000 light-years from the center', 'We live in the galactic disk, far from the center.', [
        ['At the center of the galaxy', 'The center holds a supermassive black hole.'],
        ['In the halo among globular clusters', 'The Sun is in the disk.'],
        ['Outside the galaxy', 'The Sun is a member of the Milky Way.'],
      ]),
      mc('Which galaxy type is mostly old stars with little gas and no spiral arms?', 'Elliptical', 'They have little star formation.', [
        ['Spiral', 'Spiral galaxies have arms and ongoing star formation.'],
        ['Irregular', 'Irregular galaxies often have much gas and young stars.'],
        ['Barred spiral', 'A barred spiral is a kind of spiral galaxy.'],
      ]),
      mc('What is at the center of the Milky Way?', 'A supermassive black hole called Sagittarius A*', 'Orbits of stars near the center reveal its mass.', [
        ['A giant star', 'No star can account for the mass.'],
        ['A planetary nebula', 'This is the shell of a dying star.'],
        ['The Sun', 'The Sun orbits the center.'],
      ]),
      mc('A galaxy is receding at 14,000 km/s. Using H₀ = 70 km/s/Mpc, how far away is it?', '200 Mpc', 'd = v / H₀ = 14,000 / 70 = 200 Mpc.', [
        ['2 Mpc', 'This is a hundred times too small.'],
        ['20 Mpc', 'This is ten times too small.'],
        ['980,000 Mpc', 'This multiplies instead of dividing.'],
      ]),
      mc('Which statement about the expansion of the universe is correct?', 'Space itself expands, so every galaxy cluster sees others moving away', 'There is no center of the expansion.', [
        ['Galaxies fly outward from a point where the Big Bang took place', 'The Big Bang happened everywhere, not at one point in space.'],
        ['Only the Milky Way is at the center of the expansion', 'No galaxy is the center.'],
        ['Expansion pulls galaxies, planets and atoms apart equally', 'Bound systems held together by gravity do not expand.'],
      ]),
      mc('1/H₀ gives an estimate of', 'the age of the universe, about 14 billion years', 'Running the expansion backward gives the time since it began.', [
        ['the size of the Milky Way', 'The Hubble constant concerns expansion.'],
        ['the temperature of the cosmic microwave background', 'It is not related to this estimate.'],
        ['the distance to Andromeda', 'Andromeda’s distance is about 2.5 million light-years.'],
      ]),
      tf('Cepheid variables and Type Ia supernovae are both used as standard candles.', true, 'Correct. Each has a known luminosity that lets astronomers find distance from apparent brightness.', 'Both are standard candles, so the statement is true.'),
    ],
  },
};
