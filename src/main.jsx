import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ReactDOM } from 'react'
import { createBrowserRouter, createRoutesFromElements , RouterProvider ,Route} from 'react-router-dom'
import SecondHero from './Components/SecondsPage/SecondHero.jsx'
import Layout from './Components/Layout/Layout.jsx'
import FirstCloths from './Components/HeroSec/ClothCompos/Homepage/FirstCloths.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Brands from './Components/HeroSec/Brands.jsx'
import Aboutus from './Components/About us/Aboutus.jsx'
import ContactUS from './Components/ContactUs/ContactUs.jsx'
import Signin from './Components/SIGNIN/Signin.jsx'
import Paymentinfo from './Components/Payment/Paymentinfo.jsx'
import Done from './Components/Payment/Done.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element ={<FirstCloths/>}/>
      <Route path='/about' element ={<Aboutus/>}/>
      <Route path='/contact' element ={<ContactUS/>}/>
      <Route path='/signin' element ={<Signin/>}/>
      <Route path='cart/' element ={<Cart/>}/>
      <Route path='payment/' element ={<Paymentinfo/>}/>
      <Route path='done/' element ={<Done/>}/>
      <Route path='tshirt1/' element ={<SecondHero/>}/>
      <Route path='brands' element ={<Brands/>}/>
    </Route>
  )
) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
