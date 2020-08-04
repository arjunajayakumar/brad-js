// Car Object

let car = {
    make: "chevy",
    model: "Bel Air",
    year: "1957",
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}

console.log(car);

//To change a property

car.mileage = 2500;

console.log(car);

// To add a new property
car.cc = 2500;

console.log(car)


// Object Magnets

let dog = {
    name: "Fido",
    breed: "mixed",
    age: "4",
    weight: 20.2,
    activity: "fetch balls",
}

let bark;
if (dog.weight > 20) {
    dog.bark = 'WOOF WOOF';
} else {
    dog.bark = 'woof woof';
}

let speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;
console.log(speak);


// Passing objects to functions
let taxi = {
    make: "webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};


function prequal(car) {
    if (car.milage > 1000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let worthALook = prequal(taxi);

if (worthALook) {
    console.log("You check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

let worthALook = prequal(cadi);
if (worthALook) {
    console.log("You check out this " + cadi.make + " " + cadi.model);
} else {
    console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}

losWeight(fido, 10)

function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Invalid password! No secret for you."
    }

}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }

}

let superSecretFile = {
    level: "classified",
    opened: "0",
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
}

// let secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];

    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length)
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);

    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}

function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

let carToSell = makeCar();
displayCar(carToSell);

// Add Behaviour to objects
let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    drive: function () {
        console.log('Zoom zoom');
    }
};

fiat.drive()

// Improving the drive Method (Add start/stop)
let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log("zoom zoom")
        } else {
            console.log("You need to start the engine first.");
        }
    }
}

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();

// A test drive with this
let song = {
    name: "walk This way",
    artist: "Run-D-M-C",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by " + this.artist);

        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
        }
    }
};

song.play()
song.pause()

// Sharpen your Pencil
let eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        console.log("index", this.index);
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },

    look: function () {
        return this.advice[this.index]
    }

};

var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function () {
        return this.advice[this.index];
    }
};
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();

let cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            console.log("The car is on empty, fill up before starting!");
        }

    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.fuel > 0) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
            this.fuel = this.fuel - 1;
        } else {
            console.log("Uh oh, out of fuel");
            this.stop()
        }
    },

    // Add fuel
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;


    }
};

cadi.start();
cadi.drive();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();

for (let prop in cadi) {
    console.log(prop + ": " + cadi[prop]);
}


// Top Secret
let access = document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
alert(code);
