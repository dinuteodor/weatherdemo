const cityInput = document.querySelector ('.city-input');
const searchButton = document.querySelector ('.search-btn')

const API_KEY = 'b0dfd551d49cdc03a7806614d291014a'; // API key for OpenWeatherMap API

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_KEY = 'http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}'

    fetch(WEATHER_API_KEY).then(res => res.json()).then(data{
        console.log (data);
    }).catch(() => {
        alert('An error occurred while fetching the weather forecast!'),
    } );
}

function getCityCoordinates() {
    const cityName = cityInput.value.trim(); // Get user entered city name and remove extra spaces
    if (!cityName) return; // Return if cityName is empty
    const GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}';

    // Get entered city coordinates (latitude, longitude, and name) from the API response.
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if (!data.length) return alert('No coordinates found for ${cityName}');
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
    }).catch(() => {
        alert('An error occurred while fetching the coordinates!');
    });
}

searchButton.addEventListener ('click', getCityCoordinates);