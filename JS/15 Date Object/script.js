const date = new Date();

console.log("Original Date");

console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


date.setFullYear(2006);
date.setMonth(11);

console.log("After Updating Year and Month");

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date);