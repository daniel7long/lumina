import { mc, tf } from '../builder.js';

export default {
  summary: 'Trade routes carried goods, religions, technologies and diseases across Afro-Eurasia, and the Mongols briefly united much of it under one system.',
  modules: {
    3: {
      summary: 'The Silk Roads and the Indian Ocean trade.',
      sessions: [{
        t: 'How trade networks worked',
        s: 'The technology, routes and effects of long-distance trade.',
        md: `
## Major networks
- **Silk Roads:** overland routes across Central Asia linking China, India, Persia and the Mediterranean. Goods included silk, porcelain, spices and horses.
- **Indian Ocean:** sea routes linking East Africa, Arabia, India, Southeast Asia and China, driven by the **monsoon winds**, which blow one way in summer and the other way in winter.
- **Trans-Saharan:** camel caravans carried gold and salt between West Africa and North Africa.

## Technology that made trade possible
- **Caravanserai:** roadside inns that gave merchants and animals shelter and safety.
- **Camel saddles** and the use of camels in deserts.
- **Lateen sail:** a triangular sail that helped ships sail against the wind.
- **Magnetic compass and astrolabe:** tools for finding direction and position at sea.
- **Chinese junks:** large ships with watertight compartments.
- **Credit and banking:** letters of credit and early banking houses reduced the risk of carrying coins.

## Effects
- **Religions spread.** Buddhism traveled from India to Central and East Asia. Islam reached Southeast Asia and East Africa mainly through merchants and Sufi teachers.
- **Cities grew** at trade hubs such as Samarkand, Malacca, Kilwa and Timbuktu.
- **Crops and technologies spread**, for example citrus, cotton and papermaking.
- **Diseases spread** as well, a point we return to in the next module.

### Historical thinking: causation
When explaining why trade grew, separate **causes** (monsoon knowledge, new ships, stable states) from **effects** (cultural exchange, new cities).
`,
        q: [
          mc('Why was knowledge of the monsoon winds important to Indian Ocean trade?', 'Predictable seasonal winds let ships sail out and return on a reliable schedule', 'The winds reverse with the seasons, so sailors could plan round trips.', [
            ['They allowed ships to cross the Atlantic', 'The monsoons are an Indian Ocean system.'],
            ['They made overland caravans unnecessary everywhere', 'Overland routes such as the Silk Roads and trans-Saharan routes continued.'],
            ['They replaced the need for navigational tools', 'Sailors still used tools such as the compass and astrolabe.'],
          ]),
          mc('A caravanserai was', 'a roadside inn that sheltered travelers and animals along trade routes', 'It made overland trade safer and more practical.', [
            ['a type of sail used on Indian Ocean ships', 'The lateen sail is the ship technology.'],
            ['a tax paid on Silk Road goods', 'It was a building, not a tax.'],
            ['a letter of credit used by merchants', 'Letters of credit were a financial tool.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'The Mongols, the Black Death and cultural diffusion.',
      sessions: [{
        t: 'The Mongol Empire and the Black Death',
        s: 'Conquest, connection and catastrophe.',
        md: `
## The Mongol Empire
In **1206** Temüjin was proclaimed **Chinggis (Genghis) Khan** of the Mongols. Mongol armies used skilled mounted archers, disciplined organization and adopted siege technology from conquered peoples. They conquered much of Eurasia, then divided into several khanates:

- the **Yuan dynasty** in China, founded by **Khubilai Khan** (he proclaimed it in 1271 and completed the conquest of the Song in 1279);
- the **Il-Khanate** in Persia;
- the **Golden Horde** over Russian lands.

The conquests brought great destruction, including the sack of Baghdad in 1258. But the Mongols also protected trade, which historians call the **Pax Mongolica** ("Mongol peace"). Travelers such as **Marco Polo** and **Ibn Battuta** wrote accounts of their journeys. Mongol rulers often practiced religious toleration and later many converted to Islam or Buddhism.

## The Black Death
The **bubonic plague** spread across Asia and reached the Mediterranean and Europe around **1347**, probably carried by fleas on rats and along trade routes including Mongol-protected ones. It killed a large share of the population, perhaps a third or more in parts of Europe.

Effects in Europe included:
- a **labor shortage** that raised wages and weakened serfdom in many places;
- attacks on minority groups blamed for the disease;
- questions about the authority of the Church.

The plague also hit the Middle East and Asia, and the Yuan dynasty fell in 1368 as the Ming dynasty took power.

### Historical thinking: continuity and change
The Mongols **changed** the political map but also **continued** earlier trade patterns by protecting existing routes.
`,
        q: [
          mc('Which term describes the period of Mongol-protected trade and travel across Eurasia?', 'Pax Mongolica', 'The Mongols secured routes, which helped trade and travel.', [
            ['Pax Romana', 'This refers to Roman peace in the ancient Mediterranean.'],
            ['Columbian Exchange', 'This refers to exchanges after 1492 between the Americas and the Old World.'],
            ['Tanzimat', 'This refers to Ottoman reforms in the nineteenth century.'],
          ]),
          mc('A common effect of the Black Death in Western Europe was', 'a labor shortage that raised wages and weakened serfdom', 'Fewer workers meant peasants could demand better terms.', [
            ['a sharp rise in population within a few years', 'The plague caused a large population decline.'],
            ['the immediate unification of Europe under one ruler', 'No such unification occurred.'],
            ['the end of long-distance trade', 'Trade continued, although it was disrupted.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Networks of Exchange',
    tasks: [
      mc('Which technology helped sailors travel against the wind?', 'The lateen sail', 'Its triangular shape let ships sail at an angle to the wind.', [
        ['The caravanserai', 'A caravanserai was a roadside inn, not a ship technology.'],
        ['The quipu', 'A quipu was a knotted record used by the Inca.'],
        ['The chinampa', 'A chinampa was an Aztec garden plot.'],
      ]),
      mc('How did Islam spread to Southeast Asia?', 'Largely through merchants and Sufi teachers along Indian Ocean routes', 'Trade contacts brought both goods and religious ideas.', [
        ['Mainly through conquest by the Abbasid armies', 'Conversion in Southeast Asia was mostly gradual and tied to trade.'],
        ['Through forced conversion by the Mongol khans', 'The Mongols did not spread Islam to Southeast Asia in this way.'],
        ['Through the Atlantic slave trade', 'This occurred later and in a different region.'],
      ]),
      mc('Which of these was an effect of the Mongol conquests?', 'Greater contact between East and West along protected routes', 'The Pax Mongolica made long-distance travel safer.', [
        ['The end of trade across Central Asia', 'Trade increased under Mongol protection.'],
        ['The creation of the Aztec Empire', 'The Aztec Empire was in the Americas and not a Mongol result.'],
        ['The spread of printing to the Americas', 'The Americas were not connected to these routes at this time.'],
      ]),
      mc('Khubilai Khan is associated with the founding of', 'the Yuan dynasty in China', 'He proclaimed the Yuan dynasty in 1271.', [
        ['the Golden Horde', 'The Golden Horde was founded by a different branch of the family.'],
        ['the Ottoman Empire', 'The Ottomans were a separate and later power.'],
        ['the Mali Empire', 'Mali was in West Africa.'],
      ]),
      mc('Which sentence best explains why the Black Death moved so quickly across Eurasia?', 'Trade routes carried infected people, animals and goods', 'Connected networks also connected disease.', [
        ['Plague bacteria were carried by the monsoon winds alone', 'The disease spread through contact, fleas and people, not just wind.'],
        ['The disease was introduced from the Americas', 'The Columbian Exchange began later.'],
        ['It spread only in cities with no trade', 'Trade centers were hit hard.'],
      ]),
      tf('The Mongols were interested only in destruction and did not support trade.', false, 'The Mongols protected trade routes and encouraged commerce.', 'Correct. Although their conquests were destructive, the Pax Mongolica promoted trade.'),
      tf('Ibn Battuta and Marco Polo left accounts of their travels across Afro-Eurasia.', true, 'Correct. Their writings are important sources, though each reflects the traveler’s point of view.', 'Both left accounts, so this statement is true.'),
    ],
  },
};
