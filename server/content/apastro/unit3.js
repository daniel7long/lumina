import { mc, tf } from '../builder.js';

export default {
  summary: 'The solar system formed about 4.6 billion years ago from a spinning cloud of gas and dust. Compare its worlds and the many planets found around other stars.',
  modules: {
    5: {
      summary: 'Formation and the terrestrial planets.',
      sessions: [{
        t: 'How the solar system formed, and the rocky planets',
        s: 'The solar nebula and the four terrestrial worlds.',
        md: `
## Formation
The solar system formed about **4.6 billion years ago** from a cloud of gas and dust, the **solar nebula**, which collapsed under gravity. Conservation of angular momentum made it spin faster and flatten into a **disk**. Most of the mass formed the Sun at the center.

In the disk, dust grains stuck together to form **planetesimals**, which grew into **protoplanets** by **accretion**. Beyond the **frost line** (about 3–5 AU from the Sun) it was cold enough for ices to condense, so the outer planets grew larger and gathered gas. Inside it only rock and metal could condense, so the inner planets are small.

Evidence includes the planets' **orbits in nearly the same plane and direction**, ages of meteorites, and observations of disks around other young stars.

## The terrestrial planets
- **Mercury:** small, heavily cratered, almost no atmosphere, extreme temperature range.
- **Venus:** thick carbon dioxide atmosphere with a **runaway greenhouse effect**; surface about **465 °C**, hotter than Mercury's average. It rotates slowly and backward.
- **Earth:** liquid water, plate tectonics, an atmosphere changed by life, and a large Moon likely formed from a giant impact.
- **Mars:** thin atmosphere, polar caps, the giant volcano **Olympus Mons** and evidence of ancient rivers and lakes. Its small size let it cool and lose most of its atmosphere.

## Planetary geology
Craters count: more craters on a surface means an **older** surface. Volcanism, tectonics, erosion and impacts reshape surfaces. The **greenhouse effect** warms a planet when gases such as CO₂ trap infrared radiation.
`,
        q: [
          mc('Why are the giant planets located in the outer solar system?', 'Beyond the frost line, ices could condense, so planets grew massive enough to capture gas', 'More solid material was available far from the Sun.', [
            ['Because the Sun pushed them outward after they formed', 'The giant planets grew where they are, mainly because of the availability of ice.'],
            ['Because the outer solar system is warmer', 'The outer solar system is colder.'],
            ['Because they formed after the terrestrial planets', 'All planets formed within a few million years of each other.'],
          ]),
          mc('Why is Venus hotter than Mercury even though it is farther from the Sun?', 'Its thick CO₂ atmosphere causes a runaway greenhouse effect', 'The atmosphere traps heat.', [
            ['Venus rotates faster than Mercury', 'Venus rotates very slowly.'],
            ['Venus has no atmosphere', 'Venus has a very thick atmosphere.'],
            ['Venus is closer to the Sun', 'Mercury is closer to the Sun.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Giant planets, small bodies and exoplanets.',
      sessions: [{
        t: 'The outer worlds and planets beyond',
        s: 'Gas and ice giants, asteroids, comets and exoplanets.',
        md: `
## The giant planets
- **Jupiter** and **Saturn** are **gas giants** made mostly of hydrogen and helium. Jupiter's **Great Red Spot** is a giant storm. Saturn's rings are made of ice particles.
- **Uranus** and **Neptune** are **ice giants** with more water, ammonia and methane. Methane gives them blue colors.
- Giant planets have many moons. Some moons are geologically active or may have liquid water below their surfaces, such as Jupiter's **Europa**, Saturn's **Enceladus** and Saturn's **Titan**, which has a thick atmosphere.

## Small bodies
- **Asteroids:** rocky bodies, mostly in the **asteroid belt** between Mars and Jupiter.
- **Comets:** icy bodies that develop a **coma** and **tails** when near the Sun. The tail points **away from the Sun** because of the solar wind and radiation.
- **Kuiper belt:** a region of icy bodies beyond Neptune, including dwarf planets such as **Pluto**, which the International Astronomical Union reclassified as a **dwarf planet** in 2006.
- **Oort cloud:** a distant spherical shell thought to be the source of long-period comets.
- **Meteoroids, meteors and meteorites:** a meteoroid is a small body in space, a meteor is the streak of light as it burns in the atmosphere and a meteorite is a piece that reaches the ground.

## Exoplanets
Thousands of planets are known to orbit other stars. The first planet around a Sun-like star, **51 Pegasi b**, was found in **1995**. Main methods:
- **Transit method:** a planet crossing in front of its star briefly dims the starlight (used by NASA's **Kepler** mission, launched in 2009).
- **Radial-velocity method:** a planet's gravity makes the star wobble, causing a periodic **Doppler shift** in the star's spectrum.

The **habitable zone** is the range of distances where liquid water could exist on a planet's surface.
`,
        q: [
          mc('A planet passes in front of its star and the star’s light dims slightly and periodically. Which detection method is this?', 'The transit method', 'The dimming reveals a planet crossing the star’s disk.', [
            ['The radial-velocity method', 'This detects a Doppler shift in the star’s spectrum.'],
            ['Direct imaging', 'This requires a picture of the planet itself.'],
            ['The parallax method', 'Parallax measures distances to stars.'],
          ]),
          mc('Which statement about comets is correct?', 'A comet’s tail points away from the Sun', 'Solar wind and radiation push material away from the Sun.', [
            ['A comet’s tail always trails behind its motion', 'The tail points away from the Sun, not necessarily behind the comet’s path.'],
            ['Comets are rocky bodies found mostly between Mars and Jupiter', 'That describes asteroids.'],
            ['Comets are the same as meteors', 'A meteor is the light of a small body burning in the atmosphere.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · The Solar System',
    tasks: [
      mc('About how old is the solar system?', 'About 4.6 billion years', 'This age comes from radioactive dating of meteorites.', [
        ['About 4.6 million years', 'This is 1,000 times too young.'],
        ['About 13.8 billion years', 'This is the approximate age of the universe.'],
        ['About 460 million years', 'This is ten times too young.'],
      ]),
      mc('Why does the solar nebula flatten into a disk?', 'Conservation of angular momentum makes it spin faster as it collapses', 'Spinning material flattens perpendicular to the axis.', [
        ['The Sun’s magnetic field pulls it flat', 'The main cause is rotation.'],
        ['Gravity does not act on the cloud', 'Gravity causes the collapse.'],
        ['The cloud was already a disk', 'The nebula started as a larger cloud.'],
      ]),
      mc('Which planet has a surface temperature of roughly 465 °C because of its thick atmosphere?', 'Venus', 'A runaway greenhouse effect heats it.', [
        ['Mercury', 'Mercury has almost no atmosphere and a cooler average surface.'],
        ['Mars', 'Mars is cold with a thin atmosphere.'],
        ['Earth', 'Earth’s greenhouse effect is much weaker.'],
      ]),
      mc('A heavily cratered planetary surface is likely', 'old', 'Craters accumulate over time, and active geology erases them.', [
        ['young', 'A young surface would have fewer craters.'],
        ['volcanically active everywhere', 'Active resurfacing erases craters.'],
        ['made of gas', 'This does not apply to a solid surface.'],
      ]),
      mc('Where is the asteroid belt?', 'Between the orbits of Mars and Jupiter', 'It is a region of rocky bodies.', [
        ['Beyond Neptune', 'That is the Kuiper belt.'],
        ['Between Earth and Venus', 'No belt lies between these planets.'],
        ['Surrounding the Sun in a distant spherical shell', 'This describes the Oort cloud.'],
      ]),
      mc('In 2006, the International Astronomical Union classified Pluto as', 'a dwarf planet', 'It is one of the largest bodies in the Kuiper belt.', [
        ['a comet', 'Pluto is not a comet.'],
        ['an asteroid', 'Pluto is in the Kuiper belt, not the asteroid belt.'],
        ['a moon of Neptune', 'Pluto is not a moon.'],
      ]),
      tf('The radial-velocity method detects planets by the Doppler shift in the light of the star they orbit.', true, 'Correct. The planet’s gravity makes the star wobble.', 'This describes the method correctly, so the statement is true.'),
    ],
  },
};
