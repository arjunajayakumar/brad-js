let re;
re = /hello/;
re = /hello/i; //i = case insensitive
re = /hello/g - //Global search - will search the entire text for the word hello

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
const result = re.exec('hello world');
const result = re.exec('brad hello world');

// console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
const result = re.test('hello');
console.log(result);

// match() - Return the result array or null
const str = 'Hello There'; // const result = str.match(re);
console.log(result);

// Search() - returnsthe index of the first match if not found returns 1
const str = 'Brad Hello There';
const result = str.search(re);
console.log(result);

// replace() - return new string with same or all matches of a pattern
const str = 'Hello there';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
