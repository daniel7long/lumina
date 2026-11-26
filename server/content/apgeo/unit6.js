import { mc, tf } from '../builder.js';

export default {
  summary: 'More than half of the world’s people live in cities. Study how cities are arranged, why they grow and what challenges they face.',
  modules: {
    11: {
      summary: 'Urban systems and models.',
      sessions: [{
        t: 'Central places, rank and land-use models',
        s: 'How cities are distributed and how they are organized inside.',
        md: `
## Systems of cities
- **Central place theory** (Walter Christaller): settlements exist to provide goods and services to the surrounding area. A **threshold** is the minimum number of customers needed to support a service, and the **range** is the maximum distance people will travel for it. Larger places offer more specialized services and are fewer and farther apart.
- **Rank-size rule:** the population of the city ranked *n* is about **1/n** of the largest city. If the largest city has 8 million people, the second has about **4 million**, the fourth about **2 million** and the eighth about **1 million**.
- **Primate city:** a city much larger than the next biggest and dominating the country (Paris, Bangkok).
- **World cities** (such as New York, London and Tokyo) are centers of global finance and business.

## Models of urban structure
| Model | Idea |
| --- | --- |
| Concentric zone (Burgess) | Rings around the central business district (CBD): CBD, zone of transition, working-class homes, middle-class homes, commuter zone |
| Sector (Hoyt) | Land use grows outward in wedges along transport routes; high-income housing in sectors away from industry |
| Multiple nuclei (Harris and Ullman) | Several centers, such as an airport or university, each with its own land use |
| Galactic city or edge city | Suburban centers of jobs and shopping around a highway ring |
| Latin American city (Griffin–Ford) | A commercial spine from the CBD, with a mix of elite sectors and rings of informal settlements |

## Bid-rent
**Bid-rent theory** shows that land value is highest near the center, and activities that can pay the most (retail and offices) occupy it.
`,
        q: [
          mc('The largest city in a country has 8 million people. According to the rank-size rule, about how many people live in the fourth-largest city?', '2 million', 'The fourth city is 1/4 of the largest: 8 ÷ 4 = 2 million.', [
            ['4 million', 'This would be the second-ranked city (8 ÷ 2).'],
            ['1 million', 'This would be the eighth-ranked city (8 ÷ 8).'],
            ['6 million', 'This does not follow the 1/n pattern of the rule.'],
          ]),
          mc('Which urban model describes land use growing outward in wedges along transport routes?', 'The sector model', 'Hoyt’s model shows land use extending along transport corridors.', [
            ['The concentric zone model', 'This model uses rings.'],
            ['The multiple nuclei model', 'This model has several centers.'],
            ['Von Thünen’s model', 'This is an agricultural land-use model.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Urbanization and its challenges.',
      sessions: [{
        t: 'Growth, change and challenges in cities',
        s: 'Suburbs, gentrification, informal settlements and planning responses.',
        md: `
## Urbanization
Today more than half the world's population lives in cities, and the fastest urban growth is in Asia and Africa. **Megacities** have more than 10 million people.

## Processes in cities
- **Suburbanization:** growth of residential areas outside the central city, aided by cars and highways.
- **Urban sprawl:** low-density, car-dependent outward expansion that consumes farmland.
- **Gentrification:** wealthier residents move into older, lower-income neighborhoods and renovate them. It can bring investment but can also **displace** long-term residents.
- **Redlining:** the historical practice of denying loans and insurance in certain neighborhoods based on race or ethnicity, which contributed to **residential segregation**.
- **Informal settlements** (shantytowns, favelas) are unplanned housing, often without secure land rights or services, that grow in rapidly urbanizing countries.
- **Deindustrialization** can leave **brownfields** (former industrial sites that need cleanup).

## Planning responses
- **Zoning:** laws that regulate land use.
- **Smart growth:** compact, walkable development that protects open land.
- **New Urbanism:** mixed-use neighborhoods with walkable streets and public space.
- **Public transit** and **urban growth boundaries** to limit sprawl.
- **Sustainable cities** aim to reduce energy use, waste and pollution.

## Challenges
Housing affordability, traffic congestion, air pollution, flooding and inequality are common challenges.
`,
        q: [
          mc('Which description best fits gentrification?', 'Wealthier residents move into and renovate a lower-income neighborhood, which may displace existing residents', 'It changes the character and cost of a neighborhood.', [
            ['Low-density expansion of a city onto farmland', 'This describes urban sprawl.'],
            ['Unplanned housing built without secure land rights', 'This describes informal settlements.'],
            ['Laws that regulate how land is used', 'This describes zoning.'],
          ]),
          mc('Smart growth and New Urbanism are best described as', 'planning approaches that favor compact, walkable, mixed-use development', 'They aim to reduce sprawl and car dependence.', [
            ['strategies that encourage sprawl', 'They aim to limit it.'],
            ['models of agricultural land use', 'They concern cities.'],
            ['types of informal settlement', 'They are planning approaches.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Cities and Urban Land Use',
    tasks: [
      mc('In central place theory, the threshold of a service is', 'the minimum number of customers needed to support it', 'Below the threshold, the service cannot survive.', [
        ['the maximum distance people will travel to use it', 'That is the range.'],
        ['the largest city in the country', 'That is the primate city or first-ranked city.'],
        ['the cost of land in the CBD', 'This relates to bid-rent.'],
      ]),
      mc('The largest city has 12 million people. By the rank-size rule, the third-ranked city has about', '4 million', '12 ÷ 3 = 4 million.', [
        ['6 million', 'This is the second-ranked city (12 ÷ 2).'],
        ['3 million', 'This is the fourth-ranked city (12 ÷ 4).'],
        ['8 million', 'This does not follow the 1/n pattern.'],
      ]),
      mc('A country’s largest city has far more people than the second city and dominates the nation’s economy and politics. It is called', 'a primate city', 'Paris and Bangkok are classic examples.', [
        ['a megacity', 'A megacity is defined by having more than 10 million people.'],
        ['an edge city', 'An edge city is a suburban center.'],
        ['a world city only', 'World cities are defined by global influence, not dominance within one country.'],
      ]),
      mc('Which model places the central business district at the center of rings of land use?', 'The concentric zone model', 'Burgess described rings around the CBD.', [
        ['The sector model', 'The sector model uses wedges.'],
        ['The multiple nuclei model', 'This model has several centers.'],
        ['The Latin American city model', 'This model has a commercial spine and informal rings.'],
      ]),
      mc('Which is the best example of an informal settlement?', 'A neighborhood of self-built homes without legal land title or city services', 'These settlements grow in rapidly urbanizing regions.', [
        ['A new suburb built by a developer with permits', 'This is a formal development.'],
        ['A downtown office district', 'This is part of the CBD.'],
        ['A gated community', 'This is a planned residential community.'],
      ]),
      mc('Redlining contributed to', 'residential segregation and unequal access to loans in certain neighborhoods', 'It denied investment to areas based on race or ethnicity.', [
        ['more affordable housing for all groups', 'It restricted access to credit.'],
        ['the growth of agribusiness', 'It concerns urban housing finance.'],
        ['the creation of rings in von Thünen’s model', 'This is a separate model.'],
      ]),
      tf('A megacity is a city with more than 10 million people.', true, 'Correct. Many megacities are in Asia.', 'This is the common definition, so the statement is true.'),
    ],
  },
};
