class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(`${this.name} is Eating`);
    }

    sleep() {
        console.log(`${this.name} is Sleeping`);
    }

    work() {
        console.log(`${this.name} is Working`);
    }
}

class Engineer extends Person {
    constructor(name, age, gender, department) {
        super(name, age, gender);
        this.department = department;
    }

    work() {
        super.eat();
        console.log(`${this.name} is Building Something in ${this.department} department.`);
    }
}

const e1 = new Engineer("Shehram", 19, "Male", "Computer Science");

console.log(e1.name);
console.log(e1.department);
e1.sleep();
e1.work();