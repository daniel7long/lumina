import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn what money is, how banks create it, and how a central bank steers interest rates and aggregate demand.',
  modules: {
    15: {
      summary: 'The functions of money and the money multiplier.',
      sessions: [{
        t: 'Money and the banking system',
        s: 'Reserves, lending and the money multiplier.',
        md: `
## Functions of money
1. **Medium of exchange:** accepted for goods and services.
2. **Unit of account:** a common measure of value.
3. **Store of value:** holds purchasing power over time.

## Banks and reserves
Banks keep a fraction of deposits as **reserves** (the **reserve requirement**, rr) and lend the rest, which creates new deposits.

### The money multiplier
**Money multiplier = 1 / rr**

With rr = 20%, the multiplier is **5**.

**Example:** a bank receives a new **$500** deposit, and rr = 20%.
- Required reserves = 0.20 × 500 = **$100**.
- **Excess reserves** = 500 − 100 = **$400**, which can be lent.
- The deposit can support up to 500 × 5 = $2,500 in total deposits.

The multiplier gives the **maximum** change. In practice, it is smaller if people hold cash or banks keep extra reserves.

### The money supply
The money supply includes cash and checkable deposits (M1) plus savings-type accounts (M2).
`,
        q: [
          mc('The reserve requirement is 20%. What is the money multiplier?', '5', '1 / 0.20 = 5.', [
            ['0.2', 'This is the reserve requirement itself.'],
            ['20', 'This is 20 as a percent; the multiplier is 1 divided by 0.20.'],
            ['0.8', 'This is the fraction of deposits that banks can lend, not the multiplier.'],
          ]),
          mc('A bank receives a $500 deposit and the reserve requirement is 20%. What are its excess reserves?', '$400', 'Required reserves are $100, so $400 is available to lend.', [
            ['$100', 'This is the required reserve amount.'],
            ['$500', 'This is the whole deposit; part of it must be held as reserves.'],
            ['$2,500', 'This is the maximum total deposits supported, not the excess reserves.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Central bank tools and the Phillips curve.',
      sessions: [{
        t: 'Monetary policy and the Phillips curve',
        s: 'How the central bank affects interest rates, output and inflation.',
        md: `
## Monetary policy tools
The central bank (the Federal Reserve in the United States) uses:
- **Open market operations:** buying or selling government bonds.
- The **discount rate**: the rate it charges banks for loans.
- The **reserve requirement**.
- **Interest on reserves.**

### Expansionary policy (recession)
The Fed **buys bonds**. Bank reserves rise, the money supply grows, and **interest rates fall**. Lower rates raise **investment and consumption**, so AD shifts **right**.

### Contractionary policy (inflation)
The Fed **sells bonds**, which lowers reserves and raises interest rates. AD shifts left.

A **higher discount rate** makes it costlier for banks to borrow from the Fed, which is contractionary.

## The Phillips curve
- **Short run:** a trade-off between inflation and unemployment. Lower unemployment goes with higher inflation.
- **Long run:** the curve is **vertical** at the natural rate of unemployment. Policy cannot permanently lower unemployment by accepting higher inflation.
`,
        q: [
          mc('The Fed wants to fight a recession. What should it do?', 'Buy government bonds', 'This raises reserves, lowers interest rates and raises AD.', [
            ['Sell government bonds', 'This is contractionary: it lowers reserves and raises interest rates.'],
            ['Raise the discount rate', 'This is also contractionary.'],
            ['Raise the reserve requirement', 'This reduces the money banks can lend.'],
          ]),
          mc('What does the long-run Phillips curve look like?', 'Vertical at the natural rate of unemployment', 'In the long run, expectations adjust and there is no trade-off.', [
            ['Downward-sloping', 'This is the short-run curve.'],
            ['Horizontal', 'The long-run curve does not allow any inflation rate at a fixed unemployment rate.'],
            ['Upward-sloping', 'It does not slope upward.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Money, banking and monetary policy',
    tasks: [
      mc('The reserve requirement is 25%. What is the money multiplier?', '4', '1 / 0.25 = 4.', [
        ['0.25', 'This is the reserve requirement.'],
        ['25', 'This is the percent, not the multiplier.'],
        ['0.75', 'This is the fraction banks can lend.'],
      ]),
      mc('A $2,000 deposit is made and the reserve requirement is 10%. What are the bank’s excess reserves?', '$1,800', 'Required reserves are $200, so $1,800 is excess.', [
        ['$200', 'This is the required reserve amount.'],
        ['$2,000', 'This is the entire deposit.'],
        ['$20,000', 'This is the maximum total deposits supported, not excess reserves.'],
      ]),
      mc('Which of the following is a function of money?', 'Medium of exchange', 'Money is accepted in payment for goods and services.', [
        ['Barter', 'Barter is trade without money.'],
        ['Maximizing government revenue', 'This is not a function of money.'],
        ['Setting the interest rate', 'The central bank, not money itself, influences interest rates.'],
      ]),
      mc('To reduce inflation, the Fed should', 'sell government bonds', 'This reduces reserves and raises interest rates, shifting AD left.', [
        ['buy government bonds', 'This is expansionary and would add to inflation.'],
        ['lower the discount rate', 'This is expansionary.'],
        ['lower the reserve requirement', 'This lets banks lend more, which is expansionary.'],
      ]),
      mc('A fall in interest rates is most likely to cause', 'investment spending to rise, shifting AD right', 'Cheaper borrowing encourages firms and households to spend.', [
        ['investment spending to fall', 'Lower rates make borrowing cheaper, which raises investment.'],
        ['the SRAS curve to shift left', 'A change in interest rates mainly affects AD.'],
        ['the LRAS curve to shift left', 'Potential output is not reduced by lower interest rates.'],
      ]),
      tf('In the long run, the Phillips curve is vertical at the natural rate of unemployment.', true, 'Expectations adjust, so inflation cannot buy lower unemployment permanently.', 'Correct. The short-run trade-off disappears as people’s inflation expectations catch up.'),
    ],
  },
};
