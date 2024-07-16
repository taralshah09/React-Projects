import { useRef, useState } from "react";
import "./App.css";
import WeatherBox from "./Components/WeatherBox";
import HumidityBox from "./Components/HumidityBox";
import WindBox from "./Components/WindBox";

function App() {
  const inputRef = useRef("");
  const cloud_icon = "../images/clouds.png";
  const clear_icon = "../images/clear.png";
  const drizzle_icon = "../images/drizzle.png";
  const mist_icon = "../images/mist.png";
  const snow_icon = "../images/snow.png";
  const rain_icon = "../images/rain.png";

  const iconsObject = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": mist_icon,
    "50n": mist_icon,
  };

  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be328ddd8eb8c931ef2af05b8c956853&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      const icon = iconsObject[data.weather[0].icon];
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        temp: Math.round(data.main.temp),
        windSpeed: data.wind.speed,
        city: data.name,
        icon: icon,
      });
    } catch (error) {
      alert("Incorrect city!");
      console.log("ERROR in the input!");
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="input-box">
            <input ref={inputRef} type="text" placeholder="Enter city" />
            <button onClick={() => search(inputRef.current.value)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {weatherData && <WeatherBox weatherData={weatherData} />}
          <div className="add-info">
            {weatherData && <HumidityBox weatherData={weatherData} />}
            {weatherData && <WindBox weatherData={weatherData} />}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
