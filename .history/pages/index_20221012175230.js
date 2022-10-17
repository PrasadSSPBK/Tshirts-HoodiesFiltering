// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React, { useEffect, useState } from "react"

export default function Home({data}) {
 const [products,setProducts]=useState(data)
  const [price, setPrice] = useState()
  
 let x=localStorage.getItem("filteredProducts")
  console.log(x)

  const handleOnChange=(e)=>{
    setPrice(e.target.value)
    let filterdProducts=products.filter((each)=>(
      each.price==e.target.value
    ))

    let storedFilteredProducts = localStorage.setItem("filteredProducts", filterdProducts)
    
    setProducts(filterdProducts)
   
  
  }
  

  return (

    <section className="text-gray-600 body-font" >
      <div className="container flex px-5 py-24 mx-auto w-full">
        <div className="w-1/4 bg-gray-400 mx-5 shadow-2xl">
          {data.map((item)=>{
            return(
              <div key={item.id} className="flex mx-5 my-4 px-2">
              <input type="checkbox" value={item.price} id="cost" onChange={handleOnChange}/>
                <span htmlFor="cost ">₹{item.price}</span>
              </div>
            )
          })}
        </div>
        <div className="vl h-full"></div>
        <div className="w-3/4 flex flex-wrap -m-4">

          {products.map((item) => {
            return (

              <div key={item.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-top  h-full block" src={item.img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1 font-semibold text-red-600">₹{item.price}</p>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    </section>

   
  )
}

export async function getServerSideProps() {


  const response = await fetch("http://localhost:4000/tshirts")
  const data = await response.json()
  // console.log({data})
  return {
    props: {
      data: data
    }
  }

}
