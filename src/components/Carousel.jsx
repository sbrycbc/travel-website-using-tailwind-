import React from 'react'

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      },
];

const Carousel = () => {
  return (
    <div className='max-w-[1240] mx-auto px-4 py-16 relative flex justify-center items-center'>
        {
            sliderData.map((item ,index) => (
                <div>
                    <img className= 'w-full rounded-md' src={item.url} alt='/' />
                    {index}
                </div>
            ))
        }
    </div>
  )
}

export default Carousel