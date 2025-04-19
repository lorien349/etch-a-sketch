// Program's variables
let squaresPerSide = 16;

// Colors
const BLACK_COLOR = "#000000";
const WHITE_COLOR = "#ffffff";

// DOM nodes
const container = document.querySelector("#container");
const changeButton = document.querySelector("#change-button");



// Functions
function changeSquareColor(square) {
    square.style.backgroundColor = BLACK_COLOR;
};

function createPanel() {
    const oldSquares = document.querySelectorAll(".square");
    oldSquares.forEach(function(square) {
        container.removeChild(square);
    });

    for (i = 0; i < (squaresPerSide ** 2); i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.width = `${(500 / squaresPerSide) - 2}px`;
        square.style.height = `${(500 / squaresPerSide) - 2}px`
        square.style.border = "1px solid black";
        square.style.backgroundColor = WHITE_COLOR;
        container.appendChild(square);
    };
};



// Event listeners
container.addEventListener("mousemove", (event) => changeSquareColor(event.target));

changeButton.addEventListener("click", function() {
    while (true) {
        squaresPerSide = Number(prompt("Insert a number between 1 and 64"));
        if (squaresPerSide >= 1 && squaresPerSide <= 64) {
            createPanel();
            break;
        } else continue;
    }
});



// Program
createPanel()