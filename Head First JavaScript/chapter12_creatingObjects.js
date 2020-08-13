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
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    }

    let fido = new Dog("Fido", "Mixed", 38);
    let fluffy = new Dog("Fluffy", "Poodle", 30);
    let spot = new Dog("Spot", "Chihuahua", 10);
    let dogs = [fido, fluffy, spot];

    for(let i = 0; i < dogs.length; i++){
        let size = "small";
        if(dogs[i].weight > 10){
            size = "large";
        }

        console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
    }
    
