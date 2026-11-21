import { mc, tf } from '../builder.js';

export default {
  summary: 'Analyze the market for labor, and the cases where markets alone do not give the best outcome: externalities and public goods.',
  modules: {
    10: {
      summary: 'Labor demand, hiring decisions and the minimum wage.',
      sessions: [{
        t: 'The labor market',
        s: 'Marginal revenue product and the hiring rule.',
        md: `
## Demand for labor
Firms demand labor because of what workers produce. The **marginal product of labor (MPL)** is the extra output from one more worker. The **marginal revenue product (MRP)** is the extra revenue:

**MRP = MPL × price of output** (for a competitive firm)

### The hiring rule
Hire workers as long as **MRP ≥ wage**. Stop where MRP = wage.

**Example:** the wage is $20 and each unit sells for $5.

| Worker | MPL | MRP |
| --- | --- | --- |
| 1st | 10 | $50 |
| 2nd | 8 | $40 |
| 3rd | 6 | $30 |
| 4th | 4 | $20 |
| 5th | 2 | $10 |

The 4th worker adds $20, equal to the wage, so the firm hires **4** workers. The 5th adds only $10.

### Minimum wage
In a competitive labor market, a wage floor **above** equilibrium creates a **surplus of labor** (unemployment): more people want jobs than firms want to hire.

The MRP curve is the firm’s **labor demand curve**. It shifts with the output price, worker productivity and technology.
`,
        q: [
          mc('In the table above, with a wage of $20, how many workers will the firm hire?', '4', 'The 4th worker’s MRP ($20) equals the wage; the 5th’s MRP ($10) is below it.', [
            ['5', 'The 5th worker adds $10 in revenue but costs $20.'],
            ['2', 'The 3rd and 4th workers still add at least as much as they cost.'],
            ['1', 'The firm gains from hiring every worker whose MRP is at least $20.'],
          ]),
          mc('What is the marginal revenue product of the 2nd worker?', '$40', 'MRP = MPL × price = 8 × $5.', [
            ['$8', 'This is the marginal product, in units of output.'],
            ['$20', 'This is the wage, not the marginal revenue product.'],
            ['$90', 'This adds the MRPs of the first two workers, which is a total, not the marginal value.'],
          ]),
        ],
      }],
    },
    11: {
      summary: 'Externalities, public goods and the role of government.',
      sessions: [{
        t: 'Externalities and public goods',
        s: 'When markets fail, and the standard fixes.',
        md: `
## Externalities
An **externality** is a cost or benefit that falls on someone who is not part of the transaction.

### Negative externality (pollution)
The market ignores the external cost, so **marginal social cost > marginal private cost**. The result is **overproduction**.
- Fix: a **Pigouvian tax** equal to the marginal external cost, which makes producers pay the full cost.

### Positive externality (vaccination, education)
The market ignores the external benefit, so **marginal social benefit > marginal private benefit**. The result is **underproduction**.
- Fix: a **subsidy** equal to the marginal external benefit.

## Public goods
- **Non-rival:** one person’s use does not reduce what is left.
- **Non-excludable:** people cannot be kept from using it.

National defense and clean air are public goods. Because people can enjoy them without paying, the **free-rider problem** means private firms would supply too little, so governments provide them using taxes.

A **toll road** is excludable (you can charge for entry), so it is not a pure public good.

> **Coase theorem:** when property rights are clear and bargaining is cheap, private parties can often solve an externality themselves.
`,
        q: [
          mc('A factory’s pollution harms people nearby who are not paid for the damage. What is the market outcome and one standard fix?', 'Too much output; a tax equal to the external cost', 'The factory ignores the external cost, so it overproduces; a Pigouvian tax makes it pay.', [
            ['Too little output; a subsidy', 'A negative externality leads to overproduction, not underproduction.'],
            ['The efficient output; no action is needed', 'Ignoring a cost causes the market to produce too much.'],
            ['Too much output; a price floor', 'A price floor would raise prices but does not charge for the external cost.'],
          ]),
          mc('Which is the best example of a pure public good?', 'National defense', 'It is non-rival and non-excludable.', [
            ['A toll road', 'People can be excluded by charging a toll.'],
            ['A restaurant meal', 'It is both rival and excludable.'],
            ['A movie ticket', 'It is excludable, and each seat is rival.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Factor markets and market failure',
    tasks: [
      mc('A worker’s marginal product is 6 units and each unit sells for $4. What is the marginal revenue product?', '$24', 'MRP = 6 × $4.', [
        ['$10', 'This adds the numbers instead of multiplying.'],
        ['$6', 'This is the marginal product in units.'],
        ['$4', 'This is the output price.'],
      ]),
      mc('The wage is $12. The marginal revenue products of successive workers are $30, $22, $14, $10. How many workers should the firm hire?', '3', 'The third worker’s MRP of $14 is above the $12 wage; the fourth’s $10 is below it.', [
        ['4', 'The fourth worker adds only $10 but costs $12.'],
        ['2', 'The third worker adds $14, more than the wage.'],
        ['1', 'Several workers add more than they cost.'],
      ]),
      mc('A minimum wage set above the equilibrium wage in a competitive labor market creates', 'a surplus of labor (unemployment)', 'More people want to work at the higher wage than firms want to hire.', [
        ['a shortage of labor', 'A binding floor increases quantity supplied and reduces quantity demanded.'],
        ['no change in employment', 'A binding wage floor reduces the quantity of labor demanded.'],
        ['a rise in labor demand', 'A higher wage moves firms along the demand curve; it does not shift it.'],
      ]),
      mc('With a negative externality in production, the market quantity is', 'greater than the socially optimal quantity', 'Producers ignore the external cost, so marginal social cost exceeds marginal private cost.', [
        ['less than the socially optimal quantity', 'This describes a positive externality.'],
        ['equal to the socially optimal quantity', 'The externality prevents the market from reaching the efficient quantity.'],
        ['zero', 'The market still produces; it produces too much.'],
      ]),
      mc('Widespread vaccination protects people who are not vaccinated. This is', 'a positive externality, so the market tends to underprovide it, and a subsidy can help', 'Marginal social benefit exceeds marginal private benefit.', [
        ['a negative externality, so a tax is needed', 'The benefit spills over to others, so it is positive.'],
        ['a public good, because it is free', 'A vaccine can be priced and withheld, so it is excludable.'],
        ['not an externality, because people choose it', 'The third-party benefit is what makes it an externality.'],
      ]),
      tf('The free-rider problem arises because people can enjoy a public good without paying for it.', true, 'Non-excludability removes the incentive to pay.', 'Correct. This is why public goods are usually funded through taxes.'),
    ],
  },
};
