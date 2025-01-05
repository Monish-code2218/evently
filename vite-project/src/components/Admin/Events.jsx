import { Button } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const Events = () => {
    const { id: _id } = useParams()
    const [data, setData] = useState([])



    useEffect(() => {
        axios.get('http://localhost:1337/getAll')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    const handleDelete = (id) => {
        axios.delete(`https://evently-1-ivhc.onrender.com/delete/${id}`)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleDelete()
    }, [])

    const handleEdit = (id) => {
        axios.put(`https://evently-1-ivhc.onrender.com/update/${id}`)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleEdit()
    }, [])



    return (
        <div className='bg-gray-100'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Events name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((event) => (
                            <tr key={event._id} className="bg-white border-b dark:bg-gray-100 ">

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    {event.title}
                                </th>
                                <td className="px-6 py-4 dark:text-black">
                                    {event.date}
                                </td>
                                <td className="px-6 py-4 dark:text-black">
                                    ${event.price}
                                </td>
                                <td className="px-6 py-4 space-x-3">
                                    <Button onClick={() => handleDelete(event._id)}>Delete</Button>
                                    <Button onClick={() => handleEdit(event._id)}>edit</Button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Events