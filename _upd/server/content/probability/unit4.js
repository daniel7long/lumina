import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn the language and rules of probability, from equally likely outcomes to random variables, the binomial and normal models, and sampling distributions.',
  modules: {
    8: {
      summary: 'Probability as long-run relative frequency.',
      sessions: [
        {
          t: 'What is probability?',
          s: 'Relative frequency and the law of large numbers.',
          md: `
## Probability

The **probability** of an event is a number from **0 to 1** that describes how likely it is. It can be interpreted as the **long-run relative frequency**: the proportion of times the event occurs if the random process is repeated many times.

- 0 means impossible, 1 means certain, 0.5 means "as likely as not".
- If a coin is tossed 1,000 times and lands heads 512 times, the relative frequency is 0.512, an estimate of P(heads).

### Law of large numbers
As the number of repetitions grows, the relative frequency settles near the true probability. A short run can look unusual: it does **not** mean that the coin is "due" for tails after a streak of heads. Each toss is independent.

### Reading probabilities
"A 30% chance of rain" means that in similar situations it rains about 30 times in 100.
`,
          q: [
            mc('A basketball player makes 78 of 100 free throws. What is the best estimate of the probability she makes the next one?', '0.78', 'Relative frequency estimates the probability.', [
              ['0.50', 'Nothing suggests 50%.'],
              ['0.22', 'This is the proportion of misses.'],
            ]),
            tf('After five heads in a row, tails is more likely on the next fair coin toss.', false, 'Tosses are independent: the probability of tails stays 0.5.', 'Correct. The coin has no memory.'),
          ],
        },
      ],
    },
    9: {
      summary: 'Sample spaces, equally likely outcomes and the basic rules.',
      sessions: [
        {
          t: 'Sample spaces and probability rules',
          s: 'Equally likely outcomes, the complement and addition rules.',
          md: `
## Finding probabilities

The **sample space** is the set of all possible outcomes. An **event** is a set of outcomes.

### Equally likely outcomes
P(A) = (number of outcomes in A) / (number of outcomes in the sample space).

For two fair dice there are 36 outcomes. The sum 7 occurs in 6 of them: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). So P(sum = 7) = 6/36 = 1/6.

### Rules
- **Range:** 0 ≤ P(A) ≤ 1.
- **Complement:** P(not A) = 1 − P(A).
- **Addition rule:** P(A or B) = P(A) + P(B) − P(A and B).
- For **disjoint (mutually exclusive)** events, P(A and B) = 0, so P(A or B) = P(A) + P(B).

**Example:** P(A) = 0.5, P(B) = 0.3, P(A and B) = 0.1. Then P(A or B) = 0.5 + 0.3 − 0.1 = **0.7**.

### Tools
A **Venn diagram** or a **probability table** helps to organize the overlapping events.
`,
          q: [
            mc('Two fair dice are rolled. What is P(sum = 7)?', '1/6', '6 of 36 outcomes give 7.', [
              ['1/12', 'There are 6 outcomes, not 3.'],
              ['7/36', 'Only 6 of the 36 outcomes sum to 7.'],
            ]),
            mc('P(A) = 0.5, P(B) = 0.3 and P(A and B) = 0.1. What is P(A or B)?', '0.7', '0.5 + 0.3 − 0.1 = 0.7.', [
              ['0.8', 'This ignores the overlap.'],
              ['0.15', 'This is not the result of the addition rule.'],
            ]),
          ],
        },
      ],
    },
    10: {
      summary: 'Conditional probability, independence and probability trees.',
      sessions: [
        {
          t: 'Conditional probability and independence',
          s: 'The multiplication rule, trees and Bayes-style reasoning.',
          md: `
## Conditional probability

**P(A | B)** is the probability of A **given that** B has occurred: P(A | B) = P(A and B) / P(B), provided P(B) > 0.

Knowing B shrinks the sample space to B.

### General multiplication rule
P(A and B) = P(A) × P(B | A).

### Independence
A and B are **independent** if knowing one does not change the probability of the other: P(A | B) = P(A), equivalently P(A and B) = P(A) × P(B).

> **Example:** P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Then P(A) × P(B) = 0.2 = P(A and B), so A and B are independent.

### Probability trees
Draw branches for each stage, label each with its (conditional) probability and multiply along a path.

**Medical test example.** A disease affects 1% of people. The test is positive for 90% of those with the disease and 5% of those without it. P(positive) = 0.01 × 0.90 + 0.99 × 0.05 = 0.0585. P(disease | positive) = 0.009 / 0.0585 ≈ **0.154**. Even after a positive test, the probability of disease is only about 15%, because the disease is rare.
`,
          q: [
            mc('P(A) = 0.5, P(B) = 0.4 and P(A and B) = 0.2. Are A and B independent?', 'Yes, because P(A and B) = P(A) × P(B)', '0.5 × 0.4 = 0.2.', [
              ['No, because P(A and B) is not 0', 'Independent events can overlap.'],
              ['No, because P(A) is not equal to P(B)', 'That is not the condition.'],
            ]),
            mc('A disease affects 1% of people. A test is positive for 90% of those with the disease and 5% of those without. About what is P(disease | positive)?', 'About 15%', '0.009 / (0.009 + 0.0495) ≈ 0.154.', [
              ['About 90%', 'This is P(positive | disease), not P(disease | positive).'],
              ['About 1%', 'The positive test raises the probability.'],
            ]),
          ],
        },
      ],
    },
    11: {
      summary: 'Random variables, expected value, the binomial and normal distributions.',
      sessions: [
        {
          t: 'Discrete random variables and the binomial model',
          s: 'Distributions, mean, variance and binomial probabilities.',
          md: `
## Random variables

A **random variable** takes numerical values determined by chance. A **discrete** random variable has countable values (0, 1, 2…); a **continuous** one takes any value in an interval.

### Mean and variance of a discrete variable
| x | 0 | 1 | 2 |
| --- | --- | --- | --- |
| P(x) | 0.2 | 0.5 | 0.3 |

- Mean: μ = Σ x·P(x) = 0(0.2) + 1(0.5) + 2(0.3) = **1.1**
- Variance: σ² = Σ (x − μ)²·P(x) = 0.242 + 0.005 + 0.243 = **0.49**, so σ = 0.7.

### Rules for means and variances
- Linear change Y = a + bX: mean = a + b·μ, SD = |b|·σ.
- Sum of **independent** variables: mean = μ₁ + μ₂ and variance = σ₁² + σ₂².

### The binomial model
Use it when there are a fixed number n of trials, each **success/failure**, with the same probability p and **independent**. Then
P(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ, mean = np and SD = √(np(1 − p)).

> n = 5, p = 0.5: P(X = 2) = 10 × 0.5² × 0.5³ = 10/32 = **0.3125**.
`,
          q: [
            mc('X has the distribution P(0) = 0.2, P(1) = 0.5, P(2) = 0.3. What is the mean of X?', '1.1', '0(0.2) + 1(0.5) + 2(0.3) = 1.1.', [
              ['1.0', 'The mean is not the middle value.'],
              ['0.5', 'This is a single probability.'],
            ]),
            mc('A fair coin is tossed 5 times. What is the probability of exactly 2 heads?', '0.3125', 'C(5,2)(0.5)^5 = 10/32.', [
              ['0.4', 'This is not the binomial probability.'],
              ['0.5', 'It is not equal to 0.5.'],
            ]),
          ],
        },
        {
          t: 'Continuous variables and the normal distribution',
          s: 'Density curves, z-scores and normal probabilities.',
          md: `
## Continuous random variables

For a continuous variable, probabilities are **areas under a density curve**; the total area is 1, and P(X = a single value) = 0.

### The normal distribution
Bell-shaped and symmetric, defined by its mean μ and SD σ. A **z-score** tells how many SDs a value is from the mean:
z = (x − μ) / σ.

The **standard normal** has μ = 0 and σ = 1. Examples: P(Z < 1.96) ≈ **0.975** and P(−1 < Z < 1) ≈ **0.683**.

**Example.** IQ ~ N(100, 15). For x = 130, z = (130 − 100)/15 = 2; P(X < 130) ≈ 0.977.

### Normal approximation to the binomial
When np ≥ 10 and n(1 − p) ≥ 10, the binomial distribution is approximately normal with mean np and SD √(np(1−p)).
`,
          q: [
            mc('IQ is N(100, 15). What is the z-score of an IQ of 130?', '2', '(130 − 100) / 15 = 2.', [
              ['30', 'This is the difference, not the z-score.'],
              ['0.5', 'This is not the result of the formula.'],
            ]),
            mc('Approximately what is P(Z < 1.96) for the standard normal distribution?', '0.975', 'This is the 97.5th percentile, used for 95% intervals.', [
              ['0.95', 'The central 95% lies between ±1.96.'],
              ['0.68', 'That is within 1 SD.'],
            ]),
          ],
        },
      ],
    },
    12: {
      summary: 'Sampling variability and the sampling distribution of the mean and proportion.',
      sessions: [
        {
          t: 'Sampling distributions and the Central Limit Theorem',
          s: 'Parameters vs. statistics, standard error and CLT.',
          md: `
## Sampling distributions

A **parameter** describes a population; a **statistic** describes a sample. Different samples give different statistics: this is **sampling variability**. The **sampling distribution** of a statistic shows all its values and how often they occur over repeated samples.

### Sample mean
For samples of size n from a population with mean μ and SD σ:
- mean of x̄ = μ (unbiased)
- SD of x̄ (the **standard error**) = σ/√n

**Central Limit Theorem:** for large n (often 30 or more) the sampling distribution of x̄ is approximately **normal**, whatever the population shape.

**Example:** μ = 100, σ = 15, n = 36 → standard error = 15/6 = **2.5**. A sample mean of 105 is 2 standard errors above μ, which is unusual (about a 2.3% chance of being at least this high).

### Sample proportion
For proportion p: mean of p̂ = p and standard error = √(p(1−p)/n). It is approximately normal if np ≥ 10 and n(1 − p) ≥ 10.

**Example:** p = 0.5, n = 100 → standard error = √(0.25/100) = **0.05**.

Larger samples give smaller standard errors: the statistics vary less.
`,
          q: [
            mc('A population has μ = 100 and σ = 15. For samples of size n = 36, what is the standard error of the sample mean?', '2.5', '15 / √36 = 15 / 6 = 2.5.', [
              ['15', 'This is the population SD.'],
              ['0.42', 'This is not the standard error.'],
            ]),
            mc('Which change makes the sampling distribution of the mean narrower?', 'Increasing the sample size', 'The standard error σ/√n decreases as n grows.', [
              ['Decreasing the sample size', 'This widens it.'],
              ['Changing the mean of the population', 'This changes the center, not the spread.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Probability',
    tasks: [
      mc('A bag has 3 red, 5 blue and 2 green marbles. One is drawn at random. What is P(blue or green)?', '0.7', '(5 + 2) / 10 = 0.7.', [
        ['0.5', 'This is only P(blue).'],
        ['0.2', 'This is only P(green).'],
        ['0.3', 'This is P(red).'],
      ]),
      mc('P(rain) = 0.3. What is the probability it does NOT rain?', '0.7', '1 − 0.3 = 0.7.', [
        ['0.3', 'This is P(rain).'],
        ['0.03', 'This is not the complement.'],
        ['1.3', 'A probability cannot exceed 1.'],
      ]),
      mc('Two fair dice are rolled. What is the probability that both show a 6?', '1/36', 'The dice are independent: 1/6 × 1/6.', [
        ['1/6', 'This is the probability for one die.'],
        ['2/6', 'This is not the result of multiplication.'],
        ['1/12', 'This is not the probability.'],
      ]),
      mc('In a class, 60% are female (F) and 20% of the class are female and play chess. What is P(chess | F)?', '1/3', '0.20 / 0.60 = 1/3.', [
        ['0.2', 'This is P(F and chess).'],
        ['0.6', 'This is P(F).'],
        ['0.8', 'This is not the conditional probability.'],
      ]),
      mc('X takes values 0, 1, 2 with probabilities 0.2, 0.5, 0.3. What is its variance?', '0.49', 'Σ(x − 1.1)²P(x) = 0.242 + 0.005 + 0.243.', [
        ['1.1', 'This is the mean.'],
        ['0.7', 'This is the standard deviation.'],
        ['0.3', 'This is not the variance.'],
      ]),
      mc('If Y = 2X + 3, X has mean 10 and SD 4. What are the mean and SD of Y?', 'Mean 23 and SD 8', 'Mean = 2(10) + 3 = 23; SD = |2| × 4 = 8.', [
        ['Mean 23 and SD 11', 'Adding 3 does not change SD.'],
        ['Mean 20 and SD 8', 'The mean must also include the +3.'],
        ['Mean 13 and SD 4', 'Both the mean and the SD change.'],
      ]),
      mc('X ~ Binomial(n = 10, p = 0.3). What are the mean and SD of X?', 'Mean 3 and SD ≈ 1.45', 'np = 3 and √(10 × 0.3 × 0.7) ≈ 1.45.', [
        ['Mean 3 and SD 2.1', 'The variance is 2.1, not the SD.'],
        ['Mean 0.3 and SD 1.45', 'The mean is np.'],
        ['Mean 7 and SD 1.45', 'The mean is the expected number of successes.'],
      ]),
      mc('A random sample of 100 is taken from a population where p = 0.5. What is the standard error of the sample proportion?', '0.05', '√(0.5 × 0.5 / 100) = 0.05.', [
        ['0.5', 'This is p.'],
        ['0.25', 'This is the variance of one trial.'],
        ['0.005', 'This is not the standard error.'],
      ]),
      tf('The Central Limit Theorem says the sampling distribution of the mean is approximately normal for large samples, even if the population is skewed.', true, 'Correct: for large n the sample mean is approximately normal, whatever the shape of the population.', 'Not quite. The CLT applies to large samples regardless of the population shape.'),
    ],
  },
};
