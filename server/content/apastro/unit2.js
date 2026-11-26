import { mc, tf } from '../builder.js';

export default {
  summary: 'Almost everything we know about the universe comes from light. Learn what light is, how it reveals temperature, composition and motion, and how telescopes collect it.',
  modules: {
    3: {
      summary: 'Light, spectra and temperature.',
      sessions: [{
        t: 'Reading light',
        s: 'The electromagnetic spectrum, Wien’s law and the Stefan–Boltzmann law.',
        md: `
## Light as a wave
Light is an **electromagnetic wave**. Wavelength (λ) and frequency (f) are linked by **c = λf**, where c is about 3 × 10⁸ m/s. Shorter wavelengths have higher frequency and energy. From long to short wavelength the **electromagnetic spectrum** runs: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma ray. Visible light spans roughly 400 nm (violet) to 700 nm (red).

## Blackbody radiation
A hot dense object emits a continuous spectrum depending on its **temperature**.
- **Wien's law:** the wavelength of peak emission is λ_max = (2.9 × 10⁶ nm·K) / T. Hotter objects peak at **shorter** wavelengths and look bluer.
  - T = 5,800 K (the Sun's surface): λ_max = 2.9 × 10⁶ / 5,800 = **500 nm**, in the visible range.
  - T = 2,900 K: λ_max = **1,000 nm**, in the infrared.
  - T = 29,000 K: λ_max = **100 nm**, in the ultraviolet.
- **Stefan–Boltzmann law:** the energy emitted per second per area is proportional to **T⁴**, so total luminosity L ∝ R² T⁴. Doubling temperature raises luminosity by **2⁴ = 16** times. Doubling the radius raises luminosity by **2² = 4** times.

## Spectra and composition
Kirchhoff's rules explain three kinds of spectra:
1. A hot dense object emits a **continuous** spectrum.
2. A hot, low-density gas emits an **emission-line** spectrum.
3. A cool gas in front of a continuous source produces an **absorption-line** spectrum.

Each element has a unique set of spectral lines, like a **fingerprint**, so astronomers identify the composition of stars from their spectra.

## The atmosphere
Earth's atmosphere blocks most **UV, X-ray and gamma-ray** light and much infrared, so telescopes for those wavelengths must be in space.
`,
        q: [
          mc('A star has a surface temperature of 5,800 K. At roughly what wavelength does it emit the most light?', 'About 500 nm', 'λ_max = 2.9 × 10⁶ nm·K ÷ 5,800 K = 500 nm.', [
            ['About 50 nm', 'This is ten times too short, in the ultraviolet.'],
            ['About 5,000 nm', 'This is ten times too long, in the infrared.'],
            ['About 5 nm', 'This is a hundred times too short.'],
          ]),
          mc('Star A has the same radius as Star B but twice the surface temperature. How many times more luminous is Star A?', '16 times', 'L ∝ T⁴, and 2⁴ = 16.', [
            ['2 times', 'Luminosity depends on T⁴, not T.'],
            ['4 times', 'This is T² (or the effect of doubling the radius).'],
            ['8 times', 'This is T³, which is not the Stefan–Boltzmann dependence.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'Telescopes and the Doppler shift.',
      sessions: [{
        t: 'Telescopes and motion',
        s: 'How telescopes work and what shifts in wavelength reveal.',
        md: `
## Telescopes
- **Refracting telescopes** use a lens to bring light to a focus. **Reflecting telescopes** use a curved mirror. Almost all large modern telescopes are reflectors because mirrors can be supported from behind and made very large without the flaws that large lenses have.
- **Light-gathering power** depends on the **area** of the aperture, so it scales with the **square of the diameter**. A 10 m telescope collects (10/1)² = **100 times** as much light as a 1 m telescope.
- **Angular resolution** (the ability to see fine detail) improves with larger diameter and shorter wavelength (θ ∝ λ/D).
- **Adaptive optics** correct for atmospheric blurring.
- **Interferometry** combines telescopes to act like one very large dish. The **Event Horizon Telescope** linked radio dishes around the world to image the black hole in galaxy M87 (2019).
- **Space telescopes:** the **Hubble Space Telescope** (visible and UV) and the **James Webb Space Telescope** (infrared, launched in December 2021) avoid atmospheric absorption.

## The Doppler shift
When a source moves toward us, its light is **blueshifted** (shorter wavelengths); moving away, it is **redshifted**. For speeds much less than light,

**Δλ / λ₀ = v / c**

### Worked example
The hydrogen line has a rest wavelength of 656 nm. A star moving away at 300 km/s: Δλ = 656 × (300 / 300,000) = **0.656 nm**, so the line appears at about 656.7 nm.

## Gravitational waves
In 2015, the **LIGO** detectors made the first direct detection of **gravitational waves** from merging black holes, opening a new way to observe the universe.
`,
        q: [
          mc('How many times more light does a 4 m telescope collect than a 2 m telescope?', '4 times', 'Light collection scales with area, so (4/2)² = 4.', [
            ['2 times', 'Collecting area scales with diameter squared, not diameter.'],
            ['8 times', 'This is the cube of the ratio.'],
            ['16 times', 'This squares the ratio twice.'],
          ]),
          mc('A star’s hydrogen line appears at a shorter wavelength than in the lab. What does this show?', 'The star is moving toward us', 'Motion toward the observer blueshifts the light.', [
            ['The star is moving away from us', 'Motion away causes a redshift.'],
            ['The star is cooler than the Sun', 'A shift of this kind is caused by motion, not temperature.'],
            ['The star is not moving', 'A shift indicates motion along the line of sight.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Light and Telescopes',
    tasks: [
      mc('Which type of light has the shortest wavelength?', 'Gamma rays', 'They have the highest frequency and energy.', [
        ['Radio waves', 'Radio waves have the longest wavelengths.'],
        ['Visible light', 'Visible light has wavelengths of about 400–700 nm.'],
        ['Infrared', 'Infrared has longer wavelengths than visible light.'],
      ]),
      mc('A star’s surface temperature is 29,000 K. In which part of the spectrum does it emit the most light?', 'Ultraviolet', 'λ_max = 2.9 × 10⁶ ÷ 29,000 = 100 nm.', [
        ['Infrared', 'This would require a much cooler star.'],
        ['Radio', 'Stars of this temperature do not peak in radio wavelengths.'],
        ['Visible green light', 'The Sun peaks near 500 nm, at 5,800 K; a hotter star peaks at shorter wavelengths.'],
      ]),
      mc('A star keeps the same temperature but its radius triples. Its luminosity becomes', '9 times greater', 'L ∝ R², and 3² = 9.', [
        ['3 times greater', 'Luminosity depends on R², not R.'],
        ['27 times greater', 'This is R³, which is not the dependence.'],
        ['81 times greater', 'This is R⁴, which is not the dependence.'],
      ]),
      mc('Which kind of spectrum is produced by a cool gas in front of a hot continuous source?', 'An absorption-line spectrum', 'The gas absorbs light at its characteristic wavelengths.', [
        ['An emission-line spectrum', 'This comes from a hot, low-density gas.'],
        ['A continuous spectrum', 'This comes from a hot, dense object.'],
        ['No spectrum', 'The light still forms a spectrum.'],
      ]),
      mc('Most large modern telescopes are reflectors because', 'large mirrors can be supported from behind and avoid some problems of large lenses', 'Lenses sag and must be perfect throughout.', [
        ['mirrors do not collect light', 'Mirrors collect and focus light.'],
        ['lenses cannot focus light', 'Lenses do focus light but are hard to make large.'],
        ['reflectors work only at night', 'Both types work whenever observations are possible.'],
      ]),
      mc('The hydrogen line at 656 nm is observed shifted by 0.656 nm toward longer wavelengths. What is the source’s speed?', 'About 300 km/s away from us', 'v = c × Δλ/λ₀ = 300,000 × 0.001 = 300 km/s, and a longer wavelength means motion away.', [
        ['About 300 km/s toward us', 'A shift to longer wavelengths means motion away.'],
        ['About 3,000 km/s away from us', 'This is ten times too large.'],
        ['About 30 km/s away from us', 'This is ten times too small.'],
      ]),
      tf('Telescopes for ultraviolet and X-ray light are usually placed in space.', true, 'Correct. Earth’s atmosphere blocks most of this light.', 'The atmosphere does block most UV and X-rays, so the statement is true.'),
    ],
  },
};
