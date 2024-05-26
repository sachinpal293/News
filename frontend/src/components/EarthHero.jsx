import React from 'react'
import VideoInfoCard from './videoInfoCard'
const EarthHero = () => {
  return (
    <div className='pl-10 mt-36'>
      <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Earth</h1>
      <div className='conatiner w-full  grid grid-cols-3 gap-2 p-5 '>
        <div className='col-span-2'>
          <img
            src='https://ichef.bbci.co.uk/news/1536/cpsprodpb/63AC/production/_133261552_ernie3.jpg.webp'
            width="100%"
            height="60vh"
          ></img>
        </div>

        <div className='w-full'>
          <div className='p-5 pt-20'>
            <h1 className='font-bold text-3xl  '>What makes ginger tom cats so adventurous?</h1>
            <p className='mb-5'>One expert belives it could be a "Viking disposition" making them fearless and more confident</p>
            <button className='p-2 border-2 border-black font-bold'> See more</button>
          </div>
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

export default EarthHero