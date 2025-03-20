import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from "../redux/cartSlice";

const ShoppingCartPage = () => {
  const [couponCode, setCouponCode] = useState('');
  const cart = useSelector(state => state.cartState.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatcher = useDispatch();

  const updateStateQuantity = (id, newQty) => {
    dispatcher(updateQuantity({ id, newQty }));
  }

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 5.00;
  const total = subtotal - discount;

  return (
    <>
      <Navbar />
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold text-blue-800 mb-2">Shopping Bag</h1>
                <p className="text-gray-700 mb-6">{cartItems.length} items in your bag.</p>

                <div className="border-b pb-3 mb-4">
                  <div className="grid grid-cols-12 gap-4 text-blue-900 font-semibold">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total Price</div>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 border-b border-gray-300">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-start space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-32 object-cover rounded-lg border border-gray-300"
                        />
                        <div>
                          <p className="text-gray-600 text-sm">{item.brand}</p>
                          <h3 className="font-semibold text-lg text-blue-900">{item.name}</h3>
                          <div className="mt-2 text-sm text-gray-600">
                            <p>Color: <span className="text-gray-800">{item.color}</span></p>
                            <p>Size: <span className="text-gray-800">{item.size}</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 text-right text-blue-700 font-medium">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="col-span-2 flex items-center justify-center">
                        <button
                          className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-100"
                          onClick={() => updateStateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="mx-2 text-blue-800 font-medium">{item.quantity}</span>
                        <button
                          className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-100"
                          onClick={() => updateStateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-span-2 text-right text-blue-700 font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Coupon Code</h2>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border border-gray-300 rounded p-3 w-full mb-4"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="w-full bg-blue-600 text-white rounded py-3 font-medium hover:bg-blue-700">
                  Apply
                </button>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Cart Total</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Cart Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-3">
                    <span>Cart Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white rounded py-3 font-medium mt-4 hover:bg-blue-700">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
