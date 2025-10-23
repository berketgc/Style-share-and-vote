import React from 'react'
import TrendItems from './TrendItems'

const Trend = () => {
  return (
    <div >
        <h2 className='text-2xl font-bold text-center mb-4 text-white'>trends</h2>
      <div className='flex justify-center items-center flex-wrap gap-8 '>
        <TrendItems
        img={"../images/trend3.jpg"}
        />
         <TrendItems
        img={"../images/trend1.jpg"}
        />
         <TrendItems
        img={"../images/trend4.jpg"}
        />
         <TrendItems
        img={"../images/trend2.jpg"}
        />
       
    </div>
    </div>
  )
}

export default Trend