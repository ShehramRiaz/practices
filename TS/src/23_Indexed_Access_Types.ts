/**
 * ======================
 * Indexed Access Types
 * ======================
 */

interface User {
    name: string;
    age: number;
    isStudent: boolean;
}

// Basic Indexed Access
type UserName = User["name"];
type UserAge = User["age"];

// Multiple Keys
type UserInfo = User["name" | "age"];

// All Value Types
type UserValues = User[keyof User];

// Arrays
const languages = ["HTML", "CSS", "TypeScript"];

type Language = typeof languages[number];

// Nested Objects
interface Book {
    title: string;
    details: {
        pages: number;
        available: boolean;
    };
}

type Details = Book["details"];

type Pages = Book["details"]["pages"];

// Generic Example
function getValue<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const user = {
    name: "Shehram",
    age: 19,
    isStudent: true,
};

console.log(getValue(user, "name"));
console.log(getValue(user, "age"));

// Additional Examples
interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

type ProductTitle = Product["title"];
type ProductPrice = Product["price"];
type ProductValues = Product[keyof Product];

const numbers = [10, 20, 30];

type NumberElement = typeof numbers[number];

interface Company {
    name: string;
    address: {
        city: string;
        country: string;
    };
}

type Address = Company["address"];
type City = Company["address"]["city"];


interface Employee {
    id: number;
    name: string;
    salary: number;
}
type EmployeeID = Employee["id"];
type EmployeeName = Employee["name"];
type EmployeeValues = Employee[keyof Employee];

const colors = ["red", "green", "blue"];
type ArrayElement = typeof colors[0];


interface Car {
    brand: string;
    engine: {
        horsepower: number;
        fuel: string;
    };
}
type CarEngine = Car["engine"];
type CarHorsepower = Car["engine"]["horsepower"];
type CarFuel = Car["engine"]["fuel"];