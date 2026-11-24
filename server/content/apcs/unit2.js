import { mc, tf } from '../builder.js';

export default {
  summary: 'Work with objects that Java already provides: strings, the Math class and references, and learn to read a method call.',
  modules: {
    3: {
      summary: 'Strings and their methods.',
      sessions: [{
        t: 'Strings',
        s: 'Indexes, length, substring, indexOf, equals, compareTo, concatenation and immutability.',
        md: `
## String basics

A \`String\` is an **object** that holds a sequence of characters. The characters are numbered from **index 0**. For \`String s = "computer";\`:

| index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| char | c | o | m | p | u | t | e | r |

## Key methods

| Call | Result for \`s\` | Meaning |
|---|---|---|
| \`s.length()\` | \`8\` | number of characters |
| \`s.substring(3, 6)\` | \`"put"\` | characters from index 3 up to **but not including** 6 |
| \`s.substring(5)\` | \`"ter"\` | from index 5 to the end |
| \`s.indexOf("t")\` | \`5\` | first position of the text, or **-1** if it is not found |
| \`s.charAt(1)\` | \`'o'\` | the character at index 1 |
| \`s.equals("computer")\` | \`true\` | whether the contents are the same |
| \`s.compareTo(t)\` | negative, 0 or positive | alphabetical order |

Calling \`charAt\` or \`substring\` with an index outside the string throws a **StringIndexOutOfBoundsException**. The last valid index is \`length() - 1\`.

## Equality and immutability

- Use \`equals\`, not \`==\`, to compare the **contents** of two strings. \`==\` compares whether two variables refer to the **same object**.
- A \`String\` is **immutable**: methods such as \`substring\` or \`toUpperCase\` return a **new** string and leave the original unchanged. To keep the result, assign it.
- \`compareTo\` returns a negative number if the first string comes before the second, zero if they are equal, and a positive number if it comes after: \`"apple".compareTo("banana")\` is negative.

## Concatenation

\`+\` joins strings. It is evaluated from left to right, so \`1 + 2 + "3"\` is \`"33"\` (the 1 + 2 is added first), but \`"3" + 1 + 2\` is \`"312"\`.
`,
        q: [
          mc('What is the value of "computer".substring(3, 6)?', '"put"', 'The substring starts at index 3 (p) and stops before index 6, giving p, u, t.', [
            ['"pute"', 'The ending index is not included, so the character at index 6 (e) is left out.'],
            ['"mput"', 'The substring starts at index 3, not 2.'],
            ['"omp"', 'This is the substring from index 1 to 4.'],
          ]),
          mc('Which expression is true when String s = "computer"; ?', 's.indexOf("t") == 5', '"t" is the sixth character, at index 5.', [
            ['s.indexOf("t") == 6', 'Indexes start at 0, so the sixth character is at index 5.'],
            ['s.length() == 7', 'The word has 8 characters, so the length is 8.'],
            ['s.indexOf("z") == 0', 'If the text is not found, indexOf returns -1, not 0.'],
          ]),
        ],
      }],
    },
    4: {
      summary: 'The Math class, random numbers, references and null.',
      sessions: [{
        t: 'Math, references and null',
        s: 'Static Math methods, random numbers in a range, object references and aliasing.',
        md: `
## The Math class

The \`Math\` class has **static** methods that you call using the class name, without creating an object:

| Call | Result |
|---|---|
| \`Math.abs(-7)\` | \`7\` |
| \`Math.pow(3, 2)\` | \`9.0\` (always a \`double\`) |
| \`Math.sqrt(16)\` | \`4.0\` |
| \`Math.random()\` | a \`double\` from 0.0 up to, but not including, 1.0 |

### Random integers in a range
To get a random integer from **low** to **high** (inclusive), use

\`\`\`
(int) (Math.random() * (high - low + 1)) + low
\`\`\`

For example, \`(int) (Math.random() * 6) + 1\` gives 1, 2, 3, 4, 5 or 6, like a die. \`(int) (Math.random() * 10) + 5\` gives 5 to 14.

## Object references

A variable of a class type does not contain the object; it holds a **reference** to it. If you write \`Point a = new Point(1, 2); Point b = a;\`, both variables refer to the **same** object (they are **aliases**), so a change made through one is visible through the other.

A reference can also be **null**, meaning "no object". Calling a method on a null reference throws a **NullPointerException**:

\`\`\`
String s = null;
int n = s.length();   // NullPointerException at run time
\`\`\`

An object is created with \`new\` and a **constructor**, for example \`new Scanner(System.in)\` or \`new Point(1, 2)\`. Methods are then called on the object with dot notation: \`object.method(arguments)\`.
`,
        q: [
          mc('Which expression gives a random integer from 5 to 14, inclusive?', '(int) (Math.random() * 10) + 5', 'Math.random() * 10 is in [0, 10), the cast gives 0 to 9, and adding 5 shifts it to 5 to 14.', [
            ['(int) (Math.random() * 14) + 5', 'This gives 5 to 18.'],
            ['(int) (Math.random() * 5) + 10', 'This gives 10 to 14.'],
            ['(int) (Math.random() * 10 + 1)', 'This gives 1 to 10; the shift of 5 is missing.'],
          ]),
          mc('What happens when String s = null; int n = s.length(); is executed?', 'A NullPointerException is thrown', 'A null reference has no object, so a method cannot be called on it.', [
            ['n is set to 0', 'There is no empty string; the variable refers to nothing.'],
            ['The code does not compile', 'The code compiles; the error is detected only at run time.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Using objects',
    tasks: [
      mc('What is printed by System.out.println(1 + 2 + "3" + 4 + 5); ?', '3345', '1 + 2 is 3 (addition); then "3" turns the rest into concatenation: "33", "334", "3345".', [
        ['12345', 'This would happen only if the expression started with a String; here 1 + 2 is evaluated as a sum first.'],
        ['339', 'The 4 and 5 are joined to the text one at a time (left to right); they are not added together first.'],
        ['15', 'Once a String is involved, + joins text rather than adding.'],
      ]),
      mc('What is the value of "hello".substring(1, 3)?', '"el"', 'It takes the characters at indexes 1 and 2.', [
        ['"ell"', 'The end index is not included, so index 3 is left out.'],
        ['"he"', 'This is the substring from index 0 to 2.'],
        ['"hel"', 'This is the substring from index 0 to 3.'],
      ]),
      mc('What is the value of "Hello".indexOf("lo")?', '3', 'The text "lo" begins at index 3 (H = 0, e = 1, l = 2, l = 3, o = 4).', [
        ['2', 'This is the index of the first "l", but the text searched for is "lo".'],
        ['4', 'This is the index of the "o", the last character of "lo".'],
        ['-1', 'The text is found, so the result is not -1.'],
      ]),
      mc('What is printed by System.out.println(Math.pow(3, 2)); ?', '9.0', 'Math.pow always returns a double.', [
        ['9', 'The return type is double, so the value prints with a decimal point.'],
        ['6', 'This is 3 * 2, not 3 squared.'],
        ['8.0', 'This is 2 cubed, with the arguments reversed.'],
      ]),
      mc('Which statement about "apple".compareTo("banana") is correct?', 'It returns a negative number', 'compareTo returns a negative value if the first string comes first alphabetically.', [
        ['It returns a positive number', '"apple" comes before "banana", so the result is not positive.'],
        ['It returns 0', 'It returns 0 only if the strings are equal.'],
        ['It returns true', 'compareTo returns an int, not a boolean.'],
      ]),
      mc('What does the following expression produce? (int) (Math.random() * 6) + 1', 'A random integer from 1 to 6', 'Math.random() * 6 is in [0, 6), the cast gives 0 to 5, and adding 1 gives 1 to 6.', [
        ['A random integer from 0 to 6', 'The smallest value is 1, because the cast gives at least 0 and 1 is then added.'],
        ['A random integer from 1 to 7', 'The maximum is 6, not 7.'],
        ['A random double from 1 to 6', 'The cast to int removes the decimal part.'],
      ]),
      tf('A String object can be changed in place by calling a method such as toUpperCase().', false, 'Strings are immutable.', 'Correct. toUpperCase returns a new String and leaves the original unchanged, so you must assign the result to keep it.'),
    ],
  },
};
