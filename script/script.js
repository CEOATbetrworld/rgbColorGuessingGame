var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    })

resetButton.addEventListener("click", function () {
    // generate new colors
    colors = generateRandomColors(numSquares)
    //pick a new random color form array
    pickedColor = pickColor()
    //change the colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares 
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue";
})

for (var i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add event listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    //add num random colors to array 
    for (var i = 0; i < num; i++) {
        //pushing num colors into the array
        arr.push(randomColor())
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}