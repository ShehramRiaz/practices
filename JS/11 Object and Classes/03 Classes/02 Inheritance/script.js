class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Student extends Person {
    constructor(name, age, gender, rollNo) {
        super(name, age, gender);
        this.rollNo = rollNo;
    }

    printRollNo() {
        console.log(this.rollNo);
    }
}

const s1 = new Student("Shehram", 19, "Male", 45);
s1.eat();
s1.printRollNo();