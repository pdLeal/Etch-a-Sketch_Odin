const container = document.getElementById("container");
let mouseIsDown = false;
document.addEventListener("mouseup", () => mouseIsDown = false);
// 1º Section - Default grid, new grid and default color (black) 
function changeColor(evt) {
    evt.target.style.backgroundColor = "black";
}

function mouseOver(evt) {
    if (mouseIsDown) {
        return changeColor(evt)
    };
}

for (let i = 1; i <= 256; i++) { // Creates 16x16 div-grid (default)
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${100 / 16}%`
    gridItem.style.height = `${100 / 16}%`
    container.appendChild(gridItem);
    gridItem.addEventListener("mousedown", () => mouseIsDown = true);
    gridItem.addEventListener("mouseover", mouseOver);
}

function newGrid() {
    let promp = Number(prompt("How many squares by side?\n(Max of 100)"));

    if (promp > 100 || isNaN(promp)) {
        alert("Such a rebel, now choose up to 100 please")
        return newGrid();
    } else if (promp === 0) {
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 1; i <= (promp * promp); i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = `${100 / promp}%`
        gridItem.style.height = `${100 / promp}%`
        container.appendChild(gridItem);
        gridItem.addEventListener("mousedown", () => mouseIsDown = true);
        gridItem.addEventListener("mouseover", mouseOver);
    }
}
const btnNewGrid = document.getElementById("btn-new-grid");
btnNewGrid.addEventListener("click", newGrid);
// End of 1º Section

// 2º Section 
function mouseOverRandom(evt) {
    if (mouseIsDown) {
        return randomColor(evt)
    };
}

function randomColor(evt) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    evt.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    evt.target.removeEventListener("mouseover", mouseOverRandom);


}

function changeListener1() {
    for (const child of container.children) {
        child.removeEventListener("mouseover", mouseOver);
        child.removeEventListener("mouseover", mouseOverEraser);
        child.addEventListener("mouseover", mouseOverRandom);
    }
}
const btnRandomColor = document.getElementById("btn-random-color");
btnRandomColor.addEventListener("click", changeListener1);

function changeListener2() {
    for (const child of container.children) {
        child.removeEventListener("mouseover", mouseOverRandom);
        child.removeEventListener("mouseover", mouseOverEraser);
        child.addEventListener("mouseover", mouseOver);
    }
}

const btnBackToBlack = document.getElementById("btn-back-black");
btnBackToBlack.addEventListener("click", changeListener2)
// End of 2º Section

// 3º Section
function mouseOverEraser(evt) {
    if (mouseIsDown) {
        return eraser(evt)
    };
}

function eraser(evt) {
    evt.target.style.backgroundColor = "white";
}

function changeListener3() {
    for (const child of container.children) {
        child.removeEventListener("mouseover", mouseOverRandom);
        child.removeEventListener("mouseover", mouseOver);
        child.addEventListener("mouseover", mouseOverEraser);
    }
}

const btnEraser = document.getElementById("btn-eraser");
btnEraser.addEventListener("mouseover", changeListener3);

function clearCanvas() {
    for (const child of container.children) {
        child.style.backgroundColor = "white";
    }
}
const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", clearCanvas);