const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const movieSelect = document.getElementById('select-movie');

populateUI()

let ticketPrice = parseInt(movieSelect.value);

//Save the movie and price
function storeMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


//update seat count and price

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const seatsCount = selectedSeats.length;

    count.innerText = seatsCount;
    amount.innerText = seatsCount * ticketPrice;

}

//Get data from local storage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    //Store selected movie index
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}

//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);
    storeMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
})


//toggle b/w the selected and unselected seat
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

//Initial count
updateSelectedCount();
