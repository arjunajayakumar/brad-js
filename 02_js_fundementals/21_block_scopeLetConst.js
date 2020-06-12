// Global scope
var a = 1;
let b = 2;
const c = 3;
// console.log('Global scope:',a ,b, c);

// Function scope
function test() {
  let a = 4;
  var b = 5;
  const c = 6;
  console.log("Function scope: ", a, b, c);
}
test();

// Block scope
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