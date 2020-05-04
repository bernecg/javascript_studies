function showAlert() {
    alert("ALEEEEEEEERT! " + inputElement.value);
}

function showLink() {
    var linkElement = document.createElement("a");
    linkElement.href = "http://bernecg.github.io/";
    var textElement = document.createTextNode(inputElement.value);
    linkElement.appendChild(textElement);

    var containerElement = document.querySelector("#app");
    containerElement.appendChild(linkElement);
}

// var inputElement = document.getElementById("name");
// var inputElement = document.getElementsByTagName("input");
// var inputElement = document.getElementsByClassName("name");

// querySelector soh retorna o primeiro elemento que achar
// se quiser todos temm o querySelectorAll
var inputElement = document.querySelector("input[name=name]");
var btnElement = document.querySelector("button.botao");
btnElement.onclick = showLink;

var boxElement = document.querySelector(".box");
boxElement.style.width = "100px";
boxElement.style.height = "100px";
boxElement.style.backgroundColor = "#f00";

console.log(boxElement);
console.log("loaded...");
