import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, resetCart } from '../redux/cartSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const ShoppingCartPage = () => {
  const [couponCode, setCouponCode] = useState('');
  const cart = useSelector(state => state.cartState.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = useSelector(state => state.authSlice.token);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 5.00;
  const total = subtotal - discount;

  const updateStateQuantity = (id, newQty) => {
    dispatcher(updateQuantity({ id, newQty }));
  };

  const placeOrder = async () => {
    setLoading(true);
    try {
      if (!token) navigate('/login');

      const orderData = { items: cartItems, totalPrice: subtotal, discountedPrice: total };
      const response = await axios.post('http://localhost:5000/api/order/create', orderData, {
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
      });

      if (response.data) {
        message.success('Order placed successfully!');
        dispatcher(resetCart());
        setCartItems([]);
      }
    } catch (error) {
      message.error(error.response?.data?.message || 'Failed to place order');
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">Your Shopping Cart</h1>
            <p className="text-gray-600 mb-6">{cartItems.length} items in your cart.</p>

            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.brand}</p>
                    <p className="text-gray-500">Color: {item.color} | Size: {item.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-3 py-1 bg-red-400 text-white rounded" onClick={() => updateStateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="px-3 py-1 bg-green-400 text-white rounded" onClick={() => updateStateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="text-blue-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>${discount.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-lg border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
            <input type="text" placeholder="Enter Coupon" className="border rounded p-2 w-full mb-4" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-2">Apply Coupon</button>
            <button onClick={placeOrder} className="w-full bg-green-500 text-white py-2 rounded" disabled={loading}>{loading ? 'Processing...' : 'Place Order'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;