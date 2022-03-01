const toDoForm = document.querySelector('form.to-do');
const list = document.querySelector('ul.to-do');
const toDoInput = document.querySelector('.to-do input');

const addTasks = (e) => {
e.preventDefault()
const taskName = toDoInput.value;
if (taskName === "") return;
const newTask = document.createElement('li');
newTask.innerHTML = taskName + "<button>X</button>";
list.appendChild(newTask);
toDoInput.value = "";
}

toDoForm.addEventListener('submit', addTasks)