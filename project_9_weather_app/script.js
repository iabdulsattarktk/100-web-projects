const apikey = "0f6751cc8b6710c29acd315b4826ed00";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windspeed");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Shehar ka naam likho");
    return;
  }

  fetchWeather(city);
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City nahi mili");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert("Error: Shehar ka name check kro");
    weatherResult.style.display = "none";
  }
}

function displayWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp) + "°C";
  description.textContent = data.weather[0].description;
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
  windSpeed.textContent = "Wind: " + data.wind.speed + " km/h";
  weatherResult.style.display = "block";
}
