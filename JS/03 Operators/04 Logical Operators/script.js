console.log(5 > 2 && 10 === 9 + 1);  // true
console.log(5 < 2 && 10 === 9 + 1); // false
console.log(5 > 2 && 10 === 9);     // false
console.log(5 > 29 && 10 === 9);    // false

console.log(5 > 2 || 10 === 9 + 1);  // true
console.log(5 < 2 || 10 === 9 + 1); //  true
console.log(5 > 2 || 10 === 9);     //  true
console.log(5 > 29 || 10 === 9);    // false

console.log(!(5 < 2)); // true
console.log(!(5 === 2 + 3)); // false