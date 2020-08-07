
// Dealing with NaN
// let myNum = 0;

// if(isNaN(myNum)) {
//     myNum = 0;
//     console.log(myNum)
// } else {
//     console.log(myNum + " is a number")
// }

// it gets even wirder
// let test1 = 0/0;
// console.log(test1);
// console.log('Type:', typeof test1);

// Equality Operator('==' : Non strict);

// if (99 == "99") {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (99 == "Vanilla") {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (99 == NaN) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (99 == true) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (1 == true) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if ("1" == true) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (undefined == null) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (" " == null) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (1 == "") {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (1 == 0) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// How to get strict with equality('===')

// if (99 === "99") {
//         console.log("A number equals to a string");
//     } else {
//         console.group("No way a number equals a string");
//     }

// if (99 === "Vanilla") {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (99 === NaN) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (99 === true) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// if (1 === true) {
//     console.log("A number equals to a string");
// } else {
//     console.group("No way a number equals a string");
// }

// Even more type conversions
// Addition
// let addi = 3 + "7";
// console.log(addi)

// let addi = 3 + 7;
// console.log(addi)

// Subtraction
// let sub = 7 - '8';
// console.log(sub)

// let sub = 17 - '9';
// console.log(sub);

// How to determine if t wo objects are equal
// let obj1 = {
//     name: "cat",
//     age: 2,
//     color: "black"
// }

// let obj3 = obj1;

// let obj2 = {
//     name: "cat",
//     age: 2,
//     color: "black"
// }

// function checkIfEqual(x, y) {
//     if (x === y) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkIfEqual(obj1, obj2));

// Sharpen your Pencil

// let chevy = {
//     make: "Chevy",
//     model: "Bel Air"
// };
// let taxi = {
//     make: "Webville Motors",
//     model: "Taxi"
// };
// let fiat1 = {
//     make: "Fiat",
//     model: "500"
// };
// let fiat2 = {
//     make: "Fiat",
//     model: "500"
// };

// let lot = [chevy, taxi, fiat1, fiat2];

// function findParkingLot(car) {
//     for (let i = 0; i < lot.length; i++) {
//         if (car == lot[i]) {
//             return i;
//         } 

//     }

//     return -1;

// }

// console.log(findParkingLot(fiat2));
// The truthy is out there

// Falsy values
// undefined
// let testThis;
// if(testThis) {
//     console.log("true")
// } else {
//     console.log("False")
// }

// null
// let element = document.getElementById("elemento");
// if(element) {
//     console.log("true");
// }

// zero
// if(0) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// empty string
// if("") {
//     console.log("true")
// } else {
//     console.log("false")
// }

// NaN
// if(NaN) {
//     console.log("true")
// } else {
//     console.log("false")
// }








