window.onload = init;

function init(){
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!"

}

// Sharpen your Pencil

function addSongs() {
    let song1 = document.getElementById("song1");
    let song2 = document.getElementById("song2");
    let song3 = document.getElementById("song3");

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}


window.onload = addSongs

// Set Attribute
let planet = document.getElementById("greenplanet");
planet.setAttribute("class", "redtext");

// Meanwhile, back at the solar system...

function init() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
}

window.onload = init;
