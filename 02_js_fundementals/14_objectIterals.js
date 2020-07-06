const person = {
  firstName: 'Robert',
  lastName: 'Noyce',
  age: 27,
  hobbies: ['Movies', 'music', 'sports'],
  address: {
    city: 'miami',
    state: 'florida'
  },
  getBirthYear: function () {
    return 2017 - this.age;
  }
}

let val;
val = person;

// Get specific value
val = person.firstName;
val = person.age;
val = person[`lastName`];
val = person.hobbies[2];
val = person.address.state;
val = person.address[`city`];
val = person.getBirthYear();

const people = [
  { name: 'joe', age: 54 },
  { name: 'baby', age: 24 },
  { name: 'jhony', age: 37 },
  { name: 'shan', age: 39 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].age);
}

