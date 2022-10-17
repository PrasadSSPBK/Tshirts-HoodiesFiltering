// import Head from 'next/head'


// import RangeSlider from '../components/RangeSlider'

import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function Home({ data }) {
  const [products, setProducts] = useState(data)


  let priceArray = []
  for (let items of data) {
    if (priceArray.includes(items.price)) {

    }
    else {
      priceArray.push(items.price)
      
    }



  }
  let sizeArray = []
  for (let items of data) {
    for (let x of items.size) {
      if (sizeArray.includes(x)) {

      }
      else {
        sizeArray.push(x)
      }

    }



  }

  let categoryArray = []
  for (let items of data) {
    
      if (categoryArray.includes(items.category)) {

      }
      else {
        categoryArray.push(items.category)
      }





  }


  

  const handleOnChange = (e) => {
    if (e.target.checked) {

      let filteredProducts = products.filter((each) => (
        each.price == e.target.value
      ))

      setProducts(filteredProducts)
    } else {
      setProducts(data)
    }


  }

  const handleOnChangeSize = (e) => {
    let newProduxts = []
    if (e.target.checked) {
      let sizeFilteredProducts = products.filter((each) => {
        if (each.size.includes(e.target.value)) {
          newProduxts.push(each)
        }

      })
      setProducts(newProduxts)
    } else {
      setProducts(data)
    }

  }








  return (

    <section className="text-gray-600 body-font" >
      <div className="container flex px-5 py-24 mx-auto w-full">
        <div className="flex flex-col  h-auto mx-5 bg-gray-400 w-1/8">
          <div className="  m-5 shadow-2xl rounded">
            {(priceArray.sort(function (a, b) { return a - b })).map((item) => {
              return (
                <div key={item} className="flex mx-5 my-4 px-2">
                  <input type="checkbox" value={item} id="cost" className="font-semibold mx-2 text-red-600" onChange={handleOnChange} />
                  <label htmlFor="cost">₹{item}</label>
                </div>
              )
            })}
          </div>
          <hr className="bg-white h-1 rounded mx-2" />
          <div className="  m-5 shadow-2xl rounded">
            {(priceArray.sort(function (a, b) { return a - b })).map((item) => {
              return (
                <div key={item} className="flex mx-5 my-4 px-2">
                  <input type="checkbox" value={item} id="cost" className="font-semibold mx-2 text-red-600" onChange={handleOnChange} />
                  <label htmlFor="cost">₹{item}</label>
                </div>
              )
            })}
          </div>
          <hr className="bg-white h-1 rounded mx-2" />
          <div className=" mx-5 shadow-2xl">
            {sizeArray.map((item) => {
              return (
                <div key={item} className=" flex mx-5 my-4 px-2">
                  <input type="checkbox" value={item} id="size" className="font-semibold mx-2" onChange={handleOnChangeSize} />
                  <label htmlFor="size">{item}</label>
                </div>
              )
            })}
          </div>
        </div>
       
        
        <div className="w-full flex flex-wrap -m-4">

          {products.map((item) => {
            return (
                
              <Link href={`/product/${item.title}`} key={item.id}  className="cursor-pointer" passHref>

              <div key={item.id} className="w-1/4 m-2 shadow-xl  content-center p-4 ">
               
                  
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center  h-full block" src={item.img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1 font-semibold text-red-600">₹{item.price}</p>
                  
                  <p className="mt-1 font-bold text-amber-600">{item.category.toUpperCase()}</p>
                  <div className="flex">

                  {item.size.map((eachSize) => {
                    return (
                      <div key={item.id} className="flex">

                        <div className="  m-1">
                          <p className="text-green-600 font-bold text-lg ">{eachSize}</p>


                        </div>
                      </div>
                      
                      )
                  })}
                  </div>
                 
                  <div>
                      <span className="mr-3">Color Available</span>
                     
                      <button className={`border-2 border-gray-300 ml-1 bg-${item.color}-700 rounded-full w-6 h-6 focus:outline-none`}></button>
                  </div>
                </div>
            
              </div>
              </Link>
              
             
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
      data: data,

    }
  }

}
