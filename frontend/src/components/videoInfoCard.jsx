
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
    <div className='w-full grid gap-2'>
       <img src={img} onClick={handleClick} className='px-2'/>
       <div className='' >
        <div onClick={handleClick} className='font-bold'>{title}</div>
       </div>
       
    </div>
  )
}

export default VideoInfoCard