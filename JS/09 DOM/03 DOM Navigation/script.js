const parent = document.getElementById("parent");
const para = document.getElementById("para");
const span = document.getElementById("span");

console.log(parent.children);
console.log(parent.childNodes);

console.log(parent.firstElementChild);
console.log(parent.firstChild);

console.log(parent.lastElementChild);
console.log(parent.lastChild);

console.log(para.parentElement);
console.log(span.parentNode);

console.log(para.nextElementSibling);
console.log(para.previousElementSibling);
console.log(parent.nextElementSibling);


console.log(para.nextSibling);
console.log(para.previousSibling);

console.log(parent.contains(para));
console.log(para.closest("#parent"));