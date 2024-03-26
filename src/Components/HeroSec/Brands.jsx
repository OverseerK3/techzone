import React from 'react'
import BrandCategories from './BrandCategories';

const allBrands = [
  { name: 'Gucci', category: 'luxury', src: "/Brands/GUCCI.png", alt: "Gucci Logo" },
  { name: 'Calvin Klein', category: 'fashion', src: "/Brands/CALVIN-KLEIN.png", alt: "Calvin Klein Logo" },
  { name: 'Prada', category: 'luxury', src: "/Brands/PRADA.png", alt: "Prada Logo" },
  { name: 'Versace', category: 'luxury', src: "/Brands/VERSACE.png", alt: "Versace Logo" },
  { name: 'Zara', category: 'fashion', src: "/Brands/ZARA.png", alt: "Zara Logo" },
];

const renderBrandsByCategory = (category) => {
  return (
    <div className="w-full bg-black h-full px-8 py-8 flex-wrap lg:flex justify-center gap-3 items-center">
      {allBrands
        .filter((brand) => category === 'all' || brand.category === category)
        .map((brand, index) => (
          <img
            key={index}
            className={`mt-3 w-[95px] lg:w-auto mx-auto ${
              index === allBrands.filter((brand) => category === 'all' || brand.category === category).length - 1 ? "mb-3" : "mb-4"
            }`}
            src={brand.src}
            alt={brand.alt}
          />
        ))}
    </div>
  );
}

function Brands() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div>
      <BrandCategories categories={['all', 'luxury', 'fashion']} onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      {renderBrandsByCategory(selectedCategory)}
    </div>
  );
}

export default Brands