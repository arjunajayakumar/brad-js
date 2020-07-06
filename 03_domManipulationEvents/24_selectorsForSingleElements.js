// document.getElementById()
// console.log(document.getElementById('task-title'));

// Get things from the element
//console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);



//Change styling

console.log(document.getElementById('task-title').style.background="#000");
console.log(document.getElementById('task-title').style.color="#fff");
console.log(document.getElementById('task-title').style.padding="10px");
console.log(document.getElementById('task-title').style.display="none");

// Change content
console.log(document.getElementById('task-title').textContent="Task-List");
console.log(document.getElementById('task-title').innerText="My-tasks");
console.log(document.getElementById('task-title').innerHTML='<span style="color:yellow">Task Lists</span>');

// Storing document.getElementById('task-title') to  a variable

const taskTitle = document.getElementById('task-title');
console.log(taskTitle.innerHTML='<span style="color:yellow">Task Lists</span>');

// document.query selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

console.log(document.querySelector('li').style.color="blue");
console.log(document.querySelector('ul li').style.color="green");

console.log(document.querySelector('li:last-child').style.color="red");
console.log(document.querySelector('li:nth-child(3)').style.color="blue");
console.log(document.querySelector('li:nth-child(2)').textContent="Hello World");
console.log(document.querySelector('li:nth-child(odd)').style.background="#eee");
console.log(document.querySelector('li:nth-child(even)').style.background="#ccc");




