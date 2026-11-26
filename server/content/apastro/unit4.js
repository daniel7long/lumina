import { mc, tf } from '../builder.js';

export default {
  summary: 'The Sun is the star we know best. Use it, and the tools of distance and brightness, to understand the stars.',
  modules: {
    7: {
      summary: 'The Sun.',
      sessions: [{
        t: 'Our star',
        s: 'Structure, fusion and solar activity.',
        md: `
## Structure
The Sun is a ball of hot plasma, mostly hydrogen (about 73% by mass) and helium. From the center outward:
- **Core:** about **15 million K**, where fusion occurs.
- **Radiative zone:** energy moves outward as photons, taking a very long time.
- **Convective zone:** hot gas rises and cooler gas sinks.
- **Photosphere:** the visible surface, about **5,800 K**.
- **Chromosphere** and **corona:** the outer atmosphere. The corona is millions of kelvins and is visible during total solar eclipses.

## Fusion
In the core, the **proton–proton chain** fuses four hydrogen nuclei into one helium nucleus. The helium nucleus has slightly less mass than the four protons, and the difference is released as energy according to **E = mc²**. The Sun converts about **4 million tonnes** of mass to energy each second.

The Sun stays stable because of **hydrostatic equilibrium**: the outward pressure of hot gas balances the inward pull of gravity.

## Solar activity
- **Sunspots** are cooler, darker regions with strong magnetic fields.
- The number of sunspots follows an **11-year cycle**.
- **Flares** and **coronal mass ejections** release energy and particles. They can disturb satellites, power grids and radio, and cause **auroras**.
- The **solar wind** is a stream of charged particles flowing outward.

## Light travel
Sunlight takes about **8.3 minutes** to reach Earth (1 AU is about 150 million km, and light travels 300,000 km/s).
`,
        q: [
          mc('What process powers the Sun?', 'Nuclear fusion of hydrogen into helium in the core', 'Mass lost in the reaction is converted to energy.', [
            ['Nuclear fission of heavy elements', 'Fission splits heavy nuclei and does not power the Sun.'],
            ['Burning of hydrogen like a fire', 'Chemical burning could not last billions of years.'],
            ['Gravitational contraction alone', 'Contraction was important during formation but fusion now supplies the energy.'],
          ]),
          mc('Sunspots appear dark because they are', 'cooler than the surrounding photosphere', 'Strong magnetic fields reduce heat flow.', [
            ['holes in the Sun', 'They are regions on the surface.'],
            ['hotter than the surrounding area', 'They are cooler, so they emit less light.'],
            ['shadows of planets', 'Planets are not casting them.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Measuring the stars.',
      sessions: [{
        t: 'Distances, brightness and the H–R diagram',
        s: 'Parallax, the inverse-square law, magnitudes and stellar classification.',
        md: `
## Parallax
As Earth orbits the Sun, a nearby star appears to shift against distant stars. The **parallax angle** p (in arcseconds) gives the distance:

**d (in parsecs) = 1 / p (in arcseconds)**

A star with p = 0.25″ is at d = 1 / 0.25 = **4 parsecs**. One **parsec** is about **3.26 light-years**, so this star is about 13 light-years away. A **light-year** is the distance light travels in one year, about 9.46 trillion km.

## Brightness and distance
Apparent brightness follows the **inverse-square law**: it is proportional to 1/d². If a star is three times farther away, it appears **1/9** as bright.

## Magnitudes
Astronomers use **magnitudes**. **Smaller (or more negative) numbers are brighter.** A difference of **5 magnitudes** is a factor of **100** in brightness, so 1 magnitude is a factor of about **2.5**. A magnitude 1 star is 100 times brighter than a magnitude 6 star.

## Spectral classes and the H–R diagram
Stars are classified by temperature: **O, B, A, F, G, K, M** from hottest to coolest (the Sun is **G**). The **Hertzsprung–Russell (H–R) diagram** plots **luminosity** against **temperature** (with temperature decreasing to the right).
- The **main sequence** runs from hot, luminous stars to cool, dim stars.
- **Red giants and supergiants** are cool and luminous (large).
- **White dwarfs** are hot and dim (small).
`,
        q: [
          mc('A star has a parallax angle of 0.25 arcseconds. How far away is it?', '4 parsecs', 'd = 1 / p = 1 / 0.25 = 4 parsecs.', [
            ['0.25 parsecs', 'The distance is the reciprocal of the angle, not equal to it.'],
            ['1.25 parsecs', 'This adds 1 to the angle instead of taking its reciprocal.'],
            ['25 parsecs', 'This multiplies by 100 instead of taking the reciprocal.'],
          ]),
          mc('Two identical stars are at distances of 10 pc and 30 pc. How does the apparent brightness of the farther star compare?', 'It is 1/9 as bright', 'The distance is three times larger, so brightness is 1/3² = 1/9.', [
            ['1/3 as bright', 'Brightness depends on the square of the distance.'],
            ['1/6 as bright', 'This is not the inverse-square law result.'],
            ['3 times as bright', 'More distant stars appear dimmer.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · The Sun and the Stars',
    tasks: [
      mc('Which layer of the Sun is the visible surface?', 'The photosphere', 'Its temperature is about 5,800 K.', [
        ['The core', 'The core is where fusion occurs and is not visible.'],
        ['The corona', 'The corona is the outermost atmosphere.'],
        ['The radiative zone', 'This is an interior layer.'],
      ]),
      mc('Where in the Sun does fusion occur?', 'In the core, at about 15 million K', 'Only the core is hot and dense enough.', [
        ['In the photosphere', 'It is too cool.'],
        ['In the corona', 'It is too thin and, though hot, not dense enough for fusion.'],
        ['At the sunspots', 'Sunspots are surface features.'],
      ]),
      mc('Why does the Sun remain stable and not collapse or explode?', 'Hydrostatic equilibrium balances gravity and gas pressure', 'The balance holds the star at a steady size.', [
        ['Its magnetic field holds it together', 'Gravity and pressure balance determine its size.'],
        ['It has no gravity', 'The Sun has strong gravity.'],
        ['Fusion occurs in the photosphere', 'Fusion occurs in the core.'],
      ]),
      mc('A star is 8 parsecs away. What is its parallax angle?', '0.125 arcseconds', 'p = 1 / d = 1 / 8 = 0.125.', [
        ['8 arcseconds', 'The parallax is the reciprocal of the distance.'],
        ['0.8 arcseconds', 'This is not the reciprocal of 8.'],
        ['1.25 arcseconds', 'This is 10 divided by 8.'],
      ]),
      mc('A star is moved to twice its original distance. Its apparent brightness becomes', '1/4 as bright', '1/2² = 1/4.', [
        ['1/2 as bright', 'Brightness falls with the square of the distance.'],
        ['twice as bright', 'It becomes dimmer.'],
        ['1/8 as bright', 'This would be the result for an inverse-cube law.'],
      ]),
      mc('A magnitude 1 star compared with a magnitude 6 star is', '100 times brighter', 'Five magnitudes is a factor of 100.', [
        ['5 times brighter', 'A magnitude step is multiplicative, not additive.'],
        ['6 times brighter', 'This is not the relationship.'],
        ['100 times dimmer', 'Smaller magnitudes are brighter.'],
      ]),
      mc('On the H–R diagram, a star that is hot but dim is most likely', 'a white dwarf', 'White dwarfs are hot and small.', [
        ['a red giant', 'Red giants are cool and luminous.'],
        ['a main-sequence O star', 'O stars are hot and very luminous.'],
        ['a red dwarf', 'Red dwarfs are cool and dim.'],
      ]),
      tf('On the H–R diagram, luminosity is plotted against temperature.', true, 'Correct. The temperature axis runs from hot on the left to cool on the right.', 'This describes the diagram correctly, so the statement is true.'),
    ],
  },
};
