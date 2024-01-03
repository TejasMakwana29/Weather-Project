let apiKey = "c9ef958b2dedb22aa657eb8916a23bd6";
let city;
let userCity = document.getElementById("usertext");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weatherimg");

async function getWeatherData() {
  city = userCity.value;
  console.log(city);
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  let data = await response.json();
  console.log(data);

  ct.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  windInfo.innerHTML = data.wind.speed + "km/hr";

  let weatherTemperature = data.main.temp - 273.15;

  if (weatherTemperature > 25) {
    weatherImage.src = "Hot weather.png";
  } else if (weatherTemperature < 10) {
    weatherImage.src = "winter weather.png"; 
  } else {
    weatherImage.src = "Weather Sunny.png"; 
  }
}

