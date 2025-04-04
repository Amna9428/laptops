import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProductsSection from '../components/ProductsSection'
import NewArrivals from '../components/NewArrivals'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider';
import { apiClient } from '../utils/apiClient';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await apiClient.get('/api/product/all');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false)
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />

      <section className='py-6 pt-0' id='heroSection'>
        <HeroSlider />
      </section>

      <section className='py-6' id='productsSection'>
        <ProductsSection loading={loading} products={products} />
      </section>

      <section className='py-6' id='newArrivals'>
        <NewArrivals />
      </section>

      <section className='py-6' id='featuredSection'>
        <FeaturesSection />
      </section>

      <section className='py-6' id='footerSection'>
        <Footer />
      </section>

    </div>
  )
}

export default HomePage