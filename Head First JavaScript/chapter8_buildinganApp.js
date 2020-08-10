
let view = {
    displayMessage: function (msg) {

        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
        let cell = document.getElementById("location");
        cell.setAttribute("class", "hit")
    },
    displayMiss: function (location) {
        let cell = document.getElementById("location");
        cell.setAttribute("class", "miss");
    }
};


let ship1 = { locations: ["10", "20", "30"], hits: ["", "", "hit"] };
let ship2 = { locations: ["32", "33", "34"], hits: ["", "", ""] };
let ship3 = { locations: ["63", "64", "65"], hits: ["", "", "hit"] };

let ships = [
    { locations: ["10", "20", "30"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: ["", "", ""] },
    { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
];

// Model Object
let model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] }],
    // Setting up the fire Method
    fire: function (guess) {

        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            locations = ship.locations;
            let index = locations.indexOf(guess);
            if (index >= 0) {
                ships.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;

            }

        }
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        return false;
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

let controller = {
    guesses:0,
    processGuess:function(guess){
        
    }

}


view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("dhfhjdgjh");