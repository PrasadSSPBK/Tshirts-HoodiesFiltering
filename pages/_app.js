import '../styles/globals.css'
import React, { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([])
  const [cat, setCat] = useState()
  const [amount, setAmount] = useState()
  const [status,setStatus]=useState(true)
  const [priceCheck,setPriceCheck]=useState(false)
  const [catCheckTshirts, setCatCheckTshirts] = useState(false)
  const [catCheckHoodies, setCatCheckHoodies] = useState(false)

  const [size, setSize] = useState()
  const [error, setError] = useState(false)

  //FETCHING DATA

  const getData=async()=>{ 
   
   
    if ((!amount) &&(!cat) ) {
      
      const response = await fetch("http://localhost:4000/tshirts")
      const data = await response.json()
      setProducts(data)
      setStatus(false)
}
    else if ((amount) && (!cat) ) {
      const response = await fetch(`http://localhost:4000/tshirts?price=${amount}`)
      const data = await response.json()
      setProducts(data)
      setStatus(false)
      }
    else if ((!amount) && (cat)) {
  
      const response = await fetch(`http://localhost:4000/tshirts?category=${cat}`)
      const data = await response.json()
      setProducts(data)
      setStatus(false)
    }
    else {
      const response = await fetch(`http://localhost:4000/tshirts?price=${amount}&category=${cat}`)
      const data = await response.json()
      setProducts(data)
      setStatus(false)
    }
  // const response = await fetch(`http://localhost:4000/tshirts?price=${amount}&category=${cat}`)
  // const data = await response.json()
  // setProducts(data)


  }

  useEffect(() => {
    setStatus(true)
  
    getData()
  }, [amount, cat])



  let priceArray = []
  for (let items of products) {
    if (priceArray.includes(items.price)) {

    }
    else {
      priceArray.push(items.price)

    }
  }
  let sizeArray = []
  for (let items of products) {
    for (let x of items.size) {
      if (sizeArray.includes(x)) {

      }
      else {
        sizeArray.push(x)
      }

    }
  }

  let categoryArray = []
  for (let items of products) {

    if (categoryArray.includes(items.category)) {

    }
    else {
      categoryArray.push(items.category)
    }
  }




  const handleOnChange = (value,checked) => {
    if (checked){
      setPriceCheck(true)
      setAmount(value)
      
    }
    else {
      setPriceCheck(false)
      setAmount(undefined)
   
  
    }
    

    
   
   


  }

  const handleOnChangeCat=(cate,checked,name)=>{
    if(checked){
      setCat(cate)
      console.log(name)
    
      if (name === "hoodies") {
        setCatCheckHoodies(true)
      }
      else {
        setCatCheckHoodies(false)
      }
      if (name === "tshirts") {
        setCatCheckTshirts(true)
        
      }
      else {
        setCatCheckTshirts(false)

      }
    }
    else {
      setCat(undefined)
      setCatCheckHoodies(false)
      setCatCheckTshirts(false)
     
    }
  }

  const amountUndefined=()=>{
    setAmount(undefined)
    setPriceCheck(false)
    
  }
  const catUndefined = () => {
    setCat(undefined)
    setCatCheckHoodies(false)
    setCatCheckTshirts(false)
   
  }

  // const handleOnChangeSize = (value, checked) => {
  //   let newProduxts = []
  //   if (checked) {
  //     let sizeFilteredProducts = products.filter((each) => {
  //       if (each.size.includes(value)) {
  //         newProduxts.push(each)
  //       }

  //     })
  //     setProducts(newProduxts)
  //   } 
  //   else {
  //     setAmount(undefined)
  //     setCat(undefined)

  //   }

  // }
  

 

  return <Component catCheckHoodies={catCheckHoodies} catCheckTshirts={catCheckTshirts} priceCheck={priceCheck} cat={cat} status={status} catUndefined={catUndefined} amountUndefined={amountUndefined} amount ={amount} products={products} priceArray={priceArray} sizeArray={sizeArray} categoryArray={categoryArray}  handleOnChange={handleOnChange} handleOnChangeCat={handleOnChangeCat} {...pageProps} />
}

export default MyApp

