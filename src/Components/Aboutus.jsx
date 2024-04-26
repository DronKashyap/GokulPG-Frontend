import React from 'react'
import Servicecard1 from '../Static/Servicecard1.jpg'; 
import Servicecard2 from '../Static/Servicecard2.jpg'; 
import Servicecard3 from '../Static/Servicecard3.jpg'; 
function Aboutus() {
  return (
    <div className='pb-5'>
     <h1 className='text-3xl flex justify-center'> Our Services </h1>
     <div class=" flex flex-col md:flex-row  min-h-screen items-center justify-around">
    <div class="group relative cursor-pointer  mb-5 rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Servicecard2} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-xl font-bold text-white">Luxurious Accomodation Options</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore our handpicked properties, each offering modern amenities and elegant interiors for a comfortable and luxurious stay.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>

    <div class="group relative cursor-pointer mb-5  rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Servicecard3} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-xl font-bold text-white">Delicious On-site Dining</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Savor gourmet meals and delightful culinary experiences with our on-site dining options, curated to satisfy every palate.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
    

    <div class="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Servicecard1} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-xl font-bold text-white">Convenient Paying Guest Services</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Avail our convenient paying guest services for a hassle-free and comfortable living experience.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
   
  </div>

  <div className='p-10 m-5  flex justify-center'> <h1 className='text-3xl'>Amazing Features</h1></div>
  <h1 className='text-3xl flex justify-center'> About Us: </h1>
  <h3 className='text-xl flex justify-center pt-10 pl-10 pr-10'> Gokul PG is a leading provider of hotel and paying guest services located in Noida, Uttar Pradesh, India. With a commitment to excellence and customer satisfaction, we strive to offer comfortable and convenient accommodation options for our clients.</h3>
<h3 className='text-xl flex justify-center pl-10 pr-10'> Our team is dedicated to providing top-notch hospitality services, ensuring that every guest has a pleasant and memorable stay. Whether you are traveling for business or leisure, Gokul PG is your ideal choice for a comfortable and enjoyable experience.</h3>

</div>
  )
}

export default Aboutus