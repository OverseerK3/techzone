import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Update the import path
import "slick-carousel/slick/slick-theme.css"; // Update the import path

function SliderMain() {
    const images = [
        "/Slider/s1.jpg",
        "/Slider/s2.jpg",
        "/Slider/s3.jpg",   
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            {/* Ensure the path to your images is correct */}
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>

           
        </>
    );
}

export default SliderMain;
