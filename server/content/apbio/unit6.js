import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow the flow of genetic information from DNA to protein, see how cells switch genes on and off, and learn the tools used to copy and cut DNA.',
  modules: {
    11: {
      summary: 'Replication, transcription, translation and mutation.',
      sessions: [{
        t: 'Replication, transcription and translation',
        s: 'Semiconservative replication, making mRNA, reading codons and the effects of mutations.',
        md: `
## DNA replication

Replication is **semiconservative**: each new double helix has one old strand and one new strand. **Helicase** unwinds the DNA; **DNA polymerase** adds nucleotides only to the **3′ end**, so one strand (leading) is made continuously and the other (lagging) in short **Okazaki fragments** joined by **ligase**.

## Transcription

**RNA polymerase** reads the **template (antisense) strand** 3′ → 5′ and builds **mRNA** 5′ → 3′, with U replacing T. In eukaryotes the transcript is processed: a 5′ cap, a poly-A tail and **splicing** to remove introns.

Template DNA 3′-TAC CGA ATT-5′ gives mRNA 5′-AUG GCU UAA-3′.

## Translation

Ribosomes read mRNA in **codons** (three nucleotides). Each codon specifies an amino acid or a stop signal. **tRNA** molecules carry amino acids, and their **anticodon** pairs with the codon.

- AUG is the **start** codon (Met); UAA, UAG and UGA are **stop** codons.
- The code is **redundant** (several codons per amino acid) but not ambiguous.
- The mRNA above is read as Met–Ala, then stop: **2 amino acids**. A coding sequence of 30 nucleotides (without the stop codon) codes for 10 amino acids.

## Mutations

- **Silent:** the codon still codes for the same amino acid.
- **Missense:** a different amino acid (sickle cell disease is a single missense change).
- **Nonsense:** a stop codon appears early, giving a short protein.
- **Frameshift:** an insertion or deletion not in a multiple of three shifts the reading frame of every codon after it, usually with severe effects.
`,
        q: [
          mc('A template DNA strand reads 3′-TAC CGA ATT-5′. What is the mRNA sequence?', '5′-AUG GCU UAA-3′', 'RNA bases pair with the template (A–U, T–A, G–C, C–G) and U replaces T.', [
            ['5′-ATG GCT TAA-3′', 'RNA contains uracil, not thymine.'],
            ['3′-AUG GCU UAA-5′', 'The mRNA is made 5′ to 3′, so it must be written in that direction.'],
            ['5′-UAC CGA AUU-3′', 'This is the template sequence with U for T; the mRNA must be complementary to the template.'],
          ]),
          mc('Which type of mutation most likely has the most severe effect on a protein?', 'A single-nucleotide deletion early in the coding sequence', 'It shifts the reading frame for all the following codons.', [
            ['A silent substitution', 'A silent change does not alter the amino acid.'],
            ['A substitution in the third base of a codon', 'This often gives the same amino acid because of the redundancy of the code.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'Operons, transcription factors, PCR and gel electrophoresis.',
      sessions: [{
        t: 'Gene regulation and biotechnology',
        s: 'The lac operon, eukaryotic regulation, PCR, restriction enzymes and gels.',
        md: `
## Regulating genes

**Prokaryotes** group related genes in an **operon** controlled by a promoter and an operator.

- **lac operon (inducible):** the repressor protein normally binds the operator and blocks RNA polymerase. When **lactose** (as allolactose) is present, it binds the repressor, which releases the operator, so the genes for lactose digestion are transcribed.
- **trp operon (repressible):** the repressor is active only when tryptophan is present, switching off the synthesis genes.

**Eukaryotes** use **transcription factors** that bind **enhancers** and the promoter, as well as chromatin packaging, RNA processing and control of translation. Different cell types express different genes from the same genome.

## Biotechnology tools

- **Restriction enzymes** cut DNA at specific sequences (EcoRI cuts at GAATTC). A linear 5000 bp DNA cut at positions 1200 and 3500 gives fragments of **1200, 2300 and 1500 bp**.
- **Gel electrophoresis:** DNA, negatively charged, moves toward the **positive** electrode through a gel, and **smaller fragments move farther**.
- **PCR (polymerase chain reaction):** heat-stable DNA polymerase, primers and cycles of heating and cooling copy a DNA segment. Each cycle **doubles** the copies, so after n cycles there are **2ⁿ** copies per starting molecule: 32 after 5 cycles and about 10⁹ after 30.
- **Transformation:** a plasmid carrying a gene is taken up by bacteria, which then make the protein (for example, insulin).
`,
        q: [
          mc('In the lac operon, what happens when lactose is present?', 'Lactose inactivates the repressor, so the genes are transcribed', 'The repressor leaves the operator and RNA polymerase can transcribe the genes.', [
            ['The repressor binds the operator more tightly', 'This occurs when lactose is absent.'],
            ['The operator is deleted', 'The operator remains; its occupancy by the repressor changes.'],
          ]),
          mc('How many copies of a DNA segment exist after 5 cycles of PCR starting from one molecule?', '32', 'Each cycle doubles the number: 2⁵ = 32.', [
            ['10', 'The number of cycles was doubled instead of using 2 to the power of the cycles.'],
            ['25', 'The number of cycles was squared; copies double each cycle.'],
            ['5', 'This is the number of cycles, not the number of copies.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Gene expression and regulation',
    tasks: [
      mc('A linear DNA molecule of 5000 base pairs is cut by a restriction enzyme at positions 1200 and 3500. On a gel, which fragment travels the farthest?', 'The 1200 bp fragment', 'Smaller fragments move more easily through the gel, so the shortest fragment travels the farthest.', [
        ['The 2300 bp fragment', 'This is the largest fragment, so it moves the least.'],
        ['The 1500 bp fragment', 'It is shorter than 2300 bp but longer than 1200 bp, so it travels less far than the 1200 bp fragment.'],
        ['All fragments travel the same distance', 'Electrophoresis separates fragments by size.'],
      ]),
      mc('The DNA is replicated and each new molecule consists of one original strand and one new strand. What is this model called?', 'Semiconservative replication', 'Each daughter molecule conserves half of the parent.', [
        ['Conservative replication', 'This would give one all-original molecule and one all-new molecule.'],
        ['Dispersive replication', 'This would give strands that are mixtures of old and new segments.'],
      ]),
      mc('A mutation changes the codon GAA (glutamic acid) to GAG, which also codes for glutamic acid. What type of mutation is this?', 'Silent', 'The amino acid does not change because of the redundancy of the genetic code.', [
        ['Missense', 'A missense mutation changes the amino acid.'],
        ['Nonsense', 'A nonsense mutation creates a stop codon.'],
        ['Frameshift', 'A frameshift requires an insertion or deletion, not a substitution.'],
      ]),
      mc('A student starts a PCR with a single DNA molecule. How many copies will there be after 10 cycles, assuming perfect doubling?', '1024', '2¹⁰ = 1024.', [
        ['100', 'The cycles were multiplied by 10 instead of using exponentiation.'],
        ['20', 'The cycles were doubled once instead of using 2 to the power of the cycles.'],
        ['512', 'This is 2⁹, the number after 9 cycles.'],
      ]),
      tf('The anticodon of a tRNA molecule is complementary to the codon in the mRNA.', true, 'Base pairing between the codon and anticodon matches each amino acid to the correct position.', 'This pairing is how the ribosome translates the sequence of mRNA codons into a sequence of amino acids.'),
      mc('Which statement describes how eukaryotic cells with the same genome become different cell types?', 'Different transcription factors turn on different sets of genes', 'Gene expression, not the DNA sequence, differs between cell types.', [
        ['Each cell type loses the genes it does not need', 'Differentiated cells generally keep the entire genome.'],
        ['Each cell type has a different number of chromosomes', 'Almost all body cells have the same chromosome number.'],
      ]),
      mc('A coding sequence of mRNA has 33 nucleotides before the stop codon. How many amino acids does the protein contain?', '11', 'Each codon of 3 nucleotides codes for one amino acid: 33/3 = 11.', [
        ['33', 'Each amino acid needs three nucleotides, not one.'],
        ['99', 'The number of nucleotides was multiplied by 3 instead of divided.'],
        ['10', 'The start codon (AUG) is part of these 33 nucleotides and codes for methionine, so it is counted.'],
      ]),
    ],
  },
};
