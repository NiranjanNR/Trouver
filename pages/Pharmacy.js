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
      <div className='grid grid-row-3 gap-3 w-[210vw] sm:w-full'>
        <div className='page-1 h-[100vh]'>
          <Testnav />
          <div className='xl:flex '>
            <div className='mt-24 mr-36 '><img className='invisible xl:visible absolute mt-[-40px] ml-[400px] w-[250px] h-[250px] opacity-90' src='heartrate_copy.png' />
              <div className='reallymatter tracking-wide xl:text-7xl text-7xl  head'><div className='mb-4 ml-[40px]'>Your health</div></div>
              <div className='reallymatter tracking-wide xl:text-7xl text-7xl head'><div className='ml-[100px] mb-5'>really really</div></div>
              <div className='font-bold reallymatter tracking-wide xl:text-7xl text-7xl head'><div className='ml-[190px] mb-4'>matters a lot</div></div>


              <div className='invisible xl:visible md:visible context cards ml-[100px] mt-[100px] xl:text-[20px] font-none mb-16  '>We are of the sound believe that right to health is vital <br />All the information you need <div className='text-[40px] '>is right here !</div> </div>

            </div>
            <div className='invisible xl:visible'><img alt='' className='rounded-[300px] mediphoto ml-24 mt-20' src='Pharmacist.gif'></img></div>
          </div>



        </div >
        <div className='font-bold text-center px-[50px] py-[50px] context text-black text-4xl'>Medical Shops Near you</div>

        <Shops1 />
        <div className='flex justify-center head mt-20'>
          <div className='fontme text-4xl bg-sky-200/25 backdrop-blur-lg drop-shadow-2xl p-10 rounded-2xl'>
            <div className='mb-12 text-center'>Find These Locations on Maps</div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1glLxP4FuVw7Tb13_yT_e-syqDxDFCww&ehbc=2E312F" width="840" height="480" className='rounded-xl'></iframe>          </div>
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default MedicalShops