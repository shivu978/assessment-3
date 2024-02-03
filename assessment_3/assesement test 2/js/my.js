ocument.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    }
  
    // Function to remove a task
    function deleteTask(event) {
      const listItem = event.target.parentElement;
      taskList.removeChild(listItem);
    }
 