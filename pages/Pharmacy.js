import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MediShop from '../assets/MediShop.svg'
import Shops from '../components/Shops/Shops'
import Footer from '../components/Footer/footer'
import Shops1 from '../components/MedShop/Shops1'
import Testnav from '../components/NavBar/Testnav'
const MedicalShops = () => {
  return (
    <div>
      <div className='grid grid-row-3 gap-3'>
      <div className='page-1 h-[100vh] w-[210vw] sm:w-full'>
        <Testnav/>
          <div className='xl:flex'>
            <div className='mt-24 mr-36'><img className='invisible xl:visible absolute mt-[-40px] ml-[400px] w-[250px] h-[250px] opacity-90' src='heartrate_copy.png'/>
              <div className='reallymatter tracking-wide xl:text-7xl text-7xl  head'><div className='mb-4 ml-[40px]'>Your health</div></div>
              <div className='reallymatter tracking-wide xl:text-7xl text-7xl head'><div className='ml-[100px] mb-5'>really really</div></div>
              <div className='font-bold reallymatter tracking-wide xl:text-7xl text-7xl head'><div className='ml-[190px] mb-4'>matters a lot</div></div>


              <div className='context cards ml-[100px] mt-[100px] xl:text-[20px] font-none mb-16'>We are of the sound believe that right to health is vital <br/>All the information you need <div className='text-[40px]'>is right here !</div> </div>
        

              <span className='buttonmod text-lg text-white hover:bg-sky-600 font-semibold px-4 py-4 rounded-lg ml-[100px]'>Find Clinics !</span>
            </div>
            <div className='invisible xl:visible'><img alt='' className='rounded-[300px] mediphoto ml-24 mt-20' src='Pharmacist.gif'></img></div>
          </div>

        
        
      </div >
      <div className='font-bold text-center px-[50px] py-[50px] context text-black text-4xl'>Medical Shops Near you</div>

      <Shops1 />
        <Footer />
        </div>
    </div>

  )
}

export default MedicalShops