const form = document.querySelector(".login-form");

form.addEventListener("submit", active);
function active(elem) {
    elem.preventDefault();
    const formElement = elem.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
    const infa = {
        email,
        password,
    };
    console.log(infa);
    elem.currentTarget.reset();
}