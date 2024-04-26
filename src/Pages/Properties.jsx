
import Navbar from '../Components/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { AuroraBackground } from "../Components/ui/Aurorabg";
import { BackgroundGradient } from "../Components/ui/Gradientbgcard";
import { IconAppWindow } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://gokul-pg-backend.vercel.app/properties');
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Explore Our Properties
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Find your perfect space among our premium properties.
        </div>
        <Link to='/book'>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Book a Call Now!
        </button>
        </Link>
      </motion.div>
    </AuroraBackground>
    <div className='flex justify-center flex-wrap'>
        {properties.map((property) => (
          
            <div key={property.PropertyNumber} className='m-4'>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4  sm:p-10 bg-white dark:bg-zinc-900">
                <Carousel showArrows={true} infiniteLoop={true}>
                  {property.ImageUrls.map((imageUrl, index) => (
                    <div key={index}>
                      <img src={imageUrl} alt={property.PgName} className='object-cover'/>
                    </div>
                  ))}
                </Carousel>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        <p>Location: {property.PgLocation}</p>
            <p>Private Room Price: Rs. {property.PrivateRoomPrice}</p>
            <p>Double Seater Room Price: Rs. {property.DoubleSeaterRoomPrice}</p>
            <p>Triple Seater Room Price: Rs. {property.TripleSeaterRoomPrice}</p>
        </p>
        <Link key={property.PropertyNumber} to={`/property/${property._id}`}>
        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold hover:bg-zinc-800 dark:bg-zinc-800">
           View 
        </button>
        </Link>
      </BackgroundGradient>
      </div>
      
       ))}
      </div>
    </div>
  );
}

export default Properties;
