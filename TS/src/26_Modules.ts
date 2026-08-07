import type { User, ID } from "./26_User";
import { add, subtract } from "./26_math";

const user: User = {
    name: "Shehram",
    age: 19,
};

const id: ID = "EMP-101";

console.log(user);
console.log(id);

console.log(add(10, 20));
console.log(subtract(30, 15));