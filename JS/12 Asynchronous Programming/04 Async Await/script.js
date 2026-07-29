function greet(greeting) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            greeting();
            resolve(200);
        }, 2000);
    });
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

// async function showGreet() {
//     await greet(hi);
//     await greet(hello);
//     await greet(goodMorning);
//     await greet(goodEvening);
//     await greet(bye);
// }

// showGreet();

(async function () {
    await greet(hi);
    await greet(hello);
    await greet(goodMorning);
    await greet(goodEvening);
    await greet(bye);
})();