import React from 'react'
import Navbar from '../Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>

    )
}

export default Layout