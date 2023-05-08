const button = $("#submit-button");
const APIkey = "279df7938b24538a3425a8db10b868c0"
let cityName = $("#search-bar");
let todayWeather=$(".today");
cityHistory = JSON.parse(localStorage.getItem("cities"));
if (cityHistory === null) {
  cityHistory = [];
}

// button.on('click', searchCity())
button.on("click", function (event) {
  event.preventDefault();
  retrieveWeather(cityName.val());
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

//Display current weather data on the page
function displayWeather(weatherData) {
  let city = data.city.name;
  console.log(weatherData);
}






// // This is the array of hour blocks: 8 per day, for a total of 40.
// const daysInForecast = sample.list

// /*
// Each date object has a property called "dt", which is a Unix timestamp for the date and time 
// of that object's data. The first one is 1681333200.
// */

// // Create a new array to hold one day block per forecast day.
// const newForecastArr = []

// // iterate over the 40 blocks, but we will do them 8 at a time, so that we get one per day.
// for (let i = 0; i < 40; i = i + 8) {
//   newForecastArr.push(sample.list[i])
// }

// // We now have a new array with one record for each day!
// console.log(newForecastArr)


// /* 
// Want to see why arrow functions are cool? Combined with an array method you haven't learned 
// yet, we can do all this work in one line of code. We will show you array.filter() later!
// */

// const newForecastArr2 = sample.list.filter((_dayObj, idx) => idx % 8 === 0)
// console.log(newForecastArr2)
