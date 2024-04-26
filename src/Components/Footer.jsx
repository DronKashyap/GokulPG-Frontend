import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

function Footer() {
  const openMail = () => {
    window.location.href = 'mailto:ravishekstar@gmail.com';
  };

  const openWhatsApp = () => {
    window.location.href = 'https://wa.me/918340782899';
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex justify-center items-center space-x-4">
        <div className="flex items-center cursor-pointer" onClick={openMail}>
          <AiOutlineMail className="text-2xl" />
          <span className="ml-2">ravishekstar@gmail.com</span>
        </div>
        <div className="flex items-center cursor-pointer" onClick={openWhatsApp}>
          <AiOutlineWhatsApp className="text-2xl" />
          <span className="ml-2">8340782899</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
