// Event Bubling
// document.querySelector('.card-title').addEventListener('click',() => {
//     console.log('card-title');
// })



// document.querySelector('.card-content').addEventListener('click', () => {
//     console.log('card-content')
// })

// document.querySelector('.card').addEventListener('click', () => {
//     console.log('card');
// })

// document.querySelector('.col').addEventListener('click', () => {
//     console.log('col');
// })

// EVENET Deligation
 
// const delItem = document.querySelector('.delete-item');


const deleteItem = (e) => {
    // if (e.target.className === 'fa fa-remove') {
    //     console.log('delete item');
    // }

    // To target the a tag
    // if (e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    //     }

        // Correct way to do this
        if (e.target.parentElement.classList.contains('delete-item')) {
            console.log('delete item');
            e.target.parentElement.parentElement.remove();
            }
}

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);