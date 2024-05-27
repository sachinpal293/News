import React from 'react'
import Card from './Card'

const EditorPicks = () => {
  
  return (
    <div className='pl-10 mt-36 mb-12'>
         <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Your's Articles</h1>
        <div className='grid gap-3 mt-12 '>
            <div className='w-full'>
             <Card/>
            </div>
        </div>
    </div>
  )
}

export default EditorPicks