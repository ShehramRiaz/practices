let arr = ["Shehram", "Shahsawar", "Adeel Alam", "Abdul Basit"];

let newArrLength = arr.push("Muhammad", "Khan", "Roboticela");
console.log(arr, newArrLength);

let deletedItem = arr.pop();
console.log(arr, deletedItem);

console.log(arr.toString());


arr = ["Orange", "Yellow", "Blue", "Green", "Purple"];
let arr2 = ["Apple", "Banana", "Guava", "Graphs", "Mango"];

console.log(arr.concat(arr2));

newArrLength = arr.unshift("Black", "White", "Pink")
console.log(arr, newArrLength);

deletedItem = arr.shift();
console.log(arr, deletedItem);

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(2, 7));
console.log(arr.slice(2));
console.log(arr.slice(-2));


console.log(arr.splice(3, 2, 101, 102, 103, 104));
console.log(arr);

// Splice Add Elements
arr.splice(5, 0, 201, 202, 203, 204);
console.log(arr);

// Splice Remove Elements
console.log(arr.splice(1, 3));
console.log(arr);

// Splice Replace Elements
console.log(arr.splice(3, 1, 1000));
console.log(arr);