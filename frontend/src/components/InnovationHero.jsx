import React from 'react'
import VideoInfoCard from './videoInfoCard'
const InnovationHero = () => {
  return (
    <div className='pl-10 mt-36'>
    <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Innovations</h1>
    <div className='conatiner w-full  grid grid-cols-3 gap-2 p-5 '>
      <div className='w-full'>
        <div className=' pt-20'>
          <h1 className='font-bold text-3xl mb-3 '>
            From teenage cyber-thug to Europe's most wanted
          </h1>
          <p className='mb-5'>
            Kivimaki rose through teen cyber gangs to becomes a Most wanted criminal responsible for one of the most
             shocking hacks in history.
            </p>
          <button className='p-2 border-2 border-black font-bold'> See more</button>
        </div>
      </div>
      <div className='col-span-2'>
        <img
          src='https://ichef.bbci.co.uk/news/800/cpsprodpb/6eeb/live/3b2b46c0-07bd-11ef-8533-c557f743cc78.jpg.webp'
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

export default InnovationHero