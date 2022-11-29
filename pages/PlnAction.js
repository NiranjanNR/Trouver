import React from 'react'
import Testnav from '../components/NavBar/Testnav'
import Footer from '../components/Footer/footer'
function Prblmsol() {
  return (
    <div className='thanku h-full'>
        <Testnav/>
        <h1 className="text-center text-2xl mb-5 ml-5 text font-bold">What&apos;s Our Action Plan</h1>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 gap-2 ">
    <div className='lg:p-5'>
            <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-20 mb-5'>
               <p className='p-2 text-l'>● Research about nearby clinics and classify information based on their specialties, medicines, and medically relevant services that might be a help to a user.</p>
              <p className='p-2 text-l'>● Convert the new information into relevant data in a format that can be stored in a database.</p>
              <p className='p-2 text-l'>● Test the website for possible bugs and fix them.</p>
              <p className='p-2 text-l'>● The solution to these issues is to research and create a well detailed database on all the required data that could be beneficial for the public and display them on a platform accessible to all.  </p>
              <p className='p-2 text-l'>● Host the website on a proper hosting platform like Netlify, heroku, etc.</p>
              </div>
              </div>
              <div className='flex items-center'><img alt='' className='rounded-[300px]' src='action-plan.gif'></img></div>
              </div>
              <Footer />
    </div>
  )
}

export default Prblmsol