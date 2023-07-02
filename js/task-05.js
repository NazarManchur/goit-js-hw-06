const placeholder = document.querySelector("#name-input")
const names = document.querySelector("#name-output")


placeholder.addEventListener("input", handleInput);

function handleInput() {
        names.textContent = placeholder.value === "" ? "Anonymous" : placeholder.value;
}