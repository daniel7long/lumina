import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow energy and matter through ecosystems, model how populations grow, and see why some species matter more than others to a community.',
  modules: {
    15: {
      summary: 'Trophic levels and population growth.',
      sessions: [{
        t: 'Energy flow and population growth',
        s: 'Food chains, the 10 percent rule, exponential and logistic growth.',
        md: `
## Energy flow

Energy enters most ecosystems as sunlight, captured by **producers** (autotrophs). It passes to **primary consumers** (herbivores), **secondary consumers**, and so on. At each step only about **10 %** of the energy is available to the next trophic level; the rest is lost as **heat** through respiration or remains in unconsumed or undigested parts. This is why food chains are short and why there is far less biomass at higher trophic levels.

If producers fix 20 000 kJ, primary consumers receive about 2000 kJ, secondary consumers 200 kJ and tertiary consumers **20 kJ**.

**Energy flows through an ecosystem in one direction, but matter (carbon, nitrogen, water) is recycled.**

## Population growth

- **Exponential growth:** dN/dt = rN, where r is the per-capita growth rate. With N = 2000 and r = 0.05 per year, the population gains 0.05 × 2000 = **100 individuals per year**. Growth accelerates, but it is only realistic when resources are unlimited.
- **Logistic growth:** dN/dt = rN × (K − N)/K, where **K** is the **carrying capacity**. Growth slows as N nears K. With N = 500, r = 0.2 and K = 1000, dN/dt = 0.2 × 500 × (500/1000) = **50 per unit time**. Growth is fastest at **N = K/2**.

**Density-dependent factors** (competition, disease, predation) become stronger as the population gets crowded. **Density-independent factors** (a fire, a hurricane) act regardless of density.
`,
        q: [
          mc('Producers in an ecosystem fix 20 000 kJ of energy. About how much energy is available to tertiary consumers? (Assume 10 % transfer between levels.)', '20 kJ', 'Primary consumers get 2000 kJ, secondary 200 kJ, tertiary 20 kJ.', [
            ['200 kJ', 'This is the amount reaching secondary consumers, one level too early.'],
            ['2000 kJ', 'This is the amount reaching primary consumers.'],
            ['2 kJ', 'This would be the amount at the fourth consumer level.'],
          ]),
          mc('At what population size is the growth of a logistic population the fastest?', 'At half the carrying capacity (K/2)', 'The product N(K − N) is largest at N = K/2.', [
            ['At the carrying capacity', 'At K the growth rate is zero.'],
            ['When the population is very small', 'The growth rate is small when there are few individuals to reproduce.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Communities, diversity and nutrient cycles.',
      sessions: [{
        t: 'Communities and ecosystems',
        s: 'Keystone species, succession, species diversity and the carbon and nitrogen cycles.',
        md: `
## Community interactions

Species interact by **competition**, **predation**, **herbivory**, **parasitism**, **mutualism** and **commensalism**. Two species cannot occupy exactly the same niche for long (**competitive exclusion**).

A **keystone species** has an effect on its community far greater than its abundance suggests. When sea otters are removed, sea urchins increase and destroy kelp forests. A **trophic cascade** is an effect that passes through several trophic levels.

## Succession

**Primary succession** starts on bare rock with no soil (after a volcano or glacier), beginning with pioneer species such as lichens. **Secondary succession** occurs where soil remains (after a fire) and is faster.

## Species diversity

Diversity includes the **number of species** (richness) and their **relative abundance**. **Simpson's index: D = 1 − Σ(nᵢ/N)²**. A community of four species with 10 individuals each has D = 1 − 4(0.25)² = **0.75**. A community of three species with proportions 0.5, 0.3 and 0.2 has D = 1 − (0.25 + 0.09 + 0.04) = **0.62**. Higher D means more diversity.

## Nutrient cycles

- **Carbon:** photosynthesis moves CO₂ into organic molecules; respiration, decomposition and combustion return it. Burning fossil fuels adds CO₂ faster than it is removed, increasing the greenhouse effect.
- **Nitrogen:** atmospheric N₂ is converted to usable forms by nitrogen-fixing bacteria (often in legume root nodules), nitrifying bacteria convert ammonium to nitrate, plants take up nitrate, and denitrifying bacteria return N₂ to the air.
`,
        q: [
          mc('A community has four species with 10 individuals each. What is its Simpson diversity index D = 1 − Σ(n/N)²?', '0.75', 'Each proportion is 0.25, so Σ(n/N)² = 4 × 0.0625 = 0.25 and D = 1 − 0.25 = 0.75.', [
            ['0.25', 'This is the sum of the squared proportions, which must be subtracted from 1.'],
            ['0.0625', 'This is the squared proportion for only one species.'],
            ['1.0', 'D reaches 1 only with an infinite number of equally abundant species.'],
          ]),
          mc('Removing a single predator, the sea star Pisaster, from a rocky shore causes mussels to take over and many other species to disappear. What kind of species is Pisaster?', 'A keystone species', 'Its effect on the community is far greater than its abundance would suggest.', [
            ['A pioneer species', 'Pioneer species are the first to colonize new habitat.'],
            ['An invasive species', 'Pisaster is native to this shore; an invasive species is introduced.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Ecology',
    tasks: [
      mc('A population of 2000 individuals grows exponentially with r = 0.05 per year. About how many individuals are added in the first year?', '100', 'dN/dt = rN = 0.05 × 2000 = 100.', [
        ['40 000', 'The values were divided instead of multiplied (2000/0.05).'],
        ['2050', 'This is the population after one year, not the number added.'],
        ['10', 'The growth rate was applied as 0.5 % rather than 5 %.'],
      ]),
      mc('A logistic population has N = 500, r = 0.2 and K = 1000. What is dN/dt?', '50', 'dN/dt = rN(K − N)/K = 0.2 × 500 × (500/1000) = 50.', [
        ['100', 'This is the growth rate for exponential growth (rN), which ignores the carrying capacity.'],
        ['0', 'Growth stops at N = K, not at K/2.'],
        ['25', 'The factor (K − N)/K was applied twice.'],
      ]),
      mc('Which statement about energy and matter in an ecosystem is correct?', 'Energy flows in one direction while matter is recycled', 'Energy is lost as heat at each step, so ecosystems need a constant input; elements are reused.', [
        ['Energy and matter are both recycled', 'Energy is lost as heat and cannot be reused by organisms.'],
        ['Energy is recycled and matter flows in one direction', 'It is the other way around.'],
      ]),
      mc('A community has three species with relative abundances of 0.5, 0.3 and 0.2. What is its Simpson diversity index?', '0.62', 'Σ(n/N)² = 0.25 + 0.09 + 0.04 = 0.38, so D = 1 − 0.38 = 0.62.', [
        ['0.38', 'This is the sum of squares; it must be subtracted from 1.'],
        ['1.0', 'The proportions sum to 1, but the squared proportions do not.'],
        ['0.33', 'This is 1/3 and does not use the abundances.'],
      ]),
      mc('After a forest fire, a community regrows from the soil that remained. What is this process?', 'Secondary succession', 'Soil and seeds remain, so recovery is faster than succession on bare rock.', [
        ['Primary succession', 'Primary succession starts without soil.'],
        ['Competitive exclusion', 'This describes one species outcompeting another, not community recovery.'],
      ]),
      tf('Bacteria that fix nitrogen convert N₂ from the air into forms of nitrogen that plants can use.', true, 'This is the main way atmospheric nitrogen enters food webs.', 'Nitrogen-fixing bacteria turn N₂ into ammonia, which can be converted into forms that plants take up.'),
      tf('Energy is recycled within an ecosystem in the same way that carbon is.', false, 'Energy is not recycled.', 'Correct. Energy flows through ecosystems and is lost as heat, so it must be continually supplied by sunlight, while carbon atoms are reused.'),
    ],
  },
};
