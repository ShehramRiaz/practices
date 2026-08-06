// Variable Types
let id: string | number;

id = 101;
id = "EMP-101";
// id = true; // Error


// Function parameters
function printId(id: string | number): void {
    console.log(`ID: ${id}`);
}

printId(101);
printId("EMP-101");
// printId(true); // Error


// Array element types
let mixed1: (string | number)[] = ["Shehram", 19, "Pakistan", 100];
// let mixed2: (string | number)[] = ["Shehram", 19, "Pakistan", 100, true]; // Boolean will throw Error


// Narrowing types
// function printValue(value: string | number): void {
// console.log(value.toUpperCase()); // Error
// }


// Narrowing type using typeof
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}


// Return Types
function double(value: string | number): string | number {
    if (typeof value === "number") {
        return value * 2;
    }

    return value + value;
}

console.log(double(10));      // 20
console.log(double("Hi"));    // HiHi


// Literal Types
let state: "success" | "failed" | "pending" = "pending";
state = "failed";
state = "success";
// state = "fulfilled" // Error
// state = true; // Error

// Additional Examples
let username: string | null = "Shehram";
username = null;
// username = false; // Error

let score: number | "Absent" = 99;
score = "Absent";
// score = "Present"; // Error


function formatValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

function getLength(value: string | string[]): number {
    return value.length;
}