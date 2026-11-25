import { mc, tf } from '../builder.js';

export default {
  summary: 'After 1450, European voyages linked the Eastern and Western Hemispheres for the first time, creating a global economy built on silver, sugar and enslaved labor.',
  modules: {
    7: {
      summary: 'Why Europeans sailed and what the Columbian Exchange changed.',
      sessions: [{
        t: 'Exploration and the Columbian Exchange',
        s: 'Motives, methods and the biological consequences of contact.',
        md: `
## Why exploration?
- **Economic motives:** European states wanted direct access to Asian spices and silks without paying Italian and Muslim middlemen.
- **Political motives:** rulers competed for prestige and wealth. Portugal and Spain had strong, centralized monarchies.
- **Religious motives:** many Europeans wished to spread Christianity.
- **Technology:** the **caravel**, improved navigation tools (compass, astrolabe) and better maps. Gunpowder weapons gave Europeans an advantage in coastal conflicts.

## Key voyages
- **Prince Henry of Portugal** sponsored exploration of the African coast.
- **Vasco da Gama** reached India in **1498** by sailing around Africa.
- **Christopher Columbus**, sailing for Spain, reached the Caribbean in **1492**.
- The **Treaty of Tordesillas (1494)** divided newly claimed lands between Spain and Portugal.
- The expedition begun by **Magellan** completed the first circumnavigation in **1519–1522**.

## Conquest
Spanish forces led by **Hernán Cortés** defeated the Aztec capital in **1521**, and **Francisco Pizarro** conquered the Inca in the 1530s. They won with allies from local rivals of those empires, steel and guns, and, most of all, **epidemic disease**.

## The Columbian Exchange
The **Columbian Exchange** was the transfer of plants, animals, diseases and people between the hemispheres.
- **To the Americas:** horses, cattle, pigs, wheat, sugar cane, and diseases such as **smallpox** and measles. Indigenous populations had no immunity, and their numbers fell drastically.
- **From the Americas:** maize, potatoes, tomatoes, cacao and tobacco. Potatoes and maize supported population growth in Europe, Africa and China.

### Historical thinking: causation
Disease did not act alone. Warfare, forced labor and displacement also contributed to the decline of Indigenous populations.
`,
        q: [
          mc('Which item moved from the Americas to the Old World in the Columbian Exchange?', 'Potatoes', 'Potatoes became an important food crop in Europe and elsewhere.', [
            ['Horses', 'Horses were brought to the Americas by Europeans.'],
            ['Smallpox', 'Smallpox was carried from the Old World to the Americas.'],
            ['Wheat', 'Wheat came from the Old World.'],
          ]),
          mc('Which factor was most responsible for the rapid decline of Indigenous populations after contact?', 'Epidemic diseases to which they had little immunity', 'Smallpox and other diseases killed large numbers of people.', [
            ['Their lack of agriculture', 'Many Indigenous peoples had advanced agriculture.'],
            ['A treaty that forbade them to marry', 'No such treaty existed.'],
            ['The introduction of potatoes', 'Potatoes came from the Americas.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'The Atlantic slave trade, mercantilism and colonial societies.',
      sessions: [{
        t: 'Slavery, silver and the first global economy',
        s: 'How labor, trade policy and colonial rule fit together.',
        md: `
## Mercantilism and joint-stock companies
**Mercantilism** was the idea that a state grows strong by exporting more than it imports and by holding gold and silver. States set up **colonies** to supply raw materials and buy manufactured goods. **Joint-stock companies**, such as the Dutch **VOC (1602)** and the English East India Company, let investors share the risk and the profit of overseas ventures.

## Silver and global trade
Huge silver mines at **Potosí** (in present-day Bolivia) and in Mexico produced silver that moved to Europe and, through the Spanish port of Manila, to China. **Manila galleons** linked the Americas and Asia across the Pacific. China demanded silver as payment for its goods, so silver flowed there.

## Colonial labor and society
Spanish authorities granted **encomiendas**, which gave colonists the right to the labor of Indigenous people. Later, haciendas and mines used forced labor. Colonial society in Spanish America was ranked by origin: **peninsulares** (born in Spain), **creoles** (born in the Americas to Spanish parents), people of mixed ancestry (often called **mestizos**) and Indigenous and African peoples.

## The Atlantic slave trade
Plantations growing **sugar** and later tobacco, cotton and coffee needed large numbers of workers. European traders, working with African partners and rulers, forced more than **12 million** Africans onto ships. Many died on the **Middle Passage** across the Atlantic. Slavery in the Americas was **chattel slavery**, in which people were treated as property and slavery was inherited. The trade drew people from West and Central Africa, strengthened some African states that sold captives, and damaged others.

### Historical thinking: point of view
Documents about the slave trade differ by author. A trader’s ledger, a ship captain’s log and a formerly enslaved person’s narrative, such as that of **Olaudah Equiano**, offer different perspectives on the same events.
`,
        q: [
          mc('Which statement best describes mercantilism?', 'A state grows strong by exporting more than it imports and by using colonies as sources of wealth', 'Colonies supplied raw materials and markets.', [
            ['Governments should never interfere in trade', 'That is closer to later free-trade ideas.'],
            ['Colonies should be free to trade with any country', 'Mercantilism restricted colonial trade to the mother country.'],
            ['Wealth comes mainly from farming alone', 'Mercantilists focused on trade balance and precious metals.'],
          ]),
          mc('Why did silver flow from the Americas to China?', 'China demanded silver as payment for its goods', 'European and Spanish traders bought Chinese goods with silver.', [
            ['China had no markets for its goods', 'China’s goods were in high demand.'],
            ['China banned all foreign payments', 'China accepted silver in large amounts.'],
            ['Silver was mined in China and shipped to Potosí', 'Potosí was a mining center in the Americas.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Transoceanic Interconnections',
    tasks: [
      mc('The Treaty of Tordesillas (1494) was an agreement between', 'Spain and Portugal over claims to newly encountered lands', 'The two states divided the non-Christian world between them.', [
        ['England and the Netherlands over trade in Asia', 'It involved Spain and Portugal.'],
        ['The Ottomans and Safavids over Iraq', 'These powers were not part of the treaty.'],
        ['Spain and the Aztecs over tribute', 'The Aztecs were not a party.'],
      ]),
      mc('Which voyage reached India by sailing around Africa?', 'Vasco da Gama’s, in 1498', 'He opened a direct sea route from Europe to India.', [
        ['Columbus’s, in 1492', 'Columbus reached the Caribbean.'],
        ['Zheng He’s, in 1405', 'Zheng He sailed from China.'],
        ['Magellan’s, in 1519', 'Magellan’s expedition sailed west around South America, not around Africa to India.'],
      ]),
      mc('Which factor most helped Cortés defeat the Aztec capital?', 'Indigenous allies who opposed the Aztecs and epidemic disease', 'Local rivals and smallpox weakened Aztec resistance.', [
        ['A much larger Spanish army than the Aztec army', 'The Spanish force was small compared with the Aztec population.'],
        ['A treaty signed with Portugal', 'Tordesillas did not decide the conquest.'],
        ['Chinese silver', 'Silver trade did not play this role.'],
      ]),
      mc('The VOC (Dutch East India Company) is an example of', 'a joint-stock company', 'Investors shared the risks and profits.', [
        ['a feudal manor', 'A manor was a landed estate.'],
        ['a religious order', 'The VOC was a commercial enterprise.'],
        ['a caravanserai', 'A caravanserai was a roadside inn.'],
      ]),
      mc('Which group in Spanish colonial society was born in Spain and held the highest positions?', 'Peninsulares', 'They were at the top of the colonial social ranking.', [
        ['Creoles', 'Creoles were born in the Americas.'],
        ['Mestizos', 'Mestizos were people of mixed ancestry.'],
        ['Janissaries', 'Janissaries were Ottoman soldiers.'],
      ]),
      mc('What distinguishes chattel slavery in the Americas?', 'People were treated as property, and enslaved status passed to their children', 'It was hereditary and based on race in many colonies.', [
        ['It lasted only a fixed number of years', 'That describes indentured servitude.'],
        ['It was open only to prisoners of war', 'Enslaved people included many who were not prisoners of war.'],
        ['It was voluntary', 'Enslaved people were forced.'],
      ]),
      tf('The Columbian Exchange affected only the Americas.', false, 'It also changed diets, populations and economies in Europe, Africa and Asia.', 'Correct. Crops such as maize and potatoes changed food supplies in the Old World too.'),
    ],
  },
};
