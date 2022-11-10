import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Router from 'next/router'


function SgstClinic(){
  const form = useRef();

  const sendClinicDet = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_95x44md', 'template_c102ogc', form.current, 'mT5cfh8UW7G4pm2Ol')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div class="sm:grid grid-cols-1 divide-x h-screen">
    
  <div className="bg-gray-50 ">
  <nav class="bg-white px-2 sm:px-4 py-2.5  border-b  border-gray-200  text-2xl font-semibold shadow-sm"> Help Us</nav>
    <div className='mt-10'>
    <div className='lg:p-20 p-4'>
      <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-5 mb-5'>
  <h1 className="text-2xl mb-5 ml-5 text font-bold">Suggest a medical facility near you!</h1>
  <h1 className="text-xl text  ml-5">Fill all the details you know</h1>
  <form ref={form} onSubmit={sendClinicDet}>
  <div class="grid grid-cols-2 gap-4 p-5 mt-5">
  <span className="text-2xl font-medium ">
              Your Email: 
            </span>
        <input
          type="email"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Your Email"
          name="Cemail"
        />
  <span className="text-2xl font-medium ">
              Your Contact info: 
            </span>
        <input
          type="tel"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Your Contact info"
          name="Ccontact"
        />
  <span className="text-2xl font-medium ">
              Clinic Name: 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Clinic Name"
          name="Cname"
        />
        <span className="text-2xl font-medium ">
              Doctor Name: 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Doctor Name"
          name="Cdoc"
        />
        <span className="text-2xl font-medium ">
              Location(Google maps pin if possible): 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Location"
          name="Cloc"
        />        
  </div>
  <input className='bg-sky-400 text-slate-200 px-4 py-2 hover:bg-sky-500 rounded-lg' type="submit" value="Send" onClick={()=>{Router.push('/Thanku')}}/>
    </form>
  </div>
</div>
</div>
  </div>
</div>
  )
}

function SgstMshops(){
  const form = useRef();

  const sendMshopDet = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_95x44md', 'template_1esfd3v', form.current, 'mT5cfh8UW7G4pm2Ol')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div class="sm:grid grid-cols-1 divide-x h-screen">
    
  <div className="bg-gray-50 ">
  <nav class="bg-white px-2 sm:px-4 py-2.5  border-b  border-gray-200  text-2xl font-semibold shadow-sm"> Help Us</nav>
    <div className='mt-10'>
    <div className='lg:p-20 p-4'>
      <div className=' rounded-lg shadow-2xl border-4  border border-blue-400 border-opacity-50 hover:border-blue-500 p-5 mb-5'>
  <h1 className="text-2xl mb-5 ml-5 text font-bold">Suggest a medical Shop you know near you!</h1>
  <h1 className="text-xl text  ml-5">Fill all the details you know</h1>
  <form ref={form} onSubmit={sendMshopDet}>
  <div class="grid grid-cols-2 gap-4 p-5 mt-5">
  <span className="text-2xl font-medium ">
              Your Email: 
            </span>
        <input
          type="email"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Your Email"
          name="Memail"
        />
  <span className="text-2xl font-medium ">
              Your Contact info: 
            </span>
        <input
          type="tel"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Your Contact info"
          name="Mcontact"
        />
  <span className="text-2xl font-medium ">
              Medical Shop Name: 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Medical Shop Name"
          name="Mname"
        />
        <span className="text-2xl font-medium ">
              Location(Google maps pin if possible): 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Location"
          name="Mloc"
        />        
  </div>
  <input className='bg-sky-400 text-slate-200 px-4 py-2 hover:bg-sky-500 rounded-lg' type="submit" value="Send" onClick={()=>{Router.push('/Thanku')}}/>
    </form>
  </div>
</div>
</div>
  </div>
</div>
  )
}

function Forms() {

  const [active, setActive] = useState(false)
  const [shwfrm, setShwfrm] = useState(false)

  return (
                       <div>
                         
                              <div className="text-2xl">
                                  Where can you help us at?
                              </div>

                              <div className="flex flex-row gap-8">
                                  <div>
                                      <button className='bg-sky-400 text-slate-200 px-4 py-2 hover:bg-sky-500 rounded-lg'
                                          onClick={()=>{setActive(true),setShwfrm(true)}}>
                                          Know a clinic?
                                      </button>
                                    <div >
                                          {active && shwfrm && <SgstClinic /> }
                                          </div>
                                  </div>

                                  <div>
                                      <button className='bg-sky-400 text-slate-200 px-4 py-2 hover:bg-sky-500 rounded-lg'
                                          onClick={()=>{setActive(false),setShwfrm(true)}}
                                          type="button">
                                        Know a Medical Shop?
                                      </button>
                                      
                                          {!active && shwfrm && <SgstMshops /> }
                                     
                                  </div>
                              </div>
                         
                      </div>
          
      )
}

export default Forms