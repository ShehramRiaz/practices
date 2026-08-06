interface Person {
    name: string;
    age?: number;
}

interface Student extends Person {
    course: string;
}

const student1: Student = {
    name: "Shehram",
    age: 19,
    course: "Computer Science",
};

const student2: Student = {
    name: "Shehram",
    // age: 19, // Age is optional
    course: "Computer Science",
};

// Extending multiple interfaces
interface Employee {
    department: string;
}

interface Manager extends Person, Employee {
    teamSize: number;
    // department: number; // Error - Cannot Override properties
}

const manager: Manager = {
    name: "Ali",
    age: 42,
    department: "IT",
    teamSize: 8,
};

function printManager(manager: Manager): void {
    console.log(manager.name);
    console.log(manager.age);
    console.log(manager.department);
    console.log(manager.teamSize);
}