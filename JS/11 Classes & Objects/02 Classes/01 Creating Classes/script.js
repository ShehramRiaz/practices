class Person {
    eat() {
        console.log("Person is Eating");
    }

    sleep() {
        console.log("Person is Sleeping");
    }

    walk() {
        console.log("Person is Walking");
    }
}

const p1 = new Person();
const p2 = new Person();
const p3 = new Person();

p1.eat();
p2.walk();
p3.sleep();