import React from 'react'

const ProductItem = ({item}) => {
  const {x}=item
  console.log(x)

   
  
  return (
    <div>
      {Object.keys(item).map((eachItem)=>{
        return(
          <h1 key = {eachItem.id
      }> {eachItem.category}</h1>
        )
      })}
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