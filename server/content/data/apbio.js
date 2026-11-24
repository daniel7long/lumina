// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year college biology (AP Biology) topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Chemistry of Life', modules: [
    mod(1, 'Water and the Elements of Life', ['Explain how hydrogen bonding gives water its cohesion, adhesion, high specific heat and the lower density of ice.', 'Interpret the pH scale and explain why buffers matter in living systems.']),
    mod(2, 'Biological Macromolecules', ['Relate the monomers and bonds of carbohydrates, lipids, proteins and nucleic acids to their functions.', 'Describe the four levels of protein structure and what determines each.', 'Apply base pairing rules to DNA and RNA.']),
  ] },
  { n: 2, title: 'Cell Structure and Function', modules: [
    mod(3, 'Cell Organelles and Cell Size', ['Describe the structure and function of the major organelles and compare prokaryotic and eukaryotic cells.', 'Explain why surface area to volume ratio limits cell size.']),
    mod(4, 'Membranes and Transport', ['Explain the fluid-mosaic structure of the plasma membrane.', 'Distinguish passive transport, facilitated diffusion and active transport.', 'Use water potential to predict the movement of water.']),
  ] },
  { n: 3, title: 'Cellular Energetics', modules: [
    mod(5, 'Enzymes', ['Explain how enzymes lower activation energy and how temperature, pH and inhibitors change their activity.', 'Interpret graphs of reaction rate against substrate concentration.']),
    mod(6, 'Photosynthesis and Cellular Respiration', ['Trace energy and matter through the light reactions, the Calvin cycle, glycolysis, the Krebs cycle and the electron transport chain.', 'Explain chemiosmosis and compare aerobic respiration with fermentation.']),
  ] },
  { n: 4, title: 'Cell Communication and Cell Cycle', modules: [
    mod(7, 'Cell Signaling', ['Describe the three stages of signal transduction: reception, transduction and response.', 'Explain how phosphorylation cascades and second messengers amplify a signal.']),
    mod(8, 'The Cell Cycle and Its Regulation', ['Describe the phases of the cell cycle and of mitosis.', 'Explain how cyclins, checkpoints and mutations in genes such as p53 relate to cancer.']),
  ] },
  { n: 5, title: 'Heredity', modules: [
    mod(9, 'Meiosis and Mendelian Genetics', ['Compare mitosis and meiosis and explain how meiosis produces genetic variation.', 'Predict offspring ratios with Punnett squares and the product and sum rules of probability.']),
    mod(10, 'Non-Mendelian Inheritance and Chi-Square Analysis', ['Analyze sex-linked inheritance, incomplete dominance and linked genes.', 'Use a chi-square test to decide whether observed data fit a predicted ratio.']),
  ] },
  { n: 6, title: 'Gene Expression and Regulation', modules: [
    mod(11, 'Replication, Transcription and Translation', ['Describe semiconservative DNA replication.', 'Transcribe and translate a DNA sequence using the genetic code and predict the effect of mutations.']),
    mod(12, 'Gene Regulation and Biotechnology', ['Explain how operons and transcription factors regulate gene expression.', 'Describe PCR, restriction enzymes and gel electrophoresis and interpret their results.']),
  ] },
  { n: 7, title: 'Natural Selection', modules: [
    mod(13, 'Evidence and Mechanisms of Evolution', ['Explain the conditions for natural selection and the roles of drift, gene flow and mutation.', 'Distinguish homologous, analogous and vestigial structures as evidence of evolution.']),
    mod(14, 'Population Genetics, Speciation and Phylogeny', ['Apply the Hardy–Weinberg equations to calculate allele and genotype frequencies.', 'Describe how reproductive isolation leads to speciation and read a phylogenetic tree.']),
  ] },
  { n: 8, title: 'Ecology', modules: [
    mod(15, 'Energy Flow and Population Ecology', ['Trace energy through trophic levels and apply the 10 percent rule.', 'Compare exponential and logistic population growth.']),
    mod(16, 'Communities and Ecosystems', ['Explain keystone species, succession and species diversity.', 'Describe how carbon and nitrogen cycle through an ecosystem.']),
  ] },
];
