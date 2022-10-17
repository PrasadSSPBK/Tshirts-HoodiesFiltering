// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React from "react"

export default function Home({data}) {
  console.log(data)
  return (
    <div >
     
        <div className='rounded  justify-center items-center'>
          <h1 className="text-red-700 font-extrabold">Range Slider</h1>

          {data.map((item)=>{
            return(
              <div key={item.id} className="flex  flex-wrap  justify-center">
                <div className="rounded-lg shadow-lg bg-white w-1/2">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                      Some quick example text to build on the card title and make up the bulk of the card's
                      content.
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                  </div>
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