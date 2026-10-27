import { mc, tf } from '../builder.js';

export default {
  summary: 'Discover how the senses turn physical energy into experience, and how the brain interprets, and sometimes misinterprets, that information.',
  modules: {
    9: {
      summary: 'Sensation versus perception, thresholds and signal detection.',
      sessions: [
        {
          t: 'Sensation, perception and thresholds',
          s: 'Absolute threshold, signal detection and just noticeable differences.',
          md: `
## Sensation and perception

- **Sensation:** detecting physical energy and converting it to neural signals (**transduction**).
- **Perception:** organizing and interpreting those signals to recognize objects and events.

### Thresholds
- **Absolute threshold:** the minimum stimulus detected 50% of the time.
- **Just noticeable difference (JND):** the smallest change that can be detected.
- **Weber's law:** the JND is a **constant proportion** of the original stimulus. If the JND for a 100 g weight is 2 g (2%), the JND for 200 g is **4 g**.

### Signal detection theory
Detection depends on sensitivity **and** on the person's willingness to say "yes". Outcomes when a signal is present or absent:
| | Says "yes" | Says "no" |
| --- | --- | --- |
| **Signal present** | Hit | Miss |
| **Signal absent** | False alarm | Correct rejection |

### Adaptation
**Sensory adaptation** is reduced responsiveness to constant stimulation (you stop noticing a smell or clothing).
`,
          q: [
            mc('The JND for a 100 g weight is 2 g. By Weber\'s law, the JND for a 200 g weight is', '4 g', 'The JND is 2% of the stimulus.', [
              ['2 g', 'The JND grows with the stimulus.'],
              ['8 g', 'This would be 4%.'],
            ]),
            mc('A listener reports hearing a tone when none was played. In signal detection theory, this is a', 'False alarm', 'The signal was absent but the listener said yes.', [
              ['Hit', 'A hit needs a real signal.'],
              ['Miss', 'A miss is failing to report a real signal.'],
            ]),
          ],
        },
      ],
    },
    10: {
      summary: 'How we see color, depth and motion.',
      sessions: [
        {
          t: 'The visual system',
          s: 'Light, the eye, color theories, depth and motion.',
          md: `
## Seeing

### Light and the eye
Visible light spans about **400–700 nm**: shorter wavelengths look violet and blue, longer ones red. Brightness depends on amplitude.

Light passes through the **cornea**, **pupil** and **lens** and is focused on the **retina**, where photoreceptors convert it to neural signals:
- **Rods:** dim light, peripheral vision, no color.
- **Cones:** color and fine detail, concentrated in the **fovea**.

Signals leave via the **optic nerve** (the **blind spot** has no receptors) to the **thalamus** and the **visual cortex** in the occipital lobe.

### Color
- **Trichromatic theory:** three cone types (S, M, L) respond to blue, green and red.
- **Opponent-process theory:** later neurons pair red–green, blue–yellow, black–white (this explains afterimages).

### Depth
- **Binocular cues:** retinal disparity, convergence.
- **Monocular cues:** relative size, interposition (overlap), linear perspective, texture gradient, motion parallax.

### Motion
We use changes in position over time; **apparent motion** (the phi phenomenon) lets still frames look like movement.
`,
          q: [
            mc('Which photoreceptors are responsible for color vision and fine detail?', 'Cones', 'They are concentrated in the fovea.', [
              ['Rods', 'Rods work in dim light.'],
              ['Ganglion cells', 'They carry the signal to the optic nerve.'],
            ]),
            mc('Retinal disparity is a cue for', 'Depth perception using both eyes', 'The two eyes receive slightly different images.', [
              ['Color vision', 'Color uses cones.'],
              ['Pitch perception', 'It is a visual cue.'],
            ]),
          ],
        },
      ],
    },
    11: {
      summary: 'Hearing, smell, taste, touch and pain.',
      sessions: [
        {
          t: 'Audition and the other senses',
          s: 'Sound, the ear, chemical senses, touch and pain.',
          md: `
## Hearing and the other senses

### Sound
Sound waves vary in **frequency** (Hz), which we hear as **pitch**, and **amplitude**, which we hear as **loudness** (dB).

### The ear
**Outer ear** (pinna, canal) → **eardrum** → **middle ear ossicles** (hammer, anvil, stirrup) → **cochlea** in the inner ear, where hair cells on the basilar membrane convert vibration to neural signals → auditory nerve → **temporal lobe**. Loud noise can damage hair cells permanently.

### Chemical senses
- **Taste:** sweet, sour, salty, bitter, umami.
- **Smell:** olfactory receptors project to the olfactory bulb and **directly to the limbic system**, which is why smells evoke emotion and memory.

### Touch and body senses
Skin receptors detect pressure, temperature and pain. The **vestibular** sense gives balance and **proprioception** gives body position.

### Pain
**Gate-control theory:** signals travel to the spinal cord, where a "gate" can be opened or closed by other input (such as rubbing a bumped elbow) and by brain signals (attention, emotion). Pain is shaped by psychology as well as injury.
`,
          q: [
            mc('Which feature of a sound wave determines its pitch?', 'Frequency', 'Higher frequency sounds higher.', [
              ['Amplitude', 'Amplitude determines loudness.'],
              ['Duration', 'Not the main determinant of pitch.'],
            ]),
            mc('According to gate-control theory, why does rubbing a bumped elbow reduce pain?', 'Touch input can close the spinal "gate" to pain signals', 'Competing input reduces pain transmission.', [
              ['It destroys the pain receptors', 'Receptors are not destroyed.'],
              ['It increases the number of pain signals', 'It reduces transmission.'],
            ]),
          ],
        },
      ],
    },
    12: {
      summary: 'How knowledge shapes perception, and what illusions reveal.',
      sessions: [
        {
          t: 'Perception and illusions',
          s: 'Bottom-up and top-down processing, constancy and illusions.',
          md: `
## Perception is interpretation

- **Bottom-up processing:** builds perception from the incoming sensory data.
- **Top-down processing:** uses knowledge, expectations and context to interpret the data.

### Organizing the world
**Gestalt principles** (proximity, similarity, closure, continuity, figure–ground) describe how we group elements. **Perceptual constancy** keeps size, shape and color stable even as the retinal image changes. **Perceptual set** is a readiness to perceive in a certain way.

### Illusions
Illusions are useful because they reveal the rules the brain applies.
- **Müller-Lyer:** lines of equal length look different because of the arrowheads.
- **Ebbinghaus:** a circle surrounded by smaller circles looks larger than one surrounded by larger circles.
- **Moon illusion:** the moon looks larger near the horizon, probably due to distance cues.
- **Hering:** parallel lines look bowed against a pattern of radiating lines.

**Change blindness** and **inattentional blindness** show how much we miss when attention is elsewhere. Culture and experience also shape perception.
`,
          q: [
            mc('Using your expectations to interpret an ambiguous word is an example of', 'Top-down processing', 'Knowledge shapes interpretation.', [
              ['Bottom-up processing', 'Bottom-up begins with sensory data.'],
              ['Sensory adaptation', 'This is reduced response to constant stimuli.'],
            ]),
            mc('Why are illusions useful to psychologists?', 'They reveal how the brain interprets sensory information', 'Errors expose the rules the perceptual system uses.', [
              ['They prove that perception is always accurate', 'They show that it is not.'],
              ['They show that the senses do not work', 'The senses work; interpretation misleads.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Sensing and perceiving',
    tasks: [
      mc('Converting light energy into neural signals in the retina is an example of', 'Sensation (transduction)', 'Sensation detects energy and converts it to neural signals.', [
        ['Perception', 'Perception interprets the signals.'],
        ['Adaptation', 'Adaptation is reduced response to constant stimulation.'],
        ['Illusion', 'An illusion is a misperception.'],
      ]),
      mc('A listener hears a tone on 50% of the trials. The tone\'s intensity is the listener\'s', 'Absolute threshold', 'It is the minimum detected half of the time.', [
        ['JND', 'JND is the smallest detectable change.'],
        ['False alarm', 'False alarms occur when no signal is present.'],
        ['Adaptation level', 'Not the definition.'],
      ]),
      mc('The JND for a 50 g weight is 1 g. By Weber\'s law, the JND for a 300 g weight is', '6 g', '2% of 300 g.', [
        ['1 g', 'The JND grows with the stimulus.'],
        ['3 g', 'This would be 1%.'],
        ['300 g', 'It is a proportion.'],
      ]),
      mc('In dim light, we depend mainly on', 'Rods', 'Rods are sensitive in low light but do not detect color.', [
        ['Cones', 'Cones need bright light.'],
        ['The fovea', 'The fovea is packed with cones.'],
        ['The blind spot', 'It has no receptors.'],
      ]),
      mc('After staring at a red image, you see a green afterimage. Which theory explains this?', 'Opponent-process theory', 'Paired channels fatigue and rebound.', [
        ['Trichromatic theory', 'It explains the three cone types.'],
        ['Gate-control theory', 'It concerns pain.'],
        ['Signal detection theory', 'It concerns detection decisions.'],
      ]),
      mc('Smells often trigger strong memories because olfactory information', 'Projects directly to the limbic system', 'The amygdala and hippocampus are close to the olfactory pathway.', [
        ['Bypasses the brain', 'It reaches the brain.'],
        ['Goes through the thalamus to the occipital lobe', 'This is a visual pathway.'],
        ['Is stored in the ear', 'Not related.'],
      ]),
      tf('Perception is simply a perfect copy of the physical world.', false, 'Perception is constructed by the brain using expectations and context, which is why illusions occur.', 'Correct. Perception is an interpretation, not a copy.'),
    ],
  },
};
