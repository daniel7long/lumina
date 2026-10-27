import { mc, tf, wr } from '../builder.js';
import { K, crit } from '../helpers.js';

export default {
  summary: 'Explore the big ideas behind computing: recursion, data structures, binary data, encryption, the limits of computation and cellular automata.',
  modules: {
    5: {
      summary: 'Solve problems by letting a function call itself on a smaller version of the problem.',
      sessions: [
        {
          t: 'Thinking recursively',
          s: 'Base case, recursive case and how a recursive call unfolds.',
          md: `
## A function that calls itself

A **recursive** algorithm solves a problem by solving a smaller copy of the same problem. Every recursive function needs two parts:

- a **base case**: an input so simple that the answer is known without another call
- a **recursive case**: a call to the same function on a *smaller* input

The factorial of n (written n!) is n × (n − 1) × … × 1.

\`\`\`python
def factorial(n):
    if n <= 1:            # base case
        return 1
    return n * factorial(n - 1)   # recursive case

print(factorial(4))       # 24
\`\`\`

### Tracing the calls
\`\`\`
factorial(4) = 4 * factorial(3)
             = 4 * (3 * factorial(2))
             = 4 * (3 * (2 * factorial(1)))
             = 4 * (3 * (2 * 1))
             = 24
\`\`\`
The calls pile up until the base case returns 1, then the answers return back up the chain.

> **Watch out:** without a base case, or with a recursive call that does not get smaller, Python stops with a \`RecursionError\`.
`,
          q: [
            mc('What is factorial(5)?', '120', '5 × 4 × 3 × 2 × 1 = 120.', [
              ['25', 'Factorial multiplies all the whole numbers down to 1, not 5 × 5.'],
              ['15', 'That is the sum 5 + 4 + 3 + 2 + 1. Factorial multiplies.'],
            ]),
            mc('In the factorial function, which part is the base case?', 'if n <= 1: return 1', 'The base case returns an answer directly, without another recursive call.', [
              ['return n * factorial(n - 1)', 'This is the recursive case, because it calls factorial again.'],
              ['def factorial(n):', 'This line only defines the function.'],
            ]),
          ],
        },
        {
          t: 'Identifying and tracing recursive algorithms',
          s: 'Recognize recursion in code and follow a call to the end.',
          md: `
## How to recognize recursion

A function is recursive if its own body contains a call to **itself**. Look for the same name inside the function.

\`\`\`python
def total(nums):
    if nums == []:                 # base case: nothing to add
        return 0
    return nums[0] + total(nums[1:])   # first item + total of the rest

print(total([1, 2, 3]))            # 6
\`\`\`

\`nums[1:]\` is the list without its first item, so the problem gets smaller each time.

### Trace
\`\`\`
total([1, 2, 3]) = 1 + total([2, 3])
                 = 1 + (2 + total([3]))
                 = 1 + (2 + (3 + total([])))
                 = 1 + (2 + (3 + 0)) = 6
\`\`\`

### Check any recursive function
1. Is there a base case?
2. Does every recursive call use a smaller or simpler input?
3. Does each case return a value?

Counting down is a simpler example:
\`\`\`python
def countdown(n):
    if n == 0:
        print("Go!")
    else:
        print(n)
        countdown(n - 1)
\`\`\`
\`countdown(3)\` prints 3, 2, 1, Go!
`,
          q: [
            mc('Which function is recursive?', 'def f(n): return 1 if n == 0 else n + f(n - 1)', 'It calls f inside its own body, with a smaller n, and has a base case (n == 0).', [
              ['def f(n): return n + 1', 'This function never calls itself.'],
              ['def f(n): return abs(n)', 'It calls a different function (abs), not itself.'],
            ]),
            tf('A recursive function with no base case will eventually stop by itself without errors.', false, 'This is wrong: without a base case the calls never reach an answer and Python raises a RecursionError.', 'Correct. With no base case the calls keep going until Python stops them with a RecursionError.'),
          ],
        },
      ],
    },
    6: {
      summary: 'Compare common ways to store data and choose the best one for a task.',
      sessions: [
        {
          t: 'Arrays and linked lists',
          s: 'Two ways to store a sequence and their trade-offs.',
          md: `
## Why data structures matter

A **data structure** is a way of organizing data so that some operations are fast. Different structures are good at different jobs.

### Array
An **array** stores items next to each other in memory. Because every item has a fixed size, the computer can jump straight to item number *k*.
- Access by index is **fast** (one step).
- Inserting or deleting in the middle is **slow**, because later items must shift.
- Python's \`list\` behaves like an array.

### Singly linked list
A **linked list** is a chain of **nodes**. Each node holds a value and a link to the next node.
\`\`\`
head → [7 | •] → [2 | •] → [9 | None]
\`\`\`
- Inserting at the front is **fast**: make a new node and point it to the old head.
- Reaching the 500th item is **slow**: you must follow 499 links.
- Each node uses extra memory for its link.

| Task | Array | Linked list |
| --- | --- | --- |
| Get item k | fast | slow |
| Insert at front | slow (shift) | fast |
| Memory use | compact | extra for links |
`,
          q: [
            mc('You need to read the 500th item many times. Which structure is the better choice?', 'An array', 'An array can jump straight to any index, so access is fast.', [
              ['A singly linked list', 'A linked list must follow links from the start, so reaching item 500 is slow.'],
              ['Both are equally fast', 'They differ here: array access by index takes one step.'],
            ]),
            tf('Inserting a new item at the front of a singly linked list requires moving every other item.', false, 'This is wrong: you only create a new node and point it to the old head.', 'Correct. Only the new node and the head link change.'),
          ],
        },
        {
          t: 'Stacks, queues, trees and choosing a structure',
          s: 'Match a problem to the structure that fits it.',
          md: `
## More structures

### Stack: last in, first out (LIFO)
Think of a pile of plates. You **push** a plate on top and **pop** the top one off.
Uses: the Back button, undo, tracking function calls.

### Queue: first in, first out (FIFO)
Think of a line at a shop. You **enqueue** at the back and **dequeue** from the front.
Uses: print jobs, customer requests, tasks waiting for a worker.

### Binary tree
Each **node** has at most two children (left and right). In a **binary search tree**, smaller values go left and larger values go right, so each comparison discards about half of the remaining items.
Uses: fast searching and keeping data sorted.

### Choosing a structure
Ask what the main operation is.

| Need | Good choice |
| --- | --- |
| Newest item first | stack |
| Oldest item first | queue |
| Fast lookup by position | array |
| Fast insert at the front | linked list |
| Fast search in sorted data | binary search tree |

Think about **memory use** (extra links?) and **running time** (how many steps?) before you choose.
`,
          q: [
            mc('A web browser lets you go back to the pages you visited, most recent first. Which structure fits?', 'A stack', 'The most recent page is the first one you return to: last in, first out.', [
              ['A queue', 'A queue would return the oldest page first.'],
              ['A binary search tree', 'A tree is for searching sorted data, not for undoing in reverse order.'],
            ]),
            mc('Customers must be served in the order they arrive. Which structure fits?', 'A queue', 'The first customer in must be the first served: first in, first out.', [
              ['A stack', 'A stack would serve the newest customer first.'],
              ['An array with random access', 'Random access is not the main need here; order of service is.'],
            ]),
          ],
        },
      ],
    },
    7: {
      summary: 'Convert between decimal and binary and see how computers store different kinds of data.',
      sessions: [
        {
          t: 'Converting between decimal and binary',
          s: 'Use place values to move between the two number systems.',
          md: `
## Binary place values

Decimal uses ten digits and place values 1, 10, 100, … Binary uses two digits, **0** and **1** (bits), and place values that double each step:

| Place | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- |
| Example | 0 | 1 | 1 | 0 | 1 |

### Binary to decimal
Add the place values where there is a 1.
\`11001\` = 16 + 8 + 1 = **25**.

### Decimal to binary
Subtract the largest place value that fits, mark a 1, and continue.
13 = 8 + 4 + 1, so 13 is \`1101\`.

Or divide by 2 repeatedly and read the remainders from bottom to top:
\`\`\`
13 ÷ 2 = 6 remainder 1
 6 ÷ 2 = 3 remainder 0
 3 ÷ 2 = 1 remainder 1
 1 ÷ 2 = 0 remainder 1   → read upward: 1101
\`\`\`

### Check with Python
\`\`\`python
print(bin(13))          # 0b1101
print(int("11001", 2))  # 25
\`\`\`
`,
          q: [
            mc('What is the decimal number 10 in binary?', '1010', '10 = 8 + 2, so the bits for 8 and 2 are 1: 1010.', [
              ['1001', 'That is 8 + 1 = 9.'],
              ['1100', 'That is 8 + 4 = 12.'],
            ]),
            mc('What is the binary number 11001 in decimal?', '25', '16 + 8 + 1 = 25.', [
              ['11', 'That is reading the digits as decimal. Use place values (16, 8, 4, 2, 1).'],
              ['19', '16 + 2 + 1 would be 10011. The ones here are at 16, 8 and 1.'],
            ]),
          ],
        },
        {
          t: 'How different kinds of data become bits',
          s: 'Define binary representation and see how text, images and sound are stored.',
          md: `
## Binary representation

**Binary representation** means writing information using only 0s and 1s. A computer stores everything this way, because a bit can be made from something with two states, such as a switch that is on or off.

### How many values?
With **n** bits you can make **2ⁿ** different patterns.

| Bits | Patterns |
| --- | --- |
| 1 | 2 |
| 4 | 16 |
| 8 | 256 |

### Different data, the same bits
- **Text:** each character has a code. In ASCII, "A" is 65, which is \`01000001\`, and "B" is 66.
- **Images:** a picture is a grid of pixels. Each pixel's colour is stored as numbers, often three values (red, green, blue) from 0 to 255.
- **Sound:** the wave is measured many times per second and each measurement is stored as a number.
- **Integers:** stored in binary, as in the previous session.

The bits alone do not say what they mean. The same 8 bits could be the letter A, the number 65 or part of a colour, depending on how the program reads them.
`,
          q: [
            mc('How many different values can 8 bits represent?', '256', '2⁸ = 256.', [
              ['8', 'Each bit doubles the number of patterns, so the count is 2⁸, not 8.'],
              ['64', '2⁶ is 64. With 8 bits the count is 2⁸ = 256.'],
            ]),
            mc('In ASCII, "A" is 65. What is the ASCII code of "C"?', '67', 'Letters follow in order: A = 65, B = 66, C = 67.', [
              ['66', 'That is the code for "B".'],
              ['3', 'That is the position of C in the alphabet, not its ASCII code.'],
            ]),
          ],
        },
      ],
    },
    8: {
      summary: 'Learn how information is hidden with ciphers and how modern encryption (RSA) uses one-way functions.',
      sessions: [
        {
          t: 'Encryption and the substitution cipher',
          s: 'Why encryption matters and how a simple cipher works.',
          md: `
## Encryption in everyday life

**Encryption** turns readable data (**plaintext**) into unreadable data (**ciphertext**) using a **key**. **Decryption** reverses it with the right key. Encryption protects online banking, messages, passwords and shopping, so it is critical to everyday life.

### A substitution cipher
A **substitution cipher** replaces each letter with another one. The **Caesar cipher** shifts every letter by a fixed number. With a shift of 3:

| Plain | A | B | C | … | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cipher | D | E | F | … | A | B | C |

\`HELLO\` becomes \`KHOOR\`. The key is the shift (3). To decrypt, shift back by 3.

\`\`\`python
def caesar(text, shift):
    result = ""
    for ch in text:
        result = result + chr((ord(ch) - 65 + shift) % 26 + 65)
    return result

print(caesar("HELLO", 3))   # KHOOR
\`\`\`

### The weakness
In long English texts some letters appear much more often than others (E is the most common). An attacker counts the letters and guesses the substitution. Simple substitution ciphers are therefore **not secure**.
`,
          q: [
            mc('Using a Caesar shift of 3, what is the ciphertext for CAT?', 'FDW', 'C → F, A → D, T → W (each letter moves three places).', [
              ['DBU', 'That is a shift of 1.'],
              ['ZXQ', 'That shifts backwards by 3. Encryption here shifts forwards.'],
            ]),
            tf('A simple substitution cipher is hard to break with letter-frequency analysis once the message is long.', false, 'This is wrong: long messages make the letter frequencies clear, which makes the cipher easy to break.', 'Correct. Frequency analysis works better on longer texts, so simple ciphers are weak.'),
          ],
        },
        {
          t: 'One-way functions and the RSA algorithm',
          s: 'Trace how RSA encrypts and decrypts a number.',
          md: `
## One-way functions

A **one-way function** is easy to compute but very hard to reverse. Multiplying two large prime numbers is easy. Starting from the product and finding the two primes (factoring) is extremely hard for very large numbers. Modern encryption relies on this.

## RSA in small numbers
RSA uses a **public key** (anyone may know it) to encrypt and a **private key** (kept secret) to decrypt.

1. Choose two primes: p = 5, q = 11.
2. n = p × q = 55 and φ = (p − 1)(q − 1) = 40.
3. Choose e = 3 (shares no factors with 40).
4. Find d so that (e × d) mod 40 = 1. d = 27 works, since 3 × 27 = 81 = 2 × 40 + 1.

**Public key:** (n = 55, e = 3)  **Private key:** d = 27

**Encrypt** message m = 4: c = mᵉ mod n = 4³ mod 55 = 64 mod 55 = **9**.
**Decrypt**: m = cᵈ mod n = 9²⁷ mod 55 = **4**.

\`\`\`python
print(pow(4, 3, 55))    # 9
print(pow(9, 27, 55))   # 4
\`\`\`

Real RSA uses primes hundreds of digits long, so attackers cannot factor n to find d.
`,
          q: [
            mc('Which of these is an example of a one-way function?', 'Multiplying two large primes together', 'Multiplication is easy, but factoring the product back into its primes is extremely hard.', [
              ['Adding two small numbers', 'Addition is just as easy to reverse (subtraction).'],
              ['Reversing the letters of a word', 'Reversing again undoes it immediately, so it is not one-way.'],
            ]),
            mc('With the public key (n = 55, e = 3), what is the ciphertext for the message m = 5?', '15', 'c = 5³ mod 55 = 125 mod 55 = 15.', [
              ['125', 'You need the remainder after dividing by n = 55: 125 mod 55 = 15.'],
              ['8', 'That is 2³. The message here is 5.'],
            ]),
          ],
        },
      ],
    },
    9: {
      summary: 'Estimate how much work an algorithm needs and see why some problems cannot be solved in practice.',
      sessions: [
        {
          t: 'Exhaustive search and order of complexity',
          s: 'See how the work grows as the problem gets bigger.',
          md: `
## Counting the work

The **order of complexity** describes how the number of steps grows as the input size *n* grows.

| Order | Steps for n = 10 | n = 20 | n = 30 |
| --- | --- | --- | --- |
| n (linear) | 10 | 20 | 30 |
| n² (quadratic) | 100 | 400 | 900 |
| 2ⁿ (exponential) | 1,024 | 1,048,576 | about 1 billion |

### Exhaustive search
An **exhaustive search** tries every possibility.
- **Subset sum** (does some group of *n* numbers add up to a target?) checks 2ⁿ subsets, because each number is either in or out.
- The **travelling salesperson** problem (the shortest route through *n* cities) checks (n − 1)! routes.

Adding just one more item **doubles** the work of a 2ⁿ algorithm.

\`\`\`python
n = 20
print(2 ** n)       # 1048576 subsets
\`\`\`
`,
          q: [
            mc('How many subsets does an exhaustive subset-sum search have to check for 20 numbers?', '2²⁰ = 1,048,576', 'Each of the 20 numbers is either in or out, giving 2 × 2 × … (20 times) = 1,048,576 subsets.', [
              ['20² = 400', 'The number of subsets is 2²⁰, not 20².'],
              ['20! ≈ 2.4 × 10¹⁸', 'Factorial counts orderings (like routes), not subsets.'],
            ]),
            mc('An algorithm needs 2ⁿ steps. What happens to the work when n increases by 1?', 'It doubles', '2ⁿ⁺¹ = 2 × 2ⁿ.', [
              ['It increases by 1 step', 'That would be linear growth. For 2ⁿ, each extra item doubles the work.'],
              ['It stays about the same', 'Exponential growth quickly becomes very large.'],
            ]),
          ],
        },
        {
          t: 'Intractable problems',
          s: 'Why exhaustive solutions are only practical when the problem is small.',
          md: `
## When is a problem practical?

A problem is **intractable** when the only known algorithms need an amount of time that grows exponentially (or worse). It is not impossible. Small cases can be solved. Large cases would take far too long.

### How long is "too long"?
Suppose a computer performs one billion (10⁹) steps per second.

| n | 2ⁿ steps | Time |
| --- | --- | --- |
| 30 | about 10⁹ | about 1 second |
| 40 | about 10¹² | about 18 minutes |
| 60 | about 1.15 × 10¹⁸ | about 36 years |

Faster computers do not change this much: a machine 1,000 times faster still needs weeks for n = 60, and for n = 100 the time becomes tens of trillions of years.

### Travelling salesperson
For 25 cities there are 24! ≈ 6.2 × 10²³ routes. That is far too many to check.

> **Key idea:** when a problem is intractable we use **approximate** methods that find a good answer, not the perfect one, in reasonable time.
`,
          q: [
            mc('Why can a computer not simply check every route for a 25-city delivery problem?', 'There are about 6 × 10²³ routes, far too many to check in a lifetime', '24! ≈ 6.2 × 10²³ possible routes, which is far beyond what any computer can examine.', [
              ['Computers cannot compare route lengths', 'Comparing lengths is easy. The problem is the sheer number of routes.'],
              ['There is only one possible route', 'There are an enormous number of possible routes.'],
            ]),
            tf('An intractable problem cannot be solved for any input size.', false, 'This is wrong: intractable problems can be solved for small inputs. They become impractical as the input grows.', 'Correct. Small cases can be solved; large cases take too long.'),
          ],
        },
      ],
    },
    10: {
      summary: 'Use simple rules on rows of cells to create surprising patterns, including random-looking ones.',
      sessions: [
        {
          t: 'Cellular automata and applying a rule',
          s: 'Compute the next generation of a one-dimensional automaton.',
          md: `
## What is a cellular automaton?

A **cellular automaton** is a grid of cells, each in a state such as 0 or 1, that changes in steps called **generations**. A **one-dimensional** automaton is a single row of cells. The next state of each cell depends on a **rule** applied to the cell and its two neighbours.

There are 8 possible neighbourhood patterns for three cells. A rule says what the middle cell becomes for each pattern. **Rule 90** is:

| Pattern | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| New cell | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |

(For Rule 90 the new cell is simply *left neighbour XOR right neighbour*.)

### Example
Treat cells beyond the edges as 0. Start with \`0 0 1 0 0\`.
- Cell 1: pattern 000 → 0
- Cell 2: pattern 001 → 1
- Cell 3: pattern 010 → 0
- Cell 4: pattern 100 → 1
- Cell 5: pattern 000 → 0

Generation 1 is \`0 1 0 1 0\`. Applying the rule again gives \`1 0 0 0 1\`.

> Draw each generation under the last one, and patterns appear.
`,
          q: [
            mc('Apply Rule 90 (new cell = left XOR right) to the row 0 0 1 0 0 with zeros beyond the edges. What is the next row?', '0 1 0 1 0', 'Each cell becomes the XOR of its two neighbours: the cells next to the 1 become 1, and the rest stay 0.', [
              ['0 0 1 0 0', 'In Rule 90 the middle cell does not copy itself. It becomes the XOR of its neighbours.'],
              ['1 0 1 0 1', 'Check the edge cells: with zeros beyond the edge, cell 1 has neighbours 0 and 0, giving 0.'],
            ]),
            tf('In a one-dimensional cellular automaton, each cell\'s next state depends only on its own current state.', false, 'This is wrong: the next state depends on the cell and its two neighbours.', 'Correct. The rule looks at the cell and both of its neighbours.'),
          ],
        },
        {
          t: 'Rule numbers, binary and random numbers',
          s: 'Connect a rule to its number and to randomness.',
          md: `
## Why "Rule 90"?

Read the eight outputs of the rule table, in the order 111, 110, …, 000, as a binary number.

Rule 90: \`0 1 0 1 1 0 1 0\` = 64 + 16 + 8 + 2 = **90**.

### How many rules are there?
Each of the 8 patterns can lead to 0 or 1. That is 2⁸ = **256** possible rules, numbered 0 to 255.

### A rule that looks random: Rule 30
Rule 30 is \`0 0 0 1 1 1 1 0\` = 16 + 8 + 4 + 2 = 30.
Starting from a single 1, the pattern it grows is irregular. The centre column of cells looks like a random sequence of 0s and 1s. Such a column can serve as a simple **random number generator**, even though the rule itself is completely deterministic.

### Deciding if output is usable as random
Look for:
- no obvious repeating pattern
- no long runs of the same value
- roughly equal numbers of 0s and 1s

A rule whose output settles into \`1010 1010 …\` repeats, so it is a poor choice.
`,
          q: [
            mc('How many different rules exist for a one-dimensional, two-state automaton with a three-cell neighbourhood?', '256', 'Each of the 8 neighbourhood patterns has 2 possible outputs, so there are 2⁸ = 256 rules.', [
              ['8', 'There are 8 patterns, but each can map to 0 or 1, giving 2⁸ rules.'],
              ['64', 'That is 2⁶. There are 8 patterns, so the count is 2⁸.'],
            ]),
            mc('The output of one automaton settles into 1 0 1 0 1 0 1 0 … forever. Could it be used as a random number generator?', 'No, because it repeats a simple pattern', 'Random-looking output should not follow a short repeating pattern.', [
              ['Yes, because it contains equal numbers of 0s and 1s', 'Balance is not enough. A repeating pattern is perfectly predictable.'],
              ['Yes, because all cellular automata produce random output', 'Many rules produce simple, repetitive patterns. Only some, like Rule 30, look random.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Principles of computation',
    minutes: 30,
    tasks: [
      mc('What is printed?\n\ndef f(n):\n    if n == 0:\n        return 0\n    return n + f(n - 1)\n\nprint(f(4))', '10', 'f(4) = 4 + 3 + 2 + 1 + 0 = 10.', [
        ['24', 'That is 4! (multiplication). This function adds.'],
        ['4', 'The function keeps adding smaller values until n reaches 0.'],
        ['6', 'That is f(3). The call is f(4).'],
      ]),
      mc('A help desk handles tickets in the order they were received. Which data structure fits best?', 'A queue', 'First in, first out matches serving tickets in arrival order.', [
        ['A stack', 'A stack would handle the newest ticket first.'],
        ['A binary search tree', 'A tree is for searching sorted data, not for first-come-first-served order.'],
      ]),
      mc('What is the decimal value of the binary number 101101?', '45', '32 + 8 + 4 + 1 = 45.', [
        ['13', 'You may have read only the last four bits (1101). All six bits count.'],
        ['101101', 'That is the binary number itself, not its decimal value.'],
        ['37', '32 + 4 + 1 = 37 is the value of 100101. Check which bits are set in 101101.'],
      ]),
      mc('Using a Caesar shift of 3, what plaintext gives the ciphertext KHOOR?', 'HELLO', 'Shift each letter back by 3: K → H, H → E, O → L, O → L, R → O.', [
        ['KHOOR', 'That is the ciphertext itself.'],
        ['NKRRU', 'That shifts forward by 3 again. Decryption shifts backwards.'],
        ['HALLO', 'Check the second letter: H shifted back by 3 from the cipher letter H is E, not A.'],
      ]),
      mc('Why does RSA depend on a one-way function?', 'Multiplying two large primes is easy, but factoring the result to recover them is extremely hard', 'This gap in difficulty keeps the private key secret even though the public key is known.', [
        ['Because the keys are the same for encryption and decryption', 'RSA uses two different keys: public to encrypt, private to decrypt.'],
        ['Because RSA only works with short messages', 'The security comes from the difficulty of factoring, not message length.'],
      ]),
      mc('A search must check every subset of 30 numbers. Roughly how many subsets is that?', 'About 1 billion', '2³⁰ ≈ 1.07 billion.', [
        ['30', 'The number of subsets is 2³⁰, not 30.'],
        ['900', '30² = 900 would be quadratic growth, not exponential.'],
        ['About 1 million', '2²⁰ is about a million. For 30 numbers it is 2³⁰, about a billion.'],
      ]),
      mc('Rule 30 is 0 0 0 1 1 1 1 0 in binary order (111 down to 000). Which of these is the rule number?', '30', '16 + 8 + 4 + 2 = 30.', [
        ['15', 'Count the place values: the 1s are at 16, 8, 4 and 2.'],
        ['78', 'Check the place values: 64 is not set.'],
        ['120', 'That is the number you get by reading the eight digits in reverse order.'],
      ]),
      wr({
        points: 20,
        prompt: 'In 60–120 words, explain why checking every subset is impractical for a subset-sum problem with 60 numbers, and name one other approach.',
        scenario: 'A friend says: "Just buy a faster computer and check every subset." Respond to your friend.',
        starter: 'Checking every subset is impractical because…',
        minWords: 60,
        checklist: [
          'I said how many subsets there are (2 to the power 60) or that the work doubles with each extra number.',
          'I used a size comparison such as billions of years or far too many.',
          'I explained that a faster computer does not solve this.',
          'I named another approach, such as an approximate method.',
        ],
        modelAnswer: 'With 60 numbers there are 2 to the power 60 subsets, about 1.15 × 10^18. Each extra number doubles the work, so the growth is exponential. Even if a computer checks a billion subsets per second, this would take around 36 years, and 70 numbers would take tens of thousands of years. A computer that is ten or a hundred times faster only reduces the time by that factor, which is not enough. Problems like this are called intractable. Instead of checking every subset, we can use an approximate method, such as a greedy or heuristic approach, that finds a good answer in reasonable time.',
        rubric: {
          criteria: [
            crit('why', 'Explains the growth', 'Mentions the number of subsets or exponential growth.', 40, [
              K.any('count', ['2^60', '2 to the power', '2**60', 'exponential', 'doubles', 'double', 'quintillion', '10^18'], 'Explains the exponential growth', 'Say that there are 2^60 subsets or that each extra number doubles the work.'),
              K.any('size', ['billion', 'years', 'too many', 'too long', 'huge', 'enormous', 'millions'], 'Shows how large or slow it is', 'Give a sense of scale such as billions of years or far too many subsets.'),
            ]),
            crit('speed', 'Answers the friend', 'Explains why faster hardware is not enough.', 30, [
              K.any('faster', ['faster', 'speed', 'hardware', 'computer'], 'Responds to the faster-computer idea', 'Explain why a faster computer does not fix exponential growth.'),
              K.any('still', ['still', 'only', 'not enough', 'does not', "doesn't", 'cannot', "can't"], 'Says it is still not enough', 'Say that the improvement is small compared with the growth.'),
            ]),
            crit('alt', 'Another approach', 'Names an alternative.', 30, [
              K.any('approx', ['approximate', 'heuristic', 'greedy', 'good enough', 'shortcut', 'smaller', 'dynamic programming'], 'Names another approach', 'Name an approach such as an approximate or heuristic method.'),
              K.words('len', 60, 'Meets the length (60+ words)', 'Add more detail to reach about 60 words.'),
            ]),
          ],
        },
      }),
    ],
  },
};
