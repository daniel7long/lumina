import { mc, tf } from '../builder.js';

export default {
  summary: 'Around 1200 the world was a set of regional powers linked by trade and belief. Meet the states of East Asia, the Islamic world, Africa, the Americas and Europe.',
  modules: {
    1: {
      summary: 'Song China and the Abbasid Islamic world.',
      sessions: [{
        t: 'Song China and Dar al-Islam',
        s: 'Two of the richest and most innovative societies of the period.',
        md: `
## Song China (960–1279)

The **Song dynasty** ruled a prosperous, urban society. Several changes drove its growth:

- **Agriculture:** fast-ripening **Champa rice**, brought from Vietnam, allowed two harvests a year in some regions and supported a larger population.
- **Technology:** printing (including movable type, developed by Bi Sheng around 1040), gunpowder weapons, the magnetic compass and improved shipbuilding.
- **Commerce:** paper money, large cities and a growing merchant class.
- **Government:** officials were chosen through **civil service examinations** based on Confucian texts. **Neo-Confucianism** combined Confucian ethics with ideas from Buddhism and Daoism.

Song China also saw hardening of patriarchal norms. **Foot binding** spread among elite families and later reached wider groups.

## Dar al-Islam and the Abbasid caliphate
**Dar al-Islam** ("the house of Islam") describes the lands where Islam shaped law and daily life. The **Abbasid caliphate** (750–1258) ruled from **Baghdad**, which became a center of learning. Scholars translated Greek, Persian and Indian works, and the **House of Wisdom** is often associated with this movement. Muslim scholars made advances in mathematics (algebra), medicine and astronomy.

Islam spread through conquest, trade and the work of Sufi missionaries. A shared faith, the Arabic language and the pilgrimage to Mecca (**hajj**) linked distant regions even when political unity was lost. In **1258** a Mongol army led by Hülegü sacked Baghdad and ended the Abbasid caliphate.

### Historical thinking: comparison
When comparing Song China and the Abbasids, look for both similarities (cities, trade, learning) and differences (a Confucian bureaucracy versus a religiously defined community).
`,
        q: [
          mc('Which development most directly helped the Song dynasty support a larger population?', 'Champa rice, which allowed more than one harvest in some regions', 'More food per acre supported urban growth and population increase.', [
            ['The invention of the printing press in Europe', 'This was a later European development and did not affect Song agriculture.'],
            ['The spread of Islam into East Asia', 'Islam did not become the Song state’s organizing belief.'],
            ['The conquest of Baghdad', 'Baghdad fell to the Mongols in 1258 and had no role in Song agriculture.'],
          ]),
          mc('Which statement best describes Dar al-Islam?', 'A broad region linked by Islam, Arabic and the hajj even without political unity', 'Shared faith and practice connected places ruled by different states.', [
            ['A single empire ruled by one caliph from Baghdad throughout the period', 'Political unity broke down; many regional states existed.'],
            ['A Confucian examination system', 'Examinations belong to Chinese bureaucracy, not to Dar al-Islam.'],
            ['A trade alliance of European cities', 'Dar al-Islam refers to the Islamic world, not to European merchants.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'States in Africa, the Americas and Europe.',
      sessions: [{
        t: 'Comparing states and societies',
        s: 'How rulers in different regions organized power, labor and belief.',
        md: `
## West and East Africa
- **Mali:** a rich West African empire built on the trans-Saharan gold and salt trade. Its ruler **Mansa Musa** made a famous pilgrimage to Mecca in **1324–1325**, spending so much gold that he drew attention across the Mediterranean world. **Timbuktu** became a center of Islamic learning.
- **Swahili city-states** (such as Kilwa and Mombasa) on the East African coast traded gold, ivory and enslaved people across the Indian Ocean. Their culture blended African and Muslim influences.
- **Great Zimbabwe** was an inland center whose stone buildings reflect wealth from the gold trade with the coast.

## The Americas
- The **Mexica (Aztec)** founded **Tenochtitlan** in 1325. Through a **Triple Alliance** they demanded **tribute** from conquered peoples. Farmers used **chinampas**, artificial garden plots in lakes.
- The **Inca** built a large empire from Cusco. They required labor service called the **mit’a**, built roads, kept records with **quipu** (knotted cords) and farmed steep slopes with terraces.

## Europe
Western European society was **feudal**: lords granted land to vassals in return for loyalty and military service, and peasants on **manors** often owed labor as **serfs**. The Catholic Church was a powerful institution, and rulers built centralized monarchies slowly.

### Legitimizing power
Rulers justified authority in different ways: Mansa Musa through Islam and wealth, Aztec rulers through religion and military success, Inca rulers through ties to the sun god, and European kings through the Church.
`,
        q: [
          mc('Which pair is correctly matched?', 'Inca: mit’a labor service', 'The Inca state required periodic labor from its subjects.', [
            ['Aztec: quipu records', 'Quipu were used by the Inca, not the Aztec.'],
            ['Mali: chinampas', 'Chinampas were Aztec agricultural plots.'],
            ['Feudal Europe: civil service examinations', 'Examinations were a feature of Chinese government.'],
          ]),
          mc('Mansa Musa’s pilgrimage to Mecca is best used as evidence of', 'Mali’s wealth from the trans-Saharan gold trade and its ties to the Islamic world', 'The size of his spending and the journey itself show both.', [
            ['Mali’s conquest of Mecca', 'He traveled as a pilgrim; Mali did not conquer Mecca.'],
            ['The decline of the gold trade', 'His wealth came from gold; the trade was strong.'],
            ['The adoption of Confucianism in West Africa', 'Confucianism was not a West African tradition.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · The Global Tapestry',
    tasks: [
      mc('Civil service examinations in Song China were based mainly on', 'Confucian texts', 'Officials were selected for knowledge of Confucian classics.', [
        ['Buddhist scriptures', 'Buddhism was influential, but the examinations tested Confucian learning.'],
        ['Mongol law codes', 'The Mongols conquered the Song later and had a different system.'],
        ['Military skill alone', 'The examination system favored scholars rather than soldiers.'],
      ]),
      mc('The Abbasid caliphate ended when', 'Mongol forces sacked Baghdad in 1258', 'Hülegü’s army captured the capital and ended the caliphate.', [
        ['The Song dynasty conquered Baghdad', 'The Song were far to the east and did not conquer Baghdad.'],
        ['Mansa Musa made his pilgrimage', 'This happened in the fourteenth century and did not end the caliphate.'],
        ['The Inca took Cusco', 'The Inca were in the Andes and unrelated to Baghdad.'],
      ]),
      mc('Which combination helped the Inca govern a large mountainous empire?', 'A road network, quipu record keeping and mit’a labor service', 'Roads moved officials and goods, quipu stored information and the mit’a supplied labor.', [
        ['Civil service examinations on Confucian texts', 'Examinations were a feature of Chinese government.'],
        ['Trans-Saharan trade in gold and salt', 'This trade supported Mali, not the Inca.'],
        ['Manors worked by serfs under feudal lords', 'This describes medieval Europe.'],
      ]),
      mc('Which feature did Swahili city-states share with the Abbasid world?', 'Participation in Indian Ocean trade and Islamic culture', 'Muslim merchants linked East Africa to the wider Islamic world.', [
        ['A Confucian bureaucracy', 'Confucianism belongs to East Asian states.'],
        ['Rule by a single emperor', 'Swahili city-states were independent and separate.'],
        ['Reliance on chinampa agriculture', 'Chinampas were an Aztec technique.'],
      ]),
      mc('Which statement about feudalism in Europe is accurate?', 'Land was exchanged for loyalty and service, and many peasants worked as serfs', 'These relationships shaped political and economic life.', [
        ['Power was concentrated in a large central bureaucracy', 'Feudal Europe was decentralized.'],
        ['Peasants owned most land outright', 'Most peasants worked land held by lords.'],
        ['The Church had little influence', 'The Catholic Church was a powerful institution.'],
      ]),
      tf('Song China’s economy included paper money and a growing merchant class.', true, 'Correct. Commercial growth and paper money were part of Song prosperity.', 'Both were real features of Song commerce, so the statement is true.'),
      tf('Dar al-Islam refers only to the territory of one unified empire.', false, 'Dar al-Islam was not a single political unit.', 'Correct. It refers to a broad region shaped by Islam that included many states.'),
    ],
  },
};
