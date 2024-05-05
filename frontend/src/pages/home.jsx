import Card from '@/components/Card'
import React from 'react'

function Home() {
  return (
    <div className='flex mr-7'>
        <div className='w-1/4 border-solid border-2 border-sky-500 p-4'>
        </div>
        <div className='w-2/4 border-solid border-2 border-red-500'>
          <Card/>
        </div>
        <div className='w-1/4 border-solid border-2 border-sky-500 p-4'>
        </div>
    </div>
  )
}

export default Home