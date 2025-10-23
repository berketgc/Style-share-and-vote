import React from 'react'

const HeroItems = ({img}) => {
  return (
   <div className="w-full max-w-4xl h-60  flex justify-center items-center rounded-lg ">
      <img
        className="w-full h-full object-contain"
        src={img}
        alt="hero"
      />
    </div>
  )
}

export default HeroItems