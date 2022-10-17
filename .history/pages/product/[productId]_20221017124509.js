import React from 'react'

const ProductItem = (item) => {
    console.log(item)
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem
export async function getServerSideProps(context){
 
    const {params}=context

    
    const response = await fetch(`http://localhost:4000/tshirts?title=${params}`)
    const data = await response.json()
   

    return {
        props: {
            item: data,

        }
    }
}