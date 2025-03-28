import React from 'react';
import { Button, Rate } from 'antd';
import { ArrowRight } from 'lucide-react';
import NewArrivalImg from "../images/img4.jpg";

const products = [
  {
    id: 1,
    name: 'Gaming Laptops',
    price: '$399.00',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
  },
  {
    id: 2,
    name: 'Student Laptops',
    price: '$379.00',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1584433305355-9cb73387fc61',
  },
  {
    id: 3,
    name: 'Professional Laptops',
    price: '$549.00',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f',
  },
];

const NewArrivals = () => {
  return (
    <div className="p-8 space-y-10">
      <h2 className="text-3xl font-bold mb-4">Latest Additions</h2>

      {/* Banner Section */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={NewArrivalImg}
          alt="High Performance Laptops"
          className="w-full h-96 object-cover rounded-2xl max-h-full max-w-full"
        />
        
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-[#d0d6e396] p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-medium mb-2">{product.name}</h4>
            <Rate disabled defaultValue={product.rating} />
            <p className="text-xl font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center pt-4">
        <Button type="primary" size="large" icon={<ArrowRight />}>View All Products</Button>
      </div>
    </div>
  );
};

export default NewArrivals;
