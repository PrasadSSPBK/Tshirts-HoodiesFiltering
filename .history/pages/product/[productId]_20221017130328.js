import React from 'react'

const ProductItem = ({item}) => {

   
  
  return (
    <div>
     {Object.keys(item).map((eac)=>{
      return(
        <div key={eac.id}>
          <h1>{eac.title}</h1>
          </div>
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