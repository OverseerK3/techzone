import React from 'react'

const BrandCategories = ({ categories, onCategoryClick, selectedCategory }) => {
  return (
    <div className="flex justify-center items-center gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`py-2 px-4 rounded-md text-white font-semibold ${
            category === selectedCategory ? 'bg-gray-500' : 'bg-gray-400'
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default BrandCategories