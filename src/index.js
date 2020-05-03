import './style.css'

const api = {
    key: "4c4e39e4d19df4b03f3b39a7f44a5e0e",
    base: "https://api.openweathermap.org/data/2.5/weather?q="
}


const searchbox = document.querySelector('.search-box');

const getResult = (query) => {
    fetch(`${api.base}${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
        return weather.json()})
        .then(displayResults);
}

const displayResults = (weather) => {
    console.log(weather)
    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let date = document.querySelector('.date')
    date.innerHTML = dateBuilder(now)

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

    let weather_element = document.querySelector('.weather')
    weather_element.innerHTML = `${weather.weather[0].main}`;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  };

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  

const setQuery = (event) => {
    if (event.keyCode == 13) {
        getResult(searchbox.value);
    }
}

searchbox.addEventListener('keypress', setQuery);





