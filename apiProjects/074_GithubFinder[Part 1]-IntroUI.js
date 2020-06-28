// init Github

const github = new Github;

// Serach input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {

        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                } else {
                    // Show profile
                }
            })
    } else {
        // clear profile
    }
})