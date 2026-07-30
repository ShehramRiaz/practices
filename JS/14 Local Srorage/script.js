const information = {
    name: "Shehram",
    age: 19,
    university: "UET",
    subject: "Computer Science",
};

localStorage.setItem("info", JSON.stringify(information));

const storedInformation = JSON.parse(localStorage.getItem("info"));
console.log(storedInformation);