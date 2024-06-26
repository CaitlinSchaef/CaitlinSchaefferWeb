import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import App from './Pages/App'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './NavBar';
// import { Outlet } from 'react-router-dom' this is already at the top 


// If you want to add a footer, do it after the outlet div with <Footer />
function Layout() {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <Navbar />
      <div id='page-content'>
        <Outlet />
      </div>
    </ div>
  )
}
// outlet is all the stuff in the children path 
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
],
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
