import Head from 'next/head'

import RangeSlider from '../components/RangeSlider'



export default function Home() {
  return (
    <div >
     
        <div className='bg-black rounded flex justify-center items-center'>
          <h1 className="text-red-700 font-extrabold">Range Slider</h1>
        </div>
  

     
    </div>
  )
}

export async function  getServerSideProps(){
  const response = await fetch("http://localhost:4000/posts")
  const data=response.json()
  return{
    props:{
      data:data
    }
  }

}
