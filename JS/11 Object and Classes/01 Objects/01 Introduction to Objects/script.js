// Properties
const person = {
    name: "Shehram",
    age: 19,
    city: "Mardan",
};

// Can store any type of value
const user = {
    name: "Shehram",
    age: 19,
    isStudent: true,
    marks: [90, 85, 88],
    address: {
        city: "Mardan",
        country: "Pakistan"
    }
};

// Accessing Properties
// Using Dot Notation
console.log(user.name);
console.log(user.age);

// Bracket Notation
console.log(user["isStudent"]);

// Adding Properties dynamically
user.gpa = 3.5;
console.log(user);

// Updating Properties
user.gpa = 3.9;
console.log(user);

// deleting properties
delete user.address;
console.log(user);