// Creates 16x16 div-grid
const container = document.getElementById("container");
for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
    div.addEventListener("mouseover", changeColor)
}

function changeColor(evt) {
    evt.target.classList.add("newColor");
}