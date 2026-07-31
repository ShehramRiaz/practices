// Expands and Copy an Array
let test = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const copy = [...numbers];
    console.log(copy);
}

// Merging Arrays
test = () => {
    const frontEnd = ["HTML", "CSS", "JS"];
    const backend = ["Node.js", "PHP", "Python", "Java"];
    const database = ["SQL", "Mongo DB", "Maria DB"];

    const merged = [...frontEnd, ...backend, ...database];
    console.log(merged);
}

// Spread With Strings
test = () => {
    const str = "JavaScript";
    const arr = [...str];
    console.log(arr);
}

// With Function Argument
test = () => {
    function sum(a, b, c) {
        return a + b + c
    }

    const numbers = [16, 2, 5];
    console.log(sum(...numbers));
}

// Spread With Copying Objects
test = () => {
    const obj = {
        name: "Shehram",
        age: 19,
    };

    const copy = { ...obj };
    copy.name = "Shehram Riaz";

    console.log(obj);
    console.log(copy);
}

// Spread create a Shallow copy
test = () => {
    const obj = {
        name: "Shehram",
        age: 19,
        address: {
            city: "Mardan",
            country: "Pakistan",
        },
    };

    const copy = { ...obj };
    copy.name = "Shehram Riaz";
    copy.address.city = "Peshawar";

    // The nested object is copied by reference.
    console.log(obj);
    console.log(copy);
}

// Overriding Properties
test = () => {
    const obj = {
        name: "Shehram",
        age: 19,
    };

    const updated = { ...obj, age: 22 };
    console.log(updated);
}
test();