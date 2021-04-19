const title = document.querySelector("#title");
title.innerHTML = "I own all of Full stack";
document.title = "my world";

const CLICKED_CLASS = "clicked";

function handleClick() {
    const CURRENT_CLASS = title.className;
    if(CURRENT_CLASS !==CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }
    else{
        title.className = "";
    }
}

function init() {
    title.addEventListener("click",handleClick);
}
init();

