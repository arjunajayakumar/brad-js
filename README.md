# JavaScript

## 02 JavaScript Fundementals

#### 06 console
`console.log` - log to the console
 eg: console.log('123);

`console.table` - print a table with the given values
 eg: console.log({a:1, b:3});

`console.error()` - log a error message
 eg: console.log('this is aerror message')

`console.warn()` - log a warning message
 eg:console.warn('This is a warning message');
 
``` 
console.log('') - clear the console
console.time('hello');
console.log('Hello');                 - This will print hello along with the time duration taken to print 
console.log('Hello');
console.log('Hello');
console.timeEnd('hello');
```

### 07 Vaiables - var, let const

* value reassignment is possible for var and let.
* const - the vlaue assigned for const will not change. ie reassignment is possible.
*  we cannot initialize const without having a value(undefined)
* vaiable can have `letters`,`numbers`, `_`, and `$` but variable should not start with number
* conventional method of naming is to use camel casing 
  eg:firstName

### 08 data types
* Mainly two types are there primitive and reference

###### primitive data type
* stored directly in the location the variable accesses
* stored on the stack

###### Reference data type
* Accessed by reference
* objects that are stored on the heap
* A pointer to a location in the memmory        

###### primitive data type examples
 * string - letters, numbers symbols etc...
 * number - integer, decimels,float etc..
 * boolean - true or false
 * null - emplty value
 * undefined - a variable that have't assinged a value
 * symbols(ES6)

###### Reference data type examples
 * arrays
 * object iterals
 * functions
 * dates
 * anything else

### 09 Type conversion
* number to string
* number can be converted to string by using String()
```
let val = String(5);
console.log(val)
```
  * typeof
  * tofixed
  * parserInt
  * parseFloat
  * Number()
  * String()

### 10 Numbers The Math Object
```
  Math.PI();      - return the value of PI
  Math.E ();
  Math.round();
  Math.floor();
  Math.sqrt();
  Math.abs();
  Math.pow();
  Math.min()
  Math.max();
  Math.random;
```

### 11 String Methods
  ##### Concatenate
  val = firstName + ' ' + lastName;


  ##### Append
  val = 'Gorden';
  val+= ' Moore';

  val = 'Hello, my name is ' + firstName + ' and iam ' + age;

  ##### escaping
  val = 'That\'s awesome, I can\'t wait.'

  ##### Length
  val = firstName.length;

  ##### Concat
  val = firstName.concat(' ', lastName);

  ##### Change case
  val = firstName.toUpperCase();
  val = lastName.toLowerCase();

  ##### Find index of array element
  val = firstName[3];

  ##### indexOf
  val = firstName.indexOf('e');
  val = lastName.indexOf('o');
  val = lastName.lastIndexOf('o');

  ##### charAt
  val = firstName.charAt(4);

  ##### get last string
  val = firstName.charAt(firstName.length - 1);

  ##### substring
  val = firstName.substring(0,4);

  ##### Slice
  val = firstName.slice(0,4);
  val = firstName.slice(-3);

  ##### split
  val = tags.split(',');

  ##### Replace
  val = str.replace('Brad', 'Robert');


  ##### Include 
  val = str.includes('Hello');
  console.log(val);

### 18 Functons
doubt
function declaration and expression
annonymus functions

##### Immediately invokkable function expressions
* A function which is declared and called at same time

##### Property Methods

* When a Function put inside an object, it is called a method

### WINDOW METHODS / OBJECTS / PROPERTIES

#### Alert
alert('Hello world');

#### Propmt
const input = prompt();
alert(input);

#### Confirm
if (confirm('Are you sure')) {
  console.log('yes');
} else {
  console.log('no');
}

#### Outer height and width
let val;
val = window.outerHeight;
val = window.outerWidth;
console.log(val);

#### Inner height and width
val = window.innerHeight;
val = window.innerWidth;
console.log(val);

#### Scroll Points
val = window.scrollY;
val = window.scrollX;

#### Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
console.log(val);

#### Redirect
window.location.href = 'http://google.com';
console.log(val);

#### Reload 
window.location.reload();
console.log(val);

#### History Object
window.history.go(-2);
val = window.history.length;
console.log(val);

#### Navigator
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);

### SCOPES

#### Global scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global scope:',a ,b, c);

#### Function scope
function test() {
  let a = 4;
  var b = 5;
  const c = 6;
  console.log("Function scope: ", a, b, c);
}
test();

#### Block scope
if (true) {
  let a = 4;
  var b = 5;
  const c = 6;
  console.log('if scope: ', a, b, c);
}

for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global scope:', a, b, c);

## DOM Manipulation

### DOM Selectors

### Single Element Selectors

* document.getElementById()
  console.log(document.getElementById('task-title'));

* Get things from the element
  console.log(document.getElementById('task-title').id);
  console.log(document.getElementById('task-title').className);

* Change styling

  console.log(document.getElementById('task-title').style.background="#000");
  console.log(document.getElementById('task-title').style.color="#fff");
  console.log(document.getElementById('task-title').style.padding="10px");
  console.log(document.getElementById('task-title').style.display="none");

* Change content
  console.log(document.getElementById('task-title').textContent="Task-List");
  console.log(document.getElementById('task-title').innerText="My-tasks");
  console.log(document.getElementById('task-title').innerHTML='<span style="color:yellow">Task Lists</span>');

* Storing document.getElementById('task-title') to  a variable

  const taskTitle = document.getElementById('task-title');
  console.log(taskTitle.innerHTML='<span style="color:yellow">Task Lists</span>');

* document.query selector

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

### Multiple Element Selectors  

* document.getElementByClassName

  const items = document.getElementsByClassName("collection-item");
  console.log(items);
  console.log(items[0]);
  items[0].style.color='red';
  items[3].textContent="Hello";

  const listItems = document.querySelector('ul').getElementsByClassName("collection-item");
  console.log(listItems);

* document.getElementsByTagName
  let lis = document.getElementsByTagName('li');
  console.log(lis);
  console.log(lis[0]);
  lis[0].style.color="blue";
  lis[3].style.background="yellow";
  lis[2].textContent = "Hello";

* Convert HTML Collection in to Array
  lis = Array.from(lis);
  lis.reverse();
  lis.forEach(li => {
  console.log(li.className)
  });

  console.log(lis);

* We can also pass index
  lis = Array.from(lis);
  lis.reverse();
  lis.forEach((li, index) => {
  console.log(li.className)
  li.textContent = `${index} : Hello`;
  });

console.log(lis);

* document.querySelectorAll

  const items = document.querySelectorAll('ul.collection li.collection-item');
  items.forEach((item, index) => {
      item.textContent = `${index} : Hello`;
  })

* Change the color of multiple elements

  let liOdd = document.querySelectorAll('li:nth-child(odd)');
  let liEven = document.querySelectorAll('li:nth-child(even)');

  liOdd.forEach((li, index) => {
      li.style.background="blue";
  })

  liEven.forEach((li, index) => {
      li.style.background="green";
  })

* using for loop

  for(let i = 0; i < liEven.length; i++) {
      liEven[i].style.background="#ccc";
  }

  console.log(items);

### Transversing the DOM 

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


val = list;
val = listItem;

* Get child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

* Get childrens
val = list.children;
val = list.children[1];
list.children[1].textContent="Hello";

* Children of children
list.children[3].children[0].id="test-link";
val = list.children[3].children[0];

* first child
val = list.firstChild;
val = list.firstElementChild;

* last child
val = list.lastChild;
val = list.lastElementChild;

* Child element count
val = list.childElementCount;

* get parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentNode.parentElement;

* get sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

* get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);