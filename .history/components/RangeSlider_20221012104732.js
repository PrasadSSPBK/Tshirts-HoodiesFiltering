import React from 'react'

const RangeSlider = () => {
  return (
  <div className="progress">
  
    <span>Min</span>
    <input type="range" min={100} max={1000}/>
          <span>Max</span>
  </div>


  )
}

export default RangeSlider