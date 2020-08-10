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
function init() {
    let images = document.getElementsByTagName("img");
    console.log(images)
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }


}

function showAnswer() {
    let image = document.getElementById("zero");
    image.src = "/img/zero.jpg";
}