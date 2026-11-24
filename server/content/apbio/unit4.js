import { mc, tf } from '../builder.js';

export default {
  summary: 'See how cells detect and respond to signals, and how the cell cycle is controlled so that growth stays in check.',
  modules: {
    7: {
      summary: 'Reception, transduction and response.',
      sessions: [{
        t: 'Cell signaling',
        s: 'Ligands and receptors, signal transduction pathways, second messengers and amplification.',
        md: `
## Signals and receptors

Cells communicate by chemical signals. A **ligand** (the signal molecule) binds a **receptor protein** with a complementary shape. Signals can act on neighboring cells (paracrine), on the same cell (autocrine), or across the body through the blood (**hormones**).

- **Cell-surface receptors** bind signals that cannot cross the membrane (most peptide hormones). Examples: **G protein-coupled receptors** and receptor tyrosine kinases.
- **Intracellular receptors** bind nonpolar signals that diffuse through the membrane, such as **steroid hormones**, and often act as transcription factors that change gene expression directly.

## Three stages

1. **Reception:** the ligand binds the receptor, changing its shape.
2. **Transduction:** a series of molecules relays the signal, often by **phosphorylation cascades** (kinases adding phosphate groups to the next protein) and **second messengers** such as **cAMP** and Ca²⁺.
3. **Response:** a change in cell activity (enzyme activation, gene expression, cell division, apoptosis).

## Why cascades?

- Each step is an enzyme, so one signal molecule can activate many molecules at the next step. This **amplifies** the signal.
- Steps allow **regulation** and **specificity**: different cells with different relay proteins respond differently to the same signal.
- The signal is switched off when the ligand is removed and **phosphatases** remove the phosphates.

Disruption of signaling can cause disease: cholera toxin locks a G protein in the "on" state, and many cancers involve receptors or kinases that signal without a ligand.
`,
        q: [
          mc('Why can a steroid hormone act through an intracellular receptor, while most peptide hormones cannot?', 'Steroids are nonpolar and can cross the plasma membrane', 'The lipid bilayer allows small nonpolar molecules to pass; peptides are large and polar and must bind receptors at the surface.', [
            ['Steroids are larger than peptides', 'Steroids are small; it is their nonpolar nature that lets them enter.'],
            ['Peptide hormones do not need receptors', 'All hormones need a receptor to cause a response.'],
          ]),
          tf('A phosphorylation cascade can amplify a signal because each activated enzyme can activate many molecules in the next step.', true, 'This multiplies the number of activated molecules at each stage.', 'Each kinase can phosphorylate many targets, so a few receptor molecules can produce a large response.'),
        ],
      }],
    },
    8: {
      summary: 'The phases of the cell cycle, mitosis, checkpoints and cancer.',
      sessions: [{
        t: 'The cell cycle and its regulation',
        s: 'Interphase, the stages of mitosis, cyclins and checkpoints, and how mutations lead to cancer.',
        md: `
## The cell cycle

- **Interphase** (most of the cycle): **G₁** (growth), **S** (DNA replicates, so each chromosome gets two sister chromatids), **G₂** (preparation).
- **M phase:** **mitosis** (division of the nucleus) and **cytokinesis** (division of the cytoplasm).
- **G₀:** a resting state; some cells (neurons) stay in it permanently.

## Stages of mitosis

**Prophase:** chromosomes condense; spindle forms. **Metaphase:** chromosomes line up at the plate. **Anaphase:** sister chromatids separate. **Telophase:** nuclei re-form. A human somatic cell has **46 chromosomes** in G₁, **46 chromosomes (92 chromatids)** after S phase and at metaphase, and each daughter cell receives 46.

## Counting cells to find time

If a sample of 200 cells has 160 in interphase and the cycle is 24 h, interphase takes (160/200) × 24 = **19.2 h**.

## Control of the cycle

Checkpoints at **G₁**, **G₂** and the **spindle (metaphase)** check conditions before the cell proceeds. **Cyclins** (whose levels rise and fall) activate **cyclin-dependent kinases (Cdks)**, which drive the cell through checkpoints.

**Cancer** results from loss of this control:
- **Tumor suppressor** genes such as **p53** stop the cycle or trigger apoptosis when DNA is damaged. Mutations that **disable** them remove the brakes.
- **Proto-oncogenes** promote division; mutations make them **oncogenes** that act like a stuck accelerator.

Cancer usually needs several mutations to accumulate in one cell lineage.
`,
        q: [
          mc('How many chromosomes does a human cell have at metaphase of mitosis?', '46', 'The number of chromosomes stays 46; each has two sister chromatids, giving 92 chromatids.', [
            ['92', 'This is the number of chromatids; each replicated chromosome still counts as one chromosome.'],
            ['23', 'This is the number in a gamete, not in a cell in mitosis.'],
          ]),
          mc('A cell’s p53 gene is mutated so that it no longer works. What is the most likely consequence?', 'Cells with damaged DNA may continue to divide', 'p53 normally halts the cycle or triggers apoptosis, so without it damaged cells escape control.', [
            ['The cell stops in G₀ permanently', 'p53 loss removes a brake; it does not cause cells to stop dividing.'],
            ['The cell cannot replicate its DNA', 'DNA replication does not depend on p53.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Cell communication and the cell cycle',
    tasks: [
      mc('A sample of 200 cells is examined. 160 are in interphase and 40 are in mitosis. If the whole cycle takes 24 hours, how long does interphase last?', '19.2 hours', '(160/200) × 24 h = 19.2 h.', [
        ['4.8 hours', 'This is the time for mitosis (40/200 × 24).'],
        ['16 hours', 'This is two thirds of the cycle, which does not match the counts.'],
        ['24 hours', 'This is the length of the entire cycle.'],
      ]),
      mc('During which phase of the cell cycle is DNA replicated?', 'S phase', 'DNA synthesis occurs in S, producing sister chromatids.', [
        ['G₁ phase', 'G₁ is a growth phase before replication.'],
        ['Prophase', 'Chromosomes condense in prophase; the DNA has already been copied.'],
        ['Cytokinesis', 'Cytokinesis divides the cytoplasm.'],
      ]),
      mc('What happens during anaphase?', 'Sister chromatids separate and move to opposite poles', 'The spindle fibers shorten and pull the chromatids apart.', [
        ['Chromosomes line up at the center of the cell', 'This describes metaphase.'],
        ['The nuclear envelope re-forms', 'This describes telophase.'],
        ['DNA is replicated', 'DNA replication occurs in S phase, long before mitosis.'],
      ]),
      mc('Which statement about cyclins is correct?', 'They activate cyclin-dependent kinases at specific points of the cycle', 'Rising cyclin levels activate Cdks, which phosphorylate proteins that move the cell past a checkpoint.', [
        ['Their concentration stays constant throughout the cycle', 'The name comes from their cyclic rise and fall.'],
        ['They are produced only in cancer cells', 'All dividing cells make cyclins.'],
      ]),
      tf('Steroid hormones typically bind to receptors on the surface of the cell.', false, 'Steroid hormones can cross the membrane and bind receptors inside the cell.', 'Correct. Their nonpolar structure lets them enter, so they bind intracellular receptors that often act as transcription factors.'),
      mc('A mutation makes a receptor send a signal continuously even when no ligand is bound. Which gene type does this describe, and what is the likely outcome?', 'An oncogene; uncontrolled cell division', 'A signaling protein that is always on acts like a stuck accelerator for division.', [
        ['A tumor suppressor gene; apoptosis', 'Tumor suppressors slow division; a constantly active signal speeds it up.'],
        ['A tumor suppressor gene; cell cycle arrest', 'Arrest would be the result of a working suppressor, not a stuck receptor.'],
      ]),
      mc('Why does a signal transduction pathway often involve several steps instead of a single one?', 'Several steps allow amplification and regulation of the signal', 'Each enzyme in the series can activate many molecules, and each step offers a point of control.', [
        ['It lets the signal molecule enter the nucleus directly', 'Surface receptors relay the signal without the ligand entering the cell.'],
        ['It makes the signal weaker so that the cell is protected', 'Cascades generally amplify rather than weaken a signal.'],
      ]),
    ],
  },
};
