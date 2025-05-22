const container = document.querySelector(".container");

let currentGridSize = 16; 

function formGrid(userInput) {
    let containerSize = container.clientWidth;
    for (let i = 0; i < userInput * userInput; i++) {
        const grid = document.createElement("div");
        grid.classList.add("square");
        
        let squareSize = containerSize / userInput;
        grid.style.width = squareSize + "px";
        grid.style.height = squareSize + "px";

        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "black";
        });
        container.appendChild(grid);
    }
}

formGrid(16);

function createNewGrid() {
    const newGrid = document.querySelector("#new-grid");
    newGrid.addEventListener("click", () => {
        currentGridSize = prompt("Enter a number from 4 to 100");
        currentGridSize = Number(currentGridSize);
        if (currentGridSize >= 4 && currentGridSize <= 100) {
            container.innerHTML = "";
            formGrid(currentGridSize);
        }
        else {
            alert("Please enter a number within range");
        }
    });     
}

createNewGrid();

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    container.innerHTML = "";
    formGrid(currentGridSize);
});