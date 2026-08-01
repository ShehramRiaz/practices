const person = {
    name: "Shehram",
    age: 20,
    city: "Mardan",
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.assign({}, person, { subject: "Computer Science" })); // Perform Shallow Copy


const person2 = {
    name: "Ali",
    address: {
        city: "Mardan",
        country: "Pakistan",
    },
};

Object.freeze(person2);

person2.name = "Ahmed"; // Not Effect
person2.age = 22; // Not Effect
delete person2.name; // Not Effect

person2.address.city = "Karachi"; // Affected

console.log(person2);


const person3 = {
    name: "Shahsawar",
    address: {
        city: "Mardan",
        country: "Pakistan",
    },
};

Object.seal(person3);

person3.name = "Muhammad"; // Affected
person3.age = 22; // Not Effect
delete person3.name; // Not Effect

delete person3.address.city; // Affected

console.log(person3);


const obj = {
    name: "Shehram",
    age: 19,
};

console.log(Object.hasOwn(obj, "name"));
console.log(Object.hasOwn(obj, "age"));
console.log(Object.hasOwn(obj, "gender"));


const entries = [
    ["name", "Ali"],
    ["age", 22]
];

const personFromEntries = Object.fromEntries(entries);
console.log(personFromEntries);
