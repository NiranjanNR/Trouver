import React from 'react'
import Testnav from '../components/NavBar/Testnav'
import Footer from '../components/Footer/footer'
function Aboutus() {
  return (
    <div className='thanku h-[100vh]'>
        <Testnav/>
        <h1 className="text-center text-2xl mb-5 ml-5 text font-bold">The Team Behind This</h1>

        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 gap-2 ">
    <div className='lg:p-20 p-10'>
            <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-20 mb-5'>
            <h1 className="text-center text-xl mb-5 ml-5 text font-bold">SSR22-23 - 141</h1>
            <div class="grid grid-cols-2 gap-2 ">
               <p className='p-2 text-xl'>Advait Bal </p>
               <p className='p-2 text-xl'>- AM.EN.U4CSE20104</p>
               <p className='p-2 text-xl'>N R Niranjan  </p>
               <p className='p-2 text-xl'>- AM.EN.U4CSE20249</p>
               <p className='p-2 text-xl'>R Adithya Kumar</p>
               <p className='p-2 text-xl'>- AM.EN.U4CSE20258</p>
               <p className='p-2 text-xl'>V G Uday Krishnan</p>
               <p className='p-2 text-xl'>- AM.EN.U4CSE20273</p>
               <p className='p-2 text-xl'>Vishaal Sajeev Upot</p>
               <p className='p-2 text-xl'>- AM.EN.U4CSE20276</p>
              </div>
              </div>
              </div>
        <div>The gif to be placed</div>
              </div>
              <Footer />
    </div>
  )
}

export default Aboutus