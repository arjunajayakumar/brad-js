// Init weather Object
const weather = new Weather('Kochi', 'Kerala');

// Init UI
const ui = new UI()

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


// weather.changeLocation('london', 'uk');

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err))
}

