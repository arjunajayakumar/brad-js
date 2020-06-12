const firstName = 'Robert';
const lastName = 'Noyce';
const age = 27;
const str = 'Hello there my name is Brad';
const tags = 'web design,Web developement,Programming ';

let val;
val = firstName + lastName;

// Concatenate
val = firstName + ' ' + lastName;


// Append
val = 'Gorden';
val+= ' Moore';

val = 'Hello, my name is ' + firstName + ' and iam ' + age;

// escaping
val = 'That\'s awesome, I can\'t wait.'

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// Find index of array element
val = firstName[3];

// indexOf
val = firstName.indexOf('e');
val = lastName.indexOf('o');
val = lastName.lastIndexOf('o');

// charAt
val = firstName.charAt(4);

// get last string
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0,4);

// Slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split
val = tags.split(',');

// Replace
val = str.replace('Brad', 'Robert');


// Include 
val = str.includes('Hello');
console.log(val);
