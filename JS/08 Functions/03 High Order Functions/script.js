let arr = [2, 4, 6, 8, 10];
arr.forEach((value, index, array) => {
    console.log(`The value at index ${index} of array ${array} is ${value}`);
});

let square = arr.map((value, index, array) => {
    return value ** 2;
});

console.log(square);

let divisibleBy4 = arr.filter((value, index, array) => {
    return value % 4 === 0;
});

console.log(divisibleBy4);

let sum = arr.reduce((acc, curr) => {
    return acc + curr
}, 0);

console.log(sum);