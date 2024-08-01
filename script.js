// Task object constructor
function Task(description, priority, deadline) {
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
  }
  
  // Function to add a new task
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var deadlineInput = document.getElementById("deadlineInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var description = taskInput.value;
      var priority = prioritySelect.value;
      var deadline = deadlineInput.value;
  
      var newTask = new Task(description, priority, deadline);
      var listItem = document.createElement("li");
  
      listItem.innerHTML = "<b>Description:</b> " + newTask.description + "<br><b>Priority:</b> " + newTask.priority + "<br><b>Deadline:</b> " + newTask.deadline;
      listItem.onclick = function() {
        this.classList.toggle("completed");
      };
      listItem.classList.add(newTask.priority + "-priority");
  
      taskList.appendChild(listItem);
  
      taskInput.value = "";
      prioritySelect.value = "high";
      deadlineInput.value = "";
    }
  }
  