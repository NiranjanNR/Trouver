import React from 'react'
import Testnav from '../components/NavBar/Testnav'
import Footer from '../components/Footer/footer'
function Resmap() {
  return (
    <div className='thanku h-full'>
        <Testnav/>
        <h1 className="text-center text-2xl mb-5 ml-5 text font-bold">Mapping The Resources We Need</h1>

        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 gap-2 ">
        <div className='flex items-center'><img alt='' className='rounded-[300px]' src='resmap.gif'></img></div>
    <div className='lg:p-5'>
            <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-20 mb-5'>
               <p className='p-1 text-xl'>● Implementation of the website is done using NextJS framework.</p>
              <p className='p-1 text-xl'>● For designing the website, we will have to use several libraries like tailwindcss.</p>
              <p className='p-1 text-xl'>● The website will have to be hosted on services like Heroku, Netlify, etc.</p>
              <p className='p-1 text-xl'>● Requirement of transportation for collecting information from clinics, hospitals and medical shops.</p>
              </div>
              </div>
              </div>
              <Footer />
    </div>
  )
}

export default Resmap