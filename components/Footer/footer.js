import React from 'react';
import Router from 'next/router';
function Footer() {
  return (
    <div className='p-10 xl:mt-10 '>
        <footer>
            <div className="grid grid-cols-3 gap-2">
                <div className='flex'>
                <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"></path>
						</svg>
            <svg className="svg-icon " viewBox="0 0 20 20">
							<path fill="none" d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"></path>
						</svg>
            <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M3.015,4.779h1.164V3.615H3.015V4.779z M18.73,1.869H1.269c-0.322,0-0.582,0.26-0.582,0.582v15.133
								c0,0.322,0.26,0.582,0.582,0.582H18.73c0.321,0,0.582-0.26,0.582-0.582V2.451C19.312,2.129,19.052,1.869,18.73,1.869z
								 M18.148,16.42c0,0.322-0.261,0.582-0.582,0.582H2.433c-0.322,0-0.582-0.26-0.582-0.582V6.525h16.297V16.42z M18.148,5.361H1.851
								V3.615c0-0.322,0.26-0.582,0.582-0.582h15.133c0.321,0,0.582,0.26,0.582,0.582V5.361z M7.671,4.779h1.165V3.615H7.671V4.779z
								 M5.344,4.779h1.164V3.615H5.344V4.779z"></path>
						</svg>
                </div>
                <div>
                    <h5 className='text-xl font-bold mb-2.5'>Our Contact</h5>
                    <p>Trouver, Amrita School of Computing, Amritapuri, Kollam, Kerala 690525</p>
                    <p>Help: 9072868558</p>
                    <p>Email: findtrouver@gmail.com</p>
                </div>
                <div>
                <h5 className="font-bold mb-2.5 text-xl">Quick Links</h5>

<ul className="list-none mb-0">
  <li>
    <a href="#!" className="text-gray-800" onClick={() => { Router.push('/Prblmsol')}}>Problems - Solutions</a>
  </li>
  <li>
    <a href="#!" className="text-gray-800" onClick={() => { Router.push('/PlnAction')}}>Plan of Action</a>
  </li>
  <li>
    <a href="#!" className="text-gray-800" onClick={() => { Router.push('/Resmap')}}>Resource Mapping</a>
  </li>
  <li>
    <a href="#!" className="text-gray-800" onClick={() => { Router.push('/Aboutus')}}>About Us</a>
  </li>
</ul>
                </div>
                </div>
            
        </footer>
    </div>
  )
}

export default Footer