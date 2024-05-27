import React, { useState , useEffect} from 'react'
import Hero from './hero'
import WeRecommend from './WeRecommend'
import MustWatch from './MustWatch'
import BusinessHero from '@/components/BusinessHero'
import CultureHero from '@/components/CultureHero'
import EditorPicks from '@/components/EditorPicks'
import EarthHero from '@/components/EarthHero'
import InnovationHero from '@/components/InnovationHero'
import ScienceAndHealth from '@/components/ScienceAndHealth'
import axios from 'axios'
function Home() {
  const id = localStorage.getItem("userId");
  const[data, setData] = useState([])
  const getdata = async()=>{
    await axios.post("//localhost:8080/api/v1/user/getAllPosts",{user:id})
    .then((response)=>{
      // console.log(response.data.data.postdata)
      setData(response.data.data.postdata)
    })
  }
  console.log(data[0])

  useEffect(()=>{
    getdata();
  },[])
  return (
    <div>
      <Hero/>
      <WeRecommend/>
      <MustWatch/>
      <BusinessHero/>
      <CultureHero/>
      <EditorPicks/>
      <EarthHero/>
      <InnovationHero/>
      <ScienceAndHealth/>
    </div>
  )
}

export default Home