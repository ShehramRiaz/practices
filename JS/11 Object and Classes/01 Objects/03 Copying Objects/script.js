const person1 = {
    name: "Ali"
};

const person2 = person1; // Only reference is stored in person2 not object

person2.name = "Ahmed";

console.log(person1.name); // Ahmed
console.log(person2.name); // Ahmed

// Comparing Objects with same properties
const obj1 = {
    name: "Ali"
};

const obj2 = {
    name: "Ali"
};

console.log(obj1 === obj2); // false

// Copying Objects

// Shallow Copy
const original1 = {
    name: "Shehram",
    age: 19,
    address: {
        city: "Mardan",
        country: "Pakistan",
    },
}

const copyShallow = { ...original1 }; // Outer Objects are copied but nested objects are still shared
copyShallow.name = "Shahsawar";
copyShallow.address.city = "Lahore"; // This will be reflected in student 1 also.

console.log(original1);
console.log(copyShallow);

// Deep Copy
const original2 = {
    name: "Shehram",
    age: 19,
    address: {
        city: "Mardan",
        country: "Pakistan",
    },
}

const copyDeep = structuredClone(original2); // Independent Copy
copyDeep.name = "Shahsawar";
copyDeep.address.city = "Lahore";

console.log(original2);
console.log(copyDeep);