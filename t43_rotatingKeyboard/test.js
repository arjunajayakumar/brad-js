var urls = ['http://mylink1', 'http://mylink2', 'http://mylink3', 'http://mylink4'],
    interval = 2000, //  = 2s
    increment = 1;

    var runner = setTimeout(function() {
        // Do your stuff.
        urls.forEach(function(url) {


            increment = increment + 1;
            console.log(increment)
          });
    
        clearTimeout(runner);
    
      }, interval * increment);


      // /
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

let rowElements = [
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  fifthRow,
  sixthRow,
];


let state  = 'rowNav';
function navigation() {
  rowNav()
  // console.log("inside navigation")
  //   if(state === 'rowNav') {
  //       state = 'coloumn';
  //       rowNav();
  //   } else if(state === 'coloumn') {
  //       state = 'rowNav';
  //       console.log('runner', runner)
  //       clearTimeout(runner);
  //       selectColoumn()
  //   } else {
  //       displayText();
  //   }

}


let interval = 500;
let increment = 0;



function rowNav() {
  runner = setTimeout(() => {
  let len = keyHolder.length,i=1;
    
  keyHolder.forEach((res) => {
    setTimeout(() => {
    res.classList.add("row1");
  }, interval * increment);
  increment++

  if(i === len) {
    setTimeout(() => {
      res.classList.remove("row1");
    }, interval * (increment + 1));
  } else {
    setTimeout(() => {
      res.classList.remove("row1");
    }, interval * increment);
  }
    
  rowNav()
 
    });
  }, interval * increment);
}


//
// function rowNav() {
//   runner = setTimeout(() => {
//     rowElements.forEach((res) => {
//       increment++;
//       // console.log(res);
//       // addClass(res);


//       console.log('hai');
//     });
//   }, interval * increment);
// }

// function addClass(el) {
//   console.log(el);
//   el.forEach((data) => {
//     data.classList.add("row1");
//     setTimeout(() => {
//       data.classList.remove("row1");
//     }, interval * increment);
//     increment++
//   });

// }

function addClass(el) {
  console.log(el);
  el.forEach((data) => {
   
  });

}


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
   

