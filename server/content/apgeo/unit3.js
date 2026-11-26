import { mc, tf } from '../builder.js';

export default {
  summary: 'Cultures are learned ways of life. They spread, blend and leave marks on the landscape.',
  modules: {
    5: {
      summary: 'Language, religion and ethnicity.',
      sessions: [{
        t: 'Language, religion and ethnicity',
        s: 'Where they come from and how they spread.',
        md: `
## Language
- A **language family** groups languages that share a common ancestor. **Indo-European** is the family spoken by the largest number of people in the world; others include Sino-Tibetan, Afro-Asiatic and Niger-Congo.
- A **lingua franca** is a language used between speakers of different languages for trade or government (English, Swahili and Arabic are examples).
- A **pidgin** is a simplified language that develops between groups with no common language. A **creole** develops from a pidgin when it becomes the first language of a community.
- A **toponym** is a place name, which often records history and the culture of earlier settlers.

## Religion
- **Universalizing religions** seek converts and are open to anyone: Christianity, Islam and Buddhism.
- **Ethnic religions** are tied to a particular ethnic group or place and generally do not seek converts: Hinduism and Judaism.
- **Sacred sites** and religious landscapes (churches, mosques, temples and cemeteries) shape places.
- Religions spread through **missionaries**, trade, conquest and migration.

## Ethnicity
**Ethnicity** is a shared identity based on ancestry, language, religion and customs. **Race** is a social construct and not a biological category. **Ethnic neighborhoods** and **enclaves** form when migrants cluster together.

## Language and religion in change
- **Language death:** many minority languages are disappearing.
- **Revival:** Hebrew was revived as a spoken language in the twentieth century, and Welsh has been supported by policy and schools.
`,
        q: [
          mc('Which pair is correctly matched?', 'Hinduism: an ethnic religion', 'Hinduism is closely tied to a people and place and does not actively seek converts.', [
            ['Islam: an ethnic religion', 'Islam is a universalizing religion.'],
            ['Buddhism: an ethnic religion', 'Buddhism is a universalizing religion.'],
            ['Christianity: an ethnic religion', 'Christianity is a universalizing religion.'],
          ]),
          mc('A language that develops from a pidgin and becomes the first language of a community is called', 'a creole', 'It is a fully developed language with its own grammar.', [
            ['a lingua franca', 'A lingua franca is a shared language for communication between groups.'],
            ['a toponym', 'A toponym is a place name.'],
            ['a language family', 'A language family is a group of related languages.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Cultural diffusion and landscapes.',
      sessions: [{
        t: 'How culture spreads and what it leaves behind',
        s: 'Types of diffusion and the cultural landscape.',
        md: `
## Types of diffusion
- **Relocation diffusion:** people carry an idea to a new place (migrants bring a language or religion).
- **Expansion diffusion:** the idea spreads outward while remaining strong at its source. It has three forms:
  - **Contagious:** spreads by direct contact, like a disease through a population.
  - **Hierarchical:** spreads from key people or places down to others (from large cities to small towns).
  - **Stimulus:** the underlying idea spreads, and it is changed to fit the new place.

## Culture and change
- **Acculturation:** adopting traits of another culture while keeping one's own identity.
- **Assimilation:** adopting the dominant culture so fully that one's original identity fades.
- **Syncretism:** blending of beliefs and practices into new forms.
- **Globalization:** worldwide spread of goods, ideas and culture. It can cause **cultural convergence**, but local cultures can also adapt and resist (**glocalization**).

## Cultural landscape
The **cultural landscape** is the visible imprint of human activity on the land: buildings, fields, road patterns, signs and place names. Geographers (such as **Carl Sauer**) read it to understand values and history. The **built environment** reflects local materials, climate and beliefs. The same place can contain **layers** from different periods.
`,
        q: [
          mc('A television show is popular first in a major city, then spreads to smaller towns. This is an example of', 'hierarchical diffusion', 'The idea moves down from larger places to smaller ones.', [
            ['relocation diffusion', 'Relocation diffusion occurs when people carry the idea to a new place.'],
            ['contagious diffusion', 'Contagious diffusion spreads by contact with nearby people regardless of rank.'],
            ['assimilation', 'Assimilation is adopting a dominant culture.'],
          ]),
          mc('Which statement best defines syncretism?', 'The blending of different beliefs or practices into a new form', 'It is a common result of cultural contact.', [
            ['The complete adoption of the dominant culture', 'This is assimilation.'],
            ['The spread of an idea from its hearth outward', 'This is expansion diffusion.'],
            ['The study of place names', 'This is toponymy.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Cultural Patterns and Processes',
    tasks: [
      mc('Which language family is spoken by the largest number of people worldwide?', 'Indo-European', 'It includes English, Spanish, Hindi and many others.', [
        ['Afro-Asiatic', 'This family is large, but speaker numbers are lower than Indo-European.'],
        ['Niger-Congo', 'This family has many languages, but fewer speakers.'],
        ['Austronesian', 'This family is widespread but has fewer speakers.'],
      ]),
      mc('English used by a Chinese and a Brazilian businessperson to talk to each other is an example of', 'a lingua franca', 'A shared language is used for communication between different language groups.', [
        ['a creole', 'A creole is a community’s first language that developed from a pidgin.'],
        ['a toponym', 'A toponym is a place name.'],
        ['a hearth', 'A hearth is a place of origin.'],
      ]),
      mc('Which is a universalizing religion?', 'Islam', 'It seeks converts and is open to all.', [
        ['Hinduism', 'Hinduism is generally treated as an ethnic religion.'],
        ['Judaism', 'Judaism is generally treated as an ethnic religion.'],
        ['Shinto', 'Shinto is an ethnic religion tied to Japan.'],
      ]),
      mc('Migrants bring their cuisine to a new country, where it becomes popular. This is best described as', 'relocation diffusion', 'People carried the practice to a new place.', [
        ['hierarchical diffusion', 'It did not spread through rank.'],
        ['stimulus diffusion', 'The practice was not changed to fit a new idea in this example.'],
        ['assimilation', 'Assimilation concerns adopting the dominant culture.'],
      ]),
      mc('A fast-food chain offers a vegetarian menu in India that differs from its menu elsewhere. This best illustrates', 'glocalization', 'A global product is adapted to local culture.', [
        ['language death', 'This concerns disappearing languages.'],
        ['a lingua franca', 'This is a language for communication between groups.'],
        ['chain migration', 'This concerns migrant movement.'],
      ]),
      mc('The cultural landscape is', 'the visible imprint of human activity on the land', 'It includes buildings, signs, fields and settlement patterns.', [
        ['the climate of a region', 'Climate is part of the physical environment.'],
        ['a map showing population density', 'That is a thematic map.'],
        ['a language family tree', 'That shows linguistic relationships.'],
      ]),
      tf('Race is a biological category that cleanly divides people into groups.', false, 'Race is a social construct and not a biological division.', 'Correct. Geographers treat race as a social construct.'),
    ],
  },
};
