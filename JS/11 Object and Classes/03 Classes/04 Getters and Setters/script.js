class Person {
    constructor(name) {
        this.name = name;
    }

    get fullName() {
        return this.name;
    }

    set fullName(name) {
        this.name = name;
    }
}

const p1 = new Person("Shehram");
console.log(p1.fullName);
p1.fullName = "Shehram Riaz";
console.log(p1.fullName);