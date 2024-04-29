import React from 'react';
import logo from '../Static/logo.png';
import { BackgroundGradientAnimation } from './ui/Gradientbg';

function Banner() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <BackgroundGradientAnimation className="w-fit ">
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <div className="mt-28 lg:w-3/5 md:w-1/2">
          <h1 className="text-xs md:text-6xl line-clamp-3 pb-3 md:pb-5"> Experience Homely Comfort Today!</h1>
          <h3 className="text-xs md:text-2xl line-clamp-5 md:line-clamp-3 "> Discover affordable luxury living with top-notch amenities perfect for professionals and students in Delhi NCR. </h3>
          </div>
          <div>
            <img
              src={logo}
              className=" md:h-64 rounded-full mt-28"
              style={{
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'scale(1.2)',
                },
              }}
              alt="Logo"
            />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}

export default Banner;
