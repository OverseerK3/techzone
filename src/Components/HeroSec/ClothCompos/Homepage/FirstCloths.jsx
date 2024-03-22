import React from 'react';
import FirstClothSection from './FirstClothSection';
import SecondClothSection from './SecondClothSection';
import ClothCatogaries from '../ClothCatogaries/ClothCatogaries';
import Navbar from '../../../Header/Navbar';
import Footer from '../../../Footer/Footer';
import Reviews from '../../../Customer-Reviews/Reviews';
import Slider from 'react-slick';
import Brands from '../../Brands';
import SecondHero from '../../../SecondsPage/SecondHero';
import Cart from '../../../Cart/Cart';
import SliderMain from '../../Slider/SliderMain';


function FirstCloths() {

    return (
        <>
            <SliderMain/>
            <Brands />
            <FirstClothSection/>
            <SecondClothSection/>
            <Reviews/>
        </>
    )
}

export default FirstCloths;