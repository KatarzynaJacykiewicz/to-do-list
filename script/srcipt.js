const toDoForm = document.querySelector('form.to-do');
const list = document.querySelector('ul.to-do');
const toDoInput = document.querySelector('.to-do input');

const addTasks = (e) => {
e.preventDefault()
const taskName = toDoInput.value;
if (taskName === "") return;
const newTask = document.createElement('li');
newTask.innerHTML = "<div></div>" + "<p>" + taskName + "</p>"+"<button>Delete</button>";
list.appendChild(newTask);
toDoInput.value = "";

const remove = (e) => {
    e.target.parentNode.remove();
}
document.querySelectorAll('li button').forEach(item => item.addEventListener('click', remove))

const lineThrough = (e) => {
    e.target.nextSibling.style.textDecoration = "line-through";
    e.target.nextSibling.style.color = "grey";
    e.target.parentNode.style.backgroundColor = "rgba(255,255,255, 0.5";
    e.target.style.backgroundColor = "rgb(85, 149, 165)";
}
document.querySelectorAll('li div').forEach(item => item.addEventListener('click', lineThrough))

}
toDoForm.addEventListener('submit', addTasks)


