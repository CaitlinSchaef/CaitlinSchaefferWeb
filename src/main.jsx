import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
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


const site = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/Portfolio',
    element: <Portfolio />
  },
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
