import React from 'react'
import "../App.css"
import VideoInfoCard from '@/components/videoInfoCard'
import { Link } from 'react-router-dom'
function MustWatch() {
    return (
        <div className='border-t-2 border-b-2 border-black pt-2 pb-5'>
            <div className='bg-zinc-950 p-3 contentBoxSize mt-10 '>
                <h1 className='ml-1 font-bold text-lg border-t-2 border-white 
        p-1 mb-5 mt-5
        text-white 
        '>Must Watch</h1>
                <div className=''>
                    <div className='flex text-white p-7 bg-black h-80 boxSize'>
                        <div className='w-1/4 p-7'>
                            <div className='text-2xl'>
                            Kanhaiya Kumar ने Saurabh Dwivedi को Interview में Manoj Tiwari, JNU पर क्या बताया?
                            </div>
                            <p className='mt-5'>
                            During The Lallantop’s Chunav Yatra, Saurabh Dwivedi talked with congress leader Kanhaiya Kumar.</p> 
                            <button className='p-1 border-2 border-white mt-10'><Link to="/news/video">See more</Link></button>
                        </div>
                        <div className=' w-3/4 p-2'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_pKhg2F0fmU?si=4DtGROvFDWEXVLDj" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className='pl-10 pr-10 border-t-2  border-black ml-10 mr-10 mt-6'>
                <div className='container grid grid-cols-4 grip-gap-5 mt-5 mb-5'>
                   <VideoInfoCard/>
                   <VideoInfoCard/>
                   <VideoInfoCard/>
                   <VideoInfoCard/>
                </div>
            </div>

        </div>
    )
}

export default MustWatch