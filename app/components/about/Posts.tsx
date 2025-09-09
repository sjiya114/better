import React from 'react'
import Card from './Card'

function Posts() {
  return (
    <div className=' px-[16vw] bg-[#F0F7F1] pt-20 pb-20 '>
       <h1 className='text-black text-center  font-bold text-2xl mb-10'>Related posts</h1>
       <div className='flex flex-row md:space-x-6 justify-center space-y-6 max-lg:flex-col items-center flex-wrap '>
         <Card/>
       </div>
    </div>
  )
}

export default Posts
