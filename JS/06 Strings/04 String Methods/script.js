let str = "Shehram Riaz";
console.log(str.toUpperCase()); // SHEHRAM RIAZ
console.log(str.toLowerCase()); // shehram riaz

str = "            This is a string             with many spaces                        ";
console.log(str.trim()); // This is a string             with many spaces

str = "Shehram Riaz";
console.log(str.slice(0, 7)); // Shehram

console.log(str.concat(" is learning Javascript")); // Shehram Riaz is learning Javascript
console.log(str + " is learning Javascript"); // Shehram Riaz is learning Javascript

str = "Hello World";
console.log(str.replace("lo", "p")); // Help World
console.log(str.replace("o", "i")); // Helli World
console.log(str.replaceAll("o", "i")); // Helli Wirld

console.log(str.charAt(6)); // W
console.log(str[6]); // W
console.log(str["6"]); // W