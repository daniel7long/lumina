import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how prices are set by supply and demand, how sensitive buyers are to price, and what happens when governments intervene.',
  modules: {
    3: {
      summary: 'Demand, supply and market equilibrium.',
      sessions: [{
        t: 'Demand, supply and equilibrium',
        s: 'Shifts, shortages, surpluses and solving for equilibrium.',
        md: `
## The laws of demand and supply

- **Law of demand:** when price rises, quantity demanded falls (other things equal).
- **Law of supply:** when price rises, quantity supplied rises.

A **change in price** moves you **along** a curve. A change in anything else **shifts** the curve.

**Demand shifters:** consumer income, tastes, prices of related goods (substitutes and complements), expectations, number of buyers.
**Supply shifters:** input prices, technology, taxes and subsidies, expectations, number of sellers.

## Equilibrium
The **equilibrium price** is where quantity demanded equals quantity supplied.

**Example:** Qd = 100 − 2P and Qs = 20 + 2P.
100 − 2P = 20 + 2P → 4P = 80 → **P = 20**, and **Q = 60**.

- At P = 10: Qd = 80 and Qs = 40, a **shortage of 40**. Price rises.
- At P = 30: Qd = 40 and Qs = 80, a **surplus of 40**. Price falls.
`,
        q: [
          mc('For Qd = 100 − 2P and Qs = 20 + 2P, what are the equilibrium price and quantity?', 'P = 20 and Q = 60', 'Setting Qd = Qs gives 4P = 80, so P = 20 and Q = 100 − 40 = 60.', [
            ['P = 30 and Q = 40', 'At P = 30, Qs (80) exceeds Qd (40), so it is a surplus.'],
            ['P = 10 and Q = 80', 'At P = 10, Qd (80) exceeds Qs (40), so it is a shortage.'],
            ['P = 60 and Q = 20', 'The price and quantity are swapped.'],
          ]),
          mc('Which event shifts the demand curve for a normal good to the right?', 'An increase in consumers’ income', 'For a normal good, higher income increases demand at every price.', [
            ['A fall in the good’s own price', 'This moves along the demand curve; it does not shift it.'],
            ['An increase in the cost of inputs', 'This shifts the supply curve to the left.'],
            ['A new technology lowering production costs', 'This shifts supply to the right.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Price elasticity of demand and total revenue.',
      sessions: [{
        t: 'Price elasticity of demand',
        s: 'Measuring responsiveness and linking it to revenue.',
        md: `
## Price elasticity of demand

**Ed = (% change in quantity demanded) ÷ (% change in price)**, using the absolute value.

- **|Ed| > 1: elastic** (quantity responds strongly).
- **|Ed| < 1: inelastic**.
- **|Ed| = 1: unit elastic**.

Demand is more elastic when there are **close substitutes**, when the good is a **luxury**, when it takes a **large share of income** and with **more time**.

### The midpoint method
Percent change = change ÷ average of the two values.

**Example:** price rises from $8 to $12 and quantity falls from 100 to 80.
%ΔP = 4/10 = 40% and %ΔQ = −20/90 ≈ −22.2%. So Ed ≈ 0.56: **inelastic**.

### Total revenue test
- **Inelastic demand:** a price rise **increases** total revenue ($800 → $960 here).
- **Elastic demand:** a price rise **decreases** total revenue.

### Other elasticities
**Cross-price** elasticity is positive for substitutes and negative for complements. **Income** elasticity is positive for normal goods and negative for inferior goods.
`,
        q: [
          mc('A firm raises its price by 10% and quantity demanded falls by 20%. What is the elasticity and what happens to total revenue?', 'Ed = 2, elastic; total revenue falls', 'The quantity falls by a larger percent than the price rose, so revenue falls.', [
            ['Ed = 0.5, inelastic; total revenue rises', 'The ratio is 20/10 = 2, not 10/20.'],
            ['Ed = 2, elastic; total revenue rises', 'When demand is elastic, a price increase lowers total revenue.'],
            ['Ed = 1, unit elastic; total revenue is unchanged', 'The percentages differ, so it is not unit elastic.'],
          ]),
          tf('When demand is inelastic, raising the price increases total revenue.', true, 'The percent fall in quantity is smaller than the percent rise in price.', 'Correct. For inelastic demand, price and total revenue move in the same direction.'),
        ],
      }],
    },
    5: {
      summary: 'Price ceilings, price floors and taxes.',
      sessions: [{
        t: 'Price controls and taxes',
        s: 'Shortages, surpluses, tax incidence and deadweight loss.',
        md: `
## Price controls

- A **price ceiling** is a legal maximum price. If it is **below** equilibrium, it is **binding** and creates a **shortage**.
- A **price floor** is a legal minimum price. If it is **above** equilibrium, it creates a **surplus**.

**Example (Qd = 100 − 2P, Qs = 20 + 2P, equilibrium P = 20):** a ceiling at $10 gives Qd = 80 but Qs = 40. Only **40** units are traded and there is a shortage of **40**.

## Taxes
A per-unit tax puts a **wedge** between the price buyers pay and the price sellers keep. The legal payer does not decide who bears the burden; the **elasticities** do. The more inelastic side bears more of it.

**Example:** a $4 tax on sellers shifts supply: Qs = 12 + 2P. Setting 100 − 2P = 12 + 2P gives **P = 22 and Q = 56**.
- Buyers pay $22; sellers keep $18.
- Tax revenue = 4 × 56 = **$224**.
- **Deadweight loss** = ½ × 4 × (60 − 56) = **$8**: trades that no longer happen.
`,
        q: [
          mc('With Qd = 100 − 2P and Qs = 20 + 2P, a price ceiling is set at $10. What happens?', 'A shortage of 40 units', 'At $10, Qd = 80 and Qs = 40.', [
            ['A surplus of 40 units', 'Quantity demanded exceeds quantity supplied, which is a shortage.'],
            ['No effect, because $10 is above equilibrium', 'Equilibrium is $20, so $10 is below it and is binding.'],
            ['A shortage of 80 units', '80 is the quantity demanded; the shortage is 80 − 40.'],
          ]),
          mc('A $4 per-unit tax is placed on sellers in the same market. What is the new equilibrium quantity?', '56', 'Supply becomes Qs = 12 + 2P; solving 100 − 2P = 12 + 2P gives P = 22 and Q = 56.', [
            ['60', 'This is the quantity before the tax.'],
            ['52', 'This subtracts the tax twice.'],
            ['64', 'A tax reduces quantity; it does not increase it.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Supply and demand',
    tasks: [
      mc('Qd = 90 − P and Qs = 2P. What is the equilibrium price?', '$30', 'Set 90 − P = 2P, so 3P = 90 and P = 30.', [
        ['$60', 'This is the quantity at equilibrium, not the price.'],
        ['$45', 'This is 90/2, which does not solve Qd = Qs.'],
        ['$90', 'This is the price at which Qd is zero.'],
      ]),
      mc('Using Qd = 90 − P and Qs = 2P, what happens at a price of $40?', 'A surplus of 30 units', 'Qd = 50 and Qs = 80, so Qs − Qd = 30.', [
        ['A shortage of 30 units', 'Quantity supplied exceeds quantity demanded, which is a surplus.'],
        ['A surplus of 50 units', '50 is the quantity demanded, not the surplus.'],
        ['Equilibrium', 'Equilibrium is at $30.'],
      ]),
      mc('Which event shifts the supply curve to the left?', 'A rise in the price of an input', 'Higher costs reduce the quantity firms supply at each price.', [
        ['A rise in consumers’ incomes', 'This shifts demand.'],
        ['A fall in the good’s own price', 'This moves along the supply curve.'],
        ['A new technology', 'This shifts supply to the right.'],
      ]),
      mc('The price falls from $10 to $8 and quantity demanded rises from 50 to 60. Using the midpoint method, which is correct?', 'Demand is inelastic (Ed ≈ 0.82), and total revenue falls', '%ΔQ = 10/55 ≈ 18.2% and %ΔP = −2/9 ≈ −22.2%, so Ed ≈ 0.82; revenue goes from $500 to $480.', [
        ['Demand is elastic, and total revenue rises', 'The ratio is below 1, so demand is inelastic.'],
        ['Demand is inelastic, and total revenue rises', 'For inelastic demand, a price cut reduces revenue.'],
        ['Demand is unit elastic', 'Ed is about 0.82, not 1.'],
      ]),
      mc('A rise in the price of coffee decreases the quantity demanded of cream. What is the cross-price elasticity?', 'Negative, because the goods are complements', 'Complements are used together, so their cross-price elasticity is negative.', [
        ['Positive, because the goods are substitutes', 'Substitutes have positive cross-price elasticity.'],
        ['Zero, because the goods are unrelated', 'The quantity responds, so it is not zero.'],
        ['Positive, because the goods are complements', 'Complements have negative cross-price elasticity.'],
      ]),
      mc('A price floor set above the equilibrium price will', 'create a surplus', 'At the higher price, quantity supplied exceeds quantity demanded.', [
        ['create a shortage', 'A shortage comes from a ceiling below equilibrium.'],
        ['have no effect', 'A floor above equilibrium is binding.'],
        ['lower the price', 'A floor prevents the price from falling.'],
      ]),
      tf('The side of the market that legally pays a per-unit tax bears the whole burden of it.', false, 'The legal payer does not determine the burden.', 'Correct. The burden depends on relative elasticities; the more inelastic side bears more of the tax.'),
    ],
  },
};
