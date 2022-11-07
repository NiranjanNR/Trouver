import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MediShop from '../assets/MediShop.svg'
import Shops from '../components/Shops/Shops'
import Footer from './footer'

const MedicalShops = () => {
  return (
    <div>
      <div className='page-1 h-[100vh]'>
        <NavBar />
        <div className='px-24 ml-5'>
          <div className='flex'>
            <div className='mt-24 mr-36 '>
              <div className='fontme tracking-wide xl:text-6xl text-6xl head'><div className=' xl:mb-10'>Making Your</div><div className='mb-4'> Health a Priority</div></div>
              <div className='mt-14 text-slate-400 font-semibold mb-16'>Find the best medical shops near you to fulfill your medical needs.<br />Scroll to get all the information you need!</div>
              <span className='buttonmod text-lg text-white hover:bg-sky-400 font-semibold px-8 py-4 rounded-lg '>Visit Our Blog</span>
              <div className='mt-40 flex'>
                <div className=''>
                  <div className='fontme head xl:text-5xl text-6xl'>230k+</div>
                  <div className='mt-4 text-slate-400 text-sm font-semibold'>Satisfiedcustomers</div>
                </div>
                <div className='ml-28'>
                  <div className='fontme head xl:text-5xl text-6xl'>97%</div>
                  <div className='mt-4 text-slate-400 text-sm font-semibold'>Accurate results</div>
                </div>
                <div className='ml-28'>
                  <div className='fontme head xl:text-5xl text-6xl'>75+</div>
                  <div className='mt-4 text-slate-400 text-sm font-semibold'>Medical Shops</div>
                </div>
              </div>
            </div>
            <div><img alt='' className='rounded-[300px] mediphoto ml-24 mt-24' src='settt.gif'></img></div>
          </div>
          <Shops />
          <Footer />
        </div>

      </div >
    
  
    </div>

  )
}

export default MedicalShops