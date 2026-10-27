import { mc, tf } from '../builder.js';

export default {
  summary: 'Build the chemical toolkit of life: atoms, water, acids and bases, carbohydrates, proteins and the enzymes that catalyze reactions.',
  modules: {
    2: {
      summary: 'Atoms, bonds, water and functional groups.',
      sessions: [
        {
          t: 'Atoms, electronegativity and bonds',
          s: 'Elements of life, covalent and non-covalent interactions.',
          md: `
## Elements and bonds

Six elements make up most of living matter: **C, H, O, N, P and S** (carbon, hydrogen, oxygen, nitrogen, phosphorus, sulfur). **Trace elements** such as Na⁺, K⁺, Ca²⁺, Mg²⁺, Fe²⁺/Fe³⁺, Zn²⁺, Cl⁻ exist mostly as **ions**.

### Electronegativity
**Electronegativity** is the pull an atom has on shared electrons. Order for the common atoms: **O > N > C ≈ S > H** (and P is lower than N). When bonded atoms differ, the bond is **polar**: the more electronegative atom is partly negative (δ−), the other partly positive (δ+).

### Bonds
| Bond | Nature | Energy (approx.) |
| --- | --- | --- |
| **Covalent** | Atoms share electrons | ~350–450 kJ/mol (strong) |
| **Ionic** | Attraction between opposite charges | ~ 20 kJ/mol in water |
| **Hydrogen bond** | H (on N or O) attracted to a lone pair on O or N | ~ 5–30 kJ/mol |
| **Van der Waals** | Weak, brief attractions between atoms | ~ 1 kJ/mol |

Covalent bonds hold molecules together; **non-covalent** interactions (ionic, hydrogen, van der Waals, hydrophobic) shape and bind them, and are easily broken and re-formed, which is what lets biological structures change.

### Hydrogen bonds
A hydrogen bond needs a **donor** (N–H or O–H) and an **acceptor** (a lone pair on O or N). An oxygen atom in water can accept two and its two hydrogens can donate two, so **each water can form up to 4 hydrogen bonds**.
`,
          q: [
            mc('Which atom is the MOST electronegative of these?', 'Oxygen', 'Order: O > N > C > H.', [
              ['Carbon', 'Carbon is less electronegative than oxygen.'],
              ['Hydrogen', 'Hydrogen is the least electronegative here.'],
            ]),
            mc('How many hydrogen bonds can one water molecule form at most?', 'Four', 'Two as a donor (its two H) and two as an acceptor (the lone pairs).', [
              ['One', 'Water can form more than one.'],
              ['Two', 'It can act as both donor and acceptor.'],
            ]),
          ],
        },
        {
          t: 'Water, the hydrophobic effect and functional groups',
          s: 'Why water suits life, and how groups behave at a given pH.',
          md: `
## Water

Water is **polar** (bent, with δ− on O and δ+ on H), and forms a **three-dimensional hydrogen-bonded network**. This gives it properties useful for life:
- **High specific heat and heat of vaporization**, which stabilizes temperature
- **Excellent solvent** for ions and polar molecules: water molecules surround ions (a **hydration shell**) and screen their charges
- **Cohesion and adhesion**, and surface tension
- Ice is less dense than liquid water, so it floats

### The hydrophobic effect
**Nonpolar** molecules do not form hydrogen bonds with water. Water orders around them, which is entropically unfavourable; so nonpolar groups cluster together to expose less surface to water. This **hydrophobic effect** drives membrane formation and protein folding.

### Functional groups
| Group | Character | Charge at pH 7 |
| --- | --- | --- |
| Hydroxyl –OH | Polar | Uncharged |
| Carbonyl C=O | Polar | Uncharged |
| Carboxyl –COOH | Acidic | **Negative** (–COO⁻) |
| Amino –NH₂ | Basic | **Positive** (–NH₃⁺) |
| Phosphate | Acidic | Negative |
| Sulfhydryl –SH | Polar | Uncharged (forms disulfides) |
| Methyl –CH₃ | Nonpolar | Uncharged |

An acid group is mostly deprotonated (charged) when the pH is **above** its pKa, and protonated when the pH is below it.
`,
          q: [
            mc('Why do nonpolar molecules such as oils cluster together in water?', 'Clustering reduces the amount of nonpolar surface that disrupts water\'s hydrogen bond network', 'This is the hydrophobic effect.', [
              ['They form strong covalent bonds with each other', 'Clustering is non-covalent.'],
              ['They are attracted to water molecules', 'They are not attracted to water.'],
            ]),
            mc('At pH 7, what is the likely state of a carboxyl group (pKa ≈ 4–5)?', 'Deprotonated and negatively charged', 'The pH is above the pKa.', [
              ['Protonated and positively charged', 'Carboxyl groups are not positive.'],
              ['Protonated and uncharged', 'That is true only below the pKa.'],
            ]),
          ],
        },
      ],
    },
    3: {
      summary: 'Equilibrium, acids, bases and buffers.',
      sessions: [
        {
          t: 'Equilibrium, pH and pKa',
          s: 'Weak acids, Ka, the Henderson–Hasselbalch equation and buffers.',
          md: `
## Equilibrium

In a reversible reaction A ⇌ B, forward and reverse reactions continue at equal rates at **equilibrium**. It is **dynamic**, not static. The **equilibrium constant** K = [products] / [reactants].

### Acids and bases
An **acid** donates H⁺; a **base** accepts H⁺. A **weak acid** HA only partly dissociates: HA ⇌ H⁺ + A⁻ (A⁻ is the **conjugate base**), with

Ka = [H⁺][A⁻] / [HA].

pH = −log₁₀[H⁺]. If [H⁺] = 10⁻³ M, pH = **3**. Each unit of pH is a **10-fold** change in [H⁺]. pKa = −log₁₀Ka; a **lower pKa means a stronger acid**.

### Henderson–Hasselbalch
pH = pKa + log₁₀([A⁻]/[HA]).

- At pH = pKa, [A⁻] = [HA] (half dissociated).
- At pH = pKa + 1, [A⁻]/[HA] = 10.
- Acetic acid (pKa 4.76) at pH 5.76 is about 91% acetate.

### Buffers
A **buffer** (a weak acid and its conjugate base) resists changes in pH. It works best within about ±1 pH unit of the pKa. Blood is buffered mainly by bicarbonate (pKa ≈ 6.1) with CO₂, holding pH near 7.4.
`,
          q: [
            mc('A solution has [H⁺] = 10⁻³ M. What is its pH?', '3', 'pH = −log₁₀(10⁻³) = 3.', [
              ['−3', 'The negative sign is already in the definition of pH.'],
              ['11', 'This is the pOH.'],
            ]),
            mc('Acetic acid has pKa 4.76. At pH 5.76, what is the ratio [acetate]/[acetic acid]?', '10 : 1', 'pH − pKa = 1, so the ratio is 10¹.', [
              ['1 : 1', 'That would be at pH 4.76.'],
              ['1 : 10', 'That would be at pH 3.76.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Sugars, glycosidic bonds and polysaccharides.',
      sessions: [
        {
          t: 'Monosaccharides and glycosidic bonds',
          s: 'Aldoses, ketoses, chirality and anomers.',
          md: `
## Carbohydrates

**Functions:** energy source and storage, structural support (cell walls), and recognition and signalling on cell surfaces.

### Monosaccharides
Simple sugars with the formula (CH₂O)ₙ. They contain a **carbonyl** and several **hydroxyl** groups.
- **Aldoses** have an aldehyde group (**glucose**, **galactose**, **ribose**, **glyceraldehyde**).
- **Ketoses** have a ketone group (**fructose**, **dihydroxyacetone**).

### Chirality
A carbon with four different groups is a **chiral (asymmetric) centre**. Natural sugars are mostly the **D-isomers**. Glucose has 4 chiral centres in its open chain, and 5 in its ring form (the extra one is the anomeric carbon).

### Rings and anomers
In solution, glucose closes into a ring (a **hemiacetal**). The carbon that was the carbonyl (C1) becomes the **anomeric carbon**. In **α**-glucose the OH at C1 points **down** (opposite to the CH₂OH), in **β**-glucose it points **up**.

### Glycosidic bonds
A **glycosidic bond** joins two sugars by a **condensation** (dehydration) reaction that releases water; **hydrolysis** breaks it by adding water. It involves the anomeric carbon of one sugar and a hydroxyl of another.
- **Sucrose** = glucose + fructose; **lactose** = galactose + glucose (β1→4); **maltose** = glucose + glucose (α1→4).
`,
          q: [
            mc('Which pair contains an aldose and a ketose?', 'Glucose and fructose', 'Glucose has an aldehyde; fructose has a ketone.', [
              ['Glucose and galactose', 'Both are aldoses.'],
              ['Ribose and glyceraldehyde', 'Both are aldoses.'],
            ]),
            mc('What is released when a glycosidic bond forms between two sugars?', 'Water', 'Bond formation is a condensation (dehydration) reaction.', [
              ['Carbon dioxide', 'No CO₂ is released.'],
              ['ATP', 'ATP is not a product of the reaction itself.'],
            ]),
          ],
        },
        {
          t: 'Polysaccharides: starch, glycogen and cellulose',
          s: 'Storage and structure, and cell walls.',
          md: `
## Polysaccharides

| Polysaccharide | Monomer and linkage | Role |
| --- | --- | --- |
| **Starch** (amylose, amylopectin) | α-glucose, α1→4 (amylopectin branches α1→6) | Energy storage in plants |
| **Glycogen** | α-glucose, α1→4 with frequent α1→6 branches | Energy storage in animals (liver, muscle) |
| **Cellulose** | **β**-glucose, β1→4 | Structure: plant cell walls |

**Why the difference matters:** the α linkage makes helical chains that are easily digested, while β linkages give straight chains that pack into strong fibres through hydrogen bonds. Humans lack an enzyme to break β1→4 bonds, so cellulose is dietary fibre.

### Cell walls
- **Plant cell wall:** mainly **cellulose**.
- **Bacterial cell wall:** **peptidoglycan**, polysaccharide chains cross-linked by short peptides (the target of penicillin).

### Recognition and signalling
Sugars on proteins and lipids (**glycoproteins**, **glycolipids**) project from the cell surface. Their many hydroxyl groups and varied linkages give huge diversity, which makes them ideal for **cell recognition**, for example blood groups.
`,
          q: [
            mc('Which polysaccharide is the main energy store in animals?', 'Glycogen', 'It is stored in the liver and muscles.', [
              ['Cellulose', 'Cellulose is structural in plants.'],
              ['Starch', 'Starch is the energy store in plants.'],
            ]),
            mc('Why can humans not digest cellulose?', 'They lack an enzyme that hydrolyzes β1→4 glycosidic bonds', 'Human enzymes act on α linkages.', [
              ['Cellulose is made of amino acids', 'Cellulose is made of glucose.'],
              ['Cellulose has no glycosidic bonds', 'It is a polymer of glucose joined by glycosidic bonds.'],
            ]),
          ],
        },
      ],
    },
    5: {
      summary: 'Amino acids, the peptide bond and the four levels of protein structure.',
      sessions: [
        {
          t: 'Amino acids and the peptide bond',
          s: 'Structure, side chains and linking residues.',
          md: `
## Amino acids

Each amino acid has a central **α-carbon** bonded to an **amino group** (–NH₃⁺), a **carboxyl group** (–COO⁻), a hydrogen and a variable **side chain (R)**. At pH 7 amino acids are **zwitterions** (both charged).

### Classes by side chain
- **Nonpolar (hydrophobic):** Ala, Val, Leu, Ile, Met, Phe, Trp, Pro
- **Polar uncharged:** Ser, Thr, Cys, Asn, Gln, Tyr
- **Acidic (negative):** Asp, Glu
- **Basic (positive):** Lys, Arg, His

### L-isomers
The α-carbon is chiral, and proteins use only **L-amino acids**. **Glycine** is the exception: its side chain is H, so it has two identical groups and is not chiral.

### The peptide bond
A **peptide bond** joins the carboxyl group of one amino acid to the amino group of the next in a **condensation** (dehydration) reaction, releasing water. Hydrolysis breaks it. A chain has an **N-terminus** (free amino group) and a **C-terminus** (free carboxyl).

The peptide bond has **partial double-bond character**: it is **planar and rigid**, with no free rotation. Only the bonds on either side of the α-carbon (φ and ψ angles) rotate. This restricts the possible shapes of a protein.
`,
          q: [
            mc('Which amino acid is not chiral?', 'Glycine', 'Its side chain is a hydrogen atom, so the α-carbon has two identical groups.', [
              ['Alanine', 'Alanine has four different groups on the α-carbon.'],
              ['Serine', 'Serine is chiral.'],
            ]),
            mc('Why is the peptide bond planar and rigid?', 'It has partial double-bond character', 'Resonance shares electrons between C–N and C=O.', [
              ['It is an ionic bond', 'It is a covalent bond.'],
              ['It is a hydrogen bond', 'It is a covalent bond.'],
            ]),
          ],
        },
        {
          t: 'Levels of protein structure and folding',
          s: 'Primary to quaternary structure and what drives folding.',
          md: `
## Protein structure

| Level | Description | Held by |
| --- | --- | --- |
| **Primary** | Sequence of amino acids | Peptide (covalent) bonds |
| **Secondary** | Local folds: **α-helix**, **β-sheet** | Hydrogen bonds between backbone C=O and N–H |
| **Tertiary** | Overall 3D shape of one chain | Hydrophobic effect, H-bonds, ionic bonds, **disulfide bonds** (covalent, Cys–Cys) |
| **Quaternary** | Assembly of two or more chains | Same non-covalent forces |

### Primary structure defines the shape
Anfinsen showed that a denatured protein can refold on its own, so the **amino acid sequence contains the information** for the final structure.

### Secondary structure
In an **α-helix** each backbone C=O bonds to the N–H four residues along, giving 3.6 residues per turn. In a **β-sheet** hydrogen bonds link neighbouring strands. Proline disrupts helices.

### What drives folding?
In water, the **hydrophobic effect**: nonpolar side chains bury inside while polar ones face the water. In a nonpolar solvent, the opposite happens: polar parts cluster inside.

### Domains and quaternary structure
A **domain** is an independently folding unit of a chain, often with a particular function. Quaternary structure needs **more than one polypeptide**; haemoglobin has four.
`,
          q: [
            mc('Which interaction mainly stabilizes an α-helix?', 'Hydrogen bonds between backbone C=O and N–H groups', 'These bonds link residues i and i+4.', [
              ['Disulfide bonds between side chains', 'These are mostly tertiary structure.'],
              ['Ionic bonds between phosphate groups', 'Not a feature of helices.'],
            ]),
            mc('What is the main driving force for folding of a protein in water?', 'The hydrophobic effect, which buries nonpolar side chains in the interior', 'Burying them frees water from ordering around nonpolar groups.', [
              ['The formation of peptide bonds', 'They form before folding.'],
              ['Attraction between all side chains', 'Folding is not driven by that.'],
            ]),
          ],
        },
      ],
    },
    6: {
      summary: 'Ligand binding, enzyme catalysis and kinetics, and inhibitors.',
      sessions: [
        {
          t: 'Binding and catalysis',
          s: 'Ligands, equilibrium binding and how enzymes lower activation energy.',
          md: `
## Protein–ligand binding

A **ligand** is any molecule that binds to a protein (P + L ⇌ PL). A **substrate** is a ligand that the enzyme converts into a product. Binding uses **non-covalent** interactions (hydrogen bonds, ionic, hydrophobic, van der Waals) and is **reversible and dynamic**.

Binding parallels weak-electrolyte dissociation: the **dissociation constant** Kd = [P][L]/[PL]. A lower Kd means tighter binding. Increasing [L] pushes the equilibrium toward PL. A plot of fraction bound vs. [L] is a **hyperbola** that levels off as the protein is saturated; at [L] = Kd, half the protein is bound.

## Enzymes
An **enzyme** is a biological catalyst (usually a protein). It **lowers the activation energy** (Eₐ) and so speeds up a reaction, without changing the equilibrium or ΔG.

E + S ⇌ ES → E + P

The enzyme binds the substrate at the **active site**, forming the **ES complex**; it stabilizes the transition state, then releases the product and is unchanged.
`,
          q: [
            mc('What does an enzyme change about a reaction?', 'It lowers the activation energy', 'This makes the reaction faster.', [
              ['It changes the equilibrium constant', 'Enzymes do not change equilibrium.'],
              ['It makes an unfavourable ΔG favourable', 'ΔG is unchanged.'],
            ]),
            mc('A protein is half-saturated with ligand when the free ligand concentration equals', 'Kd', 'By definition of Kd.', [
              ['Zero', 'No ligand would be bound.'],
              ['Twice Kd', 'At that point more than half is bound.'],
            ]),
          ],
        },
        {
          t: 'Enzyme kinetics, pH, temperature and inhibitors',
          s: 'Michaelis–Menten behaviour and inhibitor types.',
          md: `
## Michaelis–Menten kinetics

v = Vmax [S] / (Km + [S]).

- **Vmax**: maximum rate when all enzyme is saturated.
- **Km**: the substrate concentration at which v = Vmax/2. A low Km suggests tight substrate binding.

If Km = 2 mM and [S] = 6 mM, v = 6/(2 + 6) Vmax = **0.75 Vmax**.

### pH and temperature
Each enzyme has an **optimal pH** (ionization of active-site groups) and **temperature**. Rate rises with temperature up to a point, then falls as the protein **denatures**.

### Inhibitors
| Type | Binds | Effect on Vmax | Effect on Km |
| --- | --- | --- | --- |
| **Competitive** | Active site (competes with S) | Unchanged | **Increases** |
| **Uncompetitive** | ES complex only | **Decreases** | Decreases |
| **Noncompetitive** | Enzyme and ES at another site | **Decreases** | Unchanged |

A competitive inhibitor can be overcome by adding a lot of substrate.
`,
          q: [
            mc('Km = 2 mM. At [S] = 6 mM, what fraction of Vmax is reached?', '0.75', '6 / (2 + 6) = 0.75.', [
              ['0.50', 'That occurs at [S] = Km (2 mM).'],
              ['0.33', 'This is not the result of the equation.'],
            ]),
            mc('A competitive inhibitor changes Vmax and Km as follows:', 'Vmax unchanged and Km increases', 'High substrate can outcompete the inhibitor, so Vmax is reachable, but more S is needed.', [
              ['Vmax decreases and Km unchanged', 'This is noncompetitive inhibition.'],
              ['Both decrease', 'This is uncompetitive inhibition.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Biological chemistry',
    tasks: [
      mc('A bond between the H of one water molecule and the O of another is a', 'Hydrogen bond', 'A hydrogen bond links an H on an electronegative atom to a lone pair on another.', [
        ['Covalent bond', 'Covalent bonds share electrons within a molecule.'],
        ['Ionic bond', 'No ions are involved.'],
        ['Peptide bond', 'Peptide bonds join amino acids.'],
      ]),
      mc('Which property of water is due mainly to hydrogen bonding?', 'High specific heat', 'Energy is needed to break hydrogen bonds, buffering temperature changes.', [
        ['Being a nonpolar solvent', 'Water is polar.'],
        ['Being less dense as a gas', 'This is not a hydrogen-bond property.'],
        ['Having no surface tension', 'Water has high surface tension.'],
      ]),
      mc('A solution has pH 5. How does its [H⁺] compare with a solution at pH 7?', '100 times higher', 'Each pH unit is a factor of 10, so two units is 100.', [
        ['2 times higher', 'The pH scale is logarithmic.'],
        ['100 times lower', 'Lower pH means more H⁺.'],
        ['The same', 'The pH values differ.'],
      ]),
      mc('A buffer is made with a weak acid of pKa 6.8. It is most effective at', 'About pH 6.8, within ±1 unit', 'A buffer works best near its pKa.', [
        ['pH 2', 'This is far from the pKa.'],
        ['pH 11', 'This is far from the pKa.'],
        ['Any pH', 'The range is limited.'],
      ]),
      mc('Which statement about cellulose and glycogen is correct?', 'Cellulose is made of β-glucose and is structural; glycogen is made of α-glucose and stores energy', 'Different linkages give different structures and roles.', [
        ['Both are made of amino acids', 'Both are polymers of glucose.'],
        ['Cellulose stores energy in animals', 'Cellulose is a plant structural polymer.'],
        ['Glycogen is found in plant cell walls', 'It is found in animals.'],
      ]),
      mc('Which type of reaction links two amino acids by a peptide bond?', 'Condensation (dehydration), releasing water', 'Hydrolysis is the reverse.', [
        ['Hydrolysis, using water', 'Hydrolysis breaks the bond.'],
        ['Oxidation', 'The reaction is not a redox reaction.'],
        ['Phosphorylation', 'No phosphate is added.'],
      ]),
      mc('Which level of protein structure is stabilized mostly by hydrogen bonds between backbone atoms?', 'Secondary structure', 'α-helices and β-sheets form through backbone hydrogen bonds.', [
        ['Primary structure', 'It is stabilized by covalent peptide bonds.'],
        ['Tertiary structure', 'It mainly involves side-chain interactions.'],
        ['None; all are covalent', 'Secondary structure is non-covalent.'],
      ]),
      mc('An enzyme has Vmax = 100 µmol/min and Km = 5 mM. What is the rate at [S] = 5 mM?', '50 µmol/min', 'At [S] = Km, v = Vmax/2.', [
        ['100 µmol/min', 'That is Vmax.'],
        ['5 µmol/min', 'This is not the result.'],
        ['25 µmol/min', 'This is not the result.'],
      ]),
      mc('An inhibitor reduces Vmax but does not change Km. What type is it?', 'Noncompetitive', 'It reduces the amount of functional enzyme, which lowers Vmax only.', [
        ['Competitive', 'Competitive inhibitors raise Km.'],
        ['Uncompetitive', 'Uncompetitive inhibitors lower both Vmax and Km.'],
        ['An activator', 'An activator would not reduce Vmax.'],
      ]),
      tf('An enzyme makes a reaction with a positive ΔG spontaneous.', false, 'Enzymes speed up reactions by lowering activation energy, but they do not change ΔG or the equilibrium.', 'Correct. Enzymes change the rate, not the thermodynamics.'),
    ],
  },
};
