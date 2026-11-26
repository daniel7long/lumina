import { mc, tf } from '../builder.js';

export default {
  summary: 'Why are some places wealthier than others, and where do factories locate? Study industrial location, the global economy and the measures and theories of development.',
  modules: {
    13: {
      summary: 'Industrialization and location.',
      sessions: [{
        t: 'Where industry locates and how it changes',
        s: 'Weber’s model, changing production and global economic zones.',
        md: `
## Economic sectors
- **Primary:** extracting raw materials (farming, mining).
- **Secondary:** manufacturing.
- **Tertiary:** services.
- **Quaternary and quinary:** information and high-level decision-making.

## The Industrial Revolution
Began in Britain in the eighteenth century, with coal, steam power and factories. It spread to Europe, North America and Japan.

## Weber's least-cost theory
**Alfred Weber** proposed that a factory locates where transport and labor costs are lowest. The **material index** compares the weight of inputs with the weight of the product.
- If the material index is **greater than 1** (the process loses weight, such as processing ore), locate **near the raw materials**.
- If it is **less than 1** (the product is heavier or more fragile, such as bottled drinks that add water), locate **near the market**.
- **Agglomeration** (clustering of related firms) lowers costs through shared suppliers and workers.

## Changes in production
- **Fordism:** mass production on an assembly line.
- **Post-Fordism:** flexible production, specialization, just-in-time delivery.
- **Deindustrialization:** decline of manufacturing in older industrial regions (the "Rust Belt").
- **Outsourcing and offshoring:** moving production to lower-cost places. Examples include **maquiladoras** in Mexico.
- **Special economic zones** and **export processing zones** offer incentives to attract foreign investment.
- **Global value chains** divide production among many countries.
`,
        q: [
          mc('A process turns 10 tons of ore into 2 tons of metal. Under Weber’s theory, where should the plant be located?', 'Near the ore, because the process loses weight', 'The material index is greater than 1, so transport costs are lower near the raw material.', [
            ['Near the market, because the product is lighter', 'Shipping the heavy input a long distance would cost more than shipping the product.'],
            ['Far from both, because costs do not matter', 'Weber’s model is based on minimizing costs.'],
            ['In the center of a city regardless of inputs', 'The model does not place it there.'],
          ]),
          mc('Which term describes the decline of manufacturing in older industrial regions?', 'Deindustrialization', 'Factories close or move to lower-cost places.', [
            ['Agglomeration', 'This is the clustering of related firms.'],
            ['Fordism', 'This is mass production on an assembly line.'],
            ['Redlining', 'This concerns housing finance.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Measuring and explaining development.',
      sessions: [{
        t: 'Indicators and theories of development',
        s: 'HDI, inequality measures and theories that explain differences.',
        md: `
## Measuring development
- **GDP and GNI per capita:** average income per person (income alone can hide inequality).
- **Human Development Index (HDI):** combines **life expectancy**, **education** (years of schooling) and **income per capita**. It runs from 0 to 1.
- **Gender Inequality Index (GII):** measures gaps between women and men in health, empowerment and labor markets.
- **Gini coefficient:** measures income inequality from **0** (perfect equality) to **1** (one person has everything).
- Other indicators: **infant mortality rate**, **literacy rate** and **access to clean water**.

## Theories
- **Rostow's stages of economic growth:** societies move through traditional society, preconditions for takeoff, takeoff, drive to maturity and high mass consumption. Critics say it assumes all countries follow the same path as Western countries.
- **Dependency theory:** poorer countries remain poor because they depend on wealthier countries for capital and markets and export raw materials; colonial history matters.
- **World-systems theory (Wallerstein):** the world economy has **core**, **semi-periphery** and **periphery** regions with unequal exchange.

## Development strategies
- **Import substitution** and **export-oriented** growth.
- **Microfinance:** small loans to people who cannot access banks.
- **Fair trade** and **sustainable development** goals.
- **Remittances** and **foreign direct investment** also affect development.
- **Education and health** investments, particularly for women, are associated with lower fertility and higher incomes.
`,
        q: [
          mc('Which three components make up the Human Development Index?', 'Life expectancy, education and income per capita', 'HDI combines health, knowledge and standard of living.', [
            ['Population density, urbanization and literacy', 'These are not the HDI components.'],
            ['Birth rate, death rate and GDP', 'These are not the HDI components.'],
            ['Land area, climate and religion', 'These are not development indicators in the HDI.'],
          ]),
          mc('A Gini coefficient of 0 means', 'perfect income equality', 'Everyone has the same income.', [
            ['perfect income inequality', 'This would be a value of 1.'],
            ['no economic growth', 'The Gini coefficient measures distribution, not growth.'],
            ['a country has no population', 'The coefficient measures income distribution.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Industrial and Economic Development',
    tasks: [
      mc('Which is a tertiary sector activity?', 'Teaching or banking', 'Tertiary activities provide services.', [
        ['Mining coal', 'This is primary.'],
        ['Assembling cars', 'This is secondary.'],
        ['Growing wheat', 'This is primary.'],
      ]),
      mc('A factory adds a large amount of water to concentrate to make a drink, so the product weighs more than the inputs. Under Weber’s theory it should locate', 'near the market', 'The material index is less than 1, so shipping the heavy product is the main cost.', [
        ['near the raw materials', 'This applies when the process loses weight.'],
        ['as far as possible from customers', 'This would raise transport costs.'],
        ['at a random location', 'The model is based on minimizing costs.'],
      ]),
      mc('Maquiladoras are best described as', 'factories near the U.S.–Mexico border that assemble goods for export', 'They are an example of offshoring to lower-cost areas.', [
        ['subsistence farms', 'These are not farms.'],
        ['informal settlements', 'They are factories, not housing.'],
        ['central places', 'This refers to settlements providing services.'],
      ]),
      mc('Which measure combines life expectancy, education and income?', 'The Human Development Index', 'It gives a broader picture than income alone.', [
        ['The Gini coefficient', 'This measures income inequality.'],
        ['GDP per capita', 'This measures income only.'],
        ['The rate of natural increase', 'This concerns population growth.'],
      ]),
      mc('Which statement about world-systems theory is accurate?', 'It divides the world economy into core, semi-periphery and periphery regions', 'Wallerstein used these categories.', [
        ['It claims all countries follow the same path in five stages', 'This describes Rostow’s model.'],
        ['It measures inequality between zero and one', 'This describes the Gini coefficient.'],
        ['It explains the location of factories by transport cost', 'This describes Weber’s theory.'],
      ]),
      mc('Critics of Rostow’s model argue that it', 'assumes all countries will follow the same path as Western countries', 'It does not account for colonial history or unequal exchange.', [
        ['was based on the location of factories', 'That describes Weber.'],
        ['ignored economic growth', 'It was a theory about growth.'],
        ['divided the world into three zones', 'That describes world-systems theory.'],
      ]),
      tf('A country with a high GDP per capita must have a low Gini coefficient.', false, 'Average income can be high while income inequality is also high.', 'Correct. GDP per capita does not show how income is distributed.'),
    ],
  },
};
