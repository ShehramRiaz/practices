// Parameter Type Annotations
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("Shehram");
// greet(45); // Error
// greet(true); // Error

function introduce(name: string, age: number) {
    console.log(`${name} is ${age} years old.`);
}

introduce("Shehram", 19);
// introduce("Shehram", "19"); // Error
// introduce(19, "Shehram"); // Error


// Return Type Annotation
function add(a: number, b: number): number {
    return a + b;
}

// Wrong return value
// function multiply(a: number, b: number): number {
//     // return "Hello"; // Error
// }


// Type Inference for Return Types
function square(num: number) {
    return num * num;
}


// Functions That Don't Return a Value
function welcome(name: string): void {
    console.log(`Welcome ${name}`);
}


// Additional Examples
function mul(num1: number, num2: number): number {
    return num1 * num2;
}

function isAdult(age: number): boolean{
    return age >= 18;
}

function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

function printCourse(courseName: string): void {
    console.log(courseName);
}

function cube(num: number): number {
    return num * num * num;
}