# TypeScript Notes

## 1️⃣ Primitive Types

### **1. Number**
- **English:** In TypeScript, the `number` type is used to represent both integers and floating-point numbers.
- **Hinglish:** TypeScript mein `number` type integer aur floating-point numbers ko represent karne ke liye use hota hai.

```typescript
let age: number = 25;
let price: number = 99.99;
```

### **2. String**
- **English:** The `string` type is used to represent textual data, enclosed in single or double quotes.
- **Hinglish:** `string` type text ko represent karta hai, jo ki single ya double quotes mein likha jata hai.

```typescript
let name: string = "Navneet";
let greeting: string = 'Hello, World!';
```

### **3. Boolean**
- **English:** The `boolean` type represents true or false values.
- **Hinglish:** `boolean` type true ya false values ko represent karta hai.

```typescript
let isActive: boolean = true;
let hasPermission: boolean = false;
```

---

## 2️⃣ Arrays

- **English:** Arrays are collections of values of the same type.
- **Hinglish:** Arrays ek jaise type ke values ka collection hote hain.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "mango"];
```

---

## 3️⃣ Tuples

- **English:** Tuples allow you to store multiple values of different types in a fixed-length array.
- **Hinglish:** Tuples fixed length ka array hote hain jisme different types ke values store kiye ja sakte hain.

```typescript
let person: [string, number] = ["Navneet", 23];
```

---

## 4️⃣ Enums

- **English:** Enums are a way to define named constants.
- **Hinglish:** Enums named constants ko define karne ka ek tareeka hai.

```typescript
enum Direction {
  North,
  South,
  East,
  West
}

let move: Direction = Direction.North;
```

---

## 5️⃣ Special Types

### **1. Any**
- **English:** `any` type allows any kind of value.
- **Hinglish:** `any` type kisi bhi type ka value rakh sakta hai.

```typescript
let data: any = 5;
data = "Hello";
data = true;
```

### **2. Unknown**
- **English:** `unknown` is like `any` but safer because you need to check the type before using it.
- **Hinglish:** `unknown`, `any` jaisa hota hai lekin zyada safe hai kyunki use karne se pehle type check karna padta hai.

```typescript
let value: unknown = "Test";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### **3. Void**
- **English:** `void` represents the absence of a value, often used for functions that don’t return anything.
- **Hinglish:** `void` ka matlab hai koi value nahi, jaise ki aise functions jo kuch return nahi karte.

```typescript
function logMessage(): void {
  console.log("This is a message");
}
```

### **4. Null & Undefined**
- **English:** `null` represents an intentional absence of value, while `undefined` means a variable has been declared but not assigned.
- **Hinglish:** `null` ka matlab hota hai jaan bujhkar koi value na dena, aur `undefined` tab hota hai jab variable declare toh ho gaya hai lekin koi value assign nahi hui hai.

```typescript
let a: null = null;
let b: undefined = undefined;
```

### **5. Never**
- **English:** `never` represents values that never occur, often used for functions that throw errors or run infinitely.
- **Hinglish:** `never` un values ko represent karta hai jo kabhi nahi hoti, jaise ki infinite loop wale functions.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 6️⃣ Type Inference

- **English:** TypeScript automatically determines the type of a variable if not explicitly specified.
- **Hinglish:** TypeScript khud hi variable ka type guess kar leta hai agar explicitly specify nahi kiya gaya ho.

```typescript
let count = 10; // inferred as number
let message = "Hello"; // inferred as string
```

### **Type Annotations**
- **English:** You can explicitly define the type of a variable using type annotations.
- **Hinglish:** Type annotations se aap variable ka type clearly define kar sakte ho.

```typescript
let userName: string = "Navneet";
let age: number = 24;
```

---

## 7️⃣ Intersection Types

- **English:** Intersection types combine multiple types into one.
- **Hinglish:** Intersection types multiple types ko combine karte hain.

```typescript
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

const elevatedEmployee: Admin & Employee = {
  name: "Navneet",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

---

## Coming Next: **Classes and Objects** 🚀



😳'Classes and Objects
Class Definition: Defines a blueprint for objects.
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
b=>Constructors: Special method used to initialize objects
class Person {
    constructor(public name: string, public age: number) {}
}

c=> Access Modifiers: Define visibility of properties and methods.

.Public: Accessible everywhere.
.Private: Only accessible within the class.
.Protected: Accessible within the class and subclasses.
class Person {
    public name: string;
    private age: number;
}
d=>Readonly: Makes a property immutable.
class Person {
    readonly name: string;
}
e=>Optional Parameters: Parameters that may or may not be passed.
class Person {
    constructor(public name: string, public age?: number) {}
}

f=>Getters and Setters: Methods to get or set the value of a property.
class Person {
    private _age: number;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
f=>Static Methods: Belong to the class, not instances
class Person {
    static greet() {
        console.log("Hello");
    }
}
e=>Abstract Classes and Methods: Used to define base classes that cannot be instantiated directly.
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
 8 Functions
a=>Function Type: Defines the type of function parameters and return value.
type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;
b=>Optional and Default Parameters: Some parameters are optional or have default values.
function greet(name: string, age: number = 25) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}
c=> Overloads: Function can have multiple signatures.
function greet(name: string): string;
function greet(name: string, age: number): string;
function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, you are ${age} years old.` : `Hello ${name}`;
}
d=>Generics: Allows writing flexible, reusable functions.
function identity<T>(arg: T): T {
    return arg;
}
e=>Modules: Group related code into a module and export it.
export class Person { ... }
f=>Type Assertions: Let you tell TypeScript to treat a value as a specific type.
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
g=>Type Guards: TypeScript provides mechanisms to narrow down the type of a value.
function isString(value: any): value is string {
    return typeof value === "string";
}
