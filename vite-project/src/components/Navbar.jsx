import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@mui/joy';



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navItems = [
        { label: 'Home', path: '/home' },
        { label: 'Create Events', path: '/create-events' },
        { label: 'All Events', path: '/All Events' },
    ];
    return (
        <nav className='bg-white flex-wrap p-4 flex justify-between items-center'>
            <div className=" ">
                <Link to="/home">
                    <img src="/assets/images/logo.svg" alt="" className='w-24' />
                </Link>
            </div>
            <div>
                <ul className='hidden md:flex space-x-4'>
                    <li className='flex space-x-20 font-semibold'>
                        <Link to="/home">Home</Link>
                        <Link to="/create-events">Create Events</Link>
                        <Link to="/All Events">All Events</Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center space-x-4'>
                <div className="flex-wrap items-center">
                    <nav className="md:hidden items-center justify-center">
                        <button onClick={toggleMenu}> {isOpen ? <X /> : <Menu />}</button>
                    </nav>
                    {isOpen && (
                        <div className="flex flex-col items-center flex-wrap space-y-4">
                            <ul className="flex flex-col flex-basis space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="text-gray-800 hover:text-blue-500"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/">
                        <Button >Logout</Button>
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>

                </div>

            </div>
        </nav>
    );
}
export default Navbar