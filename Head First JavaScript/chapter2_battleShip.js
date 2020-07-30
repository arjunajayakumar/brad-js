
let randomLoc = Math.floor(Math.random() * 7),
  location1 = randomLoc,
  location2 = randomLoc + 1,
  location3 = randomLoc + 1,
  guess,
  hits = 0,
  guesses = 0,
  isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! enter a number 0-6");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
        alert('Hit');
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship");
      }
    }
  }
}

let stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (`3 / ${guesses}`);

alert(stats);

// Boolean Values


let instock = true;
let insale = false;
let value1 = (instock == false) || (insale == false);
let value2 = (instock == false) && (insale == false)
  console.log("OR", value1)
  console.log("AND", value2)


// Assiging random Lccations
let randomLoc = Math.floor(Math.random() * 5);
console.log(randomLoc);
