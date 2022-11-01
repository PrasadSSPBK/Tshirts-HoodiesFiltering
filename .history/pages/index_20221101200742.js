
import React, { useState } from "react";
import Link from "next/link"
import { GrFormClose } from 'react-icons/Gr';


const Home = ({ catCheckTshirts,catCheckHoodies,priceCheck,status,products, priceArray, sizeArray, categoryArray, handleOnChange, handleOnChangeSize, handleOnChangeCat, amount, cat, catUndefined,amountUndefined }) => {
 
const [ctaChecked,setCatChecked]=useState()

  const OnChangePrice =(e)=>{
   
    handleOnChange(e.target.value, e.target.checked)
  }

  const OnChangeCat=(e)=>{
    //  setCatChecked(e.target.checked)
    
  
    handleOnChangeCat(e.target.value, e.target.checked,e.target.name)
  }
  const onChangeSize=(e)=>{
    handleOnChangeSize(e.target.value, e.target.checked)
  }


  const  renderFilter=()=>{
    
    if(amount && cat){
      return(
        <div className="flex flex-col" >
          <div className="flex  justify-between rounded border border-blue-500 mb-1 ">
            <button className="py-1 px-2 font-semibold ">
              Price:₹ {amount}
            </button>
            <GrFormClose className="mt-2 ml-2 text-lg " onClick={() => amountUndefined()} />

          </div>
          <div className="flex justify-between  rounded border border-blue-500 mb-1 ">
            <button className="py-1 px-2 font-semibold ">
              Category:{cat}
            </button>
            <GrFormClose className="mt-2 ml-2 text-lg " onClick={() => catUndefined()} />

          </div>
        </div>
      )
    }
    else if (amount && !cat){
      return(
        <div className="flex justify-between rounded border border-blue-500 mb-1 ">
          <button className="py-1 px-2 font-semibold ">
        Price:₹ {amount}
      </button>
          <GrFormClose className="mt-2 ml-2 text-lg " onClick={()=>amountUndefined()}/>
        
        </div>
        )

    }
    else if ((!amount) && (cat)) {
      return (
        <div className="flex justify-between rounded border border-blue-500 mb-1 ">
          <button className="py-1 px-2 font-semibold ">
            Category:₹ {cat}
          </button>
          <GrFormClose className="mt-2 ml-2 text-lg " onClick={() => catUndefined()} />

        </div>
      )

    }
    
    else {
      return (<div className="text-red-700  mb-1">No Filters applied</div>)
      
    }
  }
  const renderProductsList=()=>{
    return(
      <div className="w-full flex flex-wrap -m-4">


        {


          products.map((item) => {
            return (

              <Link href={`/product/${item.title}`} key={item.id} className="cursor-pointer" passHref>

                <div key={item.id} className="w-1/4 m-2 shadow-xl  content-center p-4 ">


                  <a className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className=" object-top w-full h-full block" src={item.img} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1 font-semibold text-red-600">₹{item.price}</p>

                    <p className="mt-1 font-bold text-amber-600">{item.category.toUpperCase()}</p>
                    <div className="flex">

                      {item.size.map((eachSize,index) => {
                        return (
                          <div key={index} className="flex">

                            <div className="  m-1">
                              <p className="text-green-600 font-bold text-lg ">{eachSize}</p>


                            </div>
                          </div>

                        )
                      })}
                    </div>

                    <div>
                      <p className={`mr-3 text-${item.color}-700 text-sm `}>Color Available: {item.color.toUpperCase()}</p>

                      {/* <button className={`border-2 border-gray-300 ml-1 bg-${}-700 rounded-full w-6 h-6 focus:outline-none`}></button> */}
                    </div>
                  </div>

                </div>
              </Link>


            )
          })}
      </div>

    )
  }

  
  
  
 
  return (
    <div>
      <section className="text-gray-600 body-font" >
  

        <div className="container flex px-5 py-24 mx-auto w-full">



          <div className="flex flex-col  h-auto mx-5 bg-white w-1/3">
            <div className="flex flex-col mx-5 my-4 px-2">
              <span className="m-1  p-1 text-pink-600 font-bold">Filters Applied</span>
              {renderFilter()}
              </div>
            {/* <div className="m-5 shadow-2xl rounded">
            <div>
              <label htmlFor="customRange1" class="form-label">Price Range</label>
              <input
                type="range"
                min="0"
                max="10000"
                value={min}
                className="form-range w-3/4 h-20 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                id="customRange1"
                onChange={changeMin}
              />
            </div>
            <div>
              <label htmlFor="customRange1" class="form-label">Price Range</label>
              <input
                type="range"
                min="0"
                max="10000"
                value={max}
                className="form-range w-3/4 h-20 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                id="customRange1"
                onChange={changeMax}
              />
              <p className='text-red-700 font-black'>{min}</p>
              <p className='text-red-700 font-black'>{max}</p>
              <p className='text-red-700 font-black'>{value[0]},{value[1]}</p>
            </div>
            <input type="number" value={value[0]} min={0} max={10000} onChange={(e) => setValue([e.target.value, value[1]])} className="m-3 px-2 py-1 border border-black" />
            <input type="number" value={value[1]} min={0} max={10000} onChange={(e) => setValue([value[0], e.target.value])} className="m-3 px-2 py-1 border border-black" />
          </div> */}
            <hr className="bg-white h-1 rounded mx-2" />
            <div className="  m-5 shadow-2xl rounded">
              <span className="m-1  p-1 font-bold">CATEGORY</span>
              <div  className="flex flex-col mx-5 my-4 px-2">
                <div>
                  <input type="checkbox" name="tshirts" value="tshirts" id="tshirts"  checked={catCheckTshirts} className="font-semibold mx-2 text-red-600" onChange={OnChangeCat} />
                  <label htmlFor="tshirts">TSHIRTS</label>
                </div>
                <div >
                  <input type="checkbox" name="hoodies" value="hoodies" id="hoodies" checked={catCheckHoodies} className="font-semibold mx-2 text-red-600" onChange={ OnChangeCat} />
                  <label htmlFor="hoodies">Hoodies</label>
                </div>
              </div>
              
            </div>
            <hr className="bg-white h-1 rounded mx-2" />
            <div className="  m-5 shadow-2xl ">
              <span className="m-1  p-1 font-bold">PRICE</span>
              {(priceArray.sort(function (a, b) { return a - b })).map((item,index) => {
                return (
                  <div key={index} className="flex mx-5 my-4 px-2">
                    <input type="checkbox" value={item} id="cost" checked={priceCheck} className="font-semibold mx-2 text-red-600" onChange={OnChangePrice} />
                    <label htmlFor="cost">₹{item}</label>
                  </div>
                )
              })}
            </div>
            <hr className="bg-white h-1 rounded mx-2" />
            <div className=" mx-5 shadow-2xl">
              <span className="m-1  p-2 font-bold">SIZE</span>
              {sizeArray.map((item,index) => {
                return (
                  <div key={index} className=" flex mx-5 my-4 px-2">
                    <input type="checkbox" value={item} id="size" className="font-semibold mx-2" 
                    onChange={onChangeSize} 
                    />
                    <label htmlFor="size">{item}</label>
                  </div>
                )
              })}
            </div>
          </div>
          {(products.length === 0 && (status)) && <div className="flex justify-center content-center text-2xl font-bold text-red-400">Loading.......</div>}


        
          {(products.length === 0  && (!status))? (<div className="flex justify-center content-center text-2xl font-bold text-red-400">No Items in your Filtered Category {cat},We will be Back Soon...KEEP VISITING. </div>) : renderProductsList()}

        </div>

      </section>

    </div>
  )
}

export default Home
