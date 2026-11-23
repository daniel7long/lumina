import { mc, tf } from '../builder.js';

export default {
  summary: 'Describe reactions that do not go to completion, predict which way they shift, and apply the same ideas to dissolving solids.',
  modules: {
    13: {
      summary: 'K, Q, ICE tables and Le Châtelier’s principle.',
      sessions: [{
        t: 'Equilibrium constants and Le Châtelier’s principle',
        s: 'Writing K, comparing Q with K, solving with ICE tables and predicting shifts.',
        md: `
## Dynamic equilibrium

At **equilibrium**, the forward and reverse reactions occur at the same rate, so the concentrations stay constant. The reaction has not stopped; it is dynamic.

For aA + bB ⇌ cC + dD:

**K = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)**

Concentrations of **pure solids and liquids are left out**. For CaCO₃(s) ⇌ CaO(s) + CO₂(g), K = [CO₂].

- K ≫ 1: products favored at equilibrium. K ≪ 1: reactants favored.
- K depends **only on temperature**.
- Reversing a reaction gives 1/K. Doubling the coefficients squares K.

## Reaction quotient Q

Q has the same form as K but uses the **current** concentrations.

- **Q < K:** too many reactants, so the reaction proceeds **forward** (toward products).
- **Q > K:** the reaction proceeds in **reverse**.
- **Q = K:** at equilibrium.

## ICE tables

Set up **I**nitial, **C**hange and **E**quilibrium rows, with the change expressed in terms of x using the coefficients.

CO + H₂O ⇌ CO₂ + H₂, K = 4.0, starting with 1.0 M CO and 1.0 M H₂O. At equilibrium: [CO] = [H₂O] = 1.0 − x, and [CO₂] = [H₂] = x. K = x²/(1 − x)² = 4.0, so x/(1 − x) = 2.0 and x = **0.67 M**.

## Le Châtelier's principle

When a system at equilibrium is disturbed, it shifts to **partially oppose** the change.

- **Add reactant** (or remove product): shifts toward products.
- **Decrease the volume** (raise the pressure): shifts toward the side with **fewer moles of gas**.
- **Raise the temperature:** shifts in the **endothermic** direction, and K changes. For an exothermic reaction, K decreases when T is raised.
- A **catalyst** speeds up both directions equally; it does **not** change the position of equilibrium or K.
`,
        q: [
          mc('What is the equilibrium expression K for N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)?', 'K = [NH₃]² / ([N₂][H₂]³)', 'Products over reactants, each raised to its coefficient.', [
            ['K = [N₂][H₂]³ / [NH₃]²', 'The expression is inverted: products go in the numerator.'],
            ['K = [NH₃] / ([N₂][H₂])', 'The coefficients were left out of the exponents.'],
            ['K = 2[NH₃] / (3[H₂] + [N₂])', 'Coefficients are exponents, not multipliers, and the reactant terms are multiplied.'],
          ]),
          mc('For N₂ + 3 H₂ ⇌ 2 NH₃ (exothermic), what happens when the volume of the container is decreased at constant temperature?', 'The equilibrium shifts toward NH₃', 'The product side has 2 moles of gas against 4 on the reactant side, so higher pressure favors NH₃.', [
            ['The equilibrium shifts toward N₂ and H₂', 'The system relieves higher pressure by shifting toward fewer moles of gas, which is the product side.'],
            ['There is no change', 'The numbers of moles of gas differ on the two sides, so the position shifts.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Ksp, solubility and the common-ion effect.',
      sessions: [{
        t: 'Solubility equilibria',
        s: 'The solubility product, calculating solubility, predicting precipitation and the common-ion effect.',
        md: `
## The solubility product

For a sparingly soluble salt, the dissolved ions are in equilibrium with the solid. The equilibrium constant is the **solubility product, Ksp**.

- AgCl(s) ⇌ Ag⁺ + Cl⁻: **Ksp = [Ag⁺][Cl⁻]**
- CaF₂(s) ⇌ Ca²⁺ + 2 F⁻: **Ksp = [Ca²⁺][F⁻]²**

### Molar solubility (s)
For AgCl, [Ag⁺] = [Cl⁻] = s, so Ksp = s² and s = √(1.8 × 10⁻¹⁰) = 1.3 × 10⁻⁵ M.

For CaF₂, [Ca²⁺] = s and [F⁻] = 2s, so Ksp = s(2s)² = **4s³**. With Ksp = 3.2 × 10⁻¹¹, s³ = 8.0 × 10⁻¹², so s = **2.0 × 10⁻⁴ M**.

Compare Ksp values directly only for salts that give the same number of ions.

## Will a precipitate form?

Calculate **Q** from the ion concentrations **after mixing** (remember dilution).

- Q > Ksp: precipitate forms.
- Q < Ksp: no precipitate; the solution is unsaturated.

## Common-ion effect

Adding a solution that contains one of the ions **lowers** a salt's solubility (Le Châtelier's principle). In 0.10 M NaCl, the solubility of AgCl is s = Ksp/[Cl⁻] = (1.8 × 10⁻¹⁰)/0.10 = **1.8 × 10⁻⁹ M**, far less than in pure water.
`,
        q: [
          mc('CaF₂ has Ksp = 3.2 × 10⁻¹¹. What is its molar solubility?', '2.0 × 10⁻⁴ M', 'Ksp = 4s³, so s³ = 8.0 × 10⁻¹² and s = 2.0 × 10⁻⁴ M.', [
            ['5.7 × 10⁻⁶ M', 'The square root was taken, as for a 1 : 1 salt, but CaF₂ gives three ions.'],
            ['3.2 × 10⁻⁴ M', 'The factor of 4 was missed (cube root of Ksp).'],
          ]),
          tf('Adding NaCl to a saturated solution of AgCl decreases the solubility of AgCl.', true, 'The added Cl⁻ shifts the equilibrium toward solid AgCl.', 'The common ion Cl⁻ pushes AgCl(s) ⇌ Ag⁺ + Cl⁻ to the left, so less AgCl stays dissolved.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Equilibrium',
    tasks: [
      mc('What is the equilibrium expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?', 'K = [CO₂]', 'Pure solids are not included in K.', [
        ['K = [CaO][CO₂] / [CaCO₃]', 'Solids have constant "concentration" and are left out.'],
        ['K = [CaCO₃] / [CO₂]', 'The expression is inverted and includes a solid.'],
        ['K = 1', 'K is the concentration of CO₂ at equilibrium, not simply 1.'],
      ]),
      mc('For CO + H₂O ⇌ CO₂ + H₂ with K = 4.0, 1.0 M CO and 1.0 M H₂O are mixed. What is [CO₂] at equilibrium?', '0.67 M', 'K = x²/(1 − x)² = 4.0, so x/(1 − x) = 2.0 and x = 0.67 M.', [
        ['0.80 M', 'The square root of K was not taken (x/(1 − x) = 4).'],
        ['0.50 M', 'This is the answer if K were 1.'],
        ['1.0 M', 'This would mean all reactants were used up, which requires a very large K.'],
      ]),
      mc('For N₂O₄ ⇌ 2 NO₂, K = 0.20. A mixture has [N₂O₄] = 0.10 M and [NO₂] = 0.10 M. Which way does the reaction proceed?', 'Forward, toward NO₂', 'Q = (0.10)²/0.10 = 0.10, which is less than K, so more products must form.', [
        ['Reverse, toward N₂O₄', 'This would happen if Q were larger than K.'],
        ['Neither; it is at equilibrium', 'Q is 0.10, which does not equal K (0.20).'],
        ['It cannot be determined without a temperature', 'K is given, and K already includes the temperature.'],
      ]),
      tf('For an exothermic reaction, the equilibrium constant K increases when the temperature is raised.', false, 'K decreases for an exothermic reaction.', 'Correct. Raising the temperature shifts an exothermic reaction toward the reactants, so K becomes smaller.'),
      mc('100 mL of 2.0 × 10⁻⁵ M AgNO₃ is mixed with 100 mL of 2.0 × 10⁻⁵ M NaCl. Ksp of AgCl is 1.8 × 10⁻¹⁰. Does a precipitate form?', 'No, because Q = 1.0 × 10⁻¹⁰ is less than Ksp', 'After mixing, each ion is 1.0 × 10⁻⁵ M, so Q = (1.0 × 10⁻⁵)² = 1.0 × 10⁻¹⁰ < Ksp.', [
        ['Yes, because both ions are present', 'A precipitate forms only when Q exceeds Ksp.'],
        ['Yes, because Q = 4.0 × 10⁻¹⁰', 'This uses the concentrations before mixing; they are halved when the solutions are combined.'],
        ['No, because AgCl is soluble', 'AgCl is a sparingly soluble salt; whether it precipitates depends on Q and Ksp.'],
      ]),
      mc('What is the molar solubility of AgCl (Ksp = 1.8 × 10⁻¹⁰) in 0.10 M NaCl?', '1.8 × 10⁻⁹ M', 's = Ksp/[Cl⁻] = 1.8 × 10⁻¹⁰/0.10 = 1.8 × 10⁻⁹ M.', [
        ['1.3 × 10⁻⁵ M', 'This is the solubility in pure water, which ignores the common ion.'],
        ['1.8 × 10⁻¹¹ M', 'Ksp was multiplied by 0.10 instead of divided.'],
      ]),
      mc('A catalyst is added to a system at equilibrium. What happens to the equilibrium concentrations?', 'They do not change', 'A catalyst speeds up the forward and reverse reactions equally, so it only helps the system reach equilibrium faster.', [
        ['The products increase', 'A catalyst does not favor either direction.'],
        ['The reactants increase', 'A catalyst does not favor either direction.'],
        ['K increases', 'K depends only on temperature.'],
      ]),
    ],
  },
};
