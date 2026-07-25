for (let i = 0; i < 10; i++) {
    console.log("Hello World!!");
}

// Sum of first n natural numbers
let n = 100;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("The sum of first " + n + " natural number is: " + sum);

// First n odd numbers
let limit = 13;

for (let i = 1; i <= 2 * limit; i += 2) {
    console.log(i);
}