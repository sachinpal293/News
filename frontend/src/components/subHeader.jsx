import React from 'react'
import { Link } from 'react-router-dom'

function SubHeader() {
  return (
    <>
    <header className='h-11 shadow-md bg-white border-t-2'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between '>
            <ul className='flex container space-x-6 mx-7 px-9'>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/business">Business</Link>
                <Link to="/Innovation">Innovation</Link>
                <Link to="/culture">Culture</Link>
                <Link to="/travel">Travel</Link>
                <Link to="/earth">Earth</Link>
                <Link to="/video">Video</Link>
                <Link to="/weather">Weather</Link>
                <Link to="/health">Health</Link>
                <Link>Gerenal Election 2024</Link>
                <Link to="/health">Language</Link>
                <Link to="/bepatner" className='font-bold text-red-400 '>Be Our Patner</Link>
            </ul>
        </div>
    </header>
    </>
  )
}

export default SubHeader