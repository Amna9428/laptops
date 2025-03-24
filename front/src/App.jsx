import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Filters from './pages/Filters'
import ProductDetailPage from './pages/productDetailPage'
import ShopingCartPage from "./pages/ShoppingCartPage";
import Login from "./pages/Login";
import Signup from './pages/Signup'
import UserOrdersPage from './pages/UserOrdersPage'
import ProtectedRoute from './components/ProtectedRoute'
import ContactPage from './Pages/ContactPage'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/detail" element={<ProductDetailPage />} />
          <Route path='/products' element={<Filters />} />
          <Route path='/cart' element={<ShopingCartPage />} />
          <Route path='/orders' element={ <ProtectedRoute><UserOrdersPage /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App