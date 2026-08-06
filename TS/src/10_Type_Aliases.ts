/**
 * ======================
 * Type Aliases
 * ======================
 */

type User = {
    name: string;
    age: number;
    isStudent: boolean;
};

const user1: User = {
    name: "Shehram",
    age: 19,
    isStudent: true,
};

const user2: User = {
    name: "Ali",
    age: 20,
    isStudent: false,
};

function printUser(user: User): void {
    console.log(user.name);
    console.log(user.age);
    console.log(user.isStudent);
}

printUser(user1);
printUser(user2);

type ID = string | number;

let employeeId: ID;

employeeId = 101;
employeeId = "EMP-101";

type Marks = number[];

const scores: Marks = [90, 85, 95];


// Additional Examples
type Student = {
    name: string;
    age: number;
    course: string;
}

let student1: Student = {
    name: "Shehram",
    age: 19,
    course: "Computer Science",
};

let student2: Student = {
    name: "Shahsawar",
    age: 20,
    course: "Computer Science",
};


type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

function printProduct(product: Product): void {
    console.log(product.name);
    console.log(product.price);
    console.log(product.inStock);
}


type Username = string | null;
let u1: Username = "Shehram";
let u2: Username = "Shahsawar";


type Numbers = number[];
let marks: Numbers = [56, 86,63, 26, 86];