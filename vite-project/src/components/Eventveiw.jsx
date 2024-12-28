    import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'





const Eventveiw = () => {

    const { id: _id } = useParams();
    const [eventveiw, setEventveiw] = useState([]);





    const fetchevent = async () => {
        try {
            const response = await axios.get(`https://evently-2u3t.onrender.com/get/${_id}`);
            setEventveiw(response.data);
        } catch (error) {
            console.error('Error fetching :', error);
        }
    };

    useEffect(() => {
        fetchevent();
    }, []);

   
               
                
        
       
     




    const handlePayment = async () => {
        const stripePromise = await loadStripe("pk_test_51QZS4USGmF7arXiVyF4xyZxYyGUCUJljwuKwhyMAd4NqZ40Eo9rRQlm4sFJy0ZwffajGgRMvZelMI8qaPP3C2ds5005Zvn7FHx");
        const response = await fetch(
            "https://evently-2u3t.onrender.com/create-stripe-session",
            {
                method: "POST",
                headers: { "Content-Type": "Application/JSON" },
                body: JSON.stringify([
                    { item: `${eventveiw.event_Title}`, Price: `${eventveiw.Price}` },
                ]),
            }
        )
        const session = await response.json();
        stripePromise.redirectToCheckout({ sessionId: session.id });



    }



    return (
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
                            {eventveiw.event_Title}
                        </h1>
                    </div>
                    <p className="text-black">
                        {eventveiw.event_description}

                    </p>
                    <a href={eventveiw.event_website} className="text-violet-400 font-semibold mb-2">
                        Click Me link to visit the website
                    </a>
                    <h6 className="text-2xl text-black font-semibold">${eventveiw.Price}</h6>
                    <div className="flex flex-row items-center gap-12">
                        <div className="flex flex-row items-center">

                            <button onClick={() => handlePayment()} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
                                Get Ticket
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eventveiw