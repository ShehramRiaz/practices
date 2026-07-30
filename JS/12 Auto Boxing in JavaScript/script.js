const str = "Shehram";

console.log(str); // printed as a string not an object
console.log(str.toUpperCase()); // The string is temporary converted to String object to call the method and then discarded.


const subject = "Computer Science";
subject.university = "UET";

console.log(subject.university); // undefined: The newly created temporary string object do not have any university property.