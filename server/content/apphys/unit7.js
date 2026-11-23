import { mc, tf } from '../builder.js';

export default {
  summary: 'Study motion that repeats, and how waves carry energy without carrying matter.',
  modules: {
    13: {
      summary: 'Simple harmonic motion in springs and pendulums.',
      sessions: [{
        t: 'Simple harmonic motion',
        s: 'The restoring force, the period of a spring and a pendulum, and energy in oscillation.',
        md: `
## Oscillation and the restoring force

An object undergoes **simple harmonic motion (SHM)** when the net force is a **restoring force** proportional to its displacement from equilibrium and pointing back toward it. For a spring, **F = −kx**.

Key terms: **amplitude** A (maximum displacement), **period** T (time for one cycle) and **frequency** f = 1/T (cycles per second, hertz).

## Mass on a spring

**T = 2π√(m/k)**

- A **stiffer** spring (larger k) oscillates faster.
- A **heavier** mass oscillates more slowly.
- The period does **not** depend on the amplitude.

## Simple pendulum

For small angles, the restoring force comes from gravity and

**T = 2π√(L/g)**

The period depends on the length and on g but **not on the mass** of the bob or the amplitude. To double the period, quadruple the length.

## Where is everything largest?

| Position | Speed | Acceleration | Energy |
|---|---|---|---|
| Equilibrium (x = 0) | **maximum** | zero | all kinetic |
| Maximum displacement (x = ±A) | zero | **maximum** | all potential |

Total energy ½kA² stays constant (without friction) and is shared between kinetic and potential energy.
`,
        q: [
          mc('A 1 kg mass hangs on a spring with k = 100 N/m and oscillates. What is its period? (Use π ≈ 3.14.)', '0.63 s', 'T = 2π√(m/k) = 2π√(1/100) = 2π/10 ≈ 0.63 s.', [
            ['0.10 s', 'The factor 2π was left out.'],
            ['62.8 s', 'The ratio m/k was inverted.'],
            ['1.6 s', 'This is the frequency in hertz (1/0.63), not the period.'],
          ]),
          mc('By what factor must the length of a simple pendulum be increased to double its period?', '4', 'T is proportional to √L, so doubling T requires multiplying L by 4.', [
            ['2', 'The period depends on the square root of the length, not on the length itself.'],
            ['8', 'This would give a period 2√2 times larger.'],
            ['√2', 'This would only increase the period by a factor of 2^(1/4).'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Wave speed, superposition and standing waves.',
      sessions: [{
        t: 'Mechanical waves and sound',
        s: 'Wavelength, frequency and speed; superposition; standing waves in strings and pipes.',
        md: `
## Waves

A **mechanical wave** transfers energy through a medium without transferring matter. In a **transverse** wave the medium moves perpendicular to the wave's direction (a rope); in a **longitudinal** wave it moves parallel (sound).

For any wave:

**v = fλ**

The **speed** is set by the **medium** (for a string, its tension and mass per length; for sound, the air's temperature and composition). Changing the source's frequency changes the wavelength but **not** the speed. At room temperature, sound in air travels at about 340 m/s.

## Superposition

When waves overlap, the displacements **add**. Crests meeting crests give **constructive interference** (a bigger wave); a crest meeting a trough gives **destructive interference** (they cancel). The waves then continue unchanged.

## Standing waves

A wave reflecting back and forth in a bounded medium forms a **standing wave** with **nodes** (no motion) and **antinodes** (maximum motion). Only certain frequencies fit; each is a **resonance**.

- **String fixed at both ends, or pipe open at both ends:** λ_n = 2L/n, so f_n = nv/2L (n = 1, 2, 3, …). The fundamental has λ = 2L.
- **Pipe closed at one end:** only odd harmonics; the fundamental has λ = 4L, so f₁ = v/4L.
`,
        q: [
          mc('A sound wave of frequency 440 Hz travels through air at 340 m/s. What is its wavelength?', '0.77 m', 'λ = v/f = 340/440 ≈ 0.77 m.', [
            ['150 000 m', 'The speed and frequency were multiplied instead of divided.'],
            ['1.3 m', 'The frequency was divided by the speed (440/340).'],
          ]),
          mc('A 0.6 m string fixed at both ends supports waves that travel at 60 m/s. What is its fundamental frequency?', '50 Hz', 'The fundamental has λ = 2L = 1.2 m, so f = v/λ = 60/1.2 = 50 Hz.', [
            ['100 Hz', 'This uses λ = L = 0.6 m; the fundamental wavelength is twice the length.'],
            ['36 Hz', 'The speed was multiplied by the length instead of divided by the wavelength.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Oscillations and waves',
    tasks: [
      mc('The mass on a spring is quadrupled while the spring and amplitude stay the same. What happens to the period?', 'It doubles', 'T = 2π√(m/k) is proportional to √m, and √4 = 2.', [
        ['It quadruples', 'The period depends on the square root of the mass.'],
        ['It is halved', 'A heavier mass makes the oscillation slower, not faster.'],
        ['It stays the same', 'The period of a spring depends on the mass, not on the amplitude.'],
      ]),
      mc('A 1 kg block on a spring (k = 100 N/m) oscillates with amplitude 0.2 m. What is its maximum speed?', '2 m/s', 'The energy ½kA² = 2 J becomes ½mv², so v = A√(k/m) = 0.2 × 10 = 2 m/s.', [
        ['20 m/s', 'The square root of k/m was not taken (0.2 × 100).'],
        ['4 m/s', 'This is v²; the square root was not taken.'],
        ['0.2 m/s', 'This is the amplitude in metres, not a speed.'],
      ]),
      mc('For a block oscillating on a spring, where is the magnitude of its acceleration greatest?', 'At the maximum displacement from equilibrium', 'The restoring force F = −kx is greatest when |x| is greatest, so the acceleration is too.', [
        ['At the equilibrium position', 'Here the spring force is zero, so the acceleration is zero (the speed is maximum).'],
        ['Halfway between equilibrium and the end', 'The force grows in proportion to the displacement, so it is smaller here than at the end.'],
      ]),
      mc('What is the period of a simple pendulum of length 2.5 m? (Use g = 10 m/s² and π ≈ 3.14.)', '3.1 s', 'T = 2π√(L/g) = 2π√0.25 = 2π × 0.5 ≈ 3.1 s.', [
        ['0.5 s', 'The factor 2π was left out.'],
        ['1.6 s', 'π was used in place of 2π.'],
        ['31 s', 'L and g were multiplied instead of divided.'],
      ]),
      tf('Increasing the frequency of waves sent along a rope increases the speed of the waves on that rope.', false, 'The wave speed is set by the rope, not the source.', 'Correct. The speed depends on the tension and mass per length of the rope; raising f shortens the wavelength instead.'),
      mc('An organ pipe open at both ends is 0.85 m long, and sound travels at 340 m/s in the air. What is its fundamental frequency?', '200 Hz', 'λ = 2L = 1.7 m, so f = v/λ = 340/1.7 = 200 Hz.', [
        ['400 Hz', 'This uses λ = L; the fundamental of an open pipe has a wavelength of 2L.'],
        ['100 Hz', 'This is the fundamental of a pipe closed at one end (v/4L).'],
      ]),
      mc('Two identical waves meet so that the crest of one lines up with the trough of the other. What happens at that point?', 'Destructive interference: the displacements cancel', 'Displacements add by superposition; equal and opposite displacements sum to zero.', [
        ['Constructive interference: the amplitude doubles', 'This happens when crest meets crest.'],
        ['The waves reflect off each other', 'Waves pass through each other and continue unchanged after overlapping.'],
      ]),
    ],
  },
};
