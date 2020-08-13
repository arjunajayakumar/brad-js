// How to use an anonymous funcion
// window.onload = function() {
//     console.log("Yeah, that Page loaded!")
// }

// We need to walk about your verbosity, again
// setTimeout(function() {console.log("Time to take the cookies out of the oven");
// },5000);

// When a function is defined? ite depends...

// let migrating = true;
// if(migrating) {
//     quack(4);
//     fly(4);
// }


// let fly = function(num){
//     for(let i = 0;i < num; i++) {
//         console.log("Flying");
//     }
// };

// function quack(num) {
//     for(let i = 0; i < num; i++) {
//         console.log("Quack");
//     }
// }

// 13/08/2020

// How to nest functions
// let migrating = true;
// let fly = function (num) {
//     let sound = "Flying";
//     function wingFlapper() {
//         console.log(sound);
//     }
//     for (let i = 0; i < num; i++) {
//         wingFlapper();
//     }
// };

// function quack(num) {
//  let sound = "Quack";
//  let quacker = function() {
//      console.log(sound);
//  };
//  for(let i = 0;i < num; i++) {
//      quacker();
//  }
// }

// if(migrating) {
//     quacker(4);
//     fly(4);
// }

// A little review of lexical scope
// let justAVar = "Oh, don't you worry about it, I'm GLOBAL";
// function whereAreYou() {
//     let justAVar = "Just an every day LOCAL";
//     return justAVar;
// }

// let result = whereAreYou();
// console.log(result);

// Now let's introduce a nested function
// let justAVar = "Oh, don't you worry about it, I'm a GLOBAL";
// function whereAreYou() {
//     let justAVar = "Just an every day LOCAL";
//     function inner() {
//         return justAVar;
//     }

//     return inner();
// }

// let result = whereAreYou();
// console.log(result);

// Where things get interesting with lexical scope
// let justAVar = "Oh, don't you worry about it, I'm GLOBAL";
// function whereAreYou() {
//     let justAVar = "just an every day LOCAL";

//     function inner() {
//         return justAVar;
//     }

//     return inner;
// }

// let innerFunction = whereAreYou();
// let result = innerFunction();
// console.log(result);

// Using closures to implement a magic counter
// let count = 0;
// function counter() {
//     count = count + 1;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// using closure

// function makeCounter() {
//     let count = 0;
//     function counter() {
//         count = count + 1;
//         return count;
//     }

//     return counter
// }

// let doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());

// Excercise
// function makePassword(password) {
//     return function guess(passwordGuess) {
//         console.log(passwordGuess);
//         return(passwordGuess === password);
//     };
// }

// let tryGuess = makePassword("secret");
// console.log("guessing 'nope':" + tryGuess("nope"));
// console.log("guessing 'secret':" + tryGuess("secret"));

// function multN(n) {
//     return function multiply(s) {
//         return (n * s);
//     }
// }

// let mulResult = multN(5);
// console.log("First ;" + mulResult(7));
// console.log("Second ;" + mulResult(8));

// function makeCounter() {
//     let count = 0;
//     return {
//         increment:function() {
//             count++;
//             return count;
//         }
//     }
// }

// let counter = makeCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());

// Creating a closure by passing a function expression as an argument
function maskeTimer(donMessage, n) {
    setTimeout(function() {
        console.log(donMessage);
    }, n);
}

maskeTimer("cookies are done!", 1000);