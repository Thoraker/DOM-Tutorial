// Your code here
let listElements = document.querySelector("ul");
let input = document.querySelector("#addToDo");
console.log(listElements);

const addTask = (event) => {
    if (event.key === "Enter") {
        let elementLi = document.createElement("li");
        elementLi.innerHTML = "<span><i class='fa fa-trash'></i></span>" + input.value;
        listElements.appendChild(elementLi);
    }
};

const deleteTask =(task) => {
    listElements.removeChild(task.target);
}

input.addEventListener("keypress", addTask);

listElements.addEventListener("click", deleteTask);