import React from 'react';

function Navbar() {
    return (
        // gradient-to-l from-blue-500 to-purple-600
        <nav className='bg-black py-3 px-16'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center justify-center md:justify-start">
                    <h1 className='font-semibold text-3xl text-white'>Techzone</h1>
                </div>

                <div className=" md:flex hidden ">
                    <ul className='flex text-white text-lg '>
                            <li className='ml-6'><a href="#">Home</a></li>
                            <li className='ml-6'><a href="#">Contact</a></li>
                            <li className='ml-6'><a href="#">About</a></li>
                            <li className='ml-6'><a href="#">Sign In</a></li>
                            <li className='ml-6'><a href="#">Brands</a></li>
                        
                    </ul>
                </div>

                <div className="flex w-full md:w-auto mt-4 md:mt-0">
                    <input type="text" className='flex-1 bg-white text-black outline-none py-2 px-4 rounded-l-lg md:rounded md:w-80 lg:w-96' placeholder='What are you looking?' />
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-r-lg md:rounded">Search</button>
                    {/* bg-purple-700 */}
                </div>

                <div className="flex ">
                    <img src="/Logos/Cart.png" alt="" className='mr-5'/>
                    <img src="/Logos/user.png" alt="" className='mr-5'/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
