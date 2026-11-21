import { mc, tf } from '../builder.js';

export default {
  summary: 'See how firms with market power behave, from a single seller to a few rivals who must anticipate each other’s moves.',
  modules: {
    8: {
      summary: 'Monopoly pricing, output and efficiency.',
      sessions: [{
        t: 'Monopoly',
        s: 'Why marginal revenue falls below price, and what monopoly costs society.',
        md: `
## The monopolist
A **monopoly** is the only seller, with barriers to entry (a patent, a key resource, economies of scale). Its demand curve is the **market** demand curve, which slopes downward.

### Why MR < P
To sell one more unit, the monopolist must lower the price on **all** units. So marginal revenue is below the price. For a linear demand **P = a − bQ**, marginal revenue is **MR = a − 2bQ** (twice as steep).

### Profit maximization
1. Find the quantity where **MR = MC**.
2. Read the **price from the demand curve** at that quantity.

**Example:** P = 100 − Q, MR = 100 − 2Q, MC = 20.
100 − 2Q = 20 gives **Q = 40**, and then **P = 60**. If ATC = 20 as well, profit = (60 − 20) × 40 = **$1,600**.

### Efficiency
A competitive market would produce where P = MC: Q = 80 and P = 20. The monopolist produces less and charges more. The **deadweight loss** is ½ × (60 − 20) × (80 − 40) = **$800**.

A **natural monopoly** arises when economies of scale are so large that one firm can serve the whole market at the lowest cost.
`,
        q: [
          mc('A monopolist faces P = 100 − Q and has MC = 20. What quantity maximizes profit?', 'Q = 40', 'MR = 100 − 2Q = 20 gives Q = 40.', [
            ['Q = 80', 'This sets P = MC, which is the competitive outcome, not the monopoly one.'],
            ['Q = 60', 'This is the monopoly price, not the quantity.'],
            ['Q = 20', 'This uses MC as the quantity.'],
          ]),
          mc('In the same market, what price does the monopolist charge?', '$60', 'At Q = 40, the demand curve gives P = 100 − 40 = 60.', [
            ['$20', 'This is the marginal cost, not the price the demand curve allows.'],
            ['$40', 'This is the quantity, not the price. Price comes from the demand curve.'],
            ['$100', 'This is the demand intercept, the price at which no one buys.'],
          ]),
        ],
      }],
    },
    9: {
      summary: 'Monopolistic competition and oligopoly.',
      sessions: [{
        t: 'Monopolistic competition and oligopoly',
        s: 'Differentiated products, interdependence and game theory.',
        md: `
## Monopolistic competition
Many firms sell **differentiated** products (restaurants, clothing) with **free entry**. Each firm has some price-setting power, so its demand curve slopes downward.
- **Short run:** a firm can earn profit.
- **Long run:** entry shifts demand down until price = ATC and **economic profit is zero**. Production is at less than minimum ATC (**excess capacity**), and consumers get variety.

## Oligopoly
A few large firms with barriers to entry. Firms are **interdependent**: each firm’s best choice depends on what rivals do. Game theory models this with a **payoff matrix**.

| Firm 1 \\ Firm 2 | Advertise | Don’t advertise |
| --- | --- | --- |
| **Advertise** | 5, 5 | 9, 2 |
| **Don’t advertise** | 2, 9 | 7, 7 |

- A **dominant strategy** is best whatever the rival does. Here, advertising pays more for each firm (9 > 7 and 5 > 2).
- A **Nash equilibrium** is a pair of choices where neither firm wants to change given the other. Here, (Advertise, Advertise) with payoffs **5, 5**.
- Both would be better off at (7, 7), but cooperation is hard to sustain. This is why **collusion** (a cartel) is tempting and unstable.
`,
        q: [
          mc('In the payoff matrix above, what is the Nash equilibrium?', 'Both firms advertise', 'Advertising is the dominant strategy for each firm, so neither wants to change.', [
            ['Neither firm advertises', 'This gives 7, 7, but each firm could do better by advertising.'],
            ['Firm 1 advertises and Firm 2 does not', 'Firm 2 would switch to advertising and raise its payoff from 2 to 5.'],
            ['There is no Nash equilibrium', 'A pair of strategies exists where neither firm wants to deviate.'],
          ]),
          mc('What happens to a monopolistically competitive firm’s economic profit in the long run?', 'It falls to zero as new firms enter', 'Entry shifts each firm’s demand curve until price equals ATC.', [
            ['It stays positive because products are differentiated', 'Free entry competes profits away even with differentiation.'],
            ['It rises because the firm has market power', 'Market power does not protect profit when entry is free.'],
            ['It becomes negative as firms exit', 'Firms exit only if they lose money; the long-run result is zero profit.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Imperfect competition',
    tasks: [
      mc('A monopolist faces P = 80 − 2Q, so MR = 80 − 4Q, and has MC = 20. What price does it charge?', '$50', 'MR = MC gives 80 − 4Q = 20, so Q = 15; then P = 80 − 30 = 50.', [
        ['$20', 'This is MC; the price is read from the demand curve.'],
        ['$30', 'This is not on the demand curve; at Q = 15 the price must be read from P = 80 − 2Q.'],
        ['$15', 'This is the quantity, not the price.'],
      ]),
      mc('Why is a monopolist’s marginal revenue less than its price?', 'It must lower the price on all units to sell one more', 'The price cut applies to every unit sold, so the added revenue is less than the new price.', [
        ['It faces a horizontal demand curve', 'A monopolist’s demand curve slopes downward.'],
        ['Its costs are rising', 'Costs affect MC, not the relationship between MR and price.'],
        ['It earns zero profit', 'Monopolists can earn positive profit.'],
      ]),
      mc('A natural monopoly exists when', 'economies of scale make one firm the lowest-cost producer for the whole market', 'Splitting the market among several firms would raise average cost.', [
        ['a firm owns a patent', 'A patent creates a legal monopoly, which is not necessarily natural.'],
        ['the government sets a price ceiling', 'This is a price control, not a source of monopoly.'],
        ['many firms sell identical products', 'This describes perfect competition.'],
      ]),
      mc('Compared with a perfectly competitive market, a monopoly produces', 'less output at a higher price, creating deadweight loss', 'It restricts output to raise price above marginal cost.', [
        ['more output at a lower price', 'This describes the competitive outcome.'],
        ['the same output at a higher price', 'Higher prices come from restricting quantity.'],
        ['less output at a lower price', 'Restricting output raises price.'],
      ]),
      mc('Two firms choose High or Low prices. Payoffs (Firm 1, Firm 2): High/High = 8, 8; High/Low = 3, 10; Low/High = 10, 3; Low/Low = 5, 5. What is the Nash equilibrium?', 'Both firms choose Low (5, 5)', 'Low is a dominant strategy for each firm (10 > 8 and 5 > 3).', [
        ['Both firms choose High (8, 8)', 'Each firm could gain by switching to Low, so this is not stable.'],
        ['Firm 1 High, Firm 2 Low (3, 10)', 'Firm 1 would switch to Low and raise its payoff from 3 to 5.'],
        ['Firm 1 Low, Firm 2 High (10, 3)', 'Firm 2 would switch to Low and raise its payoff from 3 to 5.'],
      ]),
      tf('In long-run equilibrium, a monopolistically competitive firm earns zero economic profit.', true, 'Free entry eliminates economic profit.', 'Correct. New firms enter until demand for each firm is just tangent to ATC.'),
    ],
  },
};
