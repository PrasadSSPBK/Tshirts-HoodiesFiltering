// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import React, { useEffect, useState } from "react"

export default function Home({ data }) {
  const [products, setProducts] = useState(data)

  let priceArray = []
  for (let items of data) {
    if(priceArray.includes(items.price)){
      
    }
    else{
      priceArray.push(items.price)
    }
    
    

  }
  let sizeArray = []
  for (let items of data) {
    for (let x of items.size){
      if (sizeArray.includes(x)) {

      }
      else {
        sizeArray.push(x)
      }
      
    }



  }
 
  // console.log(sizeArray)
  // console.log(priceArray)
  
 
  // const [price, setPrice] = useState()

 useEffect(()=>{

 },[])
  

  const handleOnChange=(e)=>{
   
    
      let filteredProducts = products.filter((each) => (
        each.price == e.target.value
      ))
     
      setProducts(filteredProducts)
      
  
  }
  const handleOnChangeSize=(e)=>{
    let newProduxts=[]
    let sizeFilteredProducts =products.filter((each)=>{
if(each.size.includes(e.target.value)){
  newProduxts.push(each)
}
    
  })
  setProducts(newProduxts)
 
  console.log(newProduxts)
}
   
     
   
    
   

  

  return (

    <section className="text-gray-600 body-font" >
      <div className="container flex px-5 py-24 mx-auto w-full">
        <div className="flex flex-col mx-5 bg-gray-400 w-1/8">
        <div className="  mx-5 shadow-2xl">
          {priceArray.map((item)=>{
            return(
              <div key={item} className="flex mx-5 my-4 px-2">
              <input type="checkbox" value={item} id="cost" onChange={handleOnChange}/>
                <label htmlFor="cost">₹{item}</label>
              </div>
            )
          })}
        </div>
        <div className=" mx-5 shadow-2xl">
          {sizeArray.map((item) => {
            return (
              <div key={item} className=" flex mx-5 my-4 px-2">
                <input type="checkbox" value={item} id="size" onChange={handleOnChangeSize} />
                <label htmlFor="size">{item}</label>
              </div>
            )
          })}
        </div>
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
                 
                  {item.size.map((eachSize)=>{
                    return(
                      <div key={item.id} className=" flex flex-row">
                      <span className="text-green-600 font-semibold">{eachSize}</span>
                    </div>)
                  })}
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
