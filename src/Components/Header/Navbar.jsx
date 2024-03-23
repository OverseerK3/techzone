import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-black py-3 px-16'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center justify-center md:justify-start">
                    <h1 className='font-semibold text-3xl text-white'>Techzone</h1>
                </div>

                <div className="md:flex hidden">
                    <ul className='flex text-white text-lg '>
                        <li className='ml-6'>
                            <NavLink
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='ml-6'>
                            <NavLink
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className='ml-6'>
                            <NavLink
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className='ml-6'>
                            <NavLink
                                to="/signin"
                            >
                                Sign In
                            </NavLink>
                        </li>
                        <li className='ml-6'>
                            <NavLink
                                to="/brands"
                            >
                                Brands
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex w-full md:w-auto mt-4 md:mt-0">
                    <input type="text" className='flex-1 bg-white text-black outline-none py-2 px-4 rounded-l-lg md:rounded md:w-80 lg:w-96' placeholder='What are you looking?' />
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-r-lg md:rounded">Search</button>
                </div>

                <div className="flex gap-4">
                    <NavLink to="cart">
                        <button><ShoppingCart style={{ color: "white" }} /></button>
                    </NavLink>
                    <NavLink to="cart">
                        <button><User style={{ color: "white" }} /></button>
                    </NavLink>
                </div>
            </div >
        </nav >
    );
}

export default Navbar;
