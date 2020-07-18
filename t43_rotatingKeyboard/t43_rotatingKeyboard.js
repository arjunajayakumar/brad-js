const tapBtn = document.getElementById('input');
const output = document.getElementById('output');
const classList = document.querySelectorAll('keys');
const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');
const row4 = document.querySelector('.row4');
const row5 = document.querySelector('.row5');
const row6 = document.querySelector('.row6');


//Event Listeners
// tapBtn.addEventListener('click', navigation);

let rows = [row1, row2, row3, row4, row5, row6];
let index = 0;

// let runner;
// let state  = 'rowNav';

// function navigation() {
//   if(state === 'rowNav') {
//       state = 'coloumn';
//       rowNav();
//   } else if(state === 'coloumn') {
//       state = 'rowNav';
//      clearInterval(time)
//       selectColoumn()
//   } else {
//       displayText();
//   }

// }


let interval = 2000;
let clear;

function rowNav() {
  time = setInterval(() => {
    let currentVble, nextVble;
    if(rows[index++ % rows.length].classList.contains('.rowcolor')) {
      console.log('no');

      rows[index++ % rows.length].classList.remove('rowcolor');
    } else {
      rows[index++ % rows.length].classList.add('rowcolor');
      console.log('yes');
    }
  }, interval);  
}

// rowNav()




// function selectColoumn() {
//   console.log('not written')
// }


// function displayText() {
//     console.log('not written')
// }
   