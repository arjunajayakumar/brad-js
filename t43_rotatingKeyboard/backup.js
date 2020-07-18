const firstRow = document.querySelectorAll(".keys1");
const secondRow = document.querySelectorAll(".keys2");
const thirdRow = document.querySelectorAll(".keys3");
const fourthRow = document.querySelectorAll(".keys4");
const fifthRow = document.querySelectorAll(".keys5");
const sixthRow = document.querySelectorAll(".keys6");
const tapBtn = document.getElementById('input');
const output = document.getElementById('output');
const classList = document.querySelectorAll('keys');
const keyHolder = document.querySelectorAll(".keyholder");


//Event Listeners
tapBtn.addEventListener('click', navigation);

let runner;
let state  = 'rowNav';

let rowElements = [
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  fifthRow,
  sixthRow,
];


function navigation() {
  if(state === 'rowNav') {
      state = 'coloumn';
      rowNav();
  } else if(state === 'coloumn') {
      state = 'rowNav';
     window.clearTimeout(runner);
      selectColoumn()
  } else {
      displayText();
  }

}


let interval = 1000;
let increment = 0;



function rowNav() {
  console.log(keyHolder)
  // setTimeout(() => {
  //   let len = keyHolder.length,
  //       i = 1;

  //   keyHolder.forEach((res) => {
  //     setTimeout(() => {
  //       res.classList.add("row1");
  //     }, interval * increment);
  //     increment++;

  //     if (i === len) {
  //       runner = setTimeout(() => {
  //         res.classList.remove("row1");
  //       }, interval * (increment + 1));
  //     } else {
  //       setTimeout(() => {
  //       runner = res.classList.remove("row1");
  //       }, interval * increment);
  //     }

  //     rowNav();
  //   });
  // }, interval * increment);
  console.log
}


// function rowNav() {
//   setInterval(() => {
    
//   }, interval)
//     let len = keyHolder.length,
//         i = 1;

//     keyHolder.forEach((res) => {
//       setTimeout(() => {
//         res.classList.add("row1");
//       }, interval * increment);
      

//       if (i === len) {
//         runner = setTimeout(() => {
//           res.classList.remove("row1");
//         }, interval * (increment + 1));
//       } else {
//         setTimeout(() => {
//         runner = res.classList.remove("row1");
//         }, interval * increment);
//       }

//       rowNav();
//     });
//   }, interval * increment);
// }


function selectColoumn() {
  // const time = 1000;
  // let incr = 1;
  // firstRow.forEach( res => {
  //   let runner = setTimeout(() => {
  //     res.classList.add("single");
  //     clearTimeout(runner);
  //     setTimeout(() => {
  //       res.classList.remove("single");
  //     }, time);
  //   }, time * incr);

  //   incr = incr + 1;
  // });

  // console.log('dfdhg')
}

function displayText() {
    console.log('not written')
}
   