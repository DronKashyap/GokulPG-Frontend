import React from 'react';
import SparklesPreview from '../Components/AceUI';
import AdminNavbar from '../Components/AdminNavbar';

function Admin() {
  
  return (
    <div className='bg-black'>
     <AdminNavbar /> 
   <SparklesPreview />
      <h2 className='text-slate-300 justify-center flex'> Note: Once you go to the homepage, visit gokulpg.com/admin to come back to this page</h2>
      <div className=" left-0 mt-14 w-48 bg-gray-800 border border-gray-700 rounded-md z-10">
             
      </div>
      
    </div>
  );
}

export default Admin;
