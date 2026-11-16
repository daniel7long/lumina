import { mc, tf } from '../builder.js';

export default {
  summary: 'Find out how astronomers detect planets around other stars, what kinds of worlds they have found, and how scientists think about where life might exist.',
  modules: {
    15: {
      summary: 'The transit and radial-velocity methods, and what the discoveries show.',
      sessions: [
        {
          t: 'Finding planets around other stars',
          s: 'Transits and radial velocities.',
          md: `
## Exoplanets

A planet orbiting a star other than the Sun is an **exoplanet**. Their light is swamped by the glare of their star, so most are found **indirectly**. The first around a Sun-like star, **51 Pegasi b**, was announced in 1995. Today, more than **5,000** are confirmed.

### Transit method
If a planet's orbit is seen almost edge-on, the planet passes in front of its star once per orbit and blocks a little of the starlight. The star's brightness dips, and the record of brightness over time is a **light curve**.

- The **depth** of the dip gives the planet's **size**: the fractional drop is about **(planet radius / star radius)²**. A Jupiter-sized planet crossing a Sun-like star dims it by about **1%**, and an Earth-sized planet by only about **0.008%**.
- The **time between dips** gives the **orbital period**.

NASA's Kepler and TESS missions use this method.

### Radial-velocity method
A planet and its star orbit their common centre of mass, so the star **wobbles**. Using the **Doppler shift** of the star's spectral lines (blueshift as it moves toward us, redshift as it moves away), astronomers measure the wobble. It gives the **period** and a **minimum mass** of the planet.

### Combining methods
A transit gives the **radius** and the radial velocity gives the **mass**. Together they give the **density**, which says whether a planet is rocky, watery or gaseous.

Other methods include **direct imaging** and **gravitational microlensing**.
`,
          q: [
            mc('A planet transits its star and the brightness drops by 1%. What can we find from this?', 'The size of the planet compared with the star', 'The depth of the dip depends on the ratio of the areas.', [
              ['The mass of the planet', 'Mass is found with the radial-velocity method.'],
              ['The planet\'s atmosphere composition directly from the depth alone', 'The depth alone gives size, not composition.'],
            ]),
            mc('How does the radial-velocity method detect a planet?', 'It measures the Doppler shift of the star as the planet makes it wobble', 'The star moves toward and away from us as it orbits the common centre of mass.', [
              ['It photographs the planet directly', 'That is direct imaging, a different method.'],
              ['It measures the dip in starlight when the planet passes in front', 'That describes the transit method.'],
            ]),
          ],
        },
        {
          t: 'What the discoveries show',
          s: 'Hot Jupiters, super-Earths and the bias in our sample.',
          md: `
## The exoplanet zoo

Surveys have revealed that planets are **common**: on average there is at least one planet per star in the Milky Way. They are also **very diverse**.

| Kind | Description |
| --- | --- |
| **Hot Jupiters** | Gas giants orbiting very close to their stars, with periods of a few days. None exist in our solar system. |
| **Super-Earths and mini-Neptunes** | Planets with 1 to 4 times Earth's radius. They are the **most common** kind found, but there is no example in our solar system. |
| **Earth-sized rocky planets** | Found in large numbers, including some in the habitable zones of their stars. |
| **Planets in multiple systems** | Compact systems such as TRAPPIST-1, with seven rocky planets around a small red star. |

### Detection bias
Our sample is not a fair picture of all planets, because each method **favours** certain planets:

- Both methods find **large** planets more easily than small ones.
- Both find planets **close to their star** more easily: they transit more often and they cause a bigger wobble.
- A transit is seen only when the orbit is **edge-on** to us, which is unlikely for a wide orbit.

So hot Jupiters were among the first planets discovered even though they are rare. Astronomers correct for these biases to find how common each kind of planet really is, and the James Webb Space Telescope now studies **atmospheres** of some exoplanets by looking at starlight filtered through them.
`,
          q: [
            mc('Why were hot Jupiters among the first exoplanets found, although they are not the most common kind?', 'Large planets close to their stars are the easiest to detect', 'They cause large, frequent dips and big wobbles.', [
              ['They are the only planets that exist', 'Surveys show that smaller planets are much more common.'],
              ['They are brighter than their stars', 'Planets are far fainter than their stars.'],
            ]),
            mc('From transit and radial-velocity data together, what extra property can be calculated?', 'The planet\'s average density', 'The transit gives the radius and the radial velocity gives the mass.', [
              ['The planet\'s age', 'Age is not found from these data alone.'],
              ['The name of the planet\'s star', 'Naming is not a result of the measurements.'],
            ]),
          ],
        },
      ],
    },
    16: {
      summary: 'The habitable zone, life in the solar system and the Drake equation.',
      sessions: [
        {
          t: 'The habitable zone and the ingredients for life',
          s: 'Where liquid water can exist, and where else life might be.',
          md: `
## What does life need?

All life on Earth needs three things:

1. **Liquid water** as a solvent for chemistry.
2. A source of **energy**.
3. **Building blocks**, especially carbon and other elements such as nitrogen, phosphorus and sulfur.

### The habitable zone
The **habitable zone** is the range of distances from a star where a planet with a suitable atmosphere could have **liquid water on its surface**.

- Too close, and water boils away (as on Venus).
- Too far, and it freezes (as on present-day Mars).
- The zone is closer to a **dim, cool star** and farther from a **bright, hot star**. For the Sun it lies at about 0.95 to 1.4 AU.

Being in the zone does **not** guarantee a habitable planet: the atmosphere, size, magnetic field and the star's activity matter too.

### Life beyond the zone
Life might exist where there is **liquid water** from another source. **Europa** and **Enceladus** have oceans under ice kept liquid by **tidal heating**, and Titan has liquid hydrocarbons. On Earth, **extremophiles** live in boiling springs, deep ice, acid and the deep ocean floor, which shows that life can survive in extreme conditions.

Mars once had liquid water on its surface, and rovers are searching for signs of past microbial life.
`,
          q: [
            mc('What is the habitable zone?', 'The range of distances from a star where liquid water could exist on a planet\'s surface', 'It depends on the star\'s luminosity.', [
              ['The region where life is certain to exist', 'Being in the zone does not guarantee life or even habitability.'],
              ['The region around a planet where its moons orbit', 'This describes a planet\'s gravitational domain, not the habitable zone.'],
            ]),
            mc('Why are Europa and Enceladus of interest in the search for life although they are far from the Sun?', 'They have liquid water oceans under their ice, kept warm by tidal heating', 'Liquid water and an energy source are key ingredients.', [
              ['They are inside the Sun\'s habitable zone', 'They orbit giant planets far outside the zone.'],
              ['They have thick oxygen atmospheres', 'They have no thick oxygen atmospheres.'],
            ]),
          ],
        },
        {
          t: 'Biosignatures and the Drake equation',
          s: 'How to look for life and how to organize the question of intelligent life.',
          md: `
## Looking for signs of life

A **biosignature** is a sign that life is present. For distant planets, astronomers analyse starlight that passes through the atmosphere during a transit (**transmission spectroscopy**) and look for gases such as **oxygen** and **methane** together. On Earth, life keeps both in large amounts, although they would normally react and disappear. A careful search must rule out **non-biological** explanations, so a single gas is not proof.

### The Drake equation
In 1961 Frank Drake wrote an equation to organize what we need to know to estimate the number *N* of **communicating civilizations** in the Galaxy:

**N = R★ × fp × ne × fl × fi × fc × L**

| Term | Meaning |
| --- | --- |
| **R★** | Rate of star formation |
| **fp** | Fraction of stars with planets |
| **ne** | Habitable planets per planetary system |
| **fl** | Fraction on which life arises |
| **fi** | Fraction on which intelligence arises |
| **fc** | Fraction that develop detectable technology |
| **L** | Length of time such a civilization is detectable |

Astronomy now gives good values for the first terms (planets are common), but the **biological** terms (fl, fi, fc) and **L** are unknown, so the equation does not give one answer. Its value is that it breaks a big question into smaller ones that science can try to answer.

Programmes such as **SETI** search for radio and other signals from technological civilizations, and so far have found none.
`,
          q: [
            mc('Why is finding oxygen and methane together in a planet\'s atmosphere considered a possible biosignature?', 'They normally react with each other, so something must keep making them', 'On Earth, life continuously replenishes both gases.', [
              ['Oxygen and methane are never found in non-living worlds', 'Non-biological processes can make them, so scientists must rule these out.'],
              ['They prove that the planet has intelligent life', 'They could indicate simple life at most, and they are not proof.'],
            ]),
            mc('Which term in the Drake equation can astronomy now estimate best?', 'The fraction of stars with planets', 'Exoplanet surveys show that planets are common.', [
              ['The fraction of planets on which intelligence arises', 'This is a biological term that we cannot yet estimate.'],
              ['The lifetime of a technological civilization', 'We have no data about this.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Other worlds and life',
    tasks: [
      mc('Why are most exoplanets found by indirect methods?', 'A planet is extremely faint next to its star, which swamps its light', 'Indirect methods look for the planet\'s effect on the star.', [
        ['Planets do not emit or reflect any light', 'Planets reflect and emit some light, but it is very faint compared with the star.'],
        ['Telescopes cannot see stars other than the Sun', 'We see many stars. The difficulty is the planets.'],
        ['Planets only exist in our own solar system', 'Thousands of exoplanets are known.'],
      ]),
      mc('A star\'s brightness drops by 0.01% every 30 days. What is the most reasonable interpretation?', 'A small planet transits the star every 30 days', 'The dip depth shows a small planet, and the spacing gives the period.', [
        ['A very large planet transits every 30 days', 'A large planet would cause a deeper dip.'],
        ['The star pulsates as a Cepheid', 'A regular small dip fits a transit better than a Cepheid, which varies by large amounts.'],
        ['The star is moving away from us', 'Motion would change the spectral lines, not make periodic dips.'],
      ]),
      mc('What does the radial-velocity method measure?', 'The wobble of a star, seen as a Doppler shift in its spectrum', 'This reveals the planet\'s orbital period and minimum mass.', [
        ['The change in the star\'s brightness', 'This is the transit method.'],
        ['The planet\'s temperature', 'Temperature is not measured directly by this method.'],
        ['The image of the planet', 'That would be direct imaging.'],
      ]),
      mc('Which statement about exoplanet detection bias is true?', 'Large planets close to their stars are easiest to detect', 'They make bigger dips and wobbles, more often.', [
        ['Small planets far from their stars are easiest to detect', 'They are the hardest to detect.'],
        ['The methods detect all planets equally well', 'The methods favour some planets over others.'],
        ['Transits can be seen for every planet', 'Only orbits seen edge-on show transits.'],
      ]),
      mc('Which planet is most likely to be in the habitable zone of a cool, dim red star?', 'One orbiting very close to the star', 'A dim star warms only nearby planets, so its habitable zone lies close in.', [
        ['One orbiting at 5 AU', 'It would be far too cold.'],
        ['One orbiting where Jupiter is in our system', 'Around a dim star this would be frozen.'],
        ['Any planet, regardless of distance', 'Distance matters for liquid water.'],
      ]),
      mc('Why is a subsurface ocean on Europa of interest to astrobiologists?', 'It could provide liquid water and energy from tidal heating', 'These are key requirements for life.', [
        ['It receives strong sunlight', 'Europa is far from the Sun, and its ocean is beneath thick ice.'],
        ['It has an atmosphere rich in oxygen', 'Europa has only a very thin atmosphere.'],
        ['It is inside the Sun\'s habitable zone', 'Europa is far outside the zone.'],
      ]),
      mc('What is the purpose of the Drake equation?', 'To organize the factors that determine the number of detectable civilizations', 'It breaks a hard question into smaller ones.', [
        ['To give the exact number of alien civilizations', 'Several terms are unknown, so it does not give a unique answer.'],
        ['To measure the distance to the nearest star', 'Parallax does this.'],
        ['To predict the orbit of a planet', 'Kepler\'s laws do this.'],
      ]),
      tf('A planet in its star\'s habitable zone is certain to be inhabited.', false, 'Being in the zone only allows liquid water on the surface if other conditions are met, and it says nothing about life.', 'Correct. The zone shows where liquid water is possible, not where life exists.'),
    ],
  },
};
