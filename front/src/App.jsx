import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Filters from './pages/Filters'
import ProductDetailPage from './pages/productDetailPage'
import ShopingCartPage from "./pages/ShoppingCartPage";
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'
import ProductPage from './pages/ProductPage'


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/detail" element={<ProductDetailPage />} />
          <Route path='/products' element={<Filters />} />
          <Route path='/cart' element={<ShopingCartPage />} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/all-products' element={<ProductPage />} />
          
      </Routes>
    </>
  )
}

export default App