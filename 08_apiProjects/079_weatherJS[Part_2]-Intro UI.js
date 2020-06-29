// Init weather Object
const weather = new Weather('Kochi', 'kerala');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


// weather.changeLocation('london', 'uk');

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err))
}

