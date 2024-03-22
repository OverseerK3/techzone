import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Delete, Trash2 } from 'lucide-react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

function Cart() {
    const cartItems = [
        {
            id: "",
            imageUrl: "/CartPhotos/tshirt1.png",
            name: "Gradient Graphic T-shirt",
            size: "Large",
            price: 25.00
        },
        {
            id: "",
            imageUrl: "/CartPhotos/shirt1.png",
            name: "CHECKERED SHIRT",
            size: "X-Large",
            price: 39.99
        },
        {
            id: "",
            imageUrl: "/CartPhotos/pent1.png",
            name: "SKINNY FIT JEANS",
            size: "Small",
            price: 69.99
        }
    ];

    const [price, setprice] = useState(cartItems[0].price);
    const [del, setdel] = useState(10);

    return (
        <>
            <div className="py-4 px-4 flex justify-center items-center">
                <div className="">
                    <div className="">
                        <h1 className='text-2xl mt-4 lg:text-4xl font-bold text-center'>YOUR CART</h1>
                    </div>

                    <div className="flex gap-7 mt-4 flex-wrap">
                        <div className=" border border-gray-400 inline-block mx-auto p-2 rounded-xl">
                            <div className="w-[350px] lg:w-[600px]">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex">
                                        <div className="image">
                                            <img src={item.imageUrl} alt={item.name} />
                                        </div>
                                        <div className="w-full">
                                            <div className="flex items-center justify-between w-full">
                                                <p className='text-lg'>{item.name}</p>
                                                <Trash2 style={{ color: "red" }} />
                                            </div>
                                            <p className='text-lg'>Size : {item.size}</p>
                                            <div className="flex">
                                                <p> <span className='font-semibold text-lg'>{item.price}</span></p>
                                                {/* <Counter /> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                        <div className=" border border-gray-400 inline-block p-2 rounded-xl w-[350px] lg:w-[500px] mx-auto">
                            <div className="">
                                <p className='font-semibold text-2xl'>Order Summary</p>
                                <p className='mt-3 text-xl'>SubTotal : <span className='font-semibold'>{price}</span></p>
                                <p className='mt-3 text-xl'>Delivery Fees : <span className='font-semibold'>{price}</span> </p>
                                <div className="w-full mt-3 bg-gray-300 h-1"></div>
                                <p className='mt-3 text-xl'>Total : <span className='font-semibold'>$50.00</span></p>
                            </div>

                            <Link to="/payment">
                                <div className=" flex m-5">
                                    <div className="px-12 py-3 bg-black text-white text-xl text-center rounded-2xl w-full">
                                        Go to Checkout
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-3">
                <img src="/black.png" alt="" />
            </div>
        </>
    );
}

export default Cart;
