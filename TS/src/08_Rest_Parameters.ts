/**
 * ======================
 * Rest Parameters
 * ======================
 */

function add(...numbers: number[]): number {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));

function introduce(name: string, ...skills: string[]): void {
    console.log(`Name: ${name}`);
    console.log(`Skills: ${skills.join(", ")}`);
}

introduce("Shehram", "HTML", "CSS", "TypeScript");


// Additional Examples
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function printLanguages(...languages: string[]): void {
    languages.forEach((language, index) => {
        console.log(`${index + 1}. ${language}`);
    });
}

function printStudent(name: string, ...subjects: string[]): void {
    console.log(`Name: ${name}`);
    console.log(`Subjects: ${subjects.join(", ")}`);
}
