const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    console.log("Handler 1");
});

btn.addEventListener("click", (e) => {
    console.log("Handler 2");
});

const handler3 = (e) => {
    console.log("Handler 3");
};

btn.addEventListener("click", handler3);

btn.addEventListener("click", (e) => {
    console.log("Handler 4");
});

btn.removeEventListener("click", handler3);