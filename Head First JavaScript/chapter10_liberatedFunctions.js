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
let winner = function() {console.log("WINNER")};
let loser = function() {console.log("LOSER")};
// let's test as a warm up
// winner();
// let's assign to other variables for practice
let a = winner;
let b =loser;
// a();
// b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

a()