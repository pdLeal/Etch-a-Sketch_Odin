// Creates 16x16 div-grid
const container = document.getElementById("container");
for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid", "item" + i);
    container.appendChild(div);
}