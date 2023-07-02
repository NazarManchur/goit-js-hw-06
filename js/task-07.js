const inputBr = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputBr.addEventListener("input", function () {
    text.style.fontSize = inputBr.value + "px"
} )