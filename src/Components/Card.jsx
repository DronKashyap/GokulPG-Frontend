import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/Gradientbgcard";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function Card() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('https://gokul-pg-backend.vercel.app/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    }

    fetchProperties();
  }, []);

  return (
    <div className="flex flex-row overflow-x-scroll"  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {properties.map((property) => (
        <div key={property.PropertyNumber} className="flex-none m-4">
          <BackgroundGradient className="rounded-[22px] md:w-[400px]  w-[250px] overflow-hidden bg-white dark:bg-zinc-900">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={true}
              infiniteLoop={true}
            >
              {property.ImageUrls.slice(0, 1).map((imageUrl, index) => (
                <div key={index}>
                  <img
                    src={imageUrl}
                    alt={property.PgName}
                    className="object-cover w-[400px] h-[400px]"
                  />
                </div>
              ))}
            </Carousel>

            <div className="text-sm text-neutral-600 dark:text-neutral-400 p-4">
             <p className='font-bold'> {property.PgName}</p>
              <p>Location: {property.PgLocation}</p>
              <p>Private Room Price: Rs. {property.PrivateRoomPrice}</p>
              <p>Double Seater Room Price: Rs. {property.DoubleSeaterRoomPrice}</p>
              <p>Triple Seater Room Price: Rs. {property.TripleSeaterRoomPrice}</p>
            </div>

            <Link key={property.PropertyNumber} to={`/property/${property._id}`}>
              <button className="rounded-full pl-4  ml-40 justify-center mb-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold hover:bg-zinc-800 dark:bg-zinc-800">
                View
              </button>
            </Link>
          </BackgroundGradient>
        </div>
      ))}
    </div>
  );
}
