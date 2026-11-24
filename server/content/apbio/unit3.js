import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow energy through living systems: how enzymes speed up reactions, how photosynthesis captures light and how respiration releases it as ATP.',
  modules: {
    5: {
      summary: 'Enzymes and what changes their activity.',
      sessions: [{
        t: 'Enzymes and reaction rates',
        s: 'Activation energy, the active site, temperature, pH, inhibitors and substrate concentration.',
        md: `
## How enzymes work

Enzymes are biological catalysts, almost always proteins. A reaction needs a minimum energy, the **activation energy**, before reactants become products. An enzyme **lowers the activation energy** by binding the **substrate** at its **active site**, whose shape and chemistry fit the substrate (induced fit). It is not consumed, and it does **not** change the free-energy difference between reactants and products.

## What changes the rate

- **Temperature:** the rate rises as molecules collide more often, up to an **optimum**, then falls sharply as the enzyme **denatures**.
- **pH:** each enzyme has an optimum pH (pepsin about 2, most others near 7); extreme pH changes the charges and shape of the active site.
- **Substrate concentration:** the rate rises and then levels off at **Vmax** when all active sites are occupied.
- **Enzyme concentration:** more enzyme gives a higher rate if substrate is not limiting.

## Inhibitors

| | Binds | Effect | Overcome by more substrate? |
|---|---|---|---|
| **Competitive** | the active site | blocks substrate | **yes** |
| **Noncompetitive (allosteric)** | another site | changes the shape of the active site | **no** |

**Feedback inhibition:** the end product of a pathway inhibits an early enzyme, preventing waste.

## Calculating a rate

Rate = change in amount ÷ change in time. If a product concentration rises from 0.2 mM to 1.4 mM over 6 min, the rate is (1.4 − 0.2)/6 = **0.2 mM/min**.
`,
        q: [
          mc('How does an enzyme speed up a reaction?', 'It lowers the activation energy', 'By stabilizing the transition state at its active site, an enzyme makes it easier to reach.', [
            ['It increases the free energy of the products', 'Enzymes do not change the energy of reactants or products.'],
            ['It is used up as the products form', 'Enzymes are not consumed and can be reused.'],
          ]),
          mc('A competitive inhibitor is added to an enzyme reaction. How can the effect be reduced?', 'By increasing the substrate concentration', 'More substrate outcompetes the inhibitor for the active site.', [
            ['By increasing the temperature far above the optimum', 'The enzyme would denature, which reduces activity further.'],
            ['It cannot be reduced', 'Competitive inhibition is reversible by adding substrate; noncompetitive inhibition is not.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'Photosynthesis, glycolysis, the Krebs cycle and the electron transport chain.',
      sessions: [{
        t: 'Photosynthesis and cellular respiration',
        s: 'Light reactions, the Calvin cycle, the stages of respiration, chemiosmosis and fermentation.',
        md: `
## Photosynthesis

**6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂**

1. **Light reactions** (thylakoid membranes): light excites chlorophyll; **water is split**, releasing **O₂**; electrons move through an electron transport chain, pumping H⁺ into the thylakoid space; **ATP synthase** makes ATP; NADP⁺ is reduced to **NADPH**.
2. **Calvin cycle** (stroma): uses the ATP and NADPH to fix CO₂ (by rubisco) and build **G3P**, a sugar.

The O₂ comes from **water**, not from CO₂.

## Cellular respiration

**C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP**

| Stage | Location | Main outputs |
|---|---|---|
| **Glycolysis** | cytoplasm | 2 pyruvate, **net 2 ATP** (4 made, 2 used), 2 NADH |
| **Pyruvate oxidation and Krebs cycle** | mitochondrial matrix | CO₂, NADH, FADH₂, a little ATP |
| **Electron transport chain and chemiosmosis** | inner mitochondrial membrane | most of the ATP (about 26 to 28 of a total of about 30 to 32); **O₂ is the final electron acceptor**, forming water |

**Chemiosmosis:** the electron transport chain pumps H⁺ across the membrane, creating a gradient. H⁺ flows back through **ATP synthase**, which uses the flow to make ATP.

Without O₂, cells use **fermentation**, which regenerates NAD⁺ so glycolysis can continue (2 ATP per glucose). Products are lactate in animals and ethanol and CO₂ in yeast.

Photosynthesis and respiration are linked: the products of one are the reactants of the other.
`,
        q: [
          mc('What is the net ATP yield of glycolysis per glucose molecule?', '2 ATP', 'Glycolysis uses 2 ATP and produces 4, for a net gain of 2.', [
            ['4 ATP', 'This is the gross yield; 2 ATP are invested early in the pathway.'],
            ['30 ATP', 'This is roughly the total yield of aerobic respiration, not glycolysis alone.'],
          ]),
          mc('During photosynthesis, the oxygen gas released comes from which molecule?', 'Water', 'Water is split in the light reactions, releasing electrons, H⁺ and O₂.', [
            ['Carbon dioxide', 'CO₂ is fixed into sugar in the Calvin cycle; its oxygen ends up in the sugar and in water.'],
            ['Glucose', 'Glucose is a product of photosynthesis, not a source of O₂.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Cellular energetics',
    tasks: [
      tf('Raising the temperature of an enzyme-catalyzed reaction always increases the rate.', false, 'Above the optimum temperature the enzyme denatures.', 'Correct. The rate rises up to the optimum temperature and then falls as the enzyme loses its shape.'),
      mc('In which part of the chloroplast does the Calvin cycle take place?', 'The stroma', 'The stroma contains the enzymes (such as rubisco) and receives ATP and NADPH from the thylakoids.', [
        ['The thylakoid membrane', 'The light reactions occur here.'],
        ['The thylakoid space', 'This is where H⁺ accumulates during the light reactions.'],
        ['The inner mitochondrial membrane', 'This is a part of the mitochondrion, not the chloroplast.'],
      ]),
      mc('What is the final electron acceptor in the electron transport chain of aerobic respiration?', 'Oxygen', 'Oxygen accepts electrons and H⁺ to form water, which keeps the chain moving.', [
        ['NAD⁺', 'NAD⁺ is regenerated by the chain, but electrons end up on O₂.'],
        ['Carbon dioxide', 'CO₂ is a product released by the Krebs cycle, not an electron acceptor.'],
        ['ATP', 'ATP is a product of chemiosmosis, not an electron acceptor.'],
      ]),
      mc('Why do cells that ferment still need to convert pyruvate to lactate or ethanol?', 'It regenerates NAD⁺ so that glycolysis can continue', 'Glycolysis needs NAD⁺; without O₂ the electron transport chain cannot supply it.', [
        ['It produces most of the cell’s ATP', 'Fermentation itself makes no ATP; the 2 ATP come from glycolysis.'],
        ['It uses up the oxygen in the cell', 'Fermentation occurs when oxygen is absent.'],
      ]),
      mc('Which process directly makes ATP by using a flow of H⁺ down its concentration gradient?', 'Chemiosmosis through ATP synthase', 'The energy of the H⁺ gradient drives the rotation of ATP synthase, which joins ADP and phosphate.', [
        ['Substrate-level phosphorylation in the Calvin cycle', 'The Calvin cycle uses ATP; it does not make it.'],
        ['Fermentation of pyruvate', 'Fermentation makes no ATP.'],
        ['Hydrolysis of ATP', 'This breaks down ATP rather than making it.'],
      ]),
      mc('The concentration of a product rises from 0.2 mM to 1.4 mM over 6 minutes in an enzyme-catalyzed reaction. What is the average rate?', '0.2 mM/min', 'Rate = (1.4 − 0.2) mM / 6 min = 0.2 mM/min.', [
        ['0.23 mM/min', 'This divides the final concentration by the time (1.4/6) and ignores the starting value.'],
        ['7.2 mM/min', 'The change in concentration was multiplied by the time instead of divided.'],
        ['1.2 mM/min', 'This is the change in concentration; it was not divided by the time.'],
      ]),
      tf('Cellular respiration occurs only in animal cells.', false, 'Plants, fungi and many microbes also carry out respiration.', 'Correct. Plant cells have mitochondria and respire all the time, even though they also photosynthesize in the light.'),
    ],
  },
};
