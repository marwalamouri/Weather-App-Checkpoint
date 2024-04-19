const tempDivInfo = document.getElementById("temp");
const weatherInfoDiv = document.getElementById("weather-info");
const weatherImage = document.getElementById("weather-img");

async function getWeather() {
  // get data
  const APIkey = "3ca9e59b686162a44cea39bfb798a8c6";
  const city = "tunis";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
  const { data } = await axios.get(weatherUrl);
  // display data
  const cityName = data.name;
  const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
  const description = data.weather[0].description;
  const imageCode = data.weather[0].icon;
  const imageUrl = `https://openweathermap.org/img/wn/${imageCode}@4x.png`;
  const temperatureHTML = `
            <p>${temperature}°C</p>
        `;

  const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;
  tempDivInfo.innerHTML = temperatureHTML;
  weatherInfoDiv.innerHTML = weatherHtml;
  weatherImage.src = imageUrl;
}
getWeather();
