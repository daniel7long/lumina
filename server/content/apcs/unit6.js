import { mc, tf } from '../builder.js';

export default {
  summary: 'Store collections of data in arrays, ArrayLists and two-dimensional arrays, and write the standard algorithms that process them.',
  modules: {
    11: {
      summary: 'One-dimensional arrays and their algorithms.',
      sessions: [{
        t: 'Arrays',
        s: 'Creating and traversing arrays, default values, the enhanced for loop and standard algorithms.',
        md: `
## Creating arrays

An **array** holds a fixed number of values of the same type, indexed from 0.

\`\`\`
int[] a = {3, 1, 4, 1, 5};      // initializer list
int[] b = new int[3];           // three elements, all 0
String[] names = new String[2]; // two elements, both null
\`\`\`

- \`a.length\` is the number of elements (a field, with **no parentheses**). The valid indexes are 0 to \`a.length - 1\`.
- **Default values:** 0 for \`int\`, 0.0 for \`double\`, \`false\` for \`boolean\`, \`null\` for object types.
- The size cannot change after the array is created.
- Using an index outside the range, such as \`a[5]\` or \`a[-1]\`, throws an **ArrayIndexOutOfBoundsException**.

## Traversal

\`\`\`
int sum = 0;
for (int i = 0; i < a.length; i++) {
    sum += a[i];
}
\`\`\`

With the array above, \`sum\` is **14**. The **enhanced for loop** visits each value without an index:

\`\`\`
for (int value : a) {
    sum += value;
}
\`\`\`

The loop variable is a **copy** of each element, so assigning to it does **not** change the array (for primitive types). Use an indexed loop to modify elements: \`a[i] = a[i] * 2;\`.

## Standard algorithms

- **Maximum:** start with \`max = a[0]\`, then compare each later element and update when it is larger.
- **Count:** increase a counter when an element meets a condition.
- **Search:** loop until the value is found, then stop.

\`\`\`
int max = a[0];
for (int i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}
\`\`\`
`,
        q: [
          mc('What is the value of a[a.length - 1] for int[] a = {3, 1, 4, 1, 5}; ?', '5', 'The last valid index is length − 1 = 4, and a[4] is 5.', [
            ['1', 'This is the element at index 3 or at index 1.'],
            ['4', 'This is the last index, not the value stored at it.'],
            ['An ArrayIndexOutOfBoundsException', 'a.length - 1 is the last valid index, so no exception occurs.'],
          ]),
          mc('What is stored in names[0] after String[] names = new String[2]; ?', 'null', 'Elements of an object array start as null.', [
            ['""', 'An empty string is an object; the array initially holds no objects.'],
            ['"0"', 'Only numeric arrays are filled with zeros.'],
            ['Nothing; the element does not exist yet', 'The array has two elements, both set to null.'],
          ]),
        ],
      }],
    },
    12: {
      summary: 'ArrayList methods and traversal of 2D arrays.',
      sessions: [{
        t: 'ArrayList and two-dimensional arrays',
        s: 'add, get, set, remove, size, removal during traversal and rows and columns of a 2D array.',
        md: `
## ArrayList

An **ArrayList** is a resizable list of objects. Use a wrapper class for primitives: \`ArrayList<Integer>\`.

| Method | Effect |
|---|---|
| \`add(x)\` | adds at the end |
| \`add(i, x)\` | inserts at index i, shifting later elements right |
| \`get(i)\` | returns the element at index i |
| \`set(i, x)\` | replaces the element at index i |
| \`remove(i)\` | removes the element at index i and shifts later elements left |
| \`size()\` | the number of elements (a method, with parentheses) |

\`\`\`
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(5);  list.add(3);  list.add(8);   // [5, 3, 8]
list.remove(1);                            // [5, 8]
list.add(1, 9);                            // [5, 9, 8]
list.set(0, 7);                            // [7, 9, 8]
\`\`\`

### Removing while traversing
Removing an element shifts the rest left, so a forward loop **skips** the element that moves into the removed spot. Remove every 2 from \`[1, 2, 2, 3]\` with

\`\`\`
for (int i = 0; i < list.size(); i++) {
    if (list.get(i) == 2) list.remove(i);
}
\`\`\`

and the result is \`[1, 2, 3]\`: the second 2 slides into index 1 and is never tested. Fix it by looping **backwards**, or by not increasing \`i\` after a removal.

## Two-dimensional arrays

A 2D array is an array of arrays (rows):

\`\`\`
int[][] g = new int[3][4];   // 3 rows, 4 columns
\`\`\`

- \`g.length\` is the number of **rows** (3), and \`g[0].length\` is the number of **columns** (4).
- \`g[r][c]\` is the element in row r and column c.
- **Row-major traversal:** the outer loop goes through rows, the inner loop through columns, so every element is visited once (12 for this array).

\`\`\`
int total = 0;
for (int r = 0; r < g.length; r++) {
    for (int c = 0; c < g[r].length; c++) {
        total += g[r][c];
    }
}
\`\`\`
`,
        q: [
          mc('What does the list contain after: add(5); add(3); add(8); remove(1); ?', '[5, 8]', 'remove(1) removes the element at index 1, which is 3.', [
            ['[3, 8]', 'This would be the result of removing the element at index 0.'],
            ['[5, 3]', 'This would be the result of removing the element at index 2.'],
            ['[8]', 'Only one element is removed.'],
          ]),
          mc('For int[][] g = new int[3][4];, what are g.length and g[0].length?', '3 and 4', 'g.length is the number of rows and g[0].length is the number of columns.', [
            ['4 and 3', 'The numbers of rows and columns were swapped.'],
            ['12 and 12', 'The total number of elements is 12, but length gives the number of rows or columns.'],
            ['3 and 3', 'The first index is the number of rows, and the second dimension is 4.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 6 assessment · Arrays and ArrayList',
    tasks: [
      mc('What is the value of sum after the loop? int[] a = {3, 1, 4, 1, 5}; int sum = 0; for (int i = 0; i < a.length; i++) sum += a[i];', '14', '3 + 1 + 4 + 1 + 5 = 14.', [
        ['13', 'One of the elements was left out of the sum.'],
        ['5', 'This is the last element, not the sum.'],
        ['4', 'This is the largest index.'],
      ]),
      mc('What happens when a[5] is evaluated for an array a that has 5 elements?', 'An ArrayIndexOutOfBoundsException is thrown', 'The valid indexes are 0 to 4.', [
        ['It returns the last element', 'The last element is at index 4.'],
        ['It returns 0', 'Java checks the index and does not return a default value.'],
        ['A compile-time error', 'The compiler does not check index values; the exception happens at run time.'],
      ]),
      mc('What does the list contain after this code? list = [1, 2, 2, 3]; for (int i = 0; i < list.size(); i++) { if (list.get(i) == 2) list.remove(i); }', '[1, 2, 3]', 'After the first 2 is removed, the second 2 moves to the index that has just been tested, so it is skipped.', [
        ['[1, 3]', 'The shifting of elements makes the loop skip one of the 2s.'],
        ['[1, 2, 2, 3]', 'The first 2 is removed.'],
        ['[1, 2]', 'The element 3 is never removed, because the condition is not true for it.'],
      ]),
      mc('What is the array after: int[] a = {1, 2, 3}; for (int x : a) { x = x * 2; } ?', '{1, 2, 3}', 'The loop variable x is a copy of each element, so the array is not changed.', [
        ['{2, 4, 6}', 'Assigning to the enhanced for loop variable does not change the elements of the array.'],
        ['{0, 0, 0}', 'The elements are not reset.'],
        ['A compile-time error', 'The code compiles; it just has no effect on the array.'],
      ]),
      mc('What is the number of times the inner statement runs? int[][] g = new int[3][4]; for (int r = 0; r < g.length; r++) for (int c = 0; c < g[r].length; c++) count++;', '12', '3 rows, each with 4 columns.', [
        ['7', 'The numbers of rows and columns are multiplied, not added.'],
        ['3', 'This is the number of rows.'],
        ['4', 'This is the number of columns.'],
      ]),
      mc('What does the list contain after: ArrayList<Integer> list = [10, 20, 30]; list.remove(Integer.valueOf(10)); ?', '[20, 30]', 'remove with an Integer object removes the first element equal to that value.', [
        ['[10, 30]', 'This would be the result of removing the element at index 1.'],
        ['[10, 20]', 'This would be the result of removing the last element.'],
        ['[10, 20, 30]', 'The value 10 is in the list and is removed.'],
      ]),
      tf('The size of an array can be changed after it is created, by assigning a larger value to its length.', false, 'An array has a fixed size.', 'Correct. length is a read-only property. To store more values you must create a new array, or use an ArrayList, which can grow.'),
    ],
  },
};
