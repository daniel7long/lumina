import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how the Sun shines, how astronomers measure the properties of stars, and how stars are born, live and die, leaving white dwarfs, neutron stars and black holes.',
  modules: {
    8: {
      summary: 'Fusion, the Sun\'s structure and solar activity.',
      sessions: [
        {
          t: 'How the Sun shines',
          s: 'Fusion in the core and the balance that keeps the Sun stable.',
          md: `
## The Sun's power source

The Sun is a ball of hot gas (mostly hydrogen) with a core temperature of about **15 million K**. At that temperature and pressure, hydrogen nuclei (protons) can overcome their mutual repulsion and **fuse**.

### The proton-proton chain
In a series of steps, **four hydrogen nuclei fuse into one helium nucleus**. The helium nucleus has slightly **less mass** than the four protons. The missing mass becomes energy according to Einstein's equation

**E = mc²**

Every second the Sun converts about **4 million tonnes** of matter into energy, and it has enough hydrogen in its core to keep doing so for about **10 billion years** in total. The Sun is about halfway through.

### A stable star
The Sun does not collapse or blow apart because of **hydrostatic equilibrium**: the inward pull of **gravity** is balanced at every layer by the outward **pressure** of the hot gas. If the core cooled, pressure would drop, the core would shrink and heat up, and fusion would speed up, which restores balance. This self-regulation keeps the Sun's output steady for billions of years.

### Neutrinos
Fusion also produces **neutrinos**, tiny particles that pass out of the Sun almost unhindered. Detecting them gives direct evidence of fusion in the core, because the **light** made there takes tens of thousands of years or more to work its way out.
`,
          q: [
            mc('What is the Sun\'s main energy source?', 'Fusion of hydrogen into helium in its core', 'A small fraction of the mass is converted to energy by E = mc².', [
              ['Burning of chemical fuel', 'Chemical burning could not power the Sun for billions of years.'],
              ['Fission of heavy elements', 'The Sun is powered by fusion of light nuclei, not fission.'],
            ]),
            mc('What does hydrostatic equilibrium mean for a star?', 'Gravity pulling inward is balanced by pressure pushing outward', 'This balance keeps the star at a steady size.', [
              ['The star stays at one temperature throughout', 'The temperature varies from millions of kelvins in the core to thousands at the surface.'],
              ['The star has no energy source', 'A star needs an energy source to maintain the pressure that balances gravity.'],
            ]),
          ],
        },
        {
          t: 'Layers of the Sun and solar activity',
          s: 'From the core to the corona, and sunspots and flares.',
          md: `
## Inside and outside the Sun

| Layer | Features |
| --- | --- |
| **Core** | Fusion occurs here, at about 15 million K |
| **Radiative zone** | Energy moves outward as photons, which are absorbed and re-emitted countless times |
| **Convective zone** | Hot gas rises and cooler gas sinks, carrying energy to the surface |
| **Photosphere** | The visible "surface", at about **5,800 K** |
| **Chromosphere** | A thin, reddish layer above the photosphere |
| **Corona** | The extremely hot outer atmosphere, over **a million kelvins**, seen during total solar eclipses |

### Solar activity
The Sun's **magnetic field** produces its activity:

- **Sunspots** are cooler (about 4,000 K), so they look dark. They mark regions of strong magnetic field.
- **Flares** and **coronal mass ejections** (CMEs) release bursts of energy and charged particles.
- The number of sunspots rises and falls in an **11-year solar cycle**.

### Effects on Earth
Particles from CMEs can reach Earth and set off **geomagnetic storms**. They cause **auroras**, can disturb radio communications and GPS, damage satellites and, in strong storms, overload power grids. The steady **solar wind** also streams past Earth, which Earth's magnetic field largely deflects.
`,
          q: [
            mc('How long is the solar cycle, based on the number of sunspots?', 'About 11 years', 'Sunspot numbers rise to a maximum and fall to a minimum about every 11 years.', [
              ['About 1 year', 'The cycle is much longer than a year.'],
              ['About 1,000 years', 'The cycle is about a decade long.'],
            ]),
            mc('Why do sunspots look dark?', 'They are cooler than the surrounding photosphere', 'A strong magnetic field limits the flow of heat, so they are at about 4,000 K.', [
              ['They are holes in the Sun', 'They are cooler regions on the surface, not holes.'],
              ['They are planets crossing the Sun', 'Sunspots are features of the Sun itself.'],
            ]),
          ],
        },
      ],
    },
    9: {
      summary: 'Distances, luminosities, temperatures and the H-R diagram.',
      sessions: [
        {
          t: 'Distances and brightness of stars',
          s: 'Parallax, luminosity and the connection with temperature and size.',
          md: `
## How far away is a star?

As Earth orbits the Sun, a nearby star appears to shift against distant background stars. This **parallax** shift is tiny. If the parallax angle is *p* in **arcseconds**, the distance in **parsecs** is

**d = 1 / p**

A star with a parallax of 0.1 arcsecond is at **10 parsecs**. One **parsec** is about **3.26 light-years**.

### Brightness and luminosity
- **Luminosity** is the total power a star emits. It is a property of the star.
- **Apparent brightness** is how bright the star looks from Earth. It drops with the **square of the distance**.

Knowing the distance and the apparent brightness lets us calculate the luminosity.

### What sets luminosity?
A star's luminosity depends on its **size** and its **temperature**:

**L ∝ R² × T⁴**

Doubling the temperature makes each patch of surface **16 times** brighter. A cool star can still be very luminous if it is **huge**, and a hot star can be dim if it is **tiny**.

### Spectral types
Stars are classified by surface temperature as **O, B, A, F, G, K, M**, from **hottest** (blue) to **coolest** (red). The Sun is a **G** star.
`,
          q: [
            mc('A star has a parallax of 0.2 arcsecond. How far away is it?', '5 parsecs', 'd = 1 / p = 1 / 0.2 = 5 parsecs.', [
              ['0.2 parsecs', 'This is the parallax angle in arcseconds, not the distance.'],
              ['20 parsecs', 'The distance is the reciprocal of the parallax: 1 / 0.2 = 5.'],
            ]),
            mc('Star A and star B have the same surface temperature, but A has twice the radius of B. How do their luminosities compare?', 'A is 4 times more luminous', 'L ∝ R², and 2² = 4.', [
              ['A is 2 times more luminous', 'Luminosity grows with the square of the radius.'],
              ['They are equally luminous', 'A has a larger surface area, so it radiates more.'],
            ]),
          ],
        },
        {
          t: 'The Hertzsprung–Russell diagram',
          s: 'A map that sorts stars by temperature and luminosity.',
          md: `
## Sorting the stars

A **Hertzsprung–Russell (H–R) diagram** plots each star's **luminosity** (vertical axis) against its **surface temperature** (horizontal axis). By convention, **temperature decreases to the right**, so hot, blue stars are on the left.

### The groups
| Region | Stars |
| --- | --- |
| A diagonal band, upper left to lower right | **Main sequence**: stars fusing hydrogen in their cores, about 90% of all stars |
| Upper right | **Giants and supergiants**: cool but very luminous, so they must be huge |
| Lower left | **White dwarfs**: hot but dim, so they must be tiny |

### What the diagram tells us
- On the **main sequence** a star's position depends mainly on its **mass**. More massive stars are **hotter and more luminous**. The Sun is in the middle.
- A star's place on the diagram changes as it ages. When it leaves the main sequence, it moves toward the giant or supergiant region.
- Massive stars burn fuel much faster, so they **live shorter lives**. A star of 10 solar masses lasts only tens of millions of years, while a small red dwarf can shine for **trillions of years**.

> Reading a diagram: **hot and bright** → upper left; **cool and bright** → upper right (giant); **hot and faint** → lower left (white dwarf); **cool and faint** → lower right (red dwarf).
`,
          q: [
            mc('A star is cool (about 3,500 K) but very luminous. Which kind of star is it?', 'A giant or supergiant', 'To be luminous while cool, it must have an enormous surface area.', [
              ['A white dwarf', 'White dwarfs are hot but faint, as they are very small.'],
              ['A red dwarf on the main sequence', 'A main-sequence red dwarf is cool and faint.'],
            ]),
            mc('Which main-sequence star will live the longest?', 'A low-mass red dwarf', 'Low-mass stars burn fuel slowly and last trillions of years.', [
              ['A massive blue star', 'Massive stars burn fuel quickly and have short lives.'],
              ['A star like the Sun', 'The Sun lives for about 10 billion years, much less than a red dwarf.'],
            ]),
          ],
        },
      ],
    },
    10: {
      summary: 'Star formation and the life stories of low-mass and high-mass stars.',
      sessions: [
        {
          t: 'The birth of a star',
          s: 'From a cold cloud to a protostar and the main sequence.',
          md: `
## Star formation

Stars form in cold, dense clouds of gas and dust called **molecular clouds**. The steps are:

1. **Collapse:** a region of the cloud becomes dense enough that **gravity** overcomes gas pressure and it begins to contract, often after a trigger such as a nearby supernova.
2. **Protostar:** the collapsing core heats up as gravitational energy becomes thermal energy. Material spirals through a **disk** onto the young star, and the disk may form planets.
3. **Fusion begins:** when the core reaches about **10 million K**, hydrogen fusion starts, pressure balances gravity and the star settles onto the **main sequence**.

### The mass limits
- Below about **0.08 solar masses** the core never gets hot enough for hydrogen fusion. The object is a **brown dwarf**, a "failed star" that slowly cools.
- Above that, a star can fuse hydrogen. The most massive stars have 100 times the mass of the Sun or more.

Stars of **low mass** are far more **numerous** than high-mass stars. Most stars form in **clusters** from the same cloud, so they share an age and composition, which makes clusters excellent laboratories for studying stellar evolution.
`,
          q: [
            mc('What marks the birth of a main-sequence star?', 'The start of hydrogen fusion in the core', 'Fusion provides the pressure that balances gravity.', [
              ['The formation of a planetary disk', 'Disks form during the protostar stage, before fusion begins.'],
              ['The end of the molecular cloud', 'A molecular cloud can form many stars, and its end is not what marks birth.'],
            ]),
            mc('An object forms with a mass of 0.05 solar masses. What is it?', 'A brown dwarf', 'It is below the 0.08 solar-mass limit for sustained hydrogen fusion.', [
              ['A red giant', 'Red giants are evolved stars, not newly formed objects.'],
              ['A main-sequence star', 'It is too small to sustain hydrogen fusion.'],
            ]),
          ],
        },
        {
          t: 'The lives and deaths of stars',
          s: 'How mass decides a star\'s path and fate.',
          md: `
## Mass is destiny

A star's **mass** at birth determines how it lives and how it dies.

### Low-mass stars (up to about 8 solar masses), such as the Sun
1. **Main sequence:** hydrogen fuses in the core (about 10 billion years for the Sun).
2. **Red giant:** when core hydrogen runs out, the core shrinks and hydrogen fuses in a shell around it. The outer layers swell and cool.
3. **Helium fusion:** the core becomes hot enough to fuse helium into carbon and oxygen.
4. **Planetary nebula:** the star sheds its outer layers. (The name is historical: it has nothing to do with planets.)
5. **White dwarf:** the hot core is left behind and cools for ever.

### High-mass stars (more than about 8 solar masses)
1. A **short** main sequence, because they burn fuel quickly.
2. A **supergiant** phase, in which successive fusion stages build up elements through carbon, oxygen, silicon and finally **iron**.
3. Fusing **iron does not release energy**, so the core cannot support the star. It **collapses** in a fraction of a second.
4. The rebound causes a **supernova** explosion, leaving a **neutron star** or a **black hole**.

| | Low mass | High mass |
| --- | --- | --- |
| Lifetime | Billions of years | Millions of years |
| End | Planetary nebula and white dwarf | Supernova and neutron star or black hole |
`,
          q: [
            mc('What will happen to the Sun after its red giant phase?', 'It will shed its outer layers and become a white dwarf', 'The Sun is not massive enough to explode as a supernova.', [
              ['It will explode as a supernova', 'Supernovae of this kind need much more massive stars.'],
              ['It will become a black hole', 'The Sun is too low in mass to form a black hole.'],
            ]),
            mc('Why does the core of a massive star collapse after it has made iron?', 'Fusing iron does not release energy, so pressure can no longer balance gravity', 'The core loses its support and collapses.', [
              ['Iron is radioactive and explodes', 'The collapse is not caused by radioactivity.'],
              ['All hydrogen has already been converted to iron', 'Iron forms by successive fusion of heavier elements from lighter ones.'],
            ]),
          ],
        },
      ],
    },
    11: {
      summary: 'White dwarfs, neutron stars, black holes and supernovae.',
      sessions: [
        {
          t: 'White dwarfs, neutron stars and supernovae',
          s: 'Dense remnants and the origin of the elements.',
          md: `
## Stellar corpses

When fusion ends, what is left depends on the mass of the core.

| Remnant | Core mass | What supports it | Size |
| --- | --- | --- | --- |
| **White dwarf** | Below **1.4 solar masses** (the Chandrasekhar limit) | **Electron degeneracy pressure** | About the size of Earth |
| **Neutron star** | About 1.4 to 2 or 3 solar masses | **Neutron degeneracy pressure** | About 20 km across |
| **Black hole** | More than about 3 solar masses | Nothing stops the collapse | A point-like singularity inside an event horizon |

A teaspoon of white dwarf material would weigh several tonnes, and a teaspoon of neutron star material would weigh billions of tonnes. Many neutron stars spin rapidly and emit beams of radio waves, which we see as pulses, so they are called **pulsars**.

### Supernovae
- **Core-collapse supernova:** the death of a massive star, as described above.
- **Type Ia supernova:** a white dwarf in a **binary system** gains material from its companion until it reaches 1.4 solar masses and explodes. These explosions have a **nearly constant peak brightness**, so they are used as **standard candles** to measure distances.

### Where the elements come from
The Big Bang made mainly hydrogen and helium. **Carbon, oxygen, silicon and iron** were made by fusion in stars. Elements **heavier than iron** form mainly in supernovae and mergers of neutron stars. These explosions scatter the elements into space, where they become part of new stars and planets, so the atoms in your body were made in earlier generations of stars.
`,
          q: [
            mc('What supports a white dwarf against gravity?', 'Electron degeneracy pressure', 'Electrons packed together resist further compression.', [
              ['Nuclear fusion in its core', 'A white dwarf has no ongoing fusion.'],
              ['The pressure of its magnetic field', 'Degeneracy pressure, not a magnetic field, supports it.'],
            ]),
            mc('Why are Type Ia supernovae useful for measuring distances?', 'They have nearly the same peak luminosity, so their apparent brightness reveals distance', 'They are standard candles.', [
              ['They occur only in our own galaxy', 'They are seen in distant galaxies, which is why they are so useful.'],
              ['They emit no light', 'They are extremely bright.'],
            ]),
          ],
        },
        {
          t: 'Black holes',
          s: 'Event horizons and how we find objects that emit no light.',
          md: `
## Black holes

A **black hole** is a region where gravity is so strong that **nothing**, not even light, can escape. It forms when a massive stellar core collapses, and much larger black holes exist at the centres of galaxies.

### The event horizon
The **event horizon** is the boundary beyond which the **escape speed exceeds the speed of light**. It is not a physical surface, but a point of no return. The radius of the horizon (the **Schwarzschild radius**) is proportional to the mass: about **3 km for each solar mass**. A black hole of 10 solar masses has a horizon about 30 km in radius.

Far from a black hole, gravity acts just like that of any other object of the same mass. If the Sun were replaced by a black hole of the same mass, Earth's orbit would not change.

### How we detect them
Because they give out no light, we find black holes through their effects:

1. **Accretion disks:** gas that spirals in becomes extremely hot and shines in **X-rays**.
2. **Orbits:** stars near the centre of the Milky Way orbit an invisible object, **Sagittarius A-star** (Sgr A), of about **4 million solar masses**.
3. **Gravitational waves:** ripples in space-time from the merger of two black holes, first detected in 2015.
4. **Direct images:** the Event Horizon Telescope has imaged the shadows of black holes in the galaxy M87 (2019) and in the Milky Way (2022).
`,
          q: [
            mc('What is the event horizon of a black hole?', 'The boundary inside which the escape speed is greater than the speed of light', 'Nothing that crosses it can escape.', [
              ['The solid surface of the black hole', 'A black hole has no solid surface. The horizon is a boundary in space.'],
              ['The hot disk of gas around it', 'That is the accretion disk, which lies outside the horizon.'],
            ]),
            tf('If the Sun were replaced by a black hole of the same mass, Earth would be pulled in.', false, 'Far from the black hole, gravity is the same as for the Sun, so Earth would stay in the same orbit.', 'Correct. At the same distance, a black hole of the same mass exerts the same gravitational pull.'),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · The Sun and the stars',
    tasks: [
      mc('How does the Sun produce its energy?', 'It fuses hydrogen into helium and converts a small amount of mass to energy', 'Mass is converted according to E = mc².', [
        ['It burns hydrogen with oxygen', 'This chemical reaction would be far too weak.'],
        ['It splits uranium atoms', 'The Sun is powered by fusion, not fission.'],
        ['It is slowly contracting and releasing no other energy', 'Contraction is not the main source today.'],
      ]),
      mc('A star has a parallax of 0.05 arcsecond. What is its distance?', '20 parsecs', 'd = 1 / 0.05 = 20 parsecs.', [
        ['0.05 parsecs', 'This is the parallax angle, not the distance.'],
        ['5 parsecs', 'The distance is 1 divided by 0.05, which is 20.'],
        ['2 parsecs', 'This is not the reciprocal of 0.05.'],
      ]),
      mc('A star has twice the surface temperature of an otherwise identical star. How much more energy does each square metre of its surface radiate?', '16 times', 'Energy radiated is proportional to T⁴, and 2⁴ = 16.', [
        ['2 times', 'Radiated energy varies as T⁴, not T.'],
        ['4 times', 'This would be true if it varied as T².'],
        ['8 times', 'The power is 4, not 3.'],
      ]),
      mc('On an H–R diagram, where would you find a white dwarf?', 'Lower left, hot and faint', 'It is hot but very small, so its luminosity is low.', [
        ['Upper right, cool and bright', 'This region has giants and supergiants.'],
        ['Upper left, hot and bright', 'This region has massive main-sequence stars.'],
        ['Lower right, cool and faint', 'This region has red dwarfs.'],
      ]),
      mc('Which fate awaits a star with 20 times the mass of the Sun?', 'A core-collapse supernova, leaving a neutron star or black hole', 'Massive stars end this way after producing an iron core.', [
        ['A quiet end as a white dwarf', 'This is the fate of lower-mass stars.'],
        ['It will become a brown dwarf', 'Brown dwarfs are failed stars, with too little mass to fuse hydrogen.'],
        ['It will stay on the main sequence for ever', 'Massive stars have short lives.'],
      ]),
      mc('Why can stars of more than about 8 solar masses not support themselves after making iron?', 'Fusion of iron absorbs energy rather than releasing it', 'The core loses pressure and collapses.', [
        ['Iron is too heavy for gravity', 'Iron\'s weight is not the issue. The energy balance is.'],
        ['They run out of helium', 'Helium is used well before the iron stage.'],
        ['Their magnetic field disappears', 'Support comes from thermal pressure from fusion, not from a magnetic field.'],
      ]),
      mc('What is the radius of the event horizon of a black hole of 5 solar masses, using about 3 km per solar mass?', 'About 15 km', 'The radius is proportional to mass: 5 × 3 km = 15 km.', [
        ['About 3 km', 'This is the radius for one solar mass.'],
        ['About 1.5 km', 'This is less than the radius for one solar mass.'],
        ['About 150 km', 'This is ten times too large.'],
      ]),
      tf('Most of the atoms heavier than hydrogen and helium in your body were made inside stars.', true, 'Correct. Stars and their explosions made the heavier elements.', 'The Big Bang made almost only hydrogen and helium. Heavier elements came from stars.'),
    ],
  },
};
