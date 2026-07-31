// Rest In Function Parameters
const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5, 6));

// Rest in Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 0];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9, 0]

// Rest In Object Destructuring
const user = { name: "Shehram", age: 19, city: "Mardan", country: "Pakistan" };

const { name, ...others } = user;

console.log(name);
console.log(others);