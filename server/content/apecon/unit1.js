import { mc, tf } from '../builder.js';

export default {
  summary: 'Start with the problem every economy faces, scarcity, and the tools economists use to think about trade-offs and the gains from trade.',
  modules: {
    1: {
      summary: 'Scarcity, opportunity cost and the production possibilities curve.',
      sessions: [{
        t: 'Scarcity and opportunity cost',
        s: 'Why choices cost something, and how a production possibilities curve shows it.',
        md: `
## Scarcity and choice

**Scarcity** means wants are unlimited but resources (land, labor, capital, entrepreneurship) are limited. So every choice involves a trade-off.

**Opportunity cost** is the value of the **next-best alternative** you give up. If a student spends 3 hours studying instead of working at $15 an hour, the opportunity cost of studying is **$45**.

## The production possibilities curve (PPC)
A PPC shows the maximum combinations of two goods an economy can produce with its resources and technology.

- **On the curve:** efficient use of resources.
- **Inside the curve:** resources are unemployed or misused.
- **Outside the curve:** not attainable with current resources.
- **Shifts outward:** more resources or better technology (economic growth).

### Calculating opportunity cost
If an economy can make 40 phones or 20 laptops (a straight-line PPC), then giving up 40 phones buys 20 laptops, so **1 laptop costs 2 phones**.

A **bowed-out** PPC shows **increasing opportunity cost**: resources are not equally good at making both goods.
`,
        q: [
          mc('A student spends 3 hours studying instead of working at $15 an hour. What is the opportunity cost of studying?', '$45, the wages given up', 'Opportunity cost is the value of the next-best alternative given up: 3 × $15.', [
            ['$0, because studying is free', 'Time has value; the forgone wage is a real cost even if no money is paid.'],
            ['$15', 'This is the hourly wage; the student gave up 3 hours.'],
            ['$135', 'This multiplies by 9 rather than 3; check 3 hours × $15.'],
          ]),
          mc('An economy is producing at a point inside its production possibilities curve. What does this mean?', 'Some resources are unemployed or used inefficiently', 'Points inside the curve are attainable but waste resources.', [
            ['The economy is using resources efficiently', 'Efficiency means being on the curve.'],
            ['The combination is not attainable', 'Points outside the curve are the unattainable ones.'],
            ['The economy has experienced growth', 'Growth shifts the curve outward; it does not place the economy inside it.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Comparative advantage and gains from trade.',
      sessions: [{
        t: 'Comparative advantage and the gains from trade',
        s: 'Why specialization helps even the more productive country.',
        md: `
## Absolute and comparative advantage

- **Absolute advantage:** being able to produce more of a good with the same resources.
- **Comparative advantage:** being able to produce a good at a **lower opportunity cost**.

Trade is based on **comparative** advantage.

### Example
In one hour, Country A can make 6 loaves of bread **or** 3 cheeses. Country B can make 2 loaves **or** 2 cheeses.

| | Opportunity cost of 1 cheese | Opportunity cost of 1 bread |
| --- | --- | --- |
| A | 2 bread | 0.5 cheese |
| B | 1 bread | 1 cheese |

A has an absolute advantage in both goods, yet B has a **comparative advantage in cheese** (lower cost: 1 bread versus 2) and A has it in **bread**.

### Terms of trade
If each country specializes, a price between the two opportunity costs benefits both. Here, 1 cheese should trade for **between 1 and 2 bread**, such as 1.5 bread. At that price, each side gets the good for less than it would cost to make at home.
`,
        q: [
          mc('In the example above, which country should specialize in cheese?', 'Country B, because it has the lower opportunity cost of cheese', 'B gives up 1 bread per cheese, A gives up 2 bread.', [
            ['Country A, because it can make more cheese per hour', 'This is absolute advantage, which does not decide who should specialize.'],
            ['Neither; A should make both goods', 'Both countries gain from specialization and trade.'],
            ['Country A, because its opportunity cost of bread is higher', 'A’s opportunity cost of bread is lower (0.5 cheese), so A should make bread.'],
          ]),
          mc('Which price of 1 cheese would make both countries better off?', '1.5 bread', 'It lies between B’s cost (1 bread) and A’s cost (2 bread).', [
            ['0.5 bread', 'B would receive less than it costs to make cheese at home (1 bread).'],
            ['3 bread', 'A would pay more than the 2 bread it costs to make cheese at home.'],
            ['2 bread', 'At exactly A’s cost, A gains nothing from trade.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Basic economic concepts',
    tasks: [
      mc('Scarcity exists because', 'human wants are unlimited while resources are limited', 'This is the definition of scarcity.', [
        ['poor countries have fewer goods', 'Scarcity affects every economy, rich or poor.'],
        ['governments restrict production', 'Scarcity would exist even without government.'],
        ['money is in short supply', 'Scarcity is about resources, not only money.'],
      ]),
      mc('In one hour, Mia can make 10 pizzas or 30 salads. What is the opportunity cost of one pizza?', '3 salads', 'Giving up 30 salads buys 10 pizzas, so 1 pizza costs 3 salads.', [
        ['10 salads', 'This is the number of pizzas, not the trade-off per pizza.'],
        ['1/3 salad', 'This is the opportunity cost of one salad in pizzas, inverted.'],
        ['30 salads', 'This is the cost of all 10 pizzas.'],
      ]),
      mc('A combination of goods lying outside an economy’s production possibilities curve is', 'unattainable with current resources and technology', 'The curve is the boundary of what can be produced.', [
        ['efficient', 'Efficient points are on the curve.'],
        ['attainable only with unemployment', 'Unemployment puts an economy inside the curve.'],
        ['the result of increasing opportunity costs', 'Increasing costs describe the shape of the curve, not points beyond it.'],
      ]),
      mc('Which event would shift an economy’s production possibilities curve outward?', 'A technological advance', 'Better technology increases the maximum output.', [
        ['A recession', 'A recession moves the economy inside the curve; it does not shift the curve.'],
        ['A shift of resources from one good to another', 'This is a movement along the curve.'],
        ['A rise in unemployment', 'This also moves the economy inside the curve.'],
      ]),
      mc('Country X can make 10 cars or 20 tractors per day; Country Y can make 4 cars or 12 tractors. Which statement is correct?', 'X has a comparative advantage in cars', 'X gives up 2 tractors per car; Y gives up 3 tractors per car.', [
        ['Y has a comparative advantage in cars', 'Y’s opportunity cost of a car (3 tractors) is higher.'],
        ['X has a comparative advantage in tractors', 'X gives up 0.5 car per tractor and Y gives up 0.33, so Y is better at tractors.'],
        ['Neither country has a comparative advantage', 'Opportunity costs differ, so each country has one.'],
      ]),
      tf('A country with an absolute advantage in producing every good cannot gain from trade.', false, 'Gains from trade depend on comparative, not absolute, advantage.', 'Correct. Even the more productive country gains by specializing where its opportunity cost is lower.'),
    ],
  },
};
