function greet(greeting, nextGreeting) {
    setTimeout(() => {
        greeting();

        if (nextGreeting) {
            nextGreeting();
        }
    }, 2000);
}

function hi() {
    console.log("Hi");
}

function hello() {
    console.log("Hello");
}

function bye() {
    console.log("Bye");
}

function goodMorning() {
    console.log("Good Morning");
}

function goodEvening() {
    console.log("Good Evening");
}

greet(hi, () => {
    greet(hello, () => {
        greet(goodMorning, () => {
            greet(goodEvening, () => {
                greet(bye);
            });
        });
    });
});