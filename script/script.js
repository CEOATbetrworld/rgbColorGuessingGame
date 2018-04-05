var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 225, 255)",
    "rgb(0, 0, 225)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add event listeners

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        (clickedColor === pickedColor) ? alert("correct") : alert("incorrect");
    })


}
