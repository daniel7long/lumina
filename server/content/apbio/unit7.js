import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain how populations change over generations, calculate allele frequencies, and trace how new species arise.',
  modules: {
    13: {
      summary: 'Natural selection, drift, gene flow and evidence.',
      sessions: [{
        t: 'Evidence and mechanisms of evolution',
        s: 'The conditions for natural selection, genetic drift, gene flow, mutation and the evidence for common ancestry.',
        md: `
## Evolution and natural selection

**Evolution** is a change in the **allele frequencies** of a population over generations. Natural selection occurs when:

1. individuals vary in a trait,
2. the variation is at least partly **heritable**,
3. more offspring are produced than can survive, and
4. individuals with some variants survive and reproduce more (higher **fitness**).

Fitness is **reproductive success**, not strength. Selection acts on individuals, but **populations evolve**. Selection can be **directional**, **stabilizing** or **disruptive**.

## Other mechanisms

| Mechanism | Effect |
|---|---|
| **Mutation** | the original source of new alleles |
| **Genetic drift** | random change in allele frequencies, strongest in **small** populations. **Bottleneck:** a population is reduced by a disaster. **Founder effect:** a few individuals start a new population. |
| **Gene flow** | movement of alleles between populations; makes populations more similar |
| **Nonrandom mating** | changes genotype frequencies (not allele frequencies) |

Only natural selection reliably produces **adaptation** to an environment. Drift can remove beneficial alleles or fix harmful ones by chance.

## Evidence of common ancestry

- **Homologous structures** (a bat wing and a human arm) share an ancestry but have different functions.
- **Analogous structures** (a bird wing and an insect wing) have similar functions but evolved independently (**convergent evolution**).
- **Vestigial structures**, the fossil record, shared DNA and universal genetic code, and **biogeography** also support common descent.
`,
        q: [
          mc('Which condition is necessary for natural selection to change a population?', 'Heritable variation in traits that affect survival or reproduction', 'Without heritable differences linked to fitness, the next generation would not differ in allele frequency.', [
            ['Individuals acquire new traits during their lives and pass them on', 'Traits acquired during life are generally not inherited.'],
            ['All individuals have the same traits', 'Without variation there is nothing for selection to act on.'],
          ]),
          mc('A small group of birds colonizes an island, and their descendants have different allele frequencies from the mainland population simply because the founders were not representative. What is this?', 'The founder effect', 'A few individuals carry only a sample of the original alleles, and drift acts strongly in small groups.', [
            ['Gene flow', 'Gene flow is the movement of alleles between populations.'],
            ['Directional selection', 'The change is due to chance sampling, not to differences in fitness.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Hardy–Weinberg, speciation and phylogenetic trees.',
      sessions: [{
        t: 'Hardy–Weinberg, speciation and phylogeny',
        s: 'Calculating allele and genotype frequencies, how species form, and reading a phylogenetic tree.',
        md: `
## Hardy–Weinberg equilibrium

If a population is not evolving, its allele and genotype frequencies stay constant. For a gene with two alleles, with dominant allele frequency **p** and recessive allele frequency **q**:

- **p + q = 1**
- **p² + 2pq + q² = 1** (frequencies of AA, Aa, aa)

The equilibrium assumes: **no mutation, no gene flow, no natural selection, random mating, and a very large population (no drift).**

### Worked examples
- If **4 %** of a population are recessive (q² = 0.04), then q = 0.2, p = 0.8, and carriers 2pq = 2(0.8)(0.2) = **0.32** (32 %).
- If 16 % show the recessive phenotype, q = 0.4 and **p = 0.6**.
- A disease affecting 1 in 2500 people (q² = 0.0004) has q = 0.02, so carriers 2pq = 2(0.98)(0.02) ≈ **0.039** (about 4 %).

Always start from q² (the only genotype that can be identified from its phenotype when the trait is recessive).

## Speciation

A **species** is a group of populations that can interbreed and produce fertile offspring. Speciation occurs when gene flow stops and populations diverge, often after **geographic isolation (allopatric speciation)**. **Reproductive barriers** keep species separate:

- **Prezygotic:** habitat, temporal (different mating seasons), behavioral, mechanical and gametic isolation.
- **Postzygotic:** hybrid inviability or sterility (a mule).

## Phylogenetic trees

A tree shows hypothesized evolutionary relationships. Branch points are **common ancestors**; two groups sharing a more **recent common ancestor** are more closely related. Position along the horizontal tips does not show relatedness; branching pattern does.
`,
        q: [
          mc('In a population in Hardy–Weinberg equilibrium, 4 % of individuals show a recessive phenotype. What percentage are heterozygous carriers?', '32 %', 'q² = 0.04, so q = 0.2, p = 0.8, and 2pq = 2(0.8)(0.2) = 0.32.', [
            ['20 %', 'This is the frequency of the recessive allele (q), not carriers.'],
            ['64 %', 'This is p² (homozygous dominant), not the carriers.'],
            ['4 %', 'This is the frequency of homozygous recessive individuals.'],
          ]),
          mc('On a phylogenetic tree, species X and Y share a common ancestor more recent than the one they share with species Z. What does this mean?', 'X and Y are more closely related to each other than to Z', 'The more recent the shared ancestor, the closer the relationship.', [
            ['Z evolved from X and Y', 'A tree shows shared ancestry, not that one living species evolved from another.'],
            ['X and Y are identical', 'Species that share a recent ancestor still differ.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Natural selection',
    tasks: [
      mc('In a population in Hardy–Weinberg equilibrium, 16 % of individuals show a recessive trait. What is the frequency of the dominant allele?', '0.6', 'q² = 0.16, so q = 0.4 and p = 1 − 0.4 = 0.6.', [
        ['0.84', 'This is 1 − q², not 1 − q.'],
        ['0.4', 'This is the frequency of the recessive allele.'],
        ['0.36', 'This is p², the frequency of homozygous dominant individuals.'],
      ]),
      mc('A recessive disease affects 1 in 2500 people. Assuming Hardy–Weinberg equilibrium, about what fraction of people are carriers?', 'About 4 %', 'q² = 1/2500 = 0.0004, q = 0.02, so 2pq = 2(0.98)(0.02) ≈ 0.039.', [
        ['About 2 %', 'This is the frequency of the allele (q), not of carriers.'],
        ['About 0.04 %', 'This is the frequency of the disease itself (q²).'],
        ['About 98 %', 'This is the frequency of the dominant allele.'],
      ]),
      mc('A hurricane kills most of a population of lizards, and the survivors by chance have mostly short tails. What process is this?', 'A bottleneck effect (genetic drift)', 'A random reduction in population size changes allele frequencies by chance.', [
        ['Directional selection for short tails', 'The survival was by chance, not because short tails gave an advantage.'],
        ['Gene flow', 'No individuals moved between populations.'],
        ['Mutation', 'No new alleles were created.'],
      ]),
      mc('Two populations of frogs breed at different times of year and so rarely mate. Which reproductive barrier is this?', 'Temporal isolation (prezygotic)', 'The barrier acts before a zygote can form because the breeding seasons do not overlap.', [
        ['Hybrid sterility (postzygotic)', 'Sterile hybrids require mating to occur first.'],
        ['Gametic isolation', 'This would involve sperm and egg failing to fuse, not different seasons.'],
      ]),
      mc('A bird wing and an insect wing are both used for flight but have different structures and origins. What are these structures?', 'Analogous structures', 'They evolved independently under similar selection pressures (convergent evolution).', [
        ['Homologous structures', 'Homologous structures share a common ancestral origin, like a bat wing and a human arm.'],
        ['Vestigial structures', 'Vestigial structures have lost most of their original function.'],
      ]),
      tf('Nonrandom mating changes the allele frequencies of a population.', false, 'It changes genotype frequencies but not allele frequencies.', 'Correct. Nonrandom mating (such as inbreeding) shifts genotype frequencies toward homozygotes without changing the alleles themselves.'),
      mc('Which statement best defines fitness?', 'The relative ability of an individual to survive and produce offspring', 'Fitness is measured by reproductive success.', [
        ['Physical strength and size', 'A strong individual with no offspring has a fitness of zero.'],
        ['The length of an individual’s life', 'A long-lived individual with few offspring is less fit than a short-lived one with many.'],
      ]),
    ],
  },
};
