// Create Element
const li = document.createElement('li');

// Add Class
li.className="collection-item";

// Add id
// li.id="new-item";

// Add Attribute
li.setAttribute('title', 'newItem');

// Create a text node and append
li.appendChild(document.createTextNode('Hello World'));

// create a new link element
const link = document.createElement('a');

// Add class to the link
link.className="delete-item secondary-content";

// Add icon to the HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to the child
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);