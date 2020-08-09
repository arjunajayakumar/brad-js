
// Dealing with NaN
let myNum = 0;

if (isNaN(myNum)) {
    myNum = 0;
    console.log(myNum)
} else {
    console.log(myNum + " is a number");
}

// it gets even wirder
let test1 = 0 / 0;
console.log(test1);
console.log('Type:', typeof test1);

// Equality Operator('==' : Non strict);

if (99 == "99") {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (99 == "Vanilla") {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (99 == NaN) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (99 == true) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (1 == true) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if ("1" == true) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (undefined == null) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (" " == null) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (1 == "") {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (1 == 0) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

// How to get strict with equality('===')

if (99 === "99") {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (99 === "Vanilla") {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (99 === NaN) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (99 === true) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

if (1 === true) {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}

// Even more type conversions
Addition
let addi = 3 + "7";
console.log(addi)

let addi = 3 + 7;
console.log(addi)

Subtraction
let sub = 7 - '8';
console.log(sub)

let sub = 17 - '9';
console.log(sub);

// How to determine if t wo objects are equal
let obj1 = {
    name: "cat",
    age: 2,
    color: "black"
}

let obj3 = obj1;

let obj2 = {
    name: "cat",
    age: 2,
    color: "black"
}

function checkIfEqual(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

console.log(checkIfEqual(obj1, obj2));

// Sharpen your Pencil

let chevy = {
    make: "Chevy",
    model: "Bel Air"
};
let taxi = {
    make: "Webville Motors",
    model: "Taxi"
};
let fiat1 = {
    make: "Fiat",
    model: "500"
};
let fiat2 = {
    make: "Fiat",
    model: "500"
};

let lot = [chevy, taxi, fiat1, fiat2];

function findParkingLot(car) {
    for (let i = 0; i < lot.length; i++) {
        if (car == lot[i]) {
            return i;
        }

    }

    return -1;

}

console.log(findParkingLot(fiat2));
// The truthy is out there

// Falsy values
undefined
let testThis;
if (testThis) {
    console.log("true")
} else {
    console.log("False")
}

// null
let element = document.getElementById("elemento");
if (element) {
    console.log("true");
}

// zero
if (0) {
    console.log("true")
} else {
    console.log("false")
}

// empty string
if ("") {
    console.log("true")
} else {
    console.log("false")
}

// NaN
if (NaN) {
    console.log("true")
} else {
    console.log("false")
}

// 08/08/2020
// What javascript considers falsy
if ([]) {
    console.log("true");
} else {
    console.log("false");
}

// let element = document.getElementById("content");
if (element) {
    console.log("true")
} else {
    console.log("false");
}

if (1) {
    console.log("true")
} else {
    console.log("false");
}

let string = "mercy me"
if (string) {
    console.log("true")
} else {
    console.log("false");
}

// Sharpen your pencil
function lieDetectorTest() {
    let lies = 0;
    let stolenDiamond = 0;
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    };

    let car = {
        keysInPocket: null
    };
    if (car.keysInPocket) {
        console.log("Oh no, guess you stole the car");
        lies++;
    }
    if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!");
        lies++;
    }
    let foundYouAtCrimeScene = [];
    if (foundYouAtCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }
    if (foundYouAtCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }
    let yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}

let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}

// The secret life of strings
let emot = "Xoxxoo";
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();
for (let i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === 'X') {
        hugs++;
    } else if (emot.charAt(i) === 'o') {
        kisses++;
    }
}

// indexOf Method
let phrase = "the cat in the Hat";
let index = phrase.indexOf("cat");
let index = phrase.indexOf("the", 5);
let index = phrase.indexOf("dog");
console.log("There is a cat sitting at index " + index);

indexOf
let data = "name|phone|address";
let val = data.substring(5, 10);
console.log("Substring is " + val);

Split
let data = "name|phone|address";
let val = data.split("|");
console.log("Split array is", val);

// Chair Wars
// In Larry's cube

function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

console.log(validate("1215-132-1-51-1"));

// In Brad's cube
function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(4);
    console.log(first)
    console.log(second)
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}

validate("121-2211");

