import { mc, tf } from '../builder.js';

export default {
  summary: 'Design your own types: write classes that hold data, hide their details and offer methods to use them.',
  modules: {
    9: {
      summary: 'Instance variables, constructors, accessors, mutators and encapsulation.',
      sessions: [{
        t: 'Classes, constructors and encapsulation',
        s: 'The parts of a class and why instance variables are private.',
        md: `
## Parts of a class

A **class** is a blueprint for objects. It contains:

- **Instance variables** (fields): the data each object keeps.
- **Constructors**: code that runs when an object is created with \`new\`. A constructor has the **same name as the class** and **no return type**.
- **Methods**: the actions an object can perform.

\`\`\`
public class Account {
    private double balance;

    public Account(double initial) {
        balance = initial;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}
\`\`\`

Using it:

\`\`\`
Account a = new Account(100);
a.deposit(50);
a.deposit(25);
System.out.println(a.getBalance());   // 175.0
\`\`\`

## Encapsulation

The instance variables are **private**, so code outside the class cannot read or change them directly: \`a.balance\` in another class is a **compile-time error**. Outside code must use the **public** methods:

- An **accessor** (getter) returns a value, such as \`getBalance\`.
- A **mutator** (setter) changes a value, such as \`deposit\`.

Hiding the data lets the class **protect its own rules** (for example, refusing a negative deposit) and lets you change the inside later without breaking code that uses it.

## The keyword this

\`this\` refers to the current object. It lets a constructor parameter have the same name as a field:

\`\`\`
public Point(int x, int y) {
    this.x = x;   // field = parameter
    this.y = y;
}
\`\`\`

Without \`this\`, the statement \`x = x;\` would assign the parameter to itself and leave the field unchanged (0 by default).
`,
        q: [
          mc('What is printed? Account a = new Account(100); a.deposit(50); a.deposit(25); System.out.println(a.getBalance());', '175.0', 'The balance starts at 100.0 and 50.0 and 25.0 are added.', [
            ['100.0', 'The two deposits change the balance of the object.'],
            ['175', 'The balance is a double, so it prints with a decimal point.'],
            ['25.0', 'Each deposit adds to the balance; it does not replace it.'],
          ]),
          mc('Code in another class contains a.balance, where balance is declared private in Account. What happens?', 'A compile-time error', 'Private members can be accessed only inside their own class.', [
            ['It returns the balance normally', 'Private access prevents this.'],
            ['It returns 0', 'The code does not run; it is rejected by the compiler.'],
            ['A run-time exception is thrown', 'The error is detected by the compiler, before the program runs.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Static members, parameters, overloading and toString.',
      sessions: [{
        t: 'Static members, parameters and scope',
        s: 'Static versus instance members, how arguments are passed, overloading and toString.',
        md: `
## Static and instance members

- An **instance** variable or method belongs to each **object**: every object has its own copy.
- A **static** variable or method belongs to the **class** and is shared by all objects. Static methods are called with the class name and cannot use instance variables directly.

\`\`\`
public class Dog {
    private static int count = 0;   // one copy for the whole class
    private String name;            // one copy per Dog

    public Dog(String name) {
        this.name = name;
        count++;
    }

    public static int getCount() {
        return count;
    }
}
\`\`\`

After \`new Dog("A"); new Dog("B"); new Dog("C");\`, \`Dog.getCount()\` is **3**.

## Passing arguments

Java passes arguments **by value**: the method gets a **copy** of each argument.

- A **primitive** argument: changing the parameter does not change the caller's variable. After \`void change(int x) { x = 99; }\` and \`int n = 5; change(n);\`, \`n\` is still **5**.
- A **reference** argument: the method gets a copy of the reference, which points to the **same object**. The method can change that object (\`a.deposit(10)\`), but assigning a new object to the parameter does not change the caller's variable.

## Scope

A **local** variable (declared in a method or block) exists only there. A parameter is local to its method. An instance variable is available to all methods of the class.

## Overloading and toString

**Overloading** means several methods with the **same name but different parameter lists**. Java chooses by the arguments: with \`int add(int a, int b)\` and \`double add(double a, double b)\`, the call \`add(2, 3.5)\` uses the **double** version and returns 5.5.

The \`toString\` method returns a String describing the object. It is called automatically by \`System.out.println(obj)\` and by string concatenation. Without it, the default text is the class name and a code such as \`Point@1b6d3586\`.
`,
        q: [
          mc('After creating three Dog objects with the code above, what does Dog.getCount() return?', '3', 'The static variable is shared, and each constructor call adds 1.', [
            ['1', 'The count is shared by all objects, so it accumulates over all three constructor calls.'],
            ['0', 'The initial value is changed by every constructor call.'],
            ['It does not compile', 'A static method can use a static variable.'],
          ]),
          mc('What is n after: static void change(int x) { x = 99; } int n = 5; change(n); ?', '5', 'The method changes its own copy of the value, not the caller’s variable.', [
            ['99', 'Primitive arguments are copied, so the original is unchanged.'],
            ['0', 'n keeps the value assigned to it.'],
            ['It does not compile', 'The code is valid; the parameter just holds a copy.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Writing classes',
    tasks: [
      mc('A Counter class has a private int value starting at 0, with increment() (adds 1) and reset() (sets value to 0). What is the value after: c.increment(); c.increment(); c.reset(); c.increment();', '1', 'After the two increments the value is 2, reset makes it 0, and the last increment makes it 1.', [
        ['0', 'The final increment happens after the reset.'],
        ['2', 'The reset in the third statement sets the value back to 0.'],
        ['3', 'The reset sets the value to 0; the earlier increments are not kept.'],
      ]),
      tf('A method of the same class can use a private instance variable of that class directly.', true, 'Private access applies to code outside the class.', 'Private members are accessible to every method and constructor inside the class itself.'),
      mc('Two overloaded methods are int add(int a, int b) and double add(double a, double b). What does System.out.println(add(2, 3.5)); print?', '5.5', 'One argument is a double, so the double version is called.', [
        ['5', 'The int version cannot accept 3.5.'],
        ['6', 'The value is not rounded.'],
        ['A compile-time error', 'The double version accepts an int argument after automatic conversion.'],
      ]),
      mc('In public Point(int x, int y) { x = x; y = y; }, where Point has int fields x and y, what are the fields after new Point(3, 4)?', '0 and 0', 'Each statement assigns the parameter to itself, so the fields keep their default value 0.', [
        ['3 and 4', 'This would happen with this.x = x; and this.y = y;.'],
        ['4 and 3', 'The values are not swapped.'],
        ['A compile-time error', 'The code compiles, but it does not do what the programmer intended.'],
      ]),
      mc('A student writes a class with a static variable int total, and creates two objects that each execute total += 5; once. What is total?', '10', 'Both objects share the one static variable, so it is increased twice.', [
        ['5', 'There is only one copy of the variable, so the second object adds to the first object’s result.'],
        ['0', 'Each object changes the variable.'],
        ['It differs for each object', 'A static variable is shared by all objects.'],
      ]),
      mc('Which statement about constructors is true?', 'A constructor has the same name as its class and no return type', 'This is how Java recognizes a constructor.', [
        ['A constructor returns void', 'A constructor has no return type at all, not even void.'],
        ['A constructor must be static', 'A constructor works on a new instance, so it is not static.'],
        ['A constructor is called with the dot operator after the object is created', 'A constructor runs when the object is created with new.'],
      ]),
      mc('What does System.out.println(p); print if p refers to a Point object and its class does not define toString?', 'The class name followed by a code, such as Point@1b6d3586', 'The default toString inherited from Object shows the class name and a hash code.', [
        ['The values of the instance variables', 'This requires a toString method that builds such a String.'],
        ['null', 'p refers to an object, so it does not print null.'],
        ['A compile-time error', 'Every object has a toString method, so this is valid.'],
      ]),
    ],
  },
};
