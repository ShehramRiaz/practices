const container = document.getElementById("container");
const p = document.createElement("p");
const h1 = document.createElement("h1");

p.textContent = "This is dynamic paragraph";
h1.textContent = "This is dynamic heading";

container.append(p, "Some other append text");
container.prepend(h1, "Some other prepend text");

container.before("Before Container");
container.after("After Container");

container.insertAdjacentHTML("beforebegin", "<strong>Before Begin</strong>");
container.insertAdjacentHTML("afterbegin", "<strong>After Begin</strong>");
container.insertAdjacentHTML("beforeend", "<strong>Before End</strong>");
container.insertAdjacentHTML("afterend", "<strong>After End</strong>");

p.remove();

const h3 = document.createElement("h3");
h3.textContent = "Replaced Heading";

h1.replaceWith(h3);
container.replaceChildren(h3, p);