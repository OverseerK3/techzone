import { Link } from 'react-router-dom'
import React from 'react'

function FirstClothSection() {
    const FirstCloths = {

        images: [
            "/Cloths/tshirt1.png",
            "/Electronics/watch.png",
            "/Cloths/jeans1.png",
            "/Electronics/iphone.png",
        ],
        ClothNames: [
            "T-SHIRT WITH TAPE DETAILS",
            "CHECKERED SHIRT",
            "SKINNY FIT JEANS",
            "APPLE IPHONE 18 PRO MAX",
        ],
        prices: [
            "$12",
            "$12",
            "$12",
            "$12",
        ]
    }

    return (
        <>
            <section className='mt-5 py-6 bg-white'>
                <div className=" bg-white py-3">
                    <h1 className='text-2xl lg:text-5xl text-center font-bold'>NEW ARRIVALS</h1>
                </div>

                <div className="w-full h-max flex justify-evenly flex-wrap bg-white">
                    {
                        FirstCloths.images.map((image, index) => (
                            <Link to='/tshirt1'>
                                <div className='py-2 mt-2 ' key={index}>
                                    <img src={image} alt="" />
                                    {FirstCloths.ClothNames[index] && <p className='text-lg font-semibold my3'>{FirstCloths.ClothNames[index]}</p>}
                                    <div className="flex">
                                        <span><img src="/Product-page/Star.png" alt="" /></span>
                                        <span><img src="/Product-page/Star.png" alt="" /></span>
                                        <span><img src="/Product-page/Star.png" alt="" /></span>
                                        <span><img src="/Product-page/Star.png" alt="" /></span>
                                        <span><img src="/Product-page/halfStar.png" alt="" /></span>
                                        <p className='ml-5 mt-[2px]'>4.5/5</p>
                                    </div>
                                    {FirstCloths.prices[index] && <p className='text-lg font-semibold'>{FirstCloths.prices[index]}</p>}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="p-3  flex justify-center bg-white">
                    <a href=""><p className='text-center border border-gray-300 px-9 py-2 text-lg rounded-full'>View all</p></a>
                </div>
            </section>
        </>
    )
}

export default FirstClothSection