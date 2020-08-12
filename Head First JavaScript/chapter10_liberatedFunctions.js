// Function declaration vs function Expression
// let migrating = true;

// let fly = function(num){
//     for(let i = 0; i< num; i++){
//         console.log("Flying!");
//     }
// }

// function quack(num){
//     for(let i = 0; i < num; i++){
//         console.log("Quack!")
//     }
// }

// if(migrating) {
//     quack(4)
//     fly(4)
// }

// How functions are values tool
// function quack(num){
//     for(let i = 0; i < num; i++){
//         console.log("Quack");
//     }
// }
// let fly = function(num) {
//     for(let i = 0; i <num; i++){
//         console.log("flying");
//     }
// }

// let superFly = fly;
// superFly(2);

// let superQuack = quack;
// superQuack(3);

// Sharpen your pencil
// let winner = function() {console.log("WINNER")};
// let loser = function() {console.log("LOSER")};
// let's test as a warm up
// winner();
// let's assign to other variables for practice
// let a = winner;
// let b =loser;
// a();
// b();

// c = a;
// a = b;
// b = c;
// c = a;
// a = c;
// a = b;
// b = c;

// a()


// 12/08/2020
// Flying first class
let passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "sue Property", paid: false },
    { name: "John Funcall", paid: true }
]

// function checkNoFlyList(passenger){
//     for(let i = 0; i < passengers.length; i++){
//         if(passengers[i].name === passenger) {
//             return true;
//         }

//     }

//     return false;

// }

// console.log(checkNoFlyList("Dr Ev"));

// function checkNotPaid(passenger){
//     for(let i = 0; i < passengers.length; i++){
//         if(passengers[i].name === passenger){
//             return passengers[i].paid;
//         }
//     }

//     return false;
// }

// console.log(checkNotPaid("Dr Evel"));

// Sharpen your pencil
// function sayIt(translator) {
//     let phrase = translator("Goodbye");
//     console.log(phrase);
// }

// function hawaianTranslator(word) {
//     if (word === "Hello") return "Aloha";
//     if (word === "Goodbye") return "Alohaaaa";
// }

// sayIt(hawaianTranslator);

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