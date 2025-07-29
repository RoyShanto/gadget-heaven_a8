import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Root from './components/Root/Root.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Home from './components/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/product/category/:name" element={<Home />} />
          <Route path="/home/product/:id" element={<ProductDetails />} />
          <Route path="/home/product" element={<ProductDetails />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
