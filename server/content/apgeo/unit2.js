import { mc, tf } from '../builder.js';

export default {
  summary: 'Where people live, how populations grow and why people move are central questions of human geography.',
  modules: {
    3: {
      summary: 'Population distribution and change.',
      sessions: [{
        t: 'Density, growth and the demographic transition',
        s: 'Key measures and models of population change.',
        md: `
## Density measures
- **Arithmetic density** = total population ÷ total land area.
- **Physiological density** = total population ÷ **arable** (farmable) land area. It shows pressure on farmland.
- **Agricultural density** = farmers ÷ arable land.

### Worked example
A country has 50,000 people, 25 km² of land and 5 km² of arable land. Arithmetic density = 50,000 ÷ 25 = **2,000 per km²**. Physiological density = 50,000 ÷ 5 = **10,000 per km²**.

## Measures of change
- **Crude birth rate (CBR)** and **crude death rate (CDR)** are births and deaths per 1,000 people per year.
- **Rate of natural increase (RNI)** = (CBR − CDR) ÷ 10, expressed as a percent. With CBR 30 and CDR 10, RNI = 20 ÷ 10 = **2.0%**.
- **Total fertility rate (TFR):** average number of children per woman. About **2.1** is the replacement level in developed countries.
- **Doubling time** ≈ 70 ÷ growth rate (the **rule of 70**). At 2% growth, a population doubles in **35 years**.
- **Dependency ratio** = (population aged 0–14 plus 65 and over) ÷ population aged 15–64, × 100.

## The demographic transition model
- **Stage 1:** high birth and death rates, very slow growth.
- **Stage 2:** death rates fall (better food, medicine, sanitation) while birth rates stay high, so growth is rapid.
- **Stage 3:** birth rates fall, so growth slows.
- **Stage 4:** low birth and death rates, with low growth.
- **Stage 5 (proposed):** birth rate below death rate, so population may decline.

## Population pyramids
A wide base indicates many young people and high fertility. A narrow base indicates low fertility and an aging population.
`,
        q: [
          mc('A country has a crude birth rate of 30 and a crude death rate of 10 per 1,000. What is its rate of natural increase?', '2.0%', '(30 − 10) ÷ 10 = 2.0 percent per year.', [
            ['20%', 'This forgets to divide by 10 to convert per 1,000 to a percent.'],
            ['0.2%', 'This divides by 100 instead of 10.'],
            ['4.0%', 'This adds the two rates instead of subtracting them.'],
          ]),
          mc('Which stage of the demographic transition model has rapid growth because death rates fall while birth rates remain high?', 'Stage 2', 'Medical and food advances cut death rates first.', [
            ['Stage 1', 'Both rates are high in Stage 1, so growth is slow.'],
            ['Stage 3', 'In Stage 3 birth rates are already falling.'],
            ['Stage 4', 'In Stage 4 both rates are low.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Migration.',
      sessions: [{
        t: 'Why people move',
        s: 'Push and pull factors, types of migration and migration models.',
        md: `
## Push and pull factors
- **Push factors** drive people away from a place: war, famine, lack of jobs, persecution.
- **Pull factors** attract people to a place: jobs, safety, family and better services.
- **Intervening obstacles** (such as borders, cost or laws) and **intervening opportunities** (a nearer place with jobs) shape migration routes.

## Types of migration
- **Voluntary migration:** people choose to move.
- **Forced migration:** people are compelled to move (for example, the transatlantic slave trade, refugees and displaced persons).
- **Internal migration** occurs within a country, and **international migration** crosses borders.
- **Chain migration:** followers move to join earlier migrants from the same place.
- **Step migration:** moving in stages, for example from village to town to city.
- **Transhumance:** seasonal movement of herds.
- **Brain drain:** emigration of highly skilled people.

## Refugees and others
**Refugees** have crossed an international border to escape persecution. **Internally displaced persons (IDPs)** have been forced to move but have stayed within their country. **Asylum seekers** have applied for refugee status.

## Models
- **Ravenstein's laws of migration:** most migrants move short distances; migrants who go far tend to go to cities; each migration flow generates a counterflow.
- **Gravity model:** migration is greater between larger and closer places.
- **Zelinsky's migration transition** links migration patterns to the demographic transition model.

## Effects
Migration produces **remittances** (money sent home), cultural change, labor supply shifts and policy debates over quotas and immigration law.
`,
        q: [
          mc('A person who crosses an international border to escape persecution is', 'a refugee', 'Refugees leave their country because of well-founded fear of persecution.', [
            ['an internally displaced person', 'An IDP is forced to move but stays within the same country.'],
            ['a transhumant herder', 'Transhumance is seasonal herd movement.'],
            ['a step migrant', 'Step migration is moving in stages, not a legal status.'],
          ]),
          mc('Which is an example of chain migration?', 'A family moves to a city where relatives from their village already live', 'Earlier migrants help later ones follow.', [
            ['A farmer moves his cattle to mountain pastures each summer', 'This is transhumance.'],
            ['A government relocates people from a flooded region', 'This is forced migration.'],
            ['A skilled engineer leaves for a better-paying job abroad', 'This describes brain drain, not following earlier migrants.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Population and Migration',
    tasks: [
      mc('A country has 50,000 people and 5 km² of arable land. What is its physiological density?', '10,000 people per km²', '50,000 ÷ 5 = 10,000.', [
        ['2,000 people per km²', 'This divides by total land area (25 km²) and gives arithmetic density.'],
        ['250,000 people per km²', 'This multiplies instead of dividing.'],
        ['5 people per km²', 'This divides the arable area by 1,000 rather than the population by the arable area.'],
      ]),
      mc('A population growing at 2% per year will double in about', '35 years', 'By the rule of 70, 70 ÷ 2 = 35.', [
        ['20 years', 'This would correspond to a growth rate of 3.5%.'],
        ['70 years', 'This would correspond to a growth rate of 1%.'],
        ['140 years', 'This would correspond to a growth rate of 0.5%.'],
      ]),
      mc('A country has 25 million people aged 0–14, 70 million aged 15–64 and 5 million aged 65 and over. What is its dependency ratio?', 'About 43', '(25 + 5) ÷ 70 × 100 ≈ 42.9.', [
        ['About 36', 'This counts only the young dependents (25 ÷ 70) and leaves out the elderly.'],
        ['About 30', 'This divides the dependents by the total population (30 ÷ 100) instead of by the working-age group.'],
        ['About 143', 'This divides the whole population by the working-age group (100 ÷ 70).'],
      ]),
      mc('A population pyramid with a very wide base and narrow top indicates', 'high fertility and a young population', 'Many children relative to adults signals high birth rates.', [
        ['an aging population with low fertility', 'That produces a narrow base and wide top.'],
        ['Stage 4 of the demographic transition', 'Stage 4 pyramids are more rectangular.'],
        ['no natural increase', 'A wide base suggests strong natural increase.'],
      ]),
      mc('Which is a pull factor?', 'Job opportunities in a destination city', 'Pull factors attract migrants.', [
        ['A famine in the home region', 'This is a push factor.'],
        ['War in the origin country', 'This is a push factor.'],
        ['Persecution of a minority group', 'This is a push factor.'],
      ]),
      mc('According to Ravenstein, most migrants', 'move short distances', 'Longer-distance migrants tend to move to major cities.', [
        ['move to a different continent', 'Most migrants move short distances.'],
        ['move without any counterflow', 'Each flow tends to produce a counterflow.'],
        ['are whole families', 'Ravenstein noted that families rarely migrate internationally; most migrants are young adults.'],
      ]),
      tf('Remittances are money sent home by migrants to family in their country of origin.', true, 'Correct. Remittances are a major source of income in some countries.', 'Remittances are exactly that, so the statement is true.'),
    ],
  },
};
