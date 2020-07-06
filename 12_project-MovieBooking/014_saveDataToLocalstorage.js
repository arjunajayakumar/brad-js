const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('SelectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


//Update total count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat)); 

    //local Storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
   
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
      
}

//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//Seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');

      updateSelectedCount();
    }
})