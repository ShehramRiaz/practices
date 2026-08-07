/**
 * ======================
 * Generics
 * ======================
 */

// Generic Function
function identity<T>(value: T): T {
    return value;
}

console.log(identity(10));
console.log(identity("Hello"));
console.log(identity(true));

// Explicit Generic Type
console.log(identity<number>(100));
console.log(identity<string>("TypeScript"));

// Generic Array
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["HTML", "CSS", "TS"]));

// Multiple Generic Types
function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(createPair("Age", 19));
console.log(createPair(true, "Yes"));

// Generic Object
function printData<T>(data: T): void {
    console.log(data);
}

printData({
    name: "Shehram",
    age: 19,
});


// Additional Examples
function echo<T>(value: T): T {
    return value;
}
echo(19);
echo("Shehram");
echo(false);


function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
}
getLast([19, 67, 48, 63, 778]);
getLast(["Shehram", "Shahsawar", "Adeel", "AbdulBasit"]);


function makePair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}
makePair("HTML", 5);