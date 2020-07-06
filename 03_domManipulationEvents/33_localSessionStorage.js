// Set local storage
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 40);

// Set session Storage
// sessionStorage.setItem('name', 'guil');

// Remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();
// console.log(name, age);
// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value;
//     localStorage.setItem('task', task);
//     alert('Task Saved');

// })

// Storing Mutiple values in local Storage
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

    alert('Task Saved');
    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){

    console.log(task);
});