const item = {
    name: "Pen",
    price: 10.99,
}

const templateLiteral = `The cost of ${item.name} is RS ${item.price}`;
console.log(templateLiteral);

// Nested Template Literals
const age = 19;
console.log(`Your age is ${age > 18 ? `Greater` : `Smaller`} than 18`);

function tagTemplate(strings, ...values) {
    console.log(strings);
    console.log(values);
}

tagTemplate`My name is ${`Shehram`} and\nI am Studying ${`Template Literals`}`;