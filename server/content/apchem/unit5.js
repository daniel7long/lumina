import { mc, tf } from '../builder.js';

export default {
  summary: 'Measure how fast reactions go, express it in a rate law, and explain rate changes with collisions and mechanisms.',
  modules: {
    9: {
      summary: 'Rate laws from data, and first-order reactions.',
      sessions: [{
        t: 'Rates, rate laws and half-life',
        s: 'Finding reaction orders from initial-rate data, the units of k, and first-order decay.',
        md: `
## Reaction rate

The **rate** of a reaction is the change in concentration of a reactant or product per unit time, usually in M/s. It depends on the concentrations of the reactants, the temperature and any catalyst.

## Rate laws

A **rate law** relates rate to concentrations:

**rate = k[A]ˣ[B]ʸ**

The exponents x and y are the **orders** and must be found **from experiments**, not from the coefficients in the balanced equation. The overall order is x + y.

### Method of initial rates
Compare two experiments that change only one concentration:

| Experiment | [A] (M) | [B] (M) | Rate (M/s) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻³ |
| 2 | 0.20 | 0.10 | 4.0 × 10⁻³ |
| 3 | 0.10 | 0.20 | 8.0 × 10⁻³ |

Doubling [A] doubles the rate, so the reaction is **first order** in A. Doubling [B] quadruples the rate, so it is **second order** in B. The rate law is rate = k[A][B]². Using experiment 1, k = 2.0 × 10⁻³/(0.10 × 0.10²) = **2.0 M⁻²·s⁻¹**.

The **units of k** depend on the overall order: s⁻¹ for first order, M⁻¹·s⁻¹ for second order, M⁻²·s⁻¹ for third order.

## First-order reactions

For a first-order reaction, ln[A] = ln[A]₀ − kt, so a graph of ln[A] against time is a straight line with slope −k. The **half-life** is constant:

**t½ = 0.693/k**

After each half-life the concentration is halved. With a half-life of 10 s, 0.80 M becomes 0.40 M after 10 s, 0.20 M after 20 s and 0.10 M after 30 s.
`,
        q: [
          mc('Using the table above, what are the orders with respect to A and B?', 'First order in A and second order in B', 'The rate doubles when [A] doubles (order 1) and quadruples when [B] doubles (order 2).', [
            ['Second order in A and first order in B', 'The orders were assigned to the wrong reactants.'],
            ['First order in both A and B', 'Doubling [B] quadruples the rate, which shows second order, not first.'],
            ['Zero order in B', 'The rate changes when [B] changes, so the order is not zero.'],
          ]),
          mc('A first-order reaction has a half-life of 10 s. If [A]₀ = 0.80 M, what is [A] after 30 s?', '0.10 M', '30 s is three half-lives: 0.80 → 0.40 → 0.20 → 0.10 M.', [
            ['0.20 M', 'This is the concentration after two half-lives (20 s).'],
            ['0.40 M', 'This is the concentration after one half-life (10 s).'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Collision theory, mechanisms and catalysts.',
      sessions: [{
        t: 'Collision theory, mechanisms and catalysis',
        s: 'Why temperature and catalysts change rates, and how a mechanism leads to a rate law.',
        md: `
## Collision theory

For molecules to react they must **collide** with enough energy and the **right orientation**. The minimum energy needed is the **activation energy (Eₐ)**.

- **Higher concentration** means more collisions per second.
- **Higher temperature** raises the **fraction of collisions that have at least Eₐ** (the collision frequency also increases, but this is a smaller effect). This is why k increases with temperature.
- A **catalyst** provides a different pathway with a **lower Eₐ**. It speeds up the reaction without being consumed, and it does **not** change ΔH or the position of equilibrium.

## Reaction mechanisms

Most reactions happen in a series of **elementary steps**. For an elementary step the rate law **does** follow its coefficients (a bimolecular step has rate = k[A][B]).

- The **slowest step** is the **rate-determining step**, and it sets the overall rate law.
- An **intermediate** is formed in one step and used in a later step. It does not appear in the overall equation.
- A **catalyst** is used in one step and regenerated in a later step.

Example for NO₂ + CO → NO + CO₂:

1. NO₂ + NO₂ → NO₃ + NO (slow)
2. NO₃ + CO → NO₂ + CO₂ (fast)

The slow step controls the rate, so **rate = k[NO₂]²**. NO₃ is an intermediate. CO appears in the equation but not in the rate law because it reacts after the slow step.
`,
        q: [
          mc('For the two-step mechanism above (slow step: NO₂ + NO₂ → NO₃ + NO), what is the rate law?', 'rate = k[NO₂]²', 'The rate is set by the slow step, an elementary step with two NO₂ molecules.', [
            ['rate = k[NO₂][CO]', 'This follows the overall equation, but CO reacts only in the fast step.'],
            ['rate = k[NO₃][CO]', 'NO₃ is an intermediate, so it cannot appear in the rate law for the overall reaction.'],
            ['rate = k[NO₂]', 'The slow step involves two NO₂ molecules, so the order is 2.'],
          ]),
          tf('A catalyst makes a reaction faster by changing its enthalpy change, ΔH.', false, 'A catalyst does not change ΔH.', 'Correct. A catalyst lowers the activation energy, but the reactants and products (and so ΔH) are unchanged.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Kinetics',
    tasks: [
      mc('Using the data table above, what is the value of k, with correct units?', '2.0 M⁻²·s⁻¹', 'rate = k[A][B]², so k = 2.0 × 10⁻³/(0.10 × 0.10²) = 2.0 M⁻²·s⁻¹.', [
        ['2.0 s⁻¹', 'Units of s⁻¹ apply only to a first-order reaction; this reaction is third order overall.'],
        ['0.020 M⁻²·s⁻¹', 'The rate was divided by [A] only; the [B]² factor was left out.'],
        ['0.20 M⁻¹·s⁻¹', '[B] was not squared, which gives the wrong value and the units of a second-order reaction.'],
      ]),
      mc('A first-order reaction has k = 0.0231 min⁻¹. What is its half-life?', '30.0 min', 't½ = 0.693/k = 0.693/0.0231 = 30.0 min.', [
        ['43 min', 'This is 1/k, which is the mean lifetime, not the half-life.'],
        ['0.016 min', 'This multiplies k by 0.693 instead of dividing.'],
        ['0.023 min', 'This is the numerical value of k itself; the half-life is 0.693 divided by k.'],
      ]),
      mc('What are the units of the rate constant for a second-order reaction (concentration in M)?', 'M⁻¹·s⁻¹', 'rate (M/s) = k × M², so k has units of (M/s)/M² = M⁻¹·s⁻¹.', [
        ['s⁻¹', 'These are the units for first order.'],
        ['M·s⁻¹', 'These are the units of the rate itself, and of k for a zero-order reaction.'],
        ['M⁻²·s⁻¹', 'These are the units for a third-order reaction.'],
      ]),
      tf('Increasing the temperature of a reaction increases the value of its rate constant k.', true, 'More molecules have energy of at least Eₐ, so the rate constant is larger.', 'A larger fraction of collisions exceeds the activation energy at higher temperature, so k increases.'),
      mc('A proposed mechanism: (1) H₂O₂ + I⁻ → H₂O + IO⁻ (slow); (2) H₂O₂ + IO⁻ → H₂O + O₂ + I⁻ (fast). Which species is a catalyst?', 'I⁻', 'I⁻ is consumed in step 1 and regenerated in step 2, and it does not appear in the overall equation.', [
        ['IO⁻', 'IO⁻ is formed in step 1 and consumed in step 2, so it is an intermediate.'],
        ['H₂O₂', 'H₂O₂ is a reactant and is used up.'],
        ['H₂O', 'H₂O is a product.'],
      ]),
      mc('Why does a 10 °C increase in temperature typically about double the rate of a reaction?', 'A much larger fraction of collisions have at least the activation energy', 'The fraction of molecules with energy ≥ Eₐ grows rapidly with temperature.', [
        ['The activation energy decreases', 'Raising the temperature does not change Eₐ; only a catalyst does.'],
        ['The molecules move twice as fast, so there are twice as many collisions', 'Speed rises only slightly with temperature, and the collision rate rises by only a few percent.'],
        ['ΔH becomes more negative', 'Temperature does not change ΔH enough to affect the rate this way.'],
      ]),
      mc('In an energy diagram, what is the effect of adding a catalyst?', 'The activation energy is lowered and ΔH is unchanged', 'The catalyst opens a pathway with a lower barrier but does not change the energy of reactants and products.', [
        ['The activation energy is raised', 'A catalyst lowers the barrier, which speeds up the reaction.'],
        ['ΔH becomes more negative', 'The catalyst does not change the overall energy released or absorbed.'],
        ['The reactants have less energy', 'The energies of reactants and products are fixed by the substances themselves.'],
      ]),
    ],
  },
};
