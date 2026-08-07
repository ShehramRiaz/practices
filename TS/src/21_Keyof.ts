/**
 * ======================
 * keyof
 * ======================
 */

interface User {
    name: string;
    age: number;
    country: string;
}

type UserKeys = keyof User; // UserKeys = "name" | "age" | "country"

let key: UserKeys;

key = "name";
key = "age";
key = "country";
// key = "salary"; // Error

function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const user = {
    name: "Shehram",
    age: 19,
    country: "Pakistan",
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));

const book = {
    title: "Atomic Habits",
    pages: 320,
    available: true,
};

console.log(getProperty(book, "title"));
console.log(getProperty(book, "pages"));

// Additional Examples
interface Student {
    name: string;
    course: string;
    age: number;
}

type StudentKeys = keyof Student;

let studentKey: StudentKeys;

studentKey = "name";
studentKey = "course";
studentKey = "age";

interface Product {
    title: string;
    price: number;
}

function getValue<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const product = {
    title: "Laptop",
    price: 75000,
};

console.log(getValue(product, "title"));
console.log(getValue(product, "price"));


interface Employee {
    id: number;
    name: string;
    department: string;
}

type EmployeeKeys = keyof Employee;
let empKey: EmployeeKeys = "id";
empKey = "name";
empKey = "department";

function getObjValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const student = {
    name: "Shehram",
    marks: 95,
};

console.log(getObjValue(student, "name"));
console.log(getObjValue(student, "marks"));