import { mc, tf } from '../builder.js';

export default {
  summary: 'Reuse and specialize code with inheritance, and understand how Java decides which version of a method to run.',
  modules: {
    13: {
      summary: 'Subclasses, super and overriding.',
      sessions: [{
        t: 'Subclasses and method overriding',
        s: 'extends, constructors in an inheritance chain, super calls and overriding methods.',
        md: `
## Inheritance

A **subclass** extends a **superclass** and inherits its public methods. Use inheritance for an **is-a** relationship: a Dog **is an** Animal. (A Car **has an** Engine, so Engine would be an instance variable of Car, not a superclass.)

\`\`\`
public class Animal {
    public String speak() {
        return "...";
    }
}

public class Dog extends Animal {
    public String speak() {          // overrides Animal's speak
        return "Woof";
    }
    public void fetch() { }
}

public class Cat extends Animal {
    public String speak() {
        return super.speak() + "Meow";   // calls the superclass version
    }
}
\`\`\`

- **Overriding** means writing a method in a subclass with the **same name and parameter list** as one in the superclass, to replace its behavior.
- \`super.method()\` calls the superclass version. In the example, a Cat speaks \`"...Meow"\`.
- **Private** instance variables of the superclass are **not accessible** directly in the subclass; use the superclass's public methods.

## Constructors in a chain

A subclass constructor must first call a superclass constructor, using \`super(...)\`. If you do not write the call, Java inserts \`super()\` automatically. So the **superclass constructor runs first**.

\`\`\`
class A { A() { System.out.print("A"); } }
class B extends A { B() { System.out.print("B"); } }
class C extends B { C() { System.out.print("C"); } }
\`\`\`

\`new C();\` prints **ABC**.
`,
        q: [
          mc('What does new C(); print, using the classes A, B and C above?', 'ABC', 'The constructor of the topmost superclass runs first, then each subclass constructor in turn.', [
            ['CBA', 'Constructors are called starting with the superclass, not the subclass.'],
            ['C', 'The constructors of the superclasses also run.'],
            ['A', 'B and C constructors run as well.'],
          ]),
          mc('What does new Cat().speak() return?', '"...Meow"', 'super.speak() returns "..." and "Meow" is appended.', [
            ['"Meow"', 'The result of super.speak() is included at the start.'],
            ['"..."', 'The Cat version of speak adds "Meow".'],
            ['"Woof"', 'That is the Dog version of the method.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'Polymorphism and the Object class.',
      sessions: [{
        t: 'Polymorphism and the Object class',
        s: 'Superclass references, run-time method selection, compile-time checks, casting and toString.',
        md: `
## Polymorphism

A variable of a superclass type may refer to a subclass object:

\`\`\`
Animal a = new Dog();
\`\`\`

Two rules decide what happens:

1. **At compile time**, Java checks that the method exists in the **declared** type (Animal). \`a.fetch()\` is a **compile-time error**, because Animal has no \`fetch\` method.
2. **At run time**, Java runs the version of the method belonging to the **actual** object (Dog). So \`a.speak()\` returns \`"Woof"\`.

This is **polymorphism**: the same call can behave differently depending on the object. It lets you write one method that works with any Animal.

\`\`\`
Animal[] zoo = { new Dog(), new Cat(), new Animal() };
for (Animal x : zoo) {
    System.out.println(x.speak());   // "Woof", "...Meow", "..."
}
\`\`\`

## Casting references

To call \`fetch\`, cast: \`((Dog) a).fetch();\`. If the actual object is not a Dog, a **ClassCastException** is thrown at run time (for example, \`Animal x = new Animal(); Dog d = (Dog) x;\`).

## The Object class

Every class extends \`Object\`, which supplies \`toString\` and \`equals\`. The inherited \`equals\` compares **references** (same object), so a class that wants to compare contents overrides it. Overriding \`toString\` changes what \`System.out.println(obj)\` prints.

**Overriding versus overloading:** overriding has the **same** parameter list in a subclass; overloading has a **different** parameter list.
`,
        q: [
          mc('Given Animal a = new Dog();, what does a.speak() return?', '"Woof"', 'The method that runs is chosen by the actual object, a Dog.', [
            ['"..."', 'That would happen only if the actual object were an Animal.'],
            ['A compile-time error', 'speak exists in Animal, so the call compiles.'],
            ['null', 'The method returns the String that Dog defines.'],
          ]),
          mc('Given Animal a = new Dog();, what happens with a.fetch(); if fetch is defined only in Dog?', 'A compile-time error', 'The compiler checks the methods of the declared type, Animal, which has no fetch method.', [
            ['It runs the fetch method of Dog', 'The call is rejected before the program runs.'],
            ['A ClassCastException at run time', 'The problem is found earlier, by the compiler.'],
            ['Nothing happens', 'The compiler reports an error for a method that the declared type does not have.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Inheritance and polymorphism',
    tasks: [
      mc('Which relationship is best modeled with inheritance?', 'A Dog is an Animal', 'Inheritance represents an is-a relationship.', [
        ['A Car has an Engine', 'This is a has-a relationship, modeled with an instance variable.'],
        ['A Student uses a Calculator', 'This is a uses-a relationship, not an is-a relationship.'],
        ['A Library contains Books', 'This is a has-a relationship.'],
      ]),
      mc('What happens when this code runs? Animal x = new Animal(); Dog d = (Dog) x;', 'A ClassCastException at run time', 'The object is an Animal, not a Dog, so the cast fails when the program runs.', [
        ['Nothing, and d refers to the object', 'The cast is checked at run time and fails.'],
        ['A compile-time error', 'The cast between a class and its subclass is allowed by the compiler.'],
        ['null', 'The cast does not return null; it throws an exception.'],
      ]),
      tf('A subclass can directly access a private instance variable of its superclass.', false, 'Private members are not accessible outside their own class.', 'Correct. The subclass must use public accessors or mutators of the superclass.'),
      mc('Which statement describes overriding?', 'A subclass defines a method with the same name and parameter list as a superclass method', 'The subclass version replaces the inherited one for objects of the subclass.', [
        ['A class defines several methods with the same name and different parameters', 'That is overloading.'],
        ['A method calls itself', 'That is recursion.'],
        ['A subclass hides the superclass constructor', 'Constructors are not overridden.'],
      ]),
      mc('A programmer writes Animal[] zoo = { new Dog(), new Cat(), new Animal() }; and calls speak() on each element. Which concept makes each call run the right version?', 'Polymorphism', 'The version of the method that runs is chosen by the actual object at run time.', [
        ['Encapsulation', 'Encapsulation hides data; it does not select methods.'],
        ['Overloading', 'Overloading selects a method by parameter types at compile time.'],
        ['Casting', 'No cast is needed to call a method that exists in the declared type.'],
      ]),
      mc('In class Cat extends Animal, speak is written as return super.speak() + "Meow"; What does the keyword super do here?', 'It calls the version of speak defined in Animal', 'super refers to the superclass part of the object.', [
        ['It creates a new Animal object', 'No new object is created; the call uses the current object.'],
        ['It calls the speak method of Cat again', 'That would cause an endless recursion.'],
        ['It makes the method private', 'super does not change access.'],
      ]),
      mc('Which method of Object should a class override so that System.out.println(obj) prints useful information about its instance variables?', 'toString', 'println uses toString to get the text to print.', [
        ['equals', 'equals compares objects; it is not used by println.'],
        ['hashCode', 'This method returns a number and is not used for printing.'],
        ['clone', 'clone makes a copy of an object.'],
      ]),
    ],
  },
};
