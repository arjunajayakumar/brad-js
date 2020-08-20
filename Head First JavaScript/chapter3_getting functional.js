// Getting Functional

// Function example

// below is the function definition
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " Says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

//  Below is calling/invoking the function
bark("rover", 230);
bark("rover", 13);
bark("rover", 53);
bark("rover", 17);

// Pass by value - means pass by copy

let age = 28;
function addOne(x) {
  x = x + 1;
  console.log(x);
}

addOne(age);

// Return in function
function bake(degrees) {
  let message;

  if (degrees > 500) {
    message = "I'm not a neculear reactor!";
  } else if (degrees < 100) {
    message = "I;m not a refrigerator";
  } else {
    message = "That's a very comfortable temperature for me.";
    // setMode("bake");
    // setTemp(degrees);
  }
  return message;
}

let status = bake(350);

// Global and Local Variables(scope)

let avatar = generic;
let levelThreshold = 1000; //- Global scope
let pointsPerLevel = 1000;
let userPoints = 2008;

function getAvatar(points) {
  let level = points / pointsPerLevel; // - Local scope

  if (level == 0) {
    return "Teddy bear";
  } else if (level == 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorilla";
  }
}

val = 0;

function global(x) {
  val = val + 5;
}

global(8);

console.log(val);

// The Thing-A-Ma-Jig
function clunk(times) {
  let num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}

function thingamajig(size) {
  let facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}

let clunkCounter = 0;
thingamajig(2);
console.log(clunkCounter);

// Five minute mistery

let balance = 10500;
let cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  comeraOn = true;
}

let amount = steal(balance, 12500);
alert("Criminal: you stole " + amount + " !");
