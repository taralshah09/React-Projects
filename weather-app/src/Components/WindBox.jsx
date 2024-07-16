import React from 'react'

const WindBox = ({weatherData}) => {
  return (
    <div className='wind-box'>
      <div className='col'>
        <img src="../images/wind.png"/>
      </div>
      <div className="col">
        <h2>{Math.round(weatherData.windSpeed)} kmph</h2>
        <h3>Wind</h3>
      </div>
    </div>
  )
}

export default WindBox
