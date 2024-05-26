import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SubHeader() {
  const isAuth = useSelector(state=> state.auth.isAuthenticated)
  console.log(`hum abhi subheader secction me hai ${isAuth}`)
  return (
    <>
    <header className='h-11 shadow-md bg-white border-t-2 border-b-2'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between '>
            <ul className='flex container space-x-6 mx-7 px-9'>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/news/sports">Sports</Link>
                <Link to="/news/business">Business</Link>
                <Link to="/news/technology">Innovation</Link>
                <Link to="/news/culture">Culture</Link>
                <Link to="/news/travel">Travel</Link>
                <Link to="/news/earth">Earth</Link>
                <Link to="/news/video">Video</Link>
                <Link to="/news/weather">Weather</Link>
                <Link to="/news/health">Health</Link>
                <Link to="/news/general-election-2024">Gerenal Election 2024</Link>
                <Link to="/news/health">Language</Link>
                <Link to={isAuth? "/create-post" :"/login"} className='font-bold text-red-400 '>Be Our Partner</Link>
            </ul>
        </div>
    </header>
    </>
  )
}

export default SubHeader