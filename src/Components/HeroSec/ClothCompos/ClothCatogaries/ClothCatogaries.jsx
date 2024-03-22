import React from 'react'
import { Link } from 'react-router-dom'

function ClothCatogaries() {
    return (
        <section className='py-8 px-8 mt-10 '>
            <div className="h-screen bg-[#f0eeed] rounded-3xl m-auto">
                <h1 className='text-center text-4xl py-4 font-bold'>BROWSE BY DRESS STYLE</h1>
                <div className='h-1 w-32  bg-black m-auto'></div>
                <div className="flex flex-wrap m-5 justify-center">
                    <a href=''>
                        <img src="/catogaries/casual.png" alt="" />
                    </a>
                    <a href=''>
                        <img src="/catogaries/formal.png" alt="" className='ml-5' />
                    </a>
                </div>
                <div className="flex flex-wrap justify-center m-5">
                    <a href=''>
                        <img src="/catogaries/party.png" alt="" />
                    </a>
                    <a href=''>
                        <img src="/catogaries/gym.png" alt="" className='ml-5' />
                    </a>
                </div>
            </div>

        </section>
    )
}

export default ClothCatogaries