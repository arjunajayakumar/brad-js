// Serach input
const serachUser = document.getElementById('searchUser');

// Search input event listener
serachUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        console.log(userText);
    }
})