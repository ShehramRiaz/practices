const cities = ["Peshawar", "Karachi", "Lahore", "Multan", "Hyderabad"];

console.log("Using For Loop");
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

console.log("\nUsing For Of Loop");
for (let city of cities) {
    console.log(city.toUpperCase());
}

console.log("\nUsing For in Loop");
for (let key in cities) {
    console.log(cities[key]);
}