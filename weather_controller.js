class WeatherController {
    constructor() {
        this.windSpeed = 20;
    }

    updateWind(speed) {
        this.windSpeed = speed;
        console.log(`Wind speed updated to ${this.windSpeed} km/h`);
    }

    displayStatus() {
        console.log(`Current wind speed: ${this.windSpeed} km/h`);
    }
}

const weather = new WeatherController();
weather.updateWind(30);
weather.displayStatus();
