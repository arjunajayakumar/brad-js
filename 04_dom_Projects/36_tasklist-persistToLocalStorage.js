// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners()

// DOM Load Event
document.addEventListener('DOMContentLoaded', getTasks);    

// Load all event listeners
function loadEventListeners() {

// Add task event
form.addEventListener('submit', addTask);

// Remove Task
taskList.addEventListener('click', removeTask);

// Clear task
clearBtn.addEventListener('click', clearTasks);

// Filter Tasks
filter.addEventListener('keyup', filterTasks);


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

    // Store Local Storage
    storeTaskInLocalStorage( taskInput.value);

    // clear input
    taskInput.value = '';

    e.preventDefault();

}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you Sure?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from LS 
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);    
        }
    }
}


// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks   
function clearTasks() {
    // taskList.innerHTML = '';

    // Using While loop (fast method)
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Clear LS
    clearTasksFromLocalStorage();
}
 
// Clear tasks from LS
function clearTasksFromLocalStorage () {
    localStorage.clear();
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

// Store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
     
}

// Get tasks from LS
function getTasks ()  {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach (function(task) {

     // Create Li element
     const li = document.createElement('li');

     // Add class
     li.className = "collection-item";
 
     // Creating text node and append to li
     li.appendChild(document.createTextNode(task));
 
     // Create a new link element
     const link = document.createElement('a');
 
     // Adding a class to a
     link.className = 'delete-item secondary-content';
 
     // Adding an icon
     link.innerHTML = '<i class="fa fa-remove"></i>';
 
     // Append link to li
     li.appendChild(link);
 
     // Append li to ul
     taskList.appendChild(li);

    });


}
