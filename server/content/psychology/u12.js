import { mc, tf } from '../builder.js';

export default {
  summary: 'See how other people shape what we think, feel and do: social cognition, conformity, obedience, helping and group behavior.',
  modules: {
    37: {
      summary: 'How we perceive ourselves and others.',
      sessions: [
        {
          t: 'Social cognition',
          s: 'Attributions, attitudes, expectations and attraction.',
          md: `
## Making sense of people

### Attributions
We explain behavior as caused by **dispositions** (personality) or **situations**. The **fundamental attribution error** is overweighting dispositions when explaining *others'* behavior ("he's late because he is lazy") while seeing situational causes for our own ("traffic was bad").

### Attitudes and behavior
Attitudes predict behavior best when they are strong and specific. **Cognitive dissonance** (Festinger): holding conflicting beliefs or acting against attitudes creates discomfort, and we often reduce it by changing attitudes. People who write counter-attitudinal essays for a small reward come to believe them more.

### Expectations
A **self-fulfilling prophecy** occurs when an expectation leads us to act in ways that make it come true. In Rosenthal and Jacobson's study, students whom teachers believed to be "late bloomers" showed larger gains.

### Stereotypes and prejudice
Stereotypes are generalizations about groups; **prejudice** is negative attitude; **discrimination** is behavior. They can operate **implicitly**. Contact under equal status and shared goals reduces prejudice.

### Attraction
Proximity, similarity, familiarity (**mere exposure**) and mutual liking all increase attraction.
`,
          q: [
            mc('You think a stranger who cut in line is rude, but when you cut in line you were just in a hurry. This is an example of', 'The fundamental attribution error', 'We favor dispositional explanations for others.', [
              ['Cognitive dissonance', 'It concerns conflicting beliefs.'],
              ['A self-fulfilling prophecy', 'It concerns expectations.'],
            ]),
            mc('A teacher expects a student to do well, treats her accordingly, and the student improves. This is', 'A self-fulfilling prophecy', 'The expectation created its own confirmation.', [
              ['Groupthink', 'It concerns group decisions.'],
              ['Social loafing', 'It concerns reduced group effort.'],
            ]),
          ],
        },
      ],
    },
    38: {
      summary: 'Conformity, obedience, helping and aggression.',
      sessions: [
        {
          t: 'Conformity, obedience and helping',
          s: 'Asch, Milgram, the bystander effect and altruism.',
          md: `
## Social influence

### Conformity (Asch)
Participants judged line lengths with obvious answers. When confederates gave wrong answers, about **one-third** of the responses conformed. Two reasons: **normative** influence (wanting to fit in) and **informational** influence (assuming others know). A single dissenter greatly reduces conformity.

### Obedience (Milgram)
Participants were told to give "shocks" (none were real) to a learner for errors. In the baseline study **65%** (26 of 40) went all the way to the maximum 450 volts. Obedience was higher with an authority nearby and lower when the victim was close or others refused. The studies raise serious ethical concerns (stress to participants) and show the power of situations.

### Helping and the bystander effect
People are **less** likely to help when others are present, because of **diffusion of responsibility** and the assumption that others will act. Helping increases when an emergency is clear, we are not hurried, and someone is directly asked.

### Altruism
Explanations include **kin selection**, **reciprocal altruism**, empathy and social norms.

### Aggression
Influenced by biology, frustration, provocation and **social learning** (Bandura).
`,
          q: [
            mc('In Milgram\'s baseline experiment, about what percentage of participants delivered the maximum "shock"?', 'About 65%', 'Most participants obeyed.', [
              ['About 5%', 'Experts predicted that very few would obey, but the result was far higher.'],
              ['About 100%', 'Not all participants did.'],
            ]),
            mc('Why does the presence of other people often reduce the likelihood that anyone helps in an emergency?', 'Diffusion of responsibility', 'Each person feels less responsible.', [
              ['People enjoy watching', 'This is not the explanation.'],
              ['Emergencies are easier to recognize in groups', 'They are no easier.'],
            ]),
          ],
        },
      ],
    },
    39: {
      summary: 'Behavior in groups.',
      sessions: [
        {
          t: 'Working with others: groups',
          s: 'Social facilitation, social loafing and groupthink.',
          md: `
## Groups

### Social facilitation
The presence of others **improves** performance on **simple or well-practiced** tasks but **impairs** performance on **complex or new** tasks because of heightened arousal (Zajonc).

### Social loafing
People exert **less effort** in a group when their contributions are not individually identifiable. It can be reduced by making individual contributions visible, assigning meaningful roles and keeping groups small.

### Groupthink
Janis described **groupthink**, in which a cohesive group's desire for agreement overrides realistic appraisal of alternatives. Conditions: strong cohesion, isolation, a directive leader and pressure to conform. Symptoms: illusion of invulnerability, self-censorship, "mindguards". Examples include the Bay of Pigs decision. Remedies: encourage dissent, appoint a devil's advocate, invite outside experts, and have leaders delay stating their views.

### Other group effects
- **Group polarization:** discussion makes the group's average opinion more extreme.
- **Deindividuation:** anonymity in a group reduces self-awareness and restraint.
`,
          q: [
            mc('A runner performs better when a crowd is watching. What does social facilitation predict about the task?', 'It is simple or well practiced', 'The presence of others boosts performance on easy tasks.', [
              ['It is new and complex', 'Performance is usually impaired.'],
              ['It has no effect on any task', 'Social facilitation is an effect.'],
            ]),
            mc('Which strategy best reduces groupthink?', 'Appointing a devil\'s advocate and welcoming dissent', 'This encourages critical evaluation.', [
              ['Having the leader state their preference first', 'This increases conformity.'],
              ['Isolating the group from outsiders', 'Isolation encourages groupthink.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 12 assessment · Psychology in our social lives',
    tasks: [
      mc('Reducing the discomfort of holding conflicting beliefs by changing one of them is explained by', 'Cognitive dissonance theory', 'Festinger.', [
        ['Social facilitation', 'It concerns performance with an audience.'],
        ['The bystander effect', 'It concerns helping.'],
        ['Social loafing', 'It concerns effort in groups.'],
      ]),
      mc('Asch\'s conformity studies showed that', 'Many people go along with an incorrect majority even on an obvious task', 'About one-third of the responses conformed.', [
        ['Nobody is influenced by groups', 'Many are.'],
        ['People always obey authority', 'That is Milgram.'],
        ['Groups never make errors', 'Not the conclusion.'],
      ]),
      mc('One person in an Asch-type group gives the correct answer. What effect does this typically have?', 'Conformity drops substantially', 'A dissenter provides support.', [
        ['Conformity increases', 'It decreases.'],
        ['Nothing changes', 'It has a large effect.'],
        ['Everyone gives the wrong answer', 'It reduces errors.'],
      ]),
      mc('Which of these would most increase the chance that a bystander helps?', 'Being directly asked for help in a clear emergency', 'It reduces diffusion of responsibility.', [
        ['Being in a large crowd', 'Crowds reduce helping.'],
        ['Being in a hurry', 'Hurry reduces helping.'],
        ['An ambiguous situation', 'Ambiguity reduces helping.'],
      ]),
      mc('Students pulling less hard on a rope when pulling as a group than alone illustrates', 'Social loafing', 'Effort declines when contributions are not identifiable.', [
        ['Social facilitation', 'It would increase performance.'],
        ['Groupthink', 'It concerns decisions.'],
        ['Polarization', 'It concerns attitudes.'],
      ]),
      mc('Milgram\'s obedience studies are also noted for', 'Ethical concerns about the stress they caused participants', 'They contributed to stricter research ethics.', [
        ['Showing that obedience never occurs', 'Obedience was high.'],
        ['Using real electric shocks', 'No real shocks were given.'],
        ['Being conducted on animals', 'Participants were people.'],
      ]),
      tf('We tend to explain our own behavior mostly by personality, and others\' behavior by the situation.', false, 'It is generally the reverse: the fundamental attribution error leads us to explain others\' behavior by disposition and our own by situation.', 'Correct. This is the fundamental attribution error.'),
    ],
  },
};
