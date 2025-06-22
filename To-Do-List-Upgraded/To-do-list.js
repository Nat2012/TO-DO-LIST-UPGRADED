function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  let errorMessage = document.getElementById("errorMessage");
  let taskList = document.getElementById("taskList");
  let newTask = document.createElement("li");
  newTask.textContent = taskInput;
  taskList.appendChild(newTask);
  document.getElementById("taskInput").value = ""; // Clear input field
  if (taskInput == "") {
    errorMessage.style.display = "block"; // Show error message
    newTask.remove(); // Remove the task if input is empty
  } else {
    errorMessage.style.display = "none"; // Hide error message
  }

  newTask.addEventListener("click", function () {
    newTask.classList.toggle("completed");
  });

  let deleteBtn = document.createElement("span");
  deleteBtn.textContent = " 🗑️";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop the strike-through toggle
    newTask.remove();
  });

  newTask.appendChild(deleteBtn); // Attach delete button to the task
  taskList.appendChild(newTask);
  document.getElementById("taskInput").value = ""; // Clear input field
}

function clearTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear all tasks
}