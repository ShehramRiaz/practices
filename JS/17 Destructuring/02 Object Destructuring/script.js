// Extracting Values
function test() {
    const user = { name: "Shehram", age: 19, city: "Mardan" };
    const { name, age, city } = user;

    console.log(name);  // Shehram
    console.log(age);   // 19
    console.log(city);  // Mardan
}

// Renaming Variables
function test() {
    const user = { name: "Shehram", age: 19, city: "Mardan" };
    const { name: userName, city: location } = user;

    console.log(userName); // Shehram
    console.log(location); // Mardan
}

// Default Values
function test() {
    const user = { name: "Shehram", age: 19, city: "Mardan" };
    const { name, gender = "Male" } = user;

    console.log(name); // Shehram
    console.log(gender); // Male
}

// Default Values and renaming
function test() {
    const user = { name: "Shehram", age: 19, city: "Mardan" };
    const { name: userName, gender: myGender = "Male" } = user;

    console.log(userName); // Shehram
    console.log(myGender); // Male
}

//  Nested Destructuring
function test() {
    const student = {
        name: "Shehram",
        address: { city: "Mardan", country: "Pakistan" }
    };

    const { address: { city, country: myCountry } } = student;

    console.log(city); // Mardan
    console.log(myCountry); // Pakistan
}
test();