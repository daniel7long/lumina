import { mc, tf } from '../builder.js';

export default {
  summary: 'Store values in typed variables and compute with them, paying attention to how Java handles integers, decimals and conversions.',
  modules: {
    1: {
      summary: 'Variables, data types and arithmetic.',
      sessions: [{
        t: 'Variables, types and arithmetic',
        s: 'int, double and boolean; integer division; the remainder operator and operator precedence.',
        md: `
## Variables and types

A **variable** is a named place that holds a value of a declared **type**. The three primitive types you will use most:

| Type | Holds | Example |
|---|---|---|
| \`int\` | whole numbers | \`int count = 12;\` |
| \`double\` | decimal numbers | \`double price = 4.99;\` |
| \`boolean\` | \`true\` or \`false\` | \`boolean done = false;\` |

A variable declared with \`final\` is a **constant** and cannot be reassigned: \`final int MAX = 10;\`. Using the wrong type is a compile-time error: \`int x = 3.5;\` does not compile because a \`double\` would lose its decimal part.

## Arithmetic operators

\`+  -  *  /  %\`

- **Integer division:** when both operands are \`int\`, \`/\` gives an \`int\` and the decimal part is **discarded** (not rounded): \`17 / 5\` is \`3\`.
- If either operand is a \`double\`, the result is a \`double\`: \`17 / 5.0\` is \`3.4\`.
- The **remainder** operator \`%\` gives what is left over: \`17 % 5\` is \`2\`. It is used to test divisibility (\`n % 2 == 0\` is true for even \`n\`).
- A common trap: \`double d = 7 / 2;\` stores \`3.0\`, because the division happens on two ints **before** the assignment.

## Precedence

\`*\`, \`/\` and \`%\` are done before \`+\` and \`-\`, and operators of equal precedence are evaluated from left to right. Parentheses override this.

\`\`\`
int result = 2 + 3 * 4 % 5;   // 3 * 4 = 12, 12 % 5 = 2, 2 + 2 = 4
\`\`\`
`,
        q: [
          mc('What value is stored in x after int x = 17 / 5; ?', '3', 'Both operands are ints, so the division is an integer division and the decimal part is discarded.', [
            ['3.4', 'This would be the result with a double operand; an int variable cannot hold a decimal.'],
            ['4', 'Java truncates integer division; it does not round.'],
            ['2', 'This is 17 % 5, the remainder.'],
          ]),
          mc('What is printed by System.out.println(7 / 2 * 2.0); ?', '6.0', '7 / 2 is an integer division giving 3, and 3 * 2.0 is the double 6.0.', [
            ['7.0', 'This would be the result of 7 / 2.0 * 2.0; the first division here is done on two ints.'],
            ['6', 'The result is a double because one operand is a double, so it prints with a decimal point.'],
            ['3.5', 'The division 7 / 2 is an integer division, so the 0.5 is lost.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Casting, compound assignment and overflow.',
      sessions: [{
        t: 'Casting, compound assignment and overflow',
        s: 'Shortcut operators, converting between int and double, and what happens at the limits of int.',
        md: `
## Compound assignment and increment

| Shortcut | Meaning |
|---|---|
| \`x += 3\` | \`x = x + 3\` |
| \`x -= 3\` | \`x = x - 3\` |
| \`x *= 2\` | \`x = x * 2\` |
| \`x /= 2\`, \`x %= 2\` | likewise |
| \`x++\`, \`x--\` | add or subtract 1 |

Trace: \`int a = 5; a += 3; a *= 2;\` leaves \`a\` at **16** (5 + 3 = 8, then 8 × 2 = 16).

## Casting

A **cast** tells Java to convert a value to another type. Casting a \`double\` to an \`int\` **truncates** (drops the decimal part toward zero): \`(int) 3.9\` is \`3\` and \`(int) -3.9\` is \`-3\`.

Java converts automatically from \`int\` to \`double\` (no information is lost), but not the other way.

Casting applies only to the value right after it, so the position matters:

\`\`\`
(double) 7 / 2     // 7.0 / 2 = 3.5
(double) (7 / 2)   // (double) 3 = 3.0
\`\`\`

To round a positive \`double\` x to the nearest int, use \`(int) (x + 0.5)\`.

## Overflow

An \`int\` holds values from \`Integer.MIN_VALUE\` (−2 147 483 648) to \`Integer.MAX_VALUE\` (2 147 483 647). Going beyond the range does not give an error; the value **wraps around**: \`Integer.MAX_VALUE + 1\` is \`-2147483648\`.
`,
        q: [
          mc('What is the value of a after: int a = 5; a += 3; a *= 2; ?', '16', 'a becomes 8 after the first statement and 16 after the second.', [
            ['11', 'This is the result of 5 + 3 * 2, applying the precedence rule; compound assignments are performed in order.'],
            ['10', 'The second statement multiplies the new value (8), not the original (5).'],
            ['13', 'This adds 8 to the original value instead of multiplying the result.'],
          ]),
          mc('What is the value of (double) 7 / 2 ?', '3.5', 'The cast applies to 7 first, so the division is 7.0 / 2.', [
            ['3.0', 'This would be the value of (double) (7 / 2), where the integer division is done first.'],
            ['3', 'The result is a double and keeps its decimal part.'],
            ['4.0', 'Division does not round.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Primitive types and expressions',
    tasks: [
      mc('What is the value of int result = 2 + 3 * 4 % 5; ?', '4', '3 * 4 = 12, then 12 % 5 = 2 (left to right for * and %), and 2 + 2 = 4.', [
        ['2', '12 % 5 is 2, but the 2 added at the start was forgotten.'],
        ['14', 'The % was applied to 4 and 5 first (4 % 5 = 4), but * and % are evaluated from left to right.'],
        ['0', 'This adds first ((2 + 3) * 4 % 5), ignoring that *, / and % come before +.'],
      ]),
      mc('What is printed by System.out.println((double) (7 + 8) / 2); ?', '7.5', 'The parentheses give 15, which is cast to 15.0 and divided by 2 to give 7.5.', [
        ['7', 'The cast makes the division a double division, so the decimal part is kept.'],
        ['7.0', 'This would be the result of (double) (15 / 2), with the integer division done first.'],
        ['8.0', 'Java does not round in a division.'],
      ]),
      mc('What is the value of int x = (int) (7 * 0.5); ?', '3', '7 * 0.5 is 3.5, and casting to int truncates to 3.', [
        ['4', 'A cast truncates; it does not round.'],
        ['3.5', 'An int variable cannot hold a decimal part.'],
        ['3.0', 'An int variable stores 3, not 3.0.'],
      ]),
      mc('What does System.out.println(Integer.MAX_VALUE + 1); print?', '-2147483648', 'The value wraps around to the smallest int because of overflow.', [
        ['2147483648', 'This number is outside the range of int, so it cannot be stored.'],
        ['An error message at run time', 'Java does not report integer overflow; the value silently wraps.'],
        ['0', 'The result is the minimum int value, not zero.'],
      ]),
      tf('The statement int x = 3.5; compiles and stores 3 in x.', false, 'It does not compile.', 'Correct. A double cannot be assigned to an int without a cast, because the decimal part would be lost. You must write int x = (int) 3.5;.'),
      mc('Which expression is true when the int n is even?', 'n % 2 == 0', 'An even number leaves a remainder of 0 when divided by 2.', [
        ['n / 2 == 0', 'This is true only for n = 0 or 1 because of integer division.'],
        ['n % 2 == 1', 'This is true for odd positive numbers.'],
        ['n * 2 == 0', 'This is true only for n = 0.'],
      ]),
      mc('What is stored in d after double d = 5 / 2; ?', '2.0', 'The integer division 5 / 2 gives 2 before it is converted to a double.', [
        ['2.5', 'The division is done with ints first, so the 0.5 is lost.'],
        ['2', 'A double variable always stores a decimal value, so it holds 2.0.'],
        ['3.0', 'Integer division truncates and does not round.'],
      ]),
    ],
  },
};
