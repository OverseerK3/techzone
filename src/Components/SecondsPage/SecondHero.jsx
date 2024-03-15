import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function SecondHero() {
    return (
        <>
            <Navbar />
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

                    <div className="flex">
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/Star.png" alt="" /></span>
                        <span><img src="/Product-page/halfStar.png" alt="" /></span>
                        <p className='ml-5 mt-[2px]'>4.5/5</p>
                    </div>

                    <div className="flex">
                        <span className='px-3 py-1 text-3xl'>$260</span>
                        <span className='px-3 py-1  text-3xl text-gray-400'>$360</span>
                        <span className='px-3  flex justify-center items-center text-red-700 bg-red-200 rounded-2xl bg- '>-40%</span>
                    </div>

                    <p className=''>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                        breathable fabric. it offers superior comfort and style.</p>

                    <div className="mt-5">
                        <p>Select colors</p>
                        <div className="flex">
                            <div className="w-7 h-7 bg-red-500 rounded-full"></div>
                            <div className="w-7 h-7 bg-green-500 rounded-full  ml-3"></div>
                            <div className="w-7 h-7 bg-gray-500 rounded-full ml-3"></div>
                        </div>
                    </div>


                    <div className="mt-5">
                        <p>Select size</p>
                        <div className="flex">
                            <a href=""><p className='px-4 py-1 bg-gray-300 rounded-2xl'>Small</p></a>
                            <a href=""><p className='px-4 py-1 bg-gray-300 rounded-2xl ml-5'>Medium</p></a>
                            <a href=""> <p className='px-4 py-1 bg-gray-300 rounded-2xl ml-5'>Large</p></a>
                            <a href=""><p className='px-4 py-1 bg-gray-300 rounded-2xl ml-5'>XL</p></a>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="flex">
                            <a href=""><span  className='text-3xl'>+</span></a>
                            <p className='text-4xl'>2</p>
                            
                            <a href=""><span  className='text-3xl'>-</span></a>
                        </div>
                        <div className="px-12 py-3 bg-black text-white text-xl text-center rounded-2xl">
                            <a href=""><p>Add To cart</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SecondHero