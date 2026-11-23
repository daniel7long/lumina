import { mc, tf } from '../builder.js';

export default {
  summary: 'Explain motion along a curve, and how gravity holds planets and satellites in orbit.',
  modules: {
    5: {
      summary: 'Why circular motion needs a net force toward the center.',
      sessions: [{
        t: 'Uniform circular motion',
        s: 'Centripetal acceleration, which force supplies it, and the maximum speed on a flat curve.',
        md: `
## Acceleration without changing speed

In **uniform circular motion** the speed is constant, but the **direction** of the velocity keeps changing. A changing velocity means there is an acceleration. It points **toward the center** of the circle:

**a_c = v²/r**

By Newton's second law there must be a net force toward the center, the **centripetal force**:

**F_c = mv²/r**

### "Centripetal force" is a role, not a new force

Do not add a force called "centripetal force" to a free-body diagram. Instead, ask which of the real forces point toward the center, and set their sum equal to mv²/r:

- A ball on a string: the **tension**.
- A car on a flat curve: **static friction** between the tires and the road.
- A satellite: **gravity**.
- A roller-coaster at the bottom of a loop: the **normal force minus the weight**.

### Maximum speed on a flat curve

Friction must supply mv²/r. The most it can supply is μ_s mg, so

μ_s mg = mv²/r, giving **v_max = √(μ_s g r)**

The mass cancels: a heavy truck and a small car with the same tires have the same limit.

If the string breaks or friction fails, the object does not fly outward. It moves along the straight **tangent** to the circle, in the direction of its velocity at that moment.
`,
        q: [
          mc('A 1000 kg car drives at 10 m/s around a flat circular curve of radius 50 m. What net force toward the center is required?', '2000 N', 'F_c = mv²/r = 1000 × 100/50 = 2000 N.', [
            ['200 N', 'The speed was not squared: 1000 × 10/50.'],
            ['100 000 N', 'This is mv² with the division by r left out.'],
            ['10 000 N', 'This is the mass times the speed (mv), which is a momentum, not a force.'],
          ]),
          tf('An object moving around a circle at constant speed has constant velocity.', false, 'Velocity is constant only if both speed and direction are constant.', 'Correct. The direction keeps changing, so the velocity changes and the object accelerates toward the center.'),
        ],
      }],
    },
    6: {
      summary: 'Newton’s law of universal gravitation and orbits.',
      sessions: [{
        t: 'Universal gravitation and orbits',
        s: 'The inverse-square law, field strength and circular orbits.',
        md: `
## Newton's law of universal gravitation

Every pair of masses attracts with a force

**F = G m₁m₂ / r²**

where r is the distance between the **centers** of the masses and G = 6.67 × 10⁻¹¹ N·m²/kg² is a universal constant. The forces on the two masses are an action–reaction pair, so they are always equal in size.

### The inverse-square law
- Double the distance: the force becomes **1/4**.
- Triple the distance: the force becomes **1/9**.
- Double one mass: the force doubles.

### Gravitational field strength
Near a planet of mass M, the acceleration of a freely falling object is

**g = GM/r²**

where r is the distance from the planet's **center**. Do not confuse **g** (a field strength that depends on where you are, about 10 m/s² on Earth's surface) with **G** (a constant of nature).

### Circular orbits
For a satellite in a circular orbit, gravity supplies the centripetal force: GMm/r² = mv²/r, so

**v = √(GM/r)**

A satellite in a larger orbit moves **more slowly** and has a longer period. Astronauts in orbit seem weightless not because gravity is absent (it is only slightly weaker than on the ground) but because they and the spacecraft are in continuous free fall together.
`,
        q: [
          mc('The distance between two masses is doubled. By what factor does the gravitational force between them change?', '1/4', 'F is proportional to 1/r², and (1/2)² = 1/4.', [
            ['1/2', 'This treats the force as inversely proportional to r rather than r².'],
            ['2', 'Increasing the distance weakens the force.'],
            ['4', 'Increasing the distance weakens the force, not strengthens it.'],
          ]),
          mc('A satellite moves from a circular orbit of radius r to one of radius 4r around the same planet. What happens to its orbital speed?', 'It is halved', 'v = √(GM/r), so if r is multiplied by 4 the speed is multiplied by 1/√4 = 1/2.', [
            ['It is quartered', 'The speed depends on the square root of 1/r, not on 1/r.'],
            ['It doubles', 'Satellites in higher orbits move more slowly, not faster.'],
            ['It stays the same', 'The speed depends on the orbital radius.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Circular motion and gravitation',
    tasks: [
      mc('A 0.5 kg ball moves in a horizontal circle of radius 2 m at 4 m/s on a light string. What is the tension in the string? (Ignore gravity’s effect on the string’s angle.)', '4 N', 'T = mv²/r = 0.5 × 16/2 = 4 N.', [
        ['1 N', 'The speed was not squared: 0.5 × 4/2.'],
        ['8 N', 'This is mv² with the division by r left out.'],
        ['16 N', 'This is v² alone, with the mass and radius left out.'],
      ]),
      mc('A car’s tires have μ_s = 0.5 on a flat road. What is the maximum speed at which it can take a curve of radius 20 m? (Use g = 10 m/s².)', '10 m/s', 'v_max = √(μ_s g r) = √(0.5 × 10 × 20) = √100 = 10 m/s.', [
        ['100 m/s', 'The square root was not taken.'],
        ['5 m/s', 'This is μ_s g, without the radius.'],
        ['20 m/s', 'This is the radius of the curve, not a speed.'],
      ]),
      mc('A car moves at constant speed around a circular track. In what direction is its acceleration?', 'Toward the center of the circle', 'The velocity changes direction toward the inside of the curve, so the acceleration points to the center.', [
        ['Along the direction of motion', 'That would change the car’s speed, which is constant.'],
        ['Away from the center', 'There is no outward force in the car’s inertial frame; the net force is inward.'],
        ['The acceleration is zero', 'The velocity changes direction, so the acceleration is not zero.'],
      ]),
      tf('When drawing a free-body diagram for a ball swinging in a horizontal circle, you should add a separate "centripetal force" arrow in addition to the tension and weight.', false, 'Centripetal force is not an additional force.', 'Correct. The net of the real forces (here a component of the tension) provides the centripetal force; adding another arrow would count it twice.'),
      mc('Earth’s surface gravity is 10 m/s². What is the gravitational field strength at a point 3 Earth radii from Earth’s center?', 'About 1.1 m/s²', 'g is proportional to 1/r², so g = 10/3² = 10/9 ≈ 1.1 m/s².', [
        ['3.3 m/s²', 'This treats g as proportional to 1/r rather than 1/r².'],
        ['5 m/s²', 'This is the value at √2 Earth radii, not at 3 radii.'],
        ['2.5 m/s²', 'This is the value at 2 Earth radii (10/4).'],
      ]),
      mc('A planet has twice Earth’s mass and twice Earth’s radius. What is the free-fall acceleration at its surface? (Earth’s is 10 m/s².)', '5 m/s²', 'g = GM/R² is multiplied by 2/2² = 1/2, so g = 5 m/s².', [
        ['20 m/s²', 'This accounts for the larger mass only.'],
        ['2.5 m/s²', 'This accounts for the larger radius only and ignores the larger mass.'],
        ['10 m/s²', 'The two factors do not cancel; the radius is squared.'],
      ]),
      tf('Astronauts on the International Space Station float because the Earth’s gravity is essentially zero at that height.', false, 'Gravity at that height is still about 90% of its surface value.', 'Correct. They float because the station and the astronauts fall together around Earth; gravity is what keeps them in orbit.'),
    ],
  },
};
