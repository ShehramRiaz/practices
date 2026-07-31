// Extracting Values
function test() {
    const colors = ["red", "green", "blue", "black", "white", "grey"];
    const [first, second, third] = colors;

    console.log(first); // red
    console.log(second); // green
    console.log(third); // blue
}

// Skipping Values
function test() {
    const colors = ["red", "green", "blue", "black", "white", "grey"];
    const [first, second, , fourth] = colors;

    console.log(first); // red
    console.log(second); // green
    console.log(fourth); // black
}

// Using rest Operator
function test() {
    const colors = ["red", "green", "blue", "black", "white", "grey"];
    const [first, ...rest] = colors;

    console.log(first); // red
    console.log(rest); // ["green", "blue", "black", "white", "grey"]
}

// Using Default Values
function test() {
    const colors = ["red"];
    const [first, second = "magenta"] = colors;

    console.log(first); // red
    console.log(second); // magenta
}

// Swapping variable values
function test() {
    let a = 10;
    let b = 20;

    [a, b] = [b, a];

    console.log(a); // 20
    console.log(b); // 10
}

// Nested Array Destructuring
function test() {
    const arr = [1, 2, [3, 4], 5, 6];
    const [first, , [third1, third2], ...rest] = arr;

    console.log(first); // 1
    console.log(third1); // 3
    console.log(third2); // 4
    console.log(rest); // [5, 6]
}

// Function parameter Destructuring
function test({ name: userName, age }) {
    console.log(userName);
    console.log(age);
}

test({ name: "Shehram", age: 19 });