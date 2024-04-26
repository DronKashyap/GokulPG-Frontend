import React from 'react'
import logo from '../Static/logo.png';
import { useState } from 'react';

function Navbar() {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  return (
    <div className=' h-16  md:text-xl text-xs flex justify-between p-2'>
      <div className='flex justify-around'>
       <img src={logo} className='h-12 rounded-full mr-5'></img>
       <a href="/" className='p-3 hover:bg-blue-500  hover:rounded-xl'>Home</a>
      <a href="/Blog" className='p-3  hover:bg-blue-500 hover:rounded-xl'>Blog</a>
      <a href="/properties" className='p-3  hover:bg-blue-500 hover:rounded-xl'>Properties</a>
  
       </div>      
       <div className='flex'> 
       <button className="flex pt-2.5 bg-blue-200 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" onClick={toggleDropdown1}>
                    Welcome!
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                      </svg>
                      </button>
                      {dropdownOpen1 && (
                <div className="absolute right-0 mt-14 w-48 bg-gray-800 border border-gray-700 rounded-md z-10">
                  <a href="/Signup" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Signup</a>
                  <a href="/Signin" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Signin</a>
                </div>
              )}
       </div>
    </div>
  )
}

export default Navbar
