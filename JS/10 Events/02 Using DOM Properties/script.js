const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.onclick = () => {
    alert("I am clicked");
}

box.onmouseover = () => {
    alert("I am hovered");
}

btn.onclick = (e) => {
    alert("Click Overrides");
    console.log(e);
}