const button = $("#submit-button");
const APIkey = "279df7938b24538a3425a8db10b868c0"
let cityName = $("#search-bar");
let todayWeather=$(".today");
let cityHistory = JSON.parse(localStorage.getItem("cities"));
if (cityHistory === null) {
  cityHistory = [];
}
console.log(cityHistory)

// button.on('click', searchCity())
button.on("click", function (event) {
  event.preventDefault();
  retrieveWeather(cityName.val());
  cityHistory.push(cityName.val());
  localStorage.setItem('cities',JSON.stringify(cityHistory))
});



//List & Store previously searched cities
function historySearch(event) {
  cityName = event.target.textContent;
  weather();
}


//Grab weather data for next 5 days
function retrieveWeather(cityName) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=279df7938b24538a3425a8db10b868c0&units=imperial')
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);

      startWeather();
    })
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=279df7938b24538a3425a8db10b868c0&units=imperial')
    .then(function (response) {
      return response.json()
    })
    .then(function (data){
      console.log(data);
      todayWeather.html(` <h2>${data.name} (${dayjs.unix(data.dt).format("MM/DD/YYYY")}) <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></h2>
      <p>Temp: ${data.main.temp}degrees F</p>
      <p>Humidity:${data.main.humidity}</p>
      <p>Wind:${data.wind.speed}</p>`)
    })
}

//Display weather for the next 5 days
function displayWeather(weatherData) {
let city = data.city.name;

}

//Display current weather data on the page
function displayWeather(weatherData) {
  let city = data.city.name;
  console.log(weatherData);
}

// //Store past searches in local directory 
// localStorage.setItem("cityHistory","placeholder");








