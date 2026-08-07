/**
 * ======================
 * Generic Constraints
 * ======================
 */

interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(value: T): number {
    return value.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3]));

// console.log(getLength(100)); // Error

interface User {
    name: string;
}

function printName<T extends User>(user: T): void {
    console.log(user.name);
}

printName({
    name: "Shehram",
});

printName({
    name: "Ali",
    age: 20,
});

interface Person {
    name: string;
    age: number;
}

function introduce<T extends Person>(person: T): void {
    console.log(`${person.name} is ${person.age} years old.`);
}

introduce({
    name: "Shehram",
    age: 19,
});

introduce({
    name: "Ali",
    age: 20,
    department: "IT",
});


// Additional Examples
interface HasId {
    id: number;
}

function printId<T extends HasId>(id: T): void {
    console.log(id.id);
}

printId(
    {
        id: 1,
        name: "Shehram"
    }
);


interface HasTitle {
    title: string;
}

function printTitle<T extends HasTitle>(productTitle: T): void {
    console.log(productTitle.title);
}

printTitle(
    {
        title: "Laptop",
        price: 50_000,
    }
)


function lastElement<T>(arr: T[]): T {
    return arr[arr.length - 1];
}