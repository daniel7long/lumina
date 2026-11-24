import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain how traits are passed on: how meiosis shuffles genes, how to predict offspring with probability, and how to test data against a prediction.',
  modules: {
    9: {
      summary: 'Meiosis and Mendelian genetics.',
      sessions: [{
        t: 'Meiosis and Mendelian genetics',
        s: 'How meiosis makes variation, Punnett squares, and the product and sum rules.',
        md: `
## Meiosis

**Meiosis** turns one diploid (2n) cell into four genetically different haploid (n) cells through **two divisions** after one round of DNA replication.

- **Meiosis I** separates **homologous chromosomes**. In prophase I, homologues pair and **cross over**, exchanging segments. In metaphase I homologous pairs line up **independently** of each other (independent assortment).
- **Meiosis II** separates sister chromatids, like mitosis.

Variation comes from **crossing over**, **independent assortment** (2²³ ≈ 8.4 million combinations in humans) and **random fertilization**. **Nondisjunction** (chromosomes failing to separate) causes aneuploidy, for example 47 chromosomes with an extra chromosome 21 in Down syndrome.

## Mendelian genetics

Alleles of a gene separate during gamete formation (**law of segregation**), and genes on different chromosomes are inherited independently (**law of independent assortment**).

For a cross **Aa × Aa**: genotypes 1 AA : 2 Aa : 1 aa, phenotypes **3 dominant : 1 recessive**. A **test cross** (unknown × homozygous recessive) shows whether an individual is AA or Aa.

## Probability rules

- **Product rule:** the probability that independent events both happen is the product of their probabilities.
- **Sum rule:** the probability of either of two mutually exclusive events is the sum.

For **AaBb × AaBb**: the probability of aabb = 1/4 × 1/4 = **1/16**. The phenotype ratio is **9 : 3 : 3 : 1**. For AaBbCc × AaBbCc, aabbcc = (1/4)³ = **1/64**. The chance of two children both having genotype aa is (1/4)² = 1/16.
`,
        q: [
          mc('Two heterozygous (Aa) parents have a child. What is the probability that the child is aa?', '1/4', 'Each parent passes the a allele with probability 1/2, so (1/2) × (1/2) = 1/4.', [
            ['1/2', 'This is the probability for a heterozygous child (Aa) or for a single parent passing on the allele.'],
            ['3/4', 'This is the probability of the dominant phenotype.'],
            ['1/16', 'This would be the probability for two independent children or a dihybrid cross.'],
          ]),
          mc('Which event of meiosis contributes to genetic variation by exchanging segments between homologous chromosomes?', 'Crossing over in prophase I', 'Homologues pair and swap segments, creating new combinations of alleles on one chromosome.', [
            ['Separation of sister chromatids in anaphase II', 'Sister chromatids are identical apart from rare mutations, so separating them creates no new combinations.'],
            ['DNA replication in S phase', 'Replication makes identical copies of the DNA.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Sex-linkage, linked genes, incomplete dominance and chi-square.',
      sessions: [{
        t: 'Non-Mendelian inheritance and chi-square analysis',
        s: 'X-linked traits, gene linkage, incomplete dominance and testing a ratio with chi-square.',
        md: `
## Patterns that are not simple dominance

- **Incomplete dominance:** the heterozygote is intermediate (red × white snapdragons give 100 % pink; pink × pink gives 1 red : 2 pink : 1 white).
- **Codominance:** both alleles show (AB blood type).
- **Sex-linked (X-linked) traits:** the gene is on the X chromosome. A mother who is a carrier (X^H X^h) and a normal father (X^H Y) have sons with a **1/2** chance of being affected, and daughters with **no** chance of being affected (but a 1/2 chance of being carriers). Males need only one copy, so X-linked recessive traits are more common in males.
- **Linked genes:** genes close together on one chromosome tend to be inherited together. The **recombination frequency** = recombinant offspring ÷ total offspring × 100. **1 map unit = 1 % recombination.** If 120 of 1200 offspring are recombinants, the genes are **10 map units** apart.

## Chi-square (χ²) test

Does observed data fit a predicted ratio?

**χ² = Σ (observed − expected)² / expected**

Degrees of freedom = number of categories − 1. Compare with a critical value at p = 0.05:

| df | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| critical value | 3.84 | 5.99 | 7.81 | 9.49 |

If χ² is **less than** the critical value, you **fail to reject** the null hypothesis: the difference from the expected ratio can be due to chance. If it is **greater**, reject it.

Example: 400 pea plants, 290 purple and 110 white, tested against a 3 : 1 ratio (expected 300 and 100): χ² = 10²/300 + 10²/100 = 0.33 + 1.00 = **1.33**. With df = 1 and a critical value of 3.84, we fail to reject the null hypothesis.
`,
        q: [
          mc('A heterozygous carrier mother (XᴴXʰ) and a normal father (XᴴY) have a son. What is the probability that the son is affected by the X-linked recessive trait?', '1/2', 'The son receives his X from his mother, and half of her X chromosomes carry the recessive allele.', [
            ['0', 'Sons of carrier mothers can be affected; this would be true of daughters.'],
            ['1/4', 'This is the probability that any child, of either sex, is an affected son.'],
            ['1', 'The mother passes the normal allele half of the time.'],
          ]),
          mc('A chi-square test of a 3 : 1 ratio gives χ² = 1.33 with 1 degree of freedom (critical value 3.84 at p = 0.05). What is the conclusion?', 'Fail to reject the null hypothesis; the data fit the predicted ratio', 'The calculated value is below the critical value, so the difference could be due to chance.', [
            ['Reject the null hypothesis; the data do not fit the ratio', 'This would be the conclusion if χ² were greater than 3.84.'],
            ['Accept the ratio as proven', 'A test can fail to reject a hypothesis but cannot prove it.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Heredity',
    tasks: [
      mc('Two plants heterozygous for three independent genes (AaBbCc) are crossed. What is the probability of an offspring that is aabbcc?', '1/64', 'The probability for each gene is 1/4, and for three independent genes (1/4)³ = 1/64.', [
        ['1/16', 'This is the value for two genes.'],
        ['1/8', 'This is the probability of a particular genotype if each gene had probability 1/2.'],
        ['3/4', 'The three probabilities of 1/4 were added instead of multiplied.'],
      ]),
      mc('Of 1200 offspring in a test cross, 120 are recombinants. How far apart are the two genes?', '10 map units', 'Recombination frequency = 120/1200 = 10 %, and 1 % equals 1 map unit.', [
        ['1 map unit', 'The fraction (0.1) was not converted to a percentage.'],
        ['120 map units', 'This is the number of recombinants, not their percentage.'],
        ['50 map units', 'A frequency of 50 % indicates genes that assort independently, not tightly linked genes.'],
      ]),
      mc('A cross of dihybrid pea plants gives 160 offspring. Observed phenotypes: 86, 34, 28 and 12; expected 9 : 3 : 3 : 1 gives 90, 30, 30 and 10. χ² is about 1.24. With 3 degrees of freedom the critical value is 7.81. What do you conclude?', 'Fail to reject the null hypothesis', 'χ² (1.24) is smaller than 7.81, so the deviation can be explained by chance.', [
        ['Reject the null hypothesis', 'This would require χ² to be greater than 7.81.'],
        ['The genes must be linked', 'A good fit to 9 : 3 : 3 : 1 suggests independent assortment, not linkage.'],
        ['The experiment must be repeated until χ² is zero', 'Some deviation is expected by chance; a χ² of exactly zero is unusual.'],
      ]),
      mc('Red and white snapdragons are crossed, and all offspring are pink. What pattern of inheritance does this show?', 'Incomplete dominance', 'The heterozygote has an intermediate phenotype.', [
        ['Complete dominance', 'With complete dominance the heterozygote would look like one parent.'],
        ['Codominance', 'With codominance both alleles would be fully expressed in the same cell or region (for example red and white patches).'],
        ['Sex linkage', 'Flower color in snapdragons is not carried on a sex chromosome.'],
      ]),
      mc('A person has 47 chromosomes, including three copies of chromosome 21. Which event most likely caused this?', 'Nondisjunction during meiosis', 'Homologous chromosomes or chromatids failed to separate, giving a gamete with an extra chromosome.', [
        ['Crossing over in prophase I', 'Crossing over exchanges segments but does not change chromosome number.'],
        ['Independent assortment', 'This shuffles whole chromosomes but each gamete still gets one of each pair.'],
        ['DNA replication errors in S phase', 'Replication errors cause point mutations, not extra whole chromosomes.'],
      ]),
      tf('Crossing over occurs during prophase I of meiosis.', true, 'Homologous chromosomes pair up and exchange segments in prophase I.', 'This is the stage at which homologues are paired closely enough to exchange segments.'),
      mc('A heterozygous carrier mother and a normal father have a daughter. What is the probability that she is affected by an X-linked recessive trait?', '0', 'The daughter inherits a normal X from her father, so she cannot be homozygous recessive.', [
        ['1/2', 'This is the probability for a son.'],
        ['1/4', 'This would apply if the father were also a carrier or had the trait.'],
      ]),
    ],
  },
};
