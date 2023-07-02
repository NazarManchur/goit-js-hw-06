
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");


let conter = 0


decrement.addEventListener("click", desc)
increment.addEventListener("click", incr)

function desc() {
    conter = conter - 1;
   value.textContent = conter
}

function incr() {
    conter = conter + 1;
    value.textContent = conter
}