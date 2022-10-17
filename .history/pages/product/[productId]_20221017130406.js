import React from 'react'

const ProductItem = ({item}) => {

   
  
  return (
    <div>
    
    {item[0].id}
      </div>
  )
}

export default ProductItem
export async function getServerSideProps(context){
 
    const {params}=context
    

    
    const response = await fetch(`http://localhost:4000/tshirts?title=${context.query.productId}`)
    const data = await response.json()
  
   

    return {
        props: {
            item: data,

        }
    }
}