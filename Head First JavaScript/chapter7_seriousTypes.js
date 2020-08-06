
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

if (99 === "99") {
    console.log("A number equals to a string");
} else {
    console.group("No way a number equals a string");
}


function findCarInLot(car) {
for (var i = 0; i < lot.length; i++) {
if (car === lot[i]) {
return i;
}
}
return -1;
}
var chevy = {
make: "Chevy",
model: "Bel Air"
};
var taxi = {
make: "Webville Motors",
model: "Taxi"
};
var fiat1 = {
make: "Fiat",
model: "500"
};
var fiat2 = {
make: "Fiat",
model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];