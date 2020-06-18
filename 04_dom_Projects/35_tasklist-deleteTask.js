// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners() {

// Add task event
form.addEventListener('submit', addTask);

// Remove Task
taskList.addEventListener('click', removeTask);

// Clear task
clearBtn.addEventListener('click', clearTasks);

// Filter Tasks
filter.addEventListener('keyup', filterTasks)

}

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }

    // Create Li element
    const li = document.createElement('li');

    // Add class
    li.className = "collection-item";

    // Creating text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement('a');

    // Adding a class to a
    link.className = 'delete-item secondary-content';

    // Adding an icon
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';

    e.preventDefault();

}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear task
function clearTasks() {
    // taskList.innerHTML = '';

    // Using While loop (fast method)
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}