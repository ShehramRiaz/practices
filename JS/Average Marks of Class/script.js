const marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of marks) {
    sum += val;
}

const averageMarks = sum / marks.length;

console.log("Average Marks of Class: " + averageMarks);