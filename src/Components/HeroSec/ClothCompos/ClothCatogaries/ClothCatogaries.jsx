import React from 'react'
import { Link } from 'react-router-dom'

function ClothCatogaries() {
  const categories = [
    { image: "/catogaries/casual.png", title: "Casual", link: "/casual" },
    { image: "/catogaries/formal.png", title: "Formal", link: "/formal" },
    { image: "/catogaries/party.png", title: "Party Wear", link: "/party" },
    { image: "/catogaries/gym.png", title: "Gym & Sports", link: "/gym" },
  ];

  return (
    <section className='py-8 px-8 mt-10 '>
      <div className="bg-[#f0eeed] rounded-3xl p-5">
        <h1 className='text-center text-4xl py-4 font-bold'>BROWSE BY DRESS STYLE</h1>
        <div className="flex flex-wrap lg:justify-around justify-center my-10">
          {categories.map((category, index) => (
            <Link to={category.link} key={category.title} className="text-decoration-none">
              <div className="p-5 m-5 cursor-pointer shadow-lg bg-white rounded-lg">
                <img src={category.image} alt={category.title} className="h-40 w-full" />
                <p className="text-center text-xl font-semi-bold my-3">{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClothCatogaries