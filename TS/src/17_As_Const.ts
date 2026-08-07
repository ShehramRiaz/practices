/**
 * ======================
 * as const
 * ======================
 */

// Literal Types
const language = "TypeScript";
const age = 19;

// Object without as const
const user1 = {
    name: "Shehram",
    age: 19,
};

user1.age = 20; // Allowed

// Object with as const
const user2 = {
    name: "Shehram",
    age: 19,
} as const;

// user2.age = 20; // Error

// Arrays
const colors = ["red", "green", "blue"] as const;

// colors.push("black"); // Error

// Tuple
const point = [10, 20] as const;

// Enum-like Object
const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Failed: "FAILED",
} as const;

console.log(Status.Pending);


// Additional Examples
const country = {
    name: "Pakistan",
    capital: "Islamabad",
} as const;

// country.name = "Dubai"; // Error


const fruits = ["Apple", "Banana", "Orange"] as const;
// fruits.push("Mango"); // Error


const Theme = {
    Light: "LIGHT",
    Dark: "DARK",
} as const;

console.log(Theme.Dark);