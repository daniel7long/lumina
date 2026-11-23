import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow energy in chemical change: measure heat, predict energy changes from tables and bond energies, and combine reactions with Hess’s law.',
  modules: {
    11: {
      summary: 'Heat, enthalpy and calorimetry.',
      sessions: [{
        t: 'Energy changes and calorimetry',
        s: 'Exothermic and endothermic processes, heat capacity and calorimetry.',
        md: `
## System and surroundings

The **system** is the chemicals you study; the **surroundings** are everything else. Energy transferred as heat is **q**.

- **Exothermic:** the system releases heat to the surroundings. The surroundings get warmer. **ΔH < 0.**
- **Endothermic:** the system absorbs heat from the surroundings. The surroundings get colder (a cold pack). **ΔH > 0.**

On an energy diagram, an exothermic reaction ends lower in energy than it started; an endothermic reaction ends higher. The difference between the reactants and the top of the "hill" is the activation energy.

**Enthalpy change (ΔH)** is the heat transferred at constant pressure. It is usually given **per mole of reaction as written**: for 2 H₂ + O₂ → 2 H₂O, ΔH = −572 kJ, so for 1 mol of water formed it is −286 kJ. Reversing a reaction changes the sign of ΔH; multiplying the equation multiplies ΔH.

## Heat capacity and calorimetry

When heat changes a temperature:

**q = mcΔT**

where m is the mass, c is the **specific heat capacity** (4.18 J/g·°C for liquid water) and ΔT = T_final − T_initial.

In **calorimetry** the heat gained by the surroundings (usually water) is equal in size to the heat lost by the system, and the calorimeter is assumed not to lose heat:

q_system = −q_water

Then **ΔH per mole = q_system ÷ moles**.

Example: 100.0 g of water warms from 20.0 °C to 30.0 °C: q = 100.0 × 4.18 × 10.0 = **4180 J**.
`,
        q: [
          mc('How much heat is needed to warm 100.0 g of water from 20.0 °C to 30.0 °C? (c = 4.18 J/g·°C)', '4180 J', 'q = mcΔT = 100.0 × 4.18 × 10.0 = 4180 J.', [
            ['418 J', 'The temperature change was left out of the calculation.'],
            ['12 540 J', 'The final temperature (30.0 °C) was used instead of the change in temperature.'],
          ]),
          tf('A reaction that makes its surroundings feel colder is endothermic.', true, 'The reaction absorbs heat from the surroundings, so ΔH is positive.', 'Heat flows from the surroundings into the system, which cools the surroundings; this is the definition of an endothermic process.'),
        ],
      }],
    },
    12: {
      summary: 'Hess’s law, enthalpies of formation and bond energies.',
      sessions: [{
        t: 'Hess’s law, formation enthalpies and bond energies',
        s: 'Three ways to find ΔH without measuring it directly.',
        md: `
## Hess's law

Enthalpy is a **state function**, so the total ΔH of a reaction is the same whichever route it takes. If a reaction can be written as the sum of other steps, add their ΔH values.

Example: find ΔH for C(s) + ½ O₂(g) → CO(g) from

1. C(s) + O₂(g) → CO₂(g) ΔH = −393.5 kJ
2. CO(g) + ½ O₂(g) → CO₂(g) ΔH = −283.0 kJ

Keep (1) and reverse (2): CO₂ → CO + ½ O₂ with ΔH = +283.0 kJ. Adding gives ΔH = −393.5 + 283.0 = **−110.5 kJ**.

## Enthalpies of formation

The **standard enthalpy of formation** (ΔH°f) is the enthalpy change to form 1 mol of a compound from its elements in their standard states. ΔH°f of an element in its standard state is **zero**.

**ΔH°rxn = Σ n ΔH°f(products) − Σ n ΔH°f(reactants)**

For CH₄ + 2 O₂ → CO₂ + 2 H₂O(l), using −74.8 (CH₄), −393.5 (CO₂) and −285.8 kJ/mol (H₂O): ΔH° = [−393.5 + 2(−285.8)] − [−74.8] = **−890.3 kJ**.

## Bond energies

Breaking bonds **absorbs** energy; forming bonds **releases** it:

**ΔH ≈ Σ (bonds broken) − Σ (bonds formed)**

H₂ + Cl₂ → 2 HCl: bonds broken are H–H (436) and Cl–Cl (243); bonds formed are 2 × H–Cl (431). ΔH = 679 − 862 = **−183 kJ**. Bond-energy values are averages, so the answer is only an estimate.
`,
        q: [
          mc('Using the two reactions in the text, what is ΔH for C(s) + ½ O₂(g) → CO(g)?', '−110.5 kJ', 'Add (1) to the reverse of (2): −393.5 + 283.0 = −110.5 kJ.', [
            ['+110.5 kJ', 'The sign is wrong; forming CO from the elements releases heat.'],
            ['−676.5 kJ', 'The two ΔH values were added without reversing the second reaction.'],
            ['+676.5 kJ', 'The values were added without reversing, and the sign was changed.'],
          ]),
          mc('Use the bond energies H–H 436, Cl–Cl 243 and H–Cl 431 kJ/mol to estimate ΔH for H₂ + Cl₂ → 2 HCl.', '−183 kJ', 'Bonds broken: 436 + 243 = 679 kJ. Bonds formed: 2 × 431 = 862 kJ. ΔH = 679 − 862 = −183 kJ.', [
            ['+183 kJ', 'The subtraction was done in the wrong order (formed − broken).'],
            ['−862 kJ', 'This counts only the energy released in forming bonds and ignores the energy needed to break the old ones.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Thermochemistry',
    tasks: [
      mc('When 0.0100 mol of a solid dissolves in 50.0 g of water, the water temperature rises by 5.0 °C. What is ΔH of dissolving, per mole? (c = 4.18 J/g·°C; ignore the heat capacity of the solid.)', '−104.5 kJ/mol', 'q(water) = 50.0 × 4.18 × 5.0 = 1045 J, so the system released 1045 J. Per mole, that is −1045 J/0.0100 mol = −104 500 J/mol = −104.5 kJ/mol.', [
        ['+104.5 kJ/mol', 'The sign is wrong: the water got warmer, so the process released heat and is exothermic.'],
        ['−1.05 kJ/mol', 'The heat was not divided by the number of moles.'],
        ['−10.5 kJ/mol', 'The heat in kJ was divided by 0.100 mol instead of 0.0100 mol.'],
      ]),
      mc('Using ΔH°f values of −74.8 (CH₄), −393.5 (CO₂) and −285.8 kJ/mol (H₂O(l)), what is ΔH° for CH₄ + 2 O₂ → CO₂ + 2 H₂O(l)?', '−890.3 kJ', '[−393.5 + 2(−285.8)] − [−74.8] = −965.1 + 74.8 = −890.3 kJ.', [
        ['−604.5 kJ', 'The coefficient 2 on H₂O was left out.'],
        ['+890.3 kJ', 'The sign is reversed; combustion releases heat.'],
        ['−1040 kJ', 'The ΔH°f of methane was added instead of subtracted.'],
      ]),
      mc('For 2 H₂(g) + O₂(g) → 2 H₂O(l), ΔH = −572 kJ. What is ΔH for 2 H₂O(l) → 2 H₂(g) + O₂(g)?', '+572 kJ', 'Reversing a reaction reverses the sign of ΔH.', [
        ['−572 kJ', 'The reaction was reversed, so the sign must change.'],
        ['+286 kJ', 'This is the value for one mole of water, but the equation shows two.'],
        ['−286 kJ', 'This is neither the reversed nor the halved sign for the equation as written.'],
      ]),
      tf('On an energy diagram for an endothermic reaction, the products are higher in energy than the reactants.', true, 'The system absorbs energy, so the products have more energy than the reactants.', 'ΔH is positive for an endothermic reaction, which means the products are at a higher energy than the reactants.'),
      mc('A 50.0 g piece of metal at 100.0 °C is dropped into 100.0 g of water at 20.0 °C. The final temperature is 22.0 °C. What is the specific heat of the metal? (c of water = 4.18 J/g·°C)', '0.214 J/g·°C', 'The water gains 100.0 × 4.18 × 2.0 = 836 J. The metal loses 836 J = 50.0 × c × 78.0, so c = 0.214 J/g·°C.', [
        ['8.36 J/g·°C', 'The water’s temperature change (2.0 °C) was used for the metal.'],
        ['10.7 J/g·°C', 'The mass of the metal was left out of the calculation.'],
        ['4.18 J/g·°C', 'This is the specific heat of water, not of the metal.'],
      ]),
      mc('Use the bond energies H–H 436, O=O 498 and O–H 463 kJ/mol to estimate ΔH for 2 H₂ + O₂ → 2 H₂O.', '−482 kJ', 'Bonds broken: 2(436) + 498 = 1370 kJ. Bonds formed: 4(463) = 1852 kJ. ΔH = 1370 − 1852 = −482 kJ.', [
        ['+482 kJ', 'The subtraction was done in the wrong order.'],
        ['−1370 kJ', 'This counts only the energy absorbed in breaking bonds and ignores the energy released in forming new ones.'],
        ['−926 kJ', 'This is half of the energy released in forming bonds (1852/2) and ignores the bonds broken.'],
      ]),
      tf('The standard enthalpy of formation of O₂(g) is zero.', true, 'O₂ is an element in its standard state.', 'By definition, the enthalpy of formation of an element in its standard state is zero, because no change is needed to form it from itself.'),
    ],
  },
};
