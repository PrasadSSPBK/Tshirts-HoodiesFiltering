import React, { useState } from 'react'

const RangeSlider = () => {
    const [minvalue,setMinValue]=useState(0)
    const [maxvalue, setMaxValue] = useState(1000)
  return (
    <>
      <div className="rounded-md">
          <span className="p-2 font-semibold"> Min</span>
          <input
              
              type="number"
              value={0}
              className="w-24 rounded-md border border-gray-400"
          />
      </div>
          <div className="rounded-md">
              <span className="p-2 font-semibold"> Max</span>
              <input
step={10}
                  type="number"
                  value={0}
                  className="w-24 rounded-md border border-gray-400"
              />
          </div>
          <div className="range-input relative  ">
              <input
                
                  type="range"
                 
                  className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
              />

              <input
             
                  type="range"
                
                  className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
              />
          </div>
          </>
      

  )
}

export default RangeSlider