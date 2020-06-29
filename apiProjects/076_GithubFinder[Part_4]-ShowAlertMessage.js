// init Github
const github = new Github;

// Init UI 
const ui = new UI;

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
                    ui.showAlert('user not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile)
                }
            })
    } else {
        // clear profile
        ui.clearProfile()
    }
})