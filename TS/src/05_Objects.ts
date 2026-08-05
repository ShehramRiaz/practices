// Object Type Inference
const book = { // {title: string; pages: number; isAvailable: boolean;}
    title: "Atomic Habits",
    pages: 320,
    isAvailable: true,
};

book.pages = 540;
// book.pages = "Five Hundred"; // Error


// Object Type Annotation
let user: {
    fullName: string;
    age: number;
    isStudent: boolean;
};

// user = {
//     fullName: "Shehram",
//     age: 19,
//     // isStudent: true, // Error - Missing Property
// };

user = {
    fullName: "Shehram",
    age: 19,
    isStudent: true,
    // isPassed: true, // Error - Extra property
};

user = {
    fullName: "Shehram",
    age: 19,
    isStudent: true,
};

// Nested Objects
const studentData = {
    name: "Shehram",
    marks: {
        html: 95,
        css: 92,
        javascript: 98,
    },
};

// // TypeScript infers
// {
//     name: string;
//     marks: {
//         html: number;
//         css: number;
//         javascript: number;
//     };
// }

// Array Of Objects
const users = [
    {
        name: "Ali",
        age: 20,
    },
    {
        name: "Ahmed",
        age: 22,
    },
];

// TypeScript infers
// {
//     name: string;
//     age: number;
// } []

// Additional Examples
const student = {
    name: "Shehram",
    age: 19,
    course: "Computer Science",
    isGraduated: false,
};

const laptop = {
    brand: "HP",
    model: "Chromebook 14",
    price: 50000,
};

const employee = {
    name: "Ali",
    age: 19,
    address: {
        city: "Mardan",
        country: "Pakistan",
    },
};

const books = [
    { title: "Animal Farm", author: "George Orwell", pages: 144 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 384 },
];

// Annotating
let car: {
    brand: string;
    year: number;
};

car = {
    brand: "BMW",
    year: 1916,
};