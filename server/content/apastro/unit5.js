import { mc, tf } from '../builder.js';

export default {
  summary: 'Stars are born, live and die. A star’s mass sets its life, its death and the elements it returns to space.',
  modules: {
    9: {
      summary: 'Star formation and main-sequence life.',
      sessions: [{
        t: 'Birth and a long middle age',
        s: 'How stars form and why mass determines lifetime.',
        md: `
## Star formation
Stars form in cold, dense **molecular clouds** of gas and dust. A region of the cloud collapses under its own gravity (often triggered by a shock wave from a nearby supernova). As it contracts it heats up, forming a **protostar** surrounded by a disk. When the core reaches about **10 million K**, hydrogen fusion begins and a star is born. Objects below about **8% of the Sun's mass** never reach this temperature and become **brown dwarfs**.

## The main sequence
A star spends most of its life on the **main sequence**, fusing hydrogen into helium in its core. During this time it is in hydrostatic equilibrium.

## Mass determines everything
- **High-mass stars** are hot, blue and extremely luminous. They burn fuel very quickly and live only a few **million** years.
- **Low-mass stars** (red dwarfs) are cool, red and dim. They use fuel slowly and can live for **trillions** of years, longer than the present age of the universe.
- The Sun, a medium-mass star, has a main-sequence lifetime of about **10 billion years** and is now about halfway through.

Luminosity rises steeply with mass (roughly as the 3.5 power for many stars), so a massive star has more fuel but uses it far faster, and **lives a much shorter time**.

## Clusters
Stars in a cluster form at nearly the same time from the same cloud. On an H–R diagram, the **main-sequence turnoff point**, where the most massive remaining stars are leaving the main sequence, gives the **age** of the cluster.
`,
        q: [
          mc('Which kind of star has the shortest main-sequence lifetime?', 'A very massive blue star', 'It burns its fuel extremely fast.', [
            ['A red dwarf', 'Red dwarfs use fuel slowly and live for trillions of years.'],
            ['A star like the Sun', 'The Sun lives about 10 billion years.'],
            ['A brown dwarf', 'Brown dwarfs do not fuse hydrogen in the same way and do not have a main-sequence life.'],
          ]),
          mc('What event marks the birth of a star?', 'The start of hydrogen fusion in its core', 'Fusion supplies the energy that supports the star.', [
            ['The formation of a molecular cloud', 'The cloud forms before the star.'],
            ['The collapse of a supernova', 'A supernova marks the death of a massive star.'],
            ['The appearance of planets', 'Planets form after or alongside the star.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Stellar death and remnants.',
      sessions: [{
        t: 'How stars end',
        s: 'White dwarfs, supernovae, neutron stars and black holes.',
        md: `
## Low-mass stars (like the Sun)
When the core hydrogen runs out, the core contracts and the outer layers expand: the star becomes a **red giant**. Later the star sheds its outer layers as a **planetary nebula** (unrelated to planets), leaving the hot core as a **white dwarf**, a dense object about the size of Earth supported by **electron degeneracy pressure**. A white dwarf slowly cools. The **Chandrasekhar limit** of about **1.4 solar masses** is the largest mass a white dwarf can have.

## High-mass stars
A star more than about **8 solar masses** fuses heavier elements in shells (helium, carbon, oxygen and on to **iron**). Iron fusion does not release energy, so the iron core **collapses** within a fraction of a second. The rebound produces a **core-collapse supernova**, an explosion that can outshine a galaxy for weeks.

Supernovae create and scatter many heavy elements. **Everything heavier than hydrogen and helium (apart from a little lithium) was made in stars or stellar explosions**, so the carbon in our bodies and the iron in our blood came from earlier generations of stars.

## Remnants
- **Neutron star:** the collapsed core may form a neutron star, with a mass about 1.4 to 2 or so solar masses squeezed into a sphere about 20 km across. **Pulsars** are rotating neutron stars that emit beams of radiation.
- **Black hole:** if the core is more massive (above roughly 2 to 3 solar masses), nothing stops the collapse. A black hole has an **event horizon**, the boundary beyond which not even light can escape.

## Type Ia supernovae
When a white dwarf in a binary system gains matter and reaches the Chandrasekhar limit, it explodes as a **Type Ia supernova**. These have nearly the same peak luminosity, so they are used as **standard candles**.
`,
        q: [
          mc('What will become of the Sun at the end of its life?', 'A white dwarf, after a red giant phase and a planetary nebula', 'The Sun’s mass is too low to explode as a supernova.', [
            ['A black hole', 'The Sun does not have enough mass.'],
            ['A neutron star', 'This requires a core-collapse supernova from a much more massive star.'],
            ['A supernova remnant', 'The Sun will not explode as a supernova.'],
          ]),
          mc('Why does a massive star’s core collapse once it has built up iron?', 'Fusing iron does not release energy, so nothing supports the core against gravity', 'The energy source that supported the star ends.', [
            ['Iron is too light to fuse', 'Iron can fuse, but doing so absorbs energy instead of releasing it, so the claim that it cannot fuse misses the point.'],
            ['The star has run out of hydrogen in its atmosphere', 'The collapse concerns the core, not the atmosphere.'],
            ['Iron absorbs all the star’s light', 'The issue is energy production, not absorption of light.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Stellar Evolution',
    tasks: [
      mc('Stars form in', 'cold, dense molecular clouds', 'Gravity collapses regions of these clouds.', [
        ['planetary nebulae', 'A planetary nebula is the shed envelope of a dying star.'],
        ['supernova remnants only', 'Some star formation may be triggered by supernovae, but stars form in molecular clouds.'],
        ['black holes', 'Black holes are remnants of dead stars.'],
      ]),
      mc('Which star lives longest on the main sequence?', 'A low-mass red dwarf', 'It burns fuel slowly.', [
        ['A massive blue star', 'It lives only millions of years.'],
        ['The Sun', 'The Sun lives about 10 billion years, less than a red dwarf.'],
        ['A white dwarf', 'A white dwarf is not a main-sequence star.'],
      ]),
      mc('A planetary nebula is', 'the outer layers shed by a dying low-mass star', 'It has nothing to do with planets.', [
        ['a cloud in which planets are forming', 'That describes a protoplanetary disk.'],
        ['the remnant of a supernova', 'This is a supernova remnant.'],
        ['a very hot young star cluster', 'This is not a nebula.'],
      ]),
      mc('What is the approximate maximum mass of a white dwarf, the Chandrasekhar limit?', 'About 1.4 solar masses', 'Above this limit, electron degeneracy pressure cannot support it.', [
        ['About 0.14 solar masses', 'This is ten times too low.'],
        ['About 14 solar masses', 'This is ten times too high.'],
        ['About 100 solar masses', 'This is far larger than the limit.'],
      ]),
      mc('Which statement about the origin of heavy elements is accurate?', 'Most elements heavier than helium were made in stars and stellar explosions', 'Supernovae scatter these elements into space.', [
        ['They were created entirely in the Big Bang', 'The Big Bang produced mainly hydrogen and helium.'],
        ['They were made on Earth’s surface', 'They were made in stars.'],
        ['They were made by the Sun’s fission reactions', 'The Sun fuses hydrogen into helium; it does not make most heavy elements.'],
      ]),
      mc('A Type Ia supernova is useful to astronomers because', 'it has nearly the same peak luminosity, so it can serve as a standard candle', 'Comparing apparent brightness gives distance.', [
        ['it occurs in every galaxy every year', 'The frequency is not the reason.'],
        ['it always forms a black hole', 'It leaves no remnant in the usual picture.'],
        ['it is cooler than other supernovae', 'Temperature is not what makes them standard candles.'],
      ]),
      tf('A black hole’s event horizon is the boundary beyond which not even light can escape.', true, 'Correct. Inside it, escape would require speeds greater than light.', 'This is the definition of the event horizon, so the statement is true.'),
    ],
  },
};
