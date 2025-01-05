import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className=" bg-slate-100 py-5 md:py-10 grid grid-cols-1 sm:grid-cols-2 gap-0 flex-col justify-between lg:flex-row  lg:items-center   p-8 rounded-lg ">
      <div className="relative">
        <div className="container mx-auto">
          <h1 className=" text-7xl font-bold mb-4 flex   py-7 sm:justify-start  sm:mt-0">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
          <p className="font-bold text-black">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
          <div class="flex flex-col sm:flex-row gap-4 mt-6 left-10">
            <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to="All Events">Explore now</Link>
            </button>
          </div>
          <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
            <p class="  text-5xl font-bold mb-4 flex mt-4 sm:justify-start sm:mt-0"></p>
            <div >
            </div>
          </section>
        </div>
      </div>
    </section>


  )
}

export default Hero