/**
 * ======================
 * typeof (Type Positions)
 * ======================
 */

// Object
const user = {
    name: "Shehram",
    age: 19,
    isStudent: true,
};

type User = typeof user;

const user2: User = {
    name: "Ali",
    age: 20,
    isStudent: false,
};

// Array
const languages = ["HTML", "CSS", "TypeScript"];

type Languages = typeof languages;

const moreLanguages: Languages = ["React", "Node.js"];

// Function
function multiply(a: number, b: number): number {
    return a * b;
}

type MultiplyFunction = typeof multiply;

const mul: MultiplyFunction = (x, y) => x * y;

// Nested Object
const book = {
    title: "Atomic Habits",
    details: {
        pages: 320,
        available: true,
    },
};

type Book = typeof book;

// Additional Examples
const country = {
    name: "Pakistan",
    capital: "Islamabad",
};

type Country = typeof country;

const country2: Country = {
    name: "Turkey",
    capital: "Ankara",
};

const scores = [90, 85, 95];

type Scores = typeof scores;

const marks: Scores = [70, 88, 91];

function greet(name: string): string {
    return `Hello ${name}`;
}

type GreetFunction = typeof greet;

const welcome: GreetFunction = (name) => `Welcome ${name}`;

const car = {
    brand: "Toyota",
    year: 2024,
};
type Car = typeof car;

const car2: Car = {
    brand: "BMW",
    year: 1916,
};

const numbers = [10, 20, 30];
type Nums = typeof numbers;
const totalMarks: Nums = [100, 200, 300, 400];


function divide(a: number, b: number): number | string {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot Divide by Zero!!";
    }
}

type Div = typeof divide;

const div: Div = (a, b) => a / b;