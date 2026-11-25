import { mc, tf } from '../builder.js';

export default {
  summary: 'Three Muslim-ruled empires, the Ming and Qing, Russia and Tokugawa Japan built strong states after 1450 using new weapons, bureaucracies and religion.',
  modules: {
    5: {
      summary: 'The Ottoman, Safavid and Mughal empires.',
      sessions: [{
        t: 'The gunpowder empires',
        s: 'How three empires grew and governed diverse peoples.',
        md: `
## Gunpowder and state power
Cannons and muskets made it easier for large states to defeat rivals and break walled cities. Rulers who could afford them and organize armies and taxes grew strong. Historians call the Ottoman, Safavid and Mughal states **gunpowder empires**.

## The Ottoman Empire
- **Mehmed II** captured **Constantinople in 1453** using large cannons, ending the Byzantine Empire.
- The **devshirme** system took Christian boys from conquered Balkan lands, trained them and enrolled them as soldiers (**janissaries**) or officials loyal to the sultan.
- The **millet system** let religious communities such as Orthodox Christians and Jews govern some internal affairs, in return for paying taxes.
- **Suleiman** (ruled 1520–1566) expanded the empire and codified law.

## The Safavid Empire
**Shah Ismail** founded the empire in 1501 and made **Shia Islam** the state religion, which set Iran apart from its Sunni neighbors and led to conflict with the Ottomans. **Shah Abbas** later built the capital at **Isfahan**.

## The Mughal Empire
**Babur** founded the empire in India in **1526**. **Akbar** (ruled 1556–1605) pursued religious toleration, ended the tax on non-Muslims (the **jizya**) and recruited Hindu officials, including Rajput leaders. His successor **Aurangzeb** reimposed the jizya and expanded the empire, but religious tensions grew.

### Historical thinking: comparison
All three empires used religion to build loyalty, but their policies varied: the Ottomans used the millet system, the Safavids promoted a single state religion and Akbar sought broad inclusion.
`,
        q: [
          mc('Which system allowed religious minorities in the Ottoman Empire to govern some of their own affairs?', 'The millet system', 'Communities paid taxes and managed internal matters such as courts and schools.', [
            ['The mit’a system', 'The mit’a was an Inca labor system.'],
            ['The manorial system', 'Manorialism was a feature of feudal Europe.'],
            ['The encomienda system', 'The encomienda was a Spanish colonial labor system.'],
          ]),
          mc('Which ruler is best known for religious toleration in the Mughal Empire?', 'Akbar', 'He ended the jizya and brought Hindus into government.', [
            ['Aurangzeb', 'Aurangzeb is associated with reimposing the jizya.'],
            ['Shah Ismail', 'Ismail made Shia Islam the state religion of Safavid Iran.'],
            ['Mehmed II', 'Mehmed II conquered Constantinople.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Ming and Qing China, Russia and Tokugawa Japan.',
      sessions: [{
        t: 'Consolidating power in East Asia and Russia',
        s: 'Different paths to strong central states.',
        md: `
## Ming and Qing China
- The **Ming dynasty** (1368–1644) drove out the Mongols, restored the civil service examinations and rebuilt the Grand Canal and the Great Wall.
- Between **1405 and 1433** the admiral **Zheng He** led large fleets to Southeast Asia, India, Arabia and East Africa. The voyages showed Ming power and collected tribute, but the court later stopped them.
- The **Qing dynasty** (1644–1912) was founded by the **Manchus**, who came from the northeast. They kept Chinese institutions but required men to wear the queue hairstyle, and expanded the empire into Central Asia. Trade with Europeans was limited to certain ports.

## Russia
Moscow grew from a small principality into a large state under rulers such as **Ivan IV**, who took the title **tsar**. **Peter the Great** (ruled 1682–1725) modernized the army and administration along Western European lines and founded **St. Petersburg** in 1703. Russia expanded across Siberia, driven in part by the fur trade.

## Tokugawa Japan
After a long period of civil war, the **Tokugawa shogunate** (1603–1868) unified Japan under the shogun at Edo. It controlled daimyo (regional lords) by requiring them to spend time in Edo. In the 1630s it limited foreign contact (**sakoku**), allowing only restricted trade with the Dutch and Chinese at Nagasaki, partly to limit the influence of Christianity and foreign powers. Japan's economy and cities grew during this period of peace.

### Comparing
Each ruler faced the same problem: how to hold a large territory together. The Qing used both Manchu identity and Chinese institutions, Peter used Western models, and the Tokugawa used a system of controlled loyalty.
`,
        q: [
          mc('Which statement best describes Tokugawa Japan’s policy toward foreigners after the 1630s?', 'It tightly restricted contact, allowing limited trade at Nagasaki', 'The policy limited foreign influence while allowing some trade.', [
            ['It opened all ports to European trade and missionaries', 'The shogunate restricted missionaries and trade.'],
            ['It sent large fleets to East Africa', 'Zheng He’s fleets were Chinese and earlier.'],
            ['It signed treaties giving foreigners special legal rights', 'Such treaties came in the nineteenth century.'],
          ]),
          mc('Peter the Great is best known for', 'modernizing Russia along Western European lines and founding St. Petersburg', 'He reformed the army and administration and built a new capital.', [
            ['founding the Qing dynasty', 'The Qing was a Manchu dynasty in China.'],
            ['capturing Constantinople', 'Mehmed II captured Constantinople in 1453.'],
            ['closing Russia to all outside ideas', 'Peter actively borrowed Western techniques.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Land-Based Empires',
    tasks: [
      mc('Which event in 1453 marked the end of the Byzantine Empire?', 'The Ottoman capture of Constantinople', 'Mehmed II’s forces took the city using cannons.', [
        ['The Mongol sack of Baghdad', 'This occurred in 1258 and involved the Abbasids.'],
        ['The founding of the Safavid Empire', 'This occurred in 1501.'],
        ['The first voyage of Zheng He', 'This occurred in 1405.'],
      ]),
      mc('The janissaries were', 'soldiers drawn through the devshirme and loyal to the Ottoman sultan', 'They formed an elite infantry force.', [
        ['Safavid religious leaders', 'The janissaries were military, not clerical.'],
        ['Mughal tax collectors', 'They were Ottoman soldiers.'],
        ['Japanese daimyo', 'Daimyo were regional lords in Japan.'],
      ]),
      mc('A major difference between the Safavids and the Ottomans was that the Safavids', 'made Shia Islam the state religion while the Ottomans were Sunni', 'This religious difference added to political rivalry.', [
        ['adopted Christianity', 'The Safavids were Muslim.'],
        ['ruled from Constantinople', 'Safavid capitals included Tabriz and Isfahan.'],
        ['used no gunpowder weapons', 'They used gunpowder weapons, like the Ottomans.'],
      ]),
      mc('Zheng He’s voyages are best interpreted as', 'a display of Ming power that ended when the court changed its priorities', 'The fleets demonstrated Ming wealth and collected tribute, but were halted in 1433.', [
        ['the first European contact with East Africa', 'These were Chinese voyages.'],
        ['a Mongol military campaign', 'The Mongols had been driven out by the Ming.'],
        ['the start of Qing rule', 'The Qing came to power in 1644.'],
      ]),
      mc('Which ruler required regional lords to spend time at the capital to ensure loyalty?', 'The Tokugawa shogun, who required daimyo to spend time in Edo', 'This weakened the lords’ independence and expressed shogunal control.', [
        ['Peter the Great, who required nobles to live in Moscow', 'Peter founded and moved the capital to St. Petersburg.'],
        ['Akbar, who required Rajputs to move to Delhi', 'Akbar built alliances with Rajput leaders rather than using this system.'],
        ['Suleiman, who required janissaries to live in Baghdad', 'The Ottoman capital was Istanbul, and this was not Suleiman’s policy.'],
      ]),
      tf('Akbar’s policies show that all Mughal rulers treated religious groups in the same way.', false, 'Akbar’s toleration contrasts with Aurangzeb’s reimposition of the jizya.', 'Correct. Mughal religious policy changed across reigns.'),
      tf('The Qing dynasty was founded by the Manchus.', true, 'Correct. The Manchus came from the northeast and took Beijing in 1644.', 'The Manchus did found the Qing, so this is true.'),
    ],
  },
};
