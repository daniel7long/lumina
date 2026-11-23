import { mc, tf } from '../builder.js';

export default {
  summary: 'Count particles with the mole, work out formulas from data, and explain periodic trends from the structure of the atom.',
  modules: {
    1: {
      summary: 'The mole, percent composition and formulas.',
      sessions: [{
        t: 'The mole and chemical formulas',
        s: 'Molar mass, Avogadro’s number, mass percent, empirical formulas and average atomic mass.',
        md: `
## The mole

One **mole** is 6.02 × 10²³ particles (**Avogadro's number**). The **molar mass** of a substance, in g/mol, is the sum of the atomic masses in its formula.

- moles = mass ÷ molar mass
- particles = moles × 6.02 × 10²³

Example: water, H₂O, has a molar mass of 2(1) + 16 = **18 g/mol**, so 36 g is 36/18 = **2.0 mol**.

## Mass percent

mass % of an element = (mass of that element in one mole of compound ÷ molar mass of the compound) × 100

For CO₂ (44 g/mol), oxygen is 32/44 = **72.7 %** by mass.

## Empirical and molecular formulas

The **empirical formula** is the simplest whole-number ratio of atoms.

1. Assume 100 g of compound, so each percent becomes grams.
2. Convert each mass to moles.
3. Divide by the smallest number of moles.
4. Multiply to get whole numbers if needed (for example, ×2 for x.5).

A compound that is 40.0 % C, 6.7 % H and 53.3 % O by mass has 3.33 mol C, 6.7 mol H and 3.33 mol O, so the ratio is 1 : 2 : 1 and the empirical formula is **CH₂O**.

The **molecular formula** is a whole-number multiple of the empirical formula: divide the true molar mass by the empirical-formula mass to find the multiple.

## Average atomic mass

An element's atomic mass on the periodic table is the **weighted average** of its isotopes' masses, using their natural abundances. This is how a mass spectrum is turned into a number.
`,
        q: [
          mc('How many moles are in 36 g of water (molar mass 18 g/mol)?', '2.0 mol', 'moles = mass ÷ molar mass = 36/18 = 2.0 mol.', [
            ['0.50 mol', 'The ratio was inverted (18/36).'],
            ['648 mol', 'The mass and molar mass were multiplied instead of divided.'],
          ]),
          mc('A compound is 40.0 % C, 6.7 % H and 53.3 % O by mass. What is its empirical formula?', 'CH₂O', 'In 100 g: 3.33 mol C, 6.7 mol H and 3.33 mol O. Dividing by 3.33 gives a 1 : 2 : 1 ratio.', [
            ['C₂H₄O₂', 'This has the right ratio but is not the simplest whole-number ratio, so it is not the empirical formula.'],
            ['CHO', 'The hydrogen was given the same number of moles as carbon, but there is twice as much hydrogen.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Electron configurations and trends in the periodic table.',
      sessions: [{
        t: 'Electron configuration and periodic trends',
        s: 'Filling orbitals, valence electrons, and the trends in radius and ionization energy.',
        md: `
## Electron configuration

Electrons fill orbitals from the lowest energy upward (the **Aufbau principle**): 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, …

- Each orbital holds at most two electrons, with opposite spins (**Pauli exclusion principle**).
- Orbitals of equal energy (such as the three 2p orbitals) fill one electron at a time before pairing (**Hund's rule**).

Examples: **Cl:** 1s²2s²2p⁶3s²3p⁵ = [Ne]3s²3p⁵. **P:** [Ne]3s²3p³. When atoms form positive ions they lose their **outermost** electrons first (for transition metals, the 4s electrons before the 3d).

An **excited-state** configuration has an electron promoted to a higher orbital than the ground state allows, for example 1s²2s²2p⁵3s² for sodium (the ground state is 1s²2s²2p⁶3s¹).

## Periodic trends

Trends come from three factors: the **effective nuclear charge** felt by the valence electrons, their **distance** from the nucleus, and **shielding** by inner electrons.

| Trend | Across a period → | Down a group ↓ |
|---|---|---|
| Atomic radius | decreases | increases |
| First ionization energy | generally increases | decreases |
| Electronegativity | increases | decreases |

Across a period the nuclear charge rises while the valence electrons stay in the same shell, so they are pulled in tighter. Down a group the valence electrons are in higher shells, farther away and better shielded.

Two exceptions in ionization energy: **Al is lower than Mg** (the 3p electron is higher in energy than a 3s electron) and **O is lower than N** (an electron in a doubly occupied 2p orbital is repelled by its partner).

**Cations are smaller** than their atoms; **anions are larger**.
`,
        q: [
          mc('Which element has the ground-state configuration [Ne]3s²3p³?', 'Phosphorus', '[Ne] accounts for 10 electrons, and 3s²3p³ adds 5 more, giving 15 electrons: phosphorus.', [
            ['Nitrogen', 'Nitrogen is 1s²2s²2p³; it does not have a 3s or 3p subshell filled.'],
            ['Sulfur', 'Sulfur has one more electron: [Ne]3s²3p⁴.'],
            ['Aluminium', 'Aluminium has fewer 3p electrons: [Ne]3s²3p¹.'],
          ]),
          mc('Moving from sodium to chlorine across period 3, what happens to atomic radius?', 'It decreases', 'The nuclear charge increases while the valence electrons stay in the third shell, so they are pulled closer.', [
            ['It increases', 'Added electrons go into the same shell, and the greater nuclear charge pulls the shell inward.'],
            ['It stays the same', 'The effective nuclear charge changes across the period, so the radius changes.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Atomic structure and properties',
    tasks: [
      mc('What is the mass percent of oxygen in CO₂ (C = 12, O = 16)?', '72.7 %', 'The molar mass is 44 g/mol and oxygen contributes 32 g: 32/44 × 100 = 72.7 %.', [
        ['36.4 %', 'This uses one oxygen atom (16/44) instead of two.'],
        ['27.3 %', 'This is the mass percent of carbon.'],
        ['50 %', 'This assumes equal masses of carbon and oxygen.'],
      ]),
      mc('What is the mass of 3.01 × 10²³ molecules of CO₂ (44 g/mol)?', '22 g', '3.01 × 10²³ molecules is 0.50 mol, and 0.50 × 44 = 22 g.', [
        ['44 g', 'This is the mass of a full mole (6.02 × 10²³ molecules).'],
        ['88 g', 'This is the mass of 2.0 mol.'],
        ['11 g', 'This is the mass of 0.25 mol.'],
      ]),
      mc('A hydrocarbon has the empirical formula CH₂ and a molar mass of 56 g/mol. What is its molecular formula?', 'C₄H₈', 'The empirical-formula mass is 14 g/mol, and 56/14 = 4, so the formula is (CH₂)₄ = C₄H₈.', [
        ['C₂H₄', 'This has a molar mass of 28 g/mol.'],
        ['C₃H₆', 'This has a molar mass of 42 g/mol.'],
        ['CH₂', 'This is the empirical formula, with a molar mass of only 14 g/mol.'],
      ]),
      mc('A sample of boron is 20 % ¹⁰B (10.0 u) and 80 % ¹¹B (11.0 u). What is its average atomic mass?', '10.8 u', '0.20 × 10.0 + 0.80 × 11.0 = 2.0 + 8.8 = 10.8 u.', [
        ['10.5 u', 'This is the simple average of the two masses, ignoring their abundances.'],
        ['10.2 u', 'The abundances were applied to the wrong isotopes.'],
        ['11.0 u', 'This is the mass of the more abundant isotope only.'],
      ]),
      mc('Which configuration represents an excited-state atom?', '1s²2s²2p⁵3s²', 'This has 11 electrons like sodium, but one 2p electron has been promoted to 3s while the 2p subshell is not full.', [
        ['1s²2s²2p⁶3s¹', 'This is the ground state of sodium.'],
        ['1s²2s²2p⁶', 'This is the ground state of neon.'],
        ['1s²2s²2p³', 'This is the ground state of nitrogen.'],
      ]),
      tf('Aluminium has a higher first ionization energy than magnesium.', false, 'Aluminium’s is lower.', 'Correct. Aluminium’s outermost electron is in a 3p orbital, which is higher in energy and better shielded than magnesium’s 3s electron.'),
      mc('Why is the first ionization energy of oxygen lower than that of nitrogen?', 'Repulsion between paired electrons in an oxygen 2p orbital makes one easier to remove', 'Nitrogen’s three 2p electrons are in separate orbitals; oxygen has a pair in one orbital, and the repulsion lowers the energy needed to remove one.', [
        ['Oxygen has a smaller nuclear charge than nitrogen', 'Oxygen has 8 protons and nitrogen has 7, so oxygen has the larger nuclear charge.'],
        ['Oxygen’s outer electrons are in a higher shell', 'Both elements have their valence electrons in the second shell.'],
      ]),
    ],
  },
};
