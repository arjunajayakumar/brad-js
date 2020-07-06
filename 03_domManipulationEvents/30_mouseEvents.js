const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// eventHandler
const runEvent = (e) => {
    console.log(`Event type : ${e.type}`);

    heading.textContent = `MouseX = ${e.offsetX} MouseY = ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}


// Click 
clearBtn.addEventListener('click', runEvent);

// Doulble click 
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up
clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
card.addEventListener('mouseenter', runEvent);

// Mouse Leave
card.addEventListener('mouseleave', runEvent);

// Mouse over
card.addEventListener('mouseover', runEvent);

// Mouse out
card.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);