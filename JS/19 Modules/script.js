import calculate, { PI, sum, sub } from "./utils/math.js";
import greet, { hello, sayHi as hi } from "./utils/greet.js";
import "./config/config.js";
import "./config/config.js";
import "./config/config.js"; // Loads only once
import * as shortcut from "./utils/shortcuts.js";

console.log(PI);
console.log(sum(4, 7));
console.log(sub(10, 5));
console.log(calculate(5, 6, sum));

greet(hi, "Javascript");
hi("Shehram");
hello("ES6");

shortcut.shortcut1();
shortcut.shortcut2();
shortcut.shortcut3();