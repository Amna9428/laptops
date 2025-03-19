import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Notfound from "./pages/Notfound";
import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./pages/DashboardLayout";
import Products from "./pages/dashboard/products"
import CreateProductForm from './pages/dashboard/CreateProductForm';
function App() {
 
  return (
    <>
       <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='products' element={<Products />} />
          <Route path="create" element={<CreateProductForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    
        
    </>
  )
}

export default App
