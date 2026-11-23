import { mc, tf } from '../builder.js';

export default {
  summary: 'Decide which changes happen on their own, link free energy to equilibrium, and use electron transfer to do electrical work.',
  modules: {
    17: {
      summary: 'Entropy, Gibbs free energy and spontaneity.',
      sessions: [{
        t: 'Entropy and Gibbs free energy',
        s: 'Predicting the sign of ΔS, using ΔG = ΔH − TΔS, and relating ΔG° to K.',
        md: `
## Entropy

**Entropy (S)** measures the number of ways energy and matter can be arranged: the dispersal of energy. The second law says that the total entropy of the universe increases in any spontaneous process.

ΔS is usually **positive** when
- a solid melts or a liquid vaporizes (gas ≫ liquid > solid),
- a solid or liquid dissolves (usually),
- a reaction produces **more moles of gas**,
- the temperature increases.

For 2 NH₃(g) → N₂(g) + 3 H₂(g), the moles of gas go from 2 to 4, so ΔS > 0. Crystallizing a salt from solution has ΔS < 0.

## Gibbs free energy

**ΔG = ΔH − TΔS**

A process is **thermodynamically favorable (spontaneous)** when **ΔG < 0**. T is in kelvin, and ΔH is usually in kJ while ΔS is in J/K, so **convert units**.

| ΔH | ΔS | Spontaneous? |
|---|---|---|
| − | + | at all temperatures |
| + | − | never |
| − | − | at low T |
| + | + | at high T |

Example: ΔH = +30 kJ and ΔS = +100 J/K = 0.100 kJ/K. At 400 K, ΔG = 30 − 400(0.100) = **−10 kJ**, so the reaction is spontaneous. It becomes spontaneous above T = ΔH/ΔS = 30/0.100 = **300 K**.

Spontaneous does not mean fast: a thermodynamically favorable reaction may be very slow.

## ΔG° and equilibrium

**ΔG° = −RT ln K**

- K > 1 ⇔ ΔG° < 0 (products favored)
- K = 1 ⇔ ΔG° = 0
- K < 1 ⇔ ΔG° > 0 (reactants favored)
`,
        q: [
          mc('A reaction has ΔH = +30 kJ/mol and ΔS = +100 J/(mol·K). What is ΔG at 400 K?', '−10 kJ/mol', 'ΔG = 30 − 400 × 0.100 = −10 kJ/mol; ΔS was converted to kJ.', [
            ['−39 970 kJ/mol', 'ΔS was left in J/K while ΔH was in kJ.'],
            ['+70 kJ/mol', 'The TΔS term was added instead of subtracted.'],
          ]),
          mc('Which reaction has a positive ΔS?', '2 NH₃(g) → N₂(g) + 3 H₂(g)', 'The number of moles of gas increases from 2 to 4.', [
            ['N₂(g) + 3 H₂(g) → 2 NH₃(g)', 'The moles of gas decrease from 4 to 2, so ΔS is negative.'],
            ['H₂O(g) → H₂O(l)', 'A gas becoming a liquid loses entropy.'],
            ['CaO(s) + CO₂(g) → CaCO₃(s)', 'A gas is converted to a solid, which lowers the entropy.'],
          ]),
        ],
      }],
    },
    18: {
      summary: 'Galvanic and electrolytic cells and cell potential.',
      sessions: [{
        t: 'Electrochemistry',
        s: 'Oxidation and reduction in cells, standard cell potential and its link to ΔG° and K.',
        md: `
## Electrochemical cells

In every cell, **oxidation occurs at the anode** and **reduction occurs at the cathode** ("an ox, red cat"). Electrons flow through the external wire from the anode to the cathode. A **salt bridge** (or porous barrier) lets ions move to keep each half-cell neutral.

- **Galvanic (voltaic) cell:** a spontaneous reaction produces electrical energy. E°cell > 0. The anode is negative and the cathode is positive.
- **Electrolytic cell:** an external source forces a non-spontaneous reaction. E°cell < 0 for the reaction as written. For molten NaCl, Na⁺ is reduced to Na at the cathode and Cl⁻ is oxidized to Cl₂ at the anode.

## Standard cell potential

Use a table of **standard reduction potentials**. Do **not** multiply a half-reaction's potential when you multiply its coefficients.

**E°cell = E°(cathode) − E°(anode)**

For the Zn/Cu cell: Cu²⁺ + 2e⁻ → Cu (E° = +0.34 V) is the cathode, and Zn²⁺ + 2e⁻ → Zn (E° = −0.76 V) is reversed to give the anode: Zn → Zn²⁺ + 2e⁻.

E°cell = 0.34 − (−0.76) = **+1.10 V**

## Free energy, equilibrium and nonstandard conditions

- **ΔG° = −nFE°**, where n is the moles of electrons transferred and F = 96 485 C/mol. For the Zn/Cu cell, ΔG° = −(2)(96 485)(1.10) = −212 kJ.
- Positive E° ⇔ negative ΔG° ⇔ K > 1.
- A cell under nonstandard conditions has potential E = E° − (RT/nF) ln Q. As the reaction proceeds Q rises until Q = K and E = 0: a "dead" battery.

## Electrolysis calculations

Charge **q = It** (coulombs = amperes × seconds). Moles of electrons = q/F. Use the half-reaction to convert to moles of substance. A current of 2.0 A for 965 s carries 1930 C = 0.0200 mol e⁻, which deposits 0.0100 mol of Cu (63.5 g/mol) from Cu²⁺, or **0.635 g**.
`,
        q: [
          mc('Cu²⁺ + 2e⁻ → Cu has E° = +0.34 V and Zn²⁺ + 2e⁻ → Zn has E° = −0.76 V. What is E°cell for the cell built from these two half-cells?', '+1.10 V', 'Cu is the cathode: E°cell = 0.34 − (−0.76) = +1.10 V.', [
            ['−0.42 V', 'The potentials were added with the wrong sign (0.34 + (−0.76)), instead of subtracting the anode’s reduction potential.'],
            ['+0.34 V', 'Only the potential of the copper half-cell was used.'],
          ]),
          mc('In a Zn/Cu galvanic cell, which statement is correct?', 'Electrons flow through the wire from the zinc electrode to the copper electrode', 'Zinc is oxidized at the anode and releases electrons, which travel to the cathode, where Cu²⁺ is reduced.', [
            ['Reduction occurs at the zinc electrode', 'Zinc is oxidized; reduction occurs at the cathode (copper).'],
            ['Electrons flow through the salt bridge', 'Ions move through the salt bridge; electrons travel in the wire.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 9 assessment · Thermodynamics and electrochemistry',
    tasks: [
      mc('What is ΔG° for the Zn/Cu cell, with E°cell = +1.10 V and n = 2? (F = 96 485 C/mol)', '−212 kJ', 'ΔG° = −nFE° = −(2)(96 485)(1.10) = −212 267 J ≈ −212 kJ.', [
        ['+212 kJ', 'The sign is wrong: a positive E° corresponds to a negative ΔG°.'],
        ['−106 kJ', 'The two electrons transferred were not counted (n = 1 was used).'],
        ['−1.10 kJ', 'The potential was not multiplied by n and F.'],
      ]),
      tf('A positive E°cell means that ΔG° is negative and K is greater than 1.', true, 'ΔG° = −nFE° and ΔG° = −RT ln K both link a positive E° to a favorable reaction.', 'A positive potential gives a negative ΔG°, which means the products are favored at equilibrium (K > 1).'),
      mc('A reaction has ΔH = +30 kJ and ΔS = +100 J/K. Above what temperature is it spontaneous?', '300 K', 'ΔG = 0 when T = ΔH/ΔS = 30 000 J/100 J/K = 300 K, and ΔG is negative above this temperature.', [
        ['3000 K', 'ΔH in kJ was divided by ΔS in J/K, without converting units.'],
        ['Below 300 K', 'With ΔH > 0 and ΔS > 0, the reaction is spontaneous only at high temperature.'],
        ['It is never spontaneous', 'A positive ΔS makes the reaction spontaneous at high enough temperature.'],
      ]),
      mc('In the electrolysis of molten NaCl, what happens at the cathode?', 'Na⁺ is reduced to Na', 'Reduction always occurs at the cathode; sodium ions gain electrons to form sodium metal.', [
        ['Cl⁻ is oxidized to Cl₂', 'Oxidation occurs at the anode.'],
        ['Na is oxidized to Na⁺', 'Sodium metal is a product at the cathode, not a reactant.'],
        ['Cl₂ is reduced to Cl⁻', 'Chlorine gas is formed in this cell, at the anode.'],
      ]),
      mc('A current of 2.0 A passes through a solution of Cu²⁺ for 965 s. What mass of copper is deposited? (Cu = 63.5 g/mol, F = 96 485 C/mol)', '0.635 g', 'Charge = 1930 C = 0.0200 mol e⁻. Cu²⁺ + 2e⁻ → Cu needs 2 mol e⁻ per mole of Cu, so 0.0100 mol Cu = 0.635 g.', [
        ['1.27 g', 'One electron per copper ion was assumed, but Cu²⁺ needs two.'],
        ['0.318 g', 'The mole ratio of 2 electrons per copper was applied twice.'],
        ['63.5 g', 'This is the mass of a full mole of copper.'],
      ]),
      mc('Which process has a negative ΔS?', 'NaCl crystallizing from a saturated solution', 'Dissolved ions move into an ordered lattice, which decreases the entropy of the system.', [
        ['Ice melting', 'A solid becoming a liquid increases the entropy.'],
        ['Water boiling', 'A liquid becoming a gas increases the entropy.'],
        ['A gas expanding into a vacuum', 'The particles have more space to occupy, so the entropy increases.'],
      ]),
      mc('A reaction has K = 1 at 298 K. What is its ΔG°?', '0', 'ΔG° = −RT ln K, and ln 1 = 0.', [
        ['Negative', 'ΔG° is negative only when K is greater than 1.'],
        ['Positive', 'ΔG° is positive only when K is less than 1.'],
        ['−RT', 'This would require ln K = 1, so K would be e ≈ 2.7.'],
      ]),
    ],
  },
};
