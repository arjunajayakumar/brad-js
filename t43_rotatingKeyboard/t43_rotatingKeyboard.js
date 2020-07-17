const firstRow = document.querySelectorAll(".keys1");
// const secondRow = document.querySelectorAll(".keys2");
// const thirdRow = document.querySelectorAll(".keys3");
// const fourthRow = document.querySelectorAll(".keys4");
// const fifthRow = document.querySelectorAll(".keys5");
// const sixthRow = document.querySelectorAll(".keys6");
const tapBtn = document.getElementById('input');
const output = document.getElementById('output');
const classList = document.querySelectorAll('keys');


//Event Listeners
tapBtn.addEventListener('click', selectRow);
document.body.addEventListener('click', addSingleClass);


let rowElements = [
  firstRow,
//   secondRow,
//   thirdRow,
//   fourthRow,
//   fifthRow,
//   sixthRow,
];

let interval = 24000;
  let increment = 0;

function selectRow() {
  rowElements.forEach((res) => {
    let runner = setTimeout(() => {
      addClass(res);
      clearTimeout(runner);
    }, interval * increment);

    increment = increment + 1;
  });

}

function addClass(el) {
  el.forEach((data) => {
    data.classList.add("row1");
    // addSingleClass(el);
    setTimeout(() => {
      data.classList.remove("row1");
    }, interval);
  });
}



function addSingleClass() {
  const time = 2000;
  let incr = 1;
  firstRow.forEach( (res, index) => {
    let runner = setTimeout(() => {
      res.classList.add("single");
      clearTimeout(runner);
      setTimeout(() => {
        res.classList.remove("single");
      }, time);
    }, time * incr);

    incr = incr + 1;
    // console.log(res)
  });
}



// rowElements.forEach((data,index) => {
//     console.log(data[index].classList)
// })

   