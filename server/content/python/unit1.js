import { mc, tf } from '../builder.js';

export default {
  summary: 'Write, run and trace short Python programs that use expressions, functions, lists, loops and decisions.',
  modules: {
    1: {
      summary: 'Meet the Python interpreter, run your first statements and use functions.',
      sessions: [
        {
          t: 'Programs, languages and the interpreter',
          s: 'What a program is and how Python runs it.',
          md: `
## From instructions to action

A **computer program** is a list of step-by-step instructions that a computer can carry out. A **programming language** is the set of rules for writing those instructions so that the computer, and other people, can read them. Python is one such language.

A computer's processor only understands machine code, so something must translate your Python into actions. In Python this is the job of the **interpreter**. The interpreter reads your code, one statement at a time, and carries out each one immediately. (A **compiler**, used by languages such as Java, translates the whole program first and then runs the result.)

### Two ways to use the interpreter
- **Interactive mode:** type a statement at the \`>>>\` prompt and see the answer at once.
- **Script mode:** save statements in a file ending in \`.py\` and run the whole file.

\`\`\`python
>>> 3 + 4
7
>>> print("Hello, Lumina")
Hello, Lumina
\`\`\`

> **Remember:** the program is what you write, the language is the set of rules you follow while writing it, and the interpreter is the tool that runs it.
`,
          q: [
            mc('Which statement best describes the Python interpreter?', 'A tool that reads Python statements and carries them out', 'The interpreter reads your code and executes each statement, so you can run programs without translating them by hand.', [
              ['A program that checks your spelling before you save a file', 'Editors may highlight mistakes, but the interpreter\'s job is to run your code.'],
              ['The set of rules for writing correct Python', 'Those rules are the language itself (its syntax), not the interpreter.'],
            ]),
            tf('A programming language and a computer program are the same thing.', false, 'This is wrong: a language is a set of rules, while a program is a specific list of instructions written using those rules.', 'Correct. A language (such as Python) is the rule set; a program is one set of instructions written in it.'),
          ],
        },
        {
          t: 'Expressions, statements and predicting code',
          s: 'Evaluate expressions, assign variables and predict output before you run it.',
          md: `
## Expressions and statements

An **expression** produces a value: \`3 * 4\` evaluates to \`12\`. A **statement** performs an action, such as assigning a value to a variable or printing.

\`\`\`python
x = 7              # assignment statement
y = x * 2 + 1      # expression on the right, stored in y
print(y)           # prints 15
\`\`\`

### Arithmetic operators
| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| \`+ - *\` | add, subtract, multiply | \`6 * 7\` | 42 |
| \`/\` | division (decimal result) | \`7 / 2\` | 3.5 |
| \`//\` | whole-number division | \`7 // 2\` | 3 |
| \`%\` | remainder | \`7 % 2\` | 1 |
| \`**\` | power | \`2 ** 3\` | 8 |

Python follows the usual order of operations: powers first, then \`* / // %\`, then \`+ -\`. Brackets change the order.

### Predict, then run
Before running a line, say aloud what you expect. If the result surprises you, you have just found something to learn.
`,
          q: [
            mc('What is printed?\n\na = 4\nb = a * 3 - 2\nprint(b)', '10', 'a * 3 is 12, and 12 - 2 is 10.', [
              ['14', 'This would be 4 * (3 + 2) - 6, not the order of operations used here. Multiply first, then subtract: 12 - 2.'],
              ['6', 'It looks like 4 * (3 - 2) + 2. Without brackets, multiplication happens before subtraction.'],
            ]),
            mc('What is the value of 17 // 5 + 17 % 5 ?', '5', '17 // 5 is 3 (whole-number division) and 17 % 5 is 2 (the remainder). 3 + 2 = 5.', [
              ['3.4', '/ gives decimals, but // and % do not. 17 // 5 is 3 and 17 % 5 is 2.'],
              ['2', '17 % 5 is 2, but you also need to add 17 // 5 = 3.'],
            ]),
          ],
        },
        {
          t: 'Functions: built-in and your own',
          s: 'Call built-in functions, define your own and run a script.',
          md: `
## Using functions

A **function** is a named set of instructions. You **call** it by writing its name and brackets. Python has many **built-in functions**:

\`\`\`python
print(len("hello"))     # 5   (length of the text)
print(abs(-9))          # 9   (absolute value)
print(max(3, 8, 5))     # 8
\`\`\`

## Writing your own
Use \`def\`, a name, **parameters** in brackets, a colon, and an indented body. \`return\` sends a value back to the caller.

\`\`\`python
def area(width, height):
    return width * height

print(area(3, 4))       # 12
\`\`\`

The indented lines belong to the function. Indentation is how Python knows where the function ends.

### Write and run
1. Save the lines in a file named \`area.py\`.
2. Open a terminal in the same folder.
3. Run \`python area.py\`.

> **Tip:** a function that only prints cannot be reused in a calculation. A function that returns a value can.
`,
          q: [
            mc('What does len("hello") return?', '5', 'len counts the characters in the text, and "hello" has five letters.', [
              ['4', 'Counting starts at 1 for length. "hello" has 5 characters.'],
              ['"hello"', 'len returns a number (the length), not the text itself.'],
            ]),
            mc('What is printed?\n\ndef double(n):\n    return n * 2\n\nprint(double(double(3)))', '12', 'double(3) is 6, then double(6) is 12.', [
              ['6', 'That is the result of the inner call only. The outer call doubles it again.'],
              ['9', 'The function multiplies by 2, it does not add 3.'],
            ]),
          ],
        },
      ],
    },
    2: {
      summary: 'Store collections of items in lists and repeat actions with loops.',
      sessions: [
        {
          t: 'Creating and accessing lists',
          s: 'Store several values in one list and read items by position.',
          md: `
## Lists

A **list** holds several values in order. Write items in square brackets, separated by commas.

\`\`\`python
names = ["Ann", "Bo", "Cy"]
scores = [90, 75, 82]
\`\`\`

### Access by index
Each item has an **index**, its position. In Python the first index is **0**.

\`\`\`python
print(names[0])      # Ann
print(names[1])      # Bo
print(scores[-1])    # 82  (negative counts from the end)
print(len(scores))   # 3
\`\`\`

### Change a list
\`\`\`python
scores[1] = 80       # replace an item
scores.append(95)    # add to the end
print(scores)        # [90, 80, 82, 95]
\`\`\`

> **Watch out:** a list of 3 items has valid indexes 0, 1 and 2. Asking for index 3 causes an \`IndexError\`.
`,
          q: [
            mc('For names = ["Ann", "Bo", "Cy"], what is names[1]?', '"Bo"', 'Index 0 is "Ann", so index 1 is the second item, "Bo".', [
              ['"Ann"', 'That is index 0. Python counts positions from 0.'],
              ['"Cy"', 'That is index 2, the last item.'],
            ]),
            tf('In Python, the first item of a list has index 1.', false, 'This is wrong: Python lists start at index 0.', 'Correct. The first item has index 0.'),
          ],
        },
        {
          t: 'Loops: for and while',
          s: 'Repeat instructions for every item or until a condition changes.',
          md: `
## Repeating work

An **iteration** is one pass through a loop. Python has two main loops.

### for loop: do something for each item
\`\`\`python
total = 0
for n in [2, 4, 6]:
    total = total + n
print(total)        # 12
\`\`\`

\`range(5)\` produces 0, 1, 2, 3, 4, which is five numbers starting at 0. So \`for i in range(5):\` runs its body five times.

### while loop: repeat while a condition is true
\`\`\`python
count = 3
while count > 0:
    print(count)
    count = count - 1
\`\`\`
This prints 3, 2, 1. The loop ends when \`count > 0\` becomes false.

### Express an algorithm as a loop
Look for steps that repeat. "Add up every price" repeats the action *add this price*, so it is a loop over the prices.

> **Watch out:** if nothing in a while loop changes the condition, the loop never stops.
`,
          q: [
            mc('What is printed?\n\ntotal = 0\nfor n in [2, 4, 6]:\n    total = total + n\nprint(total)', '12', 'total grows 0 → 2 → 6 → 12.', [
              ['6', 'That is only the total after two items. The loop runs for all three values.'],
              ['2', 'That is just the first value; the loop keeps adding.'],
            ]),
            mc('How many times does the body of "for i in range(5):" run?', '5', 'range(5) gives 0, 1, 2, 3, 4, which is five values.', [
              ['4', 'range(5) stops before 5, but it starts at 0, so there are still five values (0 to 4).'],
              ['6', 'range(5) does not include 5 and does not add an extra pass.'],
            ]),
          ],
        },
        {
          t: 'Nested loops and tracing iteration',
          s: 'Put one loop inside another and follow it with a trace table.',
          md: `
## A loop inside a loop

In a **nested loop**, the inner loop runs completely for every pass of the outer loop.

\`\`\`python
for i in range(3):
    for j in range(2):
        print(i, j)
\`\`\`

The outer loop runs 3 times and the inner loop runs 2 times each time, so the body runs 3 × 2 = **6** times:
\`0 0\`, \`0 1\`, \`1 0\`, \`1 1\`, \`2 0\`, \`2 1\`.

## Tracing
To **trace** an algorithm, keep a table of variable values after each step.

\`\`\`python
count = 0
for i in range(3):
    for j in range(i):
        count = count + 1
print(count)
\`\`\`

| i | range(i) gives | count after the inner loop |
| --- | --- | --- |
| 0 | nothing | 0 |
| 1 | 0 | 1 |
| 2 | 0, 1 | 3 |

The program prints **3**.

> **Tip:** when a loop's range depends on the outer variable, do not multiply. Trace each pass.
`,
          q: [
            mc('How many times does print run?\n\nfor i in range(3):\n    for j in range(4):\n        print(i, j)', '12', 'The inner loop runs 4 times for each of 3 outer passes: 3 × 4 = 12.', [
              ['7', 'You added 3 + 4. Nested loops multiply the counts.'],
              ['4', 'That is only the number of inner passes per outer pass.'],
            ]),
            mc('What is printed?\n\ncount = 0\nfor i in range(3):\n    for j in range(i):\n        count = count + 1\nprint(count)', '3', 'The inner loop runs 0, 1 and 2 times, so count is 0 + 1 + 2 = 3.', [
              ['6', 'That would be 3 × 2. The inner range changes with i, so trace each pass.'],
              ['9', 'That would be the count if the inner loop always ran 3 times.'],
            ]),
          ],
        },
      ],
    },
    3: {
      summary: 'Form Boolean expressions and choose between actions with if, elif and else.',
      sessions: [
        {
          t: 'Boolean expressions',
          s: 'Combine relational and logical operators to get True or False.',
          md: `
## True or False

A **Boolean** value is either \`True\` or \`False\`. Comparisons produce Booleans.

| Operator | Meaning |
| --- | --- |
| \`==\`  \`!=\` | equal to, not equal to |
| \`<\`  \`>\`  \`<=\`  \`>=\` | less than, greater than, and so on |

Combine Booleans with **logical operators**:
- \`and\`: True only if both sides are True
- \`or\`: True if at least one side is True
- \`not\`: reverses True and False

\`\`\`python
x = 7
print(x > 3 and x < 10)    # True
print(x == 7 and x > 9)    # False
print(not (x == 7))        # False
\`\`\`

Python evaluates \`not\` first, then \`and\`, then \`or\`. Use brackets to make your meaning clear.

### Functions that give Booleans
\`"42".isdigit()\` is \`True\`, and \`"cat".startswith("c")\` is \`True\`.

> **Tip:** to find the value of a Boolean expression, evaluate each comparison first, then combine the answers.
`,
          q: [
            mc('What is the value of 5 > 3 and 2 > 4 ?', 'False', '5 > 3 is True but 2 > 4 is False. "and" needs both to be True, so the result is False.', [
              ['True', 'Only one side is True. "and" requires both.'],
              ['5', 'Comparisons give True or False, not numbers.'],
            ]),
            mc('What is the value of not (4 == 4) or 3 < 5 ?', 'True', 'not (4 == 4) is False and 3 < 5 is True. "or" needs only one True, so the result is True.', [
              ['False', '"or" is True when at least one side is True. Here 3 < 5 is True.'],
              ['4', 'The result of a Boolean expression is True or False.'],
            ]),
          ],
        },
        {
          t: 'Decisions with if, elif and else',
          s: 'Choose one path through the code and trace which line runs.',
          md: `
## Making decisions

An **if statement** runs its indented block only when its condition is True. \`elif\` (else if) adds another condition, and \`else\` catches everything else.

\`\`\`python
x = 15
if x > 20:
    print("big")
elif x > 10:
    print("medium")
else:
    print("small")
\`\`\`

Python checks the conditions from the top and runs **only the first block whose condition is True**. For x = 15, \`x > 20\` is False, \`x > 10\` is True, so the program prints \`medium\` and skips the rest.

### Trace conditionals
Write the value of the variable, test each condition in order and stop at the first True one.

| x | x > 20 | x > 10 | Output |
| --- | --- | --- | --- |
| 25 | True | (skipped) | big |
| 15 | False | True | medium |
| 4 | False | False | small |

> **Remember:** the order of conditions matters. Putting \`x > 10\` first would print "medium" for 25 as well.
`,
          q: [
            mc('What is printed when x = 15?\n\nif x > 20:\n    print("big")\nelif x > 10:\n    print("medium")\nelse:\n    print("small")', 'medium', 'x > 20 is False, x > 10 is True, so "medium" runs and the rest is skipped.', [
              ['big', 'x = 15 is not greater than 20.'],
              ['small', 'else runs only if every earlier condition is False. Here x > 10 is True.'],
            ]),
            tf('In an if / elif / else chain, more than one block can run for the same input.', false, 'This is wrong: Python runs only the first block whose condition is True.', 'Correct. Only the first True block runs, then the chain ends.'),
          ],
        },
      ],
    },
    4: {
      summary: 'Combine loops and conditionals to process every item in a list.',
      sessions: [
        {
          t: 'Loops with decisions over a list',
          s: 'Count, add and filter list items with a loop and an if.',
          md: `
## Processing a collection

Many tasks follow one pattern: **loop over the items, and decide what to do with each one.**

### Count items that meet a condition
\`\`\`python
nums = [3, 8, 5, 12, 7, 6]
count = 0
for n in nums:
    if n % 2 == 0:       # even numbers have remainder 0
        count = count + 1
print(count)             # 3  (8, 12 and 6)
\`\`\`

### Add up items that meet a condition
\`\`\`python
total = 0
for n in nums:
    if n % 2 == 1:       # odd numbers
        total = total + n
print(total)             # 15  (3 + 5 + 7)
\`\`\`

### The pattern
1. Start a variable (a counter or a total) before the loop.
2. Loop over the list.
3. Use \`if\` to select the items you care about.
4. Update the variable inside the \`if\`.
5. Report the result after the loop.

> **Tip:** the starting value goes *before* the loop. If you put \`count = 0\` inside the loop, it resets on every pass.
`,
          q: [
            mc('How many items are greater than 5?\n\nnums = [3, 8, 5, 12, 7, 6]\ncount = 0\nfor n in nums:\n    if n > 5:\n        count = count + 1\nprint(count)', '4', '8, 12, 7 and 6 are greater than 5, so count ends at 4. The 5 is not greater than 5.', [
              ['5', 'The value 5 is not greater than 5, and 3 is smaller.'],
              ['3', 'You may have skipped one of 8, 12, 7 or 6.'],
            ]),
            mc('What does this program print?\n\ntotal = 0\nfor n in [3, 8, 5, 12, 7, 6]:\n    if n % 2 == 1:\n        total = total + n\nprint(total)', '15', 'The odd numbers are 3, 5 and 7, and their sum is 15.', [
              ['26', 'That is 8 + 12 + 6, the even numbers.'],
              ['41', 'That is the sum of every number. The if keeps only the odd ones.'],
            ]),
          ],
        },
        {
          t: 'Translate an algorithm into Python and trace it',
          s: 'Turn a plain-language algorithm into code, then check it with a trace table.',
          md: `
## From words to code

An **algorithm** is a precise, step-by-step method. Here is one in plain language:

1. Call the first number the largest so far.
2. Look at each number in the list.
3. If it is bigger than the largest so far, it becomes the new largest.
4. When the list ends, report the largest.

Translated into Python:

\`\`\`python
values = [4, 9, 2, 9]
largest = values[0]
for v in values:
    if v > largest:
        largest = v
print(largest)       # 9
\`\`\`

Why start with \`values[0]\` and not 0? If every number were negative, a start value of 0 would wrongly win.

### Another algorithm: count increases
\`\`\`python
values = [4, 9, 2, 9]
previous = values[0]
increases = 0
for v in values[1:]:           # every item after the first
    if v > previous:
        increases = increases + 1
    previous = v
print(increases)               # 2
\`\`\`

| v | previous before | v > previous? | increases |
| --- | --- | --- | --- |
| 9 | 4 | True | 1 |
| 2 | 9 | False | 1 |
| 9 | 2 | True | 2 |

> **Tip:** always test with a tiny list and trace it by hand before trusting the code.
`,
          q: [
            mc('In the "largest number" algorithm, why is largest = values[0] a safer start than largest = 0?', 'Because the list might contain only negative numbers', 'With only negative numbers, 0 would never be replaced, and the answer would be wrong. Starting with the first item always works.', [
              ['Because lists must start with their largest item', 'Lists have no required order.'],
              ['Because 0 is not allowed as a variable value', '0 is an ordinary value. The problem is that it may be larger than every item.'],
            ]),
            mc('What is printed?\n\nvalues = [4, 9, 2, 9]\nprevious = values[0]\nincreases = 0\nfor v in values[1:]:\n    if v > previous:\n        increases = increases + 1\n    previous = v\nprint(increases)', '2', '9 > 4 and 9 > 2 are the two increases. 2 > 9 is False.', [
              ['3', 'There are three comparisons, but 2 > 9 is False, so only two increases are counted.'],
              ['1', 'The final 9 > 2 also counts, so there are two increases.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Programming with Python',
    minutes: 25,
    tasks: [
      mc('Which statement about the Python interpreter is TRUE?', 'It runs your statements one at a time and shows results immediately', 'The interpreter executes statements as it reads them, which is why interactive mode shows answers at once.', [
        ['It must translate the whole program into machine code before anything runs', 'That describes a compiler. Python uses an interpreter.'],
        ['It is the set of rules for how Python code must be written', 'Those rules are the language\'s syntax.'],
      ]),
      mc('What is printed?\n\nx = 20\ny = x // 6 + x % 6\nprint(y)', '5', '20 // 6 is 3 and 20 % 6 is 2, so y is 5.', [
        ['5.33', '// gives a whole number and % gives the remainder. Neither gives decimals.'],
        ['2', '20 % 6 is 2, but 20 // 6 (3) must be added.'],
        ['23', 'You added 20 and 3. Check that // and % apply to x = 20 and 6.'],
      ]),
      mc('What does this function call print?\n\ndef f(a, b):\n    return a * b + 1\n\nprint(f(3, f(1, 2)))', '10', 'f(1, 2) is 1 × 2 + 1 = 3, then f(3, 3) is 3 × 3 + 1 = 10.', [
        ['7', 'That is f(3, 2). The second argument is the result of f(1, 2), which is 3.'],
        ['4', 'This is f(1, 2) + 1. The outer call multiplies 3 × 3 first.'],
        ['9', 'f(3, 3) is 3 × 3 + 1, so remember to add 1.'],
      ]),
      mc('What is printed?\n\nitems = [5, 1, 4]\nitems.append(items[0] + items[2])\nprint(items)', '[5, 1, 4, 9]', 'items[0] is 5 and items[2] is 4, so 9 is appended to the end.', [
        ['[5, 1, 4, 6]', 'items[2] is 4 (the third item), not 1.'],
        ['[9, 5, 1, 4]', 'append adds to the end of the list, not the start.'],
        ['[5, 1, 9]', 'append adds a new item. It does not replace the last one.'],
      ]),
      mc('What is printed?\n\ntotal = 0\nfor i in range(1, 5):\n    total = total + i\nprint(total)', '10', 'range(1, 5) gives 1, 2, 3, 4, and 1 + 2 + 3 + 4 = 10.', [
        ['15', 'range(1, 5) stops before 5, so 5 is not included.'],
        ['4', 'That is the last value of i. total adds up all of them.'],
        ['6', 'You may have used range(4) which starts at 0. Here the values are 1 to 4.'],
      ]),
      mc('What is the value of (7 > 3 and 2 > 5) or not (4 < 2) ?', 'True', '(True and False) is False. not (4 < 2) is not False, which is True. False or True is True.', [
        ['False', 'The right side, not (4 < 2), is True, and "or" needs only one True side.'],
        ['7', 'Boolean expressions evaluate to True or False.'],
      ]),
      mc('What is printed when score = 85?\n\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("D")', 'B', '85 is not ≥ 90, but it is ≥ 80, so the second block runs and the chain stops. (The test score >= 70 is also true, but it is never reached.)', [
        ['A', '85 is below 90.'],
        ['C', '85 is also ≥ 70, but only the first True block runs.'],
        ['B and C', 'Only one block in an if/elif/else chain runs.'],
      ]),
      mc('What is printed?\n\nwords = ["to", "tree", "tea", "up", "toad"]\ncount = 0\nfor w in words:\n    if w.startswith("t") and len(w) > 2:\n        count = count + 1\nprint(count)', '3', '"tree", "tea" and "toad" start with t and have more than two letters. "to" starts with t but has only two letters.', [
        ['4', '"to" starts with t but fails len(w) > 2, so it is not counted.'],
        ['5', 'Only words that satisfy both conditions are counted.'],
        ['2', 'Three words, "tree", "tea" and "toad", satisfy both conditions.'],
      ]),
    ],
  },
};
