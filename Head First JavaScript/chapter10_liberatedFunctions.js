// Function declaration vs function Expression
let migrating = true;

let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
}

function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack!")
    }
}

if (migrating) {
    quack(4)
    fly(4)
}

// How functions are values too!
function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack");
    }
}
let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("flying");
    }
}

let superFly = fly;
superFly(2);

let superQuack = quack;
superQuack(3);

// Sharpen your pencil

let winner = function () { console.log("WINNER") };
let loser = function () { console.log("LOSER") };
// let's test as a warm up

winner();
// let's assign to other variables for practice
let a = winner;
let b = loser;
a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

a()


// 12/08/2020
// Flying first class
let passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "sue Property", paid: false },
    { name: "John Funcall", paid: true }
]

function checkNoFlyList(passenger) {
    for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].name === passenger) {
            return true;
        }

    }

    return false;

}

console.log(checkNoFlyList("Dr Ev"));

function checkNotPaid(passenger) {
    for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].name === passenger) {
            return passengers[i].paid;
        }
    }

    return false;
}

console.log(checkNotPaid("Dr Evel"));

// Sharpen your pencil
function sayIt(translator) {
    let phrase = translator("Goodbye");
    console.log(phrase);
}

function hawaianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Alohaaaa";
}

sayIt(hawaianTranslator);

// Iterating through the passengers
function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }

    return true;
}


function checkNoFlyList(passenger) {
    return (passenger.name === "Dr.Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
    console.log("the plane can't take off: we have a passenger on the no-fly-list");
}

let allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
    console.log("this plane can't take off:not everyone has paid");
}

// Exercise
function printPassenger(passenger) {
    for (let i = 0; i < passenger.length; i++) {
        if (passenger[i].paid) {
            return true;
        }
    }

    return false;

}

printPassenger(passengers);

// Sharpen your Pencil
function fun(echo) {
    console.log(echo);
}

fun("hello");

function boo(aFunction) {
    aFunction("boo")
}

boo(fun);

let moreFun = fun;

moreFun("hello again");

function echoMaker() {
    return fun;
}

let bigFun = echoMaker();
bigFun("Is there an echo");

// Returning function from functions

let passengers = [

    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" }
];


// // create drink order
function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine")
        }

    } else {
        orderFunction = function () {
            alert("Your choice is cola or water");
        };

    }
    return orderFunction;

}


function serveCustomer(passenger) {
    // get drink order
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction()
    // get dinner order
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction()
    // pick up trash
}

// Test Flight
function serverPasssengers(pasengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

serverPasssengers(passengers);

// Webville cola
let products = [

    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];


// How Array SOrt Method works
let numbersArray = [60, 50, 52, 58, 54, 54];

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

numbersArray.sort(compareNumbers);
console.log(numbersArray);

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", Sold: " + products[i].sold);
    }
}

products.sort(compareSold);
printProducts(products);