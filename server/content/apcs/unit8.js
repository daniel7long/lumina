import { mc, tf } from '../builder.js';

export default {
  summary: 'Solve problems by letting a method call itself, then compare the standard ways to find a value in a list and to put a list in order.',
  modules: {
    15: {
      summary: 'Recursive methods, base cases and tracing.',
      sessions: [{
        t: 'Recursion',
        s: 'The base case and the recursive case, tracing recursive calls and what happens without a base case.',
        md: `
## Recursive methods

A **recursive** method calls itself on a **smaller version** of the problem. It needs:

1. A **base case**: an input answered directly, with no further call.
2. A **recursive case**: a call on a smaller input that moves toward the base case.

\`\`\`
public static int fact(int n) {
    if (n <= 1) {
        return 1;                 // base case
    }
    return n * fact(n - 1);       // recursive case
}
\`\`\`

\`fact(5)\` is 5 × fact(4) = 5 × 4 × 3 × 2 × 1 = **120**.

## Tracing a recursive method

Expand the calls, then substitute the returned values back from the base case:

\`\`\`
public static int mystery(int n) {
    if (n <= 0) {
        return 0;
    }
    return n + mystery(n - 2);
}
\`\`\`

\`mystery(7)\` = 7 + mystery(5) = 7 + 5 + mystery(3) = 7 + 5 + 3 + mystery(1) = 7 + 5 + 3 + 1 + mystery(−1) = 7 + 5 + 3 + 1 + 0 = **16**.

Another example: the sum of the digits of a number.

\`\`\`
public static int sumDigits(int n) {
    if (n < 10) {
        return n;
    }
    return n % 10 + sumDigits(n / 10);
}
\`\`\`

\`sumDigits(1234)\` = 4 + sumDigits(123) = 4 + 3 + 2 + 1 = **10**.

## What can go wrong

If a method has no base case, or the recursive call does not move toward it, the calls never stop. Each call uses memory on the **call stack**, which eventually runs out and throws a **StackOverflowError**.

Every recursive method can also be written with a loop; recursion is chosen when it expresses the problem more clearly (for example, working on a smaller piece of a list).
`,
        q: [
          mc('What does the method fact(5) return, using the definition above?', '120', '5 × 4 × 3 × 2 × 1 = 120.', [
            ['15', 'This is the sum 5 + 4 + 3 + 2 + 1, not the product.'],
            ['24', 'This is fact(4); the recursion starts at 5.'],
            ['25', 'The method multiplies by the result of the recursive call, not by n again.'],
          ]),
          mc('What happens when a recursive method has no base case?', 'A StackOverflowError occurs', 'The calls never stop and use up the call stack.', [
            ['It returns 0', 'There is no value to return, because the calls never finish.'],
            ['It loops forever without using more memory', 'Each call needs memory on the call stack, which eventually runs out.'],
            ['The compiler reports an error', 'The compiler cannot detect a missing base case; the problem shows up at run time.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Linear search, binary search and the basic sorts.',
      sessions: [{
        t: 'Searching and sorting',
        s: 'Linear and binary search, selection sort, insertion sort and merge sort.',
        md: `
## Searching

- **Linear (sequential) search** checks each element in turn. It works on **any** list and, in the worst case, checks all **n** elements.
- **Binary search** works only on a **sorted** list. It checks the middle element and discards the half that cannot contain the target, repeating on the remaining half. Each step halves the range, so a list of 1000 elements needs at most **10** checks.

Binary search for 23 in \`[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\` (indexes 0 to 9):

1. low = 0, high = 9: mid = 4, value 16 is smaller than 23, so low = 5.
2. low = 5, high = 9: mid = 7, value 56 is larger, so high = 6.
3. low = 5, high = 6: mid = 5, value 23 is found. **3 checks**, at index 5.

## Sorting

**Selection sort:** repeatedly find the smallest remaining element and swap it into the next position. For \`[5, 3, 8, 1, 4]\`, the first pass finds 1 and swaps it with 5: \`[1, 3, 8, 5, 4]\`.

**Insertion sort:** take the next element and insert it into its correct place among the already sorted elements at the front, shifting larger ones right. For the same list: after 3 is inserted, \`[3, 5, 8, 1, 4]\`; after 8, the same; after 1, \`[1, 3, 5, 8, 4]\`.

**Merge sort:** a recursive sort. Split the list in half, sort each half recursively, and **merge** the two sorted halves. It takes time proportional to n log n, which is much faster than the n² of selection and insertion sort for large lists, but it uses extra memory to merge.

| Algorithm | Needs sorted data? | Idea |
|---|---|---|
| Linear search | no | check each element |
| Binary search | **yes** | halve the range each time |
| Selection sort | no | move the minimum to the front |
| Insertion sort | no | insert each element into the sorted part |
| Merge sort | no | divide, sort, merge |
`,
        q: [
          mc('Binary search is used to find a value in a sorted array of 1000 elements. What is the maximum number of elements that must be checked?', '10', 'Each check halves the remaining range; 1000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1, which takes at most 10 checks.', [
            ['1000', 'This is the worst case for a linear search.'],
            ['500', 'Binary search halves the range at each step, so it needs far fewer checks.'],
            ['100', 'The number of checks grows with the logarithm of the size, not a fraction of it.'],
          ]),
          mc('What does the array [5, 3, 8, 1, 4] look like after the first pass of selection sort?', '[1, 3, 8, 5, 4]', 'The smallest value, 1, is swapped with the first element, 5.', [
            ['[1, 5, 3, 8, 4]', 'Selection sort swaps the minimum with the first element; it does not shift the other elements.'],
            ['[3, 5, 8, 1, 4]', 'This is the array after the second step of insertion sort.'],
            ['[1, 3, 4, 5, 8]', 'This is the fully sorted array, which needs more passes.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Recursion, searching and sorting',
    tasks: [
      mc('What does mystery(7) return? public static int mystery(int n) { if (n <= 0) return 0; return n + mystery(n - 2); }', '16', '7 + 5 + 3 + 1 + mystery(−1), and mystery(−1) is 0.', [
        ['28', 'This is the sum 7 + 6 + 5 + 4 + 3 + 2 + 1; the call reduces n by 2, not by 1.'],
        ['15', 'The value 1 reached by the chain 7, 5, 3, 1 is included in the sum.'],
        ['0', 'The base case returns 0 only for the last call; the other values are added to it.'],
      ]),
      mc('What does sumDigits(1234) return, using the method in the lesson?', '10', '4 + 3 + 2 + 1 = 10.', [
        ['1234', 'The method returns a sum of the digits.'],
        ['4', 'This is the last digit, which is only the first term of the sum.'],
        ['24', 'This is the product of the digits, not their sum.'],
      ]),
      mc('A binary search for 23 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] (indexes 0 to 9) starts with mid = (0 + 9) / 2. How many elements are checked before 23 is found?', '3', 'The elements 16, 56 and 23 are checked.', [
        ['6', 'This is the number of elements that a linear search checks, since 23 is at index 5.'],
        ['2', '23 is found at the third check.'],
        ['10', 'Binary search does not need to check every element.'],
      ]),
      mc('What does [5, 3, 8, 1, 4] look like after the third element has been inserted into the sorted part by insertion sort (after processing the elements 3, 8 and 1)?', '[1, 3, 5, 8, 4]', 'The sorted front part contains 1, 3, 5, 8 and the last element, 4, has not been processed.', [
        ['[1, 3, 8, 5, 4]', 'This is the array after the first pass of selection sort.'],
        ['[3, 5, 8, 1, 4]', 'This is the array after only the first element has been inserted.'],
        ['[1, 3, 4, 5, 8]', 'This is the fully sorted array; the last element still needs to be inserted.'],
      ]),
      tf('A binary search can be used on an array that is not sorted.', false, 'Binary search relies on the data being in order.', 'Correct. The decision to discard half of the range is valid only if the values are sorted.'),
      mc('Which statement about merge sort is true?', 'It splits the list, sorts each half recursively and merges the sorted halves', 'This divide-and-conquer approach is why it is faster than selection sort for large lists.', [
        ['It swaps the smallest element into the first position on each pass', 'That describes selection sort.'],
        ['It requires that the list is already sorted', 'A sort puts an unsorted list in order; it does not need sorted input.'],
        ['It checks every element in order until the target is found', 'That describes linear search.'],
      ]),
      mc('A recursive method calls itself with the same argument it received. What is the most likely result?', 'A StackOverflowError', 'The call does not move toward a base case, so the calls never end.', [
        ['The method returns 0', 'It never reaches a return statement.'],
        ['The compiler reports an error', 'The code is valid Java; the problem happens at run time.'],
        ['The method runs once', 'The recursive call is made every time the method runs.'],
      ]),
    ],
  },
};
