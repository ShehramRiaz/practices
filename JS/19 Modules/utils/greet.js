function greet(greeting, name) {
    greeting(name);
}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

function sayHi(name) {
    console.log(`Hi ${name}`);
}

export default greet;
export { sayHello as hello, sayHi };