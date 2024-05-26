import { useSelector } from "react-redux"
import one from "./one.mp4"
import { useEffect, useState } from "react";
import {data} from "@/data.js"
function VideoCard() {
  const src = useSelector(state=> state.videoReducer.value) || data[0].url;
  const tittle = useSelector(state=> state.videoReducer.text)
  
  const [url, setUrl] = useState("")
  useEffect(()=>{
      setUrl(src)
  },[])
  console.log(src)

  return (
    <div className='w-full'>
     {src ? <iframe width="100%" height="500" src={src} title="YouTube video player" frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>: <video src="" width="100%" height="500" controls> </video>
     }
    </div>
  )
}

export default VideoCard