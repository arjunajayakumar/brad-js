let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


// val = list;
// val = listItem;

// Get child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Get childrens
val = list.children;
val = list.children[1];
list.children[1].textContent="Hello";

// Children of children
list.children[3].children[0].id="test-link";
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// Child element count
val = list.childElementCount;

// get parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentNode.parentElement;

// get sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);