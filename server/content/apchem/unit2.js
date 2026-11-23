import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain how atoms join, draw the structure of molecules, and predict shape and polarity from the arrangement of electrons.',
  modules: {
    3: {
      summary: 'Ionic, covalent and metallic bonding, and Lewis structures.',
      sessions: [{
        t: 'Chemical bonds and Lewis structures',
        s: 'Bond types, how they explain properties, and drawing Lewis structures.',
        md: `
## Types of bonding

| Bonding | Between | Particles | Typical properties |
|---|---|---|---|
| **Ionic** | metal + nonmetal | cations and anions in a lattice | high melting point, brittle, conducts when **molten or dissolved** but not as a solid |
| **Covalent** | nonmetals | shared electron pairs | molecular substances: low melting point; network solids (diamond, SiO₂): very hard and high melting |
| **Metallic** | metals | cations in a "sea" of delocalized electrons | conducts as a solid, malleable, ductile |

The strength of an ionic bond rises with the **charges** of the ions and falls with the **distance** between them (Coulomb's law). MgO (2+ and 2−, small ions) has a much higher melting point than NaCl (1+ and 1−).

## Lewis structures

1. Add up all the **valence electrons** (adjust for charge).
2. Connect the atoms with single bonds; put the least electronegative atom (not H) in the center.
3. Fill the octets of the outer atoms with lone pairs.
4. Place any remaining electrons on the central atom.
5. If the central atom lacks an octet, make double or triple bonds with lone pairs.

Example, CO₂: 4 + 2(6) = **16** valence electrons, giving O=C=O with two lone pairs on each oxygen.

- **Formal charge** = valence electrons − nonbonding electrons − (bonds). The best structure has formal charges closest to zero.
- **Resonance:** when more than one valid Lewis structure exists (as in O₃ or NO₃⁻), the real molecule is a single **hybrid** of them. It does not flip between them.
- Elements in period 3 and below (such as S and P) can have **expanded octets**, as in SF₆.
`,
        q: [
          mc('How many valence electrons must appear in the Lewis structure of CO₂?', '16', 'Carbon contributes 4 and each oxygen contributes 6: 4 + 6 + 6 = 16.', [
            ['12', 'This counts only the two oxygen atoms and leaves out carbon’s four electrons.'],
            ['18', 'This adds two extra electrons, as if the molecule had a 2− charge.'],
            ['24', 'This is the number of electrons needed to give every atom an octet, not the number available.'],
          ]),
          mc('Which substance conducts electricity when molten but not when solid?', 'NaCl', 'In solid NaCl the ions are locked in a lattice; melting frees them to move and carry charge.', [
            ['Cu', 'Copper conducts in the solid state because of its mobile electrons.'],
            ['C₁₂H₂₂O₁₁ (sucrose)', 'Sucrose is a molecular compound and does not conduct as a solid or liquid.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'VSEPR shapes, polarity and hybridization.',
      sessions: [{
        t: 'Molecular shape, polarity and hybridization',
        s: 'Predicting geometry with VSEPR, deciding polarity, and counting sigma and pi bonds.',
        md: `
## VSEPR

Regions of electron density around a central atom (bonds and lone pairs) repel each other and arrange to be as far apart as possible. Count the **electron domains** (a double or triple bond counts as one).

| Domains | Lone pairs | Shape | Ideal angle | Example |
|---|---|---|---|---|
| 2 | 0 | linear | 180° | CO₂ |
| 3 | 0 | trigonal planar | 120° | BF₃ |
| 3 | 1 | bent | <120° | SO₂ |
| 4 | 0 | tetrahedral | 109.5° | CH₄ |
| 4 | 1 | trigonal pyramidal | <109.5° | NH₃ |
| 4 | 2 | bent | <109.5° | H₂O |
| 6 | 0 | octahedral | 90° | SF₆ |

Lone pairs take more space than bonding pairs, so they squeeze the bond angles. In water the angle is about 104.5°.

## Polarity

A bond is **polar** if its atoms differ in electronegativity. A molecule is polar only if its bond dipoles **do not cancel**. Symmetric shapes cancel (CO₂, BF₃, CCl₄ are nonpolar); bent and pyramidal shapes do not (H₂O, SO₂, NH₃ are polar).

## Sigma, pi and hybridization

- A single bond is one **σ** bond. A double bond is one σ plus one **π**; a triple bond is one σ plus two π.
- The hybridization follows the electron domains: 2 → **sp**, 3 → **sp²**, 4 → **sp³**.

Ethene (C₂H₄) has five σ bonds (four C–H and one C–C) and one π bond, and each carbon is sp².
`,
        q: [
          mc('What is the molecular shape of NH₃?', 'Trigonal pyramidal', 'Nitrogen has three bonding pairs and one lone pair (four domains), giving a pyramidal shape.', [
            ['Trigonal planar', 'This would need three domains and no lone pair.'],
            ['Tetrahedral', 'This is the arrangement of the four domains, but the shape describes only the atoms and one domain is a lone pair.'],
            ['Bent', 'This describes two bonded atoms around the center, as in water.'],
          ]),
          mc('Which molecule is nonpolar?', 'CCl₄', 'The four polar C–Cl bonds point to the corners of a tetrahedron and cancel.', [
            ['CH₃Cl', 'The C–Cl dipole is not balanced by the C–H bonds, so the molecule is polar.'],
            ['NH₃', 'The pyramidal shape and the lone pair give a net dipole.'],
            ['H₂O', 'The bent shape means the O–H dipoles do not cancel.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Molecular and ionic compound structure',
    tasks: [
      mc('How many σ and π bonds are in ethene, C₂H₄?', '5 σ and 1 π', 'Four C–H single bonds and the σ part of C=C give five σ bonds; the second bond of C=C is a π bond.', [
        ['6 σ and 0 π', 'The C=C double bond contains a π bond.'],
        ['4 σ and 2 π', 'A double bond has only one π bond, and the C=C also has a σ bond.'],
        ['3 σ and 3 π', 'Each C–H bond is a σ bond and there is only one π bond.'],
      ]),
      mc('What is the hybridization of the carbon atom in CO₂?', 'sp', 'Carbon has two electron domains (two double bonds), which corresponds to sp hybridization.', [
        ['sp²', 'This requires three electron domains.'],
        ['sp³', 'This requires four electron domains.'],
        ['sp³d', 'Carbon cannot have an expanded octet.'],
      ]),
      mc('Why is the H–O–H bond angle in water (about 104.5°) smaller than the ideal tetrahedral angle?', 'Lone pairs repel bonding pairs more strongly than bonding pairs repel each other', 'The two lone pairs on oxygen take up more space and push the O–H bonds closer together.', [
        ['The O–H bonds are ionic', 'The O–H bonds are polar covalent bonds.'],
        ['Hydrogen bonding between molecules compresses the angle', 'The angle is a property of a single molecule and is set by electron-domain repulsion.'],
        ['Oxygen is sp hybridized', 'Oxygen in water has four electron domains and is sp³.'],
      ]),
      tf('Resonance structures show a molecule rapidly switching back and forth between different Lewis structures.', false, 'The molecule does not switch between structures.', 'Correct. The real structure is a single hybrid, with bond lengths between those of a single and double bond.'),
      mc('Which molecule is polar?', 'SO₂', 'SO₂ is bent with a lone pair on sulfur, so its two S=O dipoles do not cancel.', [
        ['CO₂', 'It is linear, so its two C=O dipoles cancel.'],
        ['BF₃', 'It is trigonal planar and symmetric, so the dipoles cancel.'],
        ['CCl₄', 'It is tetrahedral and symmetric, so the dipoles cancel.'],
      ]),
      mc('In which molecule does the central atom have more than an octet of electrons?', 'SF₆', 'Sulfur is bonded to six fluorine atoms and holds 12 electrons, which is possible because it is in period 3.', [
        ['CH₄', 'Carbon has exactly eight electrons.'],
        ['NH₃', 'Nitrogen has eight electrons: three bonds and a lone pair.'],
        ['H₂O', 'Oxygen has eight electrons: two bonds and two lone pairs.'],
      ]),
      mc('Why does MgO have a much higher melting point than NaCl?', 'Its ions have larger charges and are smaller, so the attraction in the lattice is much stronger', 'By Coulomb’s law, the force depends on the product of the charges (2+ and 2− versus 1+ and 1−) and falls with distance.', [
        ['MgO is a covalent network solid', 'MgO is an ionic compound.'],
        ['Magnesium is heavier than sodium', 'Melting point depends on the strength of the attractions, not on atomic mass alone.'],
      ]),
    ],
  },
};
