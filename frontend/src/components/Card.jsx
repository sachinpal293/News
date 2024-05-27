import React from 'react'
import { useDispatch } from 'react-redux'
import { setdata } from '@/features/postSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

function Card({img, title, description, data, url, category,newurl}) {
  const cardData = {img, title, description, data, url, category}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnClick = ()=>{
     dispatch(setdata(cardData)); 
     navigate(`/news/${category}/${title}`)
  }
 
  const handleOnClickNavigate = ()=>{
    navigate("/news/")
  }
  return (
    <div className='w-full pr-1 pl-1 mb-4' onClick={handleOnClick}>
        <img src={img}
         width="100%" height="400px"/>
        <div className='w-full'>
        <div className='text-left font-bold '>
            {title}
        </div>
        <div className=' text-wrap'>
         {description}
        </div>
        {/* <Link to={newurl} target='_blank'>read more</Link> */}
        <a href="https://www.example.com" target='_blank'>click me</a>
        </div>
    </div>
  )
}

export default Card