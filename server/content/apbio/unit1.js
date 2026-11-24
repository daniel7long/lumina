import { mc, tf } from '../builder.js';

export default {
  summary: 'Start from the chemistry that makes life possible: the properties of water and the four classes of molecules that cells are built from.',
  modules: {
    1: {
      summary: 'Why water is special, and what pH measures.',
      sessions: [{
        t: 'Water, hydrogen bonds and pH',
        s: 'Cohesion, adhesion, specific heat, the density of ice and the pH scale.',
        md: `
## Polarity and hydrogen bonds

A water molecule is **polar**: oxygen pulls the shared electrons toward itself, so oxygen is slightly negative and each hydrogen slightly positive. The positive hydrogen of one molecule is attracted to the negative oxygen of another. This attraction is a **hydrogen bond**. Individually hydrogen bonds are weak, but there are enormous numbers of them, and they explain water's properties.

| Property | Explanation | Example |
|---|---|---|
| **Cohesion** | hydrogen bonds hold water molecules to each other | surface tension; water pulled up a tree in a column |
| **Adhesion** | water is attracted to other polar surfaces | water climbing the walls of xylem vessels |
| **High specific heat** | much heat is needed to break hydrogen bonds before the molecules move faster | oceans and cells resist temperature change |
| **High heat of vaporization** | evaporation carries away a lot of energy | sweating cools the body |
| **Ice is less dense than liquid water** | in ice each molecule is held in an open lattice by four hydrogen bonds, spaced farther apart than in the liquid | ice floats and insulates lakes |
| **Excellent solvent** | polar and ionic substances are surrounded by water molecules | dissolved nutrients and ions in cells |

## pH

**pH = −log[H⁺]**. The scale runs from 0 to 14; pH 7 is neutral, lower is acidic, higher is basic. Because the scale is logarithmic, a solution at pH 4 has **10 times** more H⁺ than a solution at pH 5, and **100 times** more than one at pH 6.

**Buffers** are mixtures that resist changes in pH by absorbing or releasing H⁺. Blood, held near pH 7.4 by the bicarbonate buffer, depends on one, because most enzymes work only in a narrow pH range.
`,
        q: [
          mc('Why does ice float on liquid water?', 'Hydrogen bonds hold the molecules in an open lattice, making ice less dense', 'In ice every molecule forms four hydrogen bonds in a fixed arrangement that spaces the molecules farther apart than in the liquid.', [
            ['Ice molecules are lighter than liquid water molecules', 'The molecules are the same; only their spacing differs.'],
            ['Ice has fewer hydrogen bonds than liquid water', 'Ice has the maximum number of hydrogen bonds, and their fixed geometry creates the open structure.'],
          ]),
          mc('Water travels up the xylem of a tall tree in an unbroken column. Which two properties are most responsible?', 'Cohesion and adhesion', 'Cohesion links the water molecules to each other and adhesion attaches them to the xylem walls.', [
            ['High specific heat and polarity of the solute', 'Specific heat describes temperature change, not the movement of water.'],
            ['Surface tension and evaporation only', 'Evaporation from leaves does pull the water, but the column holds together because of cohesion and adhesion.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Carbohydrates, lipids, proteins and nucleic acids.',
      sessions: [{
        t: 'Macromolecules: structure and function',
        s: 'Monomers, polymers and bonds; the four levels of protein structure; base pairing.',
        md: `
## Building and breaking polymers

Large molecules are built by joining monomers through **dehydration (condensation) reactions**, which release a water molecule for each bond made. **Hydrolysis** adds water to break the bond.

| Class | Monomer | Bond | Examples and roles |
|---|---|---|---|
| **Carbohydrates** | monosaccharide (glucose) | glycosidic | energy (starch, glycogen), structure (cellulose, chitin) |
| **Proteins** | amino acid | peptide | enzymes, transport, structure, signaling |
| **Nucleic acids** | nucleotide | phosphodiester | DNA, RNA store and use genetic information |
| **Lipids** | not true polymers; glycerol and fatty acids | ester | energy storage (fats), membranes (phospholipids), steroids |

A polypeptide of **n** amino acids contains **n − 1** peptide bonds. A chain of 50 amino acids has **49**.

## Protein structure

- **Primary:** the sequence of amino acids, held by peptide bonds.
- **Secondary:** α-helices and β-sheets formed by **hydrogen bonds** between atoms of the backbone.
- **Tertiary:** the three-dimensional fold, held by interactions between **R groups** (hydrophobic interactions, hydrogen bonds, ionic bonds, disulfide bridges).
- **Quaternary:** the association of more than one polypeptide.

The sequence determines the shape and the shape determines the function. Heat or a change in pH can **denature** a protein, destroying its shape and function.

## Nucleic acids and base pairing

DNA strands are **antiparallel**. A pairs with T (two hydrogen bonds) and G pairs with C (three). In RNA, uracil replaces thymine. If a sample of double-stranded DNA is 30 % adenine, it is also 30 % thymine, leaving 40 % shared equally between G and C, so **20 % cytosine**.
`,
        q: [
          mc('How many peptide bonds are in a polypeptide of 50 amino acids?', '49', 'Each bond joins two amino acids, so a chain of n residues has n − 1 bonds.', [
            ['50', 'This counts one bond per amino acid; the first residue has nothing to bond to.'],
            ['51', 'There cannot be more bonds than links between 50 residues.'],
            ['25', 'Bonds are not formed in pairs of pairs; every adjacent pair is joined.'],
          ]),
          mc('Which level of protein structure depends on hydrogen bonding between backbone atoms?', 'Secondary structure', 'α-helices and β-sheets are held together by hydrogen bonds along the backbone.', [
            ['Primary structure', 'Primary structure is the amino acid sequence, held by peptide bonds.'],
            ['Tertiary structure', 'Tertiary structure comes mainly from interactions between R groups.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Chemistry of life',
    tasks: [
      mc('How many times more H⁺ does a solution at pH 4 have than a solution at pH 6?', '100 times', 'Each pH unit is a tenfold change, so two units is 10 × 10 = 100.', [
        ['2 times', 'The pH scale is logarithmic, so the difference is not linear.'],
        ['10 times', 'This is the difference for one pH unit.'],
        ['1000 times', 'This would be a difference of three pH units.'],
      ]),
      mc('A sample of double-stranded DNA is 30 % adenine. What percentage of the bases is cytosine?', '20 %', 'A = T = 30 %, leaving 40 % for G and C, which are equal: 20 % each.', [
        ['30 %', 'This is the percentage of thymine, which pairs with adenine.'],
        ['40 %', 'This is the combined percentage of G and C.'],
        ['70 %', 'This is the percentage of bases that are not adenine.'],
      ]),
      mc('One DNA strand reads 5′-ATGC-3′. What is the sequence of the complementary strand?', '3′-TACG-5′', 'A pairs with T and G pairs with C, and the strands are antiparallel.', [
        ['3′-ATGC-5′', 'This is identical to the original strand, not complementary.'],
        ['3′-UACG-5′', 'Uracil is found in RNA, not DNA.'],
        ['5′-TACG-3′', 'The complementary strand runs antiparallel, so it must be written 3′ to 5′ beneath the original.'],
      ]),
      mc('Water is warmed slowly by the sun, so lakes change temperature more slowly than the air. Which property explains this?', 'High specific heat', 'Hydrogen bonds must be broken before the water molecules can move faster, so a lot of energy is absorbed per degree.', [
        ['Cohesion', 'Cohesion explains surface tension and water transport, not temperature change.'],
        ['Adhesion', 'Adhesion explains attraction to other surfaces, not temperature stability.'],
        ['Low density of ice', 'This explains why ice floats, not how fast water warms.'],
      ]),
      tf('Lipids are true polymers built from repeating identical monomers.', false, 'Lipids are not true polymers.', 'Correct. Fats are built from glycerol and fatty acids, but they are not long chains of repeating monomers.'),
      tf('A dehydration reaction forms a glycosidic bond between two monosaccharides and releases a molecule of water.', true, 'Joining monomers removes the elements of water.', 'Condensation reactions release water as the bond forms; hydrolysis reverses it by adding water.'),
      mc('A protein loses its function when heated. What is the best explanation?', 'The heat disrupts the bonds that maintain its three-dimensional shape', 'Function depends on shape, and heat breaks the weak bonds holding the shape.', [
        ['The heat breaks the peptide bonds between amino acids', 'Peptide bonds are strong and are not broken by mild heating; denaturation affects the weaker interactions that hold the fold.'],
        ['The heat changes the amino acid sequence', 'The primary structure stays the same; the shape is what changes.'],
      ]),
    ],
  },
};
