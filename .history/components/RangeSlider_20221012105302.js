import React, { useState } from 'react'

const RangeSlider = () => {
    const [minvalue,setMinValue]=useState(0)
    const [maxvalue, setMaxValue] = useState(1000)
  return (
  <div className="progress">
  
    <span>Min</span>
    <input type="range" min={0} max={1000} step={10}  value={minvalue    }/>
          <span>Max</span>
  </div>


  )
}

export default RangeSlider