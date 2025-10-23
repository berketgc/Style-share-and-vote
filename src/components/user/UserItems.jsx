import React from 'react'

const UserItems = ({ img, userName, score }) => {
  return (
    <div className="flex flex-col items-center w-28 sm:w-32 m-2 ">
      <div className="border-2 p-2 border-green-500 rounded-full hover:bg-sky-500 hover:border-0 transition-all">
        <img
          className="size-20 sm:size-24 rounded-full object-cover"
          src={img}
          alt={userName}
        />
      </div>

      <h3 className="text-sm sm:text-base mt-2">{userName}</h3>

      <section className="flex items-center gap-1">
        <img className="size-5 sm:size-6" src="../images/score.png" alt="" />
        <p className="text-sm sm:text-base">{score}</p>
      </section>
    </div>
  )
}

export default UserItems
