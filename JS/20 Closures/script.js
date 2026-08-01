// Closure Example
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();

greet();

// Multiple Closures are independent
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };

}
const counter1 = counter();
const counter2 = counter();

counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2

// Used for keeping variables private
function bankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log(`You have only RS${balance} in Your Account`);
                return;
            }
            balance -= amount;
        },

        getBalance() {
            return balance;
        }
    }
}

const account = bankAccount();
account.deposit(15000);
account.withdraw(6000);
console.log(account.getBalance());

// Used for Function Factory
function getFuncOfPower(number) {
    return function (num) {
        return num ** number;
    }
}

const square = getFuncOfPower(2);
const cube = getFuncOfPower(3);

console.log(square(5));
console.log(cube(3));