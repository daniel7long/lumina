import { mc, tf } from '../builder.js';

export default {
  summary: 'Study how firms’ costs are structured and how a price-taking firm chooses output, profit and whether to stay in business.',
  modules: {
    6: {
      summary: 'Fixed, variable, average and marginal costs.',
      sessions: [{
        t: 'Costs of production',
        s: 'Total, average and marginal cost, and how they relate.',
        md: `
## Types of cost
- **Fixed cost (FC):** does not change with output (rent).
- **Variable cost (VC):** changes with output (materials).
- **Total cost (TC)** = FC + VC.
- **Average total cost (ATC)** = TC/Q. **Average variable cost (AVC)** = VC/Q.
- **Marginal cost (MC)** = change in TC from one more unit.

### Example: TC = 50 + 10Q + Q²
- At Q = 5: TC = 50 + 50 + 25 = 125, so **ATC = 25**.
- TC(6) = 50 + 60 + 36 = 146, so **MC of the 6th unit = 146 − 125 = 21**.

### How MC relates to averages
- When **MC < ATC**, ATC is falling.
- When **MC > ATC**, ATC is rising.
- MC **crosses ATC (and AVC) at their minimum points**.

Spreading fixed cost over more units pulls ATC down at first. Rising marginal cost (diminishing returns) eventually pulls it up, producing a U-shape.
`,
        q: [
          mc('A firm has TC = 50 + 10Q + Q². What is its average total cost at Q = 5?', '$25', 'TC(5) = 125, and 125/5 = 25.', [
            ['$125', 'This is total cost, not the average per unit.'],
            ['$15', 'This is the average variable cost at Q = 5: VC = 75, and 75/5 = 15.'],
            ['$21', 'This is the marginal cost of the 6th unit.'],
          ]),
          mc('If marginal cost is below average total cost, what is happening to ATC?', 'It is falling', 'A new unit that costs less than the average pulls the average down.', [
            ['It is rising', 'ATC rises when MC is above it.'],
            ['It is at its minimum', 'ATC is at its minimum only when MC equals ATC.'],
            ['It is constant', 'ATC is constant only if MC equals ATC over a range.'],
          ]),
        ],
      }],
    },
    7: {
      summary: 'Profit maximization and long-run equilibrium in perfect competition.',
      sessions: [{
        t: 'Perfect competition',
        s: 'The P = MR = MC rule, shutdown and long-run zero profit.',
        md: `
## The perfectly competitive firm
Many small firms sell an identical product and can enter or exit freely. Each firm is a **price taker**: its demand curve is horizontal at the market price, so **P = MR**.

### Profit-maximizing rule
Produce where **MR = MC** (so P = MC). Then profit = (P − ATC) × Q.

**Example:** TC = 50 + 10Q + Q² means MC = 10 + 2Q. If P = $30, then 10 + 2Q = 30 gives **Q = 10**. At Q = 10, ATC = 250/10 = 25, so profit = (30 − 25) × 10 = **$50**.

### Shutdown rule
In the short run, produce only if **P ≥ AVC**; otherwise losses are smaller if the firm shuts down. Here, AVC is at least $10, so at P = $8 the firm would shut down.

### Long run
- Positive economic profit attracts **entry**, which lowers the price.
- Losses cause **exit**, which raises the price.
- In the long run, P = minimum ATC and **economic profit is zero**.
`,
        q: [
          mc('A competitive firm has MC = 10 + 2Q and the market price is $30. What output maximizes profit?', 'Q = 10', 'Set P = MC: 30 = 10 + 2Q, so Q = 10.', [
            ['Q = 20', 'This is (30 − 10), forgetting to divide by the 2 in MC.'],
            ['Q = 30', 'This sets Q equal to the price rather than setting P = MC.'],
            ['Q = 5', 'At Q = 5, MC is 20, which is below the price; the firm should produce more.'],
          ]),
          tf('In long-run equilibrium, a perfectly competitive firm earns zero economic profit.', true, 'Entry and exit drive the price down to minimum ATC.', 'Correct. If profits were positive, new firms would enter and push the price down.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Production, cost and perfect competition',
    tasks: [
      mc('A firm has TC = 100 + 20Q. What is its average total cost at Q = 10?', '$30', 'TC(10) = 300, and 300/10 = 30.', [
        ['$20', 'This is the marginal cost and the average variable cost.'],
        ['$300', 'This is the total cost.'],
        ['$10', 'This is the average fixed cost, 100/10.'],
      ]),
      mc('When marginal cost is above average total cost, ATC is', 'rising', 'A new unit that costs more than the average pushes the average up.', [
        ['falling', 'ATC falls when MC is below it.'],
        ['at its minimum', 'ATC is at its minimum when MC equals ATC.'],
        ['equal to MC', 'The two are equal only at the minimum point.'],
      ]),
      mc('A perfectly competitive firm has MC = 4 + 2Q and faces a price of $12. How much does it produce?', '4 units', 'Set 12 = 4 + 2Q, so Q = 4.', [
        ['8 units', 'This is 12 − 4, forgetting the 2 in MC.'],
        ['6 units', 'This divides the price by 2, ignoring the 4.'],
        ['12 units', 'This sets Q equal to the price.'],
      ]),
      mc('In the short run, a competitive firm should shut down if', 'price is less than average variable cost', 'Revenue does not even cover the variable costs of producing.', [
        ['price is less than average total cost', 'The firm may still lose money but cover variable costs, so it should keep producing in the short run.'],
        ['price is greater than marginal cost', 'This signals the firm should produce less, not shut down.'],
        ['economic profit is negative', 'Negative economic profit alone does not require shutting down in the short run.'],
      ]),
      mc('In a perfectly competitive industry, firms are earning positive economic profit. In the long run,', 'new firms enter and the price falls', 'Profits attract entry until economic profit is zero.', [
        ['firms exit and the price rises', 'Exit happens when firms are losing money.'],
        ['the price stays the same', 'Entry shifts supply and changes price.'],
        ['firms raise their prices', 'Price takers cannot set price.'],
      ]),
      tf('The demand curve facing an individual perfectly competitive firm is horizontal.', true, 'A price taker can sell any quantity at the market price.', 'Correct. Because each firm is so small, it takes the market price as given.'),
    ],
  },
};
