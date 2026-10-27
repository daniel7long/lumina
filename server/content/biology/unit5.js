import { mc, tf } from '../builder.js';

export default {
  summary: 'Understand how cells extract, store and spend energy: metabolic pathways and their regulation, free energy, glycolysis, the TCA cycle, oxidative phosphorylation and the integration of metabolism.',
  modules: {
    13: {
      summary: 'Pathway types, catabolism versus anabolism, and how enzymes are regulated.',
      sessions: [
        {
          t: 'Metabolic pathways and their regulation',
          s: 'Linear, branched and circular pathways; allosteric and covalent control.',
          md: `
## Metabolic pathways

A **pathway** is a series of enzyme-catalyzed reactions in which the product of one step is the substrate of the next.
- **Linear:** A → B → C → D (glycolysis)
- **Branched:** an intermediate feeds two routes
- **Circular (cyclic):** the last product regenerates the first (the TCA cycle)

### Catabolism and anabolism
| | Catabolic | Anabolic |
| --- | --- | --- |
| Direction | Breaks down large molecules | Builds large molecules |
| Energy | **Releases** energy; makes ATP and NADH | **Needs** energy (ATP, NADPH) |
| Example | Glycolysis | Gluconeogenesis, protein synthesis |

### Common features
Pathways are **irreversible overall** (committed steps), **regulated at key enzymes** (usually the first committed step), and are **compartmentalized** in the cell.

### Regulating enzymes
- **Substrate availability** and **product inhibition**.
- **Allosteric regulation:** an effector binds a site away from the active site, changing the enzyme's shape and activity. **Feedback inhibition** by the end product is common (ATP inhibits PFK-1; AMP activates it).
- **Covalent modification:** reversible changes such as **phosphorylation** by kinases (removed by phosphatases). It is fast and can be amplified by hormones.
- **Competitive and uncompetitive inhibition** (Unit 2) alter apparent Km and Vmax.
`,
          q: [
            mc('Which describes a catabolic pathway?', 'It breaks down molecules and releases energy', 'Glycolysis is an example.', [
              ['It builds large molecules and uses ATP', 'This describes anabolism.'],
              ['It makes DNA from nucleotides', 'This is an anabolic process.'],
            ]),
            mc('How does allosteric regulation differ from covalent modification?', 'Allosteric control uses non-covalent binding of an effector; covalent modification chemically alters the enzyme (e.g. phosphorylation)', 'Both change enzyme activity but by different means.', [
              ['They are the same process', 'They differ in mechanism.'],
              ['Allosteric control permanently destroys the enzyme', 'It is reversible.'],
            ]),
          ],
        },
      ],
    },
    14: {
      summary: 'Free energy, coupling, ATP and redox carriers.',
      sessions: [
        {
          t: 'Gibbs free energy and coupled reactions',
          s: 'Spontaneity, ΔG vs. ΔG°\', and driving unfavourable reactions.',
          md: `
## Free energy

The **Gibbs free energy change (ΔG)** tells the direction of a reaction at constant temperature and pressure:
- **ΔG < 0:** spontaneous (exergonic) in the forward direction
- **ΔG = 0:** at equilibrium
- **ΔG > 0:** not spontaneous (endergonic); the reverse is favoured

**ΔG°'** (standard free energy change) applies at standard conditions (1 M, pH 7). The real ΔG depends on concentrations:

ΔG = ΔG°' + RT ln Q,  with  ΔG°' = −RT ln K_eq.

At 37 °C RT ≈ 2.58 kJ/mol. A reaction with a negative ΔG°' has K_eq > 1, but it can still have ΔG > 0 if products are abundant.

### Coupling
An unfavourable reaction can run if it is **coupled** to a favourable one. ΔG values add.

| Reaction | ΔG°' (kJ/mol) |
| --- | --- |
| Glucose + Pᵢ → glucose-6-phosphate + H₂O | **+13.8** |
| ATP + H₂O → ADP + Pᵢ | **−30.5** |
| **Sum** (hexokinase) | **−16.7** |

- **Direct coupling:** a shared intermediate (glucose-6-phosphate forms by transferring a phosphate from ATP).
- **Indirect coupling:** an energy-storing molecule (ATP, NADH, a proton gradient) carries energy between separate reactions.
`,
          q: [
            mc('ΔG°\' for glucose + Pᵢ → glucose-6-phosphate is +13.8 kJ/mol and for ATP hydrolysis is −30.5 kJ/mol. What is ΔG°\' for the coupled reaction?', '−16.7 kJ/mol', '+13.8 + (−30.5) = −16.7.', [
              ['+44.3 kJ/mol', 'This subtracts instead of adds the signs.'],
              ['−44.3 kJ/mol', 'This changes the sign of the first reaction.'],
            ]),
            mc('A reaction has ΔG = 0. What does this mean?', 'The reaction is at equilibrium', 'There is no net change.', [
              ['It is very fast', 'ΔG does not tell the rate.'],
              ['It is spontaneous in the forward direction', 'That requires ΔG < 0.'],
            ]),
          ],
        },
        {
          t: 'Energy currencies: ATP, redox carriers and thioesters',
          s: 'How cells store and move energy.',
          md: `
## Storing energy in metabolism

Three main strategies:
1. **Phosphorylated compounds** (ATP, phosphoenolpyruvate, creatine phosphate)
2. **Redox carriers** (NADH, FADH₂)
3. **Ion (proton) gradients** across membranes

### ATP
ATP hydrolysis is highly favourable (ΔG°' ≈ −30.5 kJ/mol) because of **charge repulsion** between the phosphate groups, **resonance stabilization** of the products (ADP and Pᵢ) and better **solvation** of the products. The "high-energy" bond is a **phosphoanhydride bond**; the energy comes from the difference between reactants and products, not from the bond itself.

### Oxidation and reduction
**Oxidation** is loss of electrons (or hydrogen); **reduction** is gain. They occur together (redox). Electrons flow from molecules with a lower reduction potential to a higher one, ending at O₂ (reduced to water).

Two organic carriers:
- **NAD⁺ / NADH:** carries 2 electrons (as a hydride); used mostly in catabolism.
- **FAD / FADH₂:** carries 2 electrons and 2 protons; bound in enzymes like succinate dehydrogenase.
(**NADPH** is the carrier used in anabolism.)

### Thioesters
Acetyl-CoA contains a **thioester** bond whose hydrolysis is highly exergonic (about −31 kJ/mol), so it can drive ATP synthesis or the addition of acetyl groups in biosynthesis.
`,
          q: [
            mc('Which statement about NAD⁺/NADH is correct?', 'NAD⁺ is reduced to NADH when it accepts two electrons (a hydride)', 'NADH is the reduced form.', [
              ['NADH is the oxidized form', 'NADH is reduced.'],
              ['NAD⁺ carries 4 electrons', 'It carries two.'],
            ]),
            mc('Why does ATP hydrolysis release a large amount of free energy?', 'Charge repulsion is relieved and the products are stabilized by resonance and solvation', 'It is not simply because of a "high-energy" bond.', [
              ['Because the phosphoanhydride bond has unusually high bond energy', 'Breaking bonds requires energy; the release comes from the stability of the products.'],
              ['Because ATP contains iron', 'ATP does not contain iron.'],
            ]),
          ],
        },
      ],
    },
    15: {
      summary: 'Naming and classifying enzyme-catalyzed reactions.',
      sessions: [
        {
          t: 'Enzyme nomenclature',
          s: 'Reading enzyme names to predict the reaction.',
          md: `
## Reading enzyme names

Most enzyme names end in **-ase** and describe the **substrate** and the **type of reaction**.

| Class / name | Reaction | Example |
| --- | --- | --- |
| **Oxidoreductase / dehydrogenase** | Removes H (oxidation), usually reducing NAD⁺ | Lactate dehydrogenase |
| **Transferase / kinase** | Transfers a group; a **kinase** transfers phosphate **from ATP** | Hexokinase |
| **Hydrolase / phosphatase** | Cleaves a bond with water; a **phosphatase** removes a phosphate | Fructose-1,6-bisphosphatase |
| **Lyase / hydratase** | Adds or removes water or other groups without hydrolysis or oxidation | Fumarase (fumarate hydratase) |
| **Isomerase** | Rearranges atoms within a molecule | Triose phosphate isomerase |
| **Ligase / synthetase** | Joins two molecules using ATP | Aminoacyl-tRNA synthetase |

### Kinase vs. phosphatase
A **kinase adds** a phosphate group (using ATP), while a **phosphatase removes** one (by hydrolysis). Together they switch proteins and metabolic enzymes on and off.
`,
          q: [
            mc('Which enzyme removes a phosphate group from a protein?', 'A phosphatase', 'Phosphatases catalyze hydrolysis of phosphate esters.', [
              ['A kinase', 'A kinase adds a phosphate.'],
              ['An isomerase', 'It rearranges atoms within a molecule.'],
            ]),
            mc('A dehydrogenase typically catalyzes which kind of reaction?', 'An oxidation that transfers electrons to NAD⁺ or FAD', 'The substrate loses hydrogen.', [
              ['A rearrangement of atoms', 'This describes an isomerase.'],
              ['Hydrolysis of a bond', 'This describes a hydrolase.'],
            ]),
          ],
        },
      ],
    },
    16: {
      summary: 'The ten-step pathway that converts glucose to pyruvate.',
      sessions: [
        {
          t: 'Glycolysis',
          s: 'Investment, payoff, and the fate of pyruvate.',
          md: `
## Glycolysis

Glycolysis takes place in the **cytosol** and converts one **glucose (6C)** into two **pyruvate (3C)**. It needs no oxygen.

### Two phases
1. **Investment phase:** 2 ATP are spent (hexokinase and PFK-1) to make fructose-1,6-bisphosphate, which splits into two 3-carbon sugars.
2. **Payoff phase:** each 3-carbon unit yields 2 ATP (4 total) and 1 NADH (2 total).

**Net:** Glucose + 2 NAD⁺ + 2 ADP + 2 Pᵢ → 2 pyruvate + 2 NADH + 2 ATP + 2 H⁺ + 2 H₂O.

### Coupling makes it spontaneous
Direct coupling (phosphate transfer from ATP) and **substrate-level phosphorylation** (transfer from phosphoenolpyruvate or 1,3-bisphosphoglycerate to ADP) drive the steps. Energy from oxidation of glyceraldehyde-3-phosphate is stored in NADH, and in an acyl-phosphate bond.

### Without oxygen (anaerobic)
NAD⁺ must be regenerated. Muscle converts pyruvate to **lactate** (lactate dehydrogenase); yeast converts it to **ethanol and CO₂**. With oxygen, pyruvate enters mitochondria.
`,
          q: [
            mc('What is the net ATP gain from glycolysis of one glucose?', '2 ATP', 'Two are used and four are made.', [
              ['4 ATP', 'This is the gross yield.'],
              ['38 ATP', 'This is the old estimate for complete oxidation.'],
            ]),
            mc('Why does anaerobic glycolysis convert pyruvate to lactate?', 'To regenerate NAD⁺ so glycolysis can continue', 'Without NAD⁺ the pathway would stop.', [
              ['To produce more ATP directly', 'It does not make ATP.'],
              ['To oxidize NADH to make water', 'No oxygen is used.'],
            ]),
          ],
        },
      ],
    },
    17: {
      summary: 'Oxidation of acetyl-CoA to CO₂ and the capture of energy as reduced carriers.',
      sessions: [
        {
          t: 'The TCA (citric acid) cycle',
          s: 'Link reaction, products and biosynthetic roles.',
          md: `
## The TCA cycle

Occurs in the **mitochondrial matrix** (eukaryotes).

### Link from glycolysis
Pyruvate enters mitochondria, and the **pyruvate dehydrogenase complex** converts it to **acetyl-CoA**, releasing 1 CO₂ and making 1 NADH.

### The cycle (per acetyl-CoA)
Acetyl-CoA (2C) + oxaloacetate (4C) → citrate (6C) → … → oxaloacetate.

| Product per turn | Amount |
| --- | --- |
| CO₂ | **2** (at isocitrate dehydrogenase and α-ketoglutarate dehydrogenase) |
| NADH | **3** |
| FADH₂ | **1** |
| GTP/ATP | **1** (substrate-level) |

Per glucose, there are two turns, so: 4 CO₂, 6 NADH, 2 FADH₂, 2 GTP.

### Where is the energy stored?
Mostly in the **reduced carriers NADH and FADH₂**, which later give up electrons to the electron transport chain.

### Biosynthesis
TCA intermediates are also **precursors**: citrate for fatty acids, α-ketoglutarate and oxaloacetate for amino acids, succinyl-CoA for heme. Replenishing reactions (anaplerosis) keep the cycle going.
`,
          q: [
            mc('How many NADH are produced by one turn of the TCA cycle (per acetyl-CoA)?', '3', 'Also 1 FADH₂ and 1 GTP/ATP.', [
              ['1', 'That is the number of FADH₂.'],
              ['6', 'This is for two turns, i.e. one glucose.'],
            ]),
            mc('Where is most of the energy released by the TCA cycle stored?', 'In NADH and FADH₂', 'They carry high-energy electrons to the electron transport chain.', [
              ['In ATP only', 'Only 1 GTP/ATP is made directly per turn.'],
              ['In CO₂', 'CO₂ is a waste product.'],
            ]),
          ],
        },
      ],
    },
    18: {
      summary: 'How electron flow builds a proton gradient that drives ATP synthase.',
      sessions: [
        {
          t: 'Electron transport and oxidative phosphorylation',
          s: 'Complexes I–IV, coenzyme Q, cytochrome c and ATP synthase.',
          md: `
## Electron transport chain

Located in the **inner mitochondrial membrane**. Electrons from NADH and FADH₂ pass through carriers to **O₂**, which is reduced to **H₂O**.

| Component | Role |
| --- | --- |
| **Complex I** | Takes electrons from **NADH**; pumps H⁺ |
| **Complex II** | Takes electrons from **FADH₂** (succinate dehydrogenase); does **not** pump H⁺ |
| **Coenzyme Q** | Mobile carrier from I and II to III |
| **Complex III** | Passes electrons to cytochrome c; pumps H⁺ |
| **Cytochrome c** | Mobile carrier from III to IV |
| **Complex IV** | Reduces O₂ to H₂O; pumps H⁺ |

**NADH path:** NADH → I → Q → III → cyt c → IV → O₂.
**FADH₂ path:** FADH₂ → II → Q → III → cyt c → IV → O₂.

The complexes pump protons into the intermembrane space, building a **proton-motive force** (a non-equilibrium gradient). The energy available is large: the potential difference for NADH → O₂ is about 1.14 V.

### ATP synthase
Protons flow back through **ATP synthase** (F₀ channel), turning the rotor and causing **conformational (allosteric) changes** in the F₁ subunits that make ATP from ADP + Pᵢ (the binding-change mechanism).

### Yields
About **2.5 ATP per NADH** and **1.5 per FADH₂**. Complete oxidation of one glucose gives approximately **30–32 ATP**.
`,
          q: [
            mc('Which complex does NOT pump protons?', 'Complex II', 'It passes electrons from FADH₂ to Q without pumping.', [
              ['Complex I', 'It pumps protons.'],
              ['Complex IV', 'It pumps protons.'],
            ]),
            mc('What is the final electron acceptor of the chain?', 'Oxygen, which becomes water', 'Complex IV transfers electrons to O₂.', [
              ['NAD⁺', 'NAD⁺ is reduced earlier, not the end acceptor.'],
              ['Carbon dioxide', 'CO₂ is released by the TCA cycle.'],
            ]),
          ],
        },
      ],
    },
    19: {
      summary: 'How hormones, signalling and regulation coordinate glucose, glycogen and fat metabolism.',
      sessions: [
        {
          t: 'Gluconeogenesis and the control of glycolysis',
          s: 'Reversing glycolysis and reciprocal regulation by F-2,6-BP.',
          md: `
## Gluconeogenesis

**Gluconeogenesis** makes glucose from non-carbohydrate precursors such as pyruvate, lactate, glycerol and some amino acids, mostly in the liver.

- Glycolysis has **10 steps**. Seven are near equilibrium and are **reused** in reverse.
- **Three steps are highly exergonic and irreversible** and must be bypassed using different enzymes:
  1. Hexokinase → bypassed by **glucose-6-phosphatase**
  2. PFK-1 → bypassed by **fructose-1,6-bisphosphatase (FBPase-1)**
  3. Pyruvate kinase → bypassed by pyruvate carboxylase and PEP carboxykinase

### Reciprocal control
Glycolysis and gluconeogenesis must not run together. **Fructose-2,6-bisphosphate (F-2,6-BP)** activates PFK-1 (glycolysis) and inhibits FBPase-1 (gluconeogenesis). Cellular energy also acts: **ATP and citrate** inhibit PFK-1, **AMP** activates it.

### Hormonal control
- **Insulin** (high blood glucose): raises F-2,6-BP → favours glycolysis, glycogen synthesis and storage.
- **Glucagon** (low glucose, in the liver): ↑ cAMP → PKA phosphorylates the bifunctional enzyme PFK-2/FBPase-2 → **lower F-2,6-BP** → favours gluconeogenesis.
- **Epinephrine**: "fight-or-flight" signal that mobilizes glucose.
`,
          q: [
            mc('How many steps of glycolysis are bypassed in gluconeogenesis by different enzymes?', 'Three', 'The hexokinase, PFK-1 and pyruvate kinase reactions.', [
              ['Ten', 'Only the three irreversible steps are bypassed.'],
              ['One', 'There are three bypass reactions.'],
            ]),
            mc('Glucagon lowers F-2,6-BP levels in the liver. What is the effect?', 'Glycolysis is reduced and gluconeogenesis is favoured', 'F-2,6-BP stimulates PFK-1 and inhibits FBPase-1.', [
              ['Glycolysis is stimulated', 'Less F-2,6-BP means less PFK-1 activation.'],
              ['Both pathways stop', 'Gluconeogenesis is favoured.'],
            ]),
          ],
        },
        {
          t: 'Hormones, signalling, glycogen and fat metabolism',
          s: 'G-proteins, cAMP, phosphorylation and storage of fuel.',
          md: `
## Hormone signalling

**Epinephrine and glucagon** bind **G-protein-coupled receptors** at the cell surface:
1. Receptor activates a **G protein** (GDP → GTP).
2. The G protein activates **adenylyl (adenylate) cyclase**, which makes **cAMP** from ATP.
3. cAMP activates **protein kinase A (PKA)**, which phosphorylates target enzymes. Phosphatases reverse this.

One hormone molecule triggers a **cascade** with large amplification.

### Glycogen
- **Degradation:** PKA phosphorylates and activates **phosphorylase kinase**, which activates **glycogen phosphorylase** (breaks glycogen to glucose-1-phosphate).
- **Synthesis:** glycogen synthase uses **UDP-glucose** (an indirect coupling). PKA phosphorylation **inactivates** it. **Insulin** triggers dephosphorylation, activating it.

So glucagon and epinephrine favour **breakdown**, insulin favours **storage**.

### Fats
- **Fatty acid oxidation (β-oxidation)** in mitochondria removes two-carbon units as **acetyl-CoA**, generating FADH₂ and NADH each round. A 16-carbon fatty acid gives 8 acetyl-CoA after 7 rounds.
- **Excess carbohydrate, protein or fat** can be turned into **acetyl-CoA** and then into fatty acids and stored as triglycerides.

### Other fuels
Sucrose and lactose are hydrolyzed to monosaccharides, which enter glycolysis; amino acids lose their amino group and enter the pathways as pyruvate, acetyl-CoA or TCA intermediates.
`,
          q: [
            mc('What is the second messenger made by adenylyl cyclase?', 'cAMP', 'It activates protein kinase A.', [
              ['ATP', 'ATP is the substrate.'],
              ['GTP', 'GTP is used by G proteins.'],
            ]),
            mc('How many rounds of β-oxidation are needed to fully break a 16-carbon fatty acid into acetyl-CoA?', '7', 'Each round removes two carbons, and the last round gives two acetyl-CoA, so 8 acetyl-CoA from 7 rounds.', [
              ['8', 'There are 8 acetyl-CoA, but 7 rounds.'],
              ['16', 'This is the number of carbons.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Metabolism',
    tasks: [
      mc('Which feature distinguishes anabolism from catabolism?', 'Anabolic pathways build molecules and consume energy', 'Catabolic pathways break them down and release energy.', [
        ['Anabolic pathways release ATP', 'They use ATP.'],
        ['Anabolic pathways break down glucose', 'This is catabolism.'],
        ['They are the same', 'They are opposite.'],
      ]),
      mc('A reaction has ΔG°\' = +20 kJ/mol. It can still proceed in the forward direction if', 'It is coupled to a reaction with a more negative ΔG', 'Coupling gives a negative overall ΔG.', [
        ['An enzyme is added', 'Enzymes do not change ΔG.'],
        ['The temperature is lowered', 'This does not make it spontaneous.'],
        ['It is never possible', 'Coupling makes it possible.'],
      ]),
      mc('Reaction 1 has ΔG°\' = +13.8 kJ/mol and reaction 2 has ΔG°\' = −30.5 kJ/mol. What is the ΔG°\' of the coupled reaction?', '−16.7 kJ/mol', 'The values add.', [
        ['+16.7 kJ/mol', 'The sign is wrong.'],
        ['−44.3 kJ/mol', 'The values are added with the wrong sign.'],
        ['+44.3 kJ/mol', 'The values should be added algebraically.'],
      ]),
      mc('Which enzyme class adds a phosphate group from ATP to a substrate?', 'Kinase', 'A kinase transfers a phosphoryl group from ATP.', [
        ['Phosphatase', 'It removes phosphate groups.'],
        ['Isomerase', 'It rearranges atoms.'],
        ['Hydratase', 'It adds or removes water.'],
      ]),
      mc('What is the net ATP yield of glycolysis, and where does it occur?', '2 ATP, in the cytosol', 'Glycolysis occurs in the cytosol.', [
        ['2 ATP, in the mitochondrial matrix', 'Glycolysis is cytosolic.'],
        ['36 ATP, in the cytosol', 'This is far too high for glycolysis alone.'],
        ['0 ATP, in the cytosol', 'There is a net gain of 2.'],
      ]),
      mc('Which statement about the TCA cycle is correct?', 'One turn produces 3 NADH, 1 FADH₂, 1 GTP and releases 2 CO₂', 'These are the products per acetyl-CoA.', [
        ['One turn produces 38 ATP', 'The cycle produces mostly reduced carriers.'],
        ['It occurs in the cytosol', 'It occurs in the mitochondrial matrix.'],
        ['It consumes oxygen directly', 'Oxygen is used in the electron transport chain.'],
      ]),
      mc('Which gives the electrons to Complex II of the electron transport chain?', 'FADH₂ (via succinate dehydrogenase)', 'Complex II is part of the TCA cycle.', [
        ['NADH', 'NADH donates to Complex I.'],
        ['Oxygen', 'Oxygen accepts electrons at Complex IV.'],
        ['Cytochrome c', 'Cytochrome c carries electrons between III and IV.'],
      ]),
      mc('What is the role of ATP synthase?', 'To make ATP using the energy of protons flowing down their gradient', 'F₀ rotates and F₁ makes ATP.', [
        ['To pump protons out of the matrix', 'The complexes of the electron transport chain do this.'],
        ['To reduce oxygen to water', 'This is done by Complex IV.'],
        ['To make NADH from NAD⁺', 'This is done by dehydrogenases.'],
      ]),
      mc('During fasting, glucagon rises. Which is expected in the liver?', 'Higher gluconeogenesis and glycogen breakdown', 'Glucagon acts via cAMP and PKA.', [
        ['Higher glycogen synthesis', 'Phosphorylation inactivates glycogen synthase.'],
        ['Lower cAMP', 'Glucagon raises cAMP.'],
        ['Higher F-2,6-BP', 'Glucagon lowers F-2,6-BP.'],
      ]),
      mc('Which pair of enzymes bypasses PFK-1 and hexokinase in gluconeogenesis?', 'Fructose-1,6-bisphosphatase and glucose-6-phosphatase', 'These reverse the two irreversible kinase steps.', [
        ['Pyruvate kinase and hexokinase', 'Pyruvate kinase is part of glycolysis.'],
        ['PFK-1 and glucose-6-phosphatase', 'PFK-1 is glycolytic.'],
        ['Kinases only', 'Phosphatases are required.'],
      ]),
      tf('Fructose-2,6-bisphosphate activates glycolysis and inhibits gluconeogenesis.', true, 'Correct: it activates PFK-1 and inhibits FBPase-1.', 'Not quite. F-2,6-BP activates PFK-1 and inhibits FBPase-1.'),
    ],
  },
};
