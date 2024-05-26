import Card from '@/components/Card'
import React from 'react'
import {data} from "@/data.js"

function WeRecommend() {
  data.map((ele)=>(
    console.log(ele)
  ))
  return (
    <>
    <div className='pl-10'>
    <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>We Recommend</h1>
    <div className='conatiner w-full  grid grid-cols-2 gap-2 p-5 '>
       <div className='w-full'>
        <Card
        img={data[0].imgurl}
        description={data[0].description}
        title={data[0].title} 
        category={data[0].category}
        />
       </div>
       <div className='w-full'>
       <Card
        img={data[1].imgurl}
        description={data[1].description}
        title={data[1].title} 
        category={data[1].category}
        />
       </div>
    </div>
    </div>
    </>
  )
}

export default WeRecommend