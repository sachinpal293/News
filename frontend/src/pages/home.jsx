import React from 'react'
import Hero from './hero'
import WeRecommend from './WeRecommend'
import MustWatch from './MustWatch'
import BusinessHero from '@/components/BusinessHero'
import CultureHero from '@/components/CultureHero'
import EditorPicks from '@/components/EditorPicks'
import EarthHero from '@/components/EarthHero'
import InnovationHero from '@/components/InnovationHero'
import ScienceAndHealth from '@/components/ScienceAndHealth'

function Home() {
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