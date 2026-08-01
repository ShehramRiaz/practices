class Person {
    sayHi() {
        console.log("Hi");
    }

    sayHello() {
        console.log("Hello");
    }

    sayBye() {
        console.log("Bye");
    }
}

const p1 = new Person();
p1.sayHi();
p1.sayHello();
p1.sayBye();

// Using Constructor to initialize objects
class Student {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    printName() {
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }

    printSubject() {
        console.log(this.subject);
    }
}

const s1 = new Student("Shehram", 19, "CS");
s1.printName();
s1.printAge();
s1.printSubject();