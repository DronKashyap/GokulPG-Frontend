import React from 'react'
import logo from '../Static/logo.png';
import { useState } from 'react';

function AdminNavbar() {
  return (
      <div className='flex justify-around text-slate-100 font-mono font-bold text-3xl'>
       <img src={logo} className='h-12 rounded-full mr-5'></img>
        <a href="/admin/addproperty" className="block px-4 py-2 text-m text-slate-500 hover:text-white hover:bg-gray-700">Add Property</a>
        <a href="/admin/addblog" className="block px-4 py-2 text-m text-slate-500 hover:text-white hover:bg-gray-700">Add Blogs</a>
        <a href="/admin/addreview" className="block px-4 py-2 text-m text-slate-500 hover:text-white hover:bg-gray-700">Add Reviews</a>
        <a href="/" className="block px-4 py-2 text-m text-slate-500 hover:bg-gray-700 hover:text-white">Back to Homepage</a>
       </div>          
       
  )
}

export default AdminNavbar
