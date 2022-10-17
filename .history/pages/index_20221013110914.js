// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React, { useEffect, useState } from "react"

export default function Home({ data }) {
  let priceArray = []
  for (let items of data) {
    priceArray.push(items.price)
    

  }
  console.log(priceArray)
  
 const [products,setProducts]=useState(data)
  // const [price, setPrice] = useState()

 
  

  const handleOnChange=(e)=>{
    setPrice(e.target.value)
    let x = localStorage.getItem("filteredProducts")
   
    // if(x){
      let filteredProducts = products.filter((each) => (
        each.price == e.target.value
      ))
      localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts))
      setProducts(filteredProducts)
    // }
    // else {
    //   setProducts(data)
    // }
    
    

     
    
    
   
  
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
      Hello
    </section>

   
  )
}

export async function getServerSideProps() {


  const response = await fetch("http://localhost:4000/tshirts")
  const data = await response.json()
  // console.log({data})
 
//   let shirts={}
//  for(let items of data){
//   if(items.title in shirts){
//     shirts[items.title].price.push(items.price)
//     shirts[items.title].color.push([items.color])

//   }
//   else{
//     shirts[items.title]=JSON.parse(JSON.stringify(items))
//     shirts[items.title].price=[items.price]
//     shirts[items.title].color = [items.color]

//   }
//  }

  return {
    props: {
      data:data,
      
    }
  }

}
