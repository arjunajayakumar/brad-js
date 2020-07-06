// Conditional Statements

/* if (something) {
  do something
  } else {
  do something else 
} */

// Equal to

const id = 101;

if (id == 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// Not equal to

if (id != 101) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// Equal to value and type
if (id === 100) {
  console.log('correct')
} else {
  console.log('incorrect')
}

// Not equal to value and type

if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`)
} else {
  console.log('NO ID');
}

// Greater or lesser
if (id >= 101) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// else if 
const color = 'yellow';

if (color === 'red') {
  console.log('Color is red')
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not Red or blue');
}

// LOGICAL OPERATORS

// AND &&

const name = 'steve';
const age = 14;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age > 13 && age < 19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult `)
}

// OR ||

if (age < 16 || age > 65) {
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
  console.log("CORRECT");
else
  console.log('INCORRECT');