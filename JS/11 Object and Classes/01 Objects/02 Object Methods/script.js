const person = {
    name: "Shehram",

    // Old syntax
    greet: function () {
        console.log("Hello!");
    },

    // Modern ES6 Syntax
    sayHi() {
        console.log("Hi");
    },

    // Accessing Object Property
    printName() {
        console.log(this.name);
    }
};

person.greet();
person.sayHi();
person.printName();

// Bank Account Example
const bankAccount = {
    balance: 0,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    },

    showBalance() {
        console.log(this.balance);
    }
};

bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.showBalance(); // 300