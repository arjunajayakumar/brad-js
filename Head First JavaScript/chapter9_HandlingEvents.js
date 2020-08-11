// window.onload = pageLoadedHandler;
// function pageLoadedHandler(){
//     alert("I'm alive!");
// }


window.onload = init;
// function init() {
//     let image = document.getElementById("zero");
//     image.onclick = showAnswer;

// }

// Assigning the click handler to all images on the page
// function init() {
//     let images = document.getElementsByTagName("img");
//     for (let i = 0; i < images.length; i++) {
//         images[i].onclick = showAnswer;
//     }


// }

// function showAnswer() {
//     let image = document.getElementById("zero");
//     image.src = "/img/zero.jpg";
// }

// Putting the event object to work
// function showAnswer(eventObj){
//     let image = eventObj.target;
//     let name = image.id;
//     name = name + ".jpg";
//     image.src = "/img/" + name;
// }

// The mouse move event
function init() {
    let map = document.getElementById("map");
    map.onmousemove = showCords;
}

function showCords(eventObj){
    let map = document.getElementById("coords");
    let x = eventObj.screenX;
    let y = eventObj.screenY;
    map.innerHTML = "Map coordinates: " + x + ", " + y;
}