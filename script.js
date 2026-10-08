// JavaScript To-Do App

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
}
