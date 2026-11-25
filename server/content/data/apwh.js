// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year world history topic sequence (c. 1200 to the present).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'The Global Tapestry, c. 1200–1450', modules: [
    mod(1, 'East Asia and the Islamic World', ['Describe how the Song dynasty’s economy, technology and Confucian state shaped East Asia.', 'Explain how the Abbasid caliphate and Dar al-Islam connected scholars, merchants and rulers.']),
    mod(2, 'States and Societies in Africa, the Americas and Europe', ['Compare how Mali, the Swahili city-states, the Aztec and Inca states and feudal Europe organized power and labor.', 'Explain how rulers used religion, trade and tribute to legitimize their rule.']),
  ] },
  { n: 2, title: 'Networks of Exchange, c. 1200–1450', modules: [
    mod(3, 'The Silk Roads and the Indian Ocean', ['Explain how technology and monsoon winds made long-distance trade possible.', 'Describe how trade spread religions, crops and ideas.']),
    mod(4, 'The Mongols, the Black Death and Cultural Diffusion', ['Explain the causes and effects of the Mongol conquests and the Pax Mongolica.', 'Analyze how the Black Death spread along trade routes and changed Afro-Eurasian societies.']),
  ] },
  { n: 3, title: 'Land-Based Empires, c. 1450–1750', modules: [
    mod(5, 'The Gunpowder Empires: Ottoman, Safavid and Mughal', ['Explain how gunpowder weapons and bureaucracies helped these empires expand.', 'Compare how the three empires governed diverse religious communities.']),
    mod(6, 'Ming and Qing China, Russia and Tokugawa Japan', ['Compare how rulers in China, Russia and Japan consolidated power.', 'Evaluate the effects of Zheng He’s voyages and of Japan’s restrictions on foreign contact.']),
  ] },
  { n: 4, title: 'Transoceanic Interconnections, c. 1450–1750', modules: [
    mod(7, 'Exploration and the Columbian Exchange', ['Explain why European states sponsored voyages of exploration and how new technology helped them.', 'Analyze the biological and economic effects of the Columbian Exchange.']),
    mod(8, 'Slavery, Mercantilism and Colonial Societies', ['Describe the Atlantic slave trade and its effects on Africa and the Americas.', 'Explain how mercantilism, joint-stock companies and the silver trade created a global economy.']),
  ] },
  { n: 5, title: 'Revolutions, c. 1750–1900', modules: [
    mod(9, 'Enlightenment and the Atlantic Revolutions', ['Explain how Enlightenment ideas challenged traditional authority.', 'Compare the American, French, Haitian and Latin American revolutions.']),
    mod(10, 'Nationalism and Responses to Imperial Pressure', ['Explain how nationalism unified and divided states.', 'Compare reform in the Ottoman Empire, Meiji Japan and Qing China.']),
  ] },
  { n: 6, title: 'Consequences of Industrialization, c. 1750–1900', modules: [
    mod(11, 'The Industrial Revolution and Its Social Effects', ['Explain why industrialization began in Britain and how it spread.', 'Describe how industrialization changed labor, cities, ideas and the end of slavery.']),
    mod(12, 'Imperialism and Migration', ['Explain the economic, political and cultural causes of the new imperialism.', 'Compare how Asian and African societies experienced and resisted imperial rule.']),
  ] },
  { n: 7, title: 'Global Conflict, c. 1900–Present', modules: [
    mod(13, 'World War I and the Interwar Years', ['Analyze the causes and consequences of World War I.', 'Explain how revolution, depression and authoritarian movements reshaped the 1920s and 1930s.']),
    mod(14, 'World War II and the Holocaust', ['Explain the causes of World War II and why it became total war.', 'Describe the Holocaust and the war’s effects on the postwar order.']),
  ] },
  { n: 8, title: 'Cold War and Decolonization, c. 1900–Present', modules: [
    mod(15, 'The Cold War', ['Compare the aims of the United States and the Soviet Union and describe proxy conflicts.', 'Explain the reasons for the end of the Cold War.']),
    mod(16, 'Decolonization and New Nations', ['Compare how independence was won in India, Ghana and Algeria.', 'Explain the challenges new states faced.']),
  ] },
  { n: 9, title: 'Globalization, c. 1900–Present', modules: [
    mod(17, 'Technology, Population and the Environment', ['Describe how new technology changed agriculture, medicine and communication.', 'Explain the causes and effects of population growth and climate change.']),
    mod(18, 'Global Institutions, Economy and Culture', ['Explain how international institutions and global markets changed the world after 1945.', 'Analyze how globalization has been both embraced and resisted.']),
  ] },
];
