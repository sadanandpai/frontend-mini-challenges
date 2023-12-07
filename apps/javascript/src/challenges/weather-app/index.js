import clear from './images/clear.png';
import clouds from './images/clouds.png';
import drizzle from './images/drizzle.png';
import haze from './images/haze.png';
import humidity from './images/humidity.png';
import mist from './images/mist.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import wind from './images/wind.png';

const weatherIconsMap = new Map([
  ['clear', clear],
  ['clouds', clouds],
  ['drizzle', drizzle],
  ['haze', haze],
  ['humidity', humidity],
  ['mist', mist],
  ['rain', rain],
  ['snow', snow],
  ['wind', wind],
]);

// API TO BE USED FOR THE WEATHER DETAILS
const apiKey = '46d47581a51a79782741111953e700af';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //to fetch the details when city name is entered.

  if (response.status == 404) {
    // when city name is entered wrong
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    weatherIcon.src = weatherIconsMap.get(data.weather[0]?.main?.toLowerCase());
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
}

searchBtn.addEventListener('click', () => {
  // when search button is clicked it initiates the check weather program with the city name entered
  checkWeather(searchBox.value);
});
