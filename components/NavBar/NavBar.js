import React from 'react'

const NavBar = () => {
    return (
        <div className='mb-12 mx-8'>
            <div className=' flex justify-center rest pt-6'>
                <div className='mr-auto set-t text-3xl head logo ml-4 font-bold'>
                    <p className=''>Trouver</p>
                </div>
                <div className=' flex justify-center'>
                    <div className=' font-semibold text-lg '>
                        <button className='hover:text-sky-900/75 px-5'>About us</button>
                        <button className='hover:text-sky-900/75 px-5'>Services</button>
                        <button className='hover:text-sky-900/75 px-5'>Support</button>
                        <button className='hover:text-sky-900/75 px-5'>Blog</button>
                    </div>
                </div>
                <button className='text-lg text-white hover:bg-sky-400 setbgbutton font-semibold rounded-lg ml-auto py-3 px-5 sign-up' >Contact us</button>
            </div>
        </div>
    )
}

export default NavBar