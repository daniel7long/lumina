import { mc, tf } from '../builder.js';

export default {
  summary: 'Understand the laws that govern orbits, how the solar system formed, and how the rocky worlds, giant planets, moons and small bodies compare.',
  modules: {
    4: {
      summary: 'Kepler\'s laws, Newton\'s gravity and tides.',
      sessions: [
        {
          t: 'Kepler\'s laws of planetary motion',
          s: 'Ellipses, equal areas and the period-distance relation.',
          md: `
## From circles to ellipses

Working from careful observations, Johannes Kepler found three laws that describe how planets move around the Sun.

1. **Law of ellipses:** each planet moves in an **ellipse** with the Sun at one **focus**, not at the centre.
2. **Law of equal areas:** a line from the Sun to a planet sweeps out **equal areas in equal times**. A planet therefore moves **faster when it is closer** to the Sun and slower when it is farther away.
3. **Law of periods:** **P² = a³**, where *P* is the orbital period in **years** and *a* is the average distance (semi-major axis) in **AU**.

### Using the third law
If a planet orbits at **4 AU**, then P² = 4³ = 64, so **P = 8 years**. Jupiter, at 5.2 AU, has P = √(5.2³) ≈ **11.9 years**.

The law shows that planets farther from the Sun take **longer** to orbit, and also move **more slowly** along their paths.

> Kepler's laws describe *how* planets move. They do not say *why*. The explanation came from Newton's law of gravity.

The planets' orbits are only **slightly elliptical**. Earth's orbit is so close to a circle that a drawing of it would look circular to the eye.
`,
          q: [
            mc('A planet orbits the Sun at an average distance of 9 AU. What is its orbital period?', '27 years', 'P² = a³ = 729, so P = 27 years.', [
              ['9 years', 'This would be true only if P were equal to a, which Kepler\'s law does not say.'],
              ['81 years', 'This is the square of 9. The law is P² = a³.'],
            ]),
            mc('According to Kepler\'s second law, when is a planet moving fastest?', 'When it is closest to the Sun', 'To sweep out equal areas in equal times, it must move faster when nearer.', [
              ['When it is farthest from the Sun', 'It moves slowest at that point.'],
              ['It always moves at the same speed', 'Its speed changes along an elliptical orbit.'],
            ]),
          ],
        },
        {
          t: 'Newton\'s gravity and tides',
          s: 'The force that holds orbits together and raises the tides.',
          md: `
## The law of universal gravitation

Isaac Newton showed that every mass attracts every other mass with a force

**F = G × m₁ × m₂ / r²**

- The force grows with **both masses**.
- It falls off with the **square of the distance**: doubling the distance makes the force **one quarter** as strong.

### Orbits as falling
An orbiting object is constantly **falling toward** the body it circles but is moving **sideways** so fast that it keeps missing it. The Moon, a satellite and a planet are all in this kind of free fall. Newton's laws also explain Kepler's laws and allow us to **weigh** astronomical bodies by measuring the orbits around them.

### Tides
The Moon's gravity pulls on the near side of Earth more strongly than on the far side. This **difference** in pull (a **tidal force**) stretches the oceans into **two bulges**, one facing the Moon and one on the opposite side. As Earth rotates, a coastline passes through both bulges each day, giving **two high tides** about every 24 hours and 50 minutes.

The Sun also raises tides, about half as strongly as the Moon. At **new** and **full Moon** the Sun and Moon line up and we get **spring tides** (the biggest range). At the **quarter** phases they work against each other, giving weaker **neap tides**.
`,
          q: [
            mc('If the distance between two bodies doubles, the gravitational force between them becomes', 'One quarter as strong', 'Force varies as 1/r², and 1/2² = 1/4.', [
              ['Half as strong', 'The force falls with the square of the distance, not the distance itself.'],
              ['Twice as strong', 'Gravity weakens as the distance grows.'],
            ]),
            mc('When do spring tides, with the largest tidal range, occur?', 'At new Moon and full Moon', 'The Sun and Moon are then in line and their tidal effects add together.', [
              ['At first and third quarter', 'These produce the weaker neap tides.'],
              ['Only in the spring season', 'The name refers to the tides "springing up", not to the season.'],
            ]),
          ],
        },
      ],
    },
    5: {
      summary: 'The nebular theory, the frost line and the age of the solar system.',
      sessions: [
        {
          t: 'How the solar system formed',
          s: 'A collapsing cloud, a spinning disk and the frost line.',
          md: `
## The nebular theory

About **4.6 billion years ago** a cloud of gas and dust, the **solar nebula**, began to collapse under its own gravity. As it shrank it **spun faster** (conservation of angular momentum) and **flattened into a disk**. Most of the material gathered at the centre and became the **Sun**. Within the disk, dust grains stuck together into **planetesimals**, which merged into **protoplanets** and then planets.

### Why two kinds of planet?
Temperature in the disk fell with distance from the Sun. The **frost line**, at about 3 to 5 AU, is the distance beyond which it was cold enough for water and other ices to form.

| Region | Material that could condense | Result |
| --- | --- | --- |
| **Inside** the frost line | Rock and metal only (scarce) | Small **terrestrial** planets |
| **Beyond** the frost line | Rock, metal **and abundant ice** | Large cores that captured gas to become **giant planets** |

### Evidence for the theory
- All the planets orbit in the **same direction** and nearly in the **same plane**, as the spinning disk predicts.
- Astronomers see **disks of gas and dust around young stars** today.
- The two classes of planets match the temperature pattern of the disk.
- **Radioactive dating** of meteorites gives ages of about **4.56 billion years**, consistent with a common formation time.
`,
          q: [
            mc('Why do all planets orbit the Sun in nearly the same plane?', 'They formed from a flattened, spinning disk', 'The collapsing nebula spun faster and flattened as angular momentum was conserved.', [
              ['Gravity from the Sun tilts every orbit to match', 'Gravity does not tilt orbits in this way. The shared plane comes from how they formed.'],
              ['The planets were captured at random from space', 'Random captures would give orbits at all angles.'],
            ]),
            mc('Why are the giant planets found beyond the frost line?', 'Ice was available there, so cores grew large enough to capture gas', 'Abundant solid material let giant cores form quickly.', [
              ['Gravity is weaker there', 'The reason is the availability of ice, not weaker gravity.'],
              ['Planets are thrown outward by the Sun', 'Planets formed where they are, in broad terms, from disk material.'],
            ]),
          ],
        },
        {
          t: 'Architecture and the age of the solar system',
          s: 'Planets, small bodies and radioactive dating.',
          md: `
## What is in the solar system?

- The **Sun** holds 99.8% of the mass.
- The **terrestrial planets** (Mercury, Venus, Earth, Mars) are small, dense and rocky, with few or no moons.
- The **giant planets**: the **gas giants** Jupiter and Saturn, and the **ice giants** Uranus and Neptune. They are large, low in density, have many moons and have rings.
- **Small bodies:** asteroids, comets and dwarf planets, the leftovers from formation.

### How we know the age
Some atoms are **radioactive**: they decay into other atoms at a steady rate. The **half-life** is the time for half of a sample to decay.

- After 1 half-life, ½ remains; after 2, ¼; after 3, ⅛.
- By comparing the amount of a **parent** isotope with its **daughter** product in a rock, we can calculate how long ago the rock solidified.

The oldest rocks on Earth are about **4.0 to 4.4 billion years** old, because Earth's surface has been recycled. The oldest **meteorites** and **Moon rocks** give about **4.5 billion** years, so the solar system is about **4.6 billion years old**.

> Radioactive decay is not affected by temperature, pressure or chemistry, which is why it makes a reliable clock.
`,
          q: [
            mc('A radioactive sample has a half-life of 1 billion years. After 3 billion years, what fraction of the original parent atoms remains?', '1/8', 'Three half-lives leave (1/2)³ = 1/8.', [
              ['1/3', 'Each half-life halves the amount, so it is not a simple third.'],
              ['1/6', 'Three half-lives leave one eighth, not one sixth.'],
            ]),
            mc('Why do the oldest meteorites give a better age for the solar system than the oldest Earth rocks?', 'Earth\'s surface has been recycled, while meteorites stayed largely unchanged', 'Meteorites preserve the time of the solar system\'s formation.', [
              ['Meteorites contain no radioactive atoms', 'Meteorites contain radioactive isotopes, and they are used for dating.'],
              ['Earth rocks cannot be dated', 'Earth rocks can be dated, but the oldest ones are younger than the solar system.'],
            ]),
          ],
        },
      ],
    },
    6: {
      summary: 'Earth\'s structure and the worlds Mercury, Venus, the Moon and Mars.',
      sessions: [
        {
          t: 'Shaping rocky worlds',
          s: 'Interiors, impacts, volcanism and tectonics.',
          md: `
## What shapes a rocky world's surface?

Four processes shape the terrestrial worlds:

1. **Impact cratering:** collisions leave craters. Many craters mean an **old surface**, and few mean a surface that has been renewed.
2. **Volcanism:** molten rock reaches the surface and builds volcanoes and lava plains.
3. **Tectonics:** the surface is stretched, compressed or broken by forces from below. On Earth, rigid **plates** move over the mantle.
4. **Erosion:** wind, water and ice wear down and move material.

### Earth's layers
| Layer | State and material |
| --- | --- |
| **Crust** | Thin rocky outer shell |
| **Mantle** | Hot, slowly flowing rock |
| **Outer core** | Liquid iron and nickel |
| **Inner core** | Solid iron and nickel, under high pressure |

The moving liquid outer core generates Earth's **magnetic field**.

### Size matters
A larger planet keeps its internal heat longer, so it stays **geologically active** longer. Small worlds such as the Moon and Mercury cooled quickly and became geologically quiet, while Earth is still active. Interior heat is therefore the engine of volcanism and tectonics.
`,
          q: [
            mc('A planet\'s surface is densely covered with craters. What does this suggest?', 'The surface is old and has not been resurfaced for a long time', 'Craters accumulate over time, so heavy cratering means an old surface.', [
              ['The surface is young', 'A young surface would have few craters because geologic activity erases them.'],
              ['The planet has a thick atmosphere', 'A thick atmosphere would burn up many impactors, giving fewer craters.'],
            ]),
            mc('Why has the Moon been geologically quiet for billions of years?', 'It is small and its interior cooled quickly', 'Small bodies lose their internal heat faster.', [
              ['It has a strong magnetic field', 'The Moon has no global magnetic field today.'],
              ['It is too far from the Sun', 'Geologic activity depends on internal heat rather than distance from the Sun.'],
            ]),
          ],
        },
        {
          t: 'Mercury, Venus, the Moon and Mars',
          s: 'Four very different rocky worlds and the greenhouse effect.',
          md: `
## A tour of the terrestrial worlds

| World | Key features |
| --- | --- |
| **Mercury** | Small and heavily cratered, with a large iron core. Almost no atmosphere, so temperatures swing from about 430 °C by day to about -180 °C at night. |
| **Venus** | Similar in size to Earth but with a thick, **carbon dioxide** atmosphere. The surface is about **465 °C** with a pressure about 90 times Earth's. It rotates very slowly and backwards. |
| **Earth's Moon** | No air. Dark lava plains (maria) and bright, cratered highlands. Probably formed when a Mars-sized body hit the young Earth. |
| **Mars** | Thin CO₂ atmosphere (about 1% of Earth's pressure), polar ice caps, the giant volcano **Olympus Mons** and dry river channels showing that liquid water once flowed. |

### The greenhouse effect
Sunlight warms a planet's surface, which re-emits **infrared** radiation. **Greenhouse gases** such as carbon dioxide, water vapour and methane absorb part of that infrared and send some of it back down, so the surface is warmer than it would be otherwise.

On **Venus** the thick CO₂ atmosphere gives a very strong greenhouse effect, so Venus is **hotter than Mercury** even though it is almost twice as far from the Sun. On Earth the greenhouse effect is moderate and raises the average temperature to a level where water is liquid.
`,
          q: [
            mc('Venus is hotter than Mercury even though it is farther from the Sun. Why?', 'Its thick carbon dioxide atmosphere causes a strong greenhouse effect', 'The atmosphere traps infrared radiation near the surface.', [
              ['Venus has more volcanoes than Mercury', 'Volcanoes alone do not explain the global temperature.'],
              ['Venus rotates faster than Mercury', 'Venus rotates very slowly, and rotation speed does not explain the heat.'],
            ]),
            mc('What evidence suggests that Mars once had liquid water?', 'Dry river channels and minerals formed in water', 'These features form when liquid water flows over a surface.', [
              ['Its red colour', 'The red colour comes from iron oxide on the surface.'],
              ['Its two small moons', 'The moons do not show that water was present.'],
            ]),
          ],
        },
      ],
    },
    7: {
      summary: 'The giant planets, their moons and the small bodies of the solar system.',
      sessions: [
        {
          t: 'The giant planets and their moons',
          s: 'Jupiter, Saturn, Uranus and Neptune, and the worlds that orbit them.',
          md: `
## The giant planets

| Planet | Notes |
| --- | --- |
| **Jupiter** | Largest planet, about 318 Earth masses. Mostly hydrogen and helium. The **Great Red Spot** is a storm larger than Earth that has lasted for centuries. |
| **Saturn** | Mostly hydrogen and helium, and less dense than water. Its bright **rings** are made of ice particles. |
| **Uranus** | An **ice giant** with water, ammonia and methane inside. Its axis is tilted about 98°, so it rolls on its side. |
| **Neptune** | An ice giant with a blue colour from methane, and fast winds. |

None of the giants has a solid surface to stand on. Each has **rings** (Saturn's are by far the largest) and many moons.

### Remarkable moons
- **Io (Jupiter):** the most volcanically active body known. **Tidal heating**, from the changing pull of Jupiter and other moons, flexes its interior.
- **Europa (Jupiter):** an ice shell over a **liquid water ocean**.
- **Ganymede (Jupiter):** the largest moon in the solar system, bigger than Mercury.
- **Titan (Saturn):** has a thick nitrogen atmosphere and lakes of liquid **methane** and ethane.
- **Enceladus (Saturn):** jets of water ice erupt from an underground ocean.

Tidal heating shows that a moon far from the Sun can still be geologically active, and places such as Europa and Enceladus are promising targets in the search for life.
`,
          q: [
            mc('Why is Io so volcanically active?', 'Tidal forces from Jupiter and the other moons flex and heat its interior', 'Tidal heating supplies energy that does not depend on sunlight.', [
              ['It is very close to the Sun', 'Io is far from the Sun. Its heat comes from tides.'],
              ['It is heated by radioactive decay alone', 'Radioactive decay is small compared with the tidal heating of Io.'],
            ]),
            mc('Which of these is an ice giant?', 'Neptune', 'Uranus and Neptune have interiors rich in water, ammonia and methane ices.', [
              ['Jupiter', 'Jupiter is a gas giant made mostly of hydrogen and helium.'],
              ['Mars', 'Mars is a terrestrial planet.'],
            ]),
          ],
        },
        {
          t: 'Asteroids, comets and dwarf planets',
          s: 'The small bodies and where they live.',
          md: `
## Small bodies

| Body | Where | What it is |
| --- | --- | --- |
| **Asteroids** | Mostly the **asteroid belt** between Mars and Jupiter (about 2.2 to 3.2 AU) | Rocky or metallic leftovers that never formed a planet because of Jupiter's gravity |
| **Comets** | The **Kuiper belt** beyond Neptune (about 30 to 50 AU) and the far **Oort cloud** | "Dirty snowballs" of ice, dust and rock |
| **Kuiper belt objects** | Beyond Neptune | Icy bodies, including Pluto |
| **Dwarf planets** | Asteroid belt (Ceres) and beyond (Pluto, Eris) | Round, but not dominant in their orbits |

### Comet tails
When a comet nears the Sun, its ice vaporizes into a glowing **coma**, and the **solar wind** and **light pressure** push gas and dust into **tails**. The tails always point **away from the Sun**, even when the comet is moving away.

### What is a planet?
In 2006 the International Astronomical Union said a **planet** (1) orbits the Sun, (2) has enough mass to be **round**, and (3) has **cleared its orbital neighbourhood** of other bodies. A **dwarf planet** meets the first two conditions but not the third. This is why Pluto, which shares its orbit with many Kuiper belt objects, is a dwarf planet.

Impacts by asteroids and comets also shaped the planets, delivered water and organic material and, 66 million years ago, helped end the age of the dinosaurs.
`,
          q: [
            mc('In which direction does a comet\'s tail point?', 'Away from the Sun', 'The solar wind and light pressure push the material away from the Sun.', [
              ['Opposite to the comet\'s motion', 'The tail points away from the Sun even when the comet is moving away from it.'],
              ['Toward the Sun', 'The solar wind pushes material away.'],
            ]),
            mc('Why is Pluto classified as a dwarf planet?', 'It has not cleared other bodies from its orbital neighbourhood', 'It shares its region with many other Kuiper belt objects.', [
              ['It is not round', 'Pluto is round.'],
              ['It does not orbit the Sun', 'Pluto does orbit the Sun.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · The solar system',
    tasks: [
      mc('A planet has an average distance of 16 AU from the Sun. What is its orbital period?', '64 years', 'P² = 16³ = 4096, so P = 64 years.', [
        ['16 years', 'The law is P² = a³, not P = a.'],
        ['256 years', 'This is the square of 16, which the law does not give.'],
        ['4 years', 'This is the square root of 16, which is not the period.'],
      ]),
      mc('Which statement follows from Kepler\'s second law?', 'A planet moves fastest when it is nearest the Sun', 'It sweeps equal areas in equal times.', [
        ['A planet moves at a constant speed', 'Its speed changes around an elliptical orbit.'],
        ['A planet moves fastest when farthest from the Sun', 'It is slowest at that point.'],
        ['A planet\'s orbit is a perfect circle', 'The first law says orbits are ellipses.'],
      ]),
      mc('Two asteroids are three times farther apart than before. How does the gravitational force between them change?', 'It becomes one ninth as strong', 'Force varies as 1/r², and 1/3² = 1/9.', [
        ['It becomes one third as strong', 'The force depends on the square of the distance.'],
        ['It becomes three times stronger', 'Gravity weakens with distance.'],
        ['It does not change', 'Gravity depends on distance.'],
      ]),
      mc('What does the frost line explain?', 'Why giant planets formed in the outer solar system and rocky planets in the inner part', 'Beyond it ice could condense, so planet cores grew large enough to capture gas.', [
        ['Why the Sun is a star', 'The frost line concerns the disk, not the Sun\'s nature.'],
        ['Why Earth has seasons', 'Seasons are caused by axial tilt.'],
        ['Why comets have tails', 'Tails form as comets heat up near the Sun.'],
      ]),
      mc('Why is the surface of Venus hotter than that of Mercury?', 'A thick CO₂ atmosphere traps heat through a strong greenhouse effect', 'Greenhouse gases absorb the infrared radiation emitted by the surface.', [
        ['Venus is closer to the Sun', 'Mercury is closer to the Sun.'],
        ['Venus has a magnetic field', 'A magnetic field does not heat the surface.'],
        ['Venus has no atmosphere', 'Venus has a very thick atmosphere.'],
      ]),
      mc('Which moon is known for an ice shell over a liquid water ocean?', 'Europa', 'Europa\'s ocean is a target in the search for life.', [
        ['Io', 'Io is known for volcanoes.'],
        ['Earth\'s Moon', 'Earth\'s Moon has no global ocean.'],
        ['Phobos', 'Phobos is a small rocky moon of Mars.'],
      ]),
      mc('Where is the main asteroid belt?', 'Between the orbits of Mars and Jupiter', 'Jupiter\'s gravity prevented a planet from forming there.', [
        ['Between Earth and Mars', 'This region contains few asteroids compared with the main belt.'],
        ['Beyond Neptune', 'This is the region of the Kuiper belt.'],
        ['Inside Mercury\'s orbit', 'No major belt exists there.'],
      ]),
      tf('Radioactive decay rates change when a rock is heated, so dating methods are unreliable.', false, 'Decay rates are not affected by heat, pressure or chemistry.', 'Correct. Decay rates stay constant, which is why radiometric dating works.'),
    ],
  },
};
