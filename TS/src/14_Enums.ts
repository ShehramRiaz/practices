/**
 * ======================
 * Enums
 * ======================
 */

// Numeric Enum
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up);
console.log(Direction.Right);

// Custom Values
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}

console.log(StatusCode.Success);

// Auto Increment
enum Level {
    Low = 1,
    Medium,
    High,
}

console.log(Level.Low);
console.log(Level.Medium);
console.log(Level.High);

// String Enum
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
}

let role: UserRole = UserRole.Admin;

console.log(role);

// Reverse Mapping
console.log(Direction[0]);

// Function Example
enum Theme {
    Light,
    Dark,
}

function setTheme(theme: Theme): void {
    console.log(theme);
}

setTheme(Theme.Dark);


// Additional Examples
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
}
console.log(Days.Wednesday);


enum PaymentStatus {
    Pending = "PENDING",
    Paid = "PAID",
    Failed = "FAILED",
}
const status: PaymentStatus = PaymentStatus.Paid;


enum LogLevel {
    Info = 1,
    Warning,
    Error,
}