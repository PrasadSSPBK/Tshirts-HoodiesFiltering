import React from 'react'

const RangeSlider = () => {
  return (
  <div className="progress">
  
    <span>Min</span>
    <input type="range" min={0} max={1000} step={10}/ value={0}>
          <span>Max</span>
  </div>


  )
}

export default RangeSlider