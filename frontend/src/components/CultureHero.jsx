import React from 'react'
import VideoInfoCard from './videoInfoCard'
import { useNavigate } from 'react-router-dom'
const CultureHero = () => {
  const navigate = useNavigate()
  return (
    <div className='pl-10 mt-36'>
    <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Culture</h1>
    <div className='conatiner w-full  grid grid-cols-3 gap-2 p-5 '>
      <div className='w-full'>
        <div className=' pt-20'>
          <h1 className='font-bold text-3xl mb-3 '>Darks responds to Kendrick Lamar accusations</h1>
          <p className='mb-5'>"I feel disgusted," says the musician, after Lamar claims he had relationships with underage women</p>
          <button className='p-2 border-2 border-black font-bold' onClick={()=> navigate("/news/culture")}> See more</button>
        </div>
      </div>
      <div className='col-span-2'>
        <img
          src='https://ichef.bbci.co.uk/news/800/cpsprodpb/2DE1/production/_133254711_gettyimages-13503286562.jpg.webp'
          width="100%"
          height="60vh"
        ></img>
      </div>
    </div>

    <div className='mr-10 mt-6'>
      <div className='container grid grid-cols-4 grip-gap-5 mt-5 mb-5'>
        <VideoInfoCard />
        <VideoInfoCard />
        <VideoInfoCard />
        <VideoInfoCard />
      </div>
    </div>
  </div>
  )
}

export default CultureHero