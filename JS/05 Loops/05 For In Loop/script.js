const student = {
    name: "Shehram Riaz",
    age: 19,
    subject: "Computer Science",
    grade: 3.44,
}

for (let key in student) {
    console.log("Key = " + key + " Value = " + student[key]);
}