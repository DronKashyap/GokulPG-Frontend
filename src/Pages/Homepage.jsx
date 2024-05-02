import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import {Card} from '../Components/Card'
import {Testimonials} from '../Components/Testimonials'
import Map from '../Components/Map'
import Aboutus from '../Components/Aboutus'
import ImageSlider from '../Components/ImageSlider'
import { Link } from "react-router-dom";
import whatsapplogo from '../Static/whatsapplogo.svg';

function Homepage() {
  const openWhatsApp = () => {
    window.location.href = 'https://wa.me/918340782899';
  };

  return (
    <div className='h-full bg-gradient-to-r from-blue-900 to-purple-400 text-slate-200 '>
       <Navbar  />
      <Banner />
      <ImageSlider />
        <button className="p-[3px] fixed bottom-0 right-0 z-10 m-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <Link to='/book'>
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Book Now!
          </div>
          </Link>
        </button>
        <div className="relative z-10" onClick={openWhatsApp}>
         <img src={whatsapplogo}  className="h-10 fixed bottom-2 left-2" alt="WhatsApp" />
        </div>
      <Card />
      <Map />
      <Aboutus />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Homepage
