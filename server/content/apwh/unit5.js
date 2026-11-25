import { mc, tf } from '../builder.js';

export default {
  summary: 'New ideas about rights and government, along with new feelings of national identity, set off revolutions across the Atlantic world and pushed old states to reform.',
  modules: {
    9: {
      summary: 'The Enlightenment and the Atlantic revolutions.',
      sessions: [{
        t: 'Enlightenment ideas and four revolutions',
        s: 'How new ideas became political change.',
        md: `
## The Enlightenment
Thinkers of the **Enlightenment** (seventeenth and eighteenth centuries) applied reason to politics and society.
- **John Locke:** people have natural rights to life, liberty and property, and governments rule by consent.
- **Montesquieu:** separate powers among branches of government.
- **Rousseau:** the "general will" and popular sovereignty.
- **Voltaire:** freedom of speech and religion.
- **Adam Smith** (*The Wealth of Nations*, 1776): markets guided by self-interest.

## Four revolutions
| Revolution | Dates | Key points |
| --- | --- | --- |
| American | 1775–1783 | Colonists resisted British taxation without representation and declared independence in 1776 |
| French | from 1789 | Rejected absolute monarchy and the privileges of the Church and nobility; the Declaration of the Rights of Man and of the Citizen (1789) |
| Haitian | 1791–1804 | Enslaved people rebelled in the French colony of Saint-Domingue; led first by Toussaint Louverture, independence was declared in 1804 and Haiti became the first state founded by formerly enslaved people |
| Latin American | c. 1808–1830s | Creole leaders such as Simón Bolívar and José de San Martín overthrew Spanish rule |

## Comparing outcomes
- The American Revolution created a republic, but slavery continued.
- The French Revolution led to the **Terror**, then to Napoleon's rule.
- The Haitian Revolution ended slavery and colonial rule, and Haiti faced isolation and a large indemnity demanded by France.
- In Latin America, **creoles** gained power, while many social divisions remained.

### Historical thinking: continuity and change
Revolutions often changed who held power while leaving many social hierarchies in place. Ask what changed and for whom.
`,
        q: [
          mc('Which Enlightenment thinker argued that governments rule by the consent of the governed and must protect natural rights?', 'John Locke', 'His ideas strongly influenced the American Declaration of Independence.', [
            ['Adam Smith', 'Smith wrote about economics and markets.'],
            ['Toussaint Louverture', 'He was a leader of the Haitian Revolution.'],
            ['Simón Bolívar', 'He was a leader of Latin American independence.'],
          ]),
          mc('What made the Haitian Revolution distinctive?', 'Enslaved people overthrew colonial rule and slavery and founded an independent state', 'It was the first state founded by formerly enslaved people.', [
            ['It was led by Spanish creoles seeking trade freedom', 'That describes some Latin American movements.'],
            ['It preserved slavery', 'The revolution ended slavery in Haiti.'],
            ['It began in 1848', 'The revolution began in 1791.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Nationalism and responses to imperial pressure.',
      sessions: [{
        t: 'Nationalism and reform',
        s: 'How states responded to new ideas and outside pressure.',
        md: `
## Nationalism
**Nationalism** is the belief that people who share language, culture or history should have their own state. It could **unify** (Italy, Germany) or **divide** multiethnic empires (the Ottoman and Austro-Hungarian).
- **Italy** was unified by 1861 under the leadership of Cavour and Garibaldi.
- **Germany** was unified in **1871** under Prussia and **Otto von Bismarck**, through wars rather than speeches.

## Responses to outside pressure
- **Ottoman Empire:** the **Tanzimat** reforms (1839–1876) modernized law, the army and education to strengthen the state.
- **Japan:** after American warships forced it to open to trade in the 1850s, samurai leaders overthrew the shogunate in the **Meiji Restoration (1868)**. They built a strong state with a modern army, industry, railroads and a constitution. By the early twentieth century Japan itself was an imperial power.
- **China:** the Qing faced defeat in the **Opium Wars** and the **Taiping Rebellion** (1850–1864), a huge civil war that cost millions of lives. Efforts at reform were slower and less successful than in Japan.

### Comparison
Both Japan and the Ottomans adopted Western techniques to strengthen their states. Japan's changes were more thorough and were driven by a new government. The Qing faced larger internal rebellions and a weaker central government.
`,
        q: [
          mc('Which event best illustrates nationalism as a unifying force?', 'The unification of Germany under Prussia in 1871', 'People who shared language and culture were joined in one state.', [
            ['The Taiping Rebellion', 'It was a civil war against the Qing.'],
            ['The Tanzimat', 'These were reforms within the Ottoman Empire.'],
            ['The Treaty of Tordesillas', 'It divided lands between Spain and Portugal in 1494.'],
          ]),
          mc('How did Meiji Japan respond to Western pressure?', 'It overthrew the shogunate and built a modern state, army and industry', 'This helped Japan resist colonization and become an imperial power.', [
            ['It closed itself even more tightly to foreign contact', 'The Meiji government actively adopted foreign techniques.'],
            ['It was divided into colonies by European powers', 'Japan avoided colonization.'],
            ['It restored the Mongol khans', 'The Mongols were not involved.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Revolutions',
    tasks: [
      mc('Which idea is most associated with Montesquieu?', 'Separating powers among branches of government', 'This idea shaped many constitutions.', [
        ['The general will', 'This is Rousseau’s idea.'],
        ['Free markets guided by self-interest', 'This is Adam Smith’s idea.'],
        ['Absolute rule by divine right', 'Enlightenment thinkers challenged this idea.'],
      ]),
      mc('The Declaration of the Rights of Man and of the Citizen (1789) was issued during the', 'French Revolution', 'It stated principles of liberty and equality before the law.', [
        ['American Revolution', 'The American document was the Declaration of Independence (1776).'],
        ['Haitian Revolution', 'The Haitian Revolution began in 1791.'],
        ['Meiji Restoration', 'The Meiji Restoration occurred in Japan in 1868.'],
      ]),
      mc('Which statement compares the American and Haitian revolutions accurately?', 'Both ended colonial rule, but only Haiti ended slavery as part of its revolution', 'Slavery continued in the United States after independence.', [
        ['Both abolished slavery immediately', 'The United States did not.'],
        ['Neither involved a break from a European power', 'Both broke from European powers.'],
        ['Only the American Revolution drew on Enlightenment ideas', 'Haitian revolutionaries also drew on ideas of liberty and rights.'],
      ]),
      mc('In Latin America, which group led most independence movements?', 'Creoles, who resented the privileges of peninsulares', 'Creole leaders sought political and economic power.', [
        ['Peninsulares', 'They held privileges under Spanish rule and generally supported it.'],
        ['The Spanish crown', 'The crown opposed independence.'],
        ['Mongol khans', 'The Mongols were not involved.'],
      ]),
      mc('The Tanzimat reforms were an attempt to', 'modernize and strengthen the Ottoman state', 'The reforms covered law, education and the army.', [
        ['abolish the Ottoman sultanate in 1839', 'The sultanate continued.'],
        ['create a Confucian civil service', 'This belongs to Chinese government.'],
        ['unify Italy', 'Italian unification occurred separately.'],
      ]),
      mc('Which factor best explains why Japan was more successful than Qing China in avoiding colonization?', 'A new government used the state to adopt industry and a modern army quickly', 'The Meiji leadership coordinated reform from the center.', [
        ['Japan had no contact with Western powers', 'Japan had contact and responded to it.'],
        ['China had already industrialized fully', 'China faced internal rebellion and slower reform.'],
        ['Western powers had no interest in Asia', 'They had a strong interest.'],
      ]),
      tf('Nationalism always strengthened multiethnic empires.', false, 'It often weakened them by encouraging separate national movements.', 'Correct. Nationalism unified some states but divided empires such as the Ottoman and Austro-Hungarian.'),
    ],
  },
};
