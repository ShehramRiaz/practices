const obj = {
    name: "pen",
    price: 20,
    company: "piano",
    rating: {
        stars: 5,
        rateCount: 9748,
    },
}

console.log(typeof obj);
console.log(obj);

const str = JSON.stringify(obj);
console.log(typeof str);
console.log(str);


const newObj = JSON.parse(str);
console.log(typeof newObj);
console.log(newObj);