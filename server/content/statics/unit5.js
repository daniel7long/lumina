import { mc, tf } from '../builder.js';

export default {
  summary: 'Find the forces in the members of a truss using the method of joints and the method of sections.',
  modules: {
    16: {
      summary: 'Solve a truss joint by joint.',
      sessions: [
        {
          t: 'The method of joints',
          s: 'Two-force members, tension and compression, and solving in sequence.',
          md: `
## Trusses

A **truss** is a structure of straight bars (members) joined at pins (joints), loaded only at joints. Each member is a **two-force member**, carrying only an axial force:
- **Tension (T):** the member is being pulled; the force on a joint points **away** from the joint.
- **Compression (C):** the member is being pushed; the force on a joint points **toward** the joint.

For a simple truss: **m + r = 2j**, where m is the number of members, r the support reactions (3 for pin + roller) and j the joints. A simple truss is **statically determinate**.

### Method of joints
Each joint is a **concurrent force system**, so there are **two equations** (ΣFx = 0, ΣFy = 0). Start where at most **two unknown members** meet.

**Example.** A(0,0), C(4,0) and B(2,2) form a triangle. A pin at A and a roller at C support it, and a 1000 N load is at B. By symmetry Ay = Cy = 500 N.

Joint A: members AB (at 45°) and AC (horizontal).
- ΣFy: F_AB sin 45° + 500 = 0 → **F_AB = −707 N** (compression)
- ΣFx: F_AC + F_AB cos 45° = 0 → **F_AC = +500 N** (tension)

Assume all members in tension; a negative result means compression.

### Tips
- Find the **support reactions first** using the whole truss.
- **Zero-force members**: at a joint with three members where two are collinear and no load, the third carries no force.
- Choose a **sequence** of joints that always has ≤ 2 unknowns.
`,
          q: [
            mc('A member is pulling on a joint. What kind of force does it carry?', 'Tension', 'Tension pulls on the joints at the member ends.', [
              ['Compression', 'Compression pushes.'],
              ['Shear', 'Truss members carry axial force.'],
            ]),
            mc('A 1000 N load acts at the apex of a symmetric triangular truss with 45° sides. What is the force in each sloping member?', '707 N in compression', '500 / sin 45° = 707 N, pushing on the joint.', [
              ['500 N in tension', 'This is the force in the horizontal member.'],
              ['1000 N in compression', 'The vertical load is shared between two members.'],
            ]),
          ],
        },
      ],
    },
    17: {
      summary: 'Find selected member forces by cutting the truss.',
      sessions: [
        {
          t: 'The method of sections',
          s: 'Cut through up to three members and use a moment equation.',
          md: `
## Method of sections

To find a force in a **specific** member without solving every joint, **cut** the truss with an imaginary line through the member (and through **no more than three members** with unknown forces), and draw an FBD of one side. Apply the three equilibrium equations.

### Strategy
- Choose the cut so it passes through the member you want.
- Take **moments about a point** where two of the cut members meet; the third unknown then comes from a single equation.
- Assume tension in each cut member (force pointing away from the cut surface).

### Example
A truss has joints A(0,0), B(1.5,2), C(3,0), D(4.5,2), E(6,0), with members AB, AC, BC, BD, CD, CE, DE. It is supported by a pin at A and a roller at E, with a 12 kN load at C. So Ay = Ey = 6 kN.

**Find F_BD.** Cut through BD, BC and AC and consider the left part. Take moments about C, where BC and AC meet:
- Ay acts 3 m to the left of C, and BD is 2 m above C.
- 6 × 3 + F_BD × 2 = 0 → **F_BD = −9 kN** (compression).

(Solving by joints gives the same answer: F_AB = −7.5, F_AC = +4.5, F_BC = +7.5, F_BD = −9, F_CD = +7.5, F_CE = +4.5, F_DE = −7.5 kN.)

### Choosing between methods
- **Joints:** gives every member, but requires solving in sequence.
- **Sections:** efficient when you need only a few members, especially in the middle of a large truss.
`,
          q: [
            mc('What is the main advantage of the method of sections?', 'You can find a force in a particular member directly, without solving all joints', 'A single cut and moment equation can give it.', [
              ['It always gives all member forces at once', 'That is a feature of the method of joints.'],
              ['It does not need equilibrium equations', 'It uses them.'],
            ]),
            mc('How many members with unknown forces should a section normally cut so that the three equilibrium equations suffice?', 'No more than three', 'Three equations can solve at most three unknowns.', [
              ['Exactly five', 'Too many unknowns.'],
              ['Any number', 'The unknowns must not exceed the equations.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Trusses',
    tasks: [
      mc('A simple truss has 5 joints and is supported by a pin and a roller. How many members does it have?', '7', 'm + r = 2j: m + 3 = 10.', [
        ['10', 'This is 2j.'],
        ['5', 'This is j.'],
        ['8', 'This is not consistent with m + 3 = 10.'],
      ]),
      mc('A member in compression on a joint exerts a force that points', 'Toward the joint', 'It pushes on the joint.', [
        ['Away from the joint', 'That is tension.'],
        ['Perpendicular to the member', 'Forces are axial.'],
        ['In any direction', 'The direction is along the member.'],
      ]),
      mc('A 1000 N load is at the apex of a symmetric triangular truss with a 4 m base and 2 m height. Each sloping member makes 45°. What is the force in the horizontal bottom member?', '500 N tension', 'From joint A: F_AC = −F_AB cos 45° = 500 N.', [
        ['707 N compression', 'This is the force in the sloping member.'],
        ['1000 N tension', 'This is the load.'],
        ['0 N', 'The member carries force.'],
      ]),
      mc('When solving a joint, you obtain a negative value for a member force assumed in tension. What does it mean?', 'The member is in compression', 'The sign shows the opposite sense.', [
        ['The member is in tension with a smaller force', 'The sign shows the sense.'],
        ['The member is a zero-force member', 'Zero-force members give 0, not negative values.'],
        ['The result is wrong', 'It is a valid result.'],
      ]),
      mc('At a joint, three members meet, two of which are collinear, and there is no load or support. What is the force in the third member?', 'Zero', 'Perpendicular components can only be balanced by the third member if it is zero.', [
        ['Equal to the collinear forces', 'It would be unbalanced.'],
        ['Equal to the load', 'There is no load.'],
        ['Cannot be determined', 'It can be.'],
      ]),
      mc('In the example truss with a 12 kN load at C, what is F_AC?', '4.5 kN tension', 'Joint A: F_AC = 0.6 × 7.5 = 4.5 kN.', [
        ['7.5 kN compression', 'This is F_AB.'],
        ['4.5 kN compression', 'The sign is tension.'],
        ['9 kN tension', 'This is F_BD in magnitude.'],
      ]),
      mc('Which method is most efficient to find the force in one member in the middle of a large truss?', 'Method of sections', 'A cut through the member gives it directly.', [
        ['Method of joints, starting from a support', 'It would require solving many joints.'],
        ['Guessing and checking', 'Not a method.'],
        ['Assuming zero force', 'Not a method.'],
      ]),
      mc('When using the method of sections, why do we take moments about the point where two cut members meet?', 'It eliminates two unknowns and leaves one equation for the third', 'Forces through the point have zero moment.', [
        ['It makes the load zero', 'The load is not eliminated.'],
        ['It is required by Newton\'s third law', 'It is a convenience.'],
        ['It removes the need for reactions', 'Reactions may still appear.'],
      ]),
      tf('Truss members carry bending moments in the standard truss model.', false, 'In the truss model the members are two-force members joined by pins, so they carry only axial tension or compression.', 'Correct. The truss model assumes axial-only members.'),
    ],
  },
};
