import React from 'react'
import NavBar from '../components/NavBar/NavBar'

function Thanku() {
  return (
    <div className='thanku xl:h-[100]vh'>
      <NavBar />
      <div className='flex justify-center'>
        <div className=''>
          <div className='text-4xl fontme2 head text-center'>Your form has been submitted</div>
          <div className='flex justify-center'><img alt='' className='mediphoto text-center' src='Astronaut.gif'></img></div>
          <div className='text-center font-semibold text-7xl text-sky-500/90 fontme2 mb-16'>Thank you for your response!</div>
        </div>
      </div>
    </div>

  )
}

export default Thanku