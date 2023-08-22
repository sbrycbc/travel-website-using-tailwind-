import React from 'react';
import TravelSea from '../assets/video/TravelSea.mp4'

const Hero = () => {
  return (
    <div>
         <video
        className='w-full h-full object-cover'
        src={TravelSea}
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default Hero