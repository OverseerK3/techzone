import React from 'react';

function FirstCloths() {
    const FirstCloths = {
        title: "NEW ARRIVALS",
        images: [
            "/Cloths/tshirt1.png",
            "/Cloths/checksshirt1.png",
            "/Cloths/jeans1.png",
            "/Cloths/tshirt2.png",
        ],
        ClothNames: [
            "T-SHIRT WITH TAPE DETAILS",
            "CHECKERED SHIRT",
            "SKINNY FIT JEANS",
            "SLEEVE STRIPED T-SHIRT",
        ],
        prices: [
            "$12",
            "$12",
            "$12",
            "$12",
        ]
    }

    const SecondClothes = {
        title: "TOP SELLING",
        images: [
            "/Cloths/shirt2.png",
            "/Cloths/tshirt3.png",
            "/Cloths/shorts1.png",
            "/Cloths/jeans2.png",
        ],
        ClothNames: [
            "VERTICAL STRIPED SHIRT",
            "COURAGE GRAPHIC T-SHIRT",
            "LOOSE FIT BERMUDA SHORTS",
            "FADED SKINNY JEANS",
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
            {/* ----------------------------------------First Cloth  Section----------------------------------- */}
            <section className='py-8 px-4 mt-10'>
            
                <div className="">
                    <h1 className='text-4xl text-center font-medium'>{FirstCloths.title}</h1>
                </div>
                <div className="w-full h-max  flex justify-evenly flex-wrap">
                    {
                        FirstCloths.images.map((image, index) => (
                            <div className='py-6' key={index}>
                                <img src={image} alt="" />
                                {FirstCloths.ClothNames[index] && <p className='text-lg font-medium'>{FirstCloths.ClothNames[index]}</p>}
                                {FirstCloths.prices[index] && <p className='text-lg font-medium'>{FirstCloths.prices[index]}</p>}
                            </div>
                        ))
                    }
                </div>
                <div className="p-3  flex justify-center">
                    <p className='text-center border border-gray-300 px-9 py-2 text-lg rounded-full'><a href="">View all</a></p>
                </div>
            </section>

            {/* -------------------------------------------  Second Cloth Section -------------------------------------- */}

            <section className='py-8 px-4 mt-10'>
                <div className="">
                    <h1 className='text-4xl text-center font-medium'>{SecondClothes.title}</h1>
                </div>
                <div className="w-full h-max  flex justify-evenly flex-wrap">
                    {
                        SecondClothes.images.map((image, index) => (
                            <div className='py-6' key={index}>
                                <img src={image} alt="" />
                                {SecondClothes.ClothNames[index] && <p className='text-lg font-medium'>{SecondClothes.ClothNames[index]}</p>}
                                {SecondClothes.prices[index] && <p className='text-lg font-medium'>{SecondClothes.prices[index]}</p>}
                            </div>
                        ))
                    }
                </div>
                <div className="p-3  flex justify-center">
                    <p className='text-center border border-gray-300 px-9 py-2 text-lg rounded-full'><a href="">View all</a></p>
                </div>
            </section>


            <section className='py-8 px-8 mt-10 '>
                <div className="h-screen bg-[#f0eeed] rounded-3xl m-auto">
                    <h1 className='text-center text-4xl py-4 font-medium'>BROWSE BY DRESS STYLE</h1>
                    <div className='h-1 w-32  bg-black m-auto'></div>
                    <div className="flex flex-wrap m-5 justify-center">
                        <img src="/catogaries/casual.png" alt="" />
                        <img src="/catogaries/formal.png" alt=""  className='ml-5'/>
                    </div>
                    <div className="flex flex-wrap justify-center m-5">
                        <img src="/catogaries/party.png" alt="" />
                        <img src="/catogaries/gym.png" alt="" className='ml-5' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default FirstCloths;