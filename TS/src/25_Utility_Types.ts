/**
 * ======================
 * Utility Types
 * ======================
 */

interface User {
    name: string;
    age: number;
    country: string;
}

// Partial
const partialUser: Partial<User> = {
    name: "Shehram",
};

// Required
interface Product {
    title: string;
    price?: number;
}

const product: Required<Product> = {
    title: "Laptop",
    price: 75000,
};

// Readonly
const user: Readonly<User> = {
    name: "Ali",
    age: 20,
    country: "Pakistan",
};

// user.age = 21; // Error

// Pick
type UserPreview = Pick<User, "name" | "country">;

const preview: UserPreview = {
    name: "Shehram",
    country: "Pakistan",
};

// Omit
type UserWithoutAge = Omit<User, "age">;

const userWithoutAge: UserWithoutAge = {
    name: "Ahmed",
    country: "Turkey",
};

// Additional Examples

interface Student {
    id: number;
    name: string;
    course: string;
}

const student: Partial<Student> = {
    name: "Shehram",
};

type StudentName = Pick<Student, "name">;

const studentName: StudentName = {
    name: "Ali",
};

type StudentWithoutCourse = Omit<Student, "course">;

const student2: StudentWithoutCourse = {
    id: 1,
    name: "Ahmed",
};

interface Car {
    brand: string;
    year?: number;
}

const car: Required<Car> = {
    brand: "Toyota",
    year: 2024,
};

const readonlyCar: Readonly<Car> = {
    brand: "BMW",
    year: 2023,
};


// More Example
interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
}

type PartialEmployee = Partial<Employee>;
type ReadonlyEmployee = Readonly<Employee>;
type DisplayEmployee = Pick<Employee, "id" | "name">;
type ProfileEmployee = Omit<Employee, "salary">;

interface Account {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
type UserEmailAccount = Pick<Account, "username" | "email">;
type NotPasswordAdminAccount = Omit<Account, "password" | "isAdmin">;