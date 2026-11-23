import { mc, tf } from '../builder.js';

export default {
  summary: 'Classify what happens when substances react, write the equations that describe it, and calculate how much reacts and forms.',
  modules: {
    7: {
      summary: 'Reaction types and net ionic equations.',
      sessions: [{
        t: 'Reaction types and net ionic equations',
        s: 'Precipitation, acid–base and redox reactions, and writing net ionic equations.',
        md: `
## Three common reaction types

- **Precipitation:** two aqueous solutions form an insoluble solid. Example: Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s) + 2 KNO₃(aq).
- **Acid–base:** an acid donates H⁺ to a base, usually forming water and a salt. Example: HCl + NaOH → H₂O + NaCl.
- **Redox:** electrons are transferred, so oxidation numbers change. **Oxidation** is loss of electrons; **reduction** is gain (remember "OIL RIG"). The oxidized species is the **reducing agent**.

## Solubility rules (key ones)

Soluble: all salts of Na⁺, K⁺, NH₄⁺ and NO₃⁻; most chlorides, bromides and iodides (except those of Ag⁺, Pb²⁺, Hg₂²⁺); most sulfates (except those of Ba²⁺, Pb²⁺ and Sr²⁺).
Mostly insoluble: carbonates, phosphates, hydroxides and sulfides (except with Group 1 cations and NH₄⁺).

## Net ionic equations

1. Write the balanced molecular equation with states.
2. Split strong electrolytes (soluble ionic compounds, strong acids and bases) into ions.
3. Cancel the **spectator ions** that appear unchanged on both sides.
4. Check that both **atoms and charge** balance.

AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq) becomes

**Ag⁺(aq) + Cl⁻(aq) → AgCl(s)**

Na⁺ and NO₃⁻ are spectators. Weak acids, weak bases, solids, liquids and gases are **not** split.

## Oxidation numbers

Rules: elements = 0; monatomic ions = their charge; O is usually −2; H is usually +1; the sum equals the overall charge. In KMnO₄: +1 + x + 4(−2) = 0, so Mn is **+7**.
`,
        q: [
          mc('In the reaction AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq), which ions are spectators?', 'Na⁺ and NO₃⁻', 'They appear unchanged as aqueous ions on both sides.', [
            ['Ag⁺ and Cl⁻', 'These ions combine to form the solid AgCl and are part of the net ionic equation.'],
            ['Ag⁺ and NO₃⁻', 'Ag⁺ reacts to form the precipitate.'],
          ]),
          mc('In Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which species is oxidized?', 'Zn', 'Zinc loses two electrons (0 → +2), so it is oxidized and acts as the reducing agent.', [
            ['Cu²⁺', 'Copper(II) gains electrons (+2 → 0), so it is reduced.'],
            ['Cu', 'Copper metal is a product, formed by reduction.'],
            ['Zn²⁺', 'Zn²⁺ is the product of the oxidation, not the species that is oxidized.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Limiting reactants, yield, molarity and titration.',
      sessions: [{
        t: 'Stoichiometry and titration',
        s: 'Mole-ratio calculations, limiting reactants, percent yield, solutions and titration.',
        md: `
## The mole-ratio method

The coefficients of a balanced equation give **mole** ratios, not mass ratios.

grams of A → moles of A → (mole ratio) → moles of B → grams of B

Example: 2 H₂ + O₂ → 2 H₂O. From 4.0 g H₂ (2.0 mol, molar mass 2.0 g/mol), the ratio 2 : 2 gives 2.0 mol H₂O = 2.0 × 18 = **36 g**.

## Limiting reactant and percent yield

The **limiting reactant** is the one that runs out first. For each reactant, calculate the amount of product it could form; the smaller amount is the **theoretical yield**.

**percent yield = (actual yield ÷ theoretical yield) × 100**

## Molarity and dilution

**Molarity (M) = moles of solute ÷ liters of solution.**
11.7 g NaCl (58.5 g/mol) is 0.200 mol; in 0.500 L this is **0.400 M**.

When a solution is diluted, the moles of solute do not change: **M₁V₁ = M₂V₂**.

## Titration

In a titration, a solution of known concentration (the titrant) is added until the reaction is complete (the **equivalence point**). Use the mole ratio from the balanced equation:

For HCl + NaOH → NaCl + H₂O, 20.0 mL of 0.100 M NaOH contains 0.00200 mol, which neutralizes 0.00200 mol HCl. If that HCl was in 25.0 mL, its concentration was 0.00200/0.0250 = **0.0800 M**.
`,
        q: [
          mc('N₂ + 3 H₂ → 2 NH₃. A mixture contains 1.0 mol N₂ and 2.0 mol H₂. Which is the limiting reactant?', 'H₂', 'The 1.0 mol of N₂ would need 3.0 mol H₂, but only 2.0 mol is present, so H₂ runs out first.', [
            ['N₂', 'There is more N₂ than H₂ can react with, so N₂ is in excess.'],
            ['NH₃', 'NH₃ is the product, not a reactant.'],
            ['Neither; both are used up', 'They would both be used up only if H₂ were present at three times the moles of N₂.'],
          ]),
          mc('A 25.0 mL sample of HCl is neutralized by 20.0 mL of 0.100 M NaOH. What is the concentration of the HCl?', '0.0800 M', 'n(NaOH) = 0.0200 L × 0.100 M = 0.00200 mol = n(HCl), and 0.00200 mol/0.0250 L = 0.0800 M.', [
            ['0.125 M', 'The volume ratio was inverted.'],
            ['0.100 M', 'The volumes were ignored; the HCl sample is larger than the NaOH volume, so it is more dilute.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Chemical reactions',
    tasks: [
      mc('A reaction has a theoretical yield of 25.0 g, and 20.0 g of product is obtained. What is the percent yield?', '80.0 %', '20.0/25.0 × 100 = 80.0 %.', [
        ['125 %', 'The ratio was inverted (theoretical/actual).'],
        ['20.0 %', 'This is the actual yield in grams used as a percentage.'],
        ['5.0 %', 'This is the difference of the yields (25.0 − 20.0), not a percentage.'],
      ]),
      mc('What is the molarity of a solution made by dissolving 11.7 g of NaCl (58.5 g/mol) in enough water to make 500 mL of solution?', '0.400 M', '11.7/58.5 = 0.200 mol, and 0.200 mol/0.500 L = 0.400 M.', [
        ['0.200 M', 'This is the number of moles; it was not divided by the volume in liters.'],
        ['23.4 M', 'The grams were divided by the volume instead of the moles.'],
        ['0.100 M', 'The volume was taken as 2.0 L.'],
      ]),
      mc('50.0 mL of 2.00 M KNO₃ is diluted with water to a total volume of 250.0 mL. What is the new concentration?', '0.400 M', 'M₂ = M₁V₁/V₂ = (2.00)(50.0)/250.0 = 0.400 M.', [
        ['10.0 M', 'The volume ratio was inverted; dilution lowers the concentration.'],
        ['0.0400 M', 'The final volume was entered as 2500 mL instead of 250.0 mL.'],
        ['2.00 M', 'Adding water changes the concentration, even though the moles of solute stay the same.'],
      ]),
      mc('2 H₂ + O₂ → 2 H₂O. How many grams of water form from 4.0 g of H₂ with excess O₂? (H₂ = 2.0 g/mol, H₂O = 18 g/mol)', '36 g', '4.0 g is 2.0 mol H₂, which gives 2.0 mol H₂O = 36 g.', [
        ['18 g', 'This is the mass of 1.0 mol of water; the moles of H₂ were not computed.'],
        ['72 g', 'The mass of H₂ (4.0) was used as moles.'],
        ['4.0 g', 'The water contains oxygen from the O₂ as well, so it has more mass than the hydrogen alone.'],
      ]),
      mc('What is the oxidation number of manganese in KMnO₄?', '+7', 'K is +1 and each O is −2, so x + 1 − 8 = 0 and x = +7.', [
        ['+4', 'This is the oxidation number of manganese in MnO₂.'],
        ['+2', 'This is the oxidation number of manganese in Mn²⁺.'],
        ['−1', 'The sum of the oxidation numbers must be zero for a neutral compound.'],
      ]),
      mc('Which pair of aqueous solutions forms a precipitate when mixed?', 'Pb(NO₃)₂ and KI', 'Lead(II) iodide is insoluble, so PbI₂ precipitates as a yellow solid.', [
        ['NaCl and KNO₃', 'All the possible products are soluble salts, so there is no reaction.'],
        ['HNO₃ and NaOH', 'This is an acid–base reaction that forms water and soluble NaNO₃.'],
        ['NH₄Cl and NaNO₃', 'All the possible products are soluble salts.'],
      ]),
      tf('In a redox reaction, the number of electrons lost by the species that is oxidized equals the number gained by the species that is reduced.', true, 'Electrons are not created or destroyed, so the transfer must balance.', 'Electrons lost in oxidation are exactly the electrons gained in reduction, so charge is conserved.'),
    ],
  },
};
