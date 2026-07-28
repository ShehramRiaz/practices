const student = {
    name: "Shehram Riaz",
    registrationNo: "25MDBCS794",
    subject: "Computer Science",
    CGPA: 3.55,

    printName: function () {
        console.log(this.name);
    },

    printCGPA() {
        console.log(this.CGPA);
    }
}

console.log(student.subject);
student.printName();
student.printCGPA();

const array = ["Shehram", "Shahsawar", "Adeel Alam", "Abdul Basit"];
array.push("Hajra"); // Defined in prototype of Array Object
console.log(array);

const human = {
    eat() {
        console.log("Human is Eating");
    },
    walk() {
        console.log("Human is Walking");
    },

    run() {
        console.log("Human is Running");
    },

    sleep() {
        console.log("Human is Sleeping");
    }
}

const engineer = {
    build() {
        console.log("Engineer is Building");
    },

    createMap() {
        console.log("Engineer is Creating Map");
    },

    salary() {
        console.log("50000");
    }
}

const programmer = {
    code() {
        console.log("Programmer is Coding");
    },

    debug() {
        console.log("Programmer is Debugging");
    },

    sleep() {
        console.log("Programmer is debugging while sleeping");
    }
}

Object.setPrototypeOf(engineer, human);
engineer.sleep();

Object.setPrototypeOf(programmer, human);
programmer.sleep();