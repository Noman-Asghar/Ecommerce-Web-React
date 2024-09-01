import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './assets/Components/Header.jsx'
import Product from './assets/Components/Product.jsx'

import About from './assets/Components/About.jsx'
import Contact from './assets/Components/Contact.jsx'
import Foter from './assets/Components/Foter.jsx'
import Navbar from './assets/Components/Navbar.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './assets/Components/Home.jsx'

// const router = createBrowserRouter([
//   {
//   path: "/",
//   element: <App/>,
//   children: [{path: "home",element: <Home/>},{path: "about",element: <About/>},{path: "contact",element: <Contact/>},{path: "Product",element: <Product/>}]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product' element={<Product/>}/>


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
    
  </React.StrictMode>,
);
