class Student {
    constructor(name, registrationNo, subject) {
        this.name = name;
        this.registrationNo = registrationNo;
        this.subject = subject;
    }

    getName() {
        console.log(this.name);
    }

    getRegistrationNumber() {
        console.log(this.registrationNo);
    }

    getSubject() {
        console.log(this.subject);
    }
}

const s1 = new Student("Shehram Riaz", "25MDBCS794", "Computer Science");
const s2 = new Student("Muhammad Shahsawar Khan", "25MDBCS795", "Computer Science");

console.log(s1);
s1.getName();
s1.getRegistrationNumber();
s1.getSubject();