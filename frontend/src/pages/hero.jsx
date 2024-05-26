import React from 'react'
import Card from '@/components/Card'
import Articalnfo from '@/components/Articalnfo'
import { useSelector } from 'react-redux'
function Hero() {
  const user  = useSelector(state=> state.auth.user)
  // console.log(user.username._id)
  return (
    <div>
        <div className='container grid grid-cols-4 gap-4 '>
        <div className='w-full '>
          <Card 
           img="https://images.indianexpress.com/2024/05/Untitled-2024-05-14T215101.522.jpeg?resize=450,253"
           title="PM Modi doesn’t hear people’s plights, talks ‘irrelevant’ things: Priyanka in Amethi"
           description="Priyanka Gandhi appealed to the people to raise their voice and tell the PM Modi that that they do not want to hear about buffaloes, 'mangalsutra', and temples and mosques at the time of elections. She asked them to tell the PM to talk about the solutions to their problems."
          />
          <Card />
        </div>
        <div className='w-full  col-span-2  '>
          <Card img="https://ichef.bbci.co.uk/news/800/cpsprodpb/9482/live/ccc11860-1174-11ef-bb87-a1a4ccac912e.jpg.webp" />
        </div>
        <div className=''>
          <Articalnfo/>
          <Articalnfo/>
        </div>
      </div>    
    </div>
  )
}

export default Hero