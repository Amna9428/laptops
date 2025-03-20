import React from 'react';
import { Button, Rate } from 'antd';
import { ArrowRight } from 'lucide-react';
import NewArrivalImg from "../images/new-arrival.png";

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
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
      <div className="grid grid-cols-7 gap-8">
        <div className="bg-gray-100 col-span-3 relative p-8 pb-0 rounded-2xl">
          <div className='absolute left-[40px] top-[40px]'>
            <h3 className="text-2xl font-semibold mb-4">High-Performance Laptops</h3>
            <Button type="primary" icon={<ArrowRight />}>Shop Now</Button>
          </div>
          <div className='h-[540px] overflow-hidden rounded-xl'>
            <img
              src= {NewArrivalImg}
              alt="Samsung Galaxy Note20 Ultra 5G"
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="col-span-4 pt-8 space-y-8">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow">
              <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
                <div>
                  <h4 className="text-lg font-medium py-1.5">{product.name}</h4>
                  <Rate disabled defaultValue={product.rating} />
                  <p className="text-xl font-bold mt-1 py-1">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
          <Button type="primary" size='large' icon={<ArrowRight />} className="w-full">View All Products</Button>
        </div>
      </div>
    </div>
  );
};
export default NewArrivals;