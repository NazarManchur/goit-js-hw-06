const inputEI = document.querySelector("#validation-input");
const inputLenght = Number(inputEI.dataset.length)

inputEI.addEventListener("blur", color)

console.log(inputLenght)

function color() {
    if (inputEI.value.length === inputLenght) {
        inputEI.classList.add('valid')
        inputEI.classList.remove('invalid')
    }
    else {
        inputEI.classList.add('invalid')
        inputEI.classList.remove('valid')
    }
}