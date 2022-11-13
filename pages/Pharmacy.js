import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MediShop from '../assets/MediShop.svg'
import Shops from '../components/Shops/Shops'
import Footer from './footer'
import Shops1 from '../components/MedShop/Shops1'
import Testnav from './Testnav'
const MedicalShops = () => {
  return (
    <div>
      
      <div className='page-1 h-[100vh]'>
       
        <Testnav />
        <div className=''>
          <div className='flex'>
            <div className='mt-24 mr-36 '><img className='absolute mt-[-40px] ml-[400px] w-[250px] h-[250px] opacity-90' src='heartrate_copy.png'/>
              <div className='reallymatter tracking-wide sm:text-4xl xs:text-3xl md:text-6xl xl:text-7xl text-7xl head'><div className=' mb-4 ml-[40px]'>Your health</div></div>
              <div className='reallymatter tracking-wide sm:text-4xl md:text-6xl xl:text-7xl text-7xl head'><div className='ml-[100px] mb-5'>really really</div></div>
              <div className='font-bold reallymatter tracking-wide sm:text-4xl md:text-6xl xl:text-7xl text-7xl head'><div className='ml-[210px] mb-4'>matters a lot</div></div>


              <div className='context cards ml-[100px] mt-[100px] xl:text-[20px] font-none mb-16'>We are of the sound believe that right to health is vital <br/>All the information you need <div className='text-[40px]'>is right here !</div> </div>

              {/* <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-bg-sky-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-4 text-center ml-[100px] mt-[-200px]">Find Clinics !</button> */}

        

              <span className='buttonmod text-lg text-white hover:bg-sky-600 font-semibold px-4 py-4 rounded-lg ml-[100px]'>Find Clinics !</span>
            </div>
            <div><img alt='' className='rounded-[300px] mediphoto ml-24 mt-20' src='Pharmacist.gif'></img></div>
          </div>

          
        </div>
        
      </div >
      <div className='font-bold text-center px-[50px] py-[50px] context text-black text-4xl'>Medical Shops Near you</div>

      <Shops1 />
        <Footer />
  
    </div>

  )
}

export default MedicalShops