import React from 'react'

const ProductItem = () => {
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem
export async function getServerSideProps(context){
    console.log(context)
}