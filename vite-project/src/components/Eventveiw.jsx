import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




const Eventveiw = () => {
    const { id: _id } = useParams();
    const [eventveiw, setEventveiw] = useState([]);
    const [checkout, setCheckOut] = useState(false);

    const fetchevent = async () => {
        try {
            const response = await axios.get(`https://evently-1-ivhc.onrender.com/get/${_id}`);
            setEventveiw(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchevent();
    }, []);

    const initialOptions = {
        clientId: "ARxs_QNuviLCyPe82j_phiKMfwMQovMQ32orsDooMp7J4iHkZAQSCNQApKGFrUVj9x8Jk5ToZv4H5Nnm",
        currency: "USD",
        intent: "capture",
    };
    
    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch("/my-server/create-paypal-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // use the "body" param to optionally pass additional order information
                // like product skus and quantities
                body: JSON.stringify({
                    cart: [{
                        price: eventveiw.Price,
                        quantity: 1,
                    }, ],
                }),
            })
            .then((response) => response.json())
            .then((order) => order.id);
    };

    const onApprove = (data) => {
        // Order is captured on the server
        return fetch("/my-server/capture-paypal-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID
                })
            })
            .then((response) => response.json());
    };

    return (
        <PayPalScriptProvider options={initialOptions} >
        <div>
            <div className="flex flex-col justify-between lg:flex-row gap-16 bg-inherit lg:items-center bg-gray-100 text-white p-8 rounded-lg">
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img
                        src={eventveiw.image}
                        alt="The cover of Stubborn Attachments"
                        className="w-full h-full aspect-square object-cover rounded-xl transition-transform duration-100 "
                    />
                    <div className="flex flex-row justify-between h-24">

                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                        <span className="text-violet-400 font-semibold mb-2">

                        </span>
                        <h1 className="text-3xl text-black font-bold">
                            {eventveiw.title}
                        </h1>
                    </div>
                    <p className="text-black">
                        {eventveiw.description}

                    </p>
                    <a href={eventveiw.website} className="text-violet-400 font-semibold mb-2">
                        Click Me link to visit the website
                    </a>
                    <h6 className="text-2xl text-black font-semibold">${eventveiw.price}</h6>
                    <div className="flex flex-row items-center gap-12">
                        <div className="flex flex-row items-center">

                            <button
                                type="submit">
                                <PayPalButtons 
                              
                                />
                                
                            </button>
                            
                            



                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </PayPalScriptProvider>
    )
}
export default Eventveiw