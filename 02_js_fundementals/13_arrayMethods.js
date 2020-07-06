// Create some array's
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array (22,45,78,2,5,4,3,55);
const fruit = ['banana', 'Orange', 'Apple', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;

// Array length
val = numbers.length;

// Check if Array
val = Array.isArray(numbers);

// Get single value

val = numbers[4];
val = numbers[0];

// Insert in to array
numbers[2] = 120;

// Find index of value
numbers.indexOf(23);

// Mutating Array
numbers.push(450)

// Add on to front
numbers.unshift(22);

// Take off from end
numbers.pop(450);

// Takeoff from front
numbers.shift(122);

// Splice values
numbers.splice(1,1);

//  Reverse Array
numbers.reverse()

// Concat
val = numbers.concat(numbers2);



// Sorting Arrays
val = fruit.sort();
val = numbers.sort();

// Sort using compare function

val = numbers.sort(num = (x, y) => {
  return x - y;
});

// // Reverse Sorting

val = numbers.sort(num = (x, y) => {
  return y - x;
});

// Find

const under50 = (num) => {
  return num < 50;
}

val = numbers.find(under50);
console.log(numbers);
console.log(val);
