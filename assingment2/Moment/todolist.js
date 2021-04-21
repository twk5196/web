const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoLIst");

const TODOS_LS = "todDos";

function paintToDo(text){

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}


function init (){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);


}

init();