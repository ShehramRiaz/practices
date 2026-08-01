console.log(a); // undefined
// console.log(b); // ReferenceError - Variable is in a TDZ
// console.log(c); // ReferenceError - Variable is in a TDZ

var a = "10";
let b = 20;
const c = 30;

sayHello();
function sayHello() {
    console.log("Hello");
}

// sayHi(); // ReferenceError - Variable is in a TDZ
const sayHi = function() {
    console.log("Hi");
}

function func() {
    console.log(x);
    // console.log(y); // TDZ
    // console.log(z); // TDZ

    var x = 10;
    let y = 20;
    const z = 30;
}
func();