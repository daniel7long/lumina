import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain the physical properties of substances through the attractions between particles, and describe gases quantitatively.',
  modules: {
    5: {
      summary: 'Intermolecular forces and what they explain.',
      sessions: [{
        t: 'Intermolecular forces and physical properties',
        s: 'London dispersion, dipole–dipole and hydrogen bonding, and how they set boiling point, vapor pressure and solubility.',
        md: `
## Intermolecular forces (IMFs)

IMFs are attractions **between** molecules. They are much weaker than the covalent bonds **within** molecules, and they decide whether a substance is a gas, liquid or solid.

| Force | Present in | Strength |
|---|---|---|
| **London dispersion** | all substances | grows with the number of electrons (size and polarizability) |
| **Dipole–dipole** | polar molecules | stronger than dispersion for molecules of similar size |
| **Hydrogen bonding** | molecules with H bonded to **N, O or F** and a lone pair on a nearby N, O or F | strongest of the three |
| **Ion–dipole** | ions in a polar solvent | strong; dissolves ionic compounds in water |

## What IMFs explain

- **Boiling point** and melting point rise as IMFs get stronger. H₂O boils at 100 °C, far above CH₄ at −162 °C, because of hydrogen bonding. Br₂ boils higher than Cl₂ because its larger electron cloud gives stronger dispersion forces.
- **Vapor pressure** falls as IMFs get stronger: molecules escape from the liquid less easily. A substance with weak IMFs is **volatile**.
- **Solubility:** "like dissolves like." Polar and ionic substances dissolve in polar solvents such as water; nonpolar substances dissolve in nonpolar solvents such as hexane.

For molecules of the same formula, a more elongated molecule has more surface contact, so stronger dispersion forces, than a compact one.
`,
        q: [
          mc('Which substance has the highest boiling point?', 'H₂O', 'Water forms extensive hydrogen bonds, which are much stronger than the forces between the other molecules.', [
            ['CH₄', 'Methane is nonpolar, with only weak dispersion forces.'],
            ['HCl', 'HCl has dipole–dipole forces but cannot hydrogen bond.'],
            ['CO₂', 'Carbon dioxide is nonpolar and has only dispersion forces.'],
          ]),
          mc('Why does Br₂ have a higher boiling point than Cl₂?', 'Br₂ has more electrons, so its dispersion forces are stronger', 'A larger electron cloud is more polarizable, giving stronger temporary dipoles.', [
            ['Br₂ is polar', 'Both are nonpolar diatomic molecules.'],
            ['Br₂ forms hydrogen bonds', 'Hydrogen bonding requires hydrogen bonded to N, O or F.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'The gas laws and kinetic molecular theory.',
      sessions: [{
        t: 'Gases',
        s: 'The ideal gas law, partial pressures and what kinetic molecular theory says about temperature.',
        md: `
## The ideal gas law

**PV = nRT**

where P is pressure, V is volume, n is moles and T is **absolute** temperature in kelvin (K = °C + 273). With pressure in atm and volume in L, R = **0.0821 L·atm/(mol·K)**. At **STP** (0 °C and 1 atm), one mole of an ideal gas occupies **22.4 L**.

For a fixed amount of gas, the **combined gas law** gives P₁V₁/T₁ = P₂V₂/T₂. Special cases: at constant T, P and V are inversely proportional (Boyle); at constant P, V is proportional to T (Charles).

A gas's molar mass can be found from its density: **M = dRT/P**, or at STP M = d × 22.4.

## Mixtures: Dalton's law

The total pressure of a mixture is the sum of the partial pressures, and each gas's partial pressure is its **mole fraction** times the total: P_A = X_A × P_total.

## Kinetic molecular theory

- Gas particles are in constant random motion and have negligible volume.
- They do not attract or repel each other except in collisions.
- The **average kinetic energy** is proportional to the absolute temperature, and it is the same for all gases at the same temperature. Lighter molecules therefore move faster on average.

**Real gases** deviate from ideal behavior at **high pressure** (the molecules' volume matters) and **low temperature** (attractions matter).
`,
        q: [
          mc('A 2.00 mol sample of an ideal gas at 300 K occupies 24.63 L. What is its pressure? (R = 0.0821 L·atm/(mol·K))', '2.0 atm', 'P = nRT/V = (2.00)(0.0821)(300)/24.63 = 2.0 atm.', [
            ['0.50 atm', 'The ratio was inverted (V/nRT).'],
            ['1.0 atm', 'This is the pressure for 1.00 mol; the moles were not doubled.'],
          ]),
          mc('A mixture of 2.0 mol N₂ and 3.0 mol O₂ has a total pressure of 5.0 atm. What is the partial pressure of O₂?', '3.0 atm', 'X(O₂) = 3.0/5.0 = 0.60, and 0.60 × 5.0 atm = 3.0 atm.', [
            ['2.0 atm', 'This is the partial pressure of N₂.'],
            ['5.0 atm', 'This is the total pressure, not the pressure of O₂ alone.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Intermolecular forces and properties',
    tasks: [
      mc('A 3.0 L sample of gas at 300 K is heated to 450 K at constant pressure. What is the new volume?', '4.5 L', 'At constant P, V/T is constant: V₂ = 3.0 × 450/300 = 4.5 L.', [
        ['2.0 L', 'The temperature ratio was inverted, as if the gas contracted when heated.'],
        ['6.75 L', 'The temperature ratio was applied twice.'],
        ['3.0 L', 'The volume of a gas at constant pressure changes with temperature.'],
      ]),
      mc('A gas has a density of 1.25 g/L at STP. What is its molar mass?', '28 g/mol', 'M = d × 22.4 L/mol = 1.25 × 22.4 = 28 g/mol.', [
        ['17.9 g/mol', 'The molar volume was divided by the density instead of multiplied.'],
        ['0.056 g/mol', 'The density was divided by the molar volume.'],
        ['1.25 g/mol', 'This is the density in g/L, not the molar mass.'],
      ]),
      mc('Helium and argon are at the same temperature. Which statement is true?', 'They have the same average kinetic energy, and helium atoms move faster on average', 'Average KE depends only on temperature; with the same KE, the lighter atoms must have the greater speed.', [
        ['Argon atoms have greater average kinetic energy because they are heavier', 'Average kinetic energy is the same for all gases at the same temperature.'],
        ['Helium atoms have greater average kinetic energy because they are faster', 'Helium atoms are faster, but their lower mass exactly offsets this, leaving the same average kinetic energy.'],
      ]),
      tf('Real gases are most likely to deviate from ideal behavior at high pressure and low temperature.', true, 'At high pressure the particles’ own volume matters, and at low temperature their attractions matter.', 'Both conditions bring the particles close together or slow them down, which makes the ideal-gas assumptions fail.'),
      mc('Ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃) have the same formula, but ethanol boils at 78 °C and dimethyl ether at −24 °C. Why?', 'Ethanol molecules form hydrogen bonds with one another', 'Ethanol has an O–H group, so it can hydrogen bond; dimethyl ether has no H bonded to oxygen.', [
        ['Ethanol has a larger molar mass', 'The two compounds have the same molar mass.'],
        ['Dimethyl ether is nonpolar', 'It is polar, but its dipole–dipole forces are weaker than hydrogen bonds.'],
      ]),
      mc('Which has the higher vapor pressure at the same temperature: pentane (C₅H₁₂) or hexane (C₆H₁₄)?', 'Pentane, because its dispersion forces are weaker', 'The smaller pentane molecule has fewer electrons, so its molecules escape from the liquid more easily.', [
        ['Hexane, because it has more electrons', 'More electrons give stronger attractions, which lower the vapor pressure.'],
        ['They are the same because both are hydrocarbons', 'Vapor pressure depends on the strength of the intermolecular forces, which differs with molecular size.'],
      ]),
      mc('Why does NaCl dissolve in water but not in hexane?', 'Water molecules form strong ion–dipole attractions with the ions, but hexane cannot', 'The energy released by ion–dipole attractions offsets the energy needed to separate the ions in the lattice.', [
        ['Hexane is too dense', 'Density does not decide whether an ionic solid dissolves.'],
        ['NaCl is covalently bonded', 'NaCl is an ionic compound.'],
      ]),
    ],
  },
};
