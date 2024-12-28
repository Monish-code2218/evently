
import React, { useState, useEffect } from 'react'
import axios from 'axios';



import Toast from '../components/Toast';

const EventForm = ({ onEventAdd }) => {
    const [newEvent, setNewEvent] =
        useState({ title: '', date: '', price: '' });

    const handleInputChange = (e) => {
        setNewEvent(
            {
                ...newEvent,
                [e.target.name]: e.target.value
            }

        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new event
        axios.post('https://evently-pphy.onrender.com/add', newEvent)
            .then(response => {
                onEventAdd(response.data);
                setNewEvent({ title: '', date: '', price: '' });
            })
            .catch(error => console.error(error));
    };
    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className='relative z-0 w-full mb-5 group'>
                <label  >Title:</label>
                <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name="title"
                    value={newEvent.title}
                    onChange={handleInputChange} required />
                <br />
                <label  >Date:</label>
                <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="date"
                    name="date" value={newEvent.date}
                    onChange={handleInputChange} required />
                <br />
                <label>Price:</label>
                <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name="Price" />
                <br />
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-300 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-black" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-100 dark:text-black"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-100 dark:text-black">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
                <br />
                <button className=" p-medium-16 flex-center rounded-full bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600" type="submit">Add Event</button>
            </div>
        </form>
    );
};export default EventForm;
