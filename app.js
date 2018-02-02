
var mySlide = document.getElementById("slider"),
myText = document.getElementById("demo"),
heightStr = mySlide.value;
myText.innerHTML = mySlide.value;
mySlide.addEventListener("input", function() {
    myText.innerHTML = mySlide.value;
    heightStr = mySlide.value;
    height = parseInt(heightStr);
    drawPyramid(height);
}, false);


var signSelect = document.getElementById("mySelect"), sign;
sign = signSelect.value;

signSelect.addEventListener('change', function(){
    sign = signSelect.value;
    drawPyramid(height);}, false);

function drawPyramid(height) {

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {      
        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; 
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += sign;
        }
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
