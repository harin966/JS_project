const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //stop default action
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userInputName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userInputName);
    paintGreetings(userInputName);
}

function paintGreetings(name) {
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greeings
    paintGreetings(savedUsername);
}
