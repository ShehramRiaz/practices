let a = 10;
let b = a;

a = 20;
console.log(b); // 10


const student1 = {
    name: "Shehram",
    age: 19,
    subject: "Computer Science",
}

console.log(student1);

const student2 = student1;
student2.name = "Accidental Change";

console.log(student1);
