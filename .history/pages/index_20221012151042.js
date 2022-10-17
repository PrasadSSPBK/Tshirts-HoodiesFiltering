// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React from "react"

export default function Home({data}) {
  console.log(data)
  return (
    <div >
     
        <div className='rounded flex justify-center items-center'>
          <h1 className="text-red-700 font-extrabold">Range Slider</h1>
          {data.map((item)=>{
            return(
             <div key={item.id} className="flex">
             <h1 >{item.title}</h1>
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
