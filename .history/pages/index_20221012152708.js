// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React from "react"

export default function Home({data}) {
  console.log(data)
  return (
    <div >
     
        <div className='rounded  justify-center items-center my-2'>
          <h1 className="text-red-700 font-extrabold">Range Slider</h1>
         

          {data.map((item)=>{
            return(
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1">$16.00</p>
                </div>
              </div>
              
            )
          })}
       
        </div>
      </div>
  

     
   
  )
}

export async function  getServerSideProps(){
  const response = await fetch("http://localhost:4000/tshirts")
  const data= await response.json()
  return{
    props:{
      data:data
    }
  }

}
