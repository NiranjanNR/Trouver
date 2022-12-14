import React from 'react'
import Testnav from '../components/NavBar/Testnav'
import Footer from '../components/Footer/footer'
function Prblmsol() {
  return (
    <div className='thanku h-full'>
    <Testnav/>
    <h1 className="text-center text-2xl mb-5 ml-5 text font-bold">Mapping The Resources We Need</h1>

    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 gap-2 ">
    <div className='flex items-center'><img alt='' className='rounded-[300px]' src='prblmsol.gif'></img></div>
<div className='lg:p-5'>
        <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-20 mb-5'>
        <p className='p-2 text-l'>● Lack of information about healthcare facilities (clinics, pharmacies and hospitals) for the people living in and around Amritapuri.</p>
              <p className='p-2 text-l'>● Google searches won’t reveal the necessary data (phone number, doctor’s specialization, etc.) on the lesser documented medical infrastructures. In addition to this, they also lack certain important information which could be highly beneficial for the public.</p>
              <p className='p-2 text-l'>● For Example: Most clinic searches on google would not specify the specializations of their doctors, Nor the proper timings (it’s either unavailable or the timings can be inaccurate).</p>
              <p className='p-2 text-l'>● It would also be beneficial to know the details on how clinics operate such as if they operate on a token basis or a call registration format.  </p>
              <p className='p-2 text-l'>● The solution to these issues is to research and create a well detailed database on all the required data that could be beneficial for the public and display them on a platform accessible to all.  </p>
          </div>
          </div>
          </div>
          <Footer />
</div>


  
  )
}

export default Prblmsol