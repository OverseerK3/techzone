import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import Footer from '../Footer/Footer'
import SecondClothSection from '../HeroSec/ClothCompos/Homepage/SecondClothSection'
import Navbar from '../Header/Navbar'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'


const SecondHero = () => {
    const [num, setnum] = useState(1);
    return (
        <>
            <div className="px-8 py-4 flex w-50 border border-black justify-between my-5">
                <div className="">
                    <div className="">
                        <img src="/Product-page/imagefront.png" alt="" />
                    </div>
                    <div className="">
                        <img className='border border-black rounded-2xl' src="/Product-page/tshirtback.png" alt="" />
                    </div>
                    <div className="">
                        <img className='border border-black rounded-2xl' src="/Product-page/image 6.png" alt="" />
                    </div>
                </div>

                <div className="border border-black">
                    <img src="/Product-page/imagemain.png" alt="" />
                </div>

                <div className="border border-black w-[40vw] px-8">
                    <h1 className='font-extrabold text-4xl'>One Life Graphic T-shirt</h1>

                    <div className="flex mt-3">
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/halfStar.png" alt="" /></span>
                        <p className='ml-5 mt-[2px]'>4.5/5</p>
                    </div>

                    <div className="flex mt-3">
                        <span className='px-2 py-1 text-3xl'>$260</span>
                        <span className='px-2 py-1  text-3xl text-gray-400'>$360</span>
                        <span className='px-2  flex justify-center items-center text-red-700 bg-red-200 rounded-2xl bg- '>-40%</span>
                    </div>

                    <p className=''>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                        breathable fabric. it offers superior comfort and style.</p>

                    <div className="mt-5">
                        <p>Select colors</p>
                        <div className="flex mt-2">
                            <div className="w-7 h-7 bg-red-500 rounded-full"></div>
                            <div className="w-7 h-7 bg-green-500 rounded-full  ml-3"></div>
                            <div className="w-7 h-7 bg-gray-500 rounded-full ml-3"></div>
                        </div>
                    </div>


                    <div className="mt-5">
                        <p>Select size</p>
                        <div className="flex mt-2">
                            <a href=""><p className='px-4 py-1 bg-gray-300 rounded-2xl'>Small</p></a>
                            <a href=""><p className='px-4 py-1 bg-gray-300 rounded-2xl ml-5'>Medium</p></a>
                            <a href=""> <p className='px-4 py-1 bg-gray-300 rounded-2xl ml-5'>Large</p></a>
                            <a href=""><p className='px-4 py-1 bg-gray-300 rounded-2xl ml-5'>X-Large</p></a>
                        </div>
                    </div>

                    <div className="mt-5 flex gap-5">
                        <Counter/>
                        <div className="px-12 py-3 bg-black text-white text-xl text-center rounded-2xl w-full">
                            <Link
                                to="/cart">
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-14 py-8">
                <h1 className=' font-extrabold font-sans lg:text-5xl sm:text-3xl md:text-2xl text-center'>You Might Also Like</h1>
                {/* <div className='h-1.5 w-32 mt-3 bg-black m-auto'></div> */}
                <SecondClothSection />

            </div>

        </>
    )
}

export default SecondHero