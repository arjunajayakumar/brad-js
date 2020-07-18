const tapBtn = document.getElementById("input");
const output = document.getElementById("output");
const classList = document.querySelectorAll("keys");
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");
const row6 = document.querySelector(".row6");

//Event Listeners
tapBtn.addEventListener("click", navigation);

let rows = [row1, row2, row3, row4, row5, row6];
let currentIndex = 0;
let previousIndex = 5;
let currentIndexCol = 0;
let previousIndexCol = 11;
let state = "initial";

// function to handle clicks
function navigation() {
  if (state === "initial") {
    state = "rowNav";
    rowNav();
  } else if (state === "rowNav") {
    state = "colNav";
    clearInterval(time);
    selectColoumn();
  } else {
    displayText();
  }
}

// Row Navigation
let interval = 1000;

function rowNav() {
  time = window.setInterval(() => {
    rows[currentIndex].classList.add("rowcolor");
    rows[previousIndex].classList.remove("rowcolor");
    previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 6;
  }, interval);
}

// Coloumn Navigation
function selectColoumn() {
  time = window.setInterval(() => {
    rows[previousIndex].children[currentIndexCol].classList.add("single");
    rows[previousIndex].children[previousIndexCol].classList.remove("single");
    previousIndexCol = currentIndexCol;
    currentIndexCol = (currentIndexCol + 1) % 12;
  }, interval);
}

// Display text
function displayText() {
  rows[previousIndex].children[previousIndexCol].classList.contains("single");
  output.value += rows[previousIndex].children[previousIndexCol].textContent;
  console.log(previousIndexCol);
}
