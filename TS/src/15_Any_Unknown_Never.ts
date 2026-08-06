// The any Type
let value: any = "Shehram";

value = 19;
value = true;
value = ["HTML", "CSS"];

// Using value type
value.toUpperCase(); // Dangerous


// any in Function Parameters
function print(value: any): void {
    console.log(value);
}

print("Hello");
print(100);
print(true);


// The unknown Type
let val: unknown;

val = "Hello";
val = 100;
val = true;

// unknown Cannot Be Used Directly
// val.toUpperCase(); // Error

// Narrowing an unknown
if (typeof val === "string") {
    console.log(val.toUpperCase());
}


// The never Type
// Function That Always Throws
function throwError(message: string): never {
    throw new Error(message);
}

function forever(): never {
    while (true) {
        console.log("Running...");
    }
}