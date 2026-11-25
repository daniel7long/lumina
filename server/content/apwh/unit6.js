import { mc, tf } from '../builder.js';

export default {
  summary: 'Factories, coal and steam transformed work and cities, and industrial powers used their wealth and weapons to take control of much of Asia and Africa.',
  modules: {
    11: {
      summary: 'The Industrial Revolution and its social effects.',
      sessions: [{
        t: 'Why Britain, and what changed',
        s: 'Causes of industrialization and its effects on workers, cities and ideas.',
        md: `
## Why Britain first?
Industrialization began in Britain in the second half of the eighteenth century. Common explanations include:
- plentiful **coal** and **iron ore**;
- capital from trade and colonies and a developed banking system;
- a growing population and a supply of workers displaced from farms by enclosure;
- an enlightened culture of invention and political stability;
- global markets for textiles, supplied with cotton produced in part by enslaved labor in the Americas.

Key inventions included the **spinning jenny**, the **water frame**, **James Watt's improved steam engine**, railroads and steamships. Industrialization spread to Belgium, the United States, Germany and later Japan and Russia.

## Social effects
- **The factory system** replaced much home production. Work followed the clock, and conditions were often harsh, including child labor.
- **Urbanization:** cities grew rapidly, often with crowded housing and poor sanitation.
- **New classes:** an industrial middle class and a working class.
- **Gender roles:** many women and children worked in textile mills. Over time, ideas of separate spheres for men and women also spread.

## Responses and ideas
- **Capitalism:** private ownership and markets, defended by Adam Smith and others.
- **Socialism and communism:** **Karl Marx and Friedrich Engels** published *The Communist Manifesto* (1848), arguing that workers would overthrow the owners.
- **Reforms and unions:** laws limited child labor and working hours, and workers organized labor unions.
- **Abolition:** Britain banned the slave trade in 1807 and slavery in most of its empire by the 1830s. Other emancipations followed: Russia freed its serfs in 1861, the United States ended slavery in 1865 and Brazil in 1888.

### Historical thinking: causation
Industrialization had several causes at once. A strong answer ranks them or explains how they combined, rather than listing them.
`,
        q: [
          mc('Which combination of factors helped Britain industrialize first?', 'Coal and iron resources, capital, and expanding markets', 'These conditions supported factories and transport.', [
            ['A lack of coal and a small population', 'Britain had coal and a growing population.'],
            ['Complete isolation from world trade', 'Britain relied heavily on trade.'],
            ['A state-run communist economy', 'Communism developed as a response to industrialization.'],
          ]),
          mc('The Communist Manifesto (1848) argued that', 'class conflict between owners and workers would lead workers to overthrow the owners', 'Marx and Engels described history as shaped by class struggle.', [
            ['free markets would solve all social problems', 'This is closer to Adam Smith’s defenders.'],
            ['industrial workers should obey factory owners', 'It called for workers to challenge the owners.'],
            ['industrialization should be stopped', 'It accepted industrialization as a stage in history.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Imperialism and migration.',
      sessions: [{
        t: 'The new imperialism',
        s: 'Why industrial powers took colonies, and how people responded.',
        md: `
## Causes
- **Economic:** raw materials and markets for factory goods.
- **Political:** national prestige and strategic bases for the navy.
- **Cultural:** ideas of racial and cultural superiority, including a belief that Europeans had a "civilizing mission," and Social Darwinism.
- **Technology:** steamships, railroads, telegraphs, the **Maxim gun** and **quinine**, which prevented malaria, let Europeans move inland.

## Examples
- **India:** after the **Rebellion of 1857** (the Sepoy Rebellion), the British government replaced the East India Company's rule with direct crown rule (the **Raj**).
- **China:** Britain fought the **Opium Wars** (1839–1842, 1856–1860) to force China to buy opium. The **Treaty of Nanjing** (1842) ceded Hong Kong and opened ports.
- **Africa:** at the **Berlin Conference (1884–1885)** European powers set rules for dividing Africa, without African participation. By 1914 almost all the continent was colonized except **Ethiopia** and **Liberia**. Borders often ignored existing ethnic and political boundaries.
- **Suez Canal (1869)** shortened the sea route between Europe and Asia.

## Migration
Millions moved voluntarily and under pressure. After the end of slavery, plantations used **indentured laborers** from India and China. Many Europeans migrated to the Americas, Australia and southern Africa, and many Asians migrated to Southeast Asia and the Americas.

## Resistance
Resistance took many forms: armed uprisings (the 1857 rebellion), religious movements, resistance by rulers such as Ethiopia's defeat of Italy at **Adwa (1896)**, and the growth of nationalist movements that later demanded independence.
`,
        q: [
          mc('What was the main purpose of the Berlin Conference of 1884–1885?', 'To set rules for European claims in Africa without African participation', 'European powers organized the partition of Africa among themselves.', [
            ['To end the Atlantic slave trade', 'Britain had banned the trade decades earlier.'],
            ['To create an African federation', 'Africans were not represented.'],
            ['To divide Asia between Japan and Britain', 'The conference concerned Africa.'],
          ]),
          mc('What did the Treaty of Nanjing (1842) do?', 'It ended the first Opium War, ceding Hong Kong to Britain and opening ports', 'It was an unequal treaty imposed after Qing defeat.', [
            ['It ended the Taiping Rebellion', 'The Taiping Rebellion began in 1850.'],
            ['It unified Germany', 'German unification occurred in 1871.'],
            ['It gave China control over India', 'It favored Britain.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Consequences of Industrialization',
    tasks: [
      mc('Which invention is associated with James Watt?', 'An improved steam engine', 'Watt’s engine made steam power more efficient.', [
        ['The caravel', 'The caravel was a ship used in European voyages.'],
        ['The printing press', 'Printing predates the Industrial Revolution.'],
        ['The telegraph', 'The telegraph was developed in the nineteenth century by others.'],
      ]),
      mc('Which was a social effect of the factory system?', 'Rapid urban growth and the rise of an industrial working class', 'People moved to cities for factory work.', [
        ['A decline in the need for coal', 'Coal demand rose.'],
        ['The end of child labor everywhere by 1800', 'Child labor was common in early factories.'],
        ['A return to home production', 'Factories replaced much home production.'],
      ]),
      mc('Which technology most directly helped Europeans move inland in Africa in the nineteenth century?', 'Quinine, steamships and the Maxim gun', 'They reduced disease risk, enabled river travel and gave a military edge.', [
        ['The lateen sail', 'It was a medieval ship technology.'],
        ['Movable type', 'Printing did not help penetration of the interior.'],
        ['Chinampas', 'These were Aztec garden plots.'],
      ]),
      mc('After the Rebellion of 1857, India was', 'ruled directly by the British crown', 'The East India Company’s role ended.', [
        ['declared independent', 'Independence came in 1947.'],
        ['ruled by the Mughal emperor again', 'The last Mughal emperor was removed.'],
        ['divided at the Berlin Conference', 'The conference concerned Africa.'],
      ]),
      mc('Which two African states were not colonized by 1914?', 'Ethiopia and Liberia', 'Ethiopia defeated Italy at Adwa in 1896, and Liberia was settled by formerly enslaved Americans.', [
        ['Egypt and Algeria', 'Both were under European control or influence.'],
        ['Nigeria and Kenya', 'Both were British colonies.'],
        ['Congo and Angola', 'The Congo was a Belgian colony and Angola a Portuguese one.'],
      ]),
      mc('Indentured laborers in the nineteenth century were', 'workers who signed contracts, often under harsh terms, to work for a set period', 'Many came from India and China after slavery ended.', [
        ['hereditary slaves', 'Indentured labor was contractual and time-limited.'],
        ['the janissaries', 'These were Ottoman soldiers.'],
        ['members of the Mongol army', 'The Mongols belong to an earlier period.'],
      ]),
      tf('Industrialization spread only within Britain and never to other countries.', false, 'It spread to Belgium, the United States, Germany, Japan and others.', 'Correct. Many states industrialized in the nineteenth century.'),
    ],
  },
};
