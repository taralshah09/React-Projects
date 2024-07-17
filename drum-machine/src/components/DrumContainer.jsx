import React, { useState } from "react";

const DrumContainer = () => {
  const [power, setPower] = useState(true);
  const togglePower = () => {
    setPower(prev=>!prev);
  }

  const [rangeValue, setRangeValue] = useState(50); 

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (

    <div id="drum-machine">

      <div id="drum-pad">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div id="display">
        <div className="power">
          <p>POWER</p>
          <label className="switch-button" onClick={togglePower}>
            <input type="checkbox" id="power" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="display-box">Heater</div>
        <div className="range-value">Volume : {rangeValue}</div>
        <input
          type="range"
          className="range-slider"
          value={rangeValue}
          onChange={handleRangeChange}
          min="0"
          max="100"
        />

        {/* <div className="bank">
          <p>BANK</p>
          <label className="switch-button">
            <input type="checkbox" id="bank" />
            <span className="slider"></span>
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default DrumContainer;
