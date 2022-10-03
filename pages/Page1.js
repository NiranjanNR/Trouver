import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MedicalShop from '../assets/MedicalShop.svg'

const Page1 = () => {
  return (
    <div>
      <NavBar />
      <div className='px-32'>
        <div className='flex page-1'>
          <div className='tracking-wide	mt-24 mr-36 xl:text-6xl text-6xl head font-semibold '><div className=' xl:mb-10'>Making Your</div><div className=''>Health a Priority</div></div>
          <div><img alt='' className='mediphoto' src='Remedy.gif'></img></div>
        </div>
      </div>
    </div >
  )
}

export default Page1