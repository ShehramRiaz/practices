// Task 01
interface Book {
    readonly id: number;
    title: string;
    author: string;
    price: number;
    inStock?: boolean;
}

const book1: Book = {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 2000,
    inStock: true,
};

const book2: Book = {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 5000,
};

// Task 02
interface EBook extends Book {
    fileSize: number;
    format: "PDF" | "EPUB",
}

const ebook: EBook = {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 1000,
    inStock: false,
    fileSize: 12,
    format: "PDF",
}

// Task 03
function printBook(book: Book): void {
    console.log(`ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Price: ${book.price}`);
    console.log(`Availability: ${book.inStock ?? "Unknown"}`);
}

// Task 04
const student: [studentName: string, age: number, passed: boolean] = ["Shehram", 19, true];

// Task 05
enum OrderStatus {
    pending,
    processing,
    delivered,
}

const orderStatus: OrderStatus = OrderStatus.delivered;

// Task 06
type ID = string | number;
function printID(id: ID): void {
    if (typeof id === "string") {
        id.toUpperCase();
    } else {
        id.toFixed(2);
    }
}

// Task 07
function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

// Task 08
interface HasName {
    name: string;
}

function printName<T extends HasName>(obj: T): void {
    console.log(obj.name);
}

// Task 09
interface User {
    username: string;
    email: string;
    age: number;
}

type UserKeys = keyof User;

// Task 10
const company = {
    name: "Roboticela",
    founder: "Muhammad Shahsawar Khan",
    coFounders: ["Shehram Riaz", "Adeel Alam", "Abdul Basit", "Hajra Khan"],
}

type Company = typeof company;

const company2: Company = {
    name: "Google",
    founder: "Lary Page",
    coFounders: ["Sergey Brin"],
}

// Task 11
type Username = User["username"];
type UserValues = User[keyof User];

// Task 12
interface Dog {
    bark: () => void,
}

interface Cat {
    meow: () => void,
}

function makeSound(animal: Dog | Cat): void {
    if("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// Task 13
const Theme = {
    Light: "Light",
    Dark: "Dark",
    System: "System",
} as const;

// Challenge
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const student1 = {
    name: "Shehram",
    age: 19,
};

const student2 = {
    name: "Shahsawar",
    age: 20,
};
console.log(getProperty(student1, "name"));
console.log(getProperty(student2, "age"));