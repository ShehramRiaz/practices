function Person(name) {
    this.name = name;

    this.greet = function () {
        console.log(`Hello ${this.name}`);
    };
}

// Work but both p1 and p2 have it's own copy of greet()
const p1 = new Person("Shehram");
const p2 = new Person("Shahsawar");
p1.greet();
p2.greet();

// Using prototypes
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
}

const s1 = new Student("Ali");
const s2 = new Student("Ahmed");
s1.greet();
s2.greet();

// Property Lookup
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
}

const dog = new Animal("Bruno");
console.log(dog.name);
dog.eat();

console.log(dog instanceof Animal);