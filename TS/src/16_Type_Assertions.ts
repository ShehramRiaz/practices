/**
 * ======================
 * Type Assertions
 * ======================
 */

// unknown value
let value: unknown = "Hello TypeScript";
// console.log(value.toUpperCase()); // Error

// Type Assertion
let text = value as string;
console.log(text.toUpperCase());

// Another Example
let score: unknown = 98;
let marks = score as number;

console.log(marks.toFixed(2));


// Type Assertion Does NOT Change the Value
// let number = "100" as number; // Error


// Incorrect Assertions Can Be Dangerous
let inputVal: unknown = 100;
let inputText = inputVal as string;

console.log(inputText.toUpperCase()); // Runtime Error


// Function Returning unknown
function getData(): unknown {
    return "Learning TypeScript";
}

const result = getData() as string;

console.log(result.toUpperCase());

// Angle Bracket Syntax
let language: unknown = "TypeScript";
let lang = <string>language;

console.log(lang);


// Additional Examples
const fullName: unknown = "Shehram";
console.log((fullName as string).toUpperCase());

const num: unknown = 45.6756;
console.log((num as number).toFixed(2));


function getUsername(): unknown {
    return "Shehram";
}

const myName = getUsername() as string;
console.log(myName.toUpperCase());