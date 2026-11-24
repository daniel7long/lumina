import { mc, tf } from '../builder.js';

export default {
  summary: 'Explore the compartments of the cell, why cells stay small, and how membranes control what enters and leaves.',
  modules: {
    3: {
      summary: 'Organelles, prokaryotes and eukaryotes, and why cells are small.',
      sessions: [{
        t: 'Organelles and cell size',
        s: 'The major organelles, the endomembrane system, endosymbiosis and surface area to volume ratio.',
        md: `
## Prokaryotes and eukaryotes

**Prokaryotic** cells (bacteria and archaea) have no nucleus or membrane-bound organelles; their DNA is a circular chromosome in the cytoplasm. **Eukaryotic** cells have a nucleus and membrane-bound organelles, which **compartmentalize** reactions so incompatible processes can happen at once.

## Major organelles

| Organelle | Function |
|---|---|
| Nucleus | holds DNA; site of transcription |
| Ribosome | translation (protein synthesis); free or on rough ER |
| Rough ER | makes proteins for secretion, membranes and lysosomes |
| Smooth ER | lipid synthesis, detoxification |
| Golgi apparatus | modifies, sorts and packages proteins into vesicles |
| Lysosome | digests materials with hydrolytic enzymes |
| Mitochondrion | ATP production by cellular respiration |
| Chloroplast | photosynthesis (plants and algae) |
| Central vacuole, cell wall | storage and turgor; support (plants) |

### The secretory pathway
A secreted protein is made by a ribosome on the **rough ER**, enters the ER, moves in a vesicle to the **Golgi**, is modified, and leaves in a vesicle that fuses with the **plasma membrane**.

### Endosymbiosis
Mitochondria and chloroplasts are thought to descend from engulfed prokaryotes. Evidence: they have their **own circular DNA**, their own ribosomes similar to bacterial ones, a double membrane, and they divide independently.

## Surface area to volume ratio

Materials enter and leave through the surface, but they are used throughout the volume. For a cube of side s, **surface area = 6s²** and **volume = s³**, so the ratio is **6/s**. A cube with a 2 µm side has a ratio of 3; one with a 4 µm side has a ratio of **1.5**. As a cell grows, the ratio falls, so large cells exchange materials less efficiently. This is why cells stay small or have folded membranes (microvilli).
`,
        q: [
          mc('What is the surface area to volume ratio of a cube-shaped cell with a 4 µm side?', '1.5', 'Surface area = 6 × 16 = 96 µm² and volume = 64 µm³, so the ratio is 96/64 = 1.5.', [
            ['0.67', 'The ratio was inverted (volume to surface area).'],
            ['3.0', 'This is the ratio for a cube with a 2 µm side.'],
            ['96', 'This is the surface area only, not the ratio.'],
          ]),
          mc('Which observation best supports the idea that mitochondria evolved from engulfed bacteria?', 'They contain their own circular DNA and bacteria-like ribosomes', 'These features are typical of prokaryotes and are not found in other organelles.', [
            ['They are surrounded by a membrane', 'Many organelles have membranes, including those not thought to have bacterial origins.'],
            ['They are found in plant cells but not animal cells', 'Animal cells have mitochondria too.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'The plasma membrane, transport and water potential.',
      sessions: [{
        t: 'Membranes, transport and water potential',
        s: 'Fluid-mosaic structure, passive and active transport, osmosis and water potential.',
        md: `
## The fluid-mosaic membrane

The plasma membrane is a **phospholipid bilayer**: hydrophilic phosphate heads face the water inside and outside, hydrophobic tails face each other in the middle. Proteins float within it, and cholesterol helps regulate fluidity. Small nonpolar molecules (O₂, CO₂) cross easily; ions and large polar molecules need protein help.

## Transport

| Type | Direction | Energy | Example |
|---|---|---|---|
| **Simple diffusion** | down a gradient | none | O₂ |
| **Facilitated diffusion** | down a gradient, through channel or carrier proteins | none | glucose, ions, water through aquaporins |
| **Active transport** | **against** a gradient | ATP or a gradient | Na⁺/K⁺ pump |
| **Bulk transport** | in vesicles | ATP | endocytosis, exocytosis |

The **Na⁺/K⁺ pump** uses ATP to move **3 Na⁺ out** and **2 K⁺ in** for each ATP.

## Osmosis and water potential

Water moves from **higher water potential (Ψ) to lower water potential**.

**Ψ = Ψₛ + Ψₚ**, where Ψₛ (solute potential) = −iCRT and Ψₚ is pressure potential.

- i is the ionization constant (1 for sucrose), C the molar concentration, R = 0.0831 L·bar/(mol·K), T the kelvin temperature.
- Open to the air, Ψₚ = 0. For 0.1 M sucrose at 293 K: Ψₛ = −(1)(0.1)(0.0831)(293) = **−2.43 bar**.
- Adding solute makes Ψₛ more negative, lowering Ψ. A cell with Ψₛ = −0.5 and Ψₚ = +0.3 has Ψ = **−0.2**.

A plant cell in a solution with lower Ψ than the cell loses water and its membrane pulls away from the wall (**plasmolysis**). In pure water (Ψ = 0), a plant cell takes up water until turgor pressure balances it.
`,
        q: [
          mc('What is the solute potential of a 0.1 M sucrose solution at 293 K? (R = 0.0831 L·bar/(mol·K), i = 1)', '−2.43 bar', 'Ψₛ = −iCRT = −(1)(0.1)(0.0831)(293) = −2.43 bar.', [
            ['+2.43 bar', 'Solute potential is always negative or zero; the sign is wrong.'],
            ['−0.24 bar', 'The temperature was entered as 29.3 rather than 293.'],
          ]),
          mc('A plant cell has Ψₛ = −0.5 and Ψₚ = +0.3. What is its water potential?', '−0.2', 'Ψ = Ψₛ + Ψₚ = −0.5 + 0.3 = −0.2.', [
            ['−0.8', 'The pressure potential was subtracted instead of added.'],
            ['+0.8', 'The solute potential has the wrong sign and the terms were subtracted.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Cell structure and function',
    tasks: [
      mc('Which sequence correctly shows the path of a protein that will be secreted from the cell?', 'Ribosome on rough ER → ER lumen → Golgi → vesicle → plasma membrane', 'Secreted proteins are made on the rough ER, sent to the Golgi for modification, and released by exocytosis.', [
        ['Nucleus → Golgi → lysosome → plasma membrane', 'The nucleus does not make proteins, and a lysosome is a digestive compartment.'],
        ['Golgi → ribosome → rough ER → plasma membrane', 'Proteins are made first, not last, and the ribosome is the starting point.'],
        ['Mitochondrion → smooth ER → Golgi → plasma membrane', 'Secretory proteins are made on ribosomes of the rough ER, not in the mitochondrion.'],
      ]),
      mc('Glucose enters a cell down its concentration gradient through a carrier protein without using ATP. What is this process?', 'Facilitated diffusion', 'The movement is passive (with the gradient), but it needs a protein because glucose is polar.', [
        ['Active transport', 'Active transport moves substances against a gradient and requires energy.'],
        ['Simple diffusion', 'Glucose is too large and polar to cross the lipid bilayer without a protein.'],
        ['Exocytosis', 'Exocytosis moves material out of the cell in vesicles.'],
      ]),
      mc('A plant cell is placed in a solution with a lower water potential than the cell. What happens?', 'Water leaves the cell and the membrane pulls away from the cell wall', 'Water moves toward the lower water potential, and the cell loses turgor (plasmolysis).', [
        ['Water enters the cell and it becomes turgid', 'This would occur in a solution with a higher water potential than the cell.'],
        ['There is no net movement of water', 'Net movement stops only when the water potentials are equal.'],
        ['Solutes leave the cell passively', 'The question is about water movement, and the solutes cannot cross the membrane freely.'],
      ]),
      mc('Which statement about the Na⁺/K⁺ pump is correct?', 'It uses ATP to move 3 Na⁺ out and 2 K⁺ in against their gradients', 'This is active transport and maintains the gradients that nerve cells depend on.', [
        ['It moves Na⁺ and K⁺ down their gradients without ATP', 'That would be facilitated diffusion, not a pump.'],
        ['It moves 2 Na⁺ out and 3 K⁺ in', 'The ratio is the other way around: 3 Na⁺ out and 2 K⁺ in.'],
      ]),
      tf('As a cell grows larger without changing shape, its surface area to volume ratio decreases.', true, 'Volume grows with the cube of the dimensions, surface area with the square.', 'The ratio of a cube is 6/s, so it falls as the side s increases, making exchange with the environment less efficient.'),
      mc('A cell has Ψₛ = −0.4 MPa and Ψₚ = +0.1 MPa. It is placed in a solution with Ψ = −0.6 MPa. Which way does water move?', 'Out of the cell', 'The cell’s Ψ is −0.3 MPa, which is higher than −0.6 MPa, and water moves from higher to lower water potential.', [
        ['Into the cell', 'Water moves toward the lower water potential, which is the solution.'],
        ['It does not move', 'The water potentials differ (−0.3 versus −0.6), so there is a net movement.'],
      ]),
      mc('Which feature of the phospholipid bilayer allows it to separate two aqueous environments?', 'The hydrophobic tails form a nonpolar interior that polar molecules cannot easily cross', 'Water and ions are repelled by the nonpolar core, so they pass only through proteins.', [
        ['The hydrophilic tails face each other', 'The tails are hydrophobic; it is the heads that are hydrophilic.'],
        ['The membrane is a solid layer with no fluidity', 'The membrane is fluid, and its proteins and lipids move laterally.'],
      ]),
    ],
  },
};
