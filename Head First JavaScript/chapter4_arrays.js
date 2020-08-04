// How to represent multiple values in JavaScript
let scores = [60, 50, 60, 58, 54, 58, 50, 52, 54];
let solution2 = scores[2];
console.log(solution2);

function makePhrases() {
    let words1 = ["24/7", "multi-tier", "30,000 foot", "B to B", "win-win"];
    let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);

    let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}

// makePhrases()

let scores = [60, 50, 60, 58, 54, 54,58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51,69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function bubbleTest() {
    let bubblesTest = scores.length;
    let i =0;
    while(i < bubblesTest) {
        console.log(`Bubbble solution #${i} Score: ${scores[i]}`);
        i++
    }
}

bubbleTest()

// code Magnets

let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];

let i = 0;

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + "Contains bubblegum");
  }

  i++;
}

// Buble Solutions

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let highScore = 0;
let output;
for (let i = 0; i < scores.length; i++) {
  let output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}

console.log("Bubbles tests:" + scores.length);
console.log("Highest bubble score " + highScore);

let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === highScore) {
    bestSolutions.push(i);
  }
}

console.log("Solutions with the highest score: " + bestSolutions);

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function printAndGetHighScore() {
  let highScore = 0;
  let output;
  for (let i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(scores, highestScore) {
  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highestScore) {
      bestSolutions.push(i);
    }
  }

  return bestSolutions;
}

let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

let bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

let costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(scores, costs, highscore) {
  let cost = 100;
  let index;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      if (cost[i] > costs[i]) {
        index = i;
        costs[i] = cost[i];
      }
    }

  }

  return index;

}

let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
