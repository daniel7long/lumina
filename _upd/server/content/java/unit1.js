import { mc, tf } from '../builder.js';

export default {
  summary: 'Write, compile, run, trace and debug short Java programs that use variables, methods, loops, arrays and decisions.',
  modules: {
    1: {
      summary: 'See how Java source code becomes a running program and what the Java environment provides.',
      sessions: [
        {
          t: 'Programs, languages and the Java compiler',
          s: 'How Java code is translated and run.',
          md: `
## From source code to a running program

A **computer program** is a list of instructions. A **programming language** gives the rules for writing them. Java is a **high-level language**: it is readable by people, but a computer's processor cannot run it directly.

A **compiler** translates your **source code** into another form before the program runs. Java works in two steps:

1. The **compiler** (\`javac\`) translates source code in a \`.java\` file into **bytecode** in a \`.class\` file.
2. The **Java Virtual Machine (JVM)** reads the bytecode and runs it.

\`\`\`
Hello.java  --javac-->  Hello.class  --java (JVM)-->  program runs
\`\`\`

Because bytecode is the same on every machine, the same \`.class\` file can run anywhere there is a JVM. Java programmers call this "write once, run anywhere".

### Why a compiler helps
The compiler checks your code before it runs. It reports many mistakes, such as a missing semicolon or a misspelled word, so you find them early.

> **Compare:** Python uses an **interpreter** that runs each statement as it reads it. Java compiles first and runs afterwards.
`,
          q: [
            mc('What does the Java compiler (javac) produce from a .java file?', 'Bytecode in a .class file', 'javac translates the source code into bytecode, which the JVM then runs.', [
              ['The final output of the program', 'The program\'s output only appears when the JVM runs the bytecode.'],
              ['A copy of the source code with errors fixed', 'The compiler reports errors but does not fix them. It produces bytecode.'],
            ]),
            mc('Which step finds many syntax mistakes before the program starts running?', 'Compiling the source code', 'The compiler checks the code while translating it and reports errors such as a missing semicolon.', [
              ['Running the bytecode on the JVM', 'By then compilation has already succeeded. Compile errors are found earlier.'],
              ['Saving the file', 'Saving does not check the code.'],
            ]),
          ],
        },
        {
          t: 'The Java programming environment',
          s: 'The JDK, the JVM, an editor or IDE and your first program.',
          md: `
## Components of the Java environment

| Component | What it is |
| --- | --- |
| **JDK** (Java Development Kit) | The tools you need to write Java: the compiler \`javac\`, the \`java\` launcher and libraries |
| **JVM** (Java Virtual Machine) | Runs bytecode |
| **Editor or IDE** | Where you write code. An IDE adds a compile button, error highlighting and a debugger |
| **Terminal** | Where you can type the commands |

## Your first program
\`\`\`java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Lumina");
    }
}
\`\`\`

- Every Java program lives in a **class**.
- Execution starts at the \`main\` method.
- \`System.out.println\` prints a line of text.
- The file name must match the public class name: \`Hello.java\`.

### Compile and run
\`\`\`
javac Hello.java      (creates Hello.class)
java Hello            (runs it, prints Hello, Lumina)
\`\`\`

> **Watch out:** you run \`java Hello\`, not \`java Hello.class\`.
`,
          q: [
            mc('A file contains the code "public class Greeter { … }". What must the file be named?', 'Greeter.java', 'A public class must be stored in a file with the same name plus .java.', [
              ['greeter.txt', 'Java source files end in .java, and the name must match the class exactly.'],
              ['Main.java', 'The file name must match the public class (Greeter), not the main method.'],
            ]),
            mc('Which command runs the compiled program Hello?', 'java Hello', 'The java launcher starts the JVM and runs the Hello class.', [
              ['javac Hello', 'javac is the compiler, and it needs the .java file name.'],
              ['compile Hello.class', 'There is no such command. Use javac to compile and java to run.'],
            ]),
          ],
        },
      ],
    },
    2: {
      summary: 'Evaluate expressions and write and use your own methods.',
      sessions: [
        {
          t: 'Variables, types and expressions',
          s: 'Declare variables, evaluate expressions and avoid integer-division surprises.',
          md: `
## Variables and types

Java is **statically typed**: you declare each variable's type.

\`\`\`java
int count = 7;           // whole numbers
double price = 2.5;      // decimal numbers
boolean done = false;    // true or false
String name = "Ann";     // text
\`\`\`

## Evaluating expressions
\`\`\`java
int a = 7;
int b = 2;
System.out.println(a / b);      // 3     (int divided by int gives an int)
System.out.println(a % b);      // 1     (remainder)
System.out.println(a / 2.0);    // 3.5   (a double is involved)
System.out.println((double) a / b);   // 3.5  (cast)
\`\`\`

**Integer division** drops the decimal part. If either side is a \`double\`, you get a decimal result.

### Joining text
The \`+\` operator joins text, and it works left to right.
\`\`\`java
System.out.println(1 + 2 + "x" + 1 + 2);   // 3x12
\`\`\`
First \`1 + 2\` is 3, then \`3 + "x"\` makes the text "3x", and the remaining numbers are joined as text.

> **Tip:** to get a decimal answer from two ints, make one of them a double before dividing.
`,
          q: [
            mc('What is printed?\n\nint a = 7;\nint b = 2;\nSystem.out.println(a / b);', '3', 'Both values are ints, so the division drops the decimal part: 7 / 2 = 3.', [
              ['3.5', 'That would need a double, for example 7 / 2.0.'],
              ['4', 'Integer division truncates (cuts off) the decimal part. It does not round.'],
            ]),
            mc('What is printed?\n\nSystem.out.println(1 + 2 + "x" + 1 + 2);', '3x12', 'Left to right: 1 + 2 = 3, then "3" + "x" = "3x", and the later numbers are joined as text.', [
              ['12x12', 'The first two numbers are added before any text appears.'],
              ['3x3', 'After the text appears, 1 and 2 are joined as separate pieces of text, not added.'],
            ]),
          ],
        },
        {
          t: 'Writing and using methods',
          s: 'Define your own methods and call library methods.',
          md: `
## Methods

A **method** is a named block of code. It can take **parameters** and **return** a value. Its **return type** is written before its name (\`void\` means it returns nothing).

\`\`\`java
public class Calc {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println(square(5));            // 25
        System.out.println(square(square(2)));    // 16
    }
}
\`\`\`

\`static\` means you can call the method without creating an object. For now, write \`public static\` in front of your methods.

### Library methods
Java ships with many ready-made methods.

\`\`\`java
Math.sqrt(16.0)      // 4.0
Math.max(3, 8)       // 8
Math.abs(-5)         // 5
"hello".length()     // 5
"hello".charAt(1)    // 'e'
\`\`\`

Your own methods together form a small **library** you can reuse in many programs.

> **Rule:** the number, order and types of the arguments you pass must match the parameters.
`,
          q: [
            mc('Given the method below, what does square(square(2)) return?\n\npublic static int square(int n) {\n    return n * n;\n}', '16', 'square(2) is 4, and square(4) is 16.', [
              ['8', 'That would be 2 × 2 × 2. The method squares the result of the inner call again: 4 × 4.'],
              ['4', 'That is only the inner call, square(2).'],
            ]),
            mc('What is the return type of this method?\n\npublic static double average(int a, int b)', 'double', 'The type written before the method name is its return type.', [
              ['int', 'int is the type of the parameters, not the return value.'],
              ['void', 'void would mean no value is returned.'],
            ]),
          ],
        },
      ],
    },
    3: {
      summary: 'Repeat steps with loops and store sequences of values in arrays.',
      sessions: [
        {
          t: 'Loops: for and while',
          s: 'Express a repeating algorithm with a loop and trace it.',
          md: `
## Repeating with loops

### for loop
Use it when you know how many times to repeat. It has three parts: start, condition and update.

\`\`\`java
int sum = 0;
for (int i = 1; i < 5; i++) {
    sum += i;
}
System.out.println(sum);    // 10  (1 + 2 + 3 + 4)
\`\`\`

\`i++\` adds 1 to \`i\`. The loop stops when \`i < 5\` becomes false, so the values of \`i\` are 1, 2, 3, 4.

### while loop
Use it when you repeat until something changes.

\`\`\`java
int n = 3;
while (n > 0) {
    System.out.print(n + " ");
    n--;
}
// prints: 3 2 1
\`\`\`

### Trace an iterative algorithm
| Pass | i | sum after |
| --- | --- | --- |
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |

> **Tip:** to identify a loop in a problem, look for an action that repeats ("for each…", "until…").
`,
          q: [
            mc('How many times does the body of this loop run?\n\nfor (int i = 0; i < 5; i++) { … }', '5', 'i takes the values 0, 1, 2, 3, 4, and the loop stops when i reaches 5.', [
              ['4', 'i starts at 0, so there are five values: 0, 1, 2, 3, 4.'],
              ['6', 'The condition i < 5 stops the loop before i = 5.'],
            ]),
            mc('What is printed?\n\nint n = 3;\nwhile (n > 0) {\n    System.out.print(n + " ");\n    n--;\n}', '3 2 1 ', 'n is printed and then reduced each pass, until n is 0 and the condition fails.', [
              ['1 2 3 ', 'n counts down, so the numbers appear in reverse order.'],
              ['3 2 1 0 ', 'When n is 0 the condition n > 0 is false, so 0 is never printed.'],
            ]),
          ],
        },
        {
          t: 'Creating and accessing array elements',
          s: 'Store values in an array and loop over them.',
          md: `
## Arrays

An **array** stores a fixed number of values of the same type. The first index is **0**.

\`\`\`java
int[] a = {2, 4, 6};          // create with values
int[] b = new int[5];         // five ints, all start at 0
System.out.println(a[0]);     // 2
System.out.println(a.length); // 3  (no brackets: length is a field)
a[1] = 40;                    // change an element
\`\`\`

The last valid index is \`a.length - 1\`. Using an index outside the array throws an **ArrayIndexOutOfBoundsException** at run time.

### Loop over an array
\`\`\`java
int s = 0;
for (int i = 0; i < a.length; i++) {
    s += a[i] * i;
}
\`\`\`
For \`{2, 4, 6}\`: 2×0 + 4×1 + 6×2 = **16**.

### Enhanced for loop
When you do not need the index:
\`\`\`java
int total = 0;
for (int v : a) {
    total += v;
}
\`\`\`

> **Watch out:** \`i <= a.length\` is a common mistake. It runs one step too far.
`,
          q: [
            mc('An array has 6 elements. What is the last valid index?', '5', 'Indexes run from 0 to length − 1, so the last is 5.', [
              ['6', 'Index 6 is outside the array and would cause an exception.'],
              ['1', 'Index 1 is the second element.'],
            ]),
            mc('What is printed?\n\nint[] a = {2, 4, 6};\nint s = 0;\nfor (int i = 0; i < a.length; i++) {\n    s += a[i] * i;\n}\nSystem.out.println(s);', '16', '2×0 + 4×1 + 6×2 = 0 + 4 + 12 = 16.', [
              ['12', 'That is just the sum of the elements. Each element is also multiplied by its index.'],
              ['28', 'Check the multiplication by i, which is 0, 1 and 2.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Combine relational and logical operators and choose between actions.',
      sessions: [
        {
          t: 'Boolean expressions',
          s: 'Form and evaluate expressions that are true or false.',
          md: `
## Boolean-valued expressions

A **boolean** value is \`true\` or \`false\`. Relational operators compare values:

| Operator | Meaning |
| --- | --- |
| \`==\`  \`!=\` | equal, not equal |
| \`<\`  \`>\`  \`<=\`  \`>=\` | ordering |

Logical operators combine booleans:
- \`&&\` (and): true only if both sides are true
- \`||\` (or): true if at least one side is true
- \`!\` (not): reverses the value

\`\`\`java
int x = 7;
System.out.println(x > 3 && x < 10);          // true
System.out.println((x > 3 && x < 10) || x == 0);   // true
System.out.println(!(5 > 3) || 2 > 4);        // false
\`\`\`

\`&&\` and \`||\` stop as soon as the answer is known (**short-circuit**). \`false && anything\` is \`false\` without evaluating the rest.

> **Tip:** evaluate each comparison first, write true or false under it, then combine.
`,
          q: [
            mc('With int x = 7, what is the value of (x > 3 && x < 10) || x == 0 ?', 'true', 'x > 3 && x < 10 is true, so the whole || expression is true.', [
              ['false', 'The left side is true (7 is between 3 and 10), and || needs only one true side.'],
              ['7', 'A boolean expression has the value true or false.'],
            ]),
            mc('What is the value of !(5 > 3) || 2 > 4 ?', 'false', '!(true) is false, and 2 > 4 is false. false || false is false.', [
              ['true', 'Both sides are false here: !(5 > 3) is false and 2 > 4 is false.'],
              ['5', 'A boolean expression evaluates to true or false.'],
            ]),
          ],
        },
        {
          t: 'if, else if, else and tracing',
          s: 'Choose one branch, trace conditions and compare text correctly.',
          md: `
## Decisions

\`\`\`java
int x = 12;
if (x > 20) {
    System.out.println("high");
} else if (x > 12) {
    System.out.println("medium");
} else {
    System.out.println("low");
}
\`\`\`

Java checks conditions from the top and runs only the first block whose condition is true. For x = 12, \`x > 20\` is false and \`x > 12\` is false (12 is not greater than 12), so the program prints \`low\`.

### Test the boundaries
Boundary values (12 here) are where mistakes happen. Trace them carefully.

| x | x > 20 | x > 12 | Output |
| --- | --- | --- | --- |
| 25 | true | n/a | high |
| 13 | false | true | medium |
| 12 | false | false | low |

### Comparing text
For strings, use \`.equals()\`, not \`==\`.
\`\`\`java
String a = "yes";
if (a.equals("yes")) { … }
\`\`\`
\`==\` on strings checks whether two variables refer to the *same object*, which can be false even when the characters match.

> **Remember:** always use braces \`{ }\`, even for one line. They prevent subtle mistakes.
`,
          q: [
            mc('What is printed when x = 12?\n\nif (x > 20) {\n    System.out.println("high");\n} else if (x > 12) {\n    System.out.println("medium");\n} else {\n    System.out.println("low");\n}', 'low', '12 is not greater than 20 and not greater than 12, so the else block runs.', [
              ['medium', '12 > 12 is false. A number is not greater than itself.'],
              ['high', '12 > 20 is false.'],
            ]),
            tf('In Java, == is the reliable way to check whether two strings contain the same characters.', false, 'This is wrong: == compares object references. Use .equals() to compare the characters.', 'Correct. Use .equals() for strings.'),
          ],
        },
      ],
    },
    5: {
      summary: 'Combine loops and decisions to process arrays and translate algorithms into code.',
      sessions: [
        {
          t: 'Loops and decisions over an array',
          s: 'Count, add and select items in an array.',
          md: `
## A common pattern

To process an array, **loop over the elements and use an if to decide what to do with each one**.

### Count elements that meet a condition
\`\`\`java
int[] a = {5, 12, 8, 20, 11};
int count = 0;
for (int v : a) {
    if (v > 10) {
        count++;
    }
}
System.out.println(count);    // 3  (12, 20 and 11)
\`\`\`

### Add up selected elements
\`\`\`java
int sum = 0;
for (int v : a) {
    if (v % 2 == 0) {      // even values only
        sum += v;
    }
}
System.out.println(sum);      // 40  (12 + 8 + 20)
\`\`\`

### Steps
1. Create a variable for the answer before the loop.
2. Loop over every element.
3. Test each element with \`if\`.
4. Update the variable inside the \`if\`.
5. Use the result after the loop.

> **Tip:** the variable that stores the result must be declared outside the loop, or it disappears after each pass.
`,
          q: [
            mc('How many elements of {5, 12, 8, 20, 11} are greater than 10?', '3', '12, 20 and 11 are greater than 10.', [
              ['2', 'There are three: 12, 20 and also 11.'],
              ['4', '5 and 8 are not greater than 10.'],
            ]),
            mc('What does this code compute?\n\nint s = 0;\nfor (int v : a) {\n    if (v % 2 == 0) {\n        s += v;\n    }\n}', 'The sum of the even elements', 'v % 2 == 0 is true only for even numbers, and only those are added.', [
              ['The number of even elements', 'It adds the values to s. A count would use s++.'],
              ['The sum of all elements', 'The if restricts the sum to even elements.'],
            ]),
          ],
        },
        {
          t: 'Translate an algorithm to Java and trace it',
          s: 'Turn a plain-language algorithm into code and follow it step by step.',
          md: `
## From words to code

**Algorithm:** find the position of the first negative number in a list, or report −1 if there is none.

1. Set \`index\` to −1.
2. Look at the elements one by one, from the start.
3. When an element is negative, remember its position and stop.
4. Report \`index\`.

\`\`\`java
int[] a = {4, 7, -2, 9, -5};
int index = -1;
for (int i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        index = i;
        break;            // leave the loop early
    }
}
System.out.println(index);    // 2
\`\`\`

### Trace
| i | a[i] | a[i] < 0 ? | index |
| --- | --- | --- | --- |
| 0 | 4 | false | -1 |
| 1 | 7 | false | -1 |
| 2 | -2 | true | 2 (then break) |

Without \`break\`, the loop would go on and finish with **4**, the position of the *last* negative number.

> **Tip:** the translation "first one" becomes \`break\`. "Last one" means no break.
`,
          q: [
            mc('What is printed?\n\nint[] a = {4, 7, -2, 9, -5};\nint index = -1;\nfor (int i = 0; i < a.length; i++) {\n    if (a[i] < 0) {\n        index = i;\n        break;\n    }\n}\nSystem.out.println(index);', '2', 'The first negative value, -2, is at index 2, and break stops the loop.', [
              ['4', 'That is the position of the last negative value. break stops the loop at the first.'],
              ['-2', 'The program prints the position (index), not the value.'],
            ]),
            mc('Which change makes the loop report the position of the LAST negative number?', 'Remove the break statement', 'Without break the loop keeps going and index is updated to the last negative position.', [
              ['Change a[i] < 0 to a[i] > 0', 'That would look for positive values.'],
              ['Start index at 0 instead of -1', 'The start value only matters when no negative number exists.'],
            ]),
          ],
        },
      ],
    },
    6: {
      summary: 'Recognize the kinds of errors you can meet and resolve compilation and syntax errors.',
      sessions: [
        {
          t: 'Types of errors',
          s: 'Tell syntax, runtime and logic errors apart.',
          md: `
## Three kinds of error

| Kind | When it appears | Example |
| --- | --- | --- |
| **Compile-time (syntax or type) error** | The compiler refuses to build your program | A missing semicolon, a misspelled variable, text assigned to an int |
| **Runtime error** | The program starts but stops with an exception | \`10 / 0\` with ints, or \`a[5]\` in an array of length 3 |
| **Logic error** | The program runs and finishes, but gives the wrong answer | Using \`<\` when you meant \`<=\` |

\`\`\`java
int total = 10 / 0;        // compiles, then throws ArithmeticException
int[] a = new int[3];
a[3] = 1;                  // ArrayIndexOutOfBoundsException
\`\`\`

### Which is hardest?
**Logic errors**. Java gives no message, so you only find them by testing and tracing. Compile-time errors are easiest because the compiler tells you the line.

> **Remember:** "the program ran" does not mean "the program is correct".
`,
          q: [
            mc('A program compiles and runs without any message, but prints 7 when the correct answer is 8. What type of error is this?', 'A logic error', 'The program does exactly what you wrote, but what you wrote is wrong.', [
              ['A compile-time error', 'The program compiled, so the compiler found no syntax or type problem.'],
              ['A runtime error', 'No exception stopped the program. It finished with a wrong result.'],
            ]),
            mc('Which statement causes a runtime error (ArithmeticException)?', 'int r = 10 / 0;', 'Dividing an int by zero compiles but fails when the program runs.', [
              ['int r = 10 / ;', 'This is a syntax error that the compiler would report.'],
              ['int r = "ten";', 'This is a type error that the compiler would report.'],
            ]),
          ],
        },
        {
          t: 'Reading compiler messages and fixing errors',
          s: 'Resolve compilation errors step by step and test your fix.',
          md: `
## Reading compiler messages

The compiler prints the file, the line number and a message. Common ones:

| Message | Usual cause | Fix |
| --- | --- | --- |
| \`';' expected\` | A missing semicolon | Add it at the end of the previous statement |
| \`cannot find symbol\` | A misspelled or undeclared variable or method | Check spelling and declarations |
| \`incompatible types: possible lossy conversion from double to int\` | \`int x = 3.5;\` | Use \`double x = 3.5;\` or cast with \`(int)\` |
| \`missing return statement\` | A method with a return type has a path with no return | Add the missing return |

### A good routine
1. Read the **first** error message first. Later errors are often caused by it.
2. Go to the line number. The mistake is often on that line or the one before.
3. Fix **one** error and compile again.
4. When it compiles, run it and **test**.

### Test with different inputs
- a normal value
- a boundary value (the edge of a condition)
- an extreme or empty value

> **Tip:** read the message carefully. It is usually telling you exactly what is wrong.
`,
          q: [
            mc('The compiler reports "cannot find symbol" for the variable total. What is the most likely cause?', 'total was misspelled or never declared', 'This message means the compiler does not know the name you used.', [
              ['The program divided by zero', 'Division by zero is a runtime error, not a compile message.'],
              ['The array index was too large', 'That is a runtime exception, shown after the program starts.'],
            ]),
            mc('The compiler reports "possible lossy conversion from double to int" for int x = 3.5;. Which fix is correct?', 'Declare the variable as double x = 3.5;', 'A double value needs a double variable, or an explicit cast if you really want to drop the decimals.', [
              ['Add a semicolon after 3.5', 'The semicolon is already there. The problem is the type.'],
              ['Rename x to total', 'The name is not the problem.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Programming with Java',
    minutes: 30,
    tasks: [
      mc('What is the role of the Java Virtual Machine (JVM)?', 'It runs the bytecode produced by the compiler', 'The compiler makes bytecode, and the JVM executes it.', [
        ['It translates source code into bytecode', 'That is the job of the compiler, javac.'],
        ['It is the editor in which you type the code', 'Editors and IDEs are separate tools.'],
      ]),
      mc('What is printed?\n\nSystem.out.println(10 / 4 + 10 % 4);', '4', '10 / 4 is 2 (integer division) and 10 % 4 is 2, so the sum is 4.', [
        ['4.5', 'Integer division gives 2, not 2.5.'],
        ['2', '10 % 4 is also 2, and the two results are added.'],
        ['3', 'Check the remainder: 10 % 4 is 2, not 1.'],
      ]),
      mc('What does this print?\n\npublic static int f(int a, int b) {\n    return a - b;\n}\n// in main:\nSystem.out.println(f(f(10, 3), 2));', '5', 'f(10, 3) is 7, then f(7, 2) is 5.', [
        ['9', 'Check the order: the inner call f(10, 3) is 7, and the outer call is 7 - 2.'],
        ['1', 'You subtracted in the wrong order. The inner call gives 7.'],
        ['7', 'That is the inner result only. The outer call subtracts 2.'],
      ]),
      mc('How many times does the loop body run?\n\nint c = 0;\nfor (int i = 1; i <= 10; i += 3) {\n    c++;\n}\nSystem.out.println(c);', '4', 'i takes the values 1, 4, 7 and 10, so the body runs 4 times.', [
        ['10', 'i increases by 3, not 1.'],
        ['3', 'i = 10 satisfies i <= 10, so it is the fourth pass.'],
        ['5', 'The values are 1, 4, 7 and 10. The next value, 13, fails the condition.'],
      ]),
      mc('What is printed?\n\nint[] a = {3, 1, 4};\na[1] = a[0] + a[2];\nSystem.out.println(a[0] + a[1] + a[2]);', '14', 'a[1] becomes 3 + 4 = 7, and 3 + 7 + 4 = 14.', [
        ['8', 'That is the sum of the original array. a[1] was changed to 7.'],
        ['10', 'That would be 3 + 3 + 4. a[1] is a[0] + a[2] = 7.'],
        ['7', 'That is just the new value of a[1]. The statement adds all three elements.'],
      ]),
      mc('With int n = 8, what is the value of n % 2 == 0 && n > 5 || n < 0 ?', 'true', 'n % 2 == 0 is true and n > 5 is true, so && gives true. true || … is true.', [
        ['false', 'Both conditions on the left of || are true (8 is even and greater than 5).'],
        ['8', 'Boolean expressions give true or false.'],
      ]),
      mc('How many strings in {"cat", "horse", "dog", "tiger"} have more than 3 letters, using this code?\n\nint c = 0;\nfor (String w : words) {\n    if (w.length() > 3) {\n        c++;\n    }\n}', '2', '"horse" (5) and "tiger" (5) are longer than 3. "cat" and "dog" have exactly 3.', [
        ['4', 'Only strings with a length greater than 3 are counted.'],
        ['3', '"cat" and "dog" both have length 3, which is not greater than 3.'],
        ['0', 'Two of the strings have 5 letters.'],
      ]),
      mc('A program should print the average of 7 and 8, but it prints 7.0. The code is:\n\nint a = 7;\nint b = 8;\ndouble avg = (a + b) / 2;\n\nWhich change fixes it?', 'double avg = (a + b) / 2.0;', '(a + b) / 2 is integer division and gives 7. Dividing by 2.0 makes the division use doubles and gives 7.5.', [
        ['int avg = (a + b) / 2;', 'This still divides two ints, stores 7 and loses the .5.'],
        ['Change double to int', 'An int cannot store 7.5 at all.'],
        ['int a = 7.0;', 'The values are fine. The division type is the problem, and this would not compile.'],
      ]),
    ],
  },
};
