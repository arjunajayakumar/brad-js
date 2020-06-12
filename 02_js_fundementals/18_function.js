// Function declarations

function greet() {
  console.log('Hello');
}

greet();

function greet(firstName) {
  return 'Hello ' + firstName;
}

console.log(greet('Guil'));

function greet(firstName, lastName) {
  if (typeof firstName === 'undefined') { firstName = 'Guil' }
  if (typeof lastName === 'undefined') { lastName = 'Hernades' }
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Hue', 'Jackman'));

// Function Expression
const square = function (x) {
  return x * x;
}

console.log(square(8));

// Immediately invokable functions - IIFE

(function (name) {
  console.log('Hello ' + name);
})('Arjun');

// Property Methods

const todo = {
  add: function () {
    console.log('todo...')
  },
  edit: function (id) {
    console.log(`edit todo ${id}`)
  }
}

todo.delete = function () {
  console.log('todo delete');
}

todo.add();
todo.edit(45);
todo.delete();

