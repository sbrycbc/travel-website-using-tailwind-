import React from 'react'

import BoraBora from '../assets/images/borabora.jpg'
import BoraBora2 from '../assets/images/borabora2.jpg';
import Maldives from '../assets/images/maldives.jpg';
import Maldives2 from '../assets/images/maldives2.jpg';
import Maldives3 from '../assets/images/maldives3.jpg';
import KeyWest from '../assets/images/keywest.jpg';     
import SelectsCard from './SelectsCard';


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        <SelectsCard bg={BoraBora} text ='Bora Bora' />
        <SelectsCard bg={BoraBora2} text ='Maldives' />
        <SelectsCard bg={Maldives} text ='Antiqua' />
        <SelectsCard bg={Maldives2} text ='Cozumel' />
        <SelectsCard bg={Maldives3} text ='Jamaica' />
        <SelectsCard bg={KeyWest} text ='Key West' />
    </div>
  )
}

export default Selects


{/* <div className='relative'>
<img src={BoraBora} alt="" />
<div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-2xl italic font-semibold  text-white absolute'>BoraBora</p>
</div>
</div>

<div className='relative'>   
<img src={BoraBora2} alt="" />
<div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-2xl italic font-semibold  text-white absolute'>BoraBora-2</p>
</div>
</div> 
<div className='relative'>
<img src={Maldives} alt="" />
<div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-2xl italic font-semibold  text-white absolute'>Maldives</p>
</div>
</div>
<div className='relative'>
<img src={Maldives2} alt="" />
<div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-2xl italic font-semibold  text-white absolute'>Maldives-2</p>
</div>
</div>
<div className='relative'>
<img src={Maldives3} alt="" />
<div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-2xl italic font-semibold  text-white absolute'>Maldives-3</p>
</div>
</div>
<div className='relative'>
<img src={KeyWest} alt="" />
<div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-2xl italic font-semibold  text-white absolute'>KeyWest</p>
</div>
</div> */}