import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Slider from './Components/HeroSec/Slider/SliderMain'
import Brands from './Components/HeroSec/Brands'
import FirstCloths from './Components/HeroSec/ClothCompos/FirstCloths'
import Footer from './Components/Footer/Footer'
import Reviews from './Components/Customer-Reviews/Reviews'
import SecondHero from './Components/SecondsPage/SecondHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Slider/>
      <Brands/>
      <FirstCloths/>
      <Reviews/>
      <SecondHero/>
      {/* <Footer/> */}
    </>
  )
}

export default App
