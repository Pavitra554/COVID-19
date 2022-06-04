import React from 'react'

export const Loading = () => {
  return (
    <div className='absolute top-0 h-full w-full bg-transparent backdrop-blur-md flex justify-center items-center'>
        <div className=' animate-spin duration-50 w-32 h-32 border-4 border-t-[#b7cdff] border-[#d5ddf055] rounded-full'>

        </div>
    </div>
  ) 
}
