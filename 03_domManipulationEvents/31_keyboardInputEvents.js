const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');



// Function
const runEvent = (e) => {
    console.log(`EVENT TYPE: ${e.type}`);
    
    // Console the input value
       console.log(taskInput.value);
  

    // Preventing the default redirect behaviour
    // e.preventDefault();

    // Print the input value to h5
    // heading.innerText = e.target.value;

    // Console the input value
       console.log(e.target.value);
}

// Submit event
// form.addEventListener('submit', runEvent);

// Clear Input
// taskInput.value = '';

// Keydown event
// taskinput.addEventListener('keydown', runEvent);

// KeyUp
// taskInput.addEventListener('keyup', runEvent);

// Key press
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input', runEvent);

// Select
 select.addEventListener('change', runEvent);

