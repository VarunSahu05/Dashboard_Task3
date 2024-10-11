document.querySelector(".get-weather-btn").addEventListener("click", () => {
    const location = document.getElementById("location").value;
    if (location) {
        getWeather(location);
    } else {
        alert("Please enter a location");
    }
  });

  async function getWeather(location) {
    const apiKey = "ApiKey";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Location not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
  }

  function displayWeather(data) {
    const weatherSection = document.querySelector(".weather-card");

    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const city = data.name;

    weatherSection.innerHTML = `
        <p>Current Weather: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Location: ${city}</p>
        <input type="text" id="location" placeholder="Enter Location">
        <button class="get-weather-btn">Get Weather</button>
    `;

    document.querySelector(".get-weather-btn").addEventListener("click", () => {
        const newLocation = document.getElementById("location").value;
        if (newLocation) {
            getWeather(newLocation);
        } else {
            alert("Please enter a location");
        }
    });
  }
