import React from 'react'
import HeroItems from './HeroItems'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap  justify-center items-center w-full m-auto mt-48  gap-4">
    <div>
      <HeroItems img="../images/banner.jpg" />
    </div>
    <div>
      <HeroItems img="../images/banner3.jpg" />
    </div>
    <div>
      <HeroItems img="../images/banner2.jpg" />
    </div>
    </div>
  )
}

export default Hero