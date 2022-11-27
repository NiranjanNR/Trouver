import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MediShop from '../assets/MediShop.svg'
import Shops from '../components/Shops/Shops'
import Footer from '../components/Footer/footer'
import Testnav from '../components/NavBar/Testnav'
import Router from 'next/router';


const MedicalShops = () => {

  return (
    <div>
      <div className='grid grid-row-3 gap-3 w-[210vw] sm:w-full'>
        <div className='page-1 h-[100vh]'>
          <Testnav />
          <div className='px-24 ml-5'>
            <div className='xl:flex justify-center'>
              <div className='flex items-center justify-center'>
                <div className='mt-32 md:mt-24 xl:mr-36 '>
                  <div className='fontme tracking-wide xl:text-6xl text-6xl head xl:text-left text-center'><div className='md:mb-10'>Making Your</div><div className='md:mb-4'> Health a Priority</div></div>
                  <div className='xl:text-left invisible md:visible text-center mt-14 text-slate-400 font-semibold mb-16'>Find the most affordable clinics near you to fulfill your medical needs.<br />Scroll to get all the information you need!</div>
                  <div className='flex justify-center xl:justify-start invisible md:visible'><button className=' buttonmod text-lg text-white hover:bg-sky-400 font-semibold px-8 py-4 rounded-lg  ' onClick={() => { Router.push('/Goal') }}>Goal of Our Project</button></div>
                </div>
              </div>
              <div className='invisible xl:visible'><img alt='' className='rounded-[300px] mediphoto ml-24 mt-24' src='Clinics1.gif'></img></div>
            </div>
          </div>
        </div >

        <Shops />
        <div className='flex justify-center head xl:mt-0 mt-20 '>
          <div className='fontme text-4xl bg-sky-200/25 backdrop-blur-lg drop-shadow-2xl p-10 rounded-2xl'>
            <div className='mb-12 text-center'>Find These Locations on Maps</div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Q9KEfY1aOD36SqtUvcT35remeeT5Lvw&ehbc=2E312F" width="840" height="480" className='rounded-xl'></iframe>
          </div>
        </div>
        <Footer />
      </div>


    </div>

  )
}

export default MedicalShops