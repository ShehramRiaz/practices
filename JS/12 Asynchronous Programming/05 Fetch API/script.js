const url = "https://catfact.ninja/fact";

const getFactBtn = document.getElementById("getFactBtn");
const factPara = document.getElementById("factPara");

function startLoading() {
    const loader = document.querySelector(".loader-overlay");
    loader.classList.remove("hidden");
}

function stopLoading() {
    const loader = document.querySelector(".loader-overlay");
    loader.classList.add("hidden");
}

async function getFact() {
    startLoading();
    const response = await fetch(url);
    const data = await response.json();
    stopLoading();
    factPara.textContent = data.fact;
}
getFact();

getFactBtn.addEventListener("click", getFact);