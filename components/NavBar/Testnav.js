import { useState } from "react";
import Router from 'next/router';
export default function Testnav() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="">
            <div className="md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 mx-4 md:block mt-1">
                        <div className='mr-auto set-t text-3xl head logo ml-4 font-bold'>
                            <button className='' onClick={() => { Router.push('/') }}>Trouver</button>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex mt-6">
                            <div className="justify-center md:flex ">
                                <div className="font-semibold text-lg hover:text-sky-900/75 px-5">
                                    <button onClick={() => { Router.push('/Prblmsol') }}>Problems-Solutions</button>
                                </div>
                                <div className="font-semibold text-lg hover:text-sky-900/75 px-5">
                                    <button onClick={() => { Router.push('/PlnAction') }}>Plan of Action</button>
                                </div>
                                <div className="font-semibold text-lg hover:text-sky-900/75 px-5">
                                    <button onClick={() => { Router.push('/Resmap') }}>Resource Mapping</button>
                                </div>
                                <div className="font-semibold text-lg hover:text-sky-900/75 px-5">
                                    <button onClick={() => { Router.push('/Aboutus') }}>About Us</button>
                                </div>
                            </div>
                            <div className="font-semibold text-lg hover:text-sky-900/75 px-5 ml-auto">
                                <button className='text-lg text-white hover:bg-sky-400 setbgbutton font-semibold rounded-lg ml-auto py-3 px-5 sign-up' onClick={() => { Router.push('/Forms') }}>Help us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}