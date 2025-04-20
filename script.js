// Program's variables
let isRainbow = false;
let isEraser = false;
let squaresPerSide = 16;

// Colors
const BLACK_COLOR = "#000000";
const WHITE_COLOR = "#ffffff";
const DARK_GRAY_COLOR = "#929292";
const LIGHT_GRAY_COLOR = "#c5c5c5";

// DOM nodes
const container = document.querySelector("#squares-container");
const changeButton = document.querySelector("#change-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");



// Functions
function changeSquareColor(square) {
    switch(isEraser) {
        case false:
            switch(isRainbow) {
                case true:
                    const RAMDOM_COLOR = `rgb(${((Math.random()) * 100 + 70).toFixed(0)}, ${((Math.random()) * 100 + 70).toFixed(0)}, ${((Math.random()) * 100 + 70).toFixed(0)})`;
                    square.style.backgroundColor = RAMDOM_COLOR;
                    break;
                case false:
                    square.style.backgroundColor = BLACK_COLOR;
                    break;
            }
            break;

        case true:
            square.style.backgroundColor = WHITE_COLOR;
            break;
    }
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
        square.style.height = `${(500 / squaresPerSide) - 2}px`;
        square.style.border = "1px solid black";
        square.style.backgroundColor = WHITE_COLOR;
        container.appendChild(square);
    };
};



// Event listeners
container.addEventListener("mouseover", (event) => changeSquareColor(event.target));

changeButton.addEventListener("click", function() {
    while (true) {
        squaresPerSide = Number(prompt("Insert a number between 1 and 64"));
        if (squaresPerSide >= 1 && squaresPerSide <= 64) {
            createPanel();
            break;
        } else continue;
    }
});

rainbowButton.addEventListener("click", function() {
    switch(isRainbow) {
        case true:
            isRainbow = false;
            rainbowButton.style.backgroundColor = LIGHT_GRAY_COLOR;
            break;
        case false:
            isRainbow = true;
            rainbowButton.style.backgroundColor = DARK_GRAY_COLOR;
            if (isEraser == true) {
                eraserButton.style.backgroundColor = LIGHT_GRAY_COLOR;
                isEraser = false;
            }
            break;
    }
});

eraserButton.addEventListener("click", function() {
    switch(isEraser) {
        case true:
            isEraser = false;
            eraserButton.style.backgroundColor = LIGHT_GRAY_COLOR;
            break;
        case false:
            isEraser = true;
            eraserButton.style.backgroundColor = DARK_GRAY_COLOR;
            if (isRainbow == true) {
                rainbowButton.style.backgroundColor = LIGHT_GRAY_COLOR;
                isRainbow = false;
            }
            break;
    }
});



// Program
createPanel()