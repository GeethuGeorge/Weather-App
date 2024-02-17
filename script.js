const apikey = "cc8a5f4d945643e1817ea7435adf3e85";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }else{
      var data = await response.json();
      

    //Element selector

    let cityname = document.querySelector(".city");
    cityname.innerHTML = data.name;

    let temprat = document.querySelector(".temp");
    temprat.innerHTML = Math.round(data.main.temp) + "°C";

    let humid = document.querySelector(".humidity");
    humid.innerHTML = data.main.humidity + "%";

    let windy = document.querySelector(".wind");
    windy.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }



  }
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
