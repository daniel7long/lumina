import { mc, tf } from '../builder.js';

export default {
  summary: 'Explore the boundaries of the cell: how lipids assemble into membranes, and how molecules cross them.',
  modules: {
    7: {
      summary: 'Lipid classes, amphipathic molecules and the fluid mosaic membrane.',
      sessions: [
        {
          t: 'Lipids and the structure of membranes',
          s: 'Fatty acids, phospholipids, micelles, liposomes and the fluid mosaic model.',
          md: `
## Lipids

Lipids are mostly nonpolar molecules that dissolve poorly in water.

| Class | Structure | Function |
| --- | --- | --- |
| **Fats (triglycerides)** | Glycerol + 3 fatty acids (**ester bonds**) | Long-term energy storage |
| **Phospholipids** | Glycerol + 2 fatty acids + phosphate head group | Membrane structure |
| **Glycolipids** | Lipid + carbohydrate | Cell recognition |
| **Steroids (cholesterol)** | Four fused rings | Membrane fluidity, hormone precursors |

### Fatty acids
A long hydrocarbon chain with a carboxyl group. **Saturated** chains have no double bonds and pack tightly (solid at room temperature); **unsaturated** chains have cis double bonds that create kinks, which keeps membranes fluid.

### Amphipathic molecules
A phospholipid is **amphipathic**: a polar (hydrophilic) head and two nonpolar (hydrophobic) tails. In water, the tails hide from water:
- **Micelle:** a single-layer sphere with tails inside (formed by single-tailed molecules such as soaps)
- **Bilayer / liposome:** a double layer enclosing a water-filled compartment (formed by two-tailed phospholipids)

### The fluid mosaic model
The membrane is a **fluid** phospholipid bilayer in which **proteins** (integral and peripheral) float like a mosaic. Lipids and proteins move sideways easily; flipping between leaflets is rare. **Cholesterol** buffers fluidity. Carbohydrates face the outside.
`,
          q: [
            mc('Which feature of phospholipids allows them to form bilayers in water?', 'They are amphipathic, with polar heads and nonpolar tails', 'Heads face the water and tails are buried.', [
              ['They are fully nonpolar', 'Fully nonpolar molecules would not form a bilayer.'],
              ['They are fully polar', 'Fully polar molecules dissolve in water.'],
            ]),
            mc('How do cis double bonds in fatty acid chains affect a membrane?', 'They create kinks that keep the membrane more fluid', 'Kinked chains pack less tightly.', [
              ['They make the membrane more rigid', 'Saturated chains do that.'],
              ['They make the membrane permeable to all molecules', 'Fluidity is not the same as free permeability.'],
            ]),
          ],
        },
      ],
    },
    8: {
      summary: 'How substances cross membranes: diffusion, transport proteins, osmosis and endocytosis.',
      sessions: [
        {
          t: 'Diffusion, facilitated diffusion and active transport',
          s: 'Which direction molecules move and what energy it costs.',
          md: `
## Moving across a membrane

Molecules move **spontaneously down their concentration gradient** (or electrochemical gradient, for ions), from high to low concentration, increasing entropy.

### Simple diffusion
Small, **nonpolar** or very small uncharged molecules (O₂, CO₂, steroids) cross directly. The rate rises with a **steeper gradient**, **higher temperature**, **smaller size** and **greater lipid solubility**.

### Transport proteins
Charged and polar molecules (ions, glucose, amino acids) cannot cross the hydrophobic core, so they use **membrane transport proteins** (channels or carriers), which are selective for size, charge and shape.

| Type | Direction | Energy |
| --- | --- | --- |
| **Facilitated diffusion** | Down the gradient | None (passive) |
| **Active transport** | **Against** the gradient | Needs energy (ATP or an ion gradient) |

### Uniport, symport, antiport
- **Uniport:** one substance in one direction
- **Symport:** two substances in the **same** direction
- **Antiport:** two substances in **opposite** directions

**Example:** the Na⁺/K⁺ ATPase pumps 3 Na⁺ out and 2 K⁺ in using ATP (primary active transport, an antiport). The sodium–glucose symporter uses the Na⁺ gradient to bring glucose in (secondary active transport).
`,
          q: [
            mc('Glucose moves from low to high concentration into a cell, using the Na⁺ gradient. This is', 'Secondary active transport (a symport)', 'Energy from the Na⁺ gradient drives glucose uphill with Na⁺ in the same direction.', [
              ['Simple diffusion', 'Simple diffusion goes down the gradient.'],
              ['Facilitated diffusion', 'Facilitated diffusion is passive.'],
            ]),
            mc('Which describes an antiport?', 'It moves two different solutes in opposite directions', 'The Na⁺/K⁺ pump is an example.', [
              ['It moves two solutes in the same direction', 'This is a symport.'],
              ['It moves one solute through a channel', 'This is a uniport.'],
            ]),
          ],
        },
        {
          t: 'Osmosis and endocytosis',
          s: 'Tonicity, cell shape and bulk transport.',
          md: `
## Osmosis

**Osmosis** is the net movement of **water** across a selectively permeable membrane from lower solute concentration (higher water concentration) to higher solute concentration. We describe it in terms of the solvent because the solutes often cannot cross. Osmotic pressure rises with the solute concentration difference.

### Tonicity (compared with the cell)
| Solution | Solute vs. cell | Animal cell |
| --- | --- | --- |
| **Isotonic** | Equal | No net change |
| **Hypertonic** | Higher outside | Water leaves; cell **shrinks** |
| **Hypotonic** | Lower outside | Water enters; cell **swells** (may burst) |

Red blood cells are kept in isotonic saline (0.9% NaCl, about 308 mOsm).

## Endocytosis
Cells take in large material by wrapping membrane around it:
- **Phagocytosis:** "cell eating" of large particles (bacteria)
- **Pinocytosis:** "cell drinking" of fluid and small solutes
- **Receptor-mediated endocytosis:** specific molecules bind to receptors, collect in coated pits and are internalized (such as LDL cholesterol)

The **inside** surface of the endocytic vesicle is the same membrane face as the **outside** of the cell, so the vesicle contents remain topologically "outside" until released. Vesicles fuse with endosomes, then lysosomes, or the receptors recycle to the surface.
`,
          q: [
            mc('A red blood cell is placed in pure water. What is expected to happen?', 'It swells and may burst, as water enters', 'Pure water is hypotonic compared with the cell.', [
              ['It shrinks, as water leaves', 'That occurs in a hypertonic solution.'],
              ['Nothing changes', 'That occurs in isotonic solution.'],
            ]),
            mc('How does receptor-mediated endocytosis differ from phagocytosis?', 'It takes up specific molecules that bind receptors, rather than large particles non-selectively', 'Receptors collect their ligand in coated pits.', [
              ['It takes up large particles such as bacteria', 'That describes phagocytosis.'],
              ['It does not form vesicles', 'It forms vesicles.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Cell biology',
    tasks: [
      mc('Which molecule is a triglyceride?', 'Glycerol joined by ester bonds to three fatty acids', 'Triglycerides store energy.', [
        ['Glycerol with two fatty acids and a phosphate group', 'This is a phospholipid.'],
        ['Four fused rings', 'This is a steroid.'],
        ['A chain of glucose units', 'This is a polysaccharide.'],
      ]),
      mc('Soap molecules with a single hydrophobic tail form what in water?', 'Micelles', 'Single-tailed amphipathic molecules form spheres with tails inside.', [
        ['Bilayers', 'Two-tailed phospholipids form bilayers.'],
        ['Crystals', 'They self-assemble in other ways.'],
        ['Proteins', 'Soaps are not made of protein.'],
      ]),
      mc('Which of these crosses a lipid bilayer most easily by simple diffusion?', 'Oxygen', 'Small nonpolar molecules cross readily.', [
        ['Sodium ions', 'Ions cannot cross the hydrophobic core easily.'],
        ['Glucose', 'Glucose is polar and needs a transporter.'],
        ['Proteins', 'They are too large.'],
      ]),
      mc('Which statement about facilitated diffusion is correct?', 'It moves a molecule down its gradient through a protein and needs no energy', 'It is passive but uses a protein.', [
        ['It moves molecules against their gradient', 'That is active transport.'],
        ['It needs no protein', 'A protein is needed.'],
        ['It requires ATP', 'It is passive.'],
      ]),
      mc('A cell is in a hypertonic solution. What happens?', 'Water leaves and the cell shrinks', 'The solute concentration is higher outside.', [
        ['Water enters and the cell swells', 'This is hypotonic.'],
        ['Nothing happens', 'That is isotonic.'],
        ['The cell makes more ATP', 'It does not.'],
      ]),
      mc('Where does the energy for secondary active transport come from?', 'An existing ion gradient, built by primary active transport', 'For example, the Na⁺ gradient made by the Na⁺/K⁺ ATPase.', [
        ['Direct hydrolysis of ATP by the transporter', 'That describes primary active transport.'],
        ['Simple diffusion of water', 'Not a source of energy for transport.'],
        ['Sunlight', 'Not for animal cells.'],
      ]),
      mc('Which process engulfs a bacterium?', 'Phagocytosis', 'It takes in large particles.', [
        ['Pinocytosis', 'It takes in fluid.'],
        ['Facilitated diffusion', 'It moves small solutes through proteins.'],
        ['Osmosis', 'It is the movement of water.'],
      ]),
      tf('Water moves by osmosis toward the side with the higher solute concentration.', true, 'Correct. Water moves from lower solute to higher solute concentration, if the solute cannot cross.', 'Not quite. Net water movement is toward the side with more solute.'),
    ],
  },
};
