/**
 * ======================
 * Type Guards
 * ======================
 */

// typeof
function print(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

// instanceof
const today = new Date();

if (today instanceof Date) {
    console.log(today.getFullYear());
}

// in operator
interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

function makeSound(animal: Dog | Cat): void {
    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// User-defined type guard
interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(animal: Fish | Bird): animal is Fish {
    return "swim" in animal;
}

function move(animal: Fish | Bird): void {
    if (isFish(animal)) {
        animal.swim();
    } else {
        animal.fly();
    }
}


// Additional Examples
function printValue(value: string | boolean): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(!value);
    }
}

interface Car {
    drive(): void;
}

interface Boat {
    sail(): void;
}

function start(vehicle: Car | Boat): void {
    if("drive" in vehicle) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}

function isCar(vehicle: Car | Boat): vehicle is Car {
    return "drive" in vehicle;
}

function vehicleInfo(vehicle: Car | Boat): void {
    if(isCar(vehicle)) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}