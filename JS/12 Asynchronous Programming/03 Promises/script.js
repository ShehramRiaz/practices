function greet(greeting) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(greeting());
            // reject("OOPS! Some Error Occurred while fetching data");
        }, 2000);
    });
}

function hi() {
    return "Hi";
}

function hello() {
    return "Hello"
}

function goodMorning() {
    return "Good Morning";
}

function goodEvening() {
    return "Good Evening";
}

function bye() {
    return "Bye";
}

greet(hi).then(res => {
    console.log(res);
    return greet(hello);
}).then(res => {
    console.log(res);
    return greet(goodMorning);
}).then(res => {
    console.log(res);
    return greet(goodEvening);
}).then(res => {
    console.log(res);
    return greet(bye);
}).then(res => {
    console.log(res);
}).catch(err => {
    alert(err);
});