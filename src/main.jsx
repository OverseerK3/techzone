import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ReactDOM } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SecondHero from './Components/SecondsPage/SecondHero.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/tshirt1",
        element:<SecondHero/>
      }
    ]
  }
]) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
