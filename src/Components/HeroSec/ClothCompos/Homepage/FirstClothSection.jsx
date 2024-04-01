import React from 'react';
// import styles from './FirstClothSection.module.css';
import ProductCard from './ProductCard';

const firstClothsData = {
  id: 1,
  images: [
    "/Cloths/tshirt1.png",
    "/Electronics/watch.png",
    "/Cloths/jeans1.png",
    "/Electronics/iphone.png",
  ],
  ClothNames: [
    "T-SHIRT WITH TAPE DETAILS",
    "BOAT SMART WATCH",
    "SKINNY FIT JEANS",
    "APPLE IPHONE 18 PRO MAX",
  ],
  prices: [
    "$12.00",
    "$12.00",
    "$12.00",
    "$1099.00",
  ],
  ratings: Array(4).fill(4.5),
  numReviews: Array(4).fill(1000),
};

const FirstClothsItems = firstClothsData.images.map((__, index) => {
  const { id, ClothNames, images, prices, ratings, numReviews } = firstClothsData;

  return (
    <>
    <ProductCard
      key={id}
      id={index}
      name={ClothNames[index]}
      image={images[index]}
      price={prices[index]}
      rating={ratings[index]}
      numberOfReviews={numReviews[index]}
      onClick={() => {}}
    />
  <section className={`mt-5 lg:py-10 px-2 md:px-4 lg:px-8 xl:px-12 ${styles.firstClothSection}`}>
    {FirstClothsItems}
  </section>
  
  </>
  );
});