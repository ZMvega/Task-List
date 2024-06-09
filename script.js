import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
const btn = document.querySelector('[data-form-btn');
//const content = '';

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = '';

    const taskContent = document.createElement('div');
    const titleTask =document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    //taskContent.appendChild(deleteIcon());

    task.appendChild(deleteIcon());
    list.appendChild(task);
};
btn.addEventListener("click", createTask);