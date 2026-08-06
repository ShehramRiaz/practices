/**
 * ======================
 * Tuples
 * ======================
 */

// Basic Tuple
let person: [string, number] = ["Shehram", 19];

// Accessing Elements
console.log(person[0]);
console.log(person[1]);

// Fixed Order
// person = [19, "Shehram"]; // Error

// Fixed Length
// person = ["Shehram"]; // Error
// person = ["Shehram", 19, true]; // Error

// Readonly Tuple
const rgb: readonly [number, number, number] = [255, 100, 50];

// rgb[0] = 200; // Error
// rgb.push(40); // Error

// Three-Element Tuple
let employee: [number, string, boolean] = [101, "Ali", true];

// Named Tuple Elements
let student: [name: string, age: number] = ["Shehram", 19];

// Function Returning Tuple
function getBook(): [string, number] {
    return ["Atomic Habits", 320];
}

const book = getBook();

console.log(book[0]);
console.log(book[1]);


// Additional Examples
const studentInfo: [name: string, age: number, passed: boolean] = ["Shehram", 19, true];

const coordinates: readonly [number, number] = [5, 10];
// coordinates[0] = 89;
// coordinates[1] = 38;

function getProduct(): [string, number] {
    return ["Laptop", 76000];
}

const product = getProduct();
console.log(product[0]);
console.log(product[1]);