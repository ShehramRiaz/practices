let i = 0;
while (i < 10) {
    console.log("Hello World!!");
    i++;
}

// Sum of first n natural numbers
let n = 100;
let sum = 0;
let j = 1;

while (j <= n) {
    sum += j;
    j++;
}
console.log("The sum of first " + n + " natural number is: " + sum);

// First n odd numbers
let limit = 13;
let k = 1;

while (k <= 2 * limit) {
    console.log(k);
    k += 2;
}