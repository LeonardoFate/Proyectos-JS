//OBTENER ELEMENTOS DEL DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

//Array para almacenar las tareas
let tasks = [];

//funcion para agregar una tarea
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText) {
    // Agregar tarea al array
    tasks.push(taskText);

    // Limpiar el campo de entrada
    taskInput.value = "";

    // Renderizar la lista de tareas
    renderTasks();
  }
}

// funcion para eliminar tareas
function deleteTask(index) {
  // eliminar el array
  tasks.splice(index, 1);

  renderTasks();
}

// Función para renderizar las tareas en el DOM
function renderTasks() {
  // Limpiar la lista actual
  taskList.innerHTML = "";

  // Recorrer el array de tareas y crear elementos li
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Crear botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => deleteTask(index);

    // Agregar el botón al elemento li
    li.appendChild(deleteBtn);

    // Agregar el elemento li a la lista
    taskList.appendChild(li);
  });
}
// agregar evento al boton
addTaskBtn.addEventListener("click", addTask);
