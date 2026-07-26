console.log(sum(5, 6));
// console.log(arrowSum(5, 6)); Error

function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

console.log(arrowSum(5, 6));


const mul = (a, b) => a * b;
console.log(mul(2, 6));

const sayHello = name => console.log(`Hello ${name}`);
sayHello("Shehram");