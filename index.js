const container = document.getElementById("container");
for (let i = 1; i <= 256; i++) { // Creates 16x16 div-grid
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = `${100 / 16}%`
    div.style.height = `${100 / 16}%`
    container.appendChild(div);
    div.addEventListener("mouseover", changeColor)
}

function changeColor(evt) {
    evt.target.classList.add("newColor");
}

function newGrid() {
    let promp = Number(prompt("How many squares by side?\n(Max of 100)"));

    if(promp > 100 || isNaN(promp)) {
        alert("Such a rebel, now choose up to 100 please")
        return newGrid();
    }

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 1; i <= (promp * promp); i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${100 / promp}%`
        div.style.height = `${100 / promp}%`
        container.appendChild(div);
        div.addEventListener("mouseover", changeColor)
    }
}
const btnNewGrid = document.getElementById("btn-new-grid");
btnNewGrid.addEventListener("click", newGrid);