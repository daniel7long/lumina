import { mc, tf } from '../builder.js';

export default {
  summary: 'Analyze frames and machines made of several connected parts: draw each part, find a solvable sequence, and work through complete multi-body problems.',
  modules: {
    13: {
      summary: 'FBDs for the parts of a multi-body system.',
      sessions: [
        {
          t: 'Drawing FBDs of multiple subsystems',
          s: 'Interactions between parts of a frame or machine.',
          md: `
## Frames and machines

A **frame** supports loads and is usually stationary; a **machine** transmits or changes forces (pliers, scissors, a crane). Both consist of several connected parts. To find the internal forces at connections, **separate the parts** and draw an FBD of each.

### Rules for the FBDs
1. Draw each part **separately**, with all external loads and supports on that part.
2. Where two parts are joined by a pin, show the pin force **on each part** as components. They are **equal and opposite** (Newton's third law). Use the same letters, with opposite arrows.
3. **Two-force members** carry a single force along their axis. Use it to reduce unknowns.
4. If a load is applied **at a pin**, decide which part carries it, or consider the pin as a separate small body.
5. Check that the **total number of unknowns** can be matched with the equations from all parts.

### Counting
For *n* rigid bodies in 2D there are **3n equations**. Compare with the number of unknown force components (including the support reactions).
`,
          q: [
            mc('Two parts of a frame are joined by a pin. How do the pin forces on the two FBDs compare?', 'Equal in magnitude and opposite in direction', 'Newton\'s third law.', [
              ['Equal and in the same direction', 'They must be opposite.'],
              ['Independent of each other', 'They are a single interaction.'],
            ]),
            mc('Four rigid bodies in a 2D system are in equilibrium. How many independent equations are available?', '12', '3 equations per body.', [
              ['3', 'That is for one body.'],
              ['4', 'This is the number of bodies.'],
            ]),
          ],
        },
      ],
    },
    14: {
      summary: 'Finding a sequence of solutions through connected subsystems.',
      sessions: [
        {
          t: 'Solving multiple subsystems',
          s: 'Sequences of solvable parts and partial solutions.',
          md: `
## Strategy for solving

1. **Whole-system FBD:** often gives the support reactions with few unknowns.
2. **Pick a fully solvable subsystem:** a part with at most three unknowns (or fewer after using known values).
3. **Solve it**, then pass the pin forces to the neighbouring parts as **knowns** (with the sense reversed).
4. **Continue** until every unknown is found.

### When nothing is fully solvable
Look for a **partially solvable** subsystem or the whole system, from which you can find **one or two** quantities with a single equation (for example by taking moments about a point where several unknowns meet). Substituting these into other parts then makes them solvable.

### Example of a machine: pliers
Handle force of 50 N acts 0.15 m from the pivot pin. The jaw grips at 0.03 m from the pin. Taking moments about the pin for one half:

50 × 0.15 = F × 0.03 → **F = 250 N**.

The mechanical advantage is 0.15 / 0.03 = **5**.
`,
          q: [
            mc('Pliers have a handle force of 50 N at 0.15 m from the pivot and grip the object at 0.03 m from the pivot. What gripping force is produced?', '250 N', '50 × 0.15 = F × 0.03.', [
              ['10 N', 'This inverts the lever ratio.'],
              ['50 N', 'This ignores the lever arms.'],
            ]),
            mc('No individual part of a frame is fully solvable. What should you try?', 'A partially solvable subsystem or the whole system to find one or two unknowns first', 'Then the other parts become solvable.', [
              ['Give up, because it is statically indeterminate', 'Many such problems are solvable by sequencing.'],
              ['Assume the missing forces are zero', 'This would give wrong answers.'],
            ]),
          ],
        },
      ],
    },
    15: {
      summary: 'Worked, annotated machine problems.',
      sessions: [
        {
          t: 'Putting it together: the four steps of statics',
          s: 'A complete multi-body procedure.',
          md: `
## The four steps of statics

1. **Choose** a subsystem (see Units 3 and 4).
2. **Draw its FBD**, showing every interaction.
3. **Write the equilibrium equations** (ΣFx, ΣFy, ΣM) with convenient moment centers.
4. **Solve**, then **interpret and check** the results.

### Worked machine problem: a toggle clamp
A handle is pushed down with 40 N, 0.20 m from a pin A. A link BC (a two-force member) connects the handle at point B, 0.05 m from A, to the clamp.
- Moment about A for the handle: 40 × 0.20 = F_link × 0.05 (taking the link force as perpendicular to the handle) → **F_link = 160 N**.
- Link BC is a two-force member, so its force is **axial** (160 N), and the clamp receives that same force.

### Checking your answer
- Do the units make sense?
- Is the **sign** consistent with the physical situation?
- Do the results satisfy an **independent equation** (such as moments about another point)?
- Would the result change in a **logical** way if a parameter changed (for example a longer handle gives larger force)?
`,
          q: [
            mc('Handle force 40 N at 0.20 m from pin A. A link attaches 0.05 m from A (perpendicular). What link force balances the moment?', '160 N', '40 × 0.20 = F × 0.05.', [
              ['10 N', 'This inverts the ratio.'],
              ['40 N', 'This ignores the lever arms.'],
            ]),
            mc('Which is a good way to check a solution?', 'Verify that it satisfies a moment equation taken about a different point', 'This uses an independent equation.', [
              ['Verify that the answer is a whole number', 'There is no reason for that.'],
              ['Check that every force is positive', 'Some forces are naturally negative with an assumed sense.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Frames and machines',
    tasks: [
      mc('A frame made of three rigid parts is in equilibrium in 2D. How many independent equations are available overall?', '9', '3 per body.', [
        ['3', 'That is for one body.'],
        ['6', 'This is for two bodies.'],
        ['12', 'This is for four bodies.'],
      ]),
      mc('Pin forces between two parts are shown as Bx and By on part 1. How should they be drawn on part 2?', 'Equal in magnitude and opposite in direction', 'Newton\'s third law.', [
        ['In the same directions', 'They must be opposite.'],
        ['Omitted, because they are internal', 'They are external to each separate part.'],
        ['As a couple', 'A pin transmits forces, not couples.'],
      ]),
      mc('A pair of scissors cuts with a force at 0.02 m from the pivot when the hand applies 30 N at 0.10 m. What is the cutting force?', '150 N', '30 × 0.10 = F × 0.02.', [
        ['6 N', 'This inverts the ratio.'],
        ['30 N', 'This ignores the lever arms.'],
        ['300 N', 'This uses the wrong ratio.'],
      ]),
      mc('What is the mechanical advantage of a lever with an input arm of 0.4 m and an output arm of 0.1 m?', '4', '0.4 / 0.1.', [
        ['0.25', 'This is the inverse.'],
        ['0.5', 'This is not the result.'],
        ['40', 'This is not the result.'],
      ]),
      mc('A part has 5 unknowns after drawing its FBD. What is the best next step?', 'Look for another part or the whole system that can be solved first', 'Solved values reduce the unknowns.', [
        ['Solve it with 3 equations', 'This cannot determine 5 unknowns.'],
        ['Assume two unknowns are zero', 'This is wrong.'],
        ['Discard the part', 'It is part of the problem.'],
      ]),
      mc('A load is applied directly at a pin connecting two parts. Which statement is true?', 'You must decide which part carries the load, or treat the pin as a separate body', 'Otherwise the force would be counted twice or omitted.', [
        ['The load can be ignored', 'It must be accounted for.'],
        ['The load is applied to both parts in full', 'It would be counted twice.'],
        ['The pin carries no force', 'It does.'],
      ]),
      mc('Which is a legitimate check on a statics solution?', 'Taking moments about a different point and verifying ΣM = 0', 'This is an independent equation.', [
        ['Confirming all forces have the same magnitude', 'No reason for that.'],
        ['Rounding all answers', 'Rounding is not a check.'],
        ['Checking that the answer is positive', 'The sign depends on the assumed sense.'],
      ]),
      tf('For a machine, the force output is always equal to the force input.', false, 'A machine can change the magnitude of the force (mechanical advantage). The moments about the pivot balance, not the forces.', 'Correct. Machines trade force and distance.'),
    ],
  },
};
