import React from 'react'

function Brands() {
    return (
        <div className="w-full bg-black h-full px-8 py-8 flex-wrap lg:flex justify-center gap-3 items-center">
            <img className='mt-3 w-[95px] lg:w-auto  mx-auto ' src="/Brands/GUCCI.png" alt="" />
            <img className='mt-4 w-[95px] lg:w-auto mx-auto ' src="/Brands/CALVIN-KLEIN.png" alt="" />
            <img className='mt-4 w-[95px] lg:w-auto mx-auto ' src="/Brands/PRADA.png" alt="" />
            <img className='mt-4 w-[95px] lg:w-auto mx-auto ' src="/Brands/VERSACE.png" alt="" />
            <img className='mt-4 w-[95px] lg:w-auto h-[30px] lg:h-full mx-auto ' src="/Brands/ZARA.png" alt="" />
        </div>
    )
}

export default Brands