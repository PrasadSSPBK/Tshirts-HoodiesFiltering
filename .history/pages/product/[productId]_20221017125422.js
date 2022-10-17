import React from 'react'

const ProductItem = ({item}) => {
    console.log(item)
  return (
    <div>{item.title}</div>
  )
}

export default ProductItem
export async function getServerSideProps(context){
 
    const {params}=context
    console.log(context.query
      )

    
    const response = await fetch(`http://localhost:4000/tshirts?title=${context.query.productId}`)
    const data = await response.json()
    console.log(data)
   

    return {
        props: {
            item: data,

        }
    }
}