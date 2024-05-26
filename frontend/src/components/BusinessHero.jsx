import React from 'react'
import Card from './Card'
import VideoInfoCard from './videoInfoCard'
const BusinessHero = () => {
  return (
    <div className='pl-10 mt-36'>
      <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Business</h1>
      <div className='conatiner w-full  grid grid-cols-3 gap-2 p-5 '>
        <div className='col-span-2'>
          <img
            src='https://ichef.bbci.co.uk/news/1536/cpsprodpb/9071/production/_133277963_gettyimages-1738039347.jpg.webp'
            width="100%"
            height="60vh"
          ></img>
        </div>

        <div className='w-full'>
          <div className='p-7 pt-20'>
            <h1 className='font-bold text-3xl  '>Boeing faces new inquiry over 787 inspection doubts</h1>
            <p className='mb-5'>Boeing told US regulators it might not have properly inspected its 787 Dreamliner jets.</p>
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

export default BusinessHero