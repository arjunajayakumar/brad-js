const brad = {
    name: 'brad',
    age: 30
}

console.log(brad);
console.log(brad.age);

// Person Constructor

function person(name) {
    this.name = name;
}

const brad = new person('Brad');
const John = new person('John');
console.log(John);

function person(name) {
    this.name = name;
    console.log(this);
}

const brad = new person('Brad');
const John = new person('John');

function person(name, age) {
    this.name = name;
    this.age = age;
}

const brad = new person('Brad', 36);
const john = new person('John', 47);
console.log(john.age);

function person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

const brad = new person('Brad', '9-10-1981');
console.log(brad.calculateAge());
