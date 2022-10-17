import React, { useState } from 'react'

const RangeSlider = () => {
    const [minvalue,setMinValue]=useState(0)
    const [maxvalue, setMaxValue] = useState(1000)
  return (
      <div className="rounded-md">
          <span className="p-2 font-semibold"> Min</span>
          <input
              onChange={(e) => setMinValue(e.target.value)}
              type="number"
              value={minValue}
              className="w-24 rounded-md border border-gray-400"
          />
      </div>

  )
}

export default RangeSlider