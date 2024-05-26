import React from 'react'
import { useDispatch } from 'react-redux'
import { setdata } from '@/features/postSlice';
import { useNavigate } from 'react-router-dom';

function Card({img, title, description, data, url, category}) {
  const cardData = {img, title, description, data, url, category}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnClick = ()=>{
     dispatch(setdata(cardData)); 
     navigate(`/news/${category}/${title}`)
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
        <footer>10 hours | News Aisa</footer>
        </div>
    </div>
  )
}

export default Card