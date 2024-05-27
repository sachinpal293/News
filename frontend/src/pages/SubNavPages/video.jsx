import React, { useState, useEffect } from 'react'
import VideoInfoCard from '@/components/videoInfoCard'
import VideoCard from '../VideoCard'
import { useParams } from 'react-router-dom'
// import {data} from "@/data.js"
import { useSelector } from 'react-redux'
import axios from 'axios'
function Video() {
  const title = useSelector(state => state.videoReducer.text)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("//localhost:8080/api/v1/user/getAllVideo")
      .then((response) => {
        const { videodata } = response.data.data
        setData(videodata)
      })
  }, [])



  data.map((element) => (
    console.log(element.videoFile)
  ))
  return (
    <div className='pl-10 '>
      <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Gerenal</h1>
      <div className='conatiner w-full  grid grid-cols-4 gap-2 p-5 '>
        <div className='col-span-3'>
          <VideoCard />
          <h1>{title}</h1>
        </div>

        <div className='w-full'>
          <ul className='overflow-y-auto h-96 '>
            {
              data.map((element) => (
                <li className='pb-1.5'><VideoInfoCard
                  img={element.thumbnail}
                  title={element.title}
                  url={element.videoFile}
                /></li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className='mt-6'>
        <div className='container'>
        <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Health</h1>
        <div className='grid grid-cols-3'>
          {
            data.map((element) => (
              <VideoInfoCard className="pb-1.5 pt-5"
                img={element.thumbnail}
                // title={element.title}
                url={element.videoFile}
              />
            ))
          }
        </div>
        </div>
      </div>

      <div className='mt-6'>
        <div className='container'>
        <h1 className='ml-1 font-bold text-lg border-t-2 border-black  p-2 mt-20'>Innovation</h1>
        <div className='grid grid-cols-3'>
          {
            data.map((element) => (
              <VideoInfoCard className="pb-1.5 pt-5"
                img={element.thumbnail}
                // title={element.title}
                url={element.videoFile}
              />
            ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Video