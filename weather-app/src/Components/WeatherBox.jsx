import React from 'react'

const WeatherBox = ({weatherData}) => {
  return (
    <div className='weather-box'>
        <img src={weatherData.icon}className='weatherImg' />
        <h2>{weatherData.temp} °C</h2>
        <h3>{weatherData.city}</h3>
    </div>
  )
}

export default WeatherBox
