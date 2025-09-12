function delayedCall(fn: () => void): void {
    setTimeout(fn, 2000);
}

delayedCall(() => {
    console.log("Called after 2 seconds");
});

// Type Annotations
var x: number = 2;
var y: string = "hello";
var z: boolean = true;

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(x, 3));

// Arrays and Objects
var arr: number[] = [1, 2, 3];
var obj: { name: string; age: number } = { name: "Alice", age: 30 };

// using generic syntax
let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob", "Charlie"];


// Using objects 
 interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}

let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Alice", 25];

interface Person {
  name: string;
  age: number;
}

const user: Person = { name: "Bob", age: 30 };

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

enum Direction {
  Up,
  Down,
  Left,
  Right
}
let message = "Hello"; // inferred as string
let value: string | number;
interface A { a: number }
interface B { b: number }
type AB = A & B;

function identity<T>(arg: T): T {
  return arg;
}

type Point = { x: number; y: number };

// math.ts


// main.ts
import { sum } from "./math.ts";

console.log("ssh");
console.log("day8")