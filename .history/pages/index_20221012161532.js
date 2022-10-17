// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React from "react"

export default function Home({ data }) {
  console.log(data)
  return (




    <section className="text-gray-600 body-font" >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {data.map((item) => {
            return (

              <div key={item.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-top w-full h-full block" src={item.img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">{item.price}</p>
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
  return {
    props: {
      data: data
    }
  }

}
