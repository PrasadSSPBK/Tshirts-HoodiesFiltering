import React from 'react'

const ProductItem = () => {
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem
export async function getServerSideProps(context){
    console.log(context)
    const {params}=context
    const {title}=params
    const response = await fetch(`http://localhost:4000/tshirts?title=${title}`)
    const data = await response.json()
   

    return {
        props: {
            Item: data,

        }
    }
}