import { mc, tf } from '../builder.js';

export default {
  summary: 'Measure how area and mass are distributed about an axis: second moments of area for beams and shafts, and mass moments of inertia for rotating bodies.',
  modules: {
    19: {
      summary: 'Second moment of area, parallel axis theorem and polar moment.',
      sessions: [
        {
          t: 'Second moment of area',
          s: 'Why distribution matters, standard shapes and the parallel axis theorem.',
          md: `
## Second moment of area

The **second moment of area** (area moment of inertia) measures how far an area is spread from an axis:

**Iₓ = ∫ y² dA**, units: **mm⁴** or **m⁴**.

It matters whenever the **distribution** of area, not just the amount, controls behaviour. A deep beam is much stiffer in bending than a flat one with the same area because material is far from the **neutral axis** (I grows with the square of distance).

### Standard shapes (about the centroidal axis)
| Shape | Iₓ |
| --- | --- |
| **Rectangle** (b wide, h tall) | bh³ / 12 |
| **Solid circle** (diameter d) | πd⁴ / 64 |
| **Triangle** (b, h) | bh³ / 36 |

**Example:** b = 60 mm, h = 100 mm → I = 60 × 100³ / 12 = **5.0 × 10⁶ mm⁴**.

### Parallel axis theorem
For an axis parallel to the centroidal axis at distance d:

**I = I_c + A d²**

For the rectangle about its base (d = 50 mm, A = 6000 mm²): I = 5.0 × 10⁶ + 6000 × 50² = **2.0 × 10⁷ mm⁴** (which equals bh³/3).

### Composite shapes
Add (or subtract for holes) the second moments of the parts, each transferred to the common axis by the parallel axis theorem.

### Polar moment of area
**J = ∫ r² dA = Iₓ + I_y** about an axis perpendicular to the area. It governs **twisting** (torsion) of shafts. For a solid circle: **J = πd⁴/32**. With d = 40 mm, J ≈ 2.51 × 10⁵ mm⁴ and Iₓ ≈ 1.26 × 10⁵ mm⁴.
`,
          q: [
            mc('A rectangle is 60 mm wide and 100 mm tall. What is its second moment of area about the horizontal centroidal axis?', '5.0 × 10⁶ mm⁴', 'bh³/12 = 60 × 10⁶ / 12.', [
              ['2.0 × 10⁷ mm⁴', 'This is bh³/3, the value about the base.'],
              ['1.8 × 10⁷ mm⁴', 'This is not the result of the formula.'],
            ]),
            mc('Which property is the polar moment of a solid circle with diameter d?', 'πd⁴/32', 'Twice the value of πd⁴/64.', [
              ['πd⁴/64', 'This is the second moment about a diameter.'],
              ['πd²/4', 'This is the area.'],
            ]),
          ],
        },
      ],
    },
    20: {
      summary: 'Mass moment of inertia and radius of gyration.',
      sessions: [
        {
          t: 'Mass moment of inertia',
          s: 'Resistance to rotational acceleration.',
          md: `
## Mass moment of inertia

The **mass moment of inertia** measures resistance to **angular acceleration**: it plays the role in rotation that mass plays in translation (M = Iα).

**I = ∫ r² dm**, units: kg·m².

Mass **farther from the axis** counts more (r²). Two bodies with the same mass can have very different I.

### Standard results
| Body (axis) | I |
| --- | --- |
| **Solid cylinder / disk** about its axis | ½ m r² |
| **Thin rod** (length L) about its center, perpendicular | (1/12) m L² |
| **Thin rod** about one end | (1/3) m L² |
| **Thin ring** about its axis | m r² |

**Example:** a solid cylinder, m = 10 kg and r = 0.2 m: I = ½ × 10 × 0.2² = **0.2 kg·m²**.

### Radius of gyration
**k = √(I/m)**: the distance at which all the mass could be concentrated to give the same I. For the cylinder, k = √(0.2/10) = **0.141 m**; then I = m k².

### Parallel axis theorem
**I = I_c + m d²**

A 3 kg, 2 m rod: about the center I_c = (1/12)(3)(2²) = **1 kg·m²**. About an end (d = 1 m): I = 1 + 3 × 1² = **4 kg·m²** (which equals (1/3)mL²).

### Composite bodies
Add the moments of inertia of the parts about the same axis, using the parallel axis theorem where needed.
`,
          q: [
            mc('A solid cylinder has mass 10 kg and radius 0.2 m. What is its mass moment of inertia about its axis?', '0.2 kg·m²', '½ m r² = 0.5 × 10 × 0.04.', [
              ['0.4 kg·m²', 'This is m r²; the ½ is missing.'],
              ['2 kg·m²', 'The radius was not squared.'],
            ]),
            mc('A 3 kg, 2 m long thin rod has I = 1 kg·m² about its center. What is I about one end?', '4 kg·m²', 'I = 1 + 3 × 1².', [
              ['1 kg·m²', 'The parallel axis term is missing.'],
              ['3 kg·m²', 'Only md² was added to a wrong base value.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Moments of inertia',
    tasks: [
      mc('Two beams have the same cross-sectional area. One is 50 mm wide × 200 mm deep, the other 200 mm wide × 50 mm deep. Which is stiffer in bending about the horizontal axis?', 'The deeper one (50 × 200)', 'I = bh³/12 is much greater when h is large.', [
        ['The wider one (200 × 50)', 'Its I is smaller.'],
        ['They are equally stiff', 'The distribution of area differs.'],
        ['It cannot be determined', 'The calculation is straightforward.'],
      ]),
      mc('What is I for a rectangle b = 50 mm, h = 200 mm about its horizontal centroidal axis?', '3.33 × 10⁷ mm⁴', '50 × 200³ / 12.', [
        ['2.08 × 10⁶ mm⁴', 'This swaps b and h.'],
        ['1.0 × 10⁷ mm⁴', 'This is not the result.'],
        ['1.0 × 10⁴ mm⁴', 'This is the area.'],
      ]),
      mc('A rectangle has I_c = 5.0 × 10⁶ mm⁴, an area of 6,000 mm² and an axis parallel to the centroidal axis at 50 mm. What is I about that axis?', '2.0 × 10⁷ mm⁴', 'I = 5.0 × 10⁶ + 6000 × 2500.', [
        ['5.0 × 10⁶ mm⁴', 'The transfer term is missing.'],
        ['1.5 × 10⁷ mm⁴', 'This is only the transfer term.'],
        ['3.0 × 10⁵ mm⁴', 'This is not the result.'],
      ]),
      mc('Which quantity governs the twisting of a circular shaft?', 'Polar moment of area J', 'It measures the resistance to torsion.', [
        ['Area A', 'Area alone does not give torsional stiffness.'],
        ['Mass m', 'Torsion depends on cross-section.'],
        ['Radius of gyration only', 'J is the relevant property.'],
      ]),
      mc('What is the polar moment of a solid circular shaft with diameter 40 mm?', '2.51 × 10⁵ mm⁴', 'π × 40⁴ / 32.', [
        ['1.26 × 10⁵ mm⁴', 'This is the second moment about a diameter.'],
        ['5.03 × 10⁵ mm⁴', 'This doubles the correct value.'],
        ['1.26 × 10³ mm⁴', 'This is not the result.'],
      ]),
      mc('A disk of mass 4 kg and radius 0.5 m rotates about its axis. What is I?', '0.5 kg·m²', '½ × 4 × 0.25.', [
        ['1 kg·m²', 'The ½ is missing.'],
        ['2 kg·m²', 'The radius was not squared.'],
        ['0.25 kg·m²', 'This is not the result.'],
      ]),
      mc('A body has I = 0.2 kg·m² and mass 10 kg. What is the radius of gyration?', '0.141 m', 'k = √(I/m) = √0.02.', [
        ['0.02 m', 'This is I/m, not its square root.'],
        ['2 m', 'This is not the result.'],
        ['0.2 m', 'This is I.'],
      ]),
      mc('A thin rod of mass 3 kg and length 2 m rotates about one end. What is I?', '4 kg·m²', '(1/3) × 3 × 4.', [
        ['1 kg·m²', 'This is about the center.'],
        ['12 kg·m²', 'This is m L².'],
        ['6 kg·m²', 'This is not the result.'],
      ]),
      tf('Two bodies with the same mass must have the same mass moment of inertia about the same axis.', false, 'I depends on how the mass is distributed. Mass farther from the axis contributes more.', 'Correct. Distribution matters, not only the mass.'),
    ],
  },
};
