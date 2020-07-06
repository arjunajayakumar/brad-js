// Standard Function

// const sayHello = function () {
//     console.log('Hello');
// }

// sayHello();

// Arroe Fuction
// const sayHello = () => {
//     console.log('Hello');
// }

// sayHello();

// One line function
// const sayHello = () => console.log('Hello');

// sayHello(); 

// one line return
// const sayHello = () => "Hello";

// console.log(sayHello());

// Return using standard function
// const sayHello = function () {
//     return 'Hello';
// }

// console.log(sayHello());

// Return as Object
// const sayHello = () => ({msg: 'Hello'});

// console.log(sayHello());

// Single parameter doesnot need parenthesis

// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Brad')

// Mutliple parameter need parenthesis
// const sayHello = (firstaName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Brad', 'Traversy');

// Word length using standard function

// const users = ['Nathan', 'John', 'William'];

// const namelengths = users.map(function(name) {
//     return name.length;
// })

// console.log(namelengths);

// Word length using arrow function
    // Shorter
// const users = ['Nathan', 'John', 'William'];

// const namelengths = users.map((name) => {
//     return name.length;
// })

// console.log(namelengths);

    // Shortest
const users = ['Nathan', 'John', 'William'];    
const nameLengths = users.map(name => name.length);

console.log(nameLengths);