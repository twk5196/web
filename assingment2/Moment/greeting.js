const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");


const USER_LS ="currentUser";// ? 
const SHOWING_CN ="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const curValue = input.value;
    paintGreetings(curValue);
    saveName(curValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
   
}

function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText= `hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS); // ? 이줄이 의미하는 것 ?
    if(currentUser === null ){
        askForName();
    }
    else{
        paintGreetings(currentUser);
    }
}


function init(){
    loadName();
}

init();