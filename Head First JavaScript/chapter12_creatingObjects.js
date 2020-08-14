// let taxi = {
//     make:"Webville Motors",
//     model:"Taxi",
//     year:1955,
//     color:"yellow",
//     pasengers:4,
//     convertible:false,
//     mileage:281341,
//     started:false,
//     start:function() {this.started = true},
//     stop:function() {this.started = false},
//     drive:function() {
//         console.log("woom woom")

//     }

// };

// How to create a constructor
// function dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// Sharpen your pencil
// Create a druck constructor
// function duck (type, breed, canFly){
//     this.type = type;
//     this.breed = breed;
//     this.canFly = canFly;
// }

// How to use a constructor
// let fido = new dog("Fido", "Mixed", 38);
// console.log(fido);
// let fluffy = new dog("spot", "chihuahua", 10);
// console.log(fluffy);

// Exercise
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     }

//     let fido = new Dog("Fido", "Mixed", 38);
//     let fluffy = new Dog("Fluffy", "Poodle", 30);
//     let spot = new Dog("Spot", "Chihuahua", 10);
//     let dogs = [fido, fluffy, spot];

//     for(let i = 0; i < dogs.length; i++){
//         let size = "small";
//         if(dogs[i].weight > 10){
//             size = "large";
//         }

//         console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
//     }

// Putting Methods into constructors as well
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function () {
//         if (this.weight > 25) {
//             console.log(this.name + " says Woof!");
//         } else {
//             console.log(this.name + " says Yip!");
//         }
//     }
// }

// let fido = new Dog("Fido", "Mixed", 38);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//     dogs[i].bark();
// }

// Exercise
// function Coffee(roast, ounces) {
//     this.roast = roast;
//     this.ounces = ounces;
//     this.getSize = function () {
//         if (this.ounces === 8) {
//             return "8oz is a small";
//         } else if (this.ounces === 12) {
//             return "12oz is a medium";
//         } else if (this.ounces === 16) {
//             return "16oz is a large";
//         }
//     }

//     this.toString = function () {
//         if (this.ounces === 8) {
//             return "you have ordered a small " + this.roast + " coffee";
//         } else if (this.ounces === 12) {
//             return "you have ordered a medium " + this.roast + " coffee";
//         } else if (this.ounces === 16) {
//             return "you have ordered a large " + this.roast + " coffee";
//         }

//     }
// }

// let houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.getSize());

// let darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());
// it's production time

// function Car(make, model, year, color, pasengers, convertible, mileage) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.pasengers = pasengers;
//     this.convertible = convertible;
//     this.mileage = mileage;
//     this.started = false;
//     this.start = function () {
//         this.started = true
//     };
//     this.stop = function () {
//         this.started = false
//     };
//     this.drive = function () {
//         if (this.started) {
//             console.log(this.make + " " + this.model + " goes zoom zoom!");
//         } else {
//             console.log("start the engine first.");
//         }
//     };
// }

// let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// let taxi = new Car("Webville", "Taxi", 1955, "tan", 4, false, 281341);
// let cars = [chevy, cadi, taxi];

// for (let i = 0; i < cars.length; i++) {
//     cars[i].start();
//     cars[i].drive();
//     cars[i].drive();
//     cars[i].stop();
// }

// Rewiring the arguments as an object literal

// let cardiPrams = {
//     make:"GM",
//     model:"Cadillac",
//     year:1955,
//     color:"tan",
//     passengers:5,
//     convertible: false,
//     mileage: 12892
// };

// let chevyPrams = {
//     make:"chevy",
//     model:"Bel Air",
//     year:1957,
//     color:"red",
//     passengers:5,
//     convertible: false,
//     mileage: 1112
// };

// let fiatPrams = {
//     make:"fiat",
//     model:"palio",
//     year:198,
//     color:"blue",
//     passengers:5,
//     convertible: false,
//     mileage: 12875
// };


function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.pasengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function () {
        this.started = true
    };
    this.stop = function () {
        this.started = false
    };
    this.drive = function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("start the engine first.");
        }
    };
}

// let cadi = new Car(cardiPrams);
// let chevy = new Car(chevyPrams);
// let fiat = new Car(fiatPrams);
// // console.log(cadi);
// // console.log(chevy);
// // console.log(fiat);

// // cadi.start();
// cadi.drive();
// cadi.drive();
// cadi.stop();

// Exercise 1
// let limoParams = {
//     make: "Webville Motors",
//     model: "limo",
//     year: 1983,
//     color: "black",
//     passengers: 12,
//     convertible: true,
//     mileage: 21120
// };

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// let limo = new Car(limoParams);
// let limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

// console.log(limo.make + " " + limo.model + " is a " + typeof limo);
// console.log(limoDog.name + " is a " + typeof limoDog);

// Exercise 2
// function dogCatcher(obj) {
//     if (obj instanceof Dog) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function Cat(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// let meow = new Cat("Meow", "Siamese", 10);
// let whiskers = new Cat("Whiskers", "Mixed", 12);
// let fido = { name: "Fido", breed: "Mixed", weight: 38 };
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function () {
//         if (this.weight > 25) {
//             alert(this.name + " says Woof!");
//         } else {
//             alert(this.name + " says Yip!");
//         }
//     };
// }

// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [meow, whiskers, fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//     if (dogCatcher(dogs[i])) {
//         console.log(dogs[i].name + " is a dog!");
//     } else {
//         console.log(dogs[i].name + "is not a Dog");
//     }
// }
