function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if(this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " syas Yips!");
    }
};

Dog.prototype.run = function() {
    console.log("Runs");
};

Dog.prototype.wag = function() {
    console.log("Wag!");
};
console.log("Dog", Dog())
let fido  = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

console.log(spot);

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

spot.bark = function() {
    console.log(this.name + " says WOOF!");
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "Dallas";
Robot.prototype.speak = function() {
    console.log("warning warning");
}
Robot.prototype.makeCoffee = function() {
    console.log("Making Coffee");
}
Robot.prototype.blinkLights = function() {
    console.log("Blink blink")
}

let robby = new Robot("dodgy", 2005, "robert");
let rosie = new Robot("Ken", 1989, "Tommy");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
    console.log("Fetching a coffee from starBucks");
};

rosie.cleanHouse = function() {
    console.log("Cleaning! Spic and span soon");
}

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in "  + rosie.year + " and owned by " + rosie.owner);
rosie.cleanHouse();

let barnaby = new Dog("Barnaby", "Basset Hound", 55);
// let spot = new Dog("spot", "himansu",38);
Dog.prototype.sit = function() {
    console.log(this.name + " is now sitting");
}

barnaby.sit();


Exercise

function Game() {
    this.level = 0;
}

Game.prototype.play = function () {
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
}

Game.prototype.unlock = function () {
    if (this.level === 42) {
        Robot.prototype.deployLaser = function () {
            console.log(this.name + " is blasting you with the laser beam.....");

        }

    }
}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

let game = new Game();
let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

while (game.level < 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();

// A more interesting way implementataion of the sit method
Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
    if(this.sitting) {
        console.log(this.name + " is already sitting")
    } else {
        this.sitting = true;
        console.log( this.name + " is now sitting");
    }
};

barnaby.sit();
barnaby.sit();

spot.sit();
spot.sit();

console.log(spot.hasOwnProperty("species"));
console.log(fido.hasOwnProperty("species"));

console.log(spot.hasOwnProperty("sitting"));
spot.sitting = true;
console.log(spot.hasOwnProperty("sitting"));


let aDog = new Dog();

function showDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weeight = weight;
    this.handler = handler;
}

showDog.prototype = new Dog();
showDog.prototype.constructor = showDog;

showDog.prototype.leauge = "Webville";
showDog.prototype.stack = function() {
    console.log("Stack");
}

showDog.prototype.bait = function() {
    console.log("Bait");
}

showDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};

showDog.prototype.groom = function() {
    console.log("Groom");
}

let scotty = new showDog("Scotty", "Scotttish", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
