import { mc, tf } from '../builder.js';

export default {
  summary: 'Connect the domestic economy to the rest of the world through exchange rates and trade, and look at what drives growth over decades.',
  modules: {
    17: {
      summary: 'Exchange rates and net exports.',
      sessions: [{
        t: 'Exchange rates and international trade',
        s: 'Converting currencies and how appreciation changes trade.',
        md: `
## Exchange rates
An **exchange rate** is the price of one currency in terms of another. If **$1 = 150 yen**, an item priced at 15,000 yen costs 15,000 ÷ 150 = **$100**.

### Appreciation and depreciation
- **Appreciation:** a currency buys more foreign currency. If the dollar rises to 200 yen, the same 15,000-yen item costs only **$75**.
- **Depreciation:** a currency buys less.

### Effects on trade
When the **dollar appreciates**:
- Imports become **cheaper** for Americans, so imports rise.
- US exports become **more expensive** for foreigners, so exports fall.
- **Net exports (X − M) decrease**, reducing aggregate demand.

### What changes the exchange rate?
Demand for a currency rises when foreigners want to buy the country’s goods or assets. For example, **higher US interest rates** attract foreign investors, who buy dollars, so the dollar **appreciates**.

### Balance of payments
The **current account** (trade in goods and services, income) and the **financial account** (flows of assets) together sum to zero. A **trade deficit** means imports exceed exports (X − M < 0).
`,
        q: [
          mc('The exchange rate is $1 = 150 yen. What is the dollar price of an item that costs 15,000 yen?', '$100', '15,000 ÷ 150 = 100.', [
            ['$2,250,000', 'This multiplies the numbers; the yen price should be divided by the exchange rate.'],
            ['$150', 'This is the exchange rate, not the converted price.'],
            ['$10', 'This divides by 1,500; check 15,000 ÷ 150.'],
          ]),
          mc('What is the effect of an appreciation of the US dollar on US net exports?', 'Net exports fall', 'Exports become more expensive abroad and imports become cheaper.', [
            ['Net exports rise', 'This would follow a depreciation of the dollar.'],
            ['Net exports are unchanged', 'The exchange rate changes relative prices, which changes trade.'],
            ['Only exports rise', 'Exports fall when the dollar appreciates.'],
          ]),
        ],
      }],
    },
    18: {
      summary: 'Sources of long-run economic growth.',
      sessions: [{
        t: 'Economic growth',
        s: 'What raises productive capacity, and the rule of 70.',
        md: `
## Economic growth
Long-run growth is a rise in **potential output**. It shifts the **PPC outward** and the **LRAS curve right**. It is usually measured as growth of **real GDP per capita**, which relates most closely to living standards.

### Sources of growth
- More or better **physical capital** (machines, infrastructure).
- **Human capital** (education, training, health).
- **Technological progress** (new ideas and methods).
- Better **institutions**: property rights, rule of law, stable money.
- More natural resources or labor (a larger workforce).

### The rule of 70
**Years to double ≈ 70 ÷ growth rate (in percent)**.

- At 2% growth, GDP per capita doubles in about **35 years**.
- At 5% growth, it doubles in about **14 years**.

Small differences in growth rates compound into very large differences over decades.

### Trade-off
Investing in capital means giving up consumption today (an opportunity cost) to gain more output in the future.
`,
        q: [
          mc('A country’s real GDP per capita grows 3.5% a year. About how long does it take to double?', 'About 20 years', '70 ÷ 3.5 = 20.', [
            ['About 35 years', 'This is the doubling time at 2% growth.'],
            ['About 3.5 years', 'This is the growth rate itself, not the doubling time.'],
            ['About 245 years', 'This multiplies 70 by 3.5 instead of dividing.'],
          ]),
          mc('Which change would most directly raise a country’s long-run growth rate?', 'Greater investment in education and new technology', 'Human capital and technology increase potential output.', [
            ['A temporary rise in consumer spending', 'This shifts AD in the short run but does not raise potential output.'],
            ['A price ceiling on food', 'This distorts a market and does not raise productive capacity.'],
            ['A larger trade deficit', 'A deficit does not by itself raise productive capacity.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 9 assessment · The open economy and long-run growth',
    tasks: [
      mc('If $1 = 150 yen, what is the dollar price of a 30,000-yen item?', '$200', '30,000 ÷ 150 = 200.', [
        ['$4,500,000', 'This multiplies instead of dividing.'],
        ['$150', 'This is the exchange rate.'],
        ['$20', 'This divides by 1,500.'],
      ]),
      mc('When the dollar appreciates, US exports', 'fall, because they cost more in foreign currency', 'Foreign buyers need more of their currency to buy each dollar’s worth of goods.', [
        ['rise, because they cost less abroad', 'This would follow a depreciation.'],
        ['are unaffected', 'Relative prices change, so trade changes.'],
        ['rise, because imports are cheaper', 'Cheaper imports increase imports, not exports.'],
      ]),
      mc('Higher interest rates in the United States relative to other countries will most likely cause the dollar to', 'appreciate, as foreign investors buy dollars to buy US assets', 'The demand for dollars rises.', [
        ['depreciate, because borrowing is more expensive', 'Higher returns attract foreign funds, raising demand for dollars.'],
        ['stay the same, because exchange rates are fixed', 'Exchange rates in the AP model are flexible.'],
        ['depreciate, because exports rise', 'Exports tend to fall when the dollar rises.'],
      ]),
      mc('A country imports more than it exports. This means', 'net exports are negative (a trade deficit)', 'X − M < 0 when imports exceed exports.', [
        ['net exports are positive', 'This would be a trade surplus.'],
        ['GDP is zero', 'GDP is not zero; net exports are one component of it.'],
        ['the exchange rate is fixed', 'The trade balance does not determine the type of exchange rate.'],
      ]),
      mc('Real GDP per capita grows 5% each year. About how long does it take to double?', 'About 14 years', '70 ÷ 5 = 14.', [
        ['About 5 years', 'This is the growth rate itself.'],
        ['About 35 years', 'This is the doubling time at 2% growth.'],
        ['About 350 years', 'This multiplies instead of dividing.'],
      ]),
      tf('Long-run economic growth shifts the production possibilities curve outward and the LRAS curve to the right.', true, 'Both represent potential output, which grows with resources and technology.', 'Correct. Both curves describe what the economy can produce at full employment.'),
    ],
  },
};
