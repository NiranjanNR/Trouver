import React, { useEffect, useState } from 'react'
import Router from 'next/router'


const NavBar = () => {
    return (
        <div>
            <div className='mb-12 mx-8 md:visible invisible'>
                <div className=' flex justify-center rest pt-6'>
                    <div className='mr-auto set-t text-3xl head logo ml-4 font-bold'>
                        <button className='' onClick={() => { Router.push('/') }}>Trouver</button>
                    </div>
                    <div className=' flex justify-center'>
                        <div className=' font-semibold text-lg '>
                            <button className='hover:text-sky-900/75 px-5'>Problems - Solutions</button>
                            <button className='hover:text-sky-900/75 px-5'>Plan of Action</button>
                            <button className='hover:text-sky-900/75 px-5'>Resource Mapping</button>
                            <button className='hover:text-sky-900/75 px-5'>About Us</button>
                        </div>
                    </div>
                    <button className='text-lg text-white hover:bg-sky-400 setbgbutton font-semibold rounded-lg ml-auto py-3 px-5 sign-up' onClick={() => { Router.push('/Forms') }}>Help us</button>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    )
}

export default NavBar