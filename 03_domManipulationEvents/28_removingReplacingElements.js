// Replace Element
//Create  a heading
const newHeading = document.createElement('h2');

//Add id
newHeading.id="task-title";

// New text node
newHeading.appendChild(document.createTextNode('New Task'));

// Get the old Heading
oldHeading = document.getElementById('task-title');

// Parent 
cardAction = document.querySelector('.card-action');

// Replace parent

cardAction.replaceChild(newHeading, oldHeading);

// console.log(cardAction);


// const newHeading = document.createElement('h2');

// newHeading.id="task-title";

// newHeading.appendChild(document.createTextNode('newtask'));

// const oldHeading = document.getElementById('task-title');

// const oldHeading = document.querySelector('.test');

// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove List item
lis[0].remove();

// Remove child Element
list.removeChild(lis[1]);

// Add / Remove Class
const firstLi = document.querySelector('Li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Add / Remove Attribute
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://www.google.com');
val = link.setAttribute('title', 'Google');
val = link.hasAttribute('href');
val = link.hasAttribute('title');

val = link.removeAttribute('title');
val = link;
console.log(val);




