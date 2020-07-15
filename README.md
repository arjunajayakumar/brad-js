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


