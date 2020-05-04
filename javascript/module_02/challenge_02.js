// Ex 01
function addSquare() {
    var clone = sqrElement.cloneNode(true);
    clone.onmouseover = setRandomColor;
    clone.onmouseleave = setDefaultColor;
    appDivElement.appendChild(clone);
}

// Ex 02
function setRandomColor() {
    this.style.backgroundColor = getRandomColor();
}

function setDefaultColor() {
    this.style.backgroundColor = "#f00";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Ex 03

function addNameToUlList(value) {
    var liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(value));

    liElement.ondblclick = function () {
        if (this.parentElement.childElementCount > 1) {
            this.parentElement.removeChild(this);
        }
    }

    ulList.appendChild(liElement);
}

var ulList = document.querySelector("#ulList");
var names = ["Diego", "Gabriel", "Lucas"];
names.forEach(addNameToUlList);

// Ex 04
function addName() {
    var nameText = document.querySelector("input[name=newName]").value;
    document.querySelector("input[name=newName]").value = "";
    addNameToUlList(nameText);
}

// Extra

function removeAllSquares() {
    document.querySelectorAll(".square").forEach(square => {
        square.parentElement.removeChild(square);
    });
}

// Global

var sqrElement = document.createElement("div");
sqrElement.className = "square";
sqrElement.style.width = "100px";
sqrElement.style.height = "100px";
sqrElement.style.backgroundColor = "#f00";

var appDivElement = document.querySelector("#ex_01");
document.querySelector(".botao").onclick = addSquare;
document.querySelector("#remove").onclick = removeAllSquares;
