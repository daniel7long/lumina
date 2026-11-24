import { mc, tf } from '../builder.js';

export default {
  summary: 'Make programs decide: build true-or-false conditions and use them to choose which code runs.',
  modules: {
    5: {
      summary: 'Relational and logical operators, short-circuiting and De Morgan’s laws.',
      sessions: [{
        t: 'Boolean expressions',
        s: 'Comparing values, combining conditions with &&, || and !, short-circuit evaluation and De Morgan’s laws.',
        md: `
## Relational operators

\`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` compare two values and give a \`boolean\`. Note the difference between \`=\` (assignment) and \`==\` (comparison). Compare objects such as Strings with \`equals\`, not \`==\`.

## Logical operators

- \`!\` means **not**: \`!(x > 10)\` is true when x is 7.
- \`&&\` means **and**, both must be true: \`x > 5 && x < 10\` is true when x is 7.
- \`||\` means **or**, at least one must be true: \`x < 5 || x > 20\` is false when x is 7.

Precedence: \`!\` first, then \`&&\`, then \`||\`.

## Short-circuit evaluation

Java stops evaluating as soon as the answer is known:
- \`a && b\`: if \`a\` is false, \`b\` is **not evaluated**.
- \`a || b\`: if \`a\` is true, \`b\` is **not evaluated**.

This lets you guard against errors: \`y != 0 && x / y > 2\` never divides by zero because the second part runs only when \`y\` is not 0.

## De Morgan's laws

Negating a compound condition flips the operator and negates each part:

- \`!(a && b)\` is equivalent to \`!a || !b\`
- \`!(a || b)\` is equivalent to \`!a && !b\`

So \`!(x > 3 || y < 2)\` is the same as \`x <= 3 && y >= 2\`. Remember that the negation of \`>\` is \`<=\`, not \`<\`.
`,
        q: [
          mc('If x is 7, what is the value of x > 5 && x < 10 ?', 'true', 'Both parts are true, so the && expression is true.', [
            ['false', '7 is greater than 5 and less than 10, so both conditions hold.'],
            ['7', 'A relational expression gives a boolean, not a number.'],
          ]),
          mc('Which expression is equivalent to !(x > 3 || y < 2) ?', 'x <= 3 && y >= 2', 'De Morgan’s law changes || to && and negates each part: !(x > 3) is x <= 3 and !(y < 2) is y >= 2.', [
            ['x <= 3 || y >= 2', 'The operator must change from || to && when the whole expression is negated.'],
            ['x < 3 && y > 2', 'The negation of > is <=, and the negation of < is >=; the equal case was dropped.'],
            ['x > 3 && y < 2', 'The parts were not negated.'],
          ]),
        ],
      }],
    },
    6: {
      summary: 'if, else-if and nested if statements.',
      sessions: [{
        t: 'Conditional statements',
        s: 'if, if-else, else-if chains, nested conditions and the order of tests.',
        md: `
## Choosing what runs

\`\`\`
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}
\`\`\`

- An **if-else-if chain** checks conditions **in order** and runs the code for the **first true** condition only; the rest are skipped. So the order of the conditions matters: an 85 is caught by the second test only because the first one failed.
- Separate \`if\` statements (not joined by \`else\`) are all tested, so more than one may run.
- Use braces even for one statement; an \`else\` always belongs to the **nearest** unmatched \`if\`, no matter how the code is indented.

## Nested conditions

\`\`\`
int n = 15;
if (n % 3 == 0) {
    if (n % 5 == 0) {
        System.out.println("FizzBuzz");
    } else {
        System.out.println("Fizz");
    }
} else {
    System.out.println(n);
}
\`\`\`

With \`n = 15\` this prints \`FizzBuzz\`; with \`n = 9\` it prints \`Fizz\`; with \`n = 7\` it prints \`7\`.

## Common mistakes

- Writing \`if (x = 5)\` (assignment) instead of \`if (x == 5)\`; this does not compile for ints.
- Comparing doubles with \`==\`; rounding errors can make equal values differ (\`0.1 + 0.2 == 0.3\` is **false**). Compare with a small tolerance instead.
- Putting the conditions of a chain in the wrong order, for example testing \`score >= 80\` before \`score >= 90\`.
`,
        q: [
          mc('What does the code print for score = 85? if (score >= 90) print "A"; else if (score >= 80) print "B"; else print "C";', 'B', 'The first condition is false; the second is true, so "B" is printed and the rest is skipped.', [
            ['A', '85 is not at least 90.'],
            ['C', 'The else branch runs only if both conditions are false.'],
            ['BC', 'Once a branch of an else-if chain runs, the others are skipped.'],
          ]),
          tf('In Java, 0.1 + 0.2 == 0.3 is true.', false, 'Floating-point rounding makes this comparison false.', 'Correct. 0.1 + 0.2 is stored as 0.30000000000000004, so doubles should be compared with a tolerance.'),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Boolean expressions and if statements',
    tasks: [
      mc('If x is 4 and y is 10, what is the value of !(x > 5) && y > 3 ?', 'true', '!(x > 5) is !(false), which is true, and y > 3 is true.', [
        ['false', '!(x > 5) is true because x is not greater than 5, so both parts are true.'],
        ['4', 'A boolean expression does not produce a number.'],
        ['Compile-time error', 'The expression is valid; ! has higher precedence than &&.'],
      ]),
      mc('With y = 0 and x = 10, what is the result of y != 0 && x / y > 2 ?', 'false, with no error', 'y != 0 is false, so && does not evaluate the division (short-circuit).', [
        ['An ArithmeticException', 'The division is never evaluated because the first operand is false.'],
        ['true', 'The first operand is false, so the whole && expression is false.'],
        ['0', 'A boolean expression gives true or false.'],
      ]),
      mc('What is printed when n = 15? if (n % 3 == 0) { if (n % 5 == 0) print "FizzBuzz"; else print "Fizz"; } else print n;', 'FizzBuzz', '15 is divisible by both 3 and 5.', [
        ['Fizz', 'The inner condition is true because 15 % 5 is 0.'],
        ['15', 'The outer condition is true, so the else branch is not run.'],
        ['Fizz and then FizzBuzz', 'Only one branch of an if-else runs.'],
      ]),
      mc('Which condition is true when the int n is between 10 and 20, inclusive?', 'n >= 10 && n <= 20', 'Both bounds must hold, so the conditions are joined by &&.', [
        ['n >= 10 || n <= 20', 'This is true for every number, because each n satisfies at least one condition.'],
        ['10 <= n <= 20', 'Java does not allow chained comparisons; this does not compile.'],
        ['n > 10 && n < 20', 'This excludes 10 and 20.'],
      ]),
      mc('A student wrote: if (score >= 80) grade = "B"; else if (score >= 90) grade = "A"; What grade does a score of 95 receive?', 'B', 'The first condition is already true for 95, so the second test is never reached.', [
        ['A', 'The else-if is skipped because the first condition is true.'],
        ['Both A and B', 'Only the first true branch of the chain runs.'],
        ['No grade', 'The first condition is true, so a grade is assigned.'],
      ]),
      tf('The expression !(a && b) is always equivalent to !a && !b.', false, 'De Morgan’s law gives !a || !b.', 'Correct. Negating an && expression changes it to || with each part negated.'),
      tf('When a is true, the expression a || b evaluates b.', false, 'Short-circuit evaluation skips b.', 'Correct. The result is already known to be true when the first operand is true.'),
    ],
  },
};
