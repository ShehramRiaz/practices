const mainHeading = document.getElementById("mainHeading");
console.log(mainHeading);
console.dir(mainHeading);

const paras = document.getElementsByClassName("para");
console.dir(paras);

const h2s = document.getElementsByTagName("h2");
console.log(h2s);

// using Query Selector
const h1 = document.querySelector("h1");

const paragraphs = document.querySelectorAll(".para");
console.dir(paragraphs);