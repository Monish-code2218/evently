import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Events = () => {
  const [search, setSearch] = useState('')
  const [events, setEvents] = useState([]);
  console.log(search)


  useEffect(() => {
    axios
      .get("https://evently-1-ivhc.onrender.com/getAll")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);




  return (
    <div className=' bg-gray-100'>

      <h1 className='text-3xl text-center font-semibold py-5  text-gray-800 mb-6'>All Events</h1>
      <form class="max-w-md mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium py-6  sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

          </div>
          <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For Events ..." required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
      <br />

      <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-100'>
        {events.filter((events) => {
          return search.toLowerCase() === '' ? events : events.title.toLowerCase().includes(search)
        }).map((event) => (
          <div className="  group left-5 relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <img src={event.image} alt="Event 1" className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" />
            <div className='flex min-h-[230px] flex-col gap-3 p-5 md:gap-4'>
              <div className="flex gap-2">
                <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">${event.price}</span>
                <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1"></p>
              </div>
              <p className="p-medium-16 p-medium-18 text-grey-500">{event.title}</p>
              <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black" >{event.date}</p>

              <div className="flex-between w-full">
                <p className="p-medium-14 md:p-medium-16 text-grey-600"> | JS Mastery</p>
              </div>
              <Link to={`/eventdeatils/${event._id}`}>
                <button className=" p-medium-16 flex-center rounded-full bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}


export default Events

