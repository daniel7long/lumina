import { mc, tf } from '../builder.js';

export default {
  summary: 'Explore our home galaxy, the many kinds of galaxies beyond it, how astronomers measure cosmic distances, and the evidence that the universe began in a hot Big Bang and is still expanding.',
  modules: {
    12: {
      summary: 'The structure of the Milky Way and the evidence for dark matter.',
      sessions: [
        {
          t: 'Structure of the Milky Way',
          s: 'Disk, bulge, halo and where the Sun sits.',
          md: `
## Our home galaxy

The **Milky Way** is a **barred spiral galaxy** containing hundreds of billions of stars. Seen from inside, its disk appears as the faint band of light across the night sky.

| Part | Description |
| --- | --- |
| **Disk** | A thin, flat disk about **100,000 light-years** across and about 1,000 light-years thick. It contains most of the stars, the gas and dust, and the **spiral arms** where new stars form. |
| **Bulge** | A dense, roughly spherical, bar-shaped swarm of mostly old stars at the centre. |
| **Halo** | A sparse, spherical region around the galaxy with very old stars and **globular clusters**. |
| **Centre** | A supermassive black hole of about 4 million solar masses. |

### The Sun's place
The Sun lies in the disk, about **26,000 light-years** from the centre, between two major spiral arms. It orbits the centre at about **220 km/s** and takes roughly **230 million years** for one orbit. Since the Sun was born, it has gone around about 20 times.

### Why we see a band of light
Because we are inside the disk, we look through many stars when we look along it. That is why the Milky Way appears as a band. Looking out of the disk, we see far fewer stars. Dust in the disk blocks much of the visible light from the centre, so astronomers study it with **infrared** and **radio** telescopes.
`,
          q: [
            mc('Where is the Sun in the Milky Way?', 'In the disk, about 26,000 light-years from the centre', 'The Sun is in the disk, far from the centre.', [
              ['At the centre of the galaxy', 'The centre holds a supermassive black hole, and the Sun is far from it.'],
              ['In the halo, far above the disk', 'The Sun is in the disk.'],
            ]),
            mc('Why do astronomers use infrared and radio telescopes to study the centre of the Milky Way?', 'Dust in the disk blocks visible light but lets longer wavelengths through', 'Longer wavelengths pass through the dust.', [
              ['The centre emits only infrared light', 'The centre emits many types of light, but the dust blocks the visible light.'],
              ['Visible telescopes cannot work at night', 'Visible-light telescopes work at night. The dust is the issue.'],
            ]),
          ],
        },
        {
          t: 'Galactic rotation and dark matter',
          s: 'Why stars orbit faster than the visible mass allows.',
          md: `
## Weighing a galaxy

Just as Kepler's laws let us weigh the Sun from the planets' orbits, the **orbital speeds** of stars and gas in a galaxy tell us the mass inside their orbits.

### The rotation curve
A **rotation curve** plots orbital speed against distance from the centre. If the visible stars and gas contained nearly all the mass, then far from the centre the speeds should **drop**, as the planets' speeds drop with distance from the Sun.

Instead, the rotation curve of the Milky Way and of other spiral galaxies stays **flat** out to large distances. This means there is much more mass at large radii than we can see.

### Dark matter
The extra mass is called **dark matter**. It does not emit, absorb or reflect light, but it has gravity. It must form a large **halo** around each galaxy, and its total mass is about **five times** that of ordinary matter.

Other evidence supports dark matter:
- **Galaxy clusters** hold together although the visible matter is too little to supply the gravity.
- **Gravitational lensing**: the bending of light around clusters shows more mass than we see.
- The pattern of structure in the early universe.

What dark matter is made of remains unknown. The leading idea is a new kind of particle that interacts only weakly, and experiments are searching for it.
`,
          q: [
            mc('What does a flat rotation curve for a galaxy suggest?', 'There is much more mass in the outer galaxy than the visible matter accounts for', 'Orbital speeds stay high because unseen mass provides extra gravity.', [
              ['The galaxy is not rotating', 'A rotation curve measures the speed of rotation, and the galaxy is rotating.'],
              ['All the mass is in the centre', 'If all the mass were in the centre, speeds would fall with distance.'],
            ]),
            tf('Dark matter is known to be made of ordinary atoms that are too dim to see.', false, 'Calculations of the early universe and of structure show that dark matter cannot be ordinary matter.', 'Correct. What dark matter is remains unknown, but it is not ordinary atoms.'),
          ],
        },
      ],
    },
    13: {
      summary: 'Galaxy types, the distance ladder and Hubble\'s law.',
      sessions: [
        {
          t: 'The zoo of galaxies',
          s: 'Spirals, ellipticals and irregulars.',
          md: `
## Types of galaxy

Edwin Hubble classified galaxies by their shape:

| Type | Appearance | Stars and gas |
| --- | --- | --- |
| **Spiral** (S, or SB if barred) | Flat disk with spiral arms and a central bulge | Gas and dust in the disk, **ongoing star formation**, young blue stars in the arms |
| **Elliptical** (E) | Smooth, featureless, from round to elongated | Mostly **old, red** stars, little gas, little star formation |
| **Irregular** | No clear shape | Often rich in gas and active star formation |

The Milky Way and the Andromeda galaxy are spirals. The largest galaxies are giant ellipticals, which are thought to form from **mergers** of smaller galaxies.

### Galaxies in groups
Galaxies cluster together. The Milky Way belongs to the **Local Group** of several dozen galaxies, dominated by it and Andromeda. Andromeda is about 2.5 million light-years away and is approaching us. In some **4 to 5 billion years** the two galaxies will probably collide and merge.

Collisions and mergers are common and have shaped galaxies over time. Individual stars rarely collide because the distances between them are so vast.

Galaxy clusters are held together by gravity and can contain thousands of galaxies, and they form larger **superclusters** and filaments with huge **voids**, the **cosmic web**.
`,
          q: [
            mc('A galaxy is smooth and round, has little gas and contains mostly old red stars. What type is it?', 'Elliptical', 'Ellipticals have little gas, so star formation has mostly ended.', [
              ['Spiral', 'Spirals have gas, dust and young blue stars in their arms.'],
              ['Irregular', 'Irregular galaxies have no regular shape and are usually rich in gas.'],
            ]),
            mc('What is expected to happen to the Milky Way and Andromeda in billions of years?', 'They will probably merge into one galaxy', 'Andromeda is moving toward us.', [
              ['They will move steadily apart', 'Andromeda is approaching, not receding.'],
              ['Their stars will collide with one another', 'The stars are so far apart that direct collisions between them are very rare.'],
            ]),
          ],
        },
        {
          t: 'The cosmic distance ladder and Hubble\'s law',
          s: 'Measuring distances step by step and finding the expansion.',
          md: `
## Measuring the cosmos

No single method works at all distances, so astronomers use a **distance ladder**: each rung is calibrated by the one below.

1. **Radar and parallax:** distances within the solar system and to nearby stars.
2. **Cepheid variable stars:** stars whose brightness pulses with a period that is linked to their luminosity (the **period–luminosity relation**, found by Henrietta Leavitt). Measure the period, deduce the luminosity, compare with the apparent brightness and obtain the distance. Cepheids reach to tens of millions of light-years.
3. **Type Ia supernovae:** standard candles visible across **billions** of light-years.
4. **Hubble's law** for the most distant galaxies.

### Redshift and Hubble's law
In 1929 Hubble found that almost all galaxies show **redshifts**, and that **farther galaxies recede faster**:

**v = H₀ × d**

where **H₀ ≈ 70 km/s per megaparsec**. A galaxy at 100 megaparsecs recedes at about 7,000 km/s. Turning the law around, a measured redshift gives a **distance**: a galaxy moving away at 14,000 km/s is about 200 megaparsecs away.

### What expansion means
The galaxies are not flying through space away from us. **Space itself is expanding**, and the light waves are stretched along with it, giving a **cosmological redshift**. An observer in any other galaxy would see the same thing, so there is no special centre of expansion.
`,
          q: [
            mc('A galaxy is receding at 7,000 km/s. Using H₀ = 70 km/s per megaparsec, how far away is it?', '100 megaparsecs', 'd = v / H₀ = 7,000 / 70 = 100 megaparsecs.', [
              ['490,000 megaparsecs', 'This multiplies instead of dividing: d = v / H₀.'],
              ['10 megaparsecs', 'The result of v / H₀ is 100, not 10.'],
            ]),
            mc('Why are Cepheid variables useful as distance indicators?', 'Their pulsation period tells us their luminosity', 'Comparing luminosity with apparent brightness gives the distance.', [
              ['They all have exactly the same brightness', 'Their luminosities differ. The period reveals each one\'s luminosity.'],
              ['They are the closest stars to Earth', 'Cepheids are used because they are bright enough to see in other galaxies, not because they are near.'],
            ]),
          ],
        },
      ],
    },
    14: {
      summary: 'Evidence for the Big Bang, dark energy and the future of the universe.',
      sessions: [
        {
          t: 'Evidence for the Big Bang',
          s: 'Expansion, the cosmic microwave background and the first elements.',
          md: `
## The Big Bang theory

If galaxies are moving apart now, then in the past they were closer together. Running the expansion backward, the universe was once **extremely hot and dense**. The **Big Bang theory** says that the universe began about **13.8 billion years ago** and has been expanding and cooling ever since.

> The Big Bang was **not** an explosion at one point in space. It was the expansion of **space itself** everywhere.

### Three main lines of evidence
1. **Expansion:** galaxies recede from us, with speed proportional to distance (Hubble's law).
2. **The cosmic microwave background (CMB):** faint microwave radiation coming from every direction, discovered in 1965 by Penzias and Wilson. It is the **afterglow** of the early universe, released about **380,000 years** after the Big Bang when the universe cooled enough for atoms to form and light could travel freely. Its spectrum is that of a perfect thermal source at **2.7 K**, and it is very uniform, with tiny variations that grew into galaxies.
3. **Light elements:** in the first few minutes the universe was hot enough for fusion. The theory predicts about **75% hydrogen and 25% helium** by mass, with traces of lithium. Observations of the oldest gas agree.

Together these observations, and many others, make the Big Bang the best-supported theory of the origin of the universe.
`,
          q: [
            mc('What is the cosmic microwave background?', 'Leftover radiation from about 380,000 years after the Big Bang, now cooled to 2.7 K', 'It is the afterglow of the early universe.', [
              ['Radiation from the Sun scattered by Earth\'s atmosphere', 'The CMB comes from all directions in space and is not from the Sun.'],
              ['Light from the first stars', 'The CMB is older than the first stars.'],
            ]),
            mc('What does the Big Bang theory predict for the helium abundance, and what is it?', 'About 25% by mass, which agrees with observations', 'This prediction of early nucleosynthesis is confirmed.', [
              ['About 1% by mass, which agrees with observations', 'The observed fraction is about 25%.'],
              ['About 75% by mass, which agrees with observations', 'About 75% is the hydrogen fraction.'],
            ]),
          ],
        },
        {
          t: 'Dark energy and the fate of the universe',
          s: 'An accelerating expansion and what may lie ahead.',
          md: `
## A surprising discovery

Gravity should **slow** the expansion. In 1998, two teams measured distant **Type Ia supernovae** and found that they were **fainter** (so farther away) than expected. The expansion of the universe is **accelerating**.

The cause is called **dark energy**, a form of energy that fills space and pushes it to expand faster. We do not know what it is.

### The cosmic energy budget
| Component | Share of the total |
| --- | --- |
| **Ordinary matter** (atoms: stars, gas, planets, people) | about **5%** |
| **Dark matter** | about **27%** |
| **Dark energy** | about **68%** |

So about 95% of the universe is made of things we do not yet understand.

### Possible futures
- **Continued acceleration (the Big Freeze):** the current evidence favours this. Galaxies fade from view as they move beyond our reach, stars run out of fuel, and the universe becomes cold and dark over trillions of years.
- **Other possibilities** depend on how dark energy behaves. If it grew stronger, it could eventually tear structures apart (a "Big Rip"). If it reversed, expansion could end in a "Big Crunch". These are not supported by current data.

Measuring dark energy better is one of the main goals of modern cosmology.
`,
          q: [
            mc('What evidence showed that the expansion of the universe is accelerating?', 'Distant Type Ia supernovae were fainter than expected', 'This indicated that they were farther away than a slowing expansion would give.', [
              ['The cosmic microwave background got hotter', 'The background has been cooling as the universe expands.'],
              ['Galaxies were found to be rotating faster', 'Galactic rotation relates to dark matter, not to acceleration of expansion.'],
            ]),
            mc('Roughly what fraction of the universe is ordinary matter?', 'About 5%', 'Dark matter and dark energy make up the rest.', [
              ['About 50%', 'Ordinary matter is much less than half.'],
              ['About 95%', 'About 95% is the dark matter and dark energy together.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Galaxies and the universe',
    tasks: [
      mc('What type of galaxy is the Milky Way?', 'A barred spiral', 'It has a disk with spiral arms and a bar-shaped bulge.', [
        ['An elliptical', 'Ellipticals are smooth, with little gas and no arms.'],
        ['An irregular', 'The Milky Way has a clear structure.'],
        ['A globular cluster', 'A globular cluster is a small group of old stars in the halo.'],
      ]),
      mc('The orbital speeds of stars at large distances from the centre of a spiral galaxy do not decrease. What does this suggest?', 'A halo of dark matter supplies extra mass', 'Visible matter alone would give falling speeds.', [
        ['The stars at large distances are younger', 'Age does not account for the speeds.'],
        ['The galaxy is expanding', 'The rotation curve is about orbits within the galaxy, not about expansion of space.'],
        ['Stars are held by magnetic fields', 'Magnetic fields are too weak to hold stars in orbit.'],
      ]),
      mc('A galaxy has a redshift that implies a recession speed of 14,000 km/s. Using H₀ = 70 km/s per megaparsec, how far away is it?', '200 megaparsecs', 'd = v / H₀ = 14,000 / 70 = 200 megaparsecs.', [
        ['20 megaparsecs', 'Check the division: 14,000 / 70 = 200.'],
        ['980,000 megaparsecs', 'This multiplies the numbers instead of dividing.'],
        ['2 megaparsecs', 'This is far too small.'],
      ]),
      mc('Which method is used to measure distances to galaxies billions of light-years away?', 'Type Ia supernovae', 'They are bright enough to be seen across the universe and have a known peak luminosity.', [
        ['Stellar parallax', 'Parallax works only for relatively nearby stars.'],
        ['Radar ranging', 'Radar works only within the solar system.'],
        ['Cepheid variables', 'Cepheids reach only to tens of millions of light-years.'],
      ]),
      mc('Which observation is evidence for the Big Bang?', 'The cosmic microwave background coming from every direction', 'It is the afterglow of the hot early universe.', [
        ['The existence of sunspots', 'Sunspots concern the Sun, not the universe\'s origin.'],
        ['The phases of the Moon', 'Lunar phases have nothing to do with cosmology.'],
        ['The tides on Earth', 'Tides come from the gravity of the Moon and Sun.'],
      ]),
      mc('What is the best description of the Big Bang?', 'The expansion of space from a hot, dense early state', 'It was not an explosion into empty space.', [
        ['An explosion at a single point in an empty universe', 'There was no pre-existing empty space with a centre of explosion.'],
        ['The birth of the Sun', 'The Sun formed about 9 billion years after the Big Bang.'],
        ['A collision between two galaxies', 'Galaxy collisions happen within the universe.'],
      ]),
      mc('What is the largest component of the cosmic energy budget?', 'Dark energy', 'It makes up about 68%.', [
        ['Ordinary matter', 'Ordinary matter is about 5%.'],
        ['Dark matter', 'Dark matter is about 27%.'],
        ['Radiation from stars', 'Starlight is a tiny part of the total.'],
      ]),
      tf('Galaxies are moving away from us because we are at the centre of the universe.', false, 'Observers in any galaxy see the same pattern, so there is no special centre.', 'Correct. Space expands everywhere, so every observer sees other galaxies receding.'),
    ],
  },
};
