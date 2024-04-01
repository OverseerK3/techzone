// ProductCard.js

import React from 'react'

const ProductCard = ({
  id,
  name,
  image,
  price,
  rating,
  numberOfReviews,
  starRating,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="bg-white rounded-md">
      <div className="flex flex-col lg:flex-row h-full justify-between">
        <div className="pl-4 pr-6 pt-4 lg:pt-6">
          <Link
            to={`/product/${encodeURIComponent(name.replace(/\s/g, '-'))}-${id}`}
          >
            <div className="text-xs lg:text-xl font-medium text-black">
              {name}
            </div>
          </Link>
          <p className="text-xs lg:text-md text-gray-500 mt-1">
            {price}
          </p>

          <div className="mt-2">
            <div className="flex items-center">
              {(() => {
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                  starsHtml += (
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.3711.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  );
                }
                return starsHtml;
              })()}
              <span className="text-xs lg:text-md ml-2">
                {(() => {
                  let reviews = '';
                  for (let i = 1; i < numberOfReviews % 1000; i++) {
                    reviews += '&#8226;';
                  }
                  return reviews;
                })()}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:h-80 h-60">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;