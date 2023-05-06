const button = $("#submit-button");
let cityName = "Minneapolis";
cityHistory = JSON.parse(localStorage.getItem("cities"));
if (cityHistory === null) {
  cityHistory = [];
}

button.on("click", function (event) {
  event.preventDefault();
  searchCity();
});
// button.on('click', searchCity())

start();

function start() {
  weather();
  listCities();
}

function searchCity() {
 
}

function historySearch(event) {
  cityName = event.target.textContent;
  weather();
}

//List previously searched cities

//Get lat and long data 

//Retrieve weather data
.then(function (data) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=279df7938b24538a3425a8db10b868c0`
  )
    .then((response) => response.json())
    .then(function (data) {
      startWeather();

 
//Grab weather data for the next 5 days
function retrieveWeather() {
           
}
//Display the weather data on the page
  function displayWeather(weatherData) {
  let city = data.city.name;
  console.log(weatherData);
  }