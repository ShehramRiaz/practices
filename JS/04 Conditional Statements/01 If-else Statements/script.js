const marks = 101;

// Complex Version
if (marks <= 100 && marks > 80) {
    console.log("Your Grade is A");
} else if (marks <= 80 && marks > 60) {
    console.log("Your Grade is B");
} else if (marks <= 60 && marks > 40) {
    console.log("Your Grade is C");
} else if (marks <= 40 && marks > 30) {
    console.log("Your Grade is D");
} else if (marks <= 30 && marks >= 0) {
    console.log("Failed");
} else {
    console.log("Invalid Marks");
}

// Cleaner version
if (marks < 0 || marks > 100) {
    console.log("Invalid Marks");
} else if (marks <= 30) {
    console.log("Failed");
} else if (marks <= 40) {
    console.log("Your Grade is D");
} else if (marks <= 60) {
    console.log("Your Grade is C");
} else if (marks <= 80) {
    console.log("Your Grade is B");
} else {
    console.log("Your Grade is A");
}