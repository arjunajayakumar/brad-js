let a = 0;
let b = 4;
let c = a > b;
let e = " ";

console.log(c)
console.log(c === true)

if(c === true) {
    console.log("c is true");
}

if(a){
    console.log(a, "is also treated as true")
} else {
    console.log(a, "is treated as false")
}

if(!(e === "")){
    console.log(e, "is also treated as true")
} else {
    console.log(e, "is treated as false")
}

console.log("=",(e === ""));
console.log("!=", !(e === ""));

console.log("!true = ", !(true));
console.log("!false = ", !(false));



