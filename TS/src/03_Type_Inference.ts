/**
 * ==============
 * Type Inference
 * ==============
 */

let name = "Shehram"; // Inferred as string
let age = 19; // Inferred as a number
let isStudent = true; // Inferred as boolean

let frameworks = ["React", "Vue", "Angular"]; // Inferred as string[]

let mixed = ["Shehram", 19, false]; // Inferred as (string | number | boolean)[]

// We cannot assign wrong values
// name = false;
// age = "Twenty";
// isStudent = "Yes";

// frameworks.push(true);

// When declaring variables without initialization We must annotate
let userInput: string;


// Additional Examples
let favoriteFramework = "React"; // Inferred as string
let favoriteDb = "SQL"; // Inferred as string
let favoriteBackendLanguage = "JavaScript"; // Inferred as string
let frontEndTechnologies = ["HTML", "CSS", "JS"]; // Inferred as string[]

let status = ["HTML", 2026, true]; // Inferred as (string | number | boolean)[]

const city = "Lahore"; // Inferred as "Lahore"