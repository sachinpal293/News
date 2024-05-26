
import { addLink } from '../features/video/videoSlice';
import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';


function VideoInfoCard({img,title,url}) {
    const [data, setData] = useState(null);
    const[link, setLink] = useState("");
    const dispatch = useDispatch();
   
    const handleClick = (e)=>{
      e.preventDefault();
      console.log(url)   
      dispatch(addLink(url))
      dispatch(addTitle(title))
    }
    console.log(link)
  return (
    <div className='w-full grid grid-cols-2 gap-4'>
       <img src={img} onClick={handleClick}/>
       <div className='' >
        <div onClick={handleClick} className='font-bold'>{title}</div>
        <p>13 hr ago | News</p>
        India
       </div>
       
    </div>
  )
}

export default VideoInfoCard