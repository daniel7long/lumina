import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain how electric charges interact, and analyze simple direct-current circuits with Ohm’s law and equivalent resistance.',
  modules: {
    15: {
      summary: 'Charge, conservation of charge and Coulomb’s law.',
      sessions: [{
        t: 'Electric charge and Coulomb’s law',
        s: 'Charging, conservation of charge, and the force between point charges.',
        md: `
## Electric charge

Matter contains positive protons and negative electrons. An object is neutral when it has equal numbers of each, and **charged** when it has gained or lost electrons. Charge is measured in **coulombs** (C); the charge on one electron is −1.6 × 10⁻¹⁹ C.

**Conservation of charge:** charge is never created or destroyed, only transferred. When a rod is rubbed with cloth, electrons move from one to the other, leaving equal and opposite charges.

### Ways to charge an object
- **Friction:** electrons are transferred between two materials that are rubbed.
- **Contact (conduction):** a charged object touches a conductor and shares its charge; they end with the **same sign**.
- **Induction:** a charged object brought near (but not touching) a conductor redistributes its charges. Grounding the conductor then lets charge flow on or off, leaving it with the **opposite sign** to the nearby object.

**Conductors** let charge move freely; **insulators** do not.

## Coulomb's law

The force between two point charges q₁ and q₂ separated by r is

**F = k |q₁q₂| / r²**, with k = 9 × 10⁹ N·m²/C²

Like charges **repel**; opposite charges **attract**. The force is an inverse-square law, just like gravity, but it can be attractive or repulsive and is far stronger for charged particles. The two forces form an action–reaction pair and are equal in size.
`,
        q: [
          mc('Two charges repel each other with a force of 8 N when they are 2 m apart. What is the force when they are 4 m apart?', '2 N', 'F is proportional to 1/r². Doubling r divides the force by 4: 8/4 = 2 N.', [
            ['4 N', 'This treats the force as inversely proportional to r rather than r².'],
            ['16 N', 'Moving the charges apart reduces the force.'],
            ['1 N', 'The factor was applied twice.'],
          ]),
          tf('Rubbing two neutral objects together can create new electric charge.', false, 'Charge is conserved.', 'Correct. Rubbing only transfers electrons from one object to the other; the total charge remains zero.'),
        ],
      }],
    },
    16: {
      summary: 'Current, resistance, Ohm’s law and circuit analysis.',
      sessions: [{
        t: 'DC circuits',
        s: 'Ohm’s law, power, series and parallel resistors, and Kirchhoff’s rules.',
        md: `
## Current, voltage and resistance

- **Current** I: the rate of charge flow, I = Δq/Δt (amperes, A).
- **Potential difference** V: the energy per unit charge supplied by a battery or lost in a component (volts, V).
- **Resistance** R: how strongly a component opposes current (ohms, Ω).

**Ohm's law:** V = IR for a resistor.

**Power:** P = IV = I²R = V²/R (watts). Electrical energy is often given in kilowatt-hours: 1 kWh = 1 kW used for 1 h.

## Series and parallel

| | Series | Parallel |
|---|---|---|
| Current | the **same** through each | splits between branches |
| Voltage | splits (adds to the source voltage) | the **same** across each |
| Equivalent resistance | R = R₁ + R₂ + … | 1/R = 1/R₁ + 1/R₂ + … |

Adding resistors in **series** increases the total resistance; adding branches in **parallel** decreases it.

## Kirchhoff's rules

- **Junction rule:** the current entering a junction equals the current leaving it (conservation of charge).
- **Loop rule:** around any closed loop, the sum of potential changes is zero (conservation of energy). The battery's rise equals the sum of the drops across the resistors.

To solve a circuit: reduce series and parallel groups to find the total resistance, find the total current from V = IR, then work back to find the current and voltage for each part.
`,
        q: [
          mc('A 12 V battery is connected across a 4 Ω resistor and a 2 Ω resistor in series. What current flows?', '2 A', 'R = 4 + 2 = 6 Ω, so I = V/R = 12/6 = 2 A.', [
            ['3 A', 'Only the 4 Ω resistor was used.'],
            ['6 A', 'Only the 2 Ω resistor was used.'],
            ['1.5 A', 'The resistances were multiplied (4 × 2 = 8 Ω) instead of added.'],
          ]),
          mc('What is the equivalent resistance of a 6 Ω resistor in parallel with a 3 Ω resistor?', '2 Ω', '1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω.', [
            ['9 Ω', 'The resistors were added, which is the rule for series.'],
            ['4.5 Ω', 'This is the average, not the parallel combination.'],
            ['3 Ω', 'The equivalent resistance of a parallel pair is smaller than either resistor.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Electric charge and circuits',
    tasks: [
      mc('A 12 V battery is connected across a 6 Ω resistor and a 3 Ω resistor in parallel. What is the total current from the battery?', '6 A', 'The branch currents are 12/6 = 2 A and 12/3 = 4 A, which add to 6 A.', [
        ['2 A', 'This is the current in the 6 Ω branch only.'],
        ['4 A', 'This is the current in the 3 Ω branch only.'],
        ['1.3 A', 'The resistors were added as if in series (12/9).'],
      ]),
      mc('A light bulb is rated 60 W when connected to 120 V. What is its resistance when operating?', '240 Ω', 'R = V²/P = 14 400/60 = 240 Ω.', [
        ['7200 Ω', 'The voltage and power were multiplied instead of using V²/P.'],
        ['2 Ω', 'This is V/P, which has no direct meaning here.'],
        ['0.5 Ω', 'This is the current in amperes (60/120), not the resistance.'],
      ]),
      mc('At a junction, 3 A and 2 A flow in, and 4 A flows out through one wire. What current flows out through the other wire?', '1 A', 'By the junction rule, the total out equals the total in: 5 A − 4 A = 1 A.', [
        ['9 A', 'The three currents were added.'],
        ['5 A', 'This is the total entering, not the current in the remaining wire.'],
        ['4 A', 'Charge must be conserved, so the outgoing currents must add to 5 A.'],
      ]),
      mc('A 16 V battery is connected to a 6 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω resistors. What is the voltage across the parallel pair?', '4 V', 'The parallel pair is equivalent to 2 Ω, so the total R is 8 Ω and I = 2 A. The voltage across the pair is 2 × 2 = 4 V.', [
        ['12 V', 'This is the drop across the 6 Ω series resistor (2 A × 6 Ω).'],
        ['8 V', 'This assumes the voltage is shared equally between the two parts.'],
        ['16 V', 'This is the battery voltage, but part of it is dropped across the series resistor.'],
      ]),
      tf('Adding another identical bulb in parallel with a bulb in a circuit lowers the total resistance of the circuit.', true, 'Each new branch gives the current another path, so the equivalent resistance decreases.', 'Parallel branches provide additional paths, so the total resistance decreases and the battery supplies more current.'),
      mc('A 1500 W heater runs for 2 hours. How much energy does it use?', '3 kWh', 'Energy = power × time = 1.5 kW × 2 h = 3 kWh.', [
        ['3000 kWh', 'The power was left in watts; 1500 W × 2 h is 3000 Wh, which is 3 kWh.'],
        ['0.75 kWh', 'The power was divided by the time instead of multiplied.'],
        ['1.5 kWh', 'This is the power in kilowatts; the time was not used.'],
      ]),
      tf('The electric force between two charged objects is always attractive.', false, 'Electric forces can be attractive or repulsive.', 'Correct. Opposite charges attract and like charges repel.'),
    ],
  },
};
