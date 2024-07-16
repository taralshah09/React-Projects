import React from 'react'

const HumidityBox = ({weatherData}) => {
  return (
    <div className='humidity-box'>
      <div className='col'>
        <img src="../images/humidity.png"/>
      </div>
      <div className="col">
        <h2>{weatherData.humidity}%</h2>
        <h3>Humidity</h3>
      </div>
    </div>
  )
}

export default HumidityBox
