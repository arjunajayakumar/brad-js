class Weather {
    constructor(city, state) {
        this.apiKey = '44305646923b1d8a7e8017e26347dad7';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from api
    async getWeather() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;

    }

    // Change Location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}

