import { mc, tf } from '../builder.js';

export default {
  summary: 'Use the aggregate demand–aggregate supply model to explain recessions and inflation, and see how government spending and taxes can respond.',
  modules: {
    13: {
      summary: 'Aggregate demand, aggregate supply and the multiplier.',
      sessions: [{
        t: 'The AD–AS model and the multiplier',
        s: 'What shifts the curves and why spending has a multiplied effect.',
        md: `
## Aggregate demand (AD)
AD shows the total quantity of real GDP demanded at each price level. It slopes downward. AD shifts when **consumption, investment, government spending or net exports** change. For example, rising consumer confidence shifts AD **right**.

## Aggregate supply (AS)
- **Short-run AS (SRAS)** slopes upward because some prices and wages are sticky. It shifts left when **input costs rise** (such as an oil price shock) and right with productivity gains.
- **Long-run AS (LRAS)** is vertical at **potential (full-employment) output**.

### Gaps and shocks
- **Recessionary gap:** output below potential, with high unemployment.
- **Inflationary gap:** output above potential, with rising prices.
- A leftward SRAS shift raises prices **and** reduces output: **stagflation**.

## The spending multiplier
An initial change in spending is re-spent in rounds, so total GDP changes by more.

**Multiplier = 1 / (1 − MPC) = 1 / MPS**, where MPC is the marginal propensity to consume.

With MPC = 0.8, the multiplier is **5**. An extra $20 billion of spending raises GDP by up to **$100 billion**.
`,
        q: [
          mc('The marginal propensity to consume is 0.8. What is the spending multiplier?', '5', '1/(1 − 0.8) = 1/0.2 = 5.', [
            ['1.25', 'This is 1/0.8, which uses the MPC instead of the MPS.'],
            ['0.8', 'This is the MPC itself.'],
            ['4', 'This is MPC/(1 − MPC), the tax multiplier magnitude, not the spending multiplier.'],
          ]),
          mc('A sharp fall in business investment shifts the AD curve left. What happens in the short run?', 'Real GDP and the price level both fall', 'Lower aggregate demand moves the economy down the SRAS curve.', [
            ['Real GDP rises and the price level falls', 'Real GDP falls when AD decreases.'],
            ['Real GDP falls and the price level rises', 'This describes a leftward shift in SRAS (stagflation).'],
            ['Nothing changes, since LRAS is vertical', 'LRAS matters in the long run; in the short run, output changes.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Expansionary and contractionary fiscal policy.',
      sessions: [{
        t: 'Fiscal policy',
        s: 'Using government spending and taxes to stabilize the economy.',
        md: `
## Fiscal policy
**Fiscal policy** is the use of government spending and taxes.

- **Expansionary** (recession): increase government spending and/or cut taxes. AD shifts **right**.
- **Contractionary** (inflationary gap): cut spending and/or raise taxes. AD shifts **left**.

### Size of the effect
- **Spending multiplier** = 1/(1 − MPC).
- **Tax multiplier** = −MPC/(1 − MPC). It is smaller in size, because part of a tax cut is saved.

With MPC = 0.8, a **$10 billion tax cut** raises GDP by about **10 × 4 = $40 billion**, while $10 billion of new spending raises it by $50 billion.

### Complications
- **Crowding out:** government borrowing can raise interest rates and reduce private investment.
- **Time lags:** it takes time to recognize a problem, pass a law and see the effect.
- **Automatic stabilizers:** unemployment benefits and progressive taxes change automatically with the business cycle, without a new law.
- A budget deficit adds to the **national debt**.
`,
        q: [
          mc('The MPC is 0.8. By about how much does a $10 billion tax cut raise GDP?', '$40 billion', 'Tax multiplier magnitude = 0.8/0.2 = 4, so 10 × 4 = 40.', [
            ['$50 billion', 'This uses the spending multiplier of 5.'],
            ['$10 billion', 'This ignores the multiplier.'],
            ['$8 billion', 'This is the first-round spending only (0.8 × 10).'],
          ]),
          mc('Which is an automatic stabilizer?', 'Unemployment insurance', 'Payments rise in a recession without any new law.', [
            ['A new infrastructure bill', 'This needs legislation, so it is discretionary.'],
            ['A one-time stimulus check passed by Congress', 'This is a discretionary policy.'],
            ['A change in the discount rate', 'This is a monetary policy tool, not a fiscal one.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · AD–AS and fiscal policy',
    tasks: [
      mc('The marginal propensity to consume is 0.75. What is the spending multiplier?', '4', '1/(1 − 0.75) = 4.', [
        ['3', 'This is MPC/(1 − MPC), the tax multiplier magnitude.'],
        ['0.75', 'This is the MPC itself.'],
        ['1.33', 'This is 1/0.75.'],
      ]),
      mc('Government spending rises by $15 billion and the MPC is 0.6. By how much can GDP rise?', '$37.5 billion', 'The multiplier is 1/0.4 = 2.5, and 15 × 2.5 = 37.5.', [
        ['$15 billion', 'This ignores the multiplier.'],
        ['$22.5 billion', 'This is the tax multiplier, 1.5, times 15.'],
        ['$25 billion', 'This divides 15 by 0.6, which is not the multiplier formula.'],
      ]),
      mc('Which event would shift aggregate demand to the right?', 'An increase in consumer confidence', 'Higher confidence raises consumption at every price level.', [
        ['An increase in oil prices', 'This shifts SRAS to the left.'],
        ['A rise in the price level', 'This moves along the AD curve.'],
        ['A fall in government spending', 'This shifts AD to the left.'],
      ]),
      mc('A sharp rise in oil prices shifts short-run aggregate supply to the left. The result is', 'stagflation: higher prices and lower output', 'Costs rise and output falls at the same time.', [
        ['higher output and lower prices', 'This results from a rightward SRAS shift.'],
        ['higher output and higher prices', 'This is typical of a rightward AD shift.'],
        ['lower output and lower prices', 'This is typical of a leftward AD shift.'],
      ]),
      mc('The economy is in a recession, with output below potential. Which fiscal policy is appropriate?', 'Increase government spending or cut taxes', 'Expansionary policy shifts AD to the right.', [
        ['Raise taxes and cut spending', 'This is contractionary and would deepen the recession.'],
        ['Sell government bonds to the public', 'This is not a standard fiscal stimulus; sales of bonds to the public draw money out.'],
        ['Do nothing, because LRAS is vertical', 'Without action, recovery may take a long time.'],
      ]),
      tf('For the same dollar amount, a tax cut has a smaller effect on GDP than an increase in government spending.', true, 'Part of a tax cut is saved, so the first round of spending is smaller.', 'Correct. The tax multiplier MPC/(1 − MPC) is smaller in magnitude than the spending multiplier 1/(1 − MPC).'),
    ],
  },
};
