const button = $("#submit-button");
const APIkey = "279df7938b24538a3425a8db10b868c0"
let cityName = "Minneapolis";
cityHistory = JSON.parse(localStorage.getItem("cities"));
if (cityHistory === null) {
  cityHistory = [];
}

// button.on('click', searchCity())
button.on("click", function (event) {
  event.preventDefault();
  searchCity();
});


//List & Store previously searched cities
function historySearch(event) {
  cityName = event.target.textContent;
  weather();
}

//Geocoding API
fetch(
  'https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={279df7938b24538a3425a8db10b868c0}&units=imperial'
    .then((response) => response.json())
    .then(function (data) {
      startWeather();

//Grab weather data for next 5 days
function retrieveWeather() {          
}

//Display current weather data on the page
function displayWeather(weatherData) {
  let city = data.city.name;
  console.log(weatherData);
  }

//Get lat and long data     
fetch(
  api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={APIkey}&units=imperial
    )

  // info needed from call
  // list.main.temp
  // list.main.temp_min
  // list.main.temp_max
  // list.main.humidity
  // "main":{
  //   "temp":306.15, //current temperature
  //   "humidity":44,
  //   "temp_min":306, //min current temperature in the city
  //   "temp_max":306 //max current temperature in the city
  // },
  // list.wind.speed
  // list.weather
  // city.name

}


