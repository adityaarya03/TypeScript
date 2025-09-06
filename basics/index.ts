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
