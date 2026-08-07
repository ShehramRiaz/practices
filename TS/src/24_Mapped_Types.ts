/**
 * ======================
 * Mapped Types
 * ======================
 */

interface User {
    name: string;
    age: number;
    isStudent: boolean;
}

// Make Every Property Optional
type OptionalUser = {
    [K in keyof User]?: User[K];
};

const user1: OptionalUser = {
    name: "Shehram",
};

const user2: OptionalUser = {
    age: 19,
};

// Make Every Property Readonly
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

const user3: ReadonlyUser = {
    name: "Ali",
    age: 20,
    isStudent: false,
};

// user3.age = 21; // Error

// Remove Optional
interface Product {
    title: string;
    price?: number;
}

type RequiredProduct = {
    [K in keyof Product]-?: Product[K];
};

const product: RequiredProduct = {
    title: "Laptop",
    price: 75000,
};

// Readonly + Optional
type ReadonlyOptionalUser = {
    readonly [K in keyof User]?: User[K];
};

const user4: ReadonlyOptionalUser = {
    name: "Ahmed",
};

// Additional Examples

interface Student {
    name: string;
    course: string;
    age: number;
}

type OptionalStudent = {
    [K in keyof Student]?: Student[K];
};

type ReadonlyStudent = {
    readonly [K in keyof Student]: Student[K];
};

const student1: OptionalStudent = {
    course: "Computer Science",
};

const student2: ReadonlyStudent = {
    name: "Shehram",
    course: "Computer Science",
    age: 19,
};

interface Book {
    title: string;
    author?: string;
}

type RequiredBook = {
    [K in keyof Book]-?: Book[K];
};

const book: RequiredBook = {
    title: "Atomic Habits",
    author: "James Clear",
};

interface Employee {
    id: number;
    name: string;
    salary: number;
}

type OptionalEmployee = {
    [K in keyof Employee]?: Employee[K];
}

type ReadonlyEmployee = {
    readonly [K in keyof Employee]: Employee[K];
}

interface Car {
    brand: string;
    year?: number;
}

type RequiredCar = {
    [K in keyof Car]-?: Car[K];
}

// Generic Mapped Optional Type
type MakeOptional<T> = {
    [K in keyof T]?: T[K];
}