import { mc, tf } from '../builder.js';

export default {
  summary: 'Move from single markets to the whole economy: how output, unemployment and the price level are measured.',
  modules: {
    12: {
      summary: 'Measuring GDP, unemployment and inflation.',
      sessions: [{
        t: 'GDP, unemployment and inflation',
        s: 'The three headline indicators and how they are calculated.',
        md: `
## Gross domestic product (GDP)
GDP is the market value of all **final** goods and services **produced within a country in a year**.

**Expenditure approach: GDP = C + I + G + (X − M)**
Consumption + Investment + Government purchases + Net exports.

**Example:** C = 700, I = 200, G = 300, X = 150, M = 100.
GDP = 700 + 200 + 300 + (150 − 100) = **1,250**.

What does **not** count: used goods, intermediate goods, transfer payments and financial transactions (buying stocks).

**Real GDP** removes price changes: Real GDP = Nominal GDP ÷ GDP deflator × 100. For example, nominal GDP of 1,260 with a deflator of 105 gives real GDP of **1,200**.

## Unemployment
Unemployment rate = unemployed ÷ labor force × 100, where the labor force = employed + unemployed. With 8 million unemployed and 152 million employed, the labor force is 160 million and the rate is **5%**. People who have stopped looking (discouraged workers) are not in the labor force.

Types: **frictional** (between jobs), **structural** (skills mismatch), **cyclical** (recession).

## Inflation
Inflation rate = (CPI now − CPI before) ÷ CPI before × 100. A CPI that rises from 250 to 257.5 means **3%** inflation.
`,
        q: [
          mc('C = 700, I = 200, G = 300, exports = 150, imports = 100. What is GDP?', '1,250', 'GDP = 700 + 200 + 300 + (150 − 100).', [
            ['1,450', 'Imports must be subtracted, not added; this adds them.'],
            ['1,350', 'This adds exports without subtracting imports.'],
            ['1,200', 'This leaves out net exports of 50.'],
          ]),
          mc('There are 8 million unemployed and 152 million employed workers. What is the unemployment rate?', '5%', 'The labor force is 160 million, and 8/160 = 5%.', [
            ['5.3%', 'This divides by the employed (8/152), not the labor force.'],
            ['8%', 'This is the number of unemployed in millions.'],
            ['95%', 'This is the share of the labor force that is employed.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Measuring the macroeconomy',
    tasks: [
      mc('C = 500, I = 150, G = 200, exports = 80 and imports = 110. What is GDP?', '820', '500 + 150 + 200 + (80 − 110) = 820.', [
        ['1,040', 'This adds imports instead of subtracting them.'],
        ['930', 'This adds exports without subtracting imports.'],
        ['850', 'This leaves out net exports.'],
      ]),
      mc('Nominal GDP is 2,100 and the GDP deflator is 125. What is real GDP?', '1,680', 'Real GDP = 2,100 ÷ 125 × 100.', [
        ['2,625', 'This multiplies by the deflator; it should divide.'],
        ['2,100', 'This is the nominal value.'],
        ['1,975', 'This subtracts 125 from nominal GDP, which is not the formula.'],
      ]),
      mc('The CPI rises from 200 to 210. What is the inflation rate?', '5%', '(210 − 200)/200 = 5%.', [
        ['10%', 'This is the CPI change, not the percentage change.'],
        ['4.8%', 'This divides by the new CPI (10/210).'],
        ['0.5%', 'This misplaces the decimal.'],
      ]),
      mc('There are 9 million unemployed and 141 million employed. What is the unemployment rate?', '6%', 'The labor force is 150 million, and 9/150 = 6%.', [
        ['9%', 'This is the number of unemployed in millions.'],
        ['6.4%', 'This divides by the employed (9/141).'],
        ['94%', 'This is the share employed.'],
      ]),
      mc('Which of the following is counted in this year’s GDP?', 'A newly built house sold this year', 'It is a final good produced in the current year.', [
        ['The resale of an existing house', 'It was produced in an earlier year; only the agent’s commission counts.'],
        ['A government pension payment', 'Transfer payments are not payments for production.'],
        ['The purchase of shares in a company', 'Financial transactions are not production.'],
      ]),
      tf('A worker who has given up looking for a job is counted as unemployed.', false, 'The unemployed must be actively looking for work.', 'Correct. Discouraged workers are not in the labor force, so they are not counted as unemployed.'),
    ],
  },
};
