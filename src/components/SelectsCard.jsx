import React from 'react';

const SelectsCard = (props) => {
  return (
    <div className='relative group'>
      <img className='w-full h-full object-cover rounded' src={props.bg} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 '>
        <p className='left-4 bottom-4 text-2xl italic font-semibold text-black absolute group-hover:bg-gray-300 transition duration-200 px-4 py-1 rounded-2xl'>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;