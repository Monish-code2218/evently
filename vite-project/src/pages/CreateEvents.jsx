
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { use } from 'react';
import { useParams } from 'react-router-dom';





const EventForm = () => {
    const { id: _id } = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [Website, setWebsite] = useState('');
    const [image, setImage] = useState('')
   





    const handleSubmit = () => {
        // console.warn(title, description, price, date, Website, image)
        axios.post('https://evently-1-ivhc.onrender.com/add', {
            _id : _id,
            title : title,
            description : description,
            price : price,
            date : date,
            Website : Website,
            image : image,
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        handleSubmit()
    }, [])




    return (
        < div className='bg-gray-100'>
            <form className="max-w-md mx-auto" >
                <h1 className='  p-40 py-3 text-xl  font-bold justify-between items-center'>Create Events</h1>
                <div className='relative z-0 w-full mb-5 group'>
                    <label>Id:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name="id"
                        onChange={(e) => _id(e.target.value)}
                        required />
                    <label  >Title:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name="title"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        required />
                    <br />
                    <label  >Date:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="date"
                        name="date"
                        value={date} onChange={(e) => setDate(e.target.value)}
                        required />
                    <br />
                    <label>description:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name=""
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <label>Price:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name="Price"
                        value={price} onChange={(e) => setPrice(e.target.value)} />
                    <br />
                    <label>Website:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name=""
                        value={Website} onChange={(e) => setWebsite(e.target.value)} />
                    <br />
                    <label>Image:</label>
                    <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" name=""
                        value={image} onChange={(e) => setImage(e.target.value)} />
                    <br />
                    <br />
                    <button onClick={handleSubmit} className=" p-medium-16 flex-center rounded-full bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600" type="submit">Add Event</button>
                </div>
            </form>
        </div>
    );
}; export default EventForm;