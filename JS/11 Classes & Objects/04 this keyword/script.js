const student = {
    name: "Shehram",
    age: 19,
    subject: "Computer Science",

    printName() {
        console.log(this.name);
    },

    printSubject() {
        setTimeout(() => {
            console.log(this.subject);
        }, 4000);
    }
};

student.printName();
student.printSubject();