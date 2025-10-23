import React from 'react'

const PostItems = ({img}) => {
  return (
    <div>
        <div>
            <img
            className='border-2 size-40'
             src={img} alt="" />
        </div>
    </div>
  )
}

export default PostItems