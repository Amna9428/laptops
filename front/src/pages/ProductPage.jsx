import React, { useEffect, useState } from "react";
import { Spin, message } from "antd";
import ProductsSection from '../components/ProductsSection'
import { apiClient } from '../utils/apiClient';
import Filters from "./Filters";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/api/product/all');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      {/* {loading ? (
        <Spin size="large" style={{ display: "block", margin: "20px auto" }} />
      ) : ( */}

      <div></div>
        <section className='py-6' id='productsSection'>
        <ProductsSection products={products} />
      </section>
      {/* )} */}
    </div>
  );
};

export default ProductPage;
