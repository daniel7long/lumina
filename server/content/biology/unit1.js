import { mc, tf } from '../builder.js';

export default {
  summary: 'Meet the cell, the unit of life, and the central ideas that link chemistry, information and function.',
  modules: {
    1: {
      summary: 'The cell as the unit of life, cell types and how scientists study them.',
      sessions: [
        {
          t: 'The cell and the central ideas of modern biology',
          s: 'Prokaryotes, eukaryotes, organelles and the flow of information.',
          md: `
## The cell is the unit of life

All living things are made of one or more **cells**, and cells come only from existing cells. Modern biology rests on a few big ideas:
- **Structure fits function:** shape tells you what a molecule or organelle does.
- **Information flows:** DNA → RNA → protein (the **central dogma**).
- **Energy is transformed:** cells capture, store and spend energy, mostly as ATP.
- **Chemistry underlies life:** cells obey the laws of chemistry and physics.

### Two kinds of cells
| | Prokaryotic | Eukaryotic |
| --- | --- | --- |
| Nucleus | No (DNA in a nucleoid) | **Yes** |
| Membrane-bound organelles | No | **Yes** |
| Typical size | ~1–10 µm | ~10–100 µm |
| Examples | Bacteria, archaea | Animals, plants, fungi, protists |

### Main eukaryotic organelles
| Organelle | Function |
| --- | --- |
| Nucleus | Stores DNA; site of transcription |
| Ribosome | Makes proteins |
| Rough ER | Makes and folds secreted and membrane proteins |
| Golgi apparatus | Modifies, sorts and packages proteins |
| Mitochondrion | ATP production by oxidative phosphorylation |
| Lysosome | Digests waste and worn-out parts |
| Chloroplast (plants) | Photosynthesis |

### How we study cells
Scientists use **experiments** (change one variable and measure the result), **models** (simplified representations such as the double helix or the fluid mosaic membrane) and tools such as microscopes and DNA sequencing.
`,
          q: [
            mc('Which feature is found in eukaryotic cells but not in prokaryotic cells?', 'A membrane-bound nucleus', 'Prokaryotes keep their DNA in a nucleoid with no surrounding membrane.', [
              ['Ribosomes', 'Both cell types have ribosomes.'],
              ['DNA', 'Both cell types have DNA.'],
            ]),
            mc('Which organelle is the main site of ATP production in animal cells?', 'Mitochondrion', 'Oxidative phosphorylation takes place at the inner mitochondrial membrane.', [
              ['Golgi apparatus', 'The Golgi modifies and sorts proteins.'],
              ['Lysosome', 'Lysosomes digest materials.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Foundations',
    tasks: [
      mc('What does the central dogma of molecular biology describe?', 'The flow of information from DNA to RNA to protein', 'This is the central dogma.', [
        ['The flow of energy from the sun to ATP', 'This describes energy flow.'],
        ['The transport of ions across membranes', 'This is a separate topic.'],
        ['The division of cells', 'This is the cell cycle.'],
      ]),
      mc('A bacterium differs from a human cell because the bacterium', 'has no nucleus or membrane-bound organelles', 'Bacteria are prokaryotes.', [
        ['has no DNA', 'Bacteria do have DNA.'],
        ['has no ribosomes', 'Bacteria have ribosomes.'],
        ['is always larger', 'Bacteria are usually smaller.'],
      ]),
      mc('A pancreatic cell that secretes digestive enzymes would be expected to have an extensive', 'Rough endoplasmic reticulum', 'Secreted proteins are made on the rough ER.', [
        ['Chloroplast system', 'Animal cells do not have chloroplasts.'],
        ['Cell wall', 'Animal cells do not have cell walls.'],
        ['Nucleoid', 'Nucleoids are found in prokaryotes.'],
      ]),
      mc('Which organelle digests worn-out cell parts?', 'Lysosome', 'Lysosomes contain digestive enzymes.', [
        ['Ribosome', 'Ribosomes make proteins.'],
        ['Nucleus', 'The nucleus stores DNA.'],
        ['Mitochondrion', 'Mitochondria produce ATP.'],
      ]),
      tf('The principle "structure fits function" means that the shape of a molecule or organelle helps explain what it does.', true, 'Correct. For example, the folds of the inner mitochondrial membrane increase the area for ATP production.', 'Not quite. Structure and function are closely linked throughout biology.'),
    ],
  },
};
