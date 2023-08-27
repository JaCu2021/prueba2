document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    let taskIdCounter = 0;

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskId = `task-${taskIdCounter}`;
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteButton" data-task-id="${taskId}">Eliminar</button>
            `;
            listItem.setAttribute("id", taskId);

            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector(".deleteButton");

            deleteButton.addEventListener("click", function() {
                const taskIdToDelete = deleteButton.getAttribute("data-task-id");
                const taskToDelete = document.getElementById(taskIdToDelete);
                taskList.removeChild(taskToDelete);
            });

            taskIdCounter++;
        }
    });
});
