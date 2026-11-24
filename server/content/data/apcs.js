// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year programming topic sequence of AP Computer Science A (Java).
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Primitive Types and Expressions', modules: [
    mod(1, 'Variables, Types and Arithmetic', ['Declare and assign int, double and boolean variables and constants.', 'Evaluate arithmetic expressions, including integer division and the remainder operator, using operator precedence.']),
    mod(2, 'Casting, Compound Assignment and Overflow', ['Use compound assignment and increment operators.', 'Apply casting and explain when Java converts types automatically.', 'Explain integer overflow.']),
  ] },
  { n: 2, title: 'Using Objects', modules: [
    mod(3, 'Strings', ['Use String methods such as length, substring, indexOf and compareTo.', 'Explain why String objects are immutable and why equals, not ==, compares their contents.']),
    mod(4, 'Math, Object References and Calling Methods', ['Call static methods of the Math class and generate random numbers in a range.', 'Explain object references, aliasing and null.']),
  ] },
  { n: 3, title: 'Boolean Expressions and if Statements', modules: [
    mod(5, 'Boolean Expressions', ['Write and evaluate relational and logical expressions with &&, || and !.', 'Apply short-circuit evaluation and De Morgan’s laws.']),
    mod(6, 'Conditional Statements', ['Trace if, else-if and nested if statements.', 'Write code that handles every case exactly once.']),
  ] },
  { n: 4, title: 'Iteration', modules: [
    mod(7, 'while and for Loops', ['Trace while and for loops and count their iterations.', 'Recognize and fix infinite loops and off-by-one errors.']),
    mod(8, 'Nested Loops and String Algorithms', ['Trace nested loops.', 'Write loops that traverse a String to count, search or build a result.']),
  ] },
  { n: 5, title: 'Writing Classes', modules: [
    mod(9, 'Classes, Constructors and Encapsulation', ['Write a class with private instance variables, constructors, accessors and mutators.', 'Explain the purpose of encapsulation.']),
    mod(10, 'Static Members, Parameters and Scope', ['Distinguish static from instance members.', 'Explain how parameters are passed and which variables are in scope.', 'Write and call overloaded methods and a toString method.']),
  ] },
  { n: 6, title: 'Arrays and ArrayList', modules: [
    mod(11, 'Arrays', ['Create, traverse and modify one-dimensional arrays.', 'Write algorithms that sum, count and find the maximum of array values.', 'Predict and avoid ArrayIndexOutOfBoundsException.']),
    mod(12, 'ArrayList and Two-Dimensional Arrays', ['Use the ArrayList methods add, get, set, remove and size.', 'Traverse a two-dimensional array by rows and columns.']),
  ] },
  { n: 7, title: 'Inheritance and Polymorphism', modules: [
    mod(13, 'Subclasses and Method Overriding', ['Write subclasses with extends, super constructor calls and overridden methods.', 'Trace the order of constructor calls in an inheritance chain.']),
    mod(14, 'Polymorphism and the Object Class', ['Explain how a method call on a superclass reference runs the subclass version.', 'Distinguish compile-time errors from run-time behavior with references.', 'Override toString and equals.']),
  ] },
  { n: 8, title: 'Recursion, Searching and Sorting', modules: [
    mod(15, 'Recursion', ['Write and trace recursive methods with a base case and a recursive case.', 'Explain why a missing base case causes a stack overflow.']),
    mod(16, 'Searching and Sorting', ['Compare linear and binary search and state when each can be used.', 'Trace selection sort, insertion sort and merge sort.']),
  ] },
];
