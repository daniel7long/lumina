import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow the flow of genetic information: the structure of DNA and RNA, how DNA is copied, and how genes are transcribed and translated into proteins.',
  modules: {
    9: {
      summary: 'Nucleotides, base pairing and the structures of DNA and RNA.',
      sessions: [
        {
          t: 'Nucleotides and base pairing',
          s: 'Bases, nucleosides, nucleotides and Chargaff\'s rules.',
          md: `
## Nucleotides

A **nucleotide** = a **nitrogenous base** + a **pentose sugar** + one or more **phosphate groups**. Without the phosphate it is a **nucleoside**.

| | DNA | RNA |
| --- | --- | --- |
| Sugar | 2'-deoxyribose | Ribose |
| Bases | A, G, C, **T** | A, G, C, **U** |

- **Purines** (two rings): **A**denine, **G**uanine.
- **Pyrimidines** (one ring): **C**ytosine, **T**hymine, **U**racil.

Nucleoside names: adenosine, guanosine, cytidine, thymidine, uridine. Nucleotides: AMP, GMP, CMP, TMP (dTMP), UMP.

### Base pairing
**A pairs with T** (or U in RNA) by **2 hydrogen bonds**, and **G pairs with C** by **3 hydrogen bonds**. A purine always pairs with a pyrimidine, so the helix keeps a constant width (~2 nm).

Because GC pairs have three hydrogen bonds, DNA rich in G + C is **more stable** and melts at a higher temperature than AT-rich DNA.

### Chargaff's rules
In double-stranded DNA, A = T and G = C. If A is 30%, then T is 30% and G + C = 40%, so **G = C = 20%**.
`,
          q: [
            mc('In a double-stranded DNA, adenine makes up 30% of the bases. What percentage is guanine?', '20%', 'A = T = 30%, so G + C = 40% and G = 20%.', [
              ['30%', 'This is the percentage of A and T.'],
              ['40%', 'This is G + C together.'],
            ]),
            mc('Why are G–C pairs stronger than A–T pairs?', 'G–C pairs have three hydrogen bonds; A–T pairs have two', 'More hydrogen bonds give greater stability.', [
              ['G–C pairs are covalent', 'Both pairs use hydrogen bonds.'],
              ['A–T pairs have a purine–purine pairing', 'A–T is purine–pyrimidine.'],
            ]),
          ],
        },
        {
          t: 'The double helix, backbones and stability',
          s: 'B-DNA, A-form helices and phosphodiester bonds.',
          md: `
## Structure of nucleic acids

### The backbone
Nucleotides are joined by **phosphodiester bonds**, from the 3'-OH of one sugar to the 5'-phosphate of the next. All strands have a **5' end** and a **3' end**. The backbone is **sugar–phosphate**, negatively charged, and the bases face inwards.

### B-DNA
The common form of DNA: a **right-handed double helix** of two **antiparallel** strands, ~10.5 base pairs per turn, a **major** and a **minor groove**, stabilized by base pairing, **base stacking** (hydrophobic and van der Waals) and the hydrophobic effect.

### A-form
RNA double helices and RNA–DNA hybrids adopt the **A-form**: wider, shorter and more tilted, ~11 base pairs per turn. RNA's 2'-OH makes B-form unfavourable.

### DNA vs. RNA backbone
- RNA has a **2'-OH**, which makes it **less stable**: it can attack the phosphodiester bond, so RNA is easily hydrolyzed.
- DNA lacks it, so DNA is chemically more stable, suited to long-term storage.

### Stability
A duplex is more stable if it is **longer**, has a **higher GC content** and has **perfect pairing**.
`,
          q: [
            mc('Which bond links nucleotides in a strand?', 'Phosphodiester bond', 'It joins the 3\' hydroxyl of one sugar to the 5\' phosphate of the next.', [
              ['Peptide bond', 'That links amino acids.'],
              ['Glycosidic bond between two sugars', 'The base is joined to the sugar by an N-glycosidic bond, but strands are linked by phosphodiester bonds.'],
            ]),
            mc('Why is RNA less chemically stable than DNA?', 'It has a 2\'-OH group on its ribose that can attack the backbone', 'DNA has no 2\'-OH.', [
              ['It contains thymine', 'RNA contains uracil.'],
              ['It is always single-stranded', 'Stability is not explained by that.'],
            ]),
          ],
        },
      ],
    },
    10: {
      summary: 'How cells copy DNA accurately, and the tools built on that process.',
      sessions: [
        {
          t: 'The mechanism of DNA replication',
          s: 'Semiconservative replication, leading and lagging strands.',
          md: `
## DNA replication

Replication is **semiconservative**: each new double helix has **one old strand and one new strand**.

### Steps
1. **Initiation:** proteins bind the **origin of replication** and unwind the helix (open complex). **Helicase** separates the strands, forming a **replication fork**.
2. **Primers:** **primase** makes a short RNA primer, because DNA polymerase needs a free 3'-OH to start.
3. **Elongation:** **DNA polymerase** adds dNTPs to the **3' end**, so synthesis always runs **5' → 3'**, using the template strand.
4. **Leading strand:** made continuously toward the fork.
5. **Lagging strand:** made discontinuously as **Okazaki fragments**, since the template is antiparallel and polymerase can only go 5'→3'.
6. **Joining:** RNA primers are replaced by DNA and **DNA ligase** seals the nicks.

### Accuracy
DNA polymerase has **proofreading** (3'→5' exonuclease): it removes a wrongly inserted nucleotide. Error rate falls to ~1 in 10⁹–10¹⁰ with further repair.

### Eukaryotes
Large chromosomes have **multiple origins**, which shortens the replication time. Chromosome ends are copied by **telomerase**, which carries its own RNA template and extends the 3' end, to solve the end-replication problem.
`,
          q: [
            mc('Why does the lagging strand form Okazaki fragments?', 'DNA polymerase can only add nucleotides 5\' → 3', 'The lagging-strand template runs the "wrong way" relative to fork movement.', [
              ['Helicase works only on one strand', 'Helicase unwinds both.'],
              ['Ligase prevents continuous synthesis', 'Ligase joins fragments.'],
            ]),
            mc('Semiconservative replication means that each daughter DNA molecule contains', 'One original strand and one new strand', 'This was shown by Meselson and Stahl.', [
              ['Two original strands', 'This would be conservative replication.'],
              ['Two new strands', 'That would also be conservative.'],
            ]),
          ],
        },
        {
          t: 'PCR and DNA sequencing',
          s: 'Amplifying and reading DNA.',
          md: `
## PCR: polymerase chain reaction

PCR copies a chosen segment of DNA exponentially using repeated cycles of:
1. **Denaturation** (~95 °C): strands separate.
2. **Annealing** (~55–60 °C): two short **primers** bind either side of the target.
3. **Extension** (~72 °C): a heat-stable polymerase (**Taq**) extends the primers.

The **primers define the length** of the amplified region. After n cycles there are about 2ⁿ copies, so 30 cycles give about **10⁹** copies.

## Sanger (dideoxy) sequencing
Four reactions include **dideoxynucleotides (ddNTPs)**, which lack the 3'-OH. When a ddNTP is added by polymerase, **synthesis stops**. Because ddNTPs **compete** with normal dNTPs, strands of every possible length are made, each ending in a known base. Separating them by size reads the sequence.
`,
          q: [
            mc('After 10 cycles of PCR with perfect efficiency, about how many copies of a starting single molecule are there?', '1,024', '2¹⁰ = 1,024.', [
              ['10', 'Copies double at each cycle.'],
              ['100', 'This is 10².']
              ,
            ]),
            mc('What determines the length of the DNA amplified by PCR?', 'The positions where the two primers bind', 'The product spans from primer to primer.', [
              ['The number of cycles', 'The number of cycles determines the amount.'],
              ['The temperature of annealing', 'It affects specificity, not length.'],
            ]),
          ],
        },
      ],
    },
    11: {
      summary: 'How genes are transcribed into RNA and processed.',
      sessions: [
        {
          t: 'Transcription',
          s: 'RNA polymerase, promoters, operons and RNA processing.',
          md: `
## Transcription

**Transcription** makes an RNA copy of a gene. **RNA polymerase** (RNAP) adds ribonucleotides in the **5' → 3'** direction, reading the template strand 3'→5'. Unlike DNA polymerase, it **needs no primer** and uses NTPs (not dNTPs).

### Steps
1. **Initiation:** RNAP binds the **promoter** (in bacteria, via a sigma factor; in eukaryotes, with general transcription factors) and opens the DNA. A **strong promoter** is similar to the consensus sequence and binds RNAP tightly, so it is transcribed often; a **weak promoter** deviates from it.
2. **Elongation:** RNAP moves along the template.
3. **Termination:** at a terminator, RNA is released.

### Products
**mRNA** (codes for proteins), **tRNA** (carries amino acids), **rRNA** (ribosome component), and regulatory RNAs.

### Prokaryotic operons
Genes with related functions are transcribed together from one promoter as a **polycistronic** mRNA (such as the *lac* operon). Eukaryotic genes are normally transcribed **one gene per mRNA**.

### Eukaryotic mRNA processing
- **5' cap:** protects the mRNA and helps ribosome binding.
- **3' poly-A tail:** protects it and aids export and translation.
- **Splicing:** the **spliceosome** removes **introns** (via a lariat) and joins **exons**. Signals are at the exon–intron boundaries; different choices lead to **alternative splicing**, so one gene can make several proteins.

tRNA and rRNA are also processed (cleaved and chemically modified).
`,
          q: [
            mc('Which statement about RNA polymerase is correct?', 'It synthesizes RNA 5\' → 3\' and does not need a primer', 'DNA polymerase needs a primer; RNA polymerase does not.', [
              ['It needs an RNA primer', 'It starts without a primer.'],
              ['It synthesizes RNA 3\' → 5\'', 'Synthesis is 5\' → 3\'.'],
            ]),
            mc('What is the function of the 5\' cap and poly-A tail on eukaryotic mRNA?', 'They protect the mRNA from degradation and help translation', 'Both modifications stabilize mRNA.', [
              ['They code for the protein', 'They are not part of the coding sequence.'],
              ['They remove introns', 'The spliceosome does this.'],
            ]),
          ],
        },
      ],
    },
    12: {
      summary: 'How the genetic code is read by ribosomes to make proteins.',
      sessions: [
        {
          t: 'The genetic code and translation',
          s: 'Codons, tRNA, ribosomes and the steps of protein synthesis.',
          md: `
## Translation

### The genetic code
The code is read in **triplets (codons)**. There are 4³ = **64 codons**: **61 code for amino acids** and **3 are stop codons** (UAA, UAG, UGA). **AUG** codes for methionine and is the usual start codon. The code is **redundant** (several codons per amino acid) but not ambiguous, and nearly universal.

### The RNAs involved
- **mRNA:** carries the codons.
- **tRNA:** an adaptor with an **anticodon** that pairs with the codon and an amino acid at its 3' end. Aminoacyl-tRNA synthetases attach the correct amino acid.
- **rRNA:** forms the core of the **ribosome** and catalyzes peptide bond formation (the ribosome is a ribozyme).

### Steps
1. **Initiation:** the small subunit finds the start codon AUG; initiator tRNA binds; the large subunit joins.
2. **Elongation:** an aminoacyl-tRNA enters the **A site**; a peptide bond forms (the chain moves to the **A-site tRNA**); the ribosome **translocates**. Repeat.
3. **Termination:** a stop codon is recognized by **release factors**, and the polypeptide is released.

### Prokaryotes vs. eukaryotes
In bacteria, transcription and translation occur together in the cytoplasm, mRNA is often polycistronic and ribosomes (70S) bind a Shine–Dalgarno sequence. In eukaryotes, mRNA must be **processed and exported** from the nucleus, ribosomes are 80S, and the ribosome scans from the 5' cap to AUG.

> Example: the mRNA 5'-AUG-GCU-UAA-3' codes for Met–Ala then stops.
`,
          q: [
            mc('How many of the 64 codons code for amino acids?', '61', 'Three codons are stop codons.', [
              ['64', 'Three of the codons are stop signals.'],
              ['20', 'There are 20 amino acids, but several codons per amino acid.'],
            ]),
            mc('The mRNA 5\'-AUG-GCU-UAA-3\' is translated. What peptide is made?', 'Met–Ala (then stop)', 'AUG = Met, GCU = Ala, UAA = stop.', [
              ['Met–Ala–Stop as a three-residue peptide', 'Stop is not an amino acid.'],
              ['Ala–Met', 'The order follows the mRNA from 5\'.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Basis of molecular biology',
    tasks: [
      mc('Which base is found in RNA but not in DNA?', 'Uracil', 'Uracil replaces thymine in RNA.', [
        ['Thymine', 'Thymine is in DNA.'],
        ['Adenine', 'Adenine is in both.'],
        ['Cytosine', 'Cytosine is in both.'],
      ]),
      mc('Which pair are both purines?', 'Adenine and guanine', 'Purines have two rings.', [
        ['Cytosine and thymine', 'Both are pyrimidines.'],
        ['Adenine and thymine', 'Thymine is a pyrimidine.'],
        ['Uracil and guanine', 'Uracil is a pyrimidine.'],
      ]),
      mc('A DNA segment has 40% C. What percentage is A?', '10%', 'C = G = 40%, so A + T = 20% and A = 10%.', [
        ['40%', 'This is the percentage of C.'],
        ['20%', 'This is the percentage of A + T.'],
        ['60%', 'This is not possible.'],
      ]),
      mc('Which DNA duplex would melt at the highest temperature?', 'One with a high percentage of G–C pairs', 'G–C pairs have three hydrogen bonds.', [
        ['One with a high percentage of A–T pairs', 'A–T pairs are weaker.'],
        ['One with many mismatches', 'Mismatches lower the stability.'],
        ['All duplexes melt at the same temperature', 'The temperature depends on composition.'],
      ]),
      mc('A DNA template has the sequence 3\'-TACGGT-5\'. What is the new strand synthesized by DNA polymerase?', '5\'-ATGCCA-3\'', 'It is the complementary strand, antiparallel to the template.', [
        ['5\'-TACGGT-3\'', 'This is not complementary.'],
        ['3\'-ATGCCA-5\'', 'The bases are right, but this strand would run parallel to the template. The new strand must be antiparallel, so it runs 5\' → 3\'.'],
        ['5\'-AUGCCA-3\'', 'DNA does not contain uracil.'],
      ]),
      mc('Which enzyme joins Okazaki fragments?', 'DNA ligase', 'It seals nicks in the sugar–phosphate backbone.', [
        ['Helicase', 'It unwinds DNA.'],
        ['Primase', 'It makes primers.'],
        ['Topoisomerase', 'It relieves supercoiling.'],
      ]),
      mc('What is the role of telomerase?', 'It extends chromosome ends using its own RNA template', 'This prevents shortening with each replication.', [
        ['It proofreads DNA', 'DNA polymerase does this.'],
        ['It unwinds DNA at the origin', 'Helicase does this.'],
        ['It makes RNA primers', 'Primase does this.'],
      ]),
      mc('Which is NOT a step in the processing of eukaryotic pre-mRNA?', 'Addition of a Shine–Dalgarno sequence', 'That is a bacterial ribosome-binding site.', [
        ['Adding a 5\' cap', 'This is a processing step.'],
        ['Adding a poly-A tail', 'This is a processing step.'],
        ['Splicing out introns', 'This is a processing step.'],
      ]),
      mc('The anticodon of a tRNA is 3\'-CAU-5\'. Which codon does it read?', '5\'-GUA-3\'', 'Antiparallel base pairing: C–G, A–U, U–A.', [
        ['5\'-CAU-3\'', 'This is the same sequence, not the complement.'],
        ['5\'-AUG-3\'', 'This is the start codon, not the complement.'],
        ['5\'-GAU-3\'', 'This would not pair correctly.'],
      ]),
      tf('Alternative splicing allows a single gene to produce more than one protein.', true, 'Correct: different combinations of exons give different mRNAs and proteins.', 'Not quite. Alternative splicing is a major source of protein diversity.'),
    ],
  },
};
