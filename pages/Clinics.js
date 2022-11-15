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
      <div className='grid grid-row-3 gap-3'>
        <div className='page-1 h-[100vh]'>
          <Testnav />
          <div className='px-24 ml-5'>
            <div className='xl:flex justify-center'>
              <div className='flex items-center justify-center'>
                <div className='mt-24 xl:mr-36 '>
                  <div className='fontme tracking-wide xl:text-6xl text-6xl head xl:text-left text-center'><div className='mb-10'>Making Your</div><div className='mb-4'> Health a Priority</div></div>
                  <div className='xl:text-left text-center mt-14 text-slate-400 font-semibold mb-16'>Find the most affordable clinics near you to fulfill your medical needs.<br />Scroll to get all the information you need!</div>
                  <div className='flex justify-center xl:justify-start'><button className=' buttonmod text-lg text-white hover:bg-sky-400 font-semibold px-8 py-4 rounded-lg  'onClick={() => { Router.push('/Goal')}}>Goal of Our Project</button></div>
                </div>
              </div>
              <div className='invisible xl:visible'><img alt='' className='rounded-[300px] mediphoto ml-24 mt-24' src='Clinics1.gif'></img></div>
            </div>
          </div>
        </div >

        <Shops />

        <Footer />
      </div>


    </div>

  )
}

export default MedicalShops