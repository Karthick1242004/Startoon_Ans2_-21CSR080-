import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <>
    <div className='flex flex-row gap-2 p-3 border-b-2 border-t-[20px] border-t-[#012E57] '>
      <Link className='text-[#012E57] '><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <p className='text-[#012E57] text-[20px]'>View patient</p>
    </div>
    </>
  )
}

export default Navbar
