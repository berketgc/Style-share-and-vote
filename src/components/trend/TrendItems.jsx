import React from 'react'

const TrendItems = ({img}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4 '>
        
        <div className='border-2 border-white p-1 flex flex-col rounded-2xl justify-center items-center bg-[#EBCB90]'>
        <h2 >Vote</h2>
        <section>
            <img className='size-40  p-4' src={img} alt="" />
        </section>
        <section className='flex justify-between gap-3 p-2 mt-4  '>
            <img className='size-6 ' src="../images/up.png" alt="" />
            <div className='w-6 h-6 p-2 bg-yellow-300 rounded-full   justify-center items-center text-sm   flex '>
                <p>12</p>
            </div>
            <img className='size-6 ' src="../images/down.png" alt="" />
        </section>
        </div>

    </div>
  )
}

export default TrendItems