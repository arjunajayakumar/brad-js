// var newsArray = [1,2,3,3,4,5,6];   // your code puts strings into this array
// var curNewsIndex = -1;
// let setTickerNews;

// var intervalID = setInterval(function() {
//     ++curNewsIndex;
//     if (curNewsIndex >= newsArray.length) {
//         curNewsIndex = 0;
//     }
//     setTickerNews(newsArray[curNewsIndex]);   // set new news item into the ticker
// })


let array = [1, 2, 3, 4, 5, 6]
let currentindex = 0;
let previousIndex = array.length;


function printArray() {
    setInterval(()=> {
        console.log(array[currentindex]);
        currentindex = (currentindex + 1) % previousIndex;

    }, 500)
}
printArray()
