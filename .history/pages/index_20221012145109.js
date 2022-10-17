import Head from 'next/head'

import RangeSlider from '../components/RangeSlider'



export default function Home({data}) {
  console.log(data)
  return (
    <div >
     
        <div className='bg-black rounded flex justify-center items-center'>
          <h1 className="text-red-700 font-extrabold">Range Slider</h1>
          {/* {data.map((item)=>{
            return(
             <div>
             <h1>{item.title}</h1>
             </div>
            )
          })} */}
        </div>
  

     
    </div>
  )
}

export async function  getServerSideProps(){
  const response = await fetch("http://localhost:4000/posts")
  const data= await response.json()
  return{
    props:{
      data:data
    }
  }

}
