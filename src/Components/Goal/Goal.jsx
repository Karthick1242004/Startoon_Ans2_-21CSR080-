import React from 'react'
import Piechart from './Piechart/Piechart'

function Goal() {
  return (
    <>
    <div className='bg-[#012E57] rounded-[22px] w-[85%] md:w-[25%] flex flex-col justify-center h-auto mt-4 py-6 px-4'>
        <p className='text-white text-center text-[20px]'>Goals reached</p>
      <Piechart percentage={40}/>
    </div>
    </>
  )
}

export default Goal
