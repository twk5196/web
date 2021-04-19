const title = document.querySelector("#title");
title.innerHTML = "I own all of Full stack";
document.title = "my world";

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click",handleClick);
}
init();

