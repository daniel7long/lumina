import { mc, tf } from '../builder.js';

export default {
  summary: 'Repeat work with loops: trace them precisely, count their iterations and use them to process text.',
  modules: {
    7: {
      summary: 'while and for loops, iteration counts and common loop errors.',
      sessions: [{
        t: 'while and for loops',
        s: 'The structure of each loop, counting iterations, infinite loops and off-by-one errors.',
        md: `
## The while loop

A \`while\` loop tests its condition **before** each pass and repeats while it is true:

\`\`\`
int x = 20;
int count = 0;
while (x > 0) {
    x = x / 2;
    count++;
}
\`\`\`

Trace: x becomes 10, 5, 2, 1, 0, so the body runs **5** times, and \`count\` is 5. If the condition is false at the start, the body never runs.

A loop needs something in its body that **moves the condition toward false**. If not, it is an **infinite loop**:

\`\`\`
int i = 0;
while (i < 5) {
    System.out.println(i);   // i never changes
}
\`\`\`

## The for loop

\`\`\`
for (initialization; condition; update) {
    body
}
\`\`\`

\`\`\`
int sum = 0;
for (int i = 1; i <= 5; i++) {
    sum += i;
}
\`\`\`

This adds 1 + 2 + 3 + 4 + 5, so \`sum\` is **15**.

## Counting iterations

- \`for (int i = 0; i < n; i++)\` runs **n** times.
- \`for (int i = 1; i <= n; i++)\` runs **n** times.
- \`for (int i = 1; i < n; i++)\` runs **n − 1** times (a common **off-by-one error** when n times was intended).
- \`for (int i = 0; i < 10; i += 3)\` uses i = 0, 3, 6, 9 and runs **4** times.
- \`for (int i = 10; i > 0; i -= 4)\` uses i = 10, 6, 2 and runs **3** times.

Tracing with a table of variable values after each pass is the most reliable way to find what a loop does.
`,
        q: [
          mc('How many times does the body of for (int i = 0; i < 10; i += 3) execute?', '4', 'i takes the values 0, 3, 6 and 9; the next value, 12, fails the test.', [
            ['3', 'The value i = 0 also counts as an iteration.'],
            ['10', 'i increases by 3, not by 1, so the loop ends much sooner.'],
            ['5', 'The value 12 is not less than 10, so it does not run.'],
          ]),
          mc('What is the value of sum after: int sum = 0; for (int i = 1; i <= 5; i++) sum += i; ?', '15', 'The loop adds 1 + 2 + 3 + 4 + 5.', [
            ['10', 'This is the sum of 1 to 4, which would result from the condition i < 5.'],
            ['5', 'This is the last value of i that is added, not the total.'],
            ['120', 'This is the product 1 × 2 × 3 × 4 × 5, not the sum.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Nested loops and algorithms on strings.',
      sessions: [{
        t: 'Nested loops and string algorithms',
        s: 'Counting executions of nested loops, and traversing a String to count, search or build.',
        md: `
## Nested loops

The inner loop runs completely for **every** iteration of the outer loop, so the numbers of iterations are **multiplied**:

\`\`\`
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        System.out.print("*");
    }
}
\`\`\`

The inner statement runs 3 × 4 = **12** times.

If the inner loop's limit depends on the outer variable, add the passes:

\`\`\`
int count = 0;
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        count++;
    }
}
\`\`\`

The inner loop runs 1, 2, 3 and 4 times, so \`count\` is 1 + 2 + 3 + 4 = **10**.

## Traversing a String

Use \`length()\` and \`substring(i, i + 1)\` (or \`charAt(i)\`) to visit each character:

\`\`\`
String word = "banana";
int count = 0;
for (int i = 0; i < word.length(); i++) {
    if (word.substring(i, i + 1).equals("a")) {
        count++;
    }
}
\`\`\`

Here \`count\` is **3**. The loop must stop at \`length() - 1\`; using \`i <= word.length()\` would cause a StringIndexOutOfBoundsException.

### Building a reversed string

\`\`\`
String result = "";
for (int i = word.length() - 1; i >= 0; i--) {
    result += word.substring(i, i + 1);
}
\`\`\`

Starting at the last index and counting down to 0 gives \`"ananab"\`. Because a String is immutable, \`+=\` creates a new String each time.
`,
        q: [
          mc('How many times does count++ execute? for (int i = 0; i < 3; i++) for (int j = 0; j < 4; j++) count++;', '12', 'The inner loop runs 4 times for each of the 3 outer iterations: 3 × 4 = 12.', [
            ['7', 'The iterations are multiplied, not added.'],
            ['4', 'This is the number of iterations of the inner loop for a single outer pass.'],
            ['3', 'This is the number of iterations of the outer loop only.'],
          ]),
          mc('Which loop header visits every character of a String s from the last character to the first?', 'for (int i = s.length() - 1; i >= 0; i--)', 'The last index is length() - 1 and the loop continues down to index 0.', [
            ['for (int i = s.length(); i > 0; i--)', 'Index s.length() does not exist, so the first access causes an exception, and index 0 is skipped.'],
            ['for (int i = s.length() - 1; i > 0; i--)', 'The loop stops before index 0, so the first character is skipped.'],
            ['for (int i = 0; i < s.length(); i--)', 'i decreases below zero, so the loop causes an exception on the second pass.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Iteration',
    tasks: [
      mc('How many times does the loop body execute? int x = 20; int count = 0; while (x > 0) { x = x / 2; count++; }', '5', 'x takes the values 10, 5, 2, 1 and 0 after each pass, so there are 5 passes.', [
        ['4', 'The pass that changes x from 1 to 0 also counts.'],
        ['10', 'This is the value of x after the first pass, not the number of passes.'],
        ['20', 'x is halved each time, not decreased by 1.'],
      ]),
      mc('What is the value of count after the following code? int count = 0; for (int i = 1; i <= 4; i++) for (int j = 1; j <= i; j++) count++;', '10', 'The inner loop runs 1 + 2 + 3 + 4 times.', [
        ['16', 'This would be the result if the inner loop always ran 4 times.'],
        ['4', 'This is the number of iterations of the outer loop.'],
        ['24', 'This is the product 1 × 2 × 3 × 4, not the sum of the passes.'],
      ]),
      mc('How many times does for (int i = 10; i > 0; i -= 4) execute its body?', '3', 'i is 10, 6 and 2; the next value, −2, fails the test.', [
        ['2', 'The value i = 2 also satisfies i > 0.'],
        ['4', 'i = −2 does not satisfy the condition.'],
        ['10', 'i decreases by 4 each time, not by 1.'],
      ]),
      mc('What is the problem with int i = 0; while (i < 5) { System.out.println(i); } ?', 'It is an infinite loop because i never changes', 'Nothing in the body moves the condition toward false.', [
        ['It prints the numbers 0 through 5', 'The value of i never changes, so it prints 0 forever.'],
        ['It does not compile because i is not final', 'The code compiles; the variable can be changed, but the loop never does.'],
        ['It runs 5 times and then stops', 'The condition is always true because i is 0 on every test.'],
      ]),
      mc('What is the value of count? int count = 0; for (int i = 1; i <= 20; i++) { if (i % 4 == 0) count++; }', '5', 'The multiples of 4 from 1 to 20 are 4, 8, 12, 16 and 20.', [
        ['4', 'The number 20 is also a multiple of 4.'],
        ['20', 'This is the number of loop iterations, not the number of multiples.'],
        ['6', 'There are only five multiples of 4 up to 20.'],
      ]),
      mc('A programmer wants to run a loop exactly 9 times. Which header is correct?', 'for (int i = 1; i < 10; i++)', 'i takes the values 1 to 9, which is 9 values.', [
        ['for (int i = 1; i <= 10; i++)', 'This runs 10 times.'],
        ['for (int i = 0; i <= 9; i++)', 'This runs 10 times (0 through 9).'],
        ['for (int i = 1; i < 9; i++)', 'This runs 8 times.'],
      ]),
      tf('A while loop whose condition is false at the start executes its body once.', false, 'The condition is tested before the first pass.', 'Correct. If the condition is false initially, the body is skipped entirely.'),
    ],
  },
};
