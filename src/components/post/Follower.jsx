import React from 'react'

const Follower = ({follower,button}) => {
  return (
    <div className='bg-gray-200 m-2 flex justify-center items-center gap-6'>
        <img className='w-5 h-5 border-2 rounded-full' src="" alt="" />
        <p className='  w-28  '>{follower}</p>
       <button className='text-[12px] mr-2 bg-green-500 rounded-2xl text-white p-1'>{button}</button>
    </div>
     
  )
}

export default Follower