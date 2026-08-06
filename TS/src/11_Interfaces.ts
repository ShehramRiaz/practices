interface User {
    name: string;
    age: number;
    balance?: number; // Optional Property
    readonly gender: "Male" | "Female"; // Readonly
}

const user1: User = {
    name: "Ali",
    age: 20,
    gender: "Male",
};

const user2: User = {
    name: "Shehram",
    age: 19,
    balance: 2200,
    gender: "Male",
}

let user3: User = {
    name: "Shahsawar",
    age: 20,
    gender: "Male",
    balance: 72000,
}

user3.balance = 90000;
// user3.gender = "Female"; // Error

// With Functions
interface Product {
    name: string;
    price: number;
}

function printProduct(product: Product): void {
    console.log(product.name);
    console.log(product.price);
}

// Difference between types and interfaces
type TypeID = string; // Works
// interface InterfaceID string // Error

type UserTypeID = string | number; // Works
// interface UserInterfaceID string | number; // Error


// Interfaces can be reopened
interface Admin {
    name: string;
}

interface Admin {
    age: number;
}

const admin1: Admin = { // Declaration Merging
    name: "Shehram",
    age: 19,
};

// With Type Aliases - Error: Duplicate Identifier
// type User = {
//     name: string;
// };

// type User = {
//     age: number;
// };


// Additional Examples
interface Student {
    readonly id: number;
    name: string;
    course: string;
    age?: number;
}

const student1: Student = {
    id: 1,
    name: "Shehram",
    course: "Computer Science",
    age: 19,
};

const student2: Student = {
    id: 2,
    name: "Shahsawar",
    course: "Computer Science",
};


interface Car {
    brand: string;
    modal: string;
    price: number;
}

const car1: Car = {
    brand: "Suzuki",
    modal: "Swift",
    price: 650000,
}

const car2: Car = {
    brand: "Toyota",
    modal: "Corolla",
    price: 450000,
}


interface Employee {
    name: string;
    department: string;
}

const employee1: Employee = {
    name: "Shehram",
    department: "Web Development",
};

const employee2: Employee = {
    name: "Shahsawar",
    department: "Software",
};

const employee3: Employee = {
    name: "Ali",
    department: "HR",
};