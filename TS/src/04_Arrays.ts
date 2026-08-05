// Array Type Inference
let fruits = ["Apple", "Banana", "Orange"]; // string[]
let totalMarks = [90, 85, 95]; // number[]
let flags = [true, false, true]; // boolean[]

// Array Type Annotation
let users: string[] = [];
users.push("Shehram");
// users.push(40); // Error

let admins: Array<string> = [];
admins.push("Shahsawar");


// Mixed Array
let mixed1: (string | number | boolean)[] = ["Shehram", 20, true];
let mixed2: Array<string | number> = ["Adeel Alam", 90];


// Read only Arrays
const colors: readonly string[] = ["red", "green", "blue"];
// colors.push("magenta"); // Error
// colors[1] = "black"; // Error
console.log(colors[1]);


// Additional Examples
const countries: string[] = ["Pakistan", "India", "Afghanistan", "Iran", "China"];
const marks: number[] = [90, 89, 84, 46, 76];
const values: boolean[] = [true, false, false, true];
const languages: string[] = [];
const myInfo: (string | number | boolean)[] = ["Shehram", 20, true];