import { mc, tf } from '../builder.js';

export default {
  summary: 'Quantify acidity, treat weak acids with equilibrium, and explain how buffers and titration curves behave.',
  modules: {
    15: {
      summary: 'pH, strong and weak acids and bases.',
      sessions: [{
        t: 'pH and weak acids and bases',
        s: 'The pH scale, Kw, strong versus weak, and the Ka calculation.',
        md: `
## pH and pOH

- **pH = −log[H₃O⁺]** and **pOH = −log[OH⁻]**
- In water at 25 °C, **Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴**, so **pH + pOH = 14.00**.
- pH < 7 is acidic, pH = 7 is neutral and pH > 7 is basic. A change of one pH unit is a tenfold change in [H₃O⁺].

## Strong and weak

- **Strong acids** (HCl, HBr, HI, HNO₃, H₂SO₄ for the first proton, HClO₄) ionize **completely**, so [H₃O⁺] equals the acid concentration. 0.010 M HCl has pH **2.00**.
- **Strong bases** (hydroxides of Group 1 and the heavier Group 2) dissociate completely. 0.010 M Ba(OH)₂ gives [OH⁻] = 0.020 M, so pOH = 1.70 and pH = **12.30**.
- **Weak acids** ionize only partly, an equilibrium described by **Ka**: HA + H₂O ⇌ H₃O⁺ + A⁻, Ka = [H₃O⁺][A⁻]/[HA].

Strength (how much it ionizes) is not the same as concentration (how much is dissolved).

## Weak-acid calculation

For 0.10 M acetic acid, Ka = 1.8 × 10⁻⁵. Let x = [H₃O⁺] = [A⁻]. Since x is small, [HA] ≈ 0.10, so

Ka = x²/0.10, giving x = √(1.8 × 10⁻⁶) = 1.3 × 10⁻³ M and **pH = 2.87**.

A smaller Ka means a weaker acid; **pKa = −log Ka**. The stronger the acid, the weaker its conjugate base.
`,
        q: [
          mc('What is the pH of 0.010 M HCl?', '2.00', 'HCl is a strong acid, so [H₃O⁺] = 0.010 M and pH = −log(0.010) = 2.00.', [
            ['12.00', 'This is the pOH-based value for a base of the same concentration.'],
            ['0.010', 'This is the concentration, not the pH.'],
            ['7.00', 'The solution is acidic, not neutral.'],
          ]),
          mc('What is the pH of 0.10 M acetic acid (Ka = 1.8 × 10⁻⁵)?', '2.87', '[H₃O⁺] = √(Ka × 0.10) = 1.3 × 10⁻³ M, so pH = 2.87.', [
            ['1.00', 'This treats the weak acid as if it ionized completely.'],
            ['4.74', 'This is the pKa of acetic acid, not the pH of the solution.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Buffers and titration curves.',
      sessions: [{
        t: 'Buffers and titration curves',
        s: 'How buffers work, the Henderson–Hasselbalch equation and the shape of a titration curve.',
        md: `
## Buffers

A **buffer** resists changes in pH when small amounts of acid or base are added. It contains a **weak acid and its conjugate base** (or a weak base and its conjugate acid) in comparable amounts, such as CH₃COOH/CH₃COO⁻.

- Added **acid** (H₃O⁺) is consumed by the conjugate base: A⁻ + H₃O⁺ → HA.
- Added **base** (OH⁻) is consumed by the weak acid: HA + OH⁻ → A⁻ + H₂O.

A strong acid with its own salt (HCl + NaCl) is **not** a buffer.

### Henderson–Hasselbalch equation

**pH = pKa + log([A⁻]/[HA])**

When [A⁻] = [HA], pH = pKa. A buffer works best within about ±1 pH unit of the pKa. Example: acetate buffer (pKa 4.74) with [A⁻] = 0.20 M and [HA] = 0.10 M has pH = 4.74 + log 2 = **5.04**.

## Titration curves

Titrating a weak acid with a strong base (0.100 M of each):

1. Start: the pH is that of a weak acid solution.
2. **Buffer region:** as base is added, HA and A⁻ coexist.
3. **Half-equivalence point:** half the HA has been converted, so [A⁻] = [HA] and **pH = pKa**.
4. **Equivalence point:** all HA has become A⁻. The solution contains a weak base, so **pH > 7**.
5. After equivalence the pH is set by the excess strong base.

For a strong acid and strong base, the equivalence point is at pH 7. An **indicator** should change color near the pH of the equivalence point.
`,
        q: [
          mc('An acetate buffer (pKa = 4.74) has [CH₃COO⁻] = 0.20 M and [CH₃COOH] = 0.10 M. What is its pH?', '5.04', 'pH = 4.74 + log(0.20/0.10) = 4.74 + 0.30 = 5.04.', [
            ['4.44', 'The ratio was inverted (acid over base).'],
            ['4.74', 'The pH equals the pKa only when the acid and base concentrations are equal.'],
          ]),
          mc('In the titration of a weak acid with a strong base, what is the pH at the half-equivalence point?', 'pH = pKa of the acid', 'At that point [HA] = [A⁻], so the log term in the Henderson–Hasselbalch equation is zero.', [
            ['pH = 7', 'This is the equivalence-point pH for a strong acid and a strong base, not at the half-equivalence point of a weak acid.'],
            ['pH = 14 − pKa', 'The pKa itself, not its complement, equals the pH here.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Acids and bases',
    tasks: [
      mc('What is the pH of 0.010 M Ba(OH)₂?', '12.30', 'Each formula unit gives two OH⁻, so [OH⁻] = 0.020 M, pOH = 1.70 and pH = 14.00 − 1.70 = 12.30.', [
        ['12.00', 'The two hydroxide ions per formula unit were not counted.'],
        ['1.70', 'This is the pOH; it must be subtracted from 14.00.'],
        ['2.00', 'This is the pOH of a solution with [OH⁻] = 0.010 M, not converted to pH.'],
      ]),
      mc('A solution has [OH⁻] = 1.0 × 10⁻⁵ M at 25 °C. What is its pH?', '9.00', 'pOH = 5.00, so pH = 14.00 − 5.00 = 9.00.', [
        ['5.00', 'This is the pOH, not the pH.'],
        ['19.00', 'pH and pOH were added instead of subtracted from 14.'],
        ['1.0 × 10⁻⁹', 'This is [H₃O⁺], not the pH.'],
      ]),
      mc('Which 0.10 M solution has the lowest pH?', 'HCl', 'HCl ionizes completely, giving [H₃O⁺] = 0.10 M and pH = 1.00.', [
        ['CH₃COOH', 'This weak acid ionizes only slightly, so its pH is about 2.9.'],
        ['NaCl', 'NaCl is a neutral salt, so its pH is about 7.'],
        ['NaOH', 'This is a strong base with a very high pH.'],
      ]),
      mc('Which mixture is a buffer?', 'CH₃COOH and CH₃COONa', 'It contains a weak acid and its conjugate base, which can neutralize added base and acid respectively.', [
        ['HCl and NaCl', 'HCl is a strong acid and Cl⁻ is not a base, so nothing neutralizes added acid.'],
        ['HNO₃ and NaNO₃', 'HNO₃ is a strong acid, and its conjugate base NO₃⁻ is too weak to act as a buffer.'],
        ['NaOH and NaCl', 'Neither is a weak acid or a weak base.'],
      ]),
      mc('A weak acid with pKa 4.76 is titrated with NaOH. What is the pH after exactly half of the acid has been neutralized?', '4.76', 'At half-equivalence [HA] = [A⁻], so pH = pKa.', [
        ['7.00', 'The pH is 7 only at the equivalence point of a strong acid–strong base titration.'],
        ['2.38', 'The pKa was halved, but the ratio of concentrations (not the pKa) is what is halved.'],
        ['9.52', 'The pKa was doubled, which has no meaning here.'],
      ]),
      mc('1.0 L of a buffer contains 0.10 mol CH₃COOH and 0.10 mol CH₃COO⁻ (pKa 4.74). After 0.010 mol of HCl is added, what is the approximate pH?', '4.65', 'The HCl converts 0.010 mol of acetate into acetic acid: [A⁻] = 0.090 M, [HA] = 0.110 M, so pH = 4.74 + log(0.090/0.110) = 4.65.', [
        ['4.74', 'The buffer ratio changes slightly when acid is added, so the pH changes a little.'],
        ['2.00', 'This is the pH of 0.010 M HCl alone; the buffer absorbs most of the added acid.'],
        ['4.83', 'The acetate and acetic acid amounts were swapped, as if base had been added.'],
      ]),
      tf('When the concentration of H₃O⁺ increases by a factor of ten, the pH decreases by one unit.', true, 'pH = −log[H₃O⁺], and multiplying [H₃O⁺] by 10 subtracts 1 from the pH.', 'The pH scale is logarithmic, so a tenfold increase in [H₃O⁺] lowers the pH by exactly one unit.'),
    ],
  },
};
