import React from 'react'
import UserItems from './UserItems'
import { usersData } from '../../database/mockUser'

const User = () => {
  return (
    <div className='m-10   '>
        <h2 className='flex justify-center m-6 text-2xl font-bold text-white'>Haftanın Stilistleri</h2>
        <div className='flex flex-wrap justify-center gap-6 border-2 border-white w-full sm:w-4/6 m-auto rounded-4xl p-4 bg-gray-100'>
        {usersData.map((user)=>(
             <UserItems
             key={user.id}
             img={user.img}
             userName={user.userName}
             score={user.score}
             />
        ))}
      
        </div>
    </div>
  )
}

export default User