import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Goal from './Components/Goal/Goal'
import Patient from './Components/Patient/Patient'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <div className='flex justify-center'>
      <Goal/>
      </div>
      <div className='flex  md:justify-center'>
      <Patient/>
      </div>
      <div className='flex flex-row justify-between md:gap-10 px-8 mt-4 border-t-2 py-4 border-b-2 md:px-[30%]'>
        <p className='text-[13px]'><FontAwesomeIcon icon={faFile} /> Medical history</p>
        <p className='text-[13px]'>Hypertension,DM,Hypothyrodism</p>
    </div>
    </>
  )
}

export default App
