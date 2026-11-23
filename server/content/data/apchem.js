// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year chemistry (AP Chemistry) topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Atomic Structure and Properties', modules: [
    mod(1, 'Moles and Composition', ['Convert between mass, moles and number of particles using molar mass and Avogadro’s number.', 'Find mass percent, empirical formulas and molecular formulas from data.', 'Calculate average atomic mass from isotope abundances.']),
    mod(2, 'Electron Configuration and Periodic Trends', ['Write ground-state electron configurations for atoms and ions.', 'Explain trends in atomic radius, ionization energy and electronegativity using nuclear charge, shielding and distance.']),
  ] },
  { n: 2, title: 'Molecular and Ionic Compound Structure', modules: [
    mod(3, 'Types of Chemical Bonds', ['Classify bonding as ionic, covalent or metallic and link each to properties.', 'Draw Lewis structures, including resonance and formal charge.']),
    mod(4, 'Molecular Shape and Polarity', ['Predict molecular geometry with VSEPR theory.', 'Decide whether a molecule is polar from its shape and bond polarities.', 'Describe sigma and pi bonds and hybridization.']),
  ] },
  { n: 3, title: 'Intermolecular Forces and Properties', modules: [
    mod(5, 'Intermolecular Forces and Physical Properties', ['Identify London dispersion, dipole–dipole and hydrogen-bonding forces.', 'Use intermolecular forces to explain boiling points, vapor pressure and solubility.']),
    mod(6, 'Gases', ['Apply the ideal gas law and combined gas law.', 'Use partial pressures and mole fractions.', 'Explain gas behavior with kinetic molecular theory.']),
  ] },
  { n: 4, title: 'Chemical Reactions', modules: [
    mod(7, 'Types of Reactions and Net Ionic Equations', ['Recognize precipitation, acid–base and redox reactions.', 'Write balanced molecular and net ionic equations using solubility rules.']),
    mod(8, 'Stoichiometry and Titration', ['Solve limiting-reactant and percent-yield problems.', 'Calculate molarity and use titration data to find an unknown concentration.']),
  ] },
  { n: 5, title: 'Kinetics', modules: [
    mod(9, 'Reaction Rates and Rate Laws', ['Determine rate laws and rate constants from initial-rate data.', 'Use integrated rate laws and half-life for first-order reactions.']),
    mod(10, 'Mechanisms, Collision Theory and Catalysis', ['Use collision theory and activation energy to explain rate changes.', 'Connect a mechanism to its rate law and identify intermediates and catalysts.']),
  ] },
  { n: 6, title: 'Thermochemistry', modules: [
    mod(11, 'Energy Changes and Calorimetry', ['Distinguish endothermic and exothermic processes and read energy diagrams.', 'Use q = mcΔT and calorimetry to find heat transfer.']),
    mod(12, 'Enthalpy, Hess’s Law and Bond Energies', ['Calculate ΔH from Hess’s law and enthalpies of formation.', 'Estimate ΔH from bond energies.']),
  ] },
  { n: 7, title: 'Equilibrium', modules: [
    mod(13, 'Equilibrium Constants and Le Châtelier’s Principle', ['Write K expressions and use Q to predict the direction of a reaction.', 'Solve equilibrium problems with ICE tables.', 'Predict the effect of a disturbance using Le Châtelier’s principle.']),
    mod(14, 'Solubility Equilibria', ['Write Ksp expressions and compute solubility.', 'Predict precipitation and the common-ion effect.']),
  ] },
  { n: 8, title: 'Acids and Bases', modules: [
    mod(15, 'pH and Weak Acids and Bases', ['Calculate pH and pOH for strong acids and bases.', 'Use Ka and Kb to find the pH of weak acid or base solutions.']),
    mod(16, 'Buffers and Titration Curves', ['Explain how buffers resist pH change and use the Henderson–Hasselbalch equation.', 'Interpret titration curves, equivalence points and half-equivalence points.']),
  ] },
  { n: 9, title: 'Thermodynamics and Electrochemistry', modules: [
    mod(17, 'Entropy and Gibbs Free Energy', ['Predict the sign of ΔS for a process.', 'Use ΔG = ΔH − TΔS to decide spontaneity and relate ΔG° to K.']),
    mod(18, 'Electrochemistry', ['Identify oxidation, reduction, anode and cathode in galvanic and electrolytic cells.', 'Calculate cell potential and relate E° to ΔG° and K.']),
  ] },
];
