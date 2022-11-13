import React from 'react'
import Footer from './footer'
import Testnav from './Testnav'
function Goal() {
  return (

    <div className='thanku h-[100vh]'>
        <Testnav/>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 gap-2 ">
    <div className='lg:p-20 p-10'>
            <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-20 mb-5'>
              <h1 className="text-2xl mb-5 ml-5 text font-bold">What Does This Project Mean?</h1>
              <h1 className="text-xl ml-5">This project aims to tackle the problem faced by almost all hostelers in Amritapuri that is being unacquainted with the region they stay in. This idea most effectively applies to the medical requirements of these students as they do not know where to go for their medical needs, be it to a clinic, a hospital or a medical shop. This project solves this problem by creating an accessible website for the students or the people at Amritapuri which shows the available clinics, hospitals and medical shops in the area. Along with it the website provides a detailed overview of the medical service (eg: the consulting time and the specialization of a doctor in a clinic or a hospital). This project can thereby help the people in a way by showing them all their necessary details for all their healthcare requirements through this website.</h1>
              </div>
              </div>
              <div>The gif to be placed</div>
              </div>
              <Footer />
    </div>
  )
}

export default Goal