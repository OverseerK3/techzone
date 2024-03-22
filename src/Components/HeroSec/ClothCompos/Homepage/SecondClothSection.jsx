import React from 'react'

function SecondClothSection() {
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
        <section className='py-6 mt-2 bg-white'>
            <div className=" bg-white">
                <h1 className='text-2xl lg:text-5xl text-center font-bold'>{SecondClothes.title}</h1>
            </div>
            <div className="w-full h-max  flex justify-evenly flex-wrap bg-white">
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
            <div className="p-3  flex justify-center bg-white">
                <p className='text-center border border-gray-300 px-9 py-2 text-lg rounded-full'><a href="">View all</a></p>
            </div>
        </section>
    )
}

export default SecondClothSection