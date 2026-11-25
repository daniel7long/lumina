import { mc, tf } from '../builder.js';

export default {
  summary: 'Since 1900, science, markets and communication have tied people together more tightly than ever, bringing both great gains and serious new problems.',
  modules: {
    17: {
      summary: 'Technology, population and the environment.',
      sessions: [{
        t: 'Science, population and climate',
        s: 'How innovation changed life and created new pressures.',
        md: `
## Technology
- **Agriculture:** the **Green Revolution** of the 1960s introduced high-yielding wheat and rice, fertilizers and irrigation. Scientists such as **Norman Borlaug** helped spread new varieties in Mexico, India and elsewhere. Food output rose, but the changes required costly inputs and affected the environment.
- **Medicine:** vaccines, antibiotics and public health campaigns reduced deaths. **Smallpox** was declared eradicated in **1980**. Epidemics still occurred, including the **1918 influenza** pandemic and **HIV/AIDS**.
- **Transportation and communication:** airplanes, containerized shipping, radio, television, computers and the **internet** connected people and markets in minutes.
- **Energy and weapons:** oil, electricity and nuclear power changed economies, while nuclear weapons changed warfare.

## Population
World population grew from about **1.6 billion in 1900** to more than **8 billion** by 2022. Better food and medicine lowered death rates, and cities grew rapidly, especially in Asia, Africa and Latin America.

## Environment
Burning fossil fuels has increased greenhouse gases and contributed to **climate change**. Other effects include deforestation, loss of species and pollution. International efforts include the **Kyoto Protocol (1997)** and the **Paris Agreement (2015)**.

### Historical thinking: continuity and change
Technology changed the pace of connection, but earlier patterns continued: networks of trade and migration also carried disease and ideas in earlier centuries.
`,
        q: [
          mc('What was a major goal of the Green Revolution?', 'To increase food production with high-yielding crop varieties, fertilizers and irrigation', 'It raised yields of wheat and rice in many countries.', [
            ['To spread the printing press', 'Printing is much older.'],
            ['To end nuclear weapons', 'It concerned agriculture.'],
            ['To build the Suez Canal', 'The canal opened in 1869.'],
          ]),
          mc('Which factor best explains rapid population growth in the twentieth century?', 'Lower death rates from better food supply and medicine', 'More people survived, especially infants.', [
            ['A sharp rise in plague deaths', 'Plague was not a major cause of change in this period.'],
            ['The end of agriculture', 'Agriculture expanded.'],
            ['A ban on urban growth', 'Cities grew rapidly.'],
          ]),
        ],
      }],
    },
    18: {
      summary: 'Global institutions, the world economy and culture.',
      sessions: [{
        t: 'Institutions, markets and cultural change',
        s: 'How the world became more connected, and who objected.',
        md: `
## International institutions
- **United Nations (1945):** a forum for peace and cooperation. The **Universal Declaration of Human Rights** (1948) set out basic rights.
- **Bretton Woods (1944):** created the **International Monetary Fund (IMF)** and the **World Bank**.
- **GATT**, later the **World Trade Organization (1995)**, promoted lower trade barriers.
- Regional groups such as the **European Union** (formed through the **Maastricht Treaty**, 1993) integrated economies and politics.

## The global economy
- After 1945, trade and investment grew rapidly. **Multinational corporations** operated in many countries.
- East Asian economies such as South Korea, Taiwan, Hong Kong and Singapore (the "Asian Tigers") grew by exporting manufactured goods. China, after the reforms of **Deng Xiaoping** began in **1978**, combined state control with markets and became a manufacturing center.
- Critics argued that globalization widened inequality, undermined local industries and workers' protections and harmed the environment.

## Culture
Popular culture, languages (especially English) and consumer goods spread widely through film, television and the internet. Migration brought diverse communities to many cities. Some people welcomed these changes, while others worried about loss of local traditions. Some movements, including religious and nationalist movements, resisted global influences, and some groups used violence, such as the attacks of **September 11, 2001**.

### Historical thinking: argumentation
A strong essay on globalization gives evidence on more than one side and explains why the evidence supports a claim.
`,
        q: [
          mc('Which institutions were created at Bretton Woods in 1944?', 'The International Monetary Fund and the World Bank', 'They were designed to stabilize currencies and finance development.', [
            ['NATO and the Warsaw Pact', 'These were military alliances.'],
            ['The VOC and the East India Company', 'These were early modern trading companies.'],
            ['The European Union and the World Trade Organization', 'Both were created later, in the 1990s.'],
          ]),
          mc('Which criticism of globalization is commonly made?', 'It can widen inequality and weaken local industries and workers’ protections', 'Critics point to job losses and uneven gains.', [
            ['It has isolated every country from the others', 'Globalization increased connections.'],
            ['It reduced the amount of international trade', 'Trade grew.'],
            ['It ended all migration', 'Migration increased.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 9 assessment · Globalization',
    tasks: [
      mc('Which disease was declared eradicated in 1980?', 'Smallpox', 'A worldwide vaccination campaign ended its spread.', [
        ['The bubonic plague', 'Plague still exists in small numbers.'],
        ['Influenza', 'Influenza remains common.'],
        ['HIV/AIDS', 'HIV/AIDS remains a global health issue.'],
      ]),
      mc('Which agreement of 2015 aimed to limit global warming?', 'The Paris Agreement', 'It sets commitments by many countries to reduce emissions.', [
        ['The Treaty of Nanjing', 'This was a nineteenth-century treaty.'],
        ['The Treaty of Versailles', 'This ended World War I.'],
        ['The Maastricht Treaty', 'This created the EU framework.'],
      ]),
      mc('Which change helped China become a manufacturing center after 1978?', 'Reforms under Deng Xiaoping that combined state control with market incentives', 'The reforms opened China to trade and investment.', [
        ['The Great Leap Forward', 'This occurred from 1958 to 1962 and caused a famine.'],
        ['The Meiji Restoration', 'This was in Japan in 1868.'],
        ['The Berlin Conference', 'It concerned Africa.'],
      ]),
      mc('Which organization replaced GATT in 1995 to promote and settle disputes over trade?', 'The World Trade Organization', 'It oversees trade rules and disputes.', [
        ['The United Nations', 'The UN has broader goals.'],
        ['NATO', 'NATO is a military alliance.'],
        ['The Warsaw Pact', 'This was a Soviet-led alliance that ended in 1991.'],
      ]),
      mc('Which statement best describes the Universal Declaration of Human Rights (1948)?', 'A UN statement of basic rights for all people', 'It is not a binding treaty, but it has been influential.', [
        ['A treaty that created the European Union', 'The EU developed separately.'],
        ['A military agreement between NATO members', 'It is a human rights document.'],
        ['A list of colonial borders in Africa', 'It does not concern borders.'],
      ]),
      mc('Which was a result of improved transportation and communication in the twentieth century?', 'Faster movement of goods, people and ideas across the world', 'Containers, airplanes and the internet connected markets.', [
        ['The end of international migration', 'Migration continued.'],
        ['A decline in global trade', 'Trade grew.'],
        ['The disappearance of regional cultures', 'Regional cultures persist, though they changed.'],
      ]),
      tf('Globalization has been experienced the same way by all groups of people.', false, 'Gains and costs have been distributed unevenly.', 'Correct. Different regions and groups have been affected differently.'),
    ],
  },
};
