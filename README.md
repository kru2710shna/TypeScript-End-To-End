# TypeScript Code Overview

This repository provides a comprehensive guide to TypeScript's core features and advanced concepts, tailored for developers aiming to write production-level code. Below is an end-to-end breakdown of the covered topics.

---

## 🛠️ **Function Declarations**
TypeScript supports precise type annotations in function declarations.

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

## Variables can be declared using let, const, or var, with strict typing.

```typescript

let name: string = "John";
const age: number = 30;
var isDeveloper: boolean = true;

```

Key Points:

Use let and const for block scoping.
Explicit types or type inference ensure type safety.

## Tuples

```typescript
let user: [string, number] = ["John", 30];
```

Key Points:

Ensures type safety for indexed values.
Suitable for structured data.

## Functions

### TypeScript allows you to define the types of parameters and return values in functions.

### Key Features:
Optional Parameters: Use ? to mark parameters as optional.
Default Parameters: Assign default values to parameters.
Rest Parameters: Handle a varying number of arguments.

```typescript
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}
```

## Abstract Classes

### Abstract classes serve as blueprints for other classes. They cannot be instantiated and can include abstract methods without implementation.

#### Key Features:
Encapsulation of shared functionality.
Defines method signatures for subclasses to implement.
```typscript
abstract class Animal {
    abstract sound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("Bark");
    }
}


```

## Inheritance

### TypeScript supports inheritance, allowing classes to derive properties and methods from other classes using the extends keyword.
```typscript
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Employee extends Person {
    employeeId: number;

    constructor(name: string, employeeId: number) {
        super(name);
        this.employeeId = employeeId;
    }

    showId(): void {
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

```

## Instances

Creating instances of classes to utilize their properties and methods.
```typscript
const emp = new Employee("Alice", 123);
emp.greet();
emp.showId();
```

## iOS App Example
```typscript
type AppState = {
    user: string;
    isLoggedIn: boolean;
};

const appState: AppState = {
    user: "John Doe",
    isLoggedIn: true,
};

```

## Arrays

Arrays in TypeScript are used to store multiple values of a specific type.

```typscript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["A", "B", "C"];
```

## Tuples

Tuples allow you to define an array with fixed types and lengths.

```typescript
let user: [number, string] = [1, "Alice"];

```

## Enums

Enums are used to define a set of named constants.

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let move: Direction = Direction.Up;

```

## Objects

Objects in TypeScript can be defined with specific types for their properties.

```typescript
type User = {
    id: number;
    name: string;
};

const user: User = {
    id: 1,
    name: "Alice",
};

```

## Union Types

Union types allow a variable to hold more than one type.

```typescript
let value: string | number = "Hello";
value = 42; // Valid

```

## Generics

Generics provide a way to create reusable components that work with various types.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

const result = identity<string>("Hello");

```

## Functions

This section likely focuses on advanced function concepts like overloading and arrow functions.

Function Overloading:
```typescript
Functions

This section likely focuses on advanced function concepts like overloading and arrow functions.

Function Overloading:
```
