import { mc, tf } from '../builder.js';

export default {
  summary: 'Build the language of chance: probability rules, conditional probability, random variables and the binomial distribution.',
  modules: {
    8: {
      summary: 'Complement, addition and multiplication rules; conditional probability.',
      sessions: [{
        t: 'Probability rules',
        s: 'Combining events, conditioning and independence.',
        md: `
## Basic rules
- **Complement:** P(not A) = 1 − P(A).
- **Addition rule:** P(A or B) = P(A) + P(B) − P(A and B). If A and B are **mutually exclusive** (cannot both occur), P(A and B) = 0.
- **Multiplication rule:** P(A and B) = P(A) · P(B | A).
- **Conditional probability:** P(B | A) = P(A and B) / P(A).

## Independence
A and B are **independent** if knowing one occurred does not change the probability of the other: **P(B | A) = P(B)**, or equivalently P(A and B) = P(A)·P(B).

**Example:** P(A) = 0.4, P(B) = 0.5, P(A and B) = 0.2.
- P(A or B) = 0.4 + 0.5 − 0.2 = **0.7**.
- P(A | B) = 0.2/0.5 = 0.4 = P(A), so A and B are **independent**. (Also P(A)P(B) = 0.2.)

> Do not confuse **mutually exclusive** with **independent**. Mutually exclusive events with positive probabilities are never independent, because one occurring means the other cannot.

Two-way tables make conditional probabilities easy: divide by the total of the **given** group.
`,
        q: [
          mc('P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2. What is P(A or B)?', '0.7', 'P(A) + P(B) − P(A and B) = 0.4 + 0.5 − 0.2.', [
            ['0.9', 'This adds the probabilities without subtracting the overlap.'],
            ['0.2', 'This is P(A and B), not P(A or B).'],
            ['0.1', 'This is 0.5 − 0.4, which is not related to the union.'],
          ]),
          mc('For the same events, are A and B independent?', 'Yes, because P(A and B) = P(A)·P(B) = 0.2', 'The product of the probabilities equals the probability of both.', [
            ['No, because they can occur together', 'Events that can occur together can still be independent.'],
            ['No, because P(A or B) is not 1', 'The union does not have to equal 1.'],
            ['Yes, because they are mutually exclusive', 'They are not mutually exclusive, since P(A and B) = 0.2.'],
          ]),
        ],
      }],
    },
    9: {
      summary: 'Expected value and the binomial distribution.',
      sessions: [{
        t: 'Random variables and the binomial distribution',
        s: 'Mean of a discrete variable and counting successes.',
        md: `
## Discrete random variables
A **random variable** X takes numerical values determined by chance. Its **expected value** (mean) is

**E(X) = Σ x · P(x)**

**Example:** a raffle: win $100 with probability 0.01, win $10 with probability 0.09, win $0 with probability 0.90.
E(X) = 100(0.01) + 10(0.09) + 0(0.90) = 1 + 0.9 = **$1.90**. This is the long-run average winnings per ticket.

## The binomial distribution
X is **binomial** if: there are a fixed number **n** of trials, each trial has two outcomes (success or failure), trials are **independent**, and the probability of success **p** is the same for each trial.

- **P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ**
- **Mean = np**; **SD = √(np(1 − p))**

**Example:** n = 10, p = 0.3. The mean is 3 and the SD is √2.1 ≈ 1.45. P(X = 3) = 120(0.027)(0.7⁷) ≈ **0.267**.

> Memorize the check: Binary, Independent, Number of trials fixed, Success probability constant (BINS).
`,
        q: [
          mc('A raffle ticket pays $100 with probability 0.01, $10 with probability 0.09 and $0 otherwise. What is the expected value?', '$1.90', '100(0.01) + 10(0.09) = 1 + 0.9.', [
            ['$110', 'This adds the prizes without weighting by probability.'],
            ['$0.10', 'This adds the probabilities and not the weighted values.'],
            ['$19', 'This is 10 times the correct value.'],
          ]),
          mc('X is binomial with n = 10 and p = 0.3. What is the mean of X?', '3', 'The mean is np = 10(0.3).', [
            ['0.3', 'This is p, the probability of success.'],
            ['1.45', 'This is the standard deviation, not the mean.'],
            ['7', 'This is n(1 − p), the expected number of failures.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Probability and random variables',
    tasks: [
      mc('Events A and B are independent with P(A) = 0.3 and P(B) = 0.4. What is P(A and B)?', '0.12', 'For independent events, multiply: 0.3 × 0.4.', [
        ['0.7', 'This adds the probabilities, which is not the "and" rule.'],
        ['0.1', 'This subtracts the probabilities.'],
        ['0.58', 'This is P(A or B) = 0.3 + 0.4 − 0.12 = 0.58, not P(A and B).'],
      ]),
      mc('Events A and B are mutually exclusive with P(A) = 0.25 and P(B) = 0.35. What is P(A or B)?', '0.60', 'With no overlap, the probabilities add.', [
        ['0.0875', 'This multiplies the probabilities, which is the rule for independent events.'],
        ['0.10', 'This subtracts the probabilities.'],
        ['0.40', 'This is not any combination of the two values.'],
      ]),
      mc('Of 150 students, the table shows: seniors 30 play a sport and 20 do not; juniors 40 play a sport and 60 do not. What is P(plays a sport | junior)?', '0.40', 'Among the 100 juniors, 40 play a sport.', [
        ['0.27', 'This is 40/150, the probability of being a junior who plays a sport.'],
        ['0.47', 'This is 70/150, the overall share who play a sport.'],
        ['0.57', 'This is 40/70, the share of sport players who are juniors, which reverses the condition.'],
      ]),
      mc('In a game, you win $5 with probability 0.3 and lose $2 with probability 0.7. What is the expected net gain per play?', '$0.10', 'E = 5(0.3) + (−2)(0.7) = 1.5 − 1.4 = 0.10.', [
        ['$3', 'This is the average of the two outcomes, ignoring probabilities.'],
        ['$1.50', 'This leaves out the expected loss.'],
        ['−$0.10', 'The positive part (1.5) is larger than the loss (1.4).'],
      ]),
      mc('A fair coin is flipped 5 times. What is the probability of exactly 2 heads?', '0.3125', 'C(5, 2)(0.5)⁵ = 10/32.', [
        ['0.4', 'This is 2/5, the proportion of heads.'],
        ['0.0625', 'This is (0.5)⁴, which ignores the number of ways.'],
        ['0.5', 'This is the probability of a single head.'],
      ]),
      tf('If events A and B are independent, then P(A | B) = P(A).', true, 'Knowing B occurred does not change the chance of A.', 'Correct. This is the definition of independence.'),
    ],
  },
};
