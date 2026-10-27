import { mc, tf } from '../builder.js';

export default {
  summary: 'Understand how experience changes behavior: classical conditioning, operant conditioning, and learning by insight and observation.',
  modules: {
    13: {
      summary: 'Learning by association.',
      sessions: [
        {
          t: 'Classical conditioning',
          s: 'Pavlov, associations, extinction, phobias and taste aversion.',
          md: `
## Classical conditioning

Ivan Pavlov showed that a neutral stimulus paired with a meaningful one can come to trigger a response.

| Term | Meaning | Pavlov's dogs |
| --- | --- | --- |
| **Unconditioned stimulus (US)** | Naturally triggers a response | Food |
| **Unconditioned response (UR)** | Natural reaction | Salivation to food |
| **Neutral stimulus → Conditioned stimulus (CS)** | Learned signal | Bell |
| **Conditioned response (CR)** | Learned reaction | Salivation to the bell |

### Processes
- **Acquisition:** the CS–US pairing is learned (the CS must come just **before** the US).
- **Extinction:** the CR fades when the CS is no longer paired with the US.
- **Spontaneous recovery:** a weakened CR reappears after a rest.
- **Generalization / discrimination:** responding to similar stimuli / only to the specific one.
- **Second-order conditioning:** a CS acts like a US to condition a new CS, building chains.

### Real-life examples
- **Phobias:** fear can be learned by association (Watson and Rayner's "Little Albert" study, now regarded as unethical).
- **Conditioned taste aversion** (Garcia): one pairing of a taste with nausea can last, even when the delay is hours.
- Cravings triggered by cues linked with drug use.

**Exposure therapy** treats fears by extinguishing the learned association.
`,
          q: [
            mc('In Pavlov\'s experiment, the sound of the bell after conditioning is the', 'Conditioned stimulus', 'It now triggers salivation.', [
              ['Unconditioned stimulus', 'That is the food.'],
              ['Unconditioned response', 'That is salivation to food.'],
            ]),
            mc('A conditioned response gradually disappears when the CS is repeatedly presented without the US. This is', 'Extinction', 'The association weakens.', [
              ['Acquisition', 'This is learning the association.'],
              ['Generalization', 'This is responding to similar stimuli.'],
            ]),
          ],
        },
      ],
    },
    14: {
      summary: 'Learning from consequences.',
      sessions: [
        {
          t: 'Operant conditioning',
          s: 'Reinforcement, punishment and schedules.',
          md: `
## Operant conditioning

Thorndike's **law of effect** says behaviors followed by satisfying outcomes are repeated. B. F. Skinner developed it into **operant conditioning**: behavior is shaped by its **consequences**.

### Four consequences
| | **Adds** a stimulus | **Removes** a stimulus |
| --- | --- | --- |
| **Increases behavior** | **Positive reinforcement** (praise for work) | **Negative reinforcement** (seatbelt chime stops when buckled) |
| **Decreases behavior** | **Positive punishment** (a fine for speeding) | **Negative punishment** (taking away a phone) |

"Positive" = something added; "negative" = something removed. Negative reinforcement is **not** punishment.

### Schedules of reinforcement
| Schedule | Rule | Pattern |
| --- | --- | --- |
| **Fixed ratio** | Every n responses | High rate, brief pause after reward |
| **Variable ratio** | Unpredictable number of responses | **Highest, steady rate; most resistant to extinction** (slot machines) |
| **Fixed interval** | First response after a fixed time | Rate rises near the time |
| **Variable interval** | After unpredictable time | Slow, steady |

### Shaping
Reinforce successive approximations to a desired behavior.

### Classical vs. operant
Classical: association between stimuli, **involuntary** responses. Operant: association between behavior and consequence, **voluntary** behavior.
`,
          q: [
            mc('A child cleans her room to stop her parent\'s nagging. This is an example of', 'Negative reinforcement', 'A stimulus (nagging) is removed, which increases the behavior.', [
              ['Positive punishment', 'Punishment decreases behavior.'],
              ['Positive reinforcement', 'No pleasant stimulus is added.'],
            ]),
            mc('Which schedule produces the highest, steadiest response rate and the greatest resistance to extinction?', 'Variable ratio', 'Rewards are unpredictable (as in gambling).', [
              ['Fixed interval', 'Responding increases only near the time.'],
              ['Fixed ratio', 'It leads to pauses after reward.'],
            ]),
          ],
        },
      ],
    },
    15: {
      summary: 'Learning beyond trial and error.',
      sessions: [
        {
          t: 'Insight, latent and observational learning',
          s: 'Cognitive maps, Köhler and Bandura.',
          md: `
## Cognitive learning

### Latent learning
Edward Tolman let some rats explore a maze with no reward. When food was later introduced, they quickly found their way, so they had learned a **cognitive map** without any reinforcement. Learning can occur without a visible change in behavior until motivated.

### Insight learning
Wolfgang Köhler's chimpanzees suddenly solved problems (such as stacking boxes to reach bananas) after a pause, rather than through gradual **trial and error**. Insight is a sudden "aha" restructuring of the problem.

### Observational learning
Albert Bandura's **Bobo doll** studies showed that children imitate aggressive behavior they have seen modeled. Learning by observation needs:
1. **Attention**
2. **Retention**
3. **Reproduction** (ability to do it)
4. **Motivation** (often depends on seeing the model rewarded or punished: **vicarious reinforcement**)

This explains how children acquire many social behaviors, and why media and role models matter. It differs from trial and error since the learner need not experience the consequences directly.
`,
          q: [
            mc('Rats explored a maze without rewards and later ran it quickly once food was added. What does this show?', 'Latent learning: they had formed a cognitive map', 'Learning occurred without reinforcement.', [
              ['Extinction', 'Nothing was extinguished.'],
              ['Classical conditioning', 'No stimulus pairing was involved.'],
            ]),
            mc('Which is NOT a requirement for observational learning in Bandura\'s model?', 'Direct punishment of the learner', 'The learner can learn by watching.', [
              ['Attention', 'This is required.'],
              ['Retention', 'This is required.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Learning',
    tasks: [
      mc('A dog salivates to a bell after it was repeatedly paired with food. Salivation to the bell is the', 'Conditioned response', 'It is learned.', [
        ['Unconditioned response', 'That is salivation to food.'],
        ['Unconditioned stimulus', 'That is the food.'],
        ['Reinforcer', 'That term belongs to operant conditioning.'],
      ]),
      mc('A person who was bitten by a dog now fears all dogs. This is an example of', 'Stimulus generalization', 'The fear spread to similar stimuli.', [
        ['Extinction', 'The fear did not fade.'],
        ['Shaping', 'Shaping is gradually reinforcing steps.'],
        ['Latent learning', 'Not relevant.'],
      ]),
      mc('A parent gives a child extra screen time for finishing homework. This is', 'Positive reinforcement', 'A pleasant stimulus is added to increase behavior.', [
        ['Negative reinforcement', 'No stimulus is removed.'],
        ['Positive punishment', 'It increases behavior.'],
        ['Negative punishment', 'It increases behavior.'],
      ]),
      mc('A teen loses video-game privileges after breaking curfew. This is', 'Negative punishment', 'A pleasant stimulus is removed to decrease behavior.', [
        ['Positive punishment', 'No aversive stimulus is added.'],
        ['Negative reinforcement', 'It does not increase behavior.'],
        ['Positive reinforcement', 'It does not increase behavior.'],
      ]),
      mc('A salesperson receives a bonus after every fifth sale. Which schedule is this?', 'Fixed ratio', 'Reward comes after a fixed number of responses.', [
        ['Variable ratio', 'The number would vary.'],
        ['Fixed interval', 'Reward depends on time.'],
        ['Variable interval', 'Reward depends on unpredictable time.'],
      ]),
      mc('Children imitate a model who is rewarded for aggression. Which concept explains this?', 'Observational learning with vicarious reinforcement', 'They learn from the model\'s consequences.', [
        ['Insight learning', 'Insight is sudden problem solving.'],
        ['Spontaneous recovery', 'Not relevant.'],
        ['Extinction', 'Not relevant.'],
      ]),
      tf('Negative reinforcement is another name for punishment.', false, 'Negative reinforcement removes an unpleasant stimulus to increase a behavior. Punishment decreases behavior.', 'Correct. Reinforcement increases behavior; punishment decreases it.'),
    ],
  },
};
