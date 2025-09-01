function isLegal(age: number): boolean {
    return age >= 18;
}

console.log(isLegal(20)); // Output: true
console.log(isLegal(16)); // Output: false