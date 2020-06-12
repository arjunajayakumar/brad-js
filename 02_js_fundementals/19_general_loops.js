// For loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorate number');
    continue;
  }

  if (i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log('Number ' + i)
}

// While loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while loop

let i = 100;
do {
  console.log('Number ' + i);
  i++;
}

while (i < 10);

// Looping througth array
const cars = ['honda', 'chevy', 'ford', 'mini']
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH array loops

const cars = ['honda', 'chevy', 'ford', 'mini'];
cars.forEach(function (car) {
  console.log(car);
})

// Map can have two more parameters. 
// index and array.

const cars = ['honda', 'chevy', 'ford', 'mini'];
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`)
  console.log(array);
})

// MAP
const users = [
  { id: 1, name: 'treasure' },
  { id: 5, name: 'guil' },
  { id: 5, name: 'Scarlet' },
  { id: 7, name: 'rob' }
];
const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

// For in loop

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}


