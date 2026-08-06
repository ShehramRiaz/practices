// Parameters are required
function greet(name: string): void {
    console.log(`Hello ${name}`);
}

greet("Shehram");
// greet(); // Error


// Optional Parameters
function sayHi(name?: string): void { // Type = name: string | undefined
    console.log(`Hi ${name}`);
}

sayHi("Shehram");
sayHi();


// Handling Optional Parameters
function sayHello(name?: string): void {
    if (name) {
        console.log(`Hi ${name}`);
    } else {
        console.log("Hi Guest");
    }
}


// Default Parameters
function welcome(name: string = "Guest"): void {
    console.log(`Welcome ${name}`);
}


// Parameter Order - Required First;
function printInfo(age: number, name?: string): void { }

// function printInfo(name?: string, age: number): void {
//     // Error A required parameter cannot follow an optional parameter.
// }


// Passing undefined to parameters having default values
function greetUser(name: string = "Guest"): void {
    console.log(`Hello ${name}`);
}
greetUser(undefined); // Guest is printed!!!


// Additional Examples
function welcomeUser(name: string = "Guest"): void {
    console.log(`Welcome, ${name}!`);
}
welcomeUser("Shehram");
welcomeUser();

function createUser(username: string, email?: string): void {
    console.log(`Username: ${username}`);

    if (email) {
        console.log(`Email: ${email}`);
    }
}
createUser("Shehram", "me@example.com");
createUser("Ali");

function calculateDiscount(price: number, discount: number = 10): number {
    return price - discount / 100 * price;
}
console.log(calculateDiscount(5000, 50));
console.log(calculateDiscount(2000));