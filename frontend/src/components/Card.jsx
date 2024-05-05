import React from 'react'

function Card() {
  return (
    <div className='w-2/4'>
        <img src='https://ichef.bbci.co.uk/news/1536/cpsprodpb/8E2B/production/_133259363_thumbnailnewnorth_korea_weapons_to_russia_976x549_index_v2promo.png.webp'
         width="500px" height="400px"/>
        <div className='w-2/4'>
        <div className='text-left font-bold '>
            North Korean weapons are killing Ukrainians. The implications are far bigger
        </div>
        <div className=' text-wrap'>
        A missile that crashed in Kharkiv shows the surprising scale at which Pyongyang's weapons are used.
        </div>
        <footer>10 hours | News Aisa</footer>
        </div>
    </div>
  )
}

export default Card